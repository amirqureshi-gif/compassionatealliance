import React, { useEffect, useRef } from 'react';

import './TurnstileBox.css';

let scriptPromise;

function loadTurnstileScript() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Could not load security check script'));
    document.body.appendChild(s);
  });
  return scriptPromise;
}

/**
 * Renders Cloudflare Turnstile when siteKey is non-empty. Callback provides token; empty string on expire/error.
 */
export default function TurnstileBox({ siteKey, onToken }) {
  const ref = useRef(null);
  const widgetId = useRef(null);
  const cb = useRef(onToken);
  cb.current = onToken;

  useEffect(() => {
    if (!siteKey) return undefined;

    let cancelled = false;

    (async () => {
      try {
        await loadTurnstileScript();
      } catch {
        if (cb.current) cb.current('');
        return;
      }
      if (cancelled || !ref.current || !window.turnstile) return;
      const id = window.turnstile.render(ref.current, {
        sitekey: siteKey,
        callback: (token) => {
          if (cb.current) cb.current(token);
        },
        'error-callback'() {
          if (cb.current) cb.current('');
        },
        'expired-callback'() {
          if (cb.current) cb.current('');
        }
      });
      widgetId.current = id;
    })();

    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetId.current);
        } catch {
          /* ignore */
        }
        widgetId.current = null;
      }
    };
  }, [siteKey]);

  if (!siteKey) return null;

  return <div className="turnstileBox" ref={ref} />;
}
