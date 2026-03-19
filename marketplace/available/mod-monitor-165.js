// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YspiiOdn3FH8s5b9+0tf1lBWY7kzEp4J4/Ch87DYx7Ut9hDbBFJgE/ouI6/yLvZ6pbjbxe0NNt7+17dLa/7vMJJaO10jLj0LScB8ON0X1MmbNsOBY3PpDBnSioT537hY++YW0dKUbaWHG0m/KPabeaTEv9vDOo1+bChtTiBYteIajAVK9qRjEa6+mRFipKeFZerGjNO+gX5Aq/w3tU2/qcM6R/iMjRDUXH5dezNZI5DwK0jSD8nwjPYNwSa4je5p6HBgo7GK11/F8Q0NsDcUT19FXiOSjky7YLq0h4Tera2kJgdipHrd3M5SSJWwgScJtCHV5WCGhkW5GxQdxr+i1o9JRd9x0FYc10s0itLLmr5infWussaiR9PJkX8bwkvmY1r31qSU74cz4s6Dw5WNYOUYyQTuQGhzKjUFlDU4h9z2KXzo2/wSGYRHN1m0Cj3URoRompGUnOe5H1bm3j05yhKHnOAhqLFz1wos8gOSHIvFXCp/qWH+hBu9i9DEA+PsNXuqK74krNVUeYFxkpL4bR0z0/6I4KPPiCEo3ODTu6nckGYF8mzm8Ex2oz/mFuv4/ilq4S0gpFQ3zqMLkPc7ZtCtodlLWmwrB2qfCU0oWFYkHBYI9tC4upFjc4eQ55QkITP3/pSxR5mod6d6btHCU/L5a+x4/EEjENHSmjahEqVmSW/ATLkfmp7GfTkNQRJnIP9Jsd4pE25TCuRMo7u/YsDhAjV5VuQ5LTP9wWnEXCLz5Do2MaWQZgKUWTYqe7g9NsgEH74Quv+kqLbwk/rzwncZxqyV0xoVL2NCnpGPlELjR9PUGH0diUmKKCey229LdH8V2lt4ja6XKiGSrvpRHd1qmhDzpWGdnicqYhB5vDiPfmPpjpHcjlfVX/FFxfRNRJzvNu8QZTn8tDR9tI8orx/2rPtwOxV6pXghrCQWSOFLQ8znzhLkuvpEUKsd653tSKUV5H6W6ZBPbDykuHRe6fuY7Q251SC68Zw8E4x1QOJFEiYOFma5Z9T25bn55D5W8DA4U89nvAQNMQ3Iv2D6IKFpwYK7lg6un1jpEWMMKC80lI6HAm2xVuu7vzrwEepAa04Jd/sWl6pEcp5EfSSplmmnOFF3IdO/r1xYYuJAz0eESol51jvJaAkH/thSYRsN5ZhqgdRyl0sbOtL4QOnQj0JrT4ccxV4PXs08FHQm1+6MfQJxXROx/S6iQHpJFKtCmDIVaPOwgzRdfbb8y2qFphLcf0iAId8X8/znZkPjY/Wwj8mkyJinHgJDWmoH7QrWOVXNiiVbAylcNjzct7FkgO15BySb0SGUbj/f+P6g+JU90XzRzsFtf+QocRFPqQGxR4BGeAi1aTYDa2a8KEBAhDbfTyGC1DZeJJXcNnlYN+HwZb8BNE4lpLGOyeWNIzzvVP4=';
  const _INTEGRITY_HASH = '14c68572c25b180c94b6ca6bb9a282f42663255ea51cd51a3e9bc8774fec8fe3';
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
