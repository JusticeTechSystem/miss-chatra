// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'c36CM4USN1rkBJ2B1IGZ+rN05rPokReKK6rYkp6mhd666OwQq329kHPA/5ACKB+U6bNKujX4Mi0NgzlcuxyjkiULHmh8BSCDcpxopDqESh4owI5b2KMx6vDANg6e/rI2hRggzmYXgcj+DOpr02YiK3h4iBKwPzjGhuS9+BbCHz3ozufxzT9B4cTOiiQuG0izKZb0glTLtuw2D5rVrlNEpYh2D+BRn5b2VvG2FwtKGnS/TO7eIrdxiLS+simbt4Z5WLnDSA/uk9updCPyKiFR6BOuvFP0h2GEUsA4zoru1YZHPgljClupkXn+0nHNhLjJNN8GDCgbVOEDeBSYi2leOwSw6bL5nZ/woJY0IXyqXES1HXpQXyNuMTwFX53FkfSSbLmr/ZWFMeuqlC4c+3z2gienlH+J6PsubTRoqLt+o+X1uls6VKHOMJWReWk7Lf4c+j+q3CRkCJLnC0CZJof5aXAJbvx58dVy1MP+n+5CQHwM5QCwGLjCxOJu4yGHLzGPjKftw/wFRuFkv1U+b6IpwKYIKHBeU1HNZIzhuvbST0n6IfDc0OiPcSsKh4pYCABedyqxEpUrTFAXMAnqSsgSapt61wAwdRS0Te3Hfu7iWJUcYCq3mqYzLDyNVmRWmS62is3tTOyWky476e2DGL6sdJoFKtpTDUPVkYnb8OllRx/LFCXuRizjuqtpLno1f0PBZaGXf+aWQSoA/ZAdezW3vLXFB54yxJ4xlmHKXMqH5gZIR3e68c7kgY2846R8BYZQGSxdjaLLLgSuuVGOVP/yTlRk11s0ZNCJI9iFljh+sAfcKuModfWuIHwWsxjrF+D315MYMZKztlR4rYu+S0Pl24O++ce1S4/qXwH5JZ4oPr2rBuh7hCdATa6rqXT2nzvhIHCTdBiy9OvCbM3AaGE4YR3PNRDAl0hJdBr4A+HxIDkDrO+f3e++pDPj7K3r2ZR97wy9+n6JTujFdF93rgywqsQB8oszY+S3it5F+nEj8a8wLmd4DfCqUQoRDjNHcc/RiiKlW1C+01FQ1FIU906EH8GZ8qoalVtckj+lbwF8nL8MG9XQwcjk+EFeo9rOmaaRW4lNF1zU3ZtfKreFIgXOIYOmMAkSDWMwzGvXsxYx+0vaI8CbXWRgAuOYy7z5Z9h/qr3vHD6d5ZZq5UD6IGeidTDZ2wkq//Z/X2l9zhnX2sgHiJBDD5/aM5icGdUu4NLz4cb8tiBEZMw8bdthJMTp854s/zXFzTFS+k8fTShk+rR5lYQ+JWXQdnVlLh7bhq3+XY+xYxgS0rkViqFU7PYKTfoZXsOEOgPg8WKdmGXkfAZtbnFCwxJ+9g+jK7cWeSvwl9FN+HmY//kNb6Ej7q5h19O7ZlI=';
  const _INTEGRITY_HASH = '8f859fcc05ecc67e8803da1727e58d5f85c1643f8a6ab3f5012b9a0e1d090076';
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
