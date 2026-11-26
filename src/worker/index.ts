/**
 * Cloudflare Worker for sdfltd.com.
 * Static pages are served from the assets binding; this script only handles /api/* routes.
 * POST /api/quote validates a quote request, checks spam protection and rate limits,
 * and emails the request to the sales inbox plus a confirmation to the buyer through Resend.
 */

import { company, contactTopics, quoteProducts, terms, visitPurposes } from '../data/company';
import { gonePaths } from '../data/gone';

interface Env {
  ASSETS: Fetcher;
  QUOTE_LIMITER: RateLimit;
  RESEND_API_KEY: string;
  TURNSTILE_SECRET?: string;
  QUOTE_TO: string;
  QUOTE_FROM: string;
  ALLOWED_ORIGIN: string;
}

interface QuoteRequest {
  name: string;
  email: string;
  company: string;
  website: string;
  country: string;
  product: string;
  quantity: number;
  styles: string;
  target: string;
  timeline: string;
  techpack: string;
  files: string;
  message: string;
}

const MOQ = terms.moq;
const PRODUCTS = new Set<string>(quoteProducts);
const GONE = new Set<string>(gonePaths);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

class InputError extends Error {}

function text(form: FormData, key: string, max: number, required = false): string {
  const raw = form.get(key);
  const value = typeof raw === 'string' ? raw.trim().replace(/\s+/g, ' ') : '';
  if (required && value.length === 0) throw new InputError(`Please fill in the ${key} field.`);
  if (value.length > max) throw new InputError(`The ${key} field is too long.`);
  return value;
}

function longText(form: FormData, key: string, max: number, min: number): string {
  const raw = form.get(key);
  const value = typeof raw === 'string' ? raw.trim() : '';
  if (value.length < min) throw new InputError('Please add a little more detail to your message, at least 20 characters.');
  if (value.length > max) throw new InputError('Your message is too long. Please shorten it or send files by link.');
  return value;
}

function parse(form: FormData): QuoteRequest {
  const email = text(form, 'email', 160, true);
  if (!EMAIL_PATTERN.test(email)) throw new InputError('Please enter a valid email address.');
  const product = text(form, 'product', 60, true);
  if (!PRODUCTS.has(product)) throw new InputError('Please choose a product from the list.');
  const quantity = Number.parseInt(text(form, 'quantity', 8, true), 10);
  if (!Number.isFinite(quantity) || quantity < 1 || quantity > 1_000_000) throw new InputError('Please enter the quantity per style as a whole number.');
  const files = text(form, 'files', 300);
  if (files && !/^https:\/\/\S+$/i.test(files)) throw new InputError('Please enter a full file link starting with https://');
  if (form.get('consent') !== 'yes') throw new InputError('Please agree to the privacy terms so we can reply.');
  return {
    name: text(form, 'name', 100, true),
    email,
    company: text(form, 'company', 120),
    website: text(form, 'website', 200),
    country: text(form, 'country', 80, true),
    product,
    quantity,
    styles: text(form, 'styles', 4),
    target: text(form, 'target', 40),
    timeline: text(form, 'timeline', 40),
    techpack: text(form, 'techpack', 60),
    files,
    message: longText(form, 'message', 4000, 20),
  };
}

interface VisitRequest {
  name: string;
  email: string;
  company: string;
  country: string;
  visitors: number;
  date1: string;
  date2: string;
  purpose: string;
  message: string;
}

const PURPOSES = new Set<string>(visitPurposes);

function futureDate(form: FormData, key: string, required: boolean): string {
  const value = text(form, key, 10, required);
  if (!value) return '';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new InputError('Please choose dates from the calendar.');
  const date = new Date(`${value}T00:00:00Z`);
  const today = new Date();
  const todayUtc = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
  if (Number.isNaN(date.getTime()) || date.getTime() <= todayUtc) throw new InputError('Please choose visit dates from tomorrow onwards.');
  if (date.getTime() > todayUtc + 366 * 86_400_000) throw new InputError('Please choose visit dates within the next year.');
  return value;
}

function parseVisit(form: FormData): VisitRequest {
  const email = text(form, 'email', 160, true);
  if (!EMAIL_PATTERN.test(email)) throw new InputError('Please enter a valid email address.');
  const visitors = Number.parseInt(text(form, 'visitors', 2, true), 10);
  if (!Number.isFinite(visitors) || visitors < 1 || visitors > 10) throw new InputError('Please enter between 1 and 10 visitors.');
  const purpose = text(form, 'purpose', 60, true);
  if (!PURPOSES.has(purpose)) throw new InputError('Please choose the purpose of your visit.');
  if (form.get('consent') !== 'yes') throw new InputError('Please agree to the privacy terms so we can reply.');
  const raw = form.get('message');
  const message = typeof raw === 'string' ? raw.trim() : '';
  if (message.length > 2000) throw new InputError('Your message is too long.');
  return {
    name: text(form, 'name', 100, true),
    email,
    company: text(form, 'company', 120),
    country: text(form, 'country', 80, true),
    visitors,
    date1: futureDate(form, 'date1', true),
    date2: futureDate(form, 'date2', false),
    purpose,
    message,
  };
}

interface ContactRequest {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
}

const TOPICS = new Set<string>(contactTopics);

function parseContact(form: FormData): ContactRequest {
  const email = text(form, 'email', 160, true);
  if (!EMAIL_PATTERN.test(email)) throw new InputError('Please enter a valid email address.');
  const topic = text(form, 'topic', 60, true);
  if (!TOPICS.has(topic)) throw new InputError('Please choose what your message is about.');
  if (form.get('consent') !== 'yes') throw new InputError('Please agree to the privacy terms so we can reply.');
  return {
    name: text(form, 'name', 100, true),
    email,
    company: text(form, 'company', 120),
    topic,
    message: longText(form, 'message', 4000, 20),
  };
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c);
}

async function verifyTurnstile(env: Env, token: string, ip: string): Promise<boolean> {
  if (!env.TURNSTILE_SECRET) return true;
  if (!token) return false;
  const body = new FormData();
  body.append('secret', env.TURNSTILE_SECRET);
  body.append('response', token);
  body.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

async function sendEmail(env: Env, payload: Record<string, unknown>, attempt = 1): Promise<void> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (res.ok) return;
  if (attempt < 3 && (res.status === 429 || res.status >= 500)) {
    await new Promise((resolve) => setTimeout(resolve, attempt * 500));
    return sendEmail(env, payload, attempt + 1);
  }
  throw new Error(`Email provider returned ${res.status}`);
}

function internalEmail(q: QuoteRequest, ip: string, country: string): string {
  const rows: [string, string][] = [
    ['Name', q.name],
    ['Email', q.email],
    ['Brand / company', q.company],
    ['Website', q.website],
    ['Country', q.country],
    ['Product', q.product],
    ['Quantity per style', String(q.quantity) + (q.quantity < MOQ ? ' (below MOQ)' : '')],
    ['Styles', q.styles],
    ['Target FOB', q.target],
    ['Timeline', q.timeline],
    ['Tech pack', q.techpack],
    ['File link', q.files],
    ['Request from', `${country} (${ip})`],
  ];
  const table = rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><th align="left" style="padding:4px 12px 4px 0">${escapeHtml(k)}</th><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`)
    .join('');
  return `<h2>New quote request</h2><table>${table}</table><h3>Message</h3><p style="white-space:pre-wrap">${escapeHtml(q.message)}</p>`;
}

function confirmationEmail(q: QuoteRequest): string {
  const below =
    q.quantity < MOQ
      ? `<p>You mentioned ${q.quantity} pieces per style. Our minimum is ${MOQ} pieces per style, so we will reply with the options that make sense for your quantity.</p>`
      : '';
  return [
    `<p>Hello ${escapeHtml(q.name)},</p>`,
    `<p>Thank you for your request. A merchandiser at ${company.brandName} will reply within ${terms.quoteHours} hours with a written quote or a short question.</p>`,
    below,
    `<p><strong>Please note:</strong> we only email from addresses ending in @${company.officialDomain}, and we only accept payment to the company bank account named on our proforma invoice. If anyone asks you to pay elsewhere, contact us first.</p>`,
    `<p>Kind regards,<br>${company.brandName}<br>https://${company.officialDomain}</p>`,
  ].join('');
}

function visitInternalEmail(v: VisitRequest, ip: string, country: string): string {
  const rows: [string, string][] = [
    ['Name', v.name],
    ['Email', v.email],
    ['Brand / company', v.company],
    ['Country', v.country],
    ['Visitors', String(v.visitors)],
    ['Preferred date', v.date1],
    ['Alternative date', v.date2],
    ['Purpose', v.purpose],
    ['Request from', `${country} (${ip})`],
  ];
  const table = rows
    .filter(([, value]) => value)
    .map(([k, value]) => `<tr><th align="left" style="padding:4px 12px 4px 0">${escapeHtml(k)}</th><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`)
    .join('');
  return `<h2>New factory visit request</h2><table>${table}</table>${v.message ? `<h3>Message</h3><p style="white-space:pre-wrap">${escapeHtml(v.message)}</p>` : ''}`;
}

function visitConfirmationEmail(v: VisitRequest): string {
  return [
    `<p>Hello ${escapeHtml(v.name)},</p>`,
    `<p>Thank you for asking to visit ${company.brandName}. We will reply within ${terms.replyHours} working hours to confirm a date and time, and send directions to our office in ${company.address.locality}.</p>`,
    `<p>Your preferred date: ${escapeHtml(v.date1)}${v.date2 ? `, or ${escapeHtml(v.date2)}` : ''}.</p>`,
    `<p><strong>Please note:</strong> we only email from addresses ending in @${company.officialDomain}.</p>`,
    `<p>Kind regards,<br>${company.brandName}<br>https://${company.officialDomain}</p>`,
  ].join('');
}

function respond(request: Request, status: number, body: { ok: boolean; message?: string; redirect?: string }): Response {
  const wantsJson = (request.headers.get('Accept') ?? '').includes('application/json');
  if (wantsJson) {
    return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });
  }
  if (body.ok) return Response.redirect(new URL(body.redirect ?? '/thank-you/', request.url).toString(), 303);
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Request not sent – ${company.brandName}</title></head><body style="font-family:system-ui,sans-serif;max-width:40rem;margin:4rem auto;padding:0 1rem;line-height:1.6"><h1>Your request was not sent</h1><p>${escapeHtml(body.message ?? 'Something went wrong.')}</p><p><a href="/get-a-quote/">Go back to the quote form</a> or message us on WhatsApp.</p></body></html>`;
  return new Response(html, { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
}

type Guarded = { ok: true; form: FormData; ip: string; country: string } | { ok: false; response: Response };

async function guard(request: Request, env: Env, formType: string): Promise<Guarded> {
  const origin = request.headers.get('Origin');
  if (origin && origin !== env.ALLOWED_ORIGIN && origin !== new URL(request.url).origin) {
    return { ok: false, response: respond(request, 403, { ok: false, message: `This form can only be sent from ${company.officialDomain}.` }) };
  }
  const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown';
  const { success } = await env.QUOTE_LIMITER.limit({ key: `${formType}:${ip}` });
  if (!success) return { ok: false, response: respond(request, 429, { ok: false, message: 'Too many requests. Please wait a minute and try again.' }) };

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return { ok: false, response: respond(request, 400, { ok: false, message: 'The form could not be read. Please try again.' }) };
  }

  const trap = form.get('fax');
  if (typeof trap === 'string' && trap.length > 0) return { ok: false, response: respond(request, 200, { ok: true, redirect: '/thank-you/' }) };

  const token = form.get('cf-turnstile-response');
  try {
    const human = await verifyTurnstile(env, typeof token === 'string' ? token : '', ip);
    if (!human) return { ok: false, response: respond(request, 400, { ok: false, message: 'Please complete the security check and send the form again.' }) };
  } catch {
    return { ok: false, response: respond(request, 503, { ok: false, message: 'The security check is unavailable right now. Please try again in a minute.' }) };
  }

  const country = (request as Request & { cf?: { country?: string } }).cf?.country ?? 'unknown';
  return { ok: true, form, ip, country };
}

async function deliver(request: Request, env: Env, internal: Record<string, unknown>, confirmation: Record<string, unknown>, redirect: string): Promise<Response> {
  try {
    await sendEmail(env, internal);
  } catch {
    return respond(request, 502, { ok: false, message: `We could not send your request. Please try again in a few minutes or message us on WhatsApp.` });
  }
  try {
    await sendEmail(env, confirmation);
  } catch {
    return respond(request, 200, { ok: true, redirect });
  }
  return respond(request, 200, { ok: true, redirect });
}

async function handleQuote(request: Request, env: Env): Promise<Response> {
  const checked = await guard(request, env, 'quote');
  if (!checked.ok) return checked.response;
  let quote: QuoteRequest;
  try {
    quote = parse(checked.form);
  } catch (error) {
    return respond(request, 400, { ok: false, message: error instanceof InputError ? error.message : 'Please check the form and try again.' });
  }
  return deliver(
    request,
    env,
    {
      from: env.QUOTE_FROM,
      to: [env.QUOTE_TO],
      reply_to: quote.email,
      subject: `Quote request: ${quote.product}, ${quote.quantity} pcs/style – ${quote.company || quote.name}`,
      html: internalEmail(quote, checked.ip, checked.country),
    },
    { from: env.QUOTE_FROM, to: [quote.email], reply_to: env.QUOTE_TO, subject: `We received your request – ${company.brandName}`, html: confirmationEmail(quote) },
    '/thank-you/',
  );
}

async function handleBooking(request: Request, env: Env): Promise<Response> {
  const checked = await guard(request, env, 'booking');
  if (!checked.ok) return checked.response;
  let visit: VisitRequest;
  try {
    visit = parseVisit(checked.form);
  } catch (error) {
    return respond(request, 400, { ok: false, message: error instanceof InputError ? error.message : 'Please check the form and try again.' });
  }
  return deliver(
    request,
    env,
    {
      from: env.QUOTE_FROM,
      to: [env.QUOTE_TO],
      reply_to: visit.email,
      subject: `Factory visit request: ${visit.date1}, ${visit.visitors} visitor(s) – ${visit.company || visit.name}`,
      html: visitInternalEmail(visit, checked.ip, checked.country),
    },
    { from: env.QUOTE_FROM, to: [visit.email], reply_to: env.QUOTE_TO, subject: `Your factory visit request – ${company.brandName}`, html: visitConfirmationEmail(visit) },
    '/thank-you/',
  );
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  const checked = await guard(request, env, 'contact');
  if (!checked.ok) return checked.response;
  let msg: ContactRequest;
  try {
    msg = parseContact(checked.form);
  } catch (error) {
    return respond(request, 400, { ok: false, message: error instanceof InputError ? error.message : 'Please check the form and try again.' });
  }
  const internal = `<h2>New website message</h2><p><strong>${escapeHtml(msg.topic)}</strong> from ${escapeHtml(msg.name)}${msg.company ? `, ${escapeHtml(msg.company)}` : ''} (${escapeHtml(msg.email)}), sent from ${escapeHtml(checked.country)}.</p><p style="white-space:pre-wrap">${escapeHtml(msg.message)}</p>`;
  const confirmation = `<p>Hello ${escapeHtml(msg.name)},</p><p>Thank you for your message. A member of our team will reply within ${terms.replyHours} working hours.</p><p>We only email from addresses ending in @${company.officialDomain}.</p><p>Kind regards,<br>${company.brandName}<br>https://${company.officialDomain}</p>`;
  return deliver(
    request,
    env,
    { from: env.QUOTE_FROM, to: [env.QUOTE_TO], reply_to: msg.email, subject: `Website message: ${msg.topic} – ${msg.company || msg.name}`, html: internal },
    { from: env.QUOTE_FROM, to: [msg.email], reply_to: env.QUOTE_TO, subject: `We received your message – ${company.brandName}`, html: confirmation },
    '/thank-you/',
  );
}

const routes: Record<string, (request: Request, env: Env) => Promise<Response>> = {
  '/api/quote': handleQuote,
  '/api/booking': handleBooking,
  '/api/contact': handleContact,
};

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    const handler = routes[url.pathname.replace(/\/$/, '')];
    if (handler) {
      if (request.method !== 'POST') {
        return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
      }
      try {
        return await handler(request, env);
      } catch {
        return respond(request, 500, { ok: false, message: `Something went wrong on our side. Please try again in a few minutes or message us on WhatsApp.` });
      }
    }
    const path = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
    if (GONE.has(path)) {
      const page = await env.ASSETS.fetch(new Request(new URL('/__gone__/', url), { method: 'GET' }));
      const headers = new Headers(page.headers);
      headers.set('X-Robots-Tag', 'noindex');
      headers.delete('Content-Length');
      return new Response(request.method === 'HEAD' ? null : page.body, { status: 410, headers });
    }
    if (url.pathname.startsWith('/api/')) {
      return new Response('Not found', { status: 404 });
    }
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
