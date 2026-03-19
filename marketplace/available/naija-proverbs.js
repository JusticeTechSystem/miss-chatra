// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oFvW/dkCs6UPkx5a89LY0nh3PKqy+v+jm9MYiGTjqcMO6Q9Wih0EgjgsRkYGzOpP5Ua05uxgJDD0eIS75Pl6+Au6WO//KdoR0cr/xEQrab79TzTpdVTCVCoDYqoTZjq+Kvp0ZvzPEUdH5rg7eZ8e4UEviBcuypZBmMfpUxQwz2IYcl2TasG2JYEO/1UmJWD6Gjl7kdDhbyqisBbG6LT7B6B4tfA40a6HrkqFvD3slgJWWXyX5Qb4/sIT7bG5tMtelJJz2JlPffZiHGDBo89kumQgz2RMa1nVvlfMk4kyzfMdVjnUAZOJrdeod/SHUCr7m65kDY5mMtIaCbvUAu9xrxm0j2wiPMfQ57lwQjbzyqM8UMAhnmTMKz0qRTbz9dl4NN/W3ohYr3/Uoi5ajTbxTGA+ZsYNF7DbSkGWErRorxhVDY5Z3O3Gj+7cDsgxgI7R0mTigIPypAH6Kt/RUVnCKDfODw3OwscRbyafms2pzl65oSJ4h3gy+FXN7ZmsxWIYuXlBX5tJH5I7gb16W/wXcjCV2VFmijP8gW/B/xpQVx0o/FvfbHToTxqY5TgkUjUCYQhDDwI1Dc9iTutheNXEF1Rct8nl89F/f6G5VMEeLqT7dFPJidmlSsPprgjvHOmarOCQV97g0nrFYg6wEdQoDaZJDhQiaR4G3UNZS293xn2PbBIlipWuQfG/1ro0HP0XAfeeyFNP2p2rIhbGFrRd+QyPQSSTD15H5CXdo2dy8lheehWFfYe97JvkooJxVcDPtvH3LUAIKcZ47pdiD3TXh4y/SA7mrFC/n9zYXsoSPF//cQWD+7/sosf7UAtq6LCC5GNoQJs2O1nFWKMTx23dzdZF4obdpVr1vYeNgGA0DBFR9VfECEYPKvmvZkPBnbo9rhVYtAMbus1dO28UjAeBs8o4X4lOR6N61Cy+Et+rElm8vEBXeHcXGcgtub7EiAQRjJwQ16KL3elSJlAX8kQVbLY9rXAnIpkxlQtPUxf3ALzokSbq4TtK1eic/43BAclkRNcQ6CITuo3p6zGncp7svRfvwkBt/HhYmuxJrTFHYRNdmZMuX57sKjiz4SftT7yHb1hL3CRb8mpfko/10i6VyPanF8FfEDusY0eBOT2bAz2eL3Kf+VCPDN0LAfxhvpd8E1rCAvCMBvzZXZ0h2ACxTumPnrxhYtbH5opFb8bNSKS+HWim+uctojuoI3PjM6yqJ2GY/G1B2exksXaTu5rYCDhkv/NyywEYv05LwjfGKnw0p3KKOa9ROkB5uZhapy8HOkv4cutHe1pcyTAtm2pgsR+q4xr3GY2AjOWd2/OBVs0WoROXji68siVvPLBfmwG371SnsLt0U18FAOAhMrmK2fJE8y5FIYzos8L0OGPmIlZ3N7EKVLs3yEB2M249lQxUmgHeYIC5OpXZwLyo/7OkEqbCDyVEszmeO4vBP4uM1dWdb1Kc2roTgH9SI8k5ivh8MZKjgGsIqKpniVMUO+neLkzud3mAAFqUrcMM2qmC3MrJ5x/n76ZS82rRRn5FnAmbktbXPF2hkBb56olU+wKyNm20ozfbcsbIQBi82+MMTGdxrY0AW+Pzmc/duOr4s5U74x2m+ojRad9HCLwBgnfy7UP9PO4AlL06SG93+BypLvP/A6+8cM6BvjKZ6IKYKLAtd1q/BW6EHXmGI6P1X+4YfQIKWXMDJp2Q6YBntsKneyvrscsu6X5u8b2v';
  const _INTEGRITY_HASH = '9fcaf5a2f76764399052165e9799134243827dc5792999f56aa348b63fa061af';
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
