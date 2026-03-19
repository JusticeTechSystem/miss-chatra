// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iRMdO2qbpW2fFa9ophRDPjhu/uKYVLfDK9cyjXV8DYLGM1iMfKdHgRlGLCGw0n0grTG8cZOeStUrETZuIFpBihVZJn5h/vOcsIXWd9X0heKyCRsGAL5kc6toraSjb9FA1v/eAJYR2DyTmdirp/q95m3bTxdhfV7xqhwTHu+gGrhsbcRaZS969WN9P9hxmakRp+vWdryI0z/lcxuwJDPWpxpMCNATvnoGdk+rRg3HhdPVYRfKXPf0D8DCQ0oM5EC/85rwGQYYXE3w6tUzAS+9IcTLU1N/UmuEask4ejWAh9fp1t7iINAbM0e5PXY7lmZx3BHBCPMi2yMSkSMLbwZNtJZRRVygJRLuTa81UhQOCpeX9jLBqBSC/EZfs//P4BxRe766sOIasFdLXfCF2mpszMKe/GZ+C1X9Kr/UVNc/SECu8uBNN7mgBwpKIxq+orZwUp6yIOMj8cla+QBhOToEiUXZseR3Wb6mzAfKeEyDca68b7fdrgHOKBMq+PM/F2q2TJgyGZtch9keBhmdwORLmzWKr16gmYsO/PIPkYhU1rEahGbdOx9jKPrB4F0w0DbsvDAr46BIYEV5xi21rKqSjE8GW+noV8/O4JZhROMztzLzGj73Mc8ppojOhj4nfKPs+PIp99u2db+H5mvegKyMptJPZb1eMXVfipQpnXx1k2Mvu5KumtApWzcA4XWW2Vak4KFZ+PvqD804fDOtIxBVVBG/IQmF8K7/N1QF3ebnFdOpTAx9HX1+kuQeoxNCTza7meNtwNJLc8zBn1zTy624yxzUZ7oGx/+qMDZLK/pgVT+J9qp/efftuOyeAHexYHs45h5i712sQrOFxc4axJ0DUIlFmsvfgFySHBkecNhfeUmoylsdw1yDBRJtt8UoErCCBlzJeSHCCWPMq5p3Ur7nQMO1WupWWQdddg3aBe+5AGonCYTRQFDGldbtIumrMV1X09stRlPaj1saj0qSLm1NLkheBeYBtwa040oobv867qsk1ku35N2QmPbHD5hW';
  const _INTEGRITY_HASH = '0f65ea80556473e58098912636726670b02ba6e40fded14d01163c28999494a9';
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
