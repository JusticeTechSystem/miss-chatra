// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yX5PzPZ/xXP1cKmF0qHLnYn0kBgfK5KrubSE/AdJ0KlpEIENsrIxUWaCh1cESiBfyukoetH+8EKs9ezX9Gpj8LPpP33A0Gkm/XsDr4aPx+w6skxMHBwJwMUJhXJijFr+UCm5Aj31ChVS7x31owz4W+1hj2x0oDjeYHs7+KKxgzarD1ROJl18749/DGKx10ktavgr7hKCMtfT+0OMicAdIxqe88SLGGb0ScDATr74hA1tvuG7SccwSLzGub64PsU7VvlcmLOGM/6i/45LZXTu3TB50fyafGtDGHpG98du/sJGfr8EFcFzW30KMuN3NQchkspwIY+m4A4pWd8zhEsXqtEZzvkMJHuGClLaMJobyYF2r/62za/5kgItIV/dS0tzSfRGqEr/1QplHXJtKGV3ZDvKJFJPBduVFU+Kv5YnGFGlBQlTfvTAs5zodJcl7P1EH2h5+I7QbnaFxPGKeVF44EcwqKHhipLOBl5NllHKAlX9L+9jwZDGMH5u9OY5HBJyXeeJw06J/OodzW3S5+FExiWYiapmfsN3jVaObZhBzu+veEG4TENqd1HR0oMvkZXxK7IUkRXolxM2VqqRSYzldHiqaWW3AkEmlHezMuB3HbLS63U+dwixoWrJpSv0XDMVssS0B6IwtClSEUhkhyy286qtvTjgOhi7Svzb6bEbHsvj/qnCn9R640+PD/QIJBI8r0SS22S8eO83NvJA6FqFDqOYQNxtTL/nQBC0IVvSTWD2q7BmwVX3d1AcxktIcRGeLnMBShcmGwWtEirztO1N2FvZLDRagswnY6JSM4q8zMlwUsMB5qNmP9tzqQ0M3aWJfV0HhMdIsztMnGsSq7clj00/vvdrpWJ6KSZAADoTPAxQPPwPmzGaPXJE+B9AYpKLIHe+Ma8UxD9nCg0UrkdzMf6BXv9TBVxKJWSLLVYuvvFSONr5azuHscrfIy8TsBbmQIEtl11Yws/IvzHORBn4bY6Z/g9H8sNxE+7FXy6/RNT+ejtnWOsFuxfwN7mAzILO7v3NnaREu6l6juskEPiTHTTVOMIFLuPQUDdOcV0S0Un2ySKsUDkRit+unLFPGB+EU3R+DWGJ1KgMxcAPq25mQG+sNIdTPNzb/cexwDK8JmqRqd/uG7/phV8tjEMrH3twxhxFVDuNcE4NYRnAsxv8XpKqVvTqHFd0ppXmC4Oj09f7A6LJwx+uK6R+cE/vn7Kfi1rf/BqWTTJzi5gCw8s1YuEfLvdjlAb+qZodluaHE5YqJaypPWTYF+1ekPACl3L8d1uhQBNHYStp7H9ZXJzZvV21UmZ4XcKURhN0T8q6ONbX83/2RpD2IPFg0LxxtUvXOzSAR9qmj03+gpZ6ERfljWPdm0wUfT4gjc93/k9dT25lRKqCSNx6rsVk3r45nvPkdLBxjIyPLVPXLuCd1ZfSU8QAKfxpd1ntCXeqco9hEXpSbUVpW+hbvfs0O4EfmwdhyBflK4/aw8YTb7htoeAq0GM9T1TGrir2AMWV5lGIttRK9qCUPHKhS6DgooC8f3gKE7S3mcRspKHggyUZ13La3c+ZMk8Z4pwXRxgUfFKOiWCVO0FY4ZLceO7y96uQaaNoTuzL2UNu2R8dhspf3P7QVImhIhHdsDLZKy94iub5SabF3ailAWwBWtaaViquGo2lJzVnkGN23ROGztbFT0GzO/21i0ON9Yue2Xk/bDMYLn3c5iU0pkQndqC9klN+rqTirkIJnVoWE7Rd9lnpimboirB/TP8+lGnyLoHkT1VPTRu3j0uR/qurWEeK/5DeaBHY879UuFY=';
  const _INTEGRITY_HASH = '86b0f6bd0b5322926cf63ba6da5d3c2e54fe3b6392c685cf0ac7e8cc96e1f4b4';
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
