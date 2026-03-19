// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4MZr0fUEwXjxnY5HErl180txlgIaQ0W0CyBnQF+zRVJaSeHOcuEzrPu5Q4knficmEfnt9m2JTLSc+oDAVHd1eVdZuPOTmLrlXauik5i38r4z2zaHIO5BiclU0iydOpes+08gK9r9GyYi3z3COajSVK1x0Nm7L4CelliWFP8/EEAhMWFenNz/KDzmhmCRiqnhLPh7SBzMqMpYv7r3cSpT4e3BYD5t3hBAknOCRMke1QvjeONFLK2v9PGluNvJDe2nnFxwy6Da83NGO5yE9vSfk0djS60dxVFt42+0LLwIlGm8dHcUOEQUT7xguOaC5e0Bs5tWMhFfVTPAbRCX9fI/QMTmmfsUgSB2eOj5hKeqrLjuUIX/PIT1cxuTA3cZglM0ziVQPgAzj8Lo6iJBoAWs10K0coUdyVibNPljUSMfEbl5sSGKxgOn7wos7rgXwyVX0L/oOMLkeFAKCLHH5pyXEM/aPs5U5kC81FhlH9KSaimqkimYOX3lPHE/rUb2B6/xIQDQ8velVl6ls4s/Pr8NKXB8jp5/mC+EzEdnLXEDaBnymdlI+J+oD8gdyBHtB3fxZhlYsgZ2z30XoSta8Lxp6EVUQdom1/fRPjdm84RsBNPJ4FRsgCnRjoWBBBpousI/ElRep5mnqCo+6ccQHlqoJJiD5MAVs0i3RI41dPHyekADMG8BigrB8aApNCxztFKkpcWkpwkwtpkiTPzJOIOQ7dpORYA1qykiAOYDWNsDMd8eJgE=';
  const _INTEGRITY_HASH = '58eb70b2c7f2cdef0ffbde6b53dbdbc90f5f25a730459f20f6627463e97660bd';
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
