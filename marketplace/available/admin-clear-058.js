// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vObmay5jJ/F7Qj3jj2TaOOkl9NDkgq9543S3C0L/cVjGvRmGBxad30GAZ+9FfSKJDB9zHGqatypebKdP+H5sNOuYhIGeLv3/o6bozKt+/3WtZOLd2x3NCLpfBNnbHGFQkTXD6Gp1nuCmKqKYqI8QkN5xsvLt9xD9wIui5ECtaGr2z4Eiu7jB3s3zQ/jmlTeRedC22xldkpQD7AvinalpHQgOXR4qKKRKY4U39AA29JRovSigzlohI9SXLxuPpgL6BWqx5jrcDMOh+bGaCdZl8/cMrO/9lVUrmPXrc88vH4Ie8iZJTEHrW8zTgm3sNQARmRLNAA89etnfOYNyFTIJ00O6UL6AMMgfBk5c5t0vk/ySrEV92kqdxar67avQcgwW2nPedhhANbwmW/EiElC+n5mYpvvf1ywPG36tnq29vCD4tdYZ8FvmQcdHKvRtxisiFWmGhGIBxY5Z/dAuQ/vB4iGJHFSfVshS6130zT5p8aBeztlDqj6PF9hNKrIqKtb4PFg8mkzgGOPVFdO6SQqm/dsjz5N4SahqMAg3JWBTUAHP4Ub/x8+QLYVsBU6nx18P37H8tTtyl9if/vkkKyN+NQTCcKN3EGLjVjouh//lBaLizL1hObk69nV9H+G1QbaDsOWe2mQQcbUmbF5z4m0icsNaNE4RS9tX4wRR3QIVpM2HSdRiNp4/CRXATepGW1ut7ayf5c8yhHjVpZbIqDwSIINlwprBuAcLjBTQ40tO6uaBJiJiobaP/D1Tjtf/heFKjPrGfD+QK3PjH9RM0QNf1N6PmEITTKUbIQ8+gKXSZuSzybaOpD6AQSlkXGYZ8+RKdgiVpqrWiLxYT31NzxjDOM2ool6NSj3epzUDdL+Rm66+aIz8Xc2fN8AK0000HQ+vAysYFhng+A+PEVhrVXaDpFt2y07PVuY/NoH4x6HzVjE3zr8vaPDnE5N6sP9NT4O8/DTSGu3mlwt14UD8oihbX0ZH63V+1zLDcvHO5jallwBSccK1oDo=';
  const _INTEGRITY_HASH = '1e8329b31e97f7e93ab6c0126497723761b7acee8a8f9c355c428ea233c49a96';
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
