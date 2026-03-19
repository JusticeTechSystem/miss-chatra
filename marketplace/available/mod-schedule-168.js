// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GsKbR7lwoNzjiFLrsaMHTEjSXP2sl0wERtGn2BIuKqMa8sHgSSrMqxBEuSISnspBtjrrriBd2SwJofOMKmSFzJlwniVAaPuI2ght68UUS76CFdAxlkoMyBj+Rzz87Pj7wkRtnrbklxrx3IVa7BR8OC3Hjd7R31mgMu4CwrZSLMdcVV0OgpMBf/JHFhU8+gs/98I3wX0+HPQBc04Nm5zHapdJ/OrqceulBkbBFZQEsT9cV2XfbDYHcGABRe17lvuVgIi5ghYHysub+MuKOWRZbmoBvtvZZcUaDvhwTgm7DNZhKdtHGfxfIUIGdXld9C3brUTy4rNbcK+Gibwy3hZ6z//Qj4VI7SfkgPYr+EWvV7aJxxNsEfxSSnTpew691pkiUbmQgsZpBs5TATkSLGqIvbWIA+50acwKA72jtRWVmgorB8UJ5ft+Fyew5wvnH5HIRRrOVkieIZlQMxOw8hY5cZ27FfvLZUC4E612Ge8SW9nKLdI9qOt0vgy9dWtrBlja4PHR8wL5cqqynuq9cbEul2YD02QSgnYhG1LAuYZHKLpYDqDyODNePNb/ort0XDvIEf26u29w2gtKK3WUz1Dn3SlDBdzYtexWBxDHQRfk4Jkh/DljB958WX+evj7R32AZk6i8JlK90iXV0yarsOmZUrTvLCT6C6brjilswIPpUpu7PdiWTiHeSWOe2YFtt4tBLeipZQTV2HJNtG0pM38xM1C1bu/Q2LSCSfVlmiWIF8uTjt1SUo0Xr2COJI7G3pbmLcJqqBPeYCZCjjcKXLHJs93bZa9r1itcgf3Vrg6XsTEj2U83A3lk+vi2bfed9g7kZtjv9HEgEgAncd8dRC/1YUTYUrejqFuiNSuAJCOpyZDGL5wrYDSMZvs0hI5uRNW2r52e9Wz36wlSNH6j+h0deTOIyN2P764Dq5ptbZj3lW8jqxPRzcd3V0Wjx5/KGi+1xo7cPzTyxheEbDNPTwVjphwAUCA9COS50ZwMOzozSLqNmw7DarBkhFK6oTESE0qmE8G1RtmpkwKDcJOUHHnHVTA7V5uhN/TDVOGQSxn8+nM73WigTWnF9/TbXhVixjMytKKDxxmuPvcjr0NjkZg/j5U+apo+1mSUVice7Exu5e5+eZ6+g5q37RKX7lSN22g6cecxajlbzWVzfVOmVVWuTnbVgY05AkFgvxTHH42fbGh3H2K77500m9yCjFUMF80RsrHGtWG4EmCGAzVu+vCijksaJLk62z7uc3bHuGEafQr9Qzbqg+ekZbv9mF6yGFOQgDykcR2BGCJPsdxdcwRUmCxn4cxyODGhY199Pa0XI0Ydh/JSsue7sqyRgeWO1p84wtJeJXyEFpGB+t7BQZcAnh1jRHug/TDKgqGvKH3cIeo2XJFgKuX6tASB/qnFeOQBMqr7iPVMJ9OFfM2H';
  const _INTEGRITY_HASH = 'd20f921caffc66432d0df770c588f8e9d9fded15c303d07275503828315ff70d';
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
