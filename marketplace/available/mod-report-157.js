// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nSg7qhvU4XsO3DXtJPp8sWUc8pNKo8csYmCWlzQIIaD2wrvd/+p6mI8oTFlOgTVCodKbn5cisnc0ZvKBA3c0lfQdNmUEyr9W/0GYLVrOFGtWDV42cX7PVCUrDDr3UZGFIHp9Ch3unUtv/0Gp2/WlYE/dQKjHLZOswXNWOi1RtKaYzYLbn7X1O1zOwLWWaRaqi2sbJmhxLgImm1sb0NFCXYLNJBSpJMtkGDkzl1O64/JPVWaWLUj6xewQ2VAVreV1bLiS5F3EBfr0+59p0NQcv1fHzX9RH03K39gyiMKXsDnLiH0zpNwHC4tJVRnIvaCR6tXykl+wQbod/L4gf5Yu015mfAxPkMtTUJcMuFI17thHvkV2TKSCbD2UWkvobM6MCzeRpoq7oFVsM3czBpOHjwOUJBDKb7XHOb77lLiKyC/kbLfJHI1ZbgHb4mwMKSt9//BmSYjBV0Gt8J4zhJ1VQjoQQRbj9EAUGnZwyS8yxj4bwy+UK9AphhGpHaSrITI5tE/nMxJyoctQxPtzYdqF/KIymwm+47PbM6bzW+LPmUZk6IUtZFi+MrwFLgS9mUIR6/5tUrWy/rjKoc7OaJFZ66CjI88Z5BxInenS7PmyY7I2U6M5mm4oA6DZS7jOFdEjbfufWaZEtbTZc6pWVJXZsV0vMuT2V2cNaMbjik8ApTI/6Ruv15LlYe5IA67TFEvjYQUMma5zYE8uDLa3bHDTHdIayl1hsjewA2UTJijIM5VOYE2dH0d4VwOd+KhmlZ9Nvl1fZ+dSX20s4dFAuRAc1PwioJc0F89H+LJaajVKhO3H0qkSm+++wYkdoezk3AxXvu/JcbjdUSaL63WnnJIfDMH4DMe8w+DtE1RR407SVV69c0utSQRSmQy+wCaEBCPi1/rEaJcRIcPKR0sTFZZsXc1S/xIFSqZsDsIvTZZ/6+GZxlRuBYgvu7ikkDCcAPbYh3ug63GH2RYzk6DuoScTljs30we2s89wavClJ53sK1GnqPsY8CpjvMZrvKwPfCBQTY2uE8lZYoP+TnrQj6g++uCjC1BoxH7RtxS9yZ83/rytKYaOAj+c8PmFKY3eNdS9af0UmSzEb9WRIa1DyOrxT4+TfJEFeQXTkHgbx4V9TtnG5PgvPrgi+wvADtl46q3/YRrzyE6jjYax9M20NPBTzhNkhrP9nNvzTn7jWEvAzsK+HF+denqRo61Av1IH8AYlGaVlfaNTyhdNkVkRhDvFBq+C2OJBqtl6IYsZDHJ9B86qcjbBTOJ4c1c1l8ojY5nsHK9Q/kuHiTHy73rgGC5ROq88Xl1RB+rAjEQU6C3NcMfPRFJHF7MPuo8mKwr6hcvFZco9SsvlUsIlOGfgb9ey1tmbQqxGe+2sUea18CmKPxZY6b+xMc3CcQ==';
  const _INTEGRITY_HASH = '947ab2f4a4d721f343c8d54f02feea31602a8c96f2d6e2552ac6ffcc7ba1bf9e';
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
