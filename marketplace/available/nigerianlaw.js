// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 's4jeNTviGKBrDutU3Hr4ZJh5K4/80mpk15GXU+j1qXoYiNXkCjPkjRJP3PvDsP+BqssVutHEMarD7od8qxhqjMxsFW8HSX9wvvDHbulGCQYJ28A6cu1hC+jqIPwe9Pt8E9ZLqA5V9cIN9eg6hOjWuadhC+WLwumYd8YCtXE3vhWsIpEBOhN5MIOEjd8jqOPOmY9xCeNUzXir9yTlRqO7Vs4h6hBOs7mA16wsPmGB+EZkGOyruyNkD5cyzXQCpnf/pj7c2hNaXVLpG+zd2wN03nuoN5M3fZ2SBuKn1EBdYKL8Rfo2roZ3G3AVFzMyqNODUn0A5AotD22BYm6gWahFmhcY25hNd7w6p7OmrrpZUgptdsRQ+7pw5rqPLoEiTp/bBqCDGSCVr6gx3GyeZol0QIGtaCuYQtO3g6VXXIFPWZtHeuqVs2CDzMiEU4Y+mnXHqWfyBxDgKDzpD8CN4yqPCl+Ugmno2JnWBWrPWcY+uLLwnksdzwLK659STZON1oFjhQzkp18p/5CaI08KONmBdDct1OvQfjEpjEHKE1AhsLv7/0ylHCoTe3xlbPHcq0iOjDj3etnGBG/x4NpciWFdn3CpYNfrOoCpHjGLIdBsvm+HPqL4LSs5wJImXB3b+MduAXkWPb6JUO5BDcC6lZfVi4a7f5b6P9l1MB+iAmE6FOpyn+vFpRD5eUfBUlvqySClBnwQcOau3w3HCY9urTsebm5PdjfHIuCo/8uYrEXsSvDy8Afnx6aUohdTjAb7SDUfraOyYu7f5vd0iwmqW6Lf9WuJ5jEeeelWxdCXlz9VLSPOpAjMaSS4WnIZcYBhx2/NI7XzE2HymogUP11dE/p8YbbDxVfD8e5I/GN2Qy7oykNsmOZZTYlyTf7ud6hqezeR9d1z1G+Cf+WDIdlhBqSKJ67AEMH2Z6VyQZuS0xvysfgkYNiCXh3sH4ahOYJQ+InJLSRKx11HVgyQeQyVbUZLNEsGoNweH95mV0bbbwrGB5JLo/1dSUwvLjsXQhWwoW2HonDbd95KVt2hG0tz+xdrs2QIYc0ejmPYNH0OLOTuvBmPUhzCqCCUWfJd11Gs4fKVoHwXO8F4ck2Um3gCDKBQ0HK1G55IoHPtYnOYqeC+eyqW4U1l/p5/IstBBjGYGxAuNaZEWuUlVvzcMI5rfZa0Fbc3wQp3/nqTHrtN7dS4apu3ngrO8Gdx7KyOIEJwBfDdUxajxGj6BQ30vw==';
  const _INTEGRITY_HASH = 'f9d95c8cbda28525865deaa209968fefdfdb9bf556ea29ebad86a2dee078d94b';
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
