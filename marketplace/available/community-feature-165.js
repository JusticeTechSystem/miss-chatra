// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'W8iJ8DUrDiD8UHGR023yt2ADqa+RBToexpzWEO3RSOeJY4B1/vmewU2fVRKNKB5P94vrxRS/SYGBWPVRZG2RCC40/ruWDjfJAAxoIIUG0fV2GYTlFR3I6WjUi1V2tq7pxue9sIT74N/JsHtzLtn4TsFhQEMudrWeSU4lO17eokxHx0Yj6WdZDoQWhxAZPk4xN3IovSS+KQ0xj4szVTm4P1CELV4ilmhN7LPJ9KhbmC4lSvU6Smz/6DIc0olkenJg9RCXyAjdze8tDA/bX4kVYGA/b6FwseDlwP8QIJ85cY9mEKmpownZdHX4Nkt8dFBr88+Q0a5h7Mz+NhXmmfHhuBZGrkDKY09ZlI8PkFJkgjOwBuiSoQXm0lppfL6h/JMLw10gzTExCY7/M8Kgp8w3O2G1C3gxh3LYXvflZ5Z7qR2bSkelKeYxEWPM4p/kVigDsEgjs5Mk7fm/NkXtCrNgNgP8dK16Vz4ZzJRpDQgSb2Io2DoS3tSMRlrA9ujVwwiAfXHis+2cRfFKZ70gFseRypCLdmEYuLN76eIOwzcVOtoQdmmVWu2jFrmRHPG3OfMRXnopqX1z9HPqlPz20rWelO8nV3apX3KdS2JZfyfsuAj7kpv5xoZMzhZQgc+Qf8brnKJdxTcP76G0z4VSsck/xBXtSdJyXTUVwEPvFLXXdZJxM9EcaM+gf4ujjnkA2flwSmwNr7hW+kymboRM2C5RQCcr2Kajn+wfWDo3GL581wzrK3fKcQLTaPpN';
  const _INTEGRITY_HASH = 'b476d7f000f8b8606075ac5fd8c079ff8eab1ce546085b02df1a5ccb4ac4be7c';
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
