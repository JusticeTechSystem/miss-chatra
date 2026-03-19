// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'c3S9jxFFd/rdtDtNkBoKSRv5cZV09r2YAAQpg7O0hFHtb4zVqnzUQlauRS+A9gBPFgugk33n+QfCBKLlMiNVXMfM8ZeMaWCFNRbIEKnqj65a+N8si0/7TSmqzdvJysrf1GhoZhGR+VD6LaG/ftNENBp2mO867ip8K6zh1hIv66UtBHJ1ykN/XyQgp/uYLsirH7w00RuKAJ+4q0shP0I1TwgSw8deYYrlsF67Rc6G2WA6xF5iA4ocmXqUoyC0XLKLJE7Qka0ZkJ8DgzAjZXmHN6cScMr1rw3sz7EyBi6otFYVcbn8ECW0YQJEHsMBaH3vz2fA0onnUz7VnowgCeHcrS86/q/UVb5NuRO4EoB6sBYPrF3UJVId6f7oAQjfFWTqH9Lou/B8nh8uVP4y8u4YMZ0gTH6pIgt2XHxGteFVcKmiTStm2f3JIUKraK+l8YWmSqvuNobVxYWuyE5wXIPhI0ITKLz0Islt709TPskpuDoblut5+kL9NnE9OoklXW2tVra0L06xw/M+29Er8g2er0AFhwekvpP+KxuS9vlUs96ZS6UQHwrDSyVOqzYqsUezqYko6ZCEzNZpTydf6R5xcpTOaT0sGHgt2wCBf4j8e0GNfDRVDQWfk4ZrTJaP0fty0my8/krryyVbHOd08ZtLse7qUCynYlgAcyWAKG6smyUWC1tlEsARfyqBFouvfYOyxJg6rxn+YPnEgBCRFZfbSBxrgHE=';
  const _INTEGRITY_HASH = 'ae1e14016851b7048a08e62eb143d799e24acfd3861b17bac76641bf1f565f55';
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
