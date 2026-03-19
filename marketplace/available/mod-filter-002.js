// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CMEHzJyTql2vxq9OsUXhmS3fQ22mnpm5IuZSvgq6txL5lux6us+l0KTPSLgH9K4rA+GNwJu6vhredxP5GzSkAarceS4yiabuqfvUfQ3T9vz2B8Z94p3v2lxmqX5ifZ179qxEwj/fgx8ZUFIkhcCjn7d7qx/UgN0blcPKildpTGCKZEcozRUXTcT0Nz7hXPDbzuoByZPGnXtS8GbC/NOGrqmmoJkjQSdwm6csGBaciI7vIWUJTLYqh6jpFbeeeJn+Zb3MczAGWSmLz6TZS5RkpIacw0t/NUQFU0p+gXA4fNa5xk/uxQv/VRm2nop5yv+eFqhHvoqIJMKNHQgkTcY7tyN/fUHLZ2/sZTpWTk9cwXbPyqBJJR1yp0rqu91EUeD+0mReiiTdjrEJ+H0zONULsrHLjMD6eNljsrD4PpfUzDV1/1kxcFPAfduXE7dslN3588uzhcAUCKhcip+zn8TofvpIHgptKm4CgpyIn4fslLTvbD/A7mv/sKvB3cginB0/jXPL2C8A8zwxZ9Uku/ou1lYyqlgf1TaVAkymi/79GZLKaHsobEKu+1AsDN+1US8jwvbTFRhOoKOZbOfae7hN0ZAvXl/fyBZywsqqJpsFnbKW0kyUUl/obue65FEM3V5+8lYQ16T+8uFw3y+WJFjDAThiu16T5xhNEn8ZyeXAqx5/61/m7uwYiIu9S/EPPV+zMJyAdFl6sass4rXg+oCcgwHta5I4hnsM8Vi8DHtfKe6FbJ2b4ZFWMX/9XPZjh/Mx6GRswk16WprA5pPKRMzSjrWWm9FORX42bK1yNSpgbrhYK/FAsKZWi0L4LCaVfarrD/msOxhGrzxQncSSvgyn6YqfwqCcryzFwZwg6MBT5LPGrk3LNv/g8NCaHtMCs9VUdA4hU6BQC9nBo8FZg9IRlzxG6/Mhu3odnwiqX3WekcUDFNA+Vz/U0Y41rzfhHkDPFa2Cay50qKIQJ7VW/DZoKw4thn92hRucJehs/KpLUGBlFKYY2OsX6SV8Z6oMnqbe5KiFxmo0vJ543On/KXpVVwNEOc+0ofbK1OJwq1Z0fh3n6VRSWUnNM5Ld+YWT/NdbNzefftYCA3AI4ciEpk9L81VP5y83FaX7P/e96xZ7Kqn9cv0b1giC5fiy5RET4TKcNsmvQgyhA4QhROdd4OsUZ4fX1gLud+XH/Lb81+eplwKncA3RVCBfX/MWom2C5J7N2AFVg27DL3FiulsKHjIreXxkP/3tQR0Rrdf5z5mQ5sSFIQgVKMqwrDJDp673h/YL9yg46e6Wlbnbqz85c00FQBY57v1UG39565UL2w50BF7DZKuzr8An7ggucJxwxLludBSzzlRnGUQV93UBchZoZMaCfypwLS/T3ltbmO7n';
  const _INTEGRITY_HASH = '095d6929068d7312c88ee1599a082b52fa1016f596628117c809f23c93bd208c';
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
