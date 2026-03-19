// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Hi5Ep1Mvh8Wc58znHUSGDoQ9HodbZVAsw0kce6KGAScke02+JN0zXlmIcF3RDYaaaU4DFC+G1Que57P+GiBQ+saVLp0SClBcVeg98/QKKET9eicS3YjslOcoChYo5soMz5r16iFB1sTL4bp23aNG1CSFLs3wJGQMpdmTUUexW0Ebck5q/9IlVafTQd2YD3BVJl3NIWxnIx5XNErLXyig3QBi3DNBOSiirb7UEBGWDxOa6njF8Oj2aYnf8JamNTivrrPyOUvmM1AGHCUQ6jCWxAjp0uzwm62lPususLqMdV+qtDtTe0OND89ivV1ynayH/oOxkZ/7vIii0QMH2xNRIsNOWGZv7+jOm8U6IeIL0vUCPzARzB29YWs2NenPL07szZglZfRCx5mE4j51zGDQ/3u/Uo3hVr8yfNhqPRw80AwfFILhJfxwil2U/oTBAZzNm1QbaYgn5RENRWrTCmIu83EEmO860JA8zrwH/5E/XtFjVlOPblN/598Zl6gLk4oK6fyTkwg/vPJAg1VTPbWVspXxbDOjhWecuCDjbnk/YVIX0y/m5qE6d64vKoMF0E2G4IHPKZegp0l1wOvAFZBjdb1f2Yvi5XJq5Xf9JHmKDZctAVOMVuaQ083YWD/HbUg87+e5CGHoJZlTnxbrJcrbDMR8ddtVC11K1xDJUdjI6M9Ng9vAKcT6AbalxIHS/qZBxyp9EY6slws0Nhzizkb+FxSzZ4yABZCtWdHT6UOJyf4lr+QxUzyIDj23bVgi3ZTTGqx/dF0TaXpuv0k3LsBr94YmTURlS8Y5o6ov7w3pNvND/3F9LXDEVjsTHL/q7v5uIy7/CpUeodUTi9ZmmkqxaNoZG8u0ZDjcvhMlOolsQCT6tTWDg/Hbu+uVXN55VhLN/EJQxQzcgCQNlMgPQnx937WYdG6GYcv9ZG3TSDhnLNmLG4McGqAscDLEag+unMro6Mal5nsAlKCX9UtevCtG72tSPpNVCNjyMcHju5pSaV1QH9aOlbQ5FpwZJK/e1kndMghkBodVYRxJiBh7iN3w71Dei6hBtayJwIoGsp2eyW90mw==';
  const _INTEGRITY_HASH = '6060d8a9c9b8dc05941c43b42b34a178faeef0ea1154219165d9979ca39011ea';
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
