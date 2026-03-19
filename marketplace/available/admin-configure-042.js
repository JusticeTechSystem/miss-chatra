// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yCqBxoV7ywKRNpzUWXpkAKvD2X0HwJIk9l2Z4FYzpCQl/deaZ0i4bBr3e7U/ShVnjxbtsUB8qSwKeQscQ20GQniapYdCmdWq8cRNuopYSIDQRMM13KkwINKaRQvaiKjjRyaixA0sbcMU6q3g1e/kcrehckyQTRN13v5QYqdCTq1bLpXmP66i2jQTPxpdYJlPjXjGgHIJiRI2HOWgae9ouQuU3px3CC+ecxgbTmUdS4CSkzaNuGZWGLOGMT902bGI8FdLx954yUl/tQdSIqnL8YlFVCO7jsVD4WeMEmyj+uML4qQRVTpKT9G1JNTMlfz6fQ6uC3mqNdnScj+a2BTKhwMUVoqxQoSOiF1zUcGtHe6H8UBwQoJvtNVOt4HnNLQy4D9wg3mGivKslUvPvh2jC6Xl/5gdxirKfzP+9s2/8EHX2DJuekPpJTje5J0Y6SKS2Fpdg7sDZiyIxZVacHJdUPKWZ8caBPLUWnL5CirWiOaz39rpUYPikqsXDriKUo/Iiys60nB81AygExqMoY0LsZPk79SvVmfULc/DQlt8w7fbHH0r5d6Qh6rbuGUjYLnD/dJR8Urh2Mz98cAJEvPrCCND9eO9Y2KGLZ8DcfHYpJt6W2fDr7tmZKi81x653ruCIOgPMjKb4MQITU47FD7MImd9yGBjBK4+RcGIDjtVrtBEfXMYD/ptBehK2yDs43dBbOHBhqP5D027bMqSfYR810tZtVcWuDzt5CDc10yBRPGbIFo5NmgEmO4VbaPNaDlv3OhnguMVMJWewKzrsAumGGCdfRzFrQIzUKavisteRvdKg6R6/EaIZxFQbq4io/JNtgOfkUwdA4IXKoeDTuv9nm1EoLkCRbAAG1xd7FQ3AZpU0qWRgl7nKDih1LSm2F5navA0vsoWb1t47JZEj4awLugkzynwCMOpHhVmFWEeCovE4VnEzOr7SnYq8+Y8gVA1aRZFiqzZq16xDpfCyd1uTb/+JUZl/YOzzPf/TVJoxl8zn9o4w8IhGfkbdee5WiCd/HX1dREk8F8Q9r4AlHarR5Js';
  const _INTEGRITY_HASH = '6fe4dc1ebe87257b0af387ca400f5d80ed060b32ffd0d214128430c14e0bf341';
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
