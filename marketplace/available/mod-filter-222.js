// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'q7UM2RdFthnqHDBpKwoyYw1zv079EP2Nug1nV51xRBF15SBcSrCesKH4C3UIuIvaeu9DBNcG1lWMoy2f7QGNPTdn/+CyewVehJnZVd2q4TPwwgijY2VCLD4F1eKDd9l1NqnxDxsacq/LtwiDjyl+lwwc/uCdQVVLD69K9NDcufwRVgMfM9mo9wASmlOK5N2zuNxFrtmUxMeVoxNlj6bFwz5dk8Qfq9e4crr5l+u7plBy7xPd/xkIEgZnrMl8BvUZc9ko8iFB5NnjsulLVoVubsBO+NHKX9uh/g1iDlja4Gc8+pXNd98dBHeFIPdIzFjC39eIRvev/YyMs/isCNZ920SMbhzJ1oIstfP6Tw4g/RxuNBQsio1hPP4fzJ5S/lggv9ZOo+sM3WJuoKT3tNjMUCqlg9zs2niYHpNLc8ycuC889JF8CUXDZif8Jq2AbBfNpr1OZU3QWoOejapgDLhRAEqohha63FMWe1ux4niI6wyU5nkVj2wi/Cc3xOZhoa2nXuvCjJeuUQGO0CE5RVcClHjU2hxBUlUWagD+hL4975QIIfp8a2SYBxSkqwpDK7ScBynmSPGF52dsOS2q0G1vwIB11+Znrz5hxUst/IXHz7JLhdq6NRM1lgxWqzkyobJGd2vMR5nrOA0aTkcTajV5SQ3RGoMcUj81NSrWhQEuMZi3omQ6zkzZ/ueyGYBIMukvz+GDCd0bN9fY4PtmsnOS6XAVmTZRad/3uC/dCYzF1LxBJnTpnpLI7ZORKmtP4Mg2xaf5umLjOpf15LX/4jiob44GEzEg/aJNQPJpBvNqOBkGofIBuKHWvZNgnqaah6qrsCjYT/1dacDdXe00Tz20PPVA1JAzLZUPNJmqo2tLPGlxKgoMXsXAmwTUmT6LjBY+BK0rDoMB/CZRDh/lKyD9eOvgk+sGSVpeAiU++EOnkWUmKuPi6+j9FSt0A6coP+EWCq6LP8AUF0osz2iR8S8Z/5xVjTWGKkvulbgyvblsNkZoXx6vrJPIfabSUFFuyIIn0AhAkE28gTkpQ2KG9tscz/kd+axXIISpvbqyYU07uw2jeSz7JGTktHIG5W0jMC1sZCK3tCTuy9vzMW6GuWSl9FOaJ25WtpMgULSi7CEKwJGEwK1Gk9cY6k1Kx5s8kXneNUPI2hnkTXpshEDIlU7zcddJ5hllDWdGlH/1+tTLwS9oImilOUNlyq7MZqHpVJd9q16ZInruedb9LJo84vpimVBX6kA9jKVKBE2+UHgUDKxjF6djbB2ZKVbvlnWqRBJVdazVk89NusDel1L5JPK+vM0XkNX5Xyn+lCXKDs+VefYaQI8mtOxQZiNrchZBrJO6dHKJ5sFhF6EPJcQyQ42InECJe+B2000McHiGhIYjub2jgda6rrZy0w==';
  const _INTEGRITY_HASH = 'acaf39fd1ab37af7e3f7ac5ce5d2b301893f1c44d5c988430d4ed005240fb919';
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
