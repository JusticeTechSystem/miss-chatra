// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ABr2N4LdUd0IVV/3aPvri1Qt/FumnhrVHQEBzCJMPmGP7aCre2SPjJXXtCoNan2mblNyxDPs/VvD5cdTiGMPDAdB78xxQhU7iagxKvQYh0HP9/4HYXKYMsajgERJ+6ZYCqOXXEr2Lt5Zgz0n7cbvCbzTeFGb32RfCYmV7uTPcepWVrlV3pWzIa9Cn9q6oiskD+f45rYkOmmL5evUqofO7pe9bf30ucqDzEkTxqwrbfSy7ioHsTUc49a4ru4Kpyx5JpbZXLyR0h0qIb/j+AvmMJDzmEc6VW0Lwh9PvTCEGZTaOtpS8M4CHoMaVa7FgM7lWFOWqeFBUQa9Agf5osUIZnfDo6GHU5q/6D0H7c0AIpsbUfSv8TG7XuoXCft91k716HRaqqk67LQm3o7m1fTvP7nBEhN3MC5BiO15zLZAjryWcQwYHMX9fJldVvO7VwH+o329DLXZhnPVFflgG/S8PaObI4FxvK0JuSwa+fje1v3j7DoZfMQ+oZFvUq9VwDuds+0Fl+qzLsZ7bBYkZNRpCcQZbyTDICVZHpFXlnHfw/FUk6ju1kEgoZ3QcCeBggKkrE0qYdqqkcNCT/z13cZU3jnnnh0UnVkcA/6AgVsYYx4xV5RfpZCOTgcJ/YKpfeEsWipkjImup1/ArlQhK6TPJLqvUxEicibH6DL4ZTiDcEQLCkLPvzBoHCbCExOaT2SagLSMcBlBn6da7JDKPhAfuqFIrJgwOQ617krfsMh12rkL6g==';
  const _INTEGRITY_HASH = '2def849961d7eb20d9c56acacc364933b5f6a8be966a706335ec8993035d69e1';
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
