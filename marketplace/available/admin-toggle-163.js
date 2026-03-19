// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rmOwaSZiscMjML79Wzei/8EbCHQF1isH5W7M8QKk/B02peULyWDDi3CWuSK4PdeGQJcPpjgWQubRGMymyHktMU2Sf25jNC2QSrD3I25H7rFx1LP9XZU26k9lgb2TLD6coTy0OBuLMmhig05w8BuYRLj2PU70s/IkZGLvagAJ0MS7YFy/MuWa5kiw0VJPg7uHXBpDyJwJvQYPIJ3SLBOyVHku3IVBh3hFeKeynutrdd8AZ9SaacgrktvQHAVlIq+OCZ54uuj8Ss+fliFSCvMoXftyufLo8KZdCvt3Pxl7KJrD0PA/xt2W+v/Ft5+4TUpsp2YR2jePjbVnBccDMWgDXckF7gDuvyvQkIKcBPO6xXa0xlEmVWR3oGd0IUzeY0eQ0E2D0BiVxqVARIdZzfgtFAlE0CLvFfEp4/bt/beJVO2M+d5i7YTNJm9aql+pj7DoNJjy/i08ergyhCJPDFymWxD+LujovwfkICvJtWMInQMAcwf0JgaAfLLvIVi3WHvdR+8GFOW/WbLZORYzS98VCu5lPhTHQC5pn4USAJbyQ+bzQzQNoDsJo0BzhwjokZ/ElhkhrUd4hipchstRu9//IXrPb+P0kRrOej0ZegfyDih9xBVN9iBAPV3RlDdchzdac4YcOpGcUWUyBh86nTDD4HxIeurm2p+R5zDUnxErHlF2e4jC88GC0SirY8tJ55bwgY2paPGR9Fuf8CHGpezQQzMJpYl0+FY8Z9wNiVU4mZ4UvHzdEaMUzrANvOfKIGmrcH+SPqBigkOnvC3oRGDETat70/76RHKXaWmPrNvQmOmJpOy7OPnEXrSNswrt0ut1bQlfuAhIbCib7UG6Rjr7wSTLXWbXSBR4Vi1b+EKgwQ7yvDkQFlTf1Voh/pG3jRCsu6PUcdFiRVykhiO9Gcnf/qLmT7MH4c/8jJD7+MqHoEBu2IzYMtDhiPTaKvhZe58CEyQTlinDZoB4QlnNdx+qT5Rp9afQVrRDQFMI5LyUq5r2g0TPWVDOoDBSqTqwFB0jyw==';
  const _INTEGRITY_HASH = '12f5d8b83f2bb38f577b67a2f7fb9594f3fc4ab7ce65bda2bcf3043101fccb21';
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
