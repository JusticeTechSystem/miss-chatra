// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '66v6H6suN8bZ98yjmXn3gz/FllhAd+5X33JO4UD2CFuuMkuSVlBbKKVXcTUoPOussjvCVI49lMXkfvigrhuhhuURvbYGNsCEZ7McyOamvUOteBO2mNmmAT1CwXmk/6VbgqsUwDgMpxLS1cbzcGadqoaz1HwBGzpR0bToyBHkJpBdz7YxAQVkIcobN3Al/YthoTYTyzQjfnjL+hl4DkFi/NKNlnKGz4WG6DocKBshwCplVKIuTkQGLNovzbCPw2aFIVDRa0PEOfKlLWxKoKcRPcI0abpgG5WDExfx0C4jGuBiilBNbOBh7a/pjKxRE0E2ARBESUN6DPwPx+MtKWiVNEZd6cZwyLF+JBqgRKM1hCjwpVXyPDjAJ1cud9IZyBEHGuWGg0+KqtzIYu4HJHTYXk6mR3yXRKRYBsm7R+QcPaREnWovbGNIlFyX40lYoAuy4eLO3a+2g9MMlt96RG7kJSyfXWWh58NQj9E34vqWRGETtJ6hPhC5Cx+JDaWAhkV1BiVSdf3pPXlbwoFE9GCdK/6cnuWgmnbA+Mu07uHQU9J7jnc+rkb+08GSYXigAxXlhC53HbDDVPoSu5nt6ppLSOOj3mR891xlQo2kZoXKLuA+SkOD52fJwTN5cvifjP3HTj6Pm/Z3gWmRxzJtkWtMPwP5uKB6OlLLgwY7X1r2p325hm+XSV3wI7qRCLPvTd8S6qN42A2S8uZy+WyguJY716H7WwmusCbFcPb+BXqbB8Y5UjNf5c6xer6wEkEJff1uAPfeN6E9Av3kgdtAyvzDHumhCJwkmmYhC/v+nhzZ6mCWkBz2/fn6OW2FuMAGoFPOWQOBimeIuYRY5MYNfEK/rubSxOqGfxg/8BOTWecX0WUBlqzcbyBnAL+IsA8Smj7Ub1fI7CszYJGp0rerM88MvcXq9fPWOw1hOxsvgX3QSEyhEYZVQqcuZeLdq9240YEhTv10jBYP6D9jaJNKWC5BuPl5+mSVB3Dt7cOQD2W6OzjSboGZQqCa9C4zJm1IHYGAaV/gm6bbdtG84cRqcMO566ek1nj5cph3mWBB/A3NdeclovtVr88YhO9vnB2IurbQCzzeJfyIN2fjpcrEuVFa2vf9c2Tl6GfhK+eMCMLYKGtm7cv5RFWq0OYxr7yxHhL0PHyXPKabKHY/rP98o9BG5M2A2gOGB3Kj+I0uKrqsbHHw0XL7lIoH8h6UifFhUOMwBwUnvYhRGNvk7093Ayly+S5OMauSRGniNEzuiXg/ZnikLXKThibdPr+XOtXyJcbLAdvuJfpVbiwLgcBaxvqqyUFAyH9ZsqHZEby/uPrGWCcm4FGFbVKuchfiOpDoVtoiPGTXuD2ZsxdGRlABR5/XEPV9virliMD7/JiBm3+crez/j/9fb/Mk7Q==';
  const _INTEGRITY_HASH = '14621e6e0254dc30340538f722c30bf59097ee177a43e14ea61dae9eafc247b9';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
