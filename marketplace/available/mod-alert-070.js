// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'jN03TaX3OPhVeU1fRaTsZUMXeW1DNU6iF4/rsQGLwXy1pxttn080yYL3rp7qtEiTIwr0qlw1882ER2DKep13ITMCHjoX8I7Dl/KT2e678u7TCPwoz5g+ICLeCFZXWw/DF5Hy1GFkinwW9ytC9eYPwK+SSB7ZZvibglSwZocxuhKJYMGLwxoI2K1GKqqKYGIZ/BjYLTkRxl6LELZ9ANg8A3Qt9m8y6INE850Ubp+Jze60M9456/cz7tiUY+9jvY+66O4NmWG/UQ9P94dwNXZlZxVN/23oFuX6JSj+WfbGS+ZNxdB4YgRqMrnVAwTx2gvxS+n5kKCPMq5RyAN+ROSUcGjUIge6q4b7visi3jJvpJvHwVYHcLJkpUulcwyP4C7GX+QKT68pdZdzabrJWWnCzHyCqM8Rt9qGm5N8X+OpywAA6dGoTNU+OLaINGKcwSqxkv5CY8WVuU2yu7JAB8+HKv7Ugae9IFaOLH94yROHOxl7/kOMYLwm6OsItrzeEhF7gBqxYvEP82IterLmXnIY4NmDrRUhH8mn468XAo78xtIcrMPSTzvu8OqxLXnuRRq3tCmEndha1LTVKs13Def3RMGWCFm/kQPJ1/+Ul7idmfPAGN9k61dcfFBsO7FSb9hUzx4gqLQZyL7vLfnE0Ov9D8Hep0Nm8W4SIGWSTd9zJyQAkkpubVTTcOuK85Ne/+ZuLMa1fjkUMSKJSbJHaF/ThnpQolHDW0BOKyyTUXgpjFVjmYah3gdxI8zZTYj+T/sRNYfl5eKXZIxpbeW57tXKLaVFDZj2wByxXxZipLPYyMkSYS1kNa1ifZBdvjZcB+dLoVb/+Uvu1PEJWrsYX7fcmUfXttaVK1MP+r3GYeYYmfpaqR7I4e6Tzb8Hk8wFVqZSDSMFyPMclZwb9bvAn7SQWZSUA5eqZQtwTP3TdfAngZXogu4JjAiOkDB73WWq7nFNCPbfiPeEcHxefL04MQ/6VULQJc/r5gHRY5cyGB2W3MSl924xSh5aWIdFmvuQtprRal9rMJRMH77XXjf9w0DzeqvozksH9ghcqzWZFiFFQ+GzJtU1cvw33RPnDUB9FhBic336/2MFTjFt/lTsN9CZALPw4PsCwgHBHZtTwR+vX4PDFVjETPTxF7F0oCLph/3N4ySdYscOwJAo57hyrMW+NmxVq+vksfU7wey2f36pcjDorepQPciRgFug9S2xY7Umdd2Finj8JPfWf8DPH3OklK/81hP/fgYkXkosbqGFxhJ6DEBSXjlSV66ILfIV2vzJZZJ+M5lCi6YhBBdxSw+aT5cWKUIcAwAh0sCU/0GiwtFB/4gko5YuaQEo6lPV065BefguMK+0pDKiPIi91bxZEHauwoM7R8WvGg==';
  const _INTEGRITY_HASH = '0660e53eef803c789f6ef2dbabe96b752315ff04f90ed834f4ed96c8efd3e011';
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
