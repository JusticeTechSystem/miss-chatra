// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WMqL/YgNngpfEvhme5rgKqofE3fs9FkbiLVSykD1KSqWXPHzALYkXikY9AkIj5iMo/coPHBWR3KLGrO19esg+URyPTJvJr+RyfqQq/tlq5UQRNMOsg0C2pEk2z+LT1s1kjNT4uq+r37/tUBp/I6Cl1TnbkNCjDyw8czNST1SsjuU6BanvZbvUxbqWVKaUucxnedHsaYTiSw/RNun37sPYCauXYm3txkAYu3bb0dFxKsSp1LRmv/LwRnsjourUWENIGI7lahnVCVQqmE8zH5tOm1USbZGu+3VbPK4O9lsFvHcICX6K0QGfn7ZIrDD4fJSMG8GuefcrjpF+fmlVYPzhS3VvNDGUg1RHvZ184cLlISwFanOVUfTPJ6+g812RHZKSwAmPqqUOGmJJvXcgS2UAQ3Di9UpyJhcA0ZMyAjsFnf6oPKXK3kc/9YI3o0mejuF1QIFC458uwDbdvM0rKEFoCL7w6xfeApcf42/kLRtZzvpqG1XUDvfQEEO9562am/+KpmIOjZUitIL3eHBETKTSNCpMZ+b7YpM38j6YBdk9RmXZ0qPZ2Sd7GJuupuuP0wXI/lGEsqHoD1yMkZ3gXP37opP4r6tjPRZZkXblMmEU3DL9RR6AWr+F+xfM3YbBa6vmlfiJ2obO97BMqiw3EiBZgTojlj54JFHIntgVhpNzmsmJgmgEpe6y3Quhry++rdIg4Mwvl3XWwOYtpC0NmS4v7Q8UbvoHUMx2JjGV8kG1sQX531fiLc=';
  const _INTEGRITY_HASH = '9bc8288c52e4c8fcc5fc59f7d310ec821aa6d5e0be228a14ab00e94367aca9c0';
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
