// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KZ67HhHSvZkTXaOfv2NOEuJY46mQ3XsfTKa2JA9aozusrYFaiwciXqrWBTsmH6vXlzD9+uDNxngYlxy2U7AGjDSbURWh6G1i9fgsKZsy+SOezq6UcDpE7iON5glm8lkhjGCdtWaTE4dL3+9UuXY++jhCoabWRuH1rt+qkLOEUqQ4uVVb2L3GF6AnDfG+W+Lsc0aaeZgyL/OPDcvaE9TUBD0wfddRUQJVSy9miTgZ6zXVFS3Jd7UCu660lRV5R6OeviGKAZUO3NMIjHeiclIz5zFkq0Z/Pd+XylrWvvdDH2uzsbEVTcJdzY9U3PD04L9rv4Y4vSqA8NWuwXHbl/BGOieRIQjAQprwRPy4dTnvdSJbPYQNkeR+CgtSc4QLrxYb48oof1+aJVryntmGSRlU+4ZmFqUUgZlwPBPqztU2Sjkvc8T2Igxz5JA5X3pQHhhVjIyDv4gbnim4YUHIgX7jl8xB/hYle1EFMA6Dq6fVkYbaJ/QGRzapBhyh4K5uv76l1Y64v9eKOxPVepBA41OHuC4XpPaFMCeOdp6y21ApMOCL6wqNEC/KFXn+OcDNpPybkoBNhPjUJd+vLgVebHXDeiiZXHOtfSkE1QMzGGCMsjEla645AFE/YCTIk6E4aq34MECCI0P9LjtdeFWjSjdlOmN3G1O7475d9vLBFCfskP6UOX/cGMn9fYQadPWAb7VIlMWebUTv4rqG80wDA/QaNllpLdf8TC/XALyfONLc+lnT6Yi8F99WN2b96rc0EJleaHT3rDWQvdTS4l2f69EHu7TMBPMsOihLp3j/CEUqv+kd7VIXVjcU+7lJFcxHh76mQPvJlR6ixsBzkQyGuIaqg5IoY/AXCTh/ClSnO+df7Tac3qFG9masBs3DgS5gZlQDcyk0RrnmofdVfzb1+o44myBF9MFM9dkExUSbfXLB3D/xaOLBPe2/kngLD7/os0L6vDig0st+DmM+4qob4zvLcPt3BGsDMKIxzvWmHVp0fS9w7IjB/yghPoa3esIAEaRDwG8e17IoIFmL1E3q1GPqX+jFS29DZ9+CfZQ5aOfoe9h5ywZEv8upJKsj79hsE+baGIB/uHXkOn8Hs8exIR6PYBE2mn6H50Be3ACZB22ldH/PyedwZBfhF8w+EvXJvkkV7P0jyMFrlr7+KLegOveZjmlosaao8+3nLvrMBSk3Z2CXp1vlR76o2Fs2kFN3tT5fWUP13zZQef+8xERi1/gpr2/G/G5/zi4Gtbga/Yp7Bj3zsTR+Dd1mhNZG+nbWoYzvNeiPR2baTJgIjTY5mwNGCXgvoOBZnt2YKYV28+GfFBgV1GemnWlkIsPppEBioCa7yEp6F9kfUAWExjwfvuy+hFvWMD+c3go/kl44QH0wFgSvu5y2mr2OIxKBr8a4R7brhu9yH+DGqQ==';
  const _INTEGRITY_HASH = '15e9d4d84d2c93ad027cce012f981e6eebc23f7307826ac22ad31fc4f5c7cac7';
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
