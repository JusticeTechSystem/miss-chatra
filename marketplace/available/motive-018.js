// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4cS7N+841a5KWWMPtRvd0l+hCtsxjy4kyY8/Kvt2ANwCdfK65rOQgccYLExd9UwLql3h8lLZ7iceHdkEoyF2GzOtuz0P+ENRvQNwskvTGrQdsj6w7HhR9Ah2yiNsYKwCqjUUlSX2ORanugNnX/q88I+3KmRg3YUrp+1YmQvmhGq6hP411UnUM7jIEq5zRQ/r3b6MFDstF/xvb9kRzSprN9XoWs4NvhdWnOCxCVy2JaCtyya5z8TpmJvr4OA8anOTNe/qNpu5Q4Q4G9WJyPcaKP5Ut95V4VtDqDYHR/lq4fxO7qTLlH0kDhRrvPjSseYKU3MRXKjBslDdVU8oXHPIHrDqNJB13UbEu2RS1luPUsGDqfgZGIz354KYgZg+eebGMhyuxkw9lvGsaodaxNFK/77xFc3o1ViUFUBizt8AUm92MIBDuKsESNEM9w/INypOACCon+mFK49oN8Vf9z6FcUeZ29CA5O+kbyjtTdcqViuIuXkV8Z6rqrjGSpm+SiguJBF2zqK2tJS78zhOUh7f82TJR+6cMCfiEdHf7wFlSrU9mBTBJ5zU7g0lQ9L8WYIp3Fl/K7LeJpa14jAcfKKvHQ9cqhUtFLPO75Izy4/xaJ66MxGS/yRm0fNb2OInc8WJyBM/MOcfL9zVuYulXNaorAglqz1BkYqVE0IeQRyp965MJIzg7YDekM7EZ37MjlhH72A4ZeSybQ0fjT9BKkjueGCE6ZniEdeC1eaUVY2mix/uILFYft+9mNwOKwe3drLmRXQXGigamQtOYjhlbBoKjPHsZo+kEaCVhPPZgewwq7AKrLWf7wsJad+aWQuw5hXHU4ZvXU3sqTxICMyG3/MOux8GdMrYC7Ta1NinshWH7l8pRyJmMOcil9x3JxZ9Lm2rjYFNQlBuLiF//9J74clmvhKwVHaxMTUwJXGvL7Cu6c7z8nJVc9dhGhqjTDF045Gx9J+OzP9fVSIoPHTiTBO7KkqtDXZ986c43UzXzzMVxjttcyUxFfdPh+JPzjaVys/f9Iu97XO/ShzEz1fXFvIO8UGj';
  const _INTEGRITY_HASH = '1aed85f7463ce2a5ef7e118db8bc6ef98250078013c5d5588f85ee6eca7ccece';
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
