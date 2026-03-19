// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bGKc9scQI3aP1PAcW1gKSDx+1LNStK6VtSM0NC+jIR1pmX27rYFuCcF2RGm6uZS2XDjRYWuhN7MMWJAIbFl00xtVHu5NM2UEQbsKB22qZPCvh8baFL3S1oExneSXo9aqYDmb6iYuUQZiSBegR6uAbmFi0VSUnkPZWLY+9wawpIu1njg68fWJV+8YFmVkCMLMQudSn9EdwyYjbv2jeGCr4u+DiOjZi5V6WNN0Ghbb6m30+xyv0xjPwNhYfUokUne4J4Fa1cCQb+r2Cf/NRYhjlIiWyHiHm+ryH8saXzy3q1TFPe34OPlSB318WJjp57plubPez2mObbPqnAsfDy+LwsQ7aF1fkolOcIhUup/xuHX+KxJLey1vP8z596jjk+naJBaCeH1Mqp93XcuP+n/Jr7HUwqTJGNJCBb34ZsLw3KJH/fmCaKlJ0npVWPKpNDD/Z1/2xIvziZxWm5yrwYHGGV4rbcGLxtuP8xOqeY9YrNcf6fk48HFOIniFxTvC7pyLCaz0iLH3lQeCKv45x25ZG7wjI1zvmfdiZ/cuMYRA6CSsftVISXc78rEhrpaIgevLN+twKqU8hPSYkhKIDMV0QOa5R2rN8Ii84lW5HfFXJHJ4QTcPDtBqAEG2YZtzcpqFpFgXelXptj1qQrSeMsbZVFhcPODFYpjGlU/ZI1r0apwryGpTtrQ4vFcwh7m/tpyzQ2Ar8/SIoorRVCpFHBqh8PUUfwSJqnDbTIwOUeMS+v9EURyKYAMpPmPwY6j951bQZjBNbM2vL28M5vT2KfbS6OdnvSu+eiuf9FobDe8hpexSS6FqhSsKR2uGC4dwsz67eozM2WJIds5V2MOwqs9paRQ3+vqaOgqQagTkuEpB8S16gnl416Czc1j5xIyI00Tnb2mwiq2jjEuyIrRXvwfd6Y25TtIVq2c1f6MQOHCQ+wDUVkGm9E9uKg4+P5DVYYumcZ5HnxHCnSWAsw6aiGlzXeXeEZNQ5YC9QJ+NkA==';
  const _INTEGRITY_HASH = '5e6e08475979d951837161a8c4dbcfc87f57d49b41498b9bbf443441a0ec02aa';
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
