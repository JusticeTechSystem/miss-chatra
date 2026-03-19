// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5GFWKdF/mPpz3N6lBeNySyptcd3BMPfvX3Gk1eZpoUUkQJj41h48g1Gu5Gwmbfk6u1nbVKlnMjtR/xE6sZUEPsf8eGo6KDsMGeHj/ph5JDKZyMrxnJJWkXSRNP/tt1zj74VXTdaUkGu4cAyZPIG6FRtibXh9/GjgELC5ymOfGeNMQHyDYkUtvtsSNM+NUVPe01qNaDla2GLP3WcIFjemwOCfrlKVo8cSW1Wv+sBipyYi27kG7RJQpW163Z2LM6Sc2UVIkhRSwqXMITFaFA4ueo1YDrqJt5/JyfPrsM9EXQ8s2IjgNKX4Y7DSnC/XcVZTmM4OB+sS6ii90ga3jDJwEiKtFrQGvJC3XkysAd9MwCFCHGM9FoPGRlhK+c8MYN4Uzrkn8DaCx4Cop99evY4cJtq3Uj6EjRquSjmpYcHsXiNifmF7ZrZaQ6K10C4cNzSGFQmoClQkC5jExTDKrWVm53uNpsfSdpsIKucTWtQFvX9IGitl4JS1YXVexNUY8tcYuOFhHdqc82Ut6hGXmPPBpGvGOvMzbLpo5GvEFiPZDXfqf2/o2bncZWFr/5tDbc4GlrAEGsHATgkcJcXg+YMt/zeyyWSbns/f7kqF7XeNXlLGGK3M/wU2SEzi1XrCRSi1sNyCbjzXSDy+vW7qMNCRbTrRVDe3YmjE7OzLzvVdrZSBiF9LgYr8ROMZHjRCOOj5kA/9b48Ytuv++RLKASO7F6AGKRrcD2FAXA3a0KGpRrE6KzMwbzwJABaUZMZxoD8j+XlHuW0zb8oCbgSqt4/sztnrWpSBDkeXCOWtPYM2JCsAqCkyiN2VESLqmYAd+8D0OWpxiil99Z01phXAiLAhiyK8jC4iEgNpmb9gRVbUvgoUy+2ZUa9H1J6e5N/ZVUVMmZbTk/RSbct51A6bjj5OPd0e2Bn3la7SwGNRAUh69PmQMLB02gpSc5s3aTBNOPwDCDjcCWF8l7L4H4FGj+AmrasLsHRX8+jzAYx7IzT/8S1nPd/H2UZMYPo8nBfGXJvbQgBwfckofRg4z0kTNe+JQF+73h44LNK+Etd781zPh2/Idz4xo5x6nV0IsvGXvFUe0VnOkZU1abrQPowW6WeRlvpsZBfftJFFYGlRFa0nmzvIWcaAjuVHFcVAo4LhQI2e53Wa//H2jDzyeEMYof6jmPEcoEyet+xKNYFjxx+3hYiiKGdnwtNXP3FyMsH8q+looqfVuQTkkP2v1VijXxg9hBpdTl864tjhGUZiO6x0Bjrv8pCbe1MPyv2mrwvQpAKjHOdntOkj8IRmgg4yHFyhZsN4grTfIVTtXsCYVhMdPQTrGnSmS0H/urNqNH62X2zwzYs+eg7dozcXpb49Ohusb2M1PJU=';
  const _INTEGRITY_HASH = '1d3bd4b0cab56fc86706a9ab89a742d43bb5bf103cf745cd84cc8738027af47a';
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
