// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'A6xm/9NnJhPX2H3FrVNAQHX/8Cg8d2ejj4mLjvOE1PlXKUUJAc9jQ3oKjo6jMIse3FKjWo3fmKp2+WxOn3fL6Gs9Fk85hEafB9Qk0YHh3m+CYjuZSdt+fZ4XDQvDcAcb8HETLh66pWXxqtBAk/JnJ98Dyra2UlQbVqrLx6WSbsqu4m250EA0J2nLWZzRQ3gYtNeepcGq+7piOVV8LJIxoKGgBI+6sbLX/6aauFpSJuNRccauHUO16DxYU+K8Q87761cQyrtKfJQt0KvLF7i87A5euXraJtvrvt2/2zK0IrTVW0gWJtiluDRaTQy8p/L5MiCjgXOLIrgicY5uOtiHYb+FfYfwqJbjnPAxLVN99JgpHUW/gkvojsoh4l6XTrgh4WrnQmnQ6kyIf/DKMpPwzpw4JIIYjxNOZ4XCd3zF+/FmEqCaYpqhn4AX6ewPlJ3qomMMikyqY306AThwYiG2mrC+KpZ5beu8Ve9m3s6JuECsop3myLAinS1pAU/vv7InnxJbr4VPkAutySogfqDQCvntMbAqR8R/TLNGYpMcG2/HB1PUgeRpdYxLw2Rkoh8Me/rNUqHoy8iJPQOrAo8jZYPwnrCC1zgc9G4wFkLOJBIVn0cF0lIfIn7IcqgxthuUOxZUpUapDbCeOTXdMN8CRW+fhpbDRTOvhgLsxLwXj6BdkzhMDDtS7g3GDZVwaNDsji9DT2GxGACciufy5g2n/E9SShhQiPJNXA==';
  const _INTEGRITY_HASH = '22b9e84b6b106d42d115453616a27ce0de2a2039f64c6bdd45fa49c73af28b4d';
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
