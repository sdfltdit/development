/**
 * Shared helpers for the free tools: reading numbers from inputs with inline,
 * accessible error messages, and formatting results in British English.
 */

export interface NumberRule {
  min?: number;
  max?: number;
  required?: boolean;
  label: string;
}

function errorFor(input: HTMLInputElement | HTMLSelectElement): HTMLElement | null {
  return document.getElementById(`${input.id}-error`);
}

export function clearError(input: HTMLInputElement | HTMLSelectElement): void {
  input.removeAttribute('aria-invalid');
  const el = errorFor(input);
  if (el) el.textContent = '';
}

export function setError(input: HTMLInputElement | HTMLSelectElement, message: string): void {
  input.setAttribute('aria-invalid', 'true');
  const el = errorFor(input);
  if (el) el.textContent = message;
}

export function readNumber(input: HTMLInputElement, rule: NumberRule): number | null {
  clearError(input);
  const raw = input.value.trim().replace(/,/g, '');
  if (raw === '') {
    if (rule.required !== false) setError(input, `Enter the ${rule.label}.`);
    return null;
  }
  const value = Number(raw);
  if (!Number.isFinite(value)) {
    setError(input, `The ${rule.label} must be a number.`);
    return null;
  }
  if (rule.min !== undefined && value < rule.min) {
    setError(input, `The ${rule.label} must be ${rule.min} or more.`);
    return null;
  }
  if (rule.max !== undefined && value > rule.max) {
    setError(input, `The ${rule.label} must be ${rule.max} or less.`);
    return null;
  }
  return value;
}

export function format(value: number, digits = 2): string {
  return value.toLocaleString('en-GB', { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

export function byId<T extends HTMLElement>(root: ParentNode, id: string): T {
  const el = root.querySelector<T>(`#${id}`);
  if (!el) throw new Error(`Missing element #${id}`);
  return el;
}

export function bindForm(form: HTMLFormElement, run: () => void): void {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    run();
  });
  form.addEventListener('input', run);
  form.addEventListener('change', run);
}
