// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'FStAPsCy8ucl/0s4Yr7/ntlQCjcfNkOpgaocc0txN5eaOpQbawnXKmh0Ihi6AXc6JpdcUCpMXJd2P4u2XPi1phdsBjDV/zV1LT106uan9a8SrUpfBmtiwTngJkAUdS5/EytBPk8+plJc3P1Y5CUC8ZNy3HFvOLvCCjMlFQpDaNNL9xg4FGLBhYxdVwwENLi4MRlJyuccKEHyQbuTyEfFEd7Fs9ru64nx6iKx0WnmppQVgvD8gKCW5M3reT0ry7mcCela/zkIGUHw9qmDi1LyBtGOUFa2m6D0kmMGr2+B2JGX3qthTFBTUDldAR1G5Ig6O/SmGClf8T7ughXlgVYGGRS8XdEG2NnSOjuqDR5mGL2OkB2JtGzHmQTijm7VrTDYXJgip735cbKSi6nCPZx4vU0zoNY0oqv+4oF7zg2aMAm8t184PN29ylsSYWpCuVJ5+hwzVmQa33CNaLPYgibpGNPf00aikqr/Xg2Nj8VVfo6XNCBPI2+BVzDGJOlM2k0S/5E1kJYxwCj2LlZM4JVNN9dFHZFN7LO0/oVshPOeh41zSnsIMU2OXGS7xC2+C9/tj50I0fk4utWQCPMMyqPL1K7RMA8375r+U/EGYwQOywFWOrTVRA2Jz9JbKMXOG9jTQnBFr7zVvnxiY0Iq+tto89Qt5AmBwYkcQuph50FNJ8JqsTzZpxmdeB22zGBMKKCOLgqQcFB/JQS4GS2yt1GLAFSesi7Ba/UyaNbNYEkN/6ojPxKnvWYXbkcH0XAdJs/vJMJx1MrjZWr6dFLLKC8Y8P5ehOf1GmTMUTDfRupXX1mjfM1QNdYEE+YPg0xRnMNYrDbHAEaS9UADqKsFDpMS/aq2mEWVOCxXSPw/qavhccqcsor4hKNFfYymVpVWzilfOZ142HM/uPOrR0UODyFzDkdMXKg/G0zeqh0uXvSdKpIumdIw6bRI4Zc+hpCQ5aFZf7EK5gaZt9OvUPRPGbIS54rE/aK1032fEUHxVfFBoIXXAtriVZ2AYK+aA+psD4NjqcRJBhVcnEtnVVcN6+Kxksya1NkE2Mml5TuPGFflQ07NX2aaYiaJM0QjxULnk75sJCI6E3wrDySVj1mmQ/JKH5p8J2TAKLbgCYuKBcIGjAHYGxhsVSUfqCG3UXA4x323Q5l4fpxm/ADZOB/ELV3638uxJKHN/jEF+ncMJUkqAzWM9nmR/ajU5iZ+garR6oHhg4e8qpVTo3ZfroeU8A==';
  const _INTEGRITY_HASH = 'c9044f42629922c0828362da883240d975015bdb64d47f47717de42d48aba7ba';
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
