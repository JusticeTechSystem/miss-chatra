// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OIz046OFMBtISfHH0iNIBmc6xsdAOFHTEDJDIcNSQhubfSCAPzC9H4fpWoxFFJ2BEyEIw6trND9dqR2n8hPAZE/kZw0gqszEDqF+c0OpiqWGnpJurGu7a4+ZTpW0yDf17hB9T2uKnm+SUuAlUtJQT0XKM+uFLTNWqcU0vSCDvQXyXAQ+Qf2q8ajGK/1WZo47ilzR0YLKRWqUTgwLzvZ0MN4kmCqNeZiY4HbARJEtMhQVr7KpeJaUUQOBr5cnxQufN8Kdqn56F1UwfVRioi91tpuD+oJo3dDUbskApqcAlQOrRPU2WcYVA1P/HXKlq75/rS/Yl9/95iEXCLQtjQnJ1W47I4vu0AInvALwDZ+jL7L+DunJrJx30DreNeQI108R/DNrM6ld+kxmaGOBUW/b8Hq7TnCx9ecUON1hUAQnRXFdkUGTvjSPldUvufnPF44E/bJQWSqHErFevkRo4Qlgh87W+oBQMZ+qh61eetd4lE5lFqPBeobhgveayvsCfIXHV30vFCzTqxnfNfJNkG48rfpvFtbDkHgZGtSS2lbPgawlgbXOU/seL7RgYKom/mZ9t2lkoxwmnpJTuKiD5SxWHf8PD+klH/ejEXwpk2b/Q+UDB5GbFE/LmFiRQ6zlzVSvipI/1Ns7uv0BziQDWtIVGB83w984Mv0w6tfpbwbTyDQqF6RPu/wIgkoWN2KHIc0Nsvjpc7lSpYZAO0C17S2YD8O9Pv6CjHcqyXPFV22t28gMiPkAGgH2OxCxW8t1sPcfRIvPArzvJCrcxYJnslERPz3gXX1ySBVL0EAI0FnGVAXmIUopm7a1OQAeCqsz383j6bezaXlneWTgluB+Y9XQ4a3lX9W2RLICIcCmBfPKErqA49oSMatqDbHhQNIyASVBKfGiZwxx3oLUQlAaUvCR6WH8ApLTEqklq4c9y+EBFjTF0lGgVGxK5Z8K3SCgMBNbeMptIjCgJJoTYjJj7RsVABxTfVzOJahcEiBngkl88V+hg3aN/FQ2C02b';
  const _INTEGRITY_HASH = 'e4caa8f3afb131fa4fbed2a29965e765020c3232fc29acd65034c8d71c707e3e';
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
