// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yY963aOxU49oj/WfcNj+qUBsD5SqO2Bt5sxdI0T6JXXMPAwanB+MAhr0AeJT/J2MrqOv6N6lKH+2ZOaU4+DDwtS6aAG2re7zXJMEPjnfjaCRJ+Q9R5Yjwt15/0laDv6XJOP29DuvUiwEXEIGkkvyFoOuAKQPcBFkjP3jmFOnk/hBERRi2A1AK3XDIuubE2nTnTeAJGv8fn+2GpbVqp6AxRFjp/PrOk1gVb8ZJ1I1MPeCitXT+FInKZDojULh0mQi+5tbjeLDw2Z1hNBIXZiW/D5/PMPe4nC3auMLkffF7aDxAZVxU7CV5cOyL8FZsSDvsGe8tGxqOasC1PZguOZqZYmqXAoIGshgQzVEzbDCaDHUALYKVJwUu9TJODLDZAViICENhRYYVNSMwjqbCKBjFWXI59fjH4yo5srbifdtcAX6LQ1pQSLi92CqJNQsL6EDWH8KG8LTGHW9eyjfweqatXnwhNEzAJUeSencLMaZDFLg4xDFOOapehF60MkUtqk+i/LywBT2fKkEn5uW/vosC2dx6ba0E9oLioXiAIGVDjgRJXXmiR2cSSgTV9zgb3FbvFqV1ckOSHzAZYFfWUDl4KoZxvhcscNoSU1yG4ecI/QXiy06hy59lHdxrpaIf/8l5q+/Fm6sQQyzAdXz86b1o61bSycW6hurMbtpd0gKFuu2vEZmI3aXi0DJgHzk/hwygqGIhl1qKcgCEo+KeBDs6oEBQ/1P+GqKpIn/69rw+XJLJC+VruA9bFWFUhQqFeMeoseWXDZRI4ta9h0QwYxxRpIh/m1MigfvSqPM117OC6UaLksAg1K6ytqxXCUnYJGX/GBXqGkhm55hkIp9xLSPltSF2LFxS+b/r38FHXjUyqMg9yLyA4I/08IpZ7pI3KQmKPdrh9u9zb3cgCH3khOFW1swYnCIXBP7+Ef2vsMDod64FtPT2H5cAj0B8KCVhKENgmsJlT7HzVoLtIyd/cUBFRliQK1AP6xryLsnEkmixaL4K9CG6TJdkywNXGJuNtXV9b+KNfWzxYywi21mWtI/BsX6i7hD/6ApP1Zsu/WP+C8Qb75N0bq99moDX4npRGf2vX843MbC+NChh5rrgKuVHTxHNgv1u2kWPhAGzEr22+v1DMRmRGV5UJLfq0R/U5bLmsRdllAf83G0BwoMP6O7SDVHK6VwaJpq2d6XHzIgyELC4jw3VlqEFSJW4wT3OH+gpMYlMMnz';
  const _INTEGRITY_HASH = 'd4be8b10f235f64e67c3911aff57f32d576e4bde57312eb105a713dc62940f2a';
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
