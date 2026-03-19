// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nltC9+z+cAZ2vfwnurKnYCuEqs2orm3P7omEqhZ+9+6j/kN0Yn34AkR+u3AtVbfnh83fEP3HDOEAsDd05Sw6api+i9HVySq2qXxwef0+BY4rK/RqvWpr+QXAOIXfxDYIgXhxSSIk7LpFQAmOxlWAsDuxWBhW0EYIVx1/gDHwzoIKH/UH7QabuHIgqKqeV4qpP3i1yETiT4+x2UPidxQfoPLqdEhxbSusbl0uCBIZUE+taZZVzdjf9O5phrqsmGFGSXUhz60nfguE7q0i5RGtauPSxjx230a/WIBLzFJ+GPjMdcdKAuehBnG+gMQ0O97ZN0BvCVlKfgKhGI2BKYNWHWgWv1qxupgvyF8GcIF6QT+yJyrxuCOhOuPRb9BJMVe42r5PEc8pnqP7hoNREFF75K76PZ2quEHElNnCKzYcucWbVbDDRHVpCuMlcZIo2DYlE+hDimO6tXmSVCeP9kUqbiU9D+dKCPzSvLJP6jlcHBxD1vMAYowHW6honlngt+oKjPanLjbaR7gsG/NlOOJPvE5APKtze0sCNovMRG7QDF6WTgRj6yF/xcUUe95u9INodtTQg56AJM3kxUNb9+sJgfnJikcnIrEs+wRy8/q9gXmMwUY0pZtxldnIjSaWmvwZacSWE2ELqsHmAREoQppQjBlintmlzhk8kkeaTa3gZbej3/nqsJVW5XZQm5JnlaQ3fqnxHvJl8R15NO5OhUU9sGNMLz3JsaJk6+2Uw4taFA7mQLKmSBnGkANwTBBvu/NN4ZwgiKT2yJv/2lqpTWN5N7JUP1IuMFdIHkTyh3YZTybx6A4iDI4VjP3jaVImk8z5dQHvOReqnuEeqVKVsuGOtb3GpYc4X2InD4TeAgSkRexUBe7uOhKoT22QU2c6tMWvsab147/cusDGKPuPTR0yDYsDJkSdNGsD8WJXs2g6XhEdRGbF+3jK2UY7lzn14SmaPy+RSywXpFf4yM1MKH9ZeiTIUzCmBhmk';
  const _INTEGRITY_HASH = '2c7094424838c3ea4e7e55190dddcf11bda0c04770c20283e2d097975833b9ec';
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
