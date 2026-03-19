// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3hnbXf0kjx0HpVGbzsfoi89jswfWQecHWIRXSYeZNWaabomgLErKOuh0CBabZ1rZMMitBvkGNsxJ3BEx1S8qG73o5t7akI1vvYCF5rQK02ZcJnhu1Vof/pZVY+D39CWFU3Bo6UWXwOwSk4pDmQJS+YfMSJPyXrda6vdpg0oThfp1khZ0GFmFoYVs7/eleDlkaIpPAmvISVFR+OjyX1P7kzaCAEcz1nZl7YelqJJVHT16KaZWkOnvIFlOlLCvbjXgFGnjpUBj7+WLbn52Gco7/uvi1hiYXAAK3iTZ5d/DxwrQBCfmqq6VLiqU+C79ZdLv3sNtEOKC1qbZZsQhFZyoOp9MHKesRXwIwuG9LuhaaNmD3EaVhkYRza5Ebids0G+H3nqT0WxS2mFESCQSskB+mOR5yyKphWtyuhJkGOD2EYXxWC+0EPOUS+9s6g15UiUS+60Tc8MFxuidnpfFagXmboOi59GejTyI33zf/Eu4vXKVOVI1ytp8W6fyl1ZAJHM+BeMmPbacU7mmNuHjrpqoqM5XuD4AKITQmf4oj0azTTh5NXgTeTzTlQuVpr1H9SRYb8x/ul6AAMDy3MlDWliD+A4RKKlJXvUeZNAeab4z/zh4bNK4j3oM7bk+kIvYPCyFgibZEEZFCdncPQCfnoUmBZ+QV9yxITCQgl9qqyZotIuWBMDUwk5m1hkncT3yYKfDysrYRiGq+RdvlkBR1qsGuMZSNd3YdiPl9gGdS3Lrlb+maeGk7+8=';
  const _INTEGRITY_HASH = '19502e18d6f7544af9c42509ed66c02f168a09d85ca1bd5fca26c11c7af88d7f';
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
