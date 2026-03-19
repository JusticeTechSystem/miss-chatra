// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fApXFxFnEuHK9OfQSXlOITrErKEWXP+rsBYAJZaThKNz4ijzPkpuKsY4d3n5s+p6zWPXHgOGMFgiHmzPzLoXKXoDaTxk2ffy+sVgJF4hLC9VF4bu0K2CUE/4Vd9XxK7QY6A1tdVcq0i6dAEVKiEpDrGSG5NHuy/iU3Y3Tg+XFJlyCNtUtVH0ocIxfmMsQGVT3ndeazQj51eXWhR5SEwwpGkLpTf0I6BM/1vGO37EZUja3IIK/IaE6eZm9B6mMOw//3XruJgITUEK4+DTyzVgBifsjNHNOLF17GQf7lllAZ+YqqqKK+MBfUMQNQMU4t13MjOuhSQLfcSwtalLjYouErJMl5wzWHKA2oBAg/9tbBhbVCKSQavUmWRCKQxoNL2/fRVBLVkKhTBxGgOe/ej7TY0d29bjJe0GA43ko77oZX4hu1k6bOjPe8m+4xDTNxFAwJ5uKvyPuOjZGh3deKnkrcGzcI4mXDYkaq4XKmGGot9F9JsLNVS+HhJxG8atYs9VIZTQ31SEu80Cirltit1eWIKrBfEq5ACP1MRL5hIhnn2UWgNBh7E5hHmtljuL+wkOsqlXHz7Z/g==';
  const _INTEGRITY_HASH = 'ed5513a56a7980c4b10e18a462e2351e9a805d99140ea4ed894d1d8902fdf24c';
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
