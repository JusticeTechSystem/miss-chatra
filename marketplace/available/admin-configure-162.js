// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'U1hQ8oyt1wQDMnna50fDLuAqkgo1sPegSRpoVg+ph2SfwUjnzqkqxeokabntIPYI5IQetTNk32cfCVif7FtEqBz1Gc/2JSAIe6Awck412q1oOvvoJzNzrO8zoN02+/YAaRvw4Y5wqENg11u84b7/LBsaui9z1LIhQvtwjIMDb3hw6HQ5rQgiv1prLD5KrhyOD+Q/smxaMg5pGNsY79dVdL8Zzmfd7bON3dm5Hc1Ry39pQT+3vfS3a5e6+SBBQ/a4YAxb5BzOqBsuVH+2XVfsd93RwGjtUQHJkqlYDdqBhOg8vnOL5UB+cQXQaZUULwKXHAHRtgVngBqbZH8ebiVEisvJgBW9DEEyKw0b16yLKcMYEtHZEJ8oJD3qwrdR/diTzzkNn5kzM4onQFvIRnTWMzm9SyTlD86kmzOlhxGVlMgYrOTUUPc9P6o9/Yidy9+SSVdMIFswtMPGg7b3+XCFzV45glcRzRrqlrxlUsw3x+JflCSpcx6ej6gq5tqOdIdcrbKSQWdoDSKDMMz4WKJZq7cQxOcauSdOxB/Y5XtWaJRvSkjO+jxh7WThGqsLa6o6UmvLjAuOYpuEs6AWv3LAopC+85h8MJxfJJLrYrep7G8a5IldWzw0oaqS6JD0VlDVOXYfhaOFXhR7iS2Lr7eZc8Mf9e7EchRvoNUzfJqB5rpACMHFCtxRZoq5NK1sKIVS/Qmw7FPHFNRgqUVrclrR7WjL1NUlH6ZH5kTjWacZ0oK3d2Z2uWieHXzazd6Ge+5z6lZmXuhRW5zug7cfk1m3geY0QXK1cpCIv+syv0LuMTsscJDooTnMpfX5mxFoBbeAOGAxWM6XsXNeRJIruVUuXCVEWy6LN7WwzkX/e+cn9ImbN1SB743KyuVzb74yyCw0RPqT0Uh9/NbqiNS3gmLmgfRPvYqNUOFPH4ZfmEqdTcJ8CKSpUAVOF8dUmwJ79l54Wu+IX6VcA5Tb206RwVuhnlSYFbmjYuk9L6QK+IRSa18ITBiJlv+FjPBo3KdMZcadiGmiLZdvWjQDZdT91WGkkA7L2x+QZQ==';
  const _INTEGRITY_HASH = '794bc92e399f67c1025cf4f209cc0cff9dd56180e383d8b992bfea677fbe0fc9';
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
