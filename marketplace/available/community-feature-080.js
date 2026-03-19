// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'A8QIasXONWDflckdjbJGV4PcUiyUIB+STMMd2wVH5WJcjA1jKS0d9PJXWEjE6la+inTr6PSBHl4TwdGBshadnMtADQYLvuDAEvX4qGOdEkxSG/eX5jlKPqhUMI0388REB9Br7o63Pdxw/zQ+CSjHPYPaHaLrnuyY2FEV6vxnjolO7+t9XDOgcSCF5d4ZzNQxcUxVkDrAaXfD/0qjtOnQvySq1wEZqKohx8STVQZonKAw0sdEj5aaJxb/a/8J9QpU5uhkgFLErXLjJ5evQqNfIwye40AJxDSpn9QzpORpbEc+JXoT0hEw4+PJ+Kp1/DMZWh4MfaUEPODZff73Tvv8v76d9f1LMteOgb74lwgQ2YutfKp/xGywyGQgOZVT+HS0XmnxiSGnPHPxTR3ftUb1L6+4VGeR4fgezZtS79p5KscP0nQDTNGaLCSb49ZHjOpKqIHRrwoJXj671SXGq65Ng1daGI2Dm/lRKxpiARki2UwKpCJaLSeOUHVY3YeyaAvSo90Ih7wLzPMxHDdhOJnJFpK3RnJqS2QttUkraJV2cuKQEwb1o123SjtRhBTTfg45UuiIeWJA+T9bfHls9fSb67Eu+6XPrHdUzSndr6WqV57lambcF1RKq+72ugIKi9i4p8uCaXWg9/VMOtc3UuGz2/9HJLWbCTc8TEnzO5lFci64gk1vzfzJ0OwqNE81o2l1tmwJ7matRk/qo6+8DFm18QT4Hy73J1Y3jpHBkDSUQvgzsyYi3Pg=';
  const _INTEGRITY_HASH = '25c5d082d9e4c38759ac878cf28b5cf33ae7b91cc9c74b293fe520bdb87f0095';
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
