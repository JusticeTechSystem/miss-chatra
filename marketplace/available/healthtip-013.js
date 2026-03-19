// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '36GSCDAlMq4q/7FN4EWTHwmL4KSftzB4Tqg1aNcWCM2Ui9VHx2yx4dalluP6+K6e5UDevvdMV7U84qL5f7fCit0EfrQGJBUcbDAFA7FNasSmK64BV5ONPCCSqslZmzyLDXuhIsyIEQAb6wHo1FEBS6jtXWXcMd3NQHvLDPet/KalMRv+qPmYiHqfdwnW33/Eu6YEKiie1MsGx4LPaUZ/4P2qqADVDiJdgYnYlwrQLSaL+sKtDsTSfjyqyfWVDiMoXMnQqo5ETt6qEILCFEGSUe1xr9E4SWybPxNilZZEpHIplpgLLVX+iPzbB+Q+jVeR7++dw3SZqJsar5/cbjhn6cyRQXOVvlTJMBfiA1GgXRAV03upmXQ4SM3q3OvApl/Pn5lJV51PDsrzOQONzj0siyz0LT+B+8PoWMQMLIRgFZtSJJk/OJGInRgvkIjfvmpcmaUXSrIaZU137C8b23t3bhQH2M0J/nz17hMk78ocwLByQZxAxr0wCmiI3fJIksAKj2zLGDnNv2RmvN1XI8uYhi+UedWL6vyhMBjcGuLPG6q/jdT/W8oup0mVzOYJksecimm/Tmtct92YR7EO0U+nY++cYRBa8fOmx6qe4ir25Wq6Y4wPzh8mO9wIcgvW5beyge0KzPdVYRmNAWlclXQ21Dhm8wk3m9V2YWN48UIXtSB8iqDHmgARm1Xm7HZ9tsZwPMw8FgJy6y+1PN5hzWPrteun9Ov2rlSozuJeO+lrr6RWUlFtEGPrRPkFhNj4hpgdrqEnpk/OknBb4cPOQlh9MdSdu3nmU6p1bR3JXS+wTZ+iIB5rleboywpUdO6dONnZ3MD/R8EMY3mNpH/rDUlqhSwGqo6unYd/Mu4HtbS0/eyNo5MN+Y3JftFH1Q7gP0we4ZgZoLMFUwhJqSk4S3ReHTffevGdJyHvFuWLWTZThjzDnKF8OnfChe4RJzs=';
  const _INTEGRITY_HASH = '553f719ce8ad6f9a55c3c43efb2e20d0899c9c63707485923eb166bbf1498383';
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
