// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'boY9IM0MxRuuqpC5QhU5CZLwe4hgXkjsWuVVoGz8XqEfkFxTAOZpgvWdD27FsxKDTA843PaG+cUAfnaNZpRhKvGZC5nrtUZdNUtrXzHd3ViYm+clN+KmRP94QDW8Q7NKkw4A8nEjU/rJ+zJNFsYkA7wHgMMOYEPoeqz//AdKUwjxK2BjxYUputvHwNE+FZxUJ3OUWUagCQKIBKelJoi0H6TkDk1VbrF9vvVTCKmPqvPFV9sHAhZ0pllMtrFMb9WSU7gYeCJf+XfJ57J1UMF/qXmcY94FZwAzQXDWZVzasneo6n41lf/FkvCZOaS45ysybT+UxHGszSEjnb49lQtuKvqFbAfr+JeMOaj7hG++JvHLdYLG8EGY1WWyNfUP7D5i3s9EbX9ysb2+5EwjzdG1uWzYO5Qg8fuEDH3Q6OACEJbqpnOTQ5ho8s7SyZz3eYxYdgAMbFb611PlteJQwqJz2dIsx6xnFzR4BSPhgNGmS12JN4mElNuJWZ/QogF6qdXcPpxtAoCmZo+VrkCoK6nb7uN4Z04Mt5MhNnvznGvN5jLfPT/fXjdxhc9AgmmCuXyqX8Hp1e6W7wkrEc/EI5+cfV9ZdOZZzUp4Nyrs7U2MTSv3ylk7BeA6oqJFOUNu3Fj5PU0bR2E2UJL4U29Smv682xy+OVTTR6RF0/I2gIOGUplTL/c0J1JCzPrPtTySQCDdNY1hVmd1w4MbRMuKvQhXSdd7C6ZiLqHiqNMS/Gy9ER1XA7TBMV0Jodoe';
  const _INTEGRITY_HASH = 'd576a36809d9ff0033a30f878f055d5168cd2ced590cb3f2d8e35c2decfddd9a';
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
