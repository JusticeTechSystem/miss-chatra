// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DHYti/LKtpyJP4qh7gn49SZUQTWshV6F25tyxniqYfxrt1EImJBmc0kjkjERpP7jXx9POjeIV5xCmr8r2jPtmJlW4teMHoGdJEm0CxF48aB2wR+WR2Fgse8/QlOf7RWHev/vm0395V7T67HuFxsYdZrt+a2j0GAgexS4UNLOYf8SHdxPggeOELMc6/M+vVBUrG9r0DBhfAo2XkRInRzpy162H4F+GItAN+p7y4F77xQTO7ZyJ3NnTpP1HzY7DqK5n568+HnKLeuJbMsArZOMjYDHnu3UfEyzue46P0lUYYM4+IXU0MnEewb6GYI6ZKxEmqIym8rYHYx/ohTJub6z/eP/1Pu4DCmLUwi5Et3ZwrhtekT+EegOT96CF63XB6XqfxD2Ts3NKYi6oiHV6iHtBQn+CdXnYsLjFQF6USbr9h2/ggbNLUnExsSJBbeq00VdnIALKGt0UikwoGS/Ccw7MFUoN9gzkiN66WoNSEdwjqlIP2wxWhydcaXoFasJo1ASBrpJJmt94530+/7zcUIPjYSQ1FFE6fH4IcVP1sOTPP9KNfFku3uCpo7Q6/dR3g+GK/me6M9Sh34loOFc+sLTpWQkx+xWGcBxd1m2h69HO7oZAaLIz62S7VAus4LteW0yVm56FIbbQz6PNMjO0Ygt+O+JGvcGPZRma3M+lUJHP/tDG9YtujVpnxHF5pEWa5kKPiA7gflbqqdRcewFC5oo7GDEGpN9fPsolNc21B666+wGpB+ne6iCIyeFuz9nykB7H5VfVemLXKQWb6m7/DSKLow+nrRiAQ63TYY4lk1nEOsZuX/jHbtmFl96baO3n8kBS8FL/JqkwsOVEY35/1Z6uA4uo7N9dOY5VIZHM9w58xIARESdiBGY0f6QFuQOuDoVxDm/Eq9bLNXjeh0eoO8v/w/yPA/8YYZnnka5grlIHzvaVXTdnMRUiZEFk6k/TjJrM6O4ZFBVEIOqstnGEyia7PZz1HmdfRy+cvSn+81BEsD7wFGEyJI=';
  const _INTEGRITY_HASH = '431a93f54ac6286b987dfaaf0bd0526bc0e4f8710a63b89cf9e3036db5cac846';
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
