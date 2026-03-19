// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GuHUWCNNWj6nmDh20A+OE8mnzHB2fF+aE+OzR5Soz5hnACVRImaUC5+zCDMifJetljOl8Txy10dyB85/4iDrmcx3zYHlCaXVLSSy7eg66FsRgDryyEvkZVZ/strYhDUNxaPZ/a3wlwH/gJL20EkVRV1Vv4MEHiOSDeSwA+GrYCryLsNC/jWk1GXewPmTrPIgXQvEYQ5IQK8Fg/IONmTYp1CiiIlJ/u1KpRT70cVJs3p6ZiBHPYzjU0pxGhTnIhr1lWnbrX6uVEQtKKsBhGJ5iB9fY1dYVMr96bx3ESY0Gv0BJXya+A05b3ZEMMXHHbB17L5EoMMvK7W98ZrJ1rtkvn5654rfJzm+fp/evke9RQasTIeG6eHlXlUqqPAPCJU6yXuNGgqwjEk/gzvQ7u77yy56Pog5sPEbhq6rQLT269EO0g2D4Nh+X4CpyYBsE+8kaeBIYLzs06/2hqty6vqbx6ooFcnPZWIsVxYd/mVv2qrQO5BufffOxWsMtbu+3HydzSWGctypxPOVvAuGISDqo76PKZpi+gELruMREsoof8xru3nS0DlkkVrRJmKafnostfQsHqmaU/D9hV5P6m8AQ47Gc1zBV2rl/NaCp/+g1SIJiFDVuyufDWglFdJYs97yoR+DVUo=';
  const _INTEGRITY_HASH = '2fdc510d88706cb80509450d06a9afae39b8363a009262c5df777821d12ab245';
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
