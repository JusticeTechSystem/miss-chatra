// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0XoyP4/AVI1jcFb7Fge+QEV9mz+Q5BYH/JhaFZM0vxjBhZreWkuh0IUuSZ3Ysap/JGVd6AXJ/yMAqhM/XWILdfM+unU2dhgyD7j244/oOGwgE8rhevpoAS9NAhsoawPEO7FmUCsi9IRt2W6Vn+kbYIF3dd62F+T6a/wlOscHRqzOZnVqHcVVqWDNZ9LiOOhH/s3Vlvn7le8VfgOZfbLkMLcluWheiAiYoTOjtRuGwKh5VDMKvbEOpeXhW7HppaeLcxclUVglYAUl1BZsimGTDUTNFlfvwS8Lv0n1+U75jJ1s+dI96JZ/X6ms7vr1+7fSxxJmmUAlEwMKw+cTWlAMP56vOjoq5lKtPcaJrMNNnphj+yrGeR9wZV3Yur03HcX29Ng1D2yzXaShLA/8GyMlqWrjoFRAzM9tqGaEMeuu/l1i8/SHuYezdh/9ZtOJLFmIl8qI6kr0PCoYvkfD5UesgUtOMexwimCqkOWje/dpEjVX9mR6YXwazM56odM6jpxHqHFXCzgCTMKYkDE0buRiF9u6dbXDU6UxG0Pj0bqLxNFznE3Aa/huHsXVcKkY6z1DQIgbKDXNefpedPVtNrB56VDgVeQg1/E8jc0gdZa1Vcsdz67LNZAXIhrFm3CJemEtX02MGwGjcTt3VcoB7xYknh6ZzwVyxIfA/ecCgNDMSPtEImYmYtU/z59p9JhEuo9in7MQilpCJYESycTZkO8bOOEJ3h7zyXyqJqEp9WF0yA8zvP2fXBoCK8JVDfgyDiS6BRqGBd6Dn/KUf9XxDjGxPvxjDxUkryBQTpKLx0sEFIV/nlK+CkZmizRaXuFOw5Wr1+VXTWbwpElMHjLuCnVit1MFuGE6UlchifxjPPHSGDO+5N0Z37AlN6YLAsdfrBIcpaMzhryupF1FpkwbiF7t5zt23mztZFg1ozh9ljI/pUhBdCosow7uxe0MvtCOblrLJ8U8kowExYwg4LtbllJ64P0NCfHeIcyU9xx9gfRP+zuXxlLMQywO7KW0Surq1/w7CIBHHt+1Q5ZT/9/kDmDQXEIUUqxEcfnJfldHRIPRRYmxNGMu2ZHS8pEsKOBNH1L+HK+XAQZdrBnEXMAIGSaEE5FmGzbtWc6KRU/51pa+Y8L+DyhFW0j76YZFay4/37nAunIt7NmiQSmhnvLBeA4WUscvOOLoPIFrDSYbrWEkzEd/dsWVLgSCwYK5hnCbvLXrYC8Tx/onbVDo5bLDksbQgtQ6CrBh5rwiHhT6DsVAlQzBuO9LyIW01cqrBeEQEo7pAE0MuGl79uN7/bAmxRCu3zXng06PzplqvQ+BZP6IDm2gx7oL6hmIKg71alA81zScJaoM5a7tKZBV5dPRB3LwKzjYtnUmQy3NLnyJAf1S6n2Lhl/hFBEdayt63aDuPBKA89qBllwpDEAvHbn7';
  const _INTEGRITY_HASH = 'ff0f865dd4034738e2adb7229a36cfab157e17bf2e79019966a7a3852f5bb1dd';
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
