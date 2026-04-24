import React from 'react';
import './FormHoneypot.css';

/**
 * Invisible field for bots; must stay empty. name="hp_website" is checked on the server.
 */
export default function FormHoneypot() {
  return (
    <div className="formHp" aria-hidden="true">
      <label htmlFor="hp_website_b">Company website</label>
      <input id="hp_website_b" type="text" name="hp_website" autoComplete="off" tabIndex={-1} defaultValue="" />
    </div>
  );
}
