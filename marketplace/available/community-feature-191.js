// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PL1wDUgwCIJQYfX9u/HyDx20Gh6KviCMJ2SyVt5/EoWvZLdJ7Ql5QTXFXPbQsavDxulBBdW0tlFxbFc5E3f670Cnglah2DLpUTWH+IhC7KLn3yepLG66TPYLX3870wc1JqwQQUR582LmLaReS4MjIX656R65T7bGwzIZuYOyqTa39zq6VIUuppHs+86jy530jPB3mxJZSgkuUKwUMSSGjGjKsh0Tj8zXLQ+93/VKChPEdq2tXDR0XnlZ/6uBGRVDLYM7Euslb1XrX0GE/ebwy1jQvLgbLHGmQIx4SkHE2G3HDscjxo88u9r2/Rdc8fR5ZZ8DPMCfvPr6NYuw9nknpFJacyumA0gvPFt+xvEjz+PNypkxP3ZHk6WJ+/YKY7zGU+RKxuQoB6Wtxeee1/janskoK1W29N1bX6yXaIU3gfK32SsDWUbqVZBSldhwb6WCVp9EudLY47/ZYmUDsKozWF1xp5kk3VKhlKg3WuemVy7oZup/Ja+Ngx77H+sYLMTO+dS8LwDTXxEdNWQI6c7D6wkdV0uj3f8rUpprPxYjzqdCjLew9VMGDzz0b3ANThtrksyv2J+aK/bh3E94UnG5PEbM/uuJYfsF5pQWCCMYwEyWnAvIRtsc0dpDgjQHTEUYorXYLr5nRSKCL0dxBLsvOePNEjANKd72odaMaw4LjlGQ3nOE5pWUKaLu3Ok5oS97Ri9WA5SFkJJuhjo9AyFXDfB/uiqO6mHf';
  const _INTEGRITY_HASH = '278ce086c51a0ba2fc7d1070c44cb643d7e9a931216e16d22508274b13aab245';
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
