// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'u4cGdHdBxeIp/d7LJdOZEnIaqTGzOLFe0gJMpa/GRarcZdMD/rMgSmDSVWIY7FYf5XoGDFjr4cu2UQtS0dWZfzSMFUl8qiJKBHocm3TQLIc9sP/8WfOdUAm6NIryTWEE1tJdYhPcAbVVIqOlzhLsX2McJKW5K2dDRMpQoBcorDmZw8BU2feWLp/yvkJY84d1cqahYRvf30F83zML52hwff9hMqBXn377REGNbkIDrRpuRrS+vbeQ9WFBJ1Q8MvaDRo5jM6+x7yOHXpQh2XByKsgU0aVuvuU2TUb4EPruOs9krmqaK88SeKrwG02nQFmKsyVe9fY5HIlISPvSE65CWPNVB16heqiwO6/YEKLV83LFwAYdVpfzEG0XtfDCXZ8/VEi8/EZDRzFge9577fws7qnI29IKUxJvvAb2wrDOBu3mHOR8AuxbGOStaLs3kg4uZCiBQ0zxhId90h+pT55LYj2f4Ii2BbNAoWwaKyk6m6N2CortRPQwldp32FQG8gr3vJX5yp/8n1HUDGlii00zy1CLCqoBSrynwPYLanQ3v/nzVU+/WxL3H6Zxc/Sx6UqW5++VNct92xPmoyfy+wnq+4AI4IySP1vgB9ROPqlyvTBpbuzPksEow30YQkiqbNOQrvR8Et1AQOknENTP2R7aXVZMO4Q776V+dzibVNyszFSmek6dFKALbW+m0s7VjTQpaKSm+i8+/ft1uv2pFkSvLtHtE2wZ7toXYlwHcFn6O8hYsYHQC7soIzGw2j6oz0rX6t1AvsnvuiQcuyVTA7jBNUcblRzi/KLZ43/Tx0Roc+H9f/97lFEgFcqNgp66PSfYjBgyB8BJhon/iCbqO9QozRV9IZEGqnqW67Xm5FchkLBIsoJg8XJh1Gi/+/C1jWJ885bEOo2fnG8OJU43gFvvQbVF3VDiFW0osi2guxBLoMr2+T1EcfKK4d9ChmB+IeDi2I1K9D3Y170oTAlKd2snz6j7V4nKGi6EOzTWZq3FlBAiDY3vNQM6ZbaVvGU6a4bh0uFzTiU71hW2MfbEx/sH18ka3FhYVP2Tz4twoQ2GqF36c7FO2JtruLdzcAYgNyfe2k4AIJwaiu1DuVy2vm+R0SFV9q5ZboCO7xOkKxme+QAGGmFN7DtuomTh1qUNaOAzO2BKtJ7+oFresl1sofoqFtQyh6x3ON724F2ICOvxmPT8a8hfwr045NI09tXf8l1NNG5uSw/CIAk=';
  const _INTEGRITY_HASH = '9c0d04be0ac1cf29a33f1c477eff0fb3449ee20b8e6c5ba5a37abbac54af48fc';
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
