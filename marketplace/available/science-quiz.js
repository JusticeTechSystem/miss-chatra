// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kVPy8OUTt0+RwyrzDhya+C+ClMadW+IJL3exjWrDDYKrDVoiMi5f6o8Od/7fqMGV3KRuxCAFjilyID4/txLBi0HO9+9F6T7jlBPrpX5SMNr7W7tC1cwafw+7xKZ2bg2J2SkAMR8riuvwCJmz8PPMJ/RhRwUqp+Ggx081yTzAzi9gL4QhKQ8N015dfaiwhc1CRzZOlkThn1GC/1Ds7I+dYOv2+/Od2ovmgF8zWc/MYd0+KGY2sYZuFj+Ur6VzMIaGk0pQ3opRvioL4aiskCWfn46KY3DcKrZDcGiNUXT3RYHDPHK0KfWYGlPz6Tce2KfWVMUKo+ZXeRS+fJd4pbFV7R6Em65qn2RBk4pLevln7Vn04t61vuWQSd1Lpk+vDMi4e5nR7+xPUvQ84BlQ6MUllb71NSQQrF4WOYKOf9hgHE9+rCsOXK73NBxLL07xxPSp33spT6U5AzD8P0xCTBu2FLF1XuOvrY1iG1H/uhWRLn2PhyRZw6MlTxNEwiBQwEs55Kx9PcPr1F95CEGAzB1QU89PJrqRxwvW74IiJl2VLWoMuB9zuK9VlArqOSe1C76mD3o4pyGnsvwebPQmfew6CCFtJ722FHVzsrbjMZ6G8K8BNk/MgAO7VPvGF7/t7vlJO0wm1mDGaLjcHJ4rmJLddpYiqBNjSDMlCQwJ8/Ldk5UEvKufATtRaHedQzRk3No4WoIUgGmEztgDZn38Qw0xUVtxrFiKKl8q21TsQKo4XZGYtr01TfOYM9mn0lqJiG6dHzngb3iBU9WzMxgUP8mEhN1ElXMQP+hNQ1n0p83l7bEms6GIdIY8DHw2nJGfQqSIrDxU67qcu3sXULXZsZD9vahc+FItGJiqwnIKf97JNYWui7gvkTFhIGav8PzFIijwlVnn7Xzg1kOMAvxcv1ll8Jgx7UcJZT7G2UhboSbVteiY7z2KOXqJvpQUjdS+wMDa8uJca5KabASUmNaBRX6DQ7spimo5BOJkLKelsxmfJsaWgYVq1kMwrVS8S0xZRnp9tVcCgBookTL7k/dzPipYPgN8TQWilSAA8RC2kfbE3KxURZcQL4w+mac+QBPlUyrWAAcah3rMnV2xaS2t3mrjY7nCtX1jKN/lfMFmnbzdmtNau4mILdjK75eOYajvef1j4na1CxosY7JEWYDFyRvGF/S0E0crJo8Grqdn3DmssEliipUOeQunRV+1NDsI+JvO5DL3nHDSBCr/fF7AI4maA+R9QMDlKOBM0DkS3Yn/+BkV1+vRnEMNnDzrbrarUPQG9R6gOitNbZMUj3QwrCZ5MFTRBMLTNuKauB8Xga/q4gIG1O6gc3VNftsGCkge7oz9fxp78398VK0Hgnvuu56e4Lxsa6rhuj6hk1eUj8OrlnQ1uRLHRAgSVVhE0iSwWkbDRv5jfkgHlo+YaWkYB/6Q/4bfP64v9rg5w4sVLam1Yg==';
  const _INTEGRITY_HASH = '7a622501fe87c7006c0f6adfcff58bdecd11e82f78c9f00af5b3cc6bd4267e08';
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
