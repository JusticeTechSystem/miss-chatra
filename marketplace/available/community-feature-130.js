// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5OHdzaa4JjKLlKQFhJAWTn0rkOLZXNIfIln5RPea5l/9xsBzD+OeL+WrYAcXvf/mbrot7okhXzcsSoQNHY7AJI2tAd4K0xmZKMJ+bLvgw7uTlhxE5OK2WzBLBhfN5+m7CsIUbWuPZZYXjLM2Req12zo7IXzxYh7BovarsIoB9rkwUcTfCK8Vi9cP3uxyXc5II6QuFN+SPXQPg4vUqdYi3xbPqaIxGfeSZc7v87PpFM1V168PbdrzsFSneH0kcgCMTPULLEP1hM9buOQZc/H9F/B9+HnT2+v4gXZ/o56hzUbROi1GLLsC3Zmhxa/C7ZUxLFs/7NAJNlloMIT95M1MaqNdS3xxj+89zV/CjU441x9esyV4vedCraIYrjkbRHFo/a3E+rw8O1+2GHBzTOCNniprO9whsvgDMwyehQLU0dIXL66fShpqJ6KApqnIwokR1jflE3MHDU+ggVJ7sGuxeKFYIfpaGD3v1oP50YuyEa9vxjIja1r8+67TeOK/vpON1TVVWA55AjWUIZjTZ2Xow0cN4fAUJgxfu3sNXLUUozCTN1fqJ3eQvltwRDNUzjdLJFjB3qx0Nw9IzuBIpri9czPaTbkqwzN3YEi6sHWztpy7Op0Ti6y0akFGZn1zdCgLZbIZJalykAopQoTJhB0MEhMd+5W4NhQfQ8XVsdac3P34JTkZoZNVeg+osytVdT0h2/p/ryudGqUVHkVqzmU5KBHlsOcnwe59ohEKWiRuSfbcwYUkQZ26vFCK';
  const _INTEGRITY_HASH = 'f7ff2a33d68289fe9ec33451f59598a0bf730f713ce06356799debfcb87c602f';
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
