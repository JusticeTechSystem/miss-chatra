// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BJemJO/+rP+jiEyMjJUmsNdwKMv4BiDpVfXpjPpU5DkM+ZBkw10SoDhaqyIBLKcVOgPzwzVNDO7JbZ4pohWEoyV/iZFv3nU5qBCaVOS/+ApWF0+SNCTD6+lEL8L/FceVqixKdlx5fb9QHghZ+XkUSiugANaXE9RuzcFjIxxMz5zQSaIgV2/U7Ip9zxEKTJN95ddBvbLZ4Yt7PY/26DZyNIc4ZtBPCjmx4FnnqlQOqJ2+Ld1wpW4cRUohJzFMdogu3v3vG3aaUd0apbnmIAJZBi6nBMxNkNoOD+HnAJrhjz29fKXU/8m36RsIowNRfM1iUZYZNoVpUGnj1r5dsA+H4ec2f1PAPlJozg5wMC4cQfpRH/3WsEpQzcffpL9peWo+Ysz+XtoYZoOeocZPyW6YCo3sbLsEh3saVhoVs5FIAafnOez+rcakdb6Gh0iOLK8/SB2G6MesbVGX2L1PmcAe8OnPY4TYNowWKzH43zoPsu11hTnHggBAHfX7F0mkL5PYeNgUbWH9LtsYvK0HOVTVrc+RfjcF2vvWxD1LLwfC3uMOz3+Vo9GPbxDQ8zaepXUnD0GKRufb7DCdnAKcGTBgZPCzgeIW/4aRnV3c8npahjfjTp6lEzvE29aWFRXJ9SX3S7VvFp/51Oybm/XmXnKQrOhDxc2wVja1MnVE9pXAslKMNWIi6KCt8D6Gy6UTIHj5Wpgftvr/7w5iYDmWwU3wrMQhwI/irDxdbAYaZjCEa3HJgmPEuilalMMpPy0jGtVmyj+9FkVulC3EbKt/2DI508ZOpfLIXbYgnvkOILzC1D7jTb8YDFCkqUIiMiBUpZeUDRmBODl69HDA1oo02dDQ3ann5wL8KFkXNZ+1x8G7OL5BQACKI0Pxlx3HJ96TcUt0z2C3ISU0RH8W3fqYYK2m2hoeHoG8Uv7L5kW3roTXjtQ6H8U4zhdvj14twLRViPd5rcqgfryiEsX9Kr/RosIHHZbL7VEmfAucwfpuPUCb7X6JRUEZEkOJvwI7cc/xHrKXbpqNf6E9Cet5rNF0/QJqBrirDf3ZoUAjOPr65kIN2Zex1yAPLEo1OJXSFW4dTx1DmD4pN9frHJzAE0ZcAuKnE5LkiIMtCe3wyNg+JTzNdyFcZCUE3mSTPoGzqBFBLk5GbI4PgW+58ZIc3B08aJENyrvzzKj4CcYoM1hyidTGvh+POZr09rx++VEj6H0I5Kc1M4o6EUxmjTmRMQG97n+j3DP/YDAVxMKd6A2VQHx2IpfFOEdnRZlLsSRwHzr2kGAdBFI2QTrZEXllHkjPxP1C1V+VU8IP5IYDeTGcvbX+6z/XEtGM2VU2QyEhVkICXIbbK4D9n6tCl4BktLwrU8BhtrhiGwiLTBo7A9JbTRr2OWw7JXbMiK4IaGhifLKMgAUi0ec=';
  const _INTEGRITY_HASH = '1d57968e3df2208b2a103ac520d9af4aa40097d8d2fbace38082e57527574d1b';
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
