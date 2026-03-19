// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZRUKazFEgouAyruXU3mqzaEae8KwPsE/j1FnPdB0ut94Yc+pLkqzTg8AksqI4rQbd3yMtBTr44+TY4/4w3gB8VZVegCLXvonS6v7uG0UZ1N6F1abzpbJY9iqADMjzcpyuMGKbfRajteCKQ0L7wFGjvprqoZhwAjBdasbc4FybZKxOEmLNggilPWyUdMh5M365fP3btt8YXVobu1DTP+rMoU6rJZxrAxlYqsuoAMDBpyWuVZB6QnKi0Pm9YFVwb2kifJdVKMFYrzNWwCC04Krqi3fXP4l9V7EZf0/WPXPD+G/DC5AtoLd19rfuc+YMAN6XE9Un66OM1aanr9e62Fa/oVrw7zIIClT8LTjv4f1CYYOpsAnyQXTMJUZsEjjs0IN/QfQHdQtNdiQbpNSnUxkQSuCG8hBtrBFoSGJbqyRtDZFpThE43AuZIiOqAUBIXTg+3sOZVg+5Ikw8zOtPiNiZauR35myOO+MrKFptijsZEYC6tfM59o7jSbq/Yi/vOptlmV/uxtn4EXZn6jTbvpHBIZt69Xwlk0/BvfSbTQqiqWxFX4NpUieNX6sYLtA0CwgiGsZhjjt/aJ/wgQUKfAyVQIAC4JuLMlhYBQfSrfghS0D8V4cQ4QOS+zmgfr9MfJimU8+wZXDB9lVAsCcdvJ4r0WbgVTzPCPU9OlUL0ztUnbP1bUAtLtaK18qG16Ub337LxBWaLUH44zT/YOpggHVEEjkNLXfAs6f7gsgPzUJLOP7de6Tl1IBjesjZ/KBMCddfluBM+Q6wXmszvC1JzPkNuRiYbnbU5kIS0LgsaeC5NP4f3fEMsnwbOJM25yu3CVfcOxuXxuv+kNevOFQA1yde9aa935KRbORiy9J/CO12FTjrSMzB98a5ksDUfTC0bfZIphIj6xCgfCr1RkXnGA2eo21N0htm2DnKrDl3DFCGb8UILxoyE/SzDbj+vzYWxQlgZJxRy0O+zYUligzOfMPagBiUi3Gm6e2trA3Osz2/aDRZOIozfNsrhCosm//fO2iJlQQTjwF4T7DGylpHXTTe/HNuCwuWhx+FMZ4oJb+jkXHFceygGvpsd+B1pLHRCSaf2yzmM4Gorvq3pMD/YDvTxY00wr5AbdKZ472E7xyrDPWFfOF/sgxIxpRG8K/BUXPm26t/xqlUW1Ei4JwAdVoVrB+V4XRbAavnVEIImm+3v8verVi8OfTeuM6O0yHCmRymfn0eLadiYwMIm85Vg+oWGBm7MKxPzRglk7D6yeJgI2P2m4z9OTHZWE2iUHBmuNVkUFGqo4b9aMamANkrfqR7O0/tF3bU8kahhrgPMb2+fTYRZ97vm7ptEIMjlWqNc5GLRCb1/gT8ms9hSrtgxps0q9JIqP6JQypS3JzxkCR';
  const _INTEGRITY_HASH = '9a89b19ca14c1e799693ddafe7fc965896e07b725741048952f58b14e19b377f';
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
