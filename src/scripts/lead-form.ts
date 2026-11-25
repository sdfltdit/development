type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const messages: Record<string, string> = {
  name: 'Please enter your name.',
  email: 'Please enter a valid email address.',
  country: 'Please tell us which country you are in.',
  product: 'Please choose a product.',
  quantity: 'Please enter the quantity per style as a whole number.',
  files: 'Please enter a full link starting with https://',
  message: 'Please add a little more detail, at least 20 characters.',
  date1: 'Please choose a preferred date from tomorrow onwards.',
  date2: 'Please choose an alternative date from tomorrow onwards.',
  visitors: 'Please enter the number of visitors, from 1 to 10.',
  consent: 'Please agree so we can reply to you.',
};

function errorEl(field: FieldElement): HTMLElement | null {
  const ids = (field.getAttribute('aria-describedby') ?? '').split(' ');
  const errorId = ids.find((i) => i.endsWith('-error'));
  return errorId ? document.getElementById(errorId) : null;
}

function validateField(field: FieldElement): boolean {
  const el = errorEl(field);
  const valid = field.checkValidity();
  field.setAttribute('aria-invalid', String(!valid));
  if (el) el.textContent = valid ? '' : (messages[field.name] ?? 'Please check this field.');
  return valid;
}

async function post(form: HTMLFormElement, attempt = 1): Promise<Response> {
  try {
    return await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });
  } catch (error) {
    if (attempt < 3) {
      await new Promise((resolve) => setTimeout(resolve, attempt * 800));
      return post(form, attempt + 1);
    }
    throw error;
  }
}

document.querySelectorAll<HTMLFormElement>('[data-lead-form]').forEach((form) => {
  const moq = Number(form.dataset.moq);
  const contact = form.dataset.contact ?? '/contact/';
  const status = form.querySelector<HTMLElement>('[data-status]');
  const button = form.querySelector<HTMLButtonElement>('[data-submit]');
  const label = form.querySelector<HTMLElement>('[data-submit-label]');
  const fields = Array.from(
    form.querySelectorAll<FieldElement>('input[required], select[required], textarea[required], input[type="url"], input[type="date"], input[type="number"]'),
  );
  const quantity = form.querySelector<HTMLInputElement>('input[name="quantity"]');
  const idleLabel = label?.textContent ?? '';

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().slice(0, 10);
  form.querySelectorAll<HTMLInputElement>('input[type="date"]').forEach((input) => {
    input.min = minDate;
  });

  fields.forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validateField(field);
    });
  });

  if (moq > 0) quantity?.addEventListener('input', () => {
    const hint = quantity.getAttribute('aria-describedby')?.split(' ')[0];
    const hintEl = hint ? document.getElementById(hint) : null;
    if (!hintEl) return;
    const value = Number(quantity.value);
    hintEl.textContent =
      value > 0 && value < moq
        ? `Our minimum is ${moq} pieces per style. You can still send the request and we will suggest options.`
        : `Our minimum is ${moq} pieces per style.`;
    hintEl.classList.toggle('field__hint--warn', value > 0 && value < moq);
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const invalid = fields.filter((field) => !validateField(field));
    if (invalid.length > 0) {
      invalid[0]?.focus();
      if (status) status.textContent = 'Please correct the highlighted fields.';
      return;
    }
    if (!button || !label || !status) return;
    button.disabled = true;
    button.classList.add('is-loading');
    label.textContent = 'Sending…';
    status.textContent = '';
    try {
      const response = await post(form);
      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; message?: string; redirect?: string };
      if (response.ok && result.ok) {
        window.location.assign(result.redirect ?? '/thank-you/');
        return;
      }
      status.textContent = result.message ?? `Your request could not be sent. Please try again, or use our contact form at ${contact}`;
    } catch {
      status.textContent = `We could not reach the server. Check your connection and try again, or message us on WhatsApp.`;
    }
    button.disabled = false;
    button.classList.remove('is-loading');
    label.textContent = idleLabel;
  });
});
