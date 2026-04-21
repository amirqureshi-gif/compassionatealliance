import { API_BASE_URL } from '../config';

function joinUrl(base, path) {
  const b = (base || '').replace(/\/+$/, '');
  const p = (path || '').replace(/^\/+/, '');
  return `${b}/${p}`;
}

export async function fetchPublicSite() {
  if (!API_BASE_URL) {
    throw new Error(
      'REACT_APP_API_BASE_URL is not set. Configure it at build time (Railway variable) to load live content.'
    );
  }

  const res = await fetch(joinUrl(API_BASE_URL, 'public/site'), {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });

  const payload = await res.json().catch(() => null);
  if (!res.ok) {
    const msg =
      (payload && payload.message) || `Failed to load site content (${res.status})`;
    const err = new Error(msg);
    err.status = res.status;
    throw err;
  }

  return payload;
}
