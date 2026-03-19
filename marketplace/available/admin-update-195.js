// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'v4mS8f8JF1CkAoXhAmy+QS+btQAmeQ1ZsMSZijJdY7PXwogGsjX5HhRT5oLQDF3O6FyUxQZQFGlTo0iF5AqECbLxCRRkPFoGO2VRXuxxmC+6TGBiO4BAqSDiVC2xzhLcuhpWSpBjMXzXbSwPv8hXAXLFMfcv30kI6wy6a6d/B8F8cTIrP+848eCcMcefHgEaBpBfVka+tVdaAo7Mtt46QHvETKe0fI63ammLclVFjb1ZzaWfQhNgKZivjwuoZqemPlcNQ92FQP85RLwk272cZCcNKX1e6maPZ0Up44gFKaa/+eYWSBmE5NgUMAcEyCI0SayHcsQnyBxmCxufHvLH9iO1ro7H5YHuy8/BOnKl0IxbUfj9+e8bcw7qp1ZOyt+Iciic/M7qz+/GIXkabis8AkjwvGEOVHsjUpRcWYwV8Ij/MGNPWD0TVnZFW0MHWHwnGDvnpPrc5TwyLIn2xhQDWC/8LgO8RYDchmgUrkMfV+BVC/lnQKqBH8ipzNua60dArQOdQC5d2pNiG3O9CRzhPMkneyjRn5aWfToJ8cymA7/dMeXYjzmf8GqhLt7hzj2vn6FqIVqvPKlGEcLgcADmhh6FmuT9NOAIxC9YkvAqKwS0SO0GFswZHIm2qxTzOxd/lXf69DxRaRm0+ENfn6w0ja8liDxSdcatSS+P0VM6/aqYtTfsE2twanmY7zLh6FRB7ODpNoZTICK5b+b6LfDOmSXC+pFxYMNE6h47m3gZypY1/sOcNSq4SAf+aLXlUdYHjKzqb7hj7NX10UrRIBNksbVW8sG9TX+pV7qolXNNuQWIMzFkPL7DtV0Topfk+pU8yu+EA2b2Pa33M2rxhbRlt9awZwQx6U2nLF938LquKMX3cwcYdeLpdJLVg39AqnO3GpKB+MS3KjohAx2ZTSTUcF4iXFm1y0gGjWfwMgiYguYMQDdbTv+GBTP1qsSh6C1E+LyXhZQuP7XFpceqjArSQtmwbdoHtVRLPGWxvZ4lAbv0IqyqUuKvNVshhq0MVCbo9A==';
  const _INTEGRITY_HASH = '2baf9c53dfcbb17f153630636a519913e95f2b4c8323421a4d2b363dada31741';
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
