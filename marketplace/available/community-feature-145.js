// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '73xW2JeZStUvGVoD4m2iee/97Ki71uegj9R6v5S8PS/O8PVyAnaB8c9e/miC0qGuUux2q0QYNIq0yqIMpoB82CkDY4yrpgR/BQ/l1A1+op//bmh6YF4Cr1pPdDbPxB+15xcx9lW9A7UnAG6OWFaVFEd+tkfw3UT+5ifJNdYyE8jYx5EgEdtq2jxe7jBtyqjMWkzXko2HIGl4Oex9B0WS8Fl0svOTkYWP1KNf4VjHNgJiMEZQZvKA3QsNORQ7tqPy/+0DNEuHX2lVyFSkD/vrhlmaa64/I7g1Oax2IjObsHMr9/h4DGo/34Kk8qs8WnVh0lRPlnr77E0BQr58h++or66zum3mIjdD1L429BZpxvqYXeW4e5C/IRdUNBSby4XQCtTnxH5ANrnPXXsUi31sroyMK0jDaPuvMJF7Nfq8IbLmYCQJjHFfGGUjezXrFLs5xyLZJW9TKsnByYduho+R3qMKAWRUuTkqSFkTlZ58yDwm/fOlTe8Qh3T67M0E9T+c3QM1qzCD/7UbQrEJriCYgxyeSIlhoc8BDxk4lcB2gOD+fgPjKSD8ul/76A6GyW8RD7SZy0ORHUprEIShRfFXbGejaRmEoj0Ec/mD7kuCgaxtBi99VbPwLqKtr8wxxoyoUwQ9VYMFLuDsUyJ91Rt4YrIvZMJ6hFNSo7Jft9H/gVdkvay+SOCFIFJHDSz7NXryUKsXX2tz7aF/j3fOvSTIZASVlrO0UZbzPNBqHH0edFZqmd4Rr2H2OSQZ';
  const _INTEGRITY_HASH = 'f927fa2c9d805712155d6f5134767a99e159e7c6374cb9dc69d2ec162fb4eb93';
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
