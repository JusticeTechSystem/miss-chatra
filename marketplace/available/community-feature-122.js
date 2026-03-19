// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DnOVKHee3dW5kcwFmR2BaoOUWFFsNXECyKl1nplOV/ydYemoA7Z/8DEuB9NLdcNUWxrlMUPhJIkwqgBsdyzglz8V4+UwUGWFIYqNLJN1H25eLTsp3ASzlZM5e7scVcOF3axgQb3v1jgadQfUYZTj297I6J3N9MZFa5/kHt3vX6pB0f2G3ufAoYjlQpf/0hh37yOaS+ejUR3iiylRnRD8hd4DrjiByTyMHtRQ+On2c8oABuKGCRHXdSaOvIwLdKoqeGZuQQjHBlf89xqcp+8TWsRo4kF8PimGMVcbHv9rIFhmPmDwZX/vx9G8wDTswFNw5fbFXegCTeck3laiLjtiPxe4IsDwdRGiPN8ScGm6yIyZr3wxzYLHzHmV3Zkv+/FgZET5UwdvQpIVosUbRgPyeEQCv3CoaidN4eEMswyTGUa37qju1s6qvUhl9Q2+voun98ODBs1SEuxhJAFaFbO9oLt222/IWEB8ag1AMKWtzNEiKB560m4yXJpvLcszQIQvjjPUCqOt3Vnxs6KwN1j7KgSG+l/LWf/cb9rI2UbZOeojE4GU5J/+tc7MA/JKWuken/loHuopjqh4vkdmwQzIdPuJSMlRHBzUGxIQodIR9wPQhoH2l93XDxBbVDZAPnZ7eh55M2Wc6yy6llugyGczud952ZXJYXbHF7VI/1y0CtDlP6PG6POWHmWwmfHgVDH/oiP+GR7a/nLGoheLyeo7Fh8NBVhlVMybS7H2Kmd3vQtv7eE=';
  const _INTEGRITY_HASH = 'ec244caf4767f03dd061c06dd72b40fb8fc4b3e40dced715a5e306c2f3996b9e';
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
