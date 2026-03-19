// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hS22uuWt3ngDbLTJThF20UIobRPXIdNCa/cWOFRBStpDdGSeP1HFXhj6UoqYcwj6KAGBP4uPrJ51EjHsynrCgJ+/2LrVeQwkJWUtqATdYZ+nCtr0JT6JLO3hH9bZnu2/SIXj8sdW6lEktYdjkThgIod/Hq+7ZtTjRSpeWLCfwlGMYbnZCBfbKQnz/tvqAKyLl0+bq5peM3tH0DmnrMWXU4cnlosX9bhVDTiEeR9Knd0okeNpCiy6qSfKlN2wCY9vBKrL692rIUXNhR3IQLaSVIk+JXbeW9SU+UoemQ1mh4IyE7dK/dScNUzPVE5oXjKmWiPrecvqXm3Q1TxtJwiJ08fr0f5rvqIuCpIemw5JOFxxCHWlybAknTegB1aa7F5vAheSGVxBLwOd7ZsGVe9V1Xxw9lpyIBhy47W4G0lgniiUFDaEHBiHrnwuH5xiOgjoJFnFTZxp/eBQvLLbHpoit1Mr6TJoV3r6D/IOEfWJYb5dkLeALuCJAo3AmPTMQIs2332jps0uypkAXdJv+CW6MHaDs3HDeBfBtdN3cuoE2tz1wnLKFQxy+s2AhgYxvXW/EmdLckW6jQ3Syi44YoZoWWwzDvSC2IWqPmiH30rY1+kw3nB3O9ealNNJtjfUARb3xt9G68ijh8S16BxCuAySuwVeNzBiitM1eziIg5D701CkIg7pKYUO6rW/ofF1ulXr2x3S7tRNByV1QJJXBMjWkj4CFlGkzpdnUU263WWK6l3B8M61lxw5Rpomd8HN8tDQ3fDD1TvFe3RCYVkMf1gckH0mn2mF6doJ9N7ltl5/5RNZp730AevLFkG/9TNDVqYLl7Dl8lE0Skuv16vXg9D5a2fNdcp1IYXE5SMtF79gxK3xPiWsufRuQYG0n+5XXlan7tuftU9bzyOGv+0iKoPlNJUUiM/DFHRkvin7lVwVuawrmkz9/9LTtmDOULbaF+cRmeIcJJOqlXvT6drL5QJQZUz/W72AEDjIYEJLv7vJJOqm9XubzprxZ8AuEUcDFEVmuwn0monrYf+FnBWIRRN0DD6khKEawVFDGh1RZwZke0en6bw7goIlwuQQUCbaUTyyPAtXsKL1xYES8Bx3FAIZQvRFSe1U131u/1D7qPH4R3onpOMLi+Iu/w7IWLzxEJKfleTT2iPHp+P6EKc0pV6tvHzcwlp9bpx/acyBMYKUK5VDEQSb7gGFYZrqRgoqC9I44d8Gdgy0WdKxccIq5ej7VJly9mxCerylWKrwVpYMBsWkRcvBDtYwrbXCIx+yYD0ts+OwlMm74q6XJQVZNuFlxlWQCK6Xp+kA5tuJZo3fcw3zC5iQhQo9bgVfdKW62a6fYGnpbW7vFGkcpnCMvW3wSGDepyVzlYyqsBFnG4ZkS2o0bzcDUC/taw==';
  const _INTEGRITY_HASH = '08d897268e6357d0326b9426cd53ac02888c9350e987e571b6790c76a61f9bf8';
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
