// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+uwgG/h9RYzOC+lNih+gQ6T8XKEsYbF1o6pohZ+DSeQyPcmw7HpoPAGYAzTnQUMopW3bxF44P7ILkHqG+z2L080EF4bELcx4Vd9pnLarBG8x84Ro2qAhlzGPIHgqVrZT9iiOHAseTRAGWKO0pGHIb28zj1lTTc0QXkKQCJ53XaqslPgNiEa1OPhzD6XQP2WleDJJT8HcILSL/NPvqkDZRoZp7knR2P2885V8V+9TsUQpVsOeC+KZektoDBrPxnJ24htPd5uqzyGw8iKFeG9XUH0cX4VsSxAcm/TIV4KtZ5aUUJcCvlpuecc6+FRROrYwezbwL1xdbPdzCP1KJaEqZgF3IuvG2XBvmSjqLHM+7DvfpJ4EwOJz6PsDS0e3XiXfFoSnsgL7/YKPnUqiViiRr7mYkz2g/R9HwIl8wqcbXaZ4N+lChHhpp1yrfGZUndDjMDBXVWrwz85oMp/dru7+j9SHkLIuVyapE7m2CQx8U6gr/s/lGWPGyu0zderqNACFF75WT9lhcEEuKDnk0jWZaYfW2Rdxf8tUR/JFFxP53GDh/4zXl2XLCI8f4BVY7YosTdW8DzCCWxkTA4d0l3cIQwXK+qsDQzC7SkT+syTJ/Q9+NDuP2K33DLOdswqz+yufCWF9hRMMIyd2iKvhR7ulfMSabu2/6yoy/mHsQJEA7dRv3lc4LOVohTb05lE14wfCJRwdi0IJphIU0GUrZ2t0Z7Q4IWYFlkABMjsDm42LCA==';
  const _INTEGRITY_HASH = 'e628dae93695ab86d914251dc680e5dcb4d4a33b828498eda5c6cd8fecd9764d';
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
