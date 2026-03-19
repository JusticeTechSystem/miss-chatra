// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'i+e3AUyIcReXGfdMfWjF6sYV8CVGRiK62w5X9i9WBgmfJ2pOBkNWwWZqKtorC85Tcpp+ZTB9FDI2i4I/0KJ2xxJieINCFpDz1x8XxFl14v3GR7WtRNg1qSjuL7Y0XONUJ7hjdSm9dXvzdcoRrPD9b3reaQ1Wx7IjRc4tIgk5gNlLKy/jzLgULKpnqUggMB3UKtJo9ygU4F5SMHFljh9gu5+Fay+OPwFb2pitWHgOgz/lvbkmGnrAzd2ksfn1Ny0TAbt8Bb6t/EsqL3kqckRux6ijyLFhvhB5d68tzIGsZBvgyFolaHVGh6kjYmNgmWA0Mw/AUDYxV1oUb9xPj7aQtMf7O85Sf4pCkZhZvdITutb2upOHd8EI/c3D7csGLh0B1mHwxlmFvzqApElFQ8Tom/MA+G4ikhRYs5wh0B47kUvYFH2jBpvVWCbJSr87KpswaBh3iIe80VKXxMH0p2FNunQHfplDn1Ls+W5OGzz8lNVyzIMUv60PuSX/Q8HWMed1uwaRD1w59a0FZssMGAX/sczedwUR3D4Vu5wRDvT1EyM+elSAjYuhyLTTQje1hD6SXHyAQBQMI9Y4W7/23EUNIw1T+mHe3APNo+P0QGudrP3NYwn6buJrii1eRM4SQ+NUIFdmzFR7G5XPSpO5VdzfPCD+3SVbnwhoR5uIEwzYyGruMjcRo+qqy8ak2qFyQlbsjflw4nA6vYDE7kC5+XgoNvdnzP/JlLEHHGfdkQFc3CrI2LZnp7NMd191zdXLc0BmX2u9i3scAthbzY44kr9WC0tozCA+eqCdj5aF4yQvPfnqa4GZVT04XX3UL8e0EtrkFWUpRTiVCG12Bfhe0CKxjgXb/Yb0X0ihuTNlFxkUqAddEEA+bYReZ/FFWcNYL6TOUE+WfOdZyro+dw+X/uEMq49X42h/7MNLKEl47P+WRYQbinjmKJk90Geh/PRvFyX2/b4c2K2YNCfdaXFWcsi9hqvnDPCrHx8TwHWoxCFKKdDKhmy4hS8Ccp9y9rRn+XHXWhF4RLehZN96TT+QOwj5PckFOGMv1WqhZpe95FolTP62p4nKc+CFkXoVURM9uWrlH89SeVg//tcWkgDUUm+5xYp1OvuKNpTdBw9GgAUK8+V+2bqSi5Id7Nm805yVOv7t2vTj89Hq0sW13rkOjarEBc5upPi9U7JN5HKNGayZWjcOCP92UEym37y4zArsK9bzz+I1aYUzVvfNFUxPBiP65Cir';
  const _INTEGRITY_HASH = '6485294093096933464bb2096a29dc567fd87058fd9bce8229275031ebc4dadd';
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
