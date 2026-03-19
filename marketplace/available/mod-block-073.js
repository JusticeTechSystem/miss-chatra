// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ko9QUTMEX6EOK1Scv6737ZdgIGmP8RYu01aq3PDYWusYNLqVz4QgP5lbM841rUaniP2AM1GQnsX+4XxwkCpzdOrBaASD1wF07jd2QcH4isZG8cr+wqGHO1D1gox5W1LJVgCyAMw2WYuFA+V5cDSMAX+77Kur83VkwmWi/FWG03VMhjuGl6UrJ+e6xJ5IRPJdkEFF71KX9DtalM6cxk4az2eZuKHqW5+UabHoLTptYr/3TUVVni0NPU8bOhvONDsUjbUPStilgvvExsSjf5q81SDX/gf5Q1oGzvXxwnL3WFC7DhxOOFy4KKszjBT65ys1o1PoI0/Wru1RMLISGVpBrJC9x+4DTUw5+OZjcc4/67Oipfzv4Gp6XYq6laEnKIgr/+VhiPqzf4cDb/pzVC6mKYVC2GPPRNdvyK5SYm7aQ6pPqSM4xPRyG0CROWOssaxHUKv1IM/MfvXyPxDS3aphAoxFaHENG/e8Th8DSaFOxxJ65DUvb+nUX4OPZaiVrM7c3Ost8W31GLj0IJO2S+tStURTo0HGPOMd9dj8A1bLCyXZiX2FYmXfhMvUQ71e1gDkRvBeyDFHpbiaS1myyBizeQN5mXbph/Zz9Bijzwlp+SVDmfCjx0b/0p40DlgRU1gYOmIM9330/Kia3tzvRNNs6SVhV5VnuMeafvCj3Jm1BkQ54DYC0m2KsY51UIThr/vRqskSL1fOMS+MEp8aCDv8FZPFq++VcBV9Sc3Q7BY34YrwlC5XMlFOvQweeerm8SaP5Jm1KNmMWtawlvMz7dNZLcWLxrjgQcNXbEQq5G1DEGqp53Egg7rAiRrgBeQCbOyMX3vRPbB7jKk5NRzaZxcoa6CCiv87ms6EETSF8BG5B6Z4y3ZvUJ0tv1NkhJqmT9pLliLxR6MR8EeKRAdcSVwRNjJorDeO4Kmt1hjvYy3+ZHyl+73Rk65gjN9uHy8OQg7CY9SY8ebSMR7PfMXoBXqIDuCIWb+yKMRWxQWcG/Uh3fzayPB95+FUhHN3vKkQw2HcANgqqAnVxmAtbOCCydXLI/NvtO3cuaOeNsaRklo6OoKmhWMyOB3Ccf+z63Jr9vwTW+qqKWoTaUJyS9R/IL8FB20i4djZ9ZGniTcrYtlUeMriq93ywk49l0LKyaa30wLqaLeq4Ksmjiny2FP+6DINTxuVozyqTD/5qW+ymn3dy7ALziODw0m1je+Hpm8S8xkRo78sykmpROWXKb0LwKbWJMh319ASLlVi+AZXZ3D2MOHvvVB484Hw3Q6YNPb/dKsVUuA/qWsvZXFooKjDKr9Gkxx+YmaMTaKco3vLn89iZ698DUn/dSHTCpuPutxCFq3KpPlrkZJsBBpqft7xNrYjM6bi0MWE7VdmWg==';
  const _INTEGRITY_HASH = '61ca4d76e3767d58ff559cd51ead871ecaf57f7b96d3a914ea4a00ab226ea33f';
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
