// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4emq14BYujRv0l8ec9aCyYSk34lhqOUmNHsv9qz213hjjk4WIGohEzbf6O/7JA1Dbmt6nP7j2WjHq6/dP2iGHi+XWBAsT3yT6532ftRuEqv6VSs9+eyBqYxoaQjA6wWpsne/Ur/D5wYimuLD5BlT8vQVQkZfrJ8JbUOPP7UvOMal2SXAk8AxAku2rO2DiHvNuMXgcHFRs+XNnuv3cHdi4uUfsuKuHI4GFZ2bTzW0OuKesrGUQexR6L/VCckBpPl5jVL6L/bAewVGYYViMCTxTQoxsVFkQAXIt5n/ZYkDOrSShB3wUKxzQydV8h1c9DiRfZWde4TIkLXapDo+HSkwIxK+8ly/vnO+1rBLelMCKtpgooQhRi1ToR9uz60VKm+fQBX4S0Z+XYTKhb2/OtWbGZzP/YTB3FD+0mLlWvdwa7H9IDnRmxo+mwBrZBoyHO5Rukivd5xXUwE+kiGKR7QB3wx8C25AWho3Y5bDyCD37pcQmCMmp76QLYzI4P4mgtw+ZzzCGDzeLAFdkWC7W/OrmhGoLjzH3C6N+jmcVF9jVKYgbZzO6XC1nGMGtwqT0WSCkw9RZAOZL3n/MGn/DfBNwDDaVhZLT4bvAvgGgziS4BVex0dSWb/XA9Nzyx8fCzQROwHiH3q/ggUIZUP7BP3K2EtbMpuIAClOs7p2suduI90urqVXb8WWF1iBlwybdQEF7Z9wQfkUbRb1MW3EYoJMFeXi6DJdYG3P6g==';
  const _INTEGRITY_HASH = 'afe8797bba231e3de7f0d2778326bf9cff94161afb1199a23eb5a654d8900095';
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
