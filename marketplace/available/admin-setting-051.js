// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Gmz4tU7KI7mlZQykRMzTKB1N/Q7AYLt4I9g0ovTHPGNWiLNc1VQtvuKu1kmfIwQAHgyJgy6Wy5RptNJcgB6ZSFAptuWNFDejx7NZoKaUsI/Iin943y07vyooOMtk+AgapyYAToDFZDxbDPvWakS0Lxo4hjcE2TLkpRUeAYXENoZII+lVkt9u+0+TkCkvR9JfQ9d0uCMhIjCbjmoRf+O71g0oiW2w4kYmbbmTS5Cb9p9rrvJpTgS+fDhlCkIrvafKVysfu9D1aCWZsd9kvppEv0bsaGgwiWuMOppAbY+mFywoQV3MVbqGrOrdLzmR304SdpZ32GQUuVgWhYDW6Z83S9KK2dT+LBpLeiDXLDTD3qg2OaIWeNfCbXjfQnjDwSwqmUrBG8ON+emGxZBmZW+lyOTJjP07ZODGMJ4eppqrWe23s24QIw7VOea4qRq/gR3GHLSDrKw+KYQAk0RTzRuGAtZNM/gdvSHoXecxkDk5PeBNkvADBvbM9nXxstGiCMDH7NiozRXYZL6MLVij/41jujQGU7Ej11zIG/5Ph0XZny1MOgb+0ooVLBCW7P9OG/7PTtiVNxVzyuvffjbIg1TGE68iTTouVEkcYRR8I1KMoGBDd9+JVU8iJtQXtZoXDeLhNYdo8L11d4PSxcLGRMrj18Ci1Ea86MsDe4Irfj+CC1X20s5k3w1EJWTIGRgB6kW9FOFi/WFNFmcGhglvZ+YnGLzI8bud+Hrm/xjeusY2tNcb5s2o0ZdWmvFo/c4FFGPsQuN51m/quXWQyjwfhpDkjMBOqwXwjsSNeFhPlSUIk9mKlzMyawgBktvmKDB7RZDt+AbCaVSjQfpQcr2LSxRB53ZWBh0JDVoGD8MhvXQH3wFPvL03c3Q4zuRqu2GgglP5qV6gi7aGtO9GQo3ujbbxkI4UnVZ4zNFwa5+5drDKvbLzqEucMafkMZAKeIfm/GXr2z/4oeSRQdnlU/qmgNI7bIwmc+N/8UFR1NKYJhPMOwx9a567C7vHmS8uAoSWReJiBjo5uA==';
  const _INTEGRITY_HASH = 'cf754d271d78a5259c39d4d7c2ce3f77289b7d4ae1dd74c3550a0eb8985f0d7b';
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
