// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BHv0L5W//0BfSaD1o6TPm66COpARywwV2N1RPDy96zFI6S1aF+EqUeiDi+gupv1LiESE6bwqXsZLfkSyBUA+RgZ/Ex9QdJcAA4iY7GbsVifa/mZwIO2zJ1HceacNF69Opmlmj5Wsc0ov2aM5YrsfOhqGmjeHTKgFnqGGD4d3hEBJ6XwhwOl0vhsq2/iIUQF2dwdxNEOjQMvLf3HMfGDUpnPcfudUoQ0+mv1++nUJH4GTD+hQPvT4d3QTNDzIChOFDwsrNHowa564cCZ3cXTMrENSHL9Jq2zevw7y1qZNH9YQNlH5HAM8C7ZMSWGZX1QBjRfckEqlfXCAe+TMQLiudQlpfGEC+rUYvZ/w5d2LKfFafQOw+tbZW7GdO7LCTzyKZ4/es0NDxOAPNTZVfmkAtjX7QIfgixOvsHMCnaGfi2OhgsTp1f25iuHTGpi6HKcKXxhOin/OSw94SLRgAaaKLV6nMmqxtUISGtPKWwnaflO9ErZJXzd7faD8t5xHOPSZgM+3Ob91nMy75bQ7DCqbnlJthhh1OZiuAIR84Gkb5YQB7edzrzC2ZUw0JIIIV8aCxSKC/0FFiH5Rp4rbQ3/eR+CuImKSQSnEM2elN0/owHMaXEciFnylI00llONYiKIbzgUxHPGxb/cyxzlbTtXazV0TefKauBhIWo9csxsy1VIjfjmcMF/syu/9MWMOF+iGDMHYdBVysORHT8Wh4CKKj+EuQpxUEfuwYzB1+2m78cUsTfJFa8yiOC3Qb6XyI4xKWedVEhpMN1IXC6A3iXLIcC9QU3np9lJ0GRgfwaXcvFnNUUApcamsJJQFAk5Reloqp311HWA/wahX+dfGKsZzwunTOxV4WKesJRfkryE49hdCd+Q+OftVQWjfWGoQxxcJkb8oRXrMT5/kdv04Ab7JgJ214lA1UDFsJFk9M9eDUzBqTLyoRorj5xG4RaRzuNiP6mPdZSRA2Sdk21FLOO3F+8XYBxkwX0WjzA8fYYlx9DpAQNNh/R5oTNMBMxq0eE0xX0gLI2aNUOczeiUVqpmctPRksnRJKSKh7IVioEPFybdsfqH82dMVDYKTWMJB5w4lWnM7w9oduLb0M7o=';
  const _INTEGRITY_HASH = '158319fb51e7b43c48f23a976b101b1a02299ba16722701f42fdc3bd9a0bf5c6';
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
