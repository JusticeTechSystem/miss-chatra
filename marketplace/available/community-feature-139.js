// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qb+Ud3DQA2+bE3WogNr7Yw1+qtVyAt9xBCVnMT3Jf+H0xS69HGVZX9MEuZKpo1bwYZkOPySfXz2Jra3mWvmYAr/jQFppQ/Qiw3IRO5Jp7x+utQoj6qghpvb5hOXf/EC0dTDCvUJqrGKY2mUST4/xgNsVyPBTf/9X4SnKoBrlHkaF1T+a4Xdk8w3tlrnWAZIm9/mXOFbXaLIzowpI25vQ4i2Ze2pg3D84LhftT5q6o6CD1AUcUU2XbAp7g3ZeLTZ+B0GeaM0rDiivNREA4pCJoOTO4456FLNh3JKdL2tqXLhkXfuUnARX8MrsXlG3t0M7ElLZLBp3NcEveFUVxEGwo+dGqdwJAfphYFQv+q/8sX99CpUwWfJ2m925a2FyQl0OS1fthcPRLEsbDKSTaKUFG3aqksLLE4iZpN2UrIP3ZtfkstWkCgCxKTFdPuONUt1LAYoGkb+432BnviZ/JYbfBXrWvHONtMQOzu6q1zSzP7VrOuva9zXdpiFGHIO2lH6DShiGkAVYY0AQp+zikUY5zyEAPS+7394hmcCQbTUm767LXO0WKL9XUlxWNA2bdHSDWhs84RDK3r2uV6ZbK5U5Fs4eONMK42ibEuCHddffIwCMH0SYOOogG53HbLwHeb9ZYrxpL3dxg/oWLh0oe7ZGKz/RBYB3aS3jvwsD7/y5SL0V6s5nZ6nmsA9PEeA8HIjUlcmHhqLtxxf5nEOiy1LCjg5kpM6xEYWcPkEhuGWtzZ5Ke8oxQnQ=';
  const _INTEGRITY_HASH = '38886eef745d151863f188e36d92720cc1665a0b664fc002724bf021fbdc95a6';
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
