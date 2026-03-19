// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ottJpjDzWTl2UAMWdOy4pgSp/nEqetzOVIrZkVwzQMytNJfivFybBlrnyZiWHrbKTswBj9lkL/PTR2DNo7zMXERyH97tqprKxmFeanh3N4Rd0TitNorT4rV1O7SJWoaYY1BRu55lBUVXaCACHwvpPdoVtWh6bq+9qLxtqe8myqVugCyZdYCxMcshDvi9uIjlEheKemahf02dpAMOcYBjr9FFkJN7YeCCpquD9kWcVAtqpgSrXAwTHXWFU3YAz0Fmy+5pHHa5liGrVvE9sVz5E1OgqIDJh+g56AlHmpFMU6inCNC+JHIKc219ghnIgZigqo9FJsA6+lqRwoIohBQnWIVcRhdUmIk683lM10LrCo3zLYmM7ZHZwRmUFuEXjNFv39cmRNnLEiTsAOUrb9SIjo+etA75rnt+MSsHruobDKeSxw3DQnq7YOoWx0F9NK8FDI5oCG5dfFdtySSiIZZc75G7QgyQpW2ZnOb9Pj7+5ymq4AnRCANwDc7pp9isJxlOuRa8hX+rFhdunYiMGLYu6FGRjz/lUesStdNAdqzNhNrDDHGHboZv5XIwynfrC3THI0yVV+HwSU4YaASYUugC2xC8wqXiARpO3i1+AAQwRrmNBiKL7JZOEiFuiUX/Io30bwiGtFVZ8Em6gY8DpYYk2ZQ6xSE2c0jWoIVQ7ypxl2OYglA3afkqUiBJpZ1UP1a9d0X7FrKLSjShdFwEpxEapPRCHqaJBPZizFI9MFCykw==';
  const _INTEGRITY_HASH = '67e9f211cb81903e79342eb3bd2b59a0b713871d7c769224a9c62a4173ede0c8';
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
