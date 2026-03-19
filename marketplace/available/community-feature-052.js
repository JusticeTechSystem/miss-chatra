// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'L0l++a+3LbK9zB+5vWHAfb378upbL6lhIKa0fMT7s2WPK3y/Ugwihg9uvLiqHtAIM1xJyYy+C3c3ezbZhDsPmWAG4CQwqdPlA9lKFnshG2DFp2M9P+FwSnyFh+VJAmtgaIC0UzLxiRM2JHgAxkiDwTjXo7lagOn3orHRGCHj3agPaFvlIkh2+g5jsp5OB1WJXk95ELdrWv9RYVASmhYcNgjUDsj3npK3+6LFAg9J8Obiyf4Fin/S73uHDAMnt0d4ENVsUO5sjmB/h+eaxxWPLQhW+1/MODb5sG4huY5U2de02sFDgPU9uwtvqWajEanGpNF3XvUjIV91CXGGI1wygUH3KQgA0pO6Lv9rHGkn/rYsej66f1S/5fYDaq+7VdpYkJj8404RP9JTUW65B0xRR5mkmElG26b6LcWZdmG4+9AjY3jNaYvW3/LB+k2YykzoPCNuTrrQEpViX5K58hV3adm4e8ev8Q1VkTRTU1/ONjEBnBuQlkb1dcQlFFTxq5WrS/VkK3DZO8OykGbXtWk5xVjWrXZfpMPGoF/UtxrIMfuAZ5jy93HAC6SR7K9O0N2S/yDwqiNTJ4sFnIlbb+Lms+QyZkcHbRaDz+DHJXIAZpZVVGvsPJPvMW/LhgUjLUL8wMmS9tja8/6F+kwq/pUmOCYQ54V7qX4v3KxOW6nA0+EzOyB6yr15GIi2nYRIA79Gj0XFYk2JsEYuA99kJsxJ+WWu32AsK525T7UKaf7OZQ==';
  const _INTEGRITY_HASH = 'f5468cbd7e2e7babb88a00a359e3458a8e064a2bebe361d1a5e83a19e296810a';
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
