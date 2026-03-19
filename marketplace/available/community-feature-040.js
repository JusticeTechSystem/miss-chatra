// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9vEnGPPpOxM8YC/rwcRbv0lKUHwCrMLG7s0V2LJUmn7wD1E8GZW3rdovPPy+B09G8hFqseU1q+mgvwnOdA0JdDLM/aCwCl9uTaOouC1h3P2Mfl87/N5Wvi9mM7O5GrE6hZNJeJHDbmRLk8Ag5NpX/LdKA+BgZ47eCK0lr7cOnNLb7OaD+1ngQgkH7deMvLYbfGS0wylXPv5FdEjoxy+JgBlTD+Qa/8tdpctSQsiVsZpdrqqTvG4q9jcBOuRj8XII+bpBFke8pk7xMe3E38Y4slGLSa/UK/WL1sGwjkHudhWsbZovrbjydDMSIN+xwf4jPcJS1gYjL9HXyXf5XWpRROxXI04UhR3bSJ4CRXReoXjsBDNcLJq/tN4bMuNfQCZRxaJHq0s+PjMnc2wVOwbNvASY2ZMmiBy9MTcI2uq2pCSoBGiBBLWcGDZqpVVN2fIR3OTznyEjjV+JY+np8yP0q5ddzOTpWzCxRkKB/9fajtJKFXgMux8CNACYOQ9cP+cOqF1qSw0wyvJka7h+tt+K9i0aDNZC35/PsGverUtVN/WxcFgCJqx1gWSH4nuhRKBq8lRClnXG7/SIgpLuI/3kY8vNBu29svG0Tm0GymS7CZ2uju7v6ttQx65aVNCmc4doJcvPs54vRijOaJnDuGE+EFPvVksjnkKAqiuOyKogrQ1p6c3uKYUgV55BtV6M0p+qOFd7/fqo72YLipbev2nE0SaH0y2akBlpqwRlQqrNwLc2jW/9a98=';
  const _INTEGRITY_HASH = 'dc01360609dfa9334ae65fc3c6e22c69a1acee208ae7f3f53bc294dcca1c8d8a';
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
