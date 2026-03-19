// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Pj8FX/qgSqkO9kHjH/plelcsSBUSbMObXqjRvLjn6YsifQIfDJS8XHpgIkMDDdszO5exzABktM4HWRlQZGVBvzCz1UwWCanSX2xO7RtG97jq/AUU+sXkFwFSmDoRxIMpTtfjIk8cem5VpN7rmL/3yvYkILTRrV71gHqBBjGTqVs88qBimeo7gUMGZ9OQKUGaahcrsfY890VnMqolPayG2lVcg4f7JWg5ouoX52aiXha6ry5kaZpmp7lDMJKlm2F0LnnwB3CVxEAmnOU0juQpU6pNXLjD5540g+gjf7hLHc5KCay5Yg8m/5xXllj1XLEsBR8y0eIIN3NfmTvahw5FoyYexN3LZwZIfZ/c9LLAUN98k3skJ1qZ6TyUw/AIf5cKEYLBEjjJoohWMBsDbQyiT69z21mCx8/1+fKM//XELLrEhbYgf1A+l6mpGFE5mfiuc4hiZ+duE72JwE2n6QdVjc/bPJgQW3ixGpSiSy066U/AneUg7+Gr8GlT7MWyOAaxa0AApCR0rJNo+Yb6nrghWMtafT7KZVYwFZDttra+MF5GTZXqix6JjRrXTl4MJb6R/sYbLjOYgRBONnRjkxgkvof9Dg6i0iUoK++Ktohw35pAoHnnvmXvRF/rSQ2Yfa1/VfPf+8xNpIaV0+v7LVIgCKUhvUXcy4lA0Pj84YeYrRTBa3IS4NjR5B3HdNHoPagfT056+m8yjZC9yCCSMeGh80Ui6wE5rTr7nutFBP+0RSCtZ3CjJFPaj3IkWiP3O8CNiN+eNd6yTOee/4L8/bZzI6FjQoI1Uc3uBZM3DVpGXuGOg1VD51X0ng2xs83HVsAfRuL7217NKk9itXyiPNyT/ARqEtRRsD6c12u88H42AUVyS6/226ZoDb/ZtQ8S9XdaqXxgpJJMbxifpKCp8HRdHI2CJnR7DDF1YotDDDOdwbj0vkdVACt2Ds5p7Q0Dg/tmAfW9vW+YOCJxxo+LuoIamdK37CWFpgZ5nD2Aon88O9yON9T8IhGazO1/zd/XewrXHNnPLybx0cBYXIjdMK0//bjgoP/j8x1NA84YZlRefvc4ZH0d2imiceOt2DGcHUGzKdVuotXt5uEjGOJVFoY7See9RgfviZoEA0FMPhMzbgu+jlF/nW7bPRGLPSP0JZFTu8iErHrTjg6DiKzcPhzk0FJ5lgiAl5Pyz3jLILArx60GDv2hUPHgC7Ck4BOLKtkDjJ+2ScDTYtK2jo+10RSsKK+uGSrXUu+SBpRmnhcrF+BuvIcBrquuyg+sKxdDEoBuNWOEWyg8wZExHOZGDaB3ycayg1D4VwEpNAmi2oR0MWKGRGe7l3bBEOB3D45DmjyrPY0xihMI1DR9cWByW113Or0nw6utbNQ1P28jLAnRD+9h1vNcpxixIbX/ASXk2lAuFHbvdVV20YyE1AfRBJOH7x0/l7FPCGpjWYERvpfHqAMpAl7KbNA7r9kpM44wB8iB0OCpF2mxFgN4Q1CcqWkFgU58499a/SRru5ApgfwRf/fbTRO1gFGlSGqvPMmQmJbNEBVBr453oA2HbqeCIcz+gzsBTQFQOY8rlNm7KaPxlxyeefHfEvY/GH3p/RsNaCcTUt6k+lLi9DfvTcAIJtu3DatkzIjl8cMLgSQmfMcAWjZrel2rAMx4xMC3wnrqecr3n/71Ex4IRii0PfQvsv/5BCKdLamFKpZR+gWtALY2r8+VTWxMLw==';
  const _INTEGRITY_HASH = 'e7de561edbe7be6596672873861d72e6888e3677e64ccf83b719101117be556b';
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
