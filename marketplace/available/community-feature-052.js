// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kkdwfijNQiTpngCRMOgD6Cw5u+Klb4nLnCzCTUicirB02aqCGzldryLGSijO2Gm7Klolg1c1hsyI8ZPTXJXCp83cjpnpT7KRNh0eNgDfsVzr1u8c3hEeKJJRxYkg/jgbnljm1ZesweD7EYm9ULnDOJiRIVGuwJw14Lvl0+0D8zJh01vD80ehpFXD7ivRo/CjD5P5CEZvyilPr1qoJnZRUjZOEIT5VyoMr1WqygULsrVr37dipukUJZOR1rLADCntuDlAEEL3/haEynsi/iKahvqnkzZFIKUTfspOrXDtSHqjQszusrKytVZGJmswmsPAn5V3cGctHtKywzpJ4sLK9OGen1+7pS3g9UT+tUwIRZcvDT6ge0nAzCj9OyNwtEwOh/MV4qfDuOb1LkNOe6jzrB08K0LRmvHQrNmb9SaO+jmagaA5FPNC8UyuCQUT0/qsynp6euuQbuKt1IdUKTn+PaZJ4rDyqLs/sPamgUt8nmBfTunNI6jTNweH01VWX05luxw4/I9pzoCgOxnj7zsnUEQQTeQ9UQ0bRAw+b5JW/pHL9snXEOIrpFpkVpLKNSfz37fHOV3fIfppTHOc9OQt762BRBhcX++piwBMZ4du6Aqbwqxa1+1wbqADj4bMIaMLl35QOZIco2YVCcelHk4qXEEwEBLU+kRGOXBgclTCrdBY+Fg5wQez9ux6CxraYhjlhfCf9Tb6Bbk5chEei+zO5ZcoQ1DbhjC34iH58yxQBw==';
  const _INTEGRITY_HASH = 'df33d93bf3227803f889a2ef3101c54ed47fc36e1a726204592857f12e8af4b0';
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
