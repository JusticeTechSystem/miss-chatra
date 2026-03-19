// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aWT1T+yZBKx57WbftSC0g+P3SCGNfcqkTzzoRHvyDxKrB5DGxWKldjiBaCiE8YAen0cmi8QEt/g/eBccfAcRoKKXwiYi2sHHOHJfLqKdaIsUo2PqcboQSatzrPi+gV+FJyskR3ED/9J2ENHeoDPHyhQFKrserCZQRqbygl2At62wUWgE4c6DXnRGJh7vwtNFLUJudzCrkASSBJLDMeHZxkEwvdtun6IfGec+diqjLlG8w0THEgXXIuQTCn+E8fpfW+GkzKOTfw18LCJibi4I+USSxc1KRPcuMF0LUpldtm9O/O+zf1tO8PI2SwzSzaCo9wgmgkcO2kLn8iWlTBApG9u+vn3fPAQ/nemIN4OYGi39Rr5K+2OM78Q38LJzc/sjhJaP7XqHOcMGAv1qg2PiSYapG4qpc/bM8DlSvGpP2TQb1xdqXyqlG+EED1P8zPG4k8Z6tL2G16ynUWAW7CiLwVuZKZFF8F9BaxIpWVuidIEpKHevnx1KlhGg2aH+IEbT2hPbZyB2egZ7UACqJjFF81yxdA24XJ8jiNfgpJQ08moinNdVNSw7KJEx40zh9Ng35Q3bD1NqBoG2FPOVzegsZJ8Y4295DtrHphaFFhCtiyLNYFb3+1mfSoZQpt10Sf6Ke2Xy6unhZAldmmjObDwiuAJ+1S0GMhwFA7OBrKdgeufEKPm1eOa2wAshpGG7q9jAYa6blykwHwevOCb04iDZfag1M14y6U2W';
  const _INTEGRITY_HASH = '756eac1e3d2ba5f630986e0602d572ab17e911b8571e2dd1b5a12a66ac66137e';
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
