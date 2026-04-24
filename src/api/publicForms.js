import { API_BASE_URL } from '../config';

function joinUrl(base, path) {
  const b = (base || '').replace(/\/+$/, '');
  const p = (path || '').replace(/^\/+/, '');
  return `${b}/${p}`;
}

async function parseError(res) {
  const contentType = res.headers.get('content-type') || '';
  const payload = contentType.includes('application/json')
    ? await res.json().catch(() => null)
    : await res.text().catch(() => '');
  const msg =
    (payload && payload.message) ||
    (typeof payload === 'string' && payload) ||
    `Request failed (${res.status})`;
  const err = new Error(msg);
  err.status = res.status;
  return err;
}

/**
 * @returns {Promise<{ turnstileSiteKey: string }>}
 */
export async function fetchClientConfig() {
  if (!API_BASE_URL) {
    return { turnstileSiteKey: '' };
  }
  const res = await fetch(joinUrl(API_BASE_URL, 'public/client-config'), {
    method: 'GET',
    headers: { Accept: 'application/json' }
  });
  if (!res.ok) {
    return { turnstileSiteKey: '' };
  }
  return res.json();
}

/**
 * @param {FormData} formData
 */
export async function postMembershipForm(formData) {
  if (!API_BASE_URL) {
    throw new Error('API is not configured (REACT_APP_API_BASE_URL).');
  }
  const res = await fetch(joinUrl(API_BASE_URL, 'public/forms/membership'), {
    method: 'POST',
    body: formData
  });
  if (!res.ok) throw await parseError(res);
  return res.json();
}

export async function postSupportForm(body) {
  if (!API_BASE_URL) {
    throw new Error('API is not configured (REACT_APP_API_BASE_URL).');
  }
  const res = await fetch(joinUrl(API_BASE_URL, 'public/forms/support'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body)
  });
  if (!res.ok) throw await parseError(res);
  return res.json();
}

/**
 * @param {FormData} formData
 */
export async function postDonationForm(formData) {
  if (!API_BASE_URL) {
    throw new Error('API is not configured (REACT_APP_API_BASE_URL).');
  }
  const res = await fetch(joinUrl(API_BASE_URL, 'public/forms/donation'), {
    method: 'POST',
    body: formData
  });
  if (!res.ok) throw await parseError(res);
  return res.json();
}
