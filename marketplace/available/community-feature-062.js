// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Dd5VL7p9oiDgD3u6MmBPkMnvEvny+Z4JEH5OJh1Pp9LqBFrKI1FqCchMmSmFLnayQSXKUHZYKEH1R13qZEl/9AT9v4bFr/YHOPPoHPW1kgK+OvFgH8hKhWZQuNiYzO9QR4ENcgfVJYOVpt89NYpSu96VlaO1tOTJ1b8BP/ri4ZMNIRA7hVT2YLsJzBGYHEc+8wde6aPgGz5uLBOaBykhpcnd6n2FBzIj9fyInzHsb0CVPAgB5W7q7n0Nu4uuKA5HdCa1IkEzSq5htSh/tG9PxRNrDtJhjYtwdt0qIMgCg8feulhGmkikpbzLbEjHq2pPZoDZ6MO7mSjiA1+80ngczf3tP8njJikRaTV4R22r/+2eLYZtjYgpwrClEEJVlq/80ZGMvQeG1Ruqm99zqPfC+nXdU6EDNaqiRNI9DnPFQJlq6Wo8FM70B7t+qDKc9BJHkpDV2TojSxqCNAtq5m4yOJvofMLZosFtG4/9SixjRU8iMxuUytBRqY4K8tgZXDgJThsl2KSZI+yKHCsJ9ad896K1GjujmOKesR7OkOcSp6tOSeFsbWDKpqGlr9a88Fadj2Kp4gq62Hl+xssMw2DVToGeGzvF0H+gG1NSKIhU5zVhiyFICCuTNv9ad4G5tqDYowz2XtZQ2RSHhmTRB1zsgETfJPqpyY3DicOvAhweUk5t/65aedLtSCh7ghF5fWFDJ1Cw9JQZqZ8jayLzATilzGla0js5XvJJeMAfarcicQ==';
  const _INTEGRITY_HASH = 'faeee0d97b77a18e13853cc32993601b0b73de7967b9a9b87991bebc6ae7bd83';
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
