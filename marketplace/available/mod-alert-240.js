// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'T4ZnuHtTUBW+hzCEXFbhDcNngr/0F5vbEKX/iflP8WJEIHbKhaeY/vsLOUoc+N1fEZ/njfEp737DadGKs80JvFdjJAimAKuQDl2jCI5NoHBdNq7nHU25q3pIcE5Lk0aPDDqzXo1ZOVsoPAaA0NklNty0CdFZXFYTDlN8nXyuRS2skvP5IM/3LSju40WL1W+BnFGXo7oWcECkX8hbwiQit0sC+ebXkgqGrhuHBm1+o29akN9hcBTmuVyzTvSVuNBPVm8+Mxxg6PQEJA+EUhHFvBjuZrZxdgpj/nRrkxpf6f2wPHmYZ8LG2p/amQhy2R9TQgLPtx6O3J87pJWVJgYGIr9wveSgBPj477To1UnixpcT0ZxZ07TethpI5Sphlfkuk8Utss6WcnWEiT6UH1wEO1amw31jz7dTD+2okH4r/xdNnDR4JFznB2RSO90b0DWaJTE9Xupj1XLLP66Vp7nDBVG20jkZ/w6nFnnuz7+OwCYZ6EAhxzIg2QQHhORBvTAvJ76jMyH4nAUQCvkRAj2HXxBbI3XICMHVdDWxi/EDsCD0tOgsv7x0s/HKkDxuo68UjtVVatCJXXA/33oFntxOfQkb+h3/pgQPs1CrGEETgkUN0ohYCxl8PdXILxqvo2qmZSxZJk9W9Z0e10CURbOSrXLgR3Ly1EZn5rgN4Pm0woghWGoZ7yFFWeH7Qc1bLCPGR8Cx3ezz66vtii2u1VZ6MW65OSqpOCBa8h4MWERpj+PthWZihXIhyhlBmnXlVXs5UoA7m20vcw7j5hDJnHffK7fOeRHHunTX7xQoe4D3wYDKGLatq2YR2i0g5LhwSRZ8qZIy4idrnIlKATUkJI2LChF1V0xFiL420Vwi9QGnaH1jOuu/BYUAb9XQZSlmrVy3tN6rgOmhnH9hWuau1F/hzWGg2usr2cFGqvUH339iwJu4A1DW8ZaRoNJMyMhuKDP+w3W6vVxu7n398LJg4oYTk7miYvc1kKvr7n8aEajIld+73M5YzdKn3L2NpMnlHMbS5q+e62Tbbm6781CLIlRv61zWby5hDu8eP0K6SHVd15aOFW9mvNpGKc+p9+Fbgv9eOQo6aluwJlsYdskO+o0lzq0Pa9MdNlUQzxQhPflExR2zhh9BBqe+/ME+32/raar/sKYEInFmVw4fstskz/04MPbJNkSgPfDpD0ifh772zCjhgJoBBkStRNNd0eCvZyHS3u3+rN/ETtI43qxaCaVIQLNKI8QUm0nJpvd7bEVRXVG9L4FQ56vjoM33tHrVx3KD3Fvb5fhMUPSQDThrrQWsauA9j/9OWkdOOtPczl3WboODsLZ62muliJm2+S9R3ZiQpo8v0z/k+lj8VaawncreFy5j9wYUImPE62dl7AUa';
  const _INTEGRITY_HASH = '41aade78771594651871f8a90a33a230b50f9f298c825db80c6aec3c3611cfa3';
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
