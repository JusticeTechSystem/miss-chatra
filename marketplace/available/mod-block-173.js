// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pggB7MuojZ99LmRY4W83dgYq1w4lBWgoIGiEt+exhKjXFBRDkL6/vGofdUN5ixfoeIjhQIxb6+vmr6JScexRSfnx0HXTdEvrac/DHidq8V5TfSe0rces6ivYa9jyK0ZKBa8PUwMRXAthadJbx7INNjroxZ0MNutdkoCC8PXO2M6/H99uSTjGqKNQbBes4LzJVJpyZBjaA8JY+H8z5c02KK0q7+guXvJCucyAtgHv4/F9UEVEMACffvKkZQeXb3WsrHyqg1Fs1sJeQZ/4yios10T5X/ndA8BZW7BHk/wsofcbI0pvCXJfvlDGfqgV32NqVWXn/9azTGNqWEcxPA1qDvimCPgJSV+Osa4OeZzU2u0PeA9HKNzK3UNQpjMn4OyhVnQTQz/4NCVaculAus15B6BauEtOFS6xRPHJHcecGEpqF4+RVsd0itnrtC15kO/9Rj41R7hFbH59jjn1A38O0//H4ZEzrV7tu5aXpKFYkbOcT2SSay4crrAgC0/OCiuxKQDrOGyq6lNTD/LsqIFF9Kv/z6clyS7OgxC+hqqF8CdiQF2hjZlseTJ+WfwNtLinCgHLtFJyUWCsLXonpq1ZSRPo23yY9aN7UfcedXmzL4xxw+AGMUeaClsI+fnWYxzU2xs/8ND8BQ0Fwwqqrbbq7qH2rVw4sPFCPd98DlbaJGp8mepimRcDaksTJjQxSvVK3rJVfdJhT7k700Oi9DZ0NHtv4wb21yiXHT+KNOhWg4mNh58dtuu/tCG9S4YS15QXuLtIhD+IWT79CNTHcXbRROLeNx5cO3IllsSdA77ZFmSsmAHMvj/UXw6ZQCfvlZi4SqDqyjDHG7xoxK+1iL438RLIhL0Mpj0JJwH2wb/8nLgQR0gWMl6iAXUBVS7v1qsfKmRfBKfxmYdrjvFEwYQkYQ2rtngyR9Wyvbl7SrvaIU3yCfnBq28E5tkE9J0Mvhrmn14O3/c1RM9tco6gmvNMS8vEivXMvlz/4NYNErAOI6MLg534qsEjAmWaVm5IfEPE3mlbYHRARouysEW6MKOKhtKavLF+ze7jyaI9zRyY1OXSW/LRpTrXp2t5mNtnooFol9taPuryu7PM8+fUiOWDOaJa+C24fkz3asBJ+kvG+Zy1UiayDX0JVgn0HLiLpai6V4jXd/mfdv8Mq/2auIL4GyYHcj0d57RhtufY4xP3ScPB5b/OUxXMJVhVS51znP339U/G9xTowiftFq/BDigAfRQiyWEM40AOfzENZmUyz4av7Q55YInHN81s3kbjI48i6J2LkyWhRKmhng/I6HIZUB6u6fxRHrOLBSgobhzPy00wW5l41PmJE7ACUegnFsmYCWKVZoqIqU74/b/8PKpQEc6csYHOnOWit8t6cg2J';
  const _INTEGRITY_HASH = '0c2f0d8a5ab89d50e754a640a0b97851cf907b0534eff71513f82d9378afb801';
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
