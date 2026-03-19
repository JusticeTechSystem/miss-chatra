// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rwey2MzZGDQsUK6ADtim5BwpJVIRj+VUCn/Ql3OyVje/vCwTl4mMgdUnRCJ0mPaRXvGVx4V9l+HL5vHwT2320P3IHtzdmrYjdmL1bIS1NS3a5QO+RZcKYnlpwGx/3EB5lJbkcqwjQJDZkuo+qrfAmO0apIqzucKTyIZyuDwVChqBGKTRl6VsHFxYgsllAzqMrch2kOr1oMMX/DFaf4QR6SCInCeBqbKq/nRAM540mMdK3WvggJNJyr2HHOdX4XjOcwAnNX0FJxBu11uBxQlmHcBJT2kzhkvhj+py+BZSdzc8RbGgn9eBHsn967lTKr55LYmkEjBOam57Y3/bbXAtd4KNK3mdF4gh0PdMx9wZcsHultzuvr2KHC6ql6CpBPEsKxYo2R74OwJfIEwyVt5e9e6pOXmXxMGscZSo/3mfATknwTBqfo5MTW5QWRYy4k08QExpslokmKE66V2RWsUAIywGpvkhyjelIC/9LShBpzApqdd6KGO9D4EZ4SZVPpW4daB5ihmECk6Yru79wyvlbmOSs/+IOPAM973nX4LQuGaCwO8gAed9Eo8qrHHRXpfSibOBAAeWn8kppdmLH/w4S11ZRtnw77Q+x60y18/ewlrftlh0N9oWkREkFenGjM9nFV9RnTJej5arI+wXc3V2Fdax9zgZiBaMqurHshkF1+TncmtuChQxZx8/6OM2lgJa1Vi2VE37YY09J9BPqCpYUX1i8ralkXIp';
  const _INTEGRITY_HASH = '447c8b42025ba05980916fc88bcff722782853c8db5b97f3e5d402e20f454a5f';
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
