// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fWQAdnSXNwCEyFTm4nxyhAz+1Y9CpLX/Vpz6rMSHMsJ1wNGOwBKNrLBhb0hpEX4O7WAoU6QA0BwW4S+FJQyQiAyVenUtv0aCvx3X8goVKCoX9hToK2TG1z8vd4tqCgyS0509o5jhol+Bi83lxA+zKAUCd98d5cRiNEkWJ+J4BE+F+ZwG/dew+LEulluxPfcJDdpS2EjnoKlC/CNsrcfAlNhGv5v3T8Scx+Irroh7gM5FOM9rWUt6NAKWOwa9Tr3NGXcOXGFuvBQMBpXwY2XRGOJJkJ2Hmes6gKuAGfMBwzywXXFFOBbJQ0ZnTrYmB8ew7H+4beQkOihpuhp6j98H7ZpwTUjJlz9Y1XRwPH8sRZRdHLY+aKFFez3PyZbAxdH0vri+HNmxf/4Ty5eoiZ/kKz+ikX1f8OO8PkjlQy7VdVmNq83vvxo+MLTZOsjaw3nM8Kceljrp8razjCnrxekEmnEMbKANuFuV4Wic3IRSrCqVcNRKhLEr+yIBb/ttCJnV8QOq0rN6rTXTtXL6HFaMu5KTId9QfgxTyzLv0wjQscCgbC8P9z7HmKJdG20Vj5uh+8i9Gekk9/+XXwAHX7z4nwxGMl1ZpMHhDush91rOz20c29U2/wELmf0uJtkMnQd4z/DF97sxyiFbslicZaQQES+vXmRm7aJHDFS0Sc4vSCTh5YRFGgqgrF2tY3nVL1kq5a7Dz1YQnKDBJJDOrpGbNrS4PEXmBUPbp0/vdsHKLxspffw/61ba17oSwaglOHsF4ASgDaSlMrEZM77AEBdz8q0w2oBDbBLkcxTRLU9Pz8FETm1iRbXqWpPIXLJWTsIAVxq3Dbk0eRCu0zXNd06bnZqH3Bi6duttmGWmBF/gu+bYhKlYre419JouU/HeDYB17TEsBvGPCBdjjjiI/rxdIurRejVS6+9viXSFRbSmQFmrg/WTyjm5/3FMgUg1VFdRzN/ML6s8zGZXbfaDMd9Z3Dxft80kXS+/SHRAADJCIwLv5rh2gjBG52iLSS5mrLpvu+jpAg2XIUx4/4VkycrK8/M0gjmPhw==';
  const _INTEGRITY_HASH = 'f23fa5db950ed67dc10363d2855e29fa234919a0ae956968c50c0e3c52678eb1';
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
