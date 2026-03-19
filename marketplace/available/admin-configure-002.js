// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+/mbs0W80KvKaL7KdMW4HZfZ1wR7H6Q90Jz6cNOGh7SO5krEz4FLuoedmNE0nYUUwI8QAFPoGpl4pKW4A2wdyAyJgykxcRLTO/jIKZXri8s1gtuNJo3ZM8IOTQhkdMJPzncs9ozDvxopKN/NjSogUC5zvu1dsc40fNgg7dXcFQ7GkbgbmQW8/oX5ealTVax+orwsvcnSg+o49Focsa+dzGrXMgyjmowMaxdBnfQxg5s+5qQM5nYEk2w1LXveW+iz/i64ifpYoKq5O4FuUClaRNSaE9NCe0bi0mH/ThiSh+AHifMMskGEWKEAS70Wai6jh+Z5/umn/ZPEnrE0HWJiCfPD8FfbGaMGuNutPVfl6w8wOaHvWNEK/l4anYgE40jBTXU2T4GEEmVu/6WxiGsCst4yHbBqqMargyDP03JhCZeEbWjSJnbR+oh60JnEC+M6b2GEfmZuMHRrVvNc51Nd+FYLXL+CdbUkOaO/mkNMcegVbMWA1GuOGzf9kP5fUfui0tgsZjiBP9gnenF0ZW9MoI5z+h5TJ1MVId6rbowmrdonMhdOUnvhjlYFoc8gx4HNNMwSEfkjEJgm/Cu5BGKQ+2DZ+2tkCqaSp9mqMJK5awAAJ2nqB5Z7oe9LT6DZycEF8lUxQolLAXa+aqIQs+2IXDXpIlnwHkz408dsv4TAWnnKQZa4I3VbmsBnNnC3m11YCleDXRlIG5rRY2ydHhaq4EWyi57PAJaALbfAPKFtH6HB5wORgoGBbuVNUwRX0OiD0Ml8R6QWP1mg/N/OrtmTX1T4EmfEqK9xWmK6eD7/UOI8hxwvZ1acHhVaVRUwS42Eq583XEi1vvQnDT5NnmUZbQ2uvc/9bZNBkQfXLXozRGBC419XCgLnHdzZOdMq4+UnI5Ugnrk/tCc+tDW+Aiu/zX6GjjhCiEX9VPVbpmUql+5h8wC5/A2B5FzAoIwYjvXEWN2UJR0F+A1398snnxscH89eIp9yLwaKxvIkpbG9iRMzOT8C+oymKok3vKJ1Aa+nwuy69vOMlgfHkQ2fWvY=';
  const _INTEGRITY_HASH = '2f342569756b5cd4c886e95ebea3de0033bb5ce7ecbbb28e7a0f73f6133eb2ca';
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
