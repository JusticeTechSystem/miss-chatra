// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IdsZs0D1bNxUd7TVpCvwyeaWBXY/vaR+lXB/DfburZDFdS3CioNeAkCMcRCKfK4sL4xtsf5OW7OtQ4ycITf8MZy6V/KxrmgREiUzqO91H61QLrH2IAMj5dnpg+ATU5fA21X4g7E34vfAyu2ulTZ5+VNPnkXX1l6Q+h8OyGQY8EEJ56BeJlexC6++5SdmRj11Gv4NARps/grXODAX/Lj4e8BpPW7h23cVTROo2sinhIR0GGO1WNIuQitFBNltEmF1oXobIz4vMWkX7tmb1F2SUU7PozbAkL32doAQbbxmr/z7pyPYGHooL2IpAmOBF9PBfwSRwFxkJUXbwBCGXk/arXrHJ3L3W9RvRtz9uwo532B0bN3LjG1ZXzDg06Wwczj4FBz9MB2FC72r2xm02X72B7AcjP0KPV9Jn+R/VOkPmg51UDSCuEdYhK79vLEJZha2UrAnZvqwmTXPRWFDmORW1JiUlvz9kL859MimBBuuLxJlQ4vpsfyeCiklYPtqyLiDze69rG6X8O/dkcd+YN1L/+KpDou88C1URMzRSi4mCVmvla6f3ibZpItAq9pjUrEw4IpdR00gWsztEoxPGxVb371w+95u0JYB0on9eE97kPHIFaxSiaOwq102lpmNNqZ2TfRoj1MOQA+zZ7JS1bUOimer/CPtRUiT8xuBxDAkOcTcOv7NFPQeyZjNC5AcUoRiqNfvIIPrvIEiGI9hPVIhpPKFqhHz9q2g4A8uYDBodRE5N9ZMfd6kkVr8jx0LcJpk6lOFK7A4ktih0OiHCqKTdQR99D5xO+VMu/jkmxEG5uMGlM20XjfSRo/GUIdSl0VVbgOAIscJOFoMvd/5+oBDAyJ7FjqNFAAKS2aXl8Ax8m3C5Ddi0ltkz+R0OjHwRt5hxp2ZAerCaiEMZ3sQh8P9Jh1PRH4iHP919q5WxDO13JP3QM1cs+MD/SroPU7t3L2kqlGgsvddO99QJYKAb67Cn0edjz90TUcDRcKSVBobm6Xvnkc+DHxDJPvd5LiqXdIR3f699g==';
  const _INTEGRITY_HASH = '3fa62d499c05421a0b9f1d2a94bc0da05c3446d1ce1510d7f69985ffdf6666a8';
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
