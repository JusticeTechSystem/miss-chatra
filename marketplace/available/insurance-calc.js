// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'X1vsGbWxx6T4Fhu2Z3VOWqkoGN8Sh2/ErsO+kilmrCfbq5iOPWvkum4TAEoVnmUW4WJKJA8hzT2HW/NimzZIMR2+dwf5dFsicBLPuWhKKmCEQKfHqDaZQHZIBjo5v+JAlHsjli4LRudbcgLjJLjhFzWXkmbXHouojoPvLigLoZjf2JozvARY0Syj4Dxv6chMQmPVHybKADLpUWfriQ+LLXxLivAvre/FD9g+sdhbFag66AZVbJoZiSDClHmwcAgT2E13uwNKfzrynXkhWqJqs3LcTexw7gZOt/9vtrzJf2Gnb+dmYh9zvd7++b3ozciCWpM4YEYUps9/yGQY6xomj+Qw/uMBAjToxrX0tNCuYlWlXIvrRdH5Eeuopenb4g0hGmLj3bOeSWCKJBnsD5OkawtqqjiavG4v/iQfRlBLXyeMTCB/v8vUi28wrRE16rjCcEBgyJJAFZAayvlVoMw/Txqz/bWkvaNkQMrRPzMYy/C58sCOxGnUsxJC5HhnWw+CGCakFrTlwzs4iQWXo/jAJQ+onezt24OM8DWbg9toZg7EeHmHfFCBiJgBUR4EIVhgM82QlIN5/kgyiHlmJFdQRl/kW46ZttENWOPAuMhCzp83cjCzslQdHZk9kbDKwlGriqbqSd4x7X1pcL6gKU1iV6nRdGAJb3BOx5mvRKGDFeik3p1D+pA3Nna0oyJ1zcmaPXr5zaSW9JZ2xwAqbBoy0pz8iUyfYOi4IUNgy/W5Rf2W9nNq+rxIJzbsT5fYOl2wGBd7/tYQGfsaNAiLab/r8pfTdFsbF6Irty8zkMJlrfLFA4WLyxXSZG0AfLOpzeUeNxKMR3k0X7yFrVdHHMeMDRLz6Cff9n4P6QBQHFcTKg5Y/HuIS2FTxGGvKDFQVo09EKhiDC4B1ehFLpzuprCtvjWNvIxMtZC7rTYRbY1jpVCSdRojs3eRsa5P4EonB0xJaYrI4F1dmySfjtugGJ8vIeYTsB0A4UTLbX6ZStMQdUrAiK30RbhEISvlqTqWxu7jkvtSds9wBVL8GzanELijOcNiDmH0EzxH1mbykxf55/cNugGAQftKRTux2etcDd2nlUGn02UG/rLVEoi+1ctxEExadXN/AXIlDHOJdciBZCRCaE5PMmSp30MZbHaDLHYaE0hwKUTKFEW4ELmydRgvDXaA6aDLY0d3+9cZ1O2nSLeN2I6GlvNHwuE+9Vtmj044tpp+QzciMTR4She09P+Zeney0H16VzEwGokEwvTDUGmmpPTY3wBp0iP3Uo2Bmt4a+Zfwar5O1BJ3KAPtLlsw+v0dGdQnRNLx7uY8laIsjlghVjm4jsXsJCpyIJ+FMK6116FED0TLbf9A9yRD0yCvDK3EyvxZszoRIIJ02oEoyepOczQTnHTTlKAj9D6Ls3T86StvBR4ZaMNVVLjML2y4ZsNasTJp99w7AU19hyemEs1faAvnSp0/IA==';
  const _INTEGRITY_HASH = 'fc4df3e5754021ca79174ddc760f57d6ff1448f1d08992873d8faa9751bd715f';
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
