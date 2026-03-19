// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oSpFufosZuZId3r1pQPQBAMDK5jmIZU7MUma12RLpKIsMky59c+orQDDQlQQ/mbVQuA8DAKuyZEfnmxKgkIfyIv4bYUdWDkFgz6L/IVtb/XvkCoY40u19+Qote60Usj/L3CpeD1o/anj0t6Z9NzVtRwlxLpwmTb17G1GLx84jb9jhlFjw4U8tTRD/yh2okhQy1ZQyZNoZXz/RIzdWhCMtNqJkKJefZDqBOdvijGD6tRMTDoyww3bjNLVLk4Mqr4kP2ZARApZ4ZJKZNgif2mwzIDaTbOQ6zwMZrQ9sw8MgMyX8DZJDaAK1nqReUQRw4ALypFE69I4Wtz4LQnPUoYODAk/ucAYSpENEyQEIx6gW5UDqEW+E88tjxhOMh7WCq0nF+yJbBmkA023VWgsuC36cR/odJWcL7QAQo1Y7ZXoU6N+WIMvYFfMA3IMEfW2WihQC/BLRrHbm6kimdtPo0Y+LfFwINJeRoXMY1me4/1UXqoxGwDOl/AGBSX8rz/1hmKWrbODHprzDttF/k+x5yvJ3RegmAySTSvz1VouPnXv7z4pyl2h93kvcdJiD2qRhxB4gAnAfSvHYZgj12a3LILVKTblqp3yzsH9YG1v74SvEPegabpyrQm19fmqCY2mZVCc/wnry5OCE37uM/uBX7iopmFvdIoJezlr8GrOyF5tQQI9dWcPwmFAv7j3b+V0aJxBXj9QarKPrZ+ip6Sx1/FTMtYDpfnuwXu5pEauuYjA2Y1wVbCWwTj93Q0R';
  const _INTEGRITY_HASH = '06f176bd9412f6205e8559ef9e4a6e68959df2fc19ad3c7ebd8625cf8d13c738';
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
