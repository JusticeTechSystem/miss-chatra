// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1uo0n3j2nxjZceC4LRrYkD1PK7gs0cHtOgVSrrRjtLKpEJzbyaW0weWv7qp52uqc11LXz8zkPQfqEaW+d7QoDKuvlwgC+ZxQ7z7VnnOoNUz5mWHTormkY0fwqCnaeWMSI0weUq7Du1oZcGbJyMy/RZ+rjn6VBPhL9DFjt2rS7WzjCMUsZ2LuolobYoNGjpSUrp1eW6ISokfaoQ/sLiQMqBi9EQhZxJYXb5AP+po+3Gt79MvYDxN4leY4CnwnwerCNvVgLqP5+2faxl13x2Tb6pdKKKEEb5ZZ3Tsa1/oW2MdBXxC7YWKhfc6ckZs+Y8iWOvYTe6Puxu5Pl9HVNYE1cZHU5ND2kf90/jWTQrsAmsnCTLtmIrHasBUKXzgAd2G5RCbU+Rfu00p3W6I1IvhkUgq06yazXSRP6sMSeItTw9bnXNanvcvHluW3wKHw0oOkdrYX91L40oiR0v/QR5JejTy1bU4SGumVNE6Mpy/XeNAbyGqDZjIPd0Lp60y+jat7iWUsrP7ZlWUAe+JyvGRxI2LoUa39SUTI4uhlxDN5XjxMU93XrmqENGaw4PZWdGoB/d8kdIvUFAGr7LUD96gZmYPr/KST3KGd9sU5sdPR/MxJvybVO+PAx4STpRYCFcTvTkEl4i/D8hVkZ9eX8eJ6MEL0waOb5wqReHk2otfskiR1gtbwPYvkmweHMobVyd2eXNJ6S/ult3KAhlvmVbv5S6K8Q0z0EmvznYJ+5Qas/AjoietOUoBhRN0SmV5OGqsqFhSWKy1Qsu6yDZBsYeCmaa6AT5GUPx4Ln/sR//GpSOB508q25ztDGki+HkfcKMSRIO5POClUzlgNrpsvvCRo4Yzs2LoouReLJ2Z2YLvLT4JYJAbBLWGKs+W2KUqxmc6WAbnaxY9axZbWJPwsXww5UqZ4kePaq8X4JbfmtFkD0su7/kFj6RVudTAPPOy+htrLDbt9NX13OH+VkD7hYHgrRaIP0MKxuyBFQHI7KxxX9d5U0qJXvvwWEX7za10Z9Hl9ESyvewWemZ0uoHXCy+4HbqjSKxR3TVD0vxF+DWCwcp6Tj9R6Ug2qlCqhZgzoe/3S4a8AcNRB+QqxSb2RnzLw41Gx65hWaC7sbK7VQ/CM5nM0tM/CTurBkexFN+IbT30JeasORYoYhPRWr/9myzQd/Be1rvLDgPdpbeSXW4Ti7mJJG1bVjOfMvzKTmK9EIyUv+zi3esK56JDvTSyQ2yLLVHIUuGlWRhf42JjOYz8ILpBHMEFYSdIPD4VLx4BLYbSYH81TnVLfsGJ3FWXXqxNo9itzF/C3fly+p1NjcZHrCeELVjnn65trG2QIByEJb8eiecMOfoQoR1MlJg==';
  const _INTEGRITY_HASH = 'b34e9ffc9d514c3ee3fe0cc7674c7885d7f0b8ffa1f93a2a2a2a2d8e274d2845';
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
