// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hEXfxm5O//KxEsDUDD4mRVYNsV0F10wUmEcIjDIdX60uABXdZHHQxzD1vprHyBzfGs5XC3HUiVhnmAAbI60W/Kg7pvV1J6cUcFdGwnoda+TCafvgylFQ168nOTJ28STIQP9Sx0McNZUqan8lnW3AfvrOsKdP9W+87vnlN0hd4PWt9bCiq9eXHd6XM+yQXFPwqUhDR0mz7DYcuvwbGSUqHN0hs4UUuDXk+JcjRTYoTK4Y70YAlYbIWIUPE/jxQihksb6Crlkp7PQwvGT+Khhj8YV7VXNW0ws1/bQGMNPW5IXVRKQDDUmxh3F64d1a90pXKtxk9u39tJkY5n5wee3hQqXJTndiaSWcG2CS0IbEFOHavUANvCAShgLa1xIJDGNhwm4E+uj4rCcv6w5LJ+1yUs6PACozhim5fjE1IroHjv5ahvWyahgZ/1T2nFHPsik+Y+2UrpQy0RgxAlwS58hGZB86Z37S+as7X+5U1gNS40YsRfrMkUCb+r4p1ng6u247lqDhlWyGce1fBJm3VQ22ppQnRukdv3SI/9EuZKMIsD3R8OhJP0EFq/tkGA/AMMPe+ccb0Ld6EUlpAJOnuiAAvKfnMSXyLems6sLw/FVB3HgbJL8V5pPGRYYoOoTnmebv7YREXTWR6neboksJrngXcWYInNV+5ugZ/hZji/kwXsK7hoUw3LDYiqEqJYmPHyac70JXssOd1PlNtRoGldi3e+BEBcJndWtQ4PNouHHG422oi4xScewbF8a/IV/s1yQ3nOI8jR3iIqhAs9pAyusowhGwLKkFtClUlfmmyeYQMN2LSo5GP3JrHb/DKeqmW/Wqn4vdMXF9PaMXac0E0kggE14w1W43d35a0j2i9qtPf6aDzcfiZeyCdtsUECItmZz6X4lJRFKpmLOafUM3U2uupImTTjJtgGdHGceCOJs1+DEh23CDMZjvos8PVEMU7eTm4gzQ3ykz4Twacze0s7VxwRTUOsG+P02imDuMxpNAlNg3U+gewY2i1Myts+4raFAntjGeW6HS4HsIxkg4sSxw9RncwSpWa1Ujbiq/Yn0QHwbJ3Qkd+GHCd43zCZEgOre35/aaKcqYrRdstuEJb2XqQ9xFIbgL6XyktuPm6GcT4Jd0gHtAtKtww4+A/SVQ7R2JwE0ARgYqdxrrBoSYqZybyu0w+L9Sj/A7AmePd5Jycq1S0eP6Okwc4gkWkQKeHq+GZiXs9xmPwJwy8Goszk5Ba45vdmjPpd8082YF+dpVOZkQd1pAUPyKdyY1bnmedHVM27qAJJrV3cLzx7W8Gem/BiFRrFnLBnppOqs4gQRGr1CfxmMd64ThOm7O8ONNsz+INL2r0E5DANO3IWeXjIpXJUsP/atpOeJRuPQptq/+DokzPNpy6aIxng==';
  const _INTEGRITY_HASH = '1f6980b74543bd892a6c999b1e8a3fd4a3cac2b4f2284cdbd191cb409412b3e4';
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
