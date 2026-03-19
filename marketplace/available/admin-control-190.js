// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/E+0LdTR5LOuLj14wS1GhxzZl4pOwE2yq3Aqz9Hw/X0ZjpvOTNesuEuidamEqftKMLARK8Mv+b2LKTII0jcgQF0fv+wYHA9YnJCnmdkmfmxBbsWYKxvtax1pGDU+OCnJE8JzDrDZu4xFm9o5EWfRkjTd0GzEQwbkJwpFJYotnxS6uiv8THGcifw5PRJ2ajvIBCCVmzMttkOJZtZ14huWOsufc+NcW8j8oh5eITUqULoMr5OuxKIuK/au0xupVb7VjOibE12BGoYpZPFhlQiKepLfPDTPrNraEOYkH85n+o4YafqFUjutoILkh65M/hoe5C+289iO+LsIO4fawHgn3/UAfwFYc5mLuLiXCuqMRF6dGNko3TjVOqKex4+1y6P56/6tT8q0qBP4gHR27ziRQxuhNNREggN627l01+fV4h/kzZlkqViJmgtGIPjjMnbBcld29c8VUFaBzmzTSbvIMB4uOQemf2qL4PP3meZxSU7++dJ6ZMSJbMMorJ0f1xyffBYUeWhdZhJW60+pXDue+I2a9i7ylI5VWKyJgYsGVdTYynCEYE9/DC0yGcvS+TbZy/KBJSvh479lQB0khDZc5ILFJWfL49MeGFpXjPX7niUBFMASqL8F0PmqaL92yqDHH7Rg1+drI2u2mG36VjnatvwCPeG9E5atjXL9uTMVbqWY1f1qmboyKRS3lVLWd/NgekDDHnCcT5BKIYb0SZ541DCI8bwjjYPg46hHjQBXuraKtQjdlzW0MSwvCd5nvdjYDps/2fjmGxjJkZTAfRk819PGIPET6CtCx2usvKcmD/8IPcpYwYgI9W6+Odi4IF7vxuJVqHiGGiJFHLiGx/8ZMfb4NwBt0G6gLOW3t6LESKi65HSWSr+THSGhgUD87WyIWxHDrNhY2hS5KHx7CPQ28nSXz4Ojbd6/eS3ChSPfkp6XKw0tdDi17iInFtAj43bSZANJxsfjUaIcXFxtgG9eEmfBJyJU1Pqyr7m0U1im22p/JQZEb5MFJzRh3q+CgxaeATEueiyRPYQ=';
  const _INTEGRITY_HASH = 'baf97a2aa6e0b127ae1e0acb1e1647c526432ec3a74242fa903c57af08aef677';
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
