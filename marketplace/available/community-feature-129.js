// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '45lZJi3DP2abY0gH5nZGMFp1EFVldsyK9Znv/n3GmfXga/QNVarxlKXa7iOzM5t1hMgoWiHaLNRTOuqaLSXiSyChAOAZu2ByXLAvjD1VZ3ZkWAbq8C4xJZt+JuUPO6d6Yp7j94NSvNsG43XZYbAPaFjOZCxiBSMPcI9KmbRzEYYeN/tt2Z4j+bfvkPQobSG6WC8sF2cSfWBkO8GWJC1Mspxwq9I2nMi+OE4RUZADtC/RL+zdX/Hq4o6ixiU0TFaIo3nPRuyQSOtvF1b5QOt5PBAl7VuWjaCy2jVHQmN4H/+S5ORhQFT3mjscyLoFD3ECvSd0yzPxAwEfc8pjseUQKJblIt1HcYSOPDhze/OBEfORquL/gmQG/BNbBV6rcRnDRPklW044nv4RA64GKh1DUyKZGHmvCmFJS/sAUSDrtffKQ84hRyTHd2oxN08NmA9gEaH2CI+tpErnuM1h9iRp6HTWFdg2GrEdcC9hiX2mE651stpIkH91ZiPxK91JpOpikU4hC59KB2vvGuLbIDrFQJtjPO9bpDbU2c//T/i9iOZ6ee/8N7sgvinP8xBHVpSVT2z+lhj4Ig4WGTKsIKY92aDuroaekJpLG3uybLVv8W6WfqJnDBPEy34IPmA3lIgvzHlNW/EhM4pJrx9D1vv2D/O/zhwgrsMABbd0znPeYH24XtZWMTHHyhpabgk/FE8Vbj47Fnidr+JBwypPDUHij0E7hWdbZ8fnC3Puc0ozYZQzmhTP6eg=';
  const _INTEGRITY_HASH = '59320244cb27041ac47a82d2e339182997dfb90fad09eb2fa08cc512af32901c';
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
