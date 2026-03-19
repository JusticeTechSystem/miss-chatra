// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NuQJW+c0Dc/e7UEJwWDkGqds/W1E560IOM6zXCiyB8Xg6oOCv1UYrVLVI8DQ+Rl6AWMbKl9tCN8p8Ocq4oew6w+435t5cCm3d9VRehGiSCQRHwZySRbhXtpb1j6G97QFGn2Ib67qiSprz4TzTuRvTFlC+CYO5Br3H+SFFjsITAK9e8MbIPnnj2rl/+gaN5aqv2Ycf8hZ6Xsemd2xfikwt2GWej2joVBgYwrsTD5Z+kBfbE6j8mZX9ty/Ecow0PutYFfLoK6BgQh8WwWXqUeHRi1ErYEpKEvP975pI0aPwJfJ5qNbodCls0ZOxuGFezBbD3fUm8U039h8NoetD69FTCocPX5RE6W3WYMIB8mJxUVv7SpwRFyL3Y1lbVCI+DfLS7SjzGx9vCaM49w57W0yzuGT8XqXwUA54a3/WNwffoM8yKhN8lhgagA9Kz1F1BMEYt1kuWQjns+ZrAhT3Ps5zjunxTu76ueMSqKMUNcdnphsaRWJf+g6Uq3iEIBkffARw8wCVLg0IA==';
  const _INTEGRITY_HASH = 'f1d725242c511b146184fa5b155798f66a664e2c4d37c0101d0555604e484dfc';
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
