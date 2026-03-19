// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:20:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Y1l15AVGIM9CzvAK62At35AouByzIJ0lzkPfOgjKy0hjP3i2Uw5tdvuiwLDiMPQJIPwwDc3+ab/3Qwz9PrHGtda4ZGjjmv1dGfEi+avNBRia31N1LRweONHvvCt1AjZqlUDl4TY7R2NHvu2rRXBixt51jtbMUpWVr7+wHdXMyxUFwT4Hj1Y8bLz2nOhrUED4L/H8ZmrnPdrWQjfaqgjskCEo5FhjTq8BFi52Nusrp98tPyUzYoif6L6469QcwLecGyHj7bIpKPaNHcS+amHViYX4Ie9vAEvVJIPTnB6zwkRQadIlECAaMLEkbz4JTnHGgCJdIHPBdfJ76j1hlJiSd3awFa2Yjkr0saBIl8PGMX+2s6zWninjPESEqvmrQ4sdomgzVBZhvLcXNVno28figZUTkZpgAofC4e+fZr2+j9SSXMUzkVJaM8v8gl+NyjRoW0OVPtQuONEN9iiO5GCZmCBv4HM5jvXvDq0ot0maDLVoJWcv6+sJGdpQsdPtuix0f6DPAvnLVIVY2lSVqfB+KsSL9K7Oqn9EyWGxhVs769Vxt9PjK1yZBNra89p3Qkly/EMiEdUiovvzejTBQ1tW8LkCqMIsSejTqsrmFWorCar60w7usosbDc7tJPZc4NjeBvosdBX85jBE3MzlTNG59HLjWwYmdqKNoKruAd3wfbfZSVdNwzbph6XmEr/ZsXJbhzCgwvlh5DIhvxCkaj8SxhoE3rSBI34++owndpi8CRxkVS8Pkwa4BdbWJYON0NelOT7rlgiXNqbQqYWqP+J+hPaxWeu1eKuXfYbRRwhWPGD1WoA7EXEb6xP4cxixBSAHhETY7RUeY59dWmhqtTpBslrQbpj7bDE990jnV1ejd1BoSi+NKgQeekwhNrhM9fYa2CkfLA9kRwkJejnXm7p3p2bWI6rJjJgZsU58dQaekJJhtbG2ckPvX5VkJ+Zg2TVeUdT7IkXjWFrL+0802SKwOFIoWHActiFm3gWzgKavaN6QUQ==';
  const _INTEGRITY_HASH = '9f9a0db9e8e3a9c32f1554a6757cf5ff3b2280504b4c4f69a6dba64311bd1074';
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
