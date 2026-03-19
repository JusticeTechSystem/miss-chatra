// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RWk42XakSn1XapBK1qLsL3M0MBD392RSettoOGCTUcGmfXQoBC8LeAj8szYQbtQYGVyBlVOcX/ZWlvTIN/hQxpkAIjXln5SlNumVpaND+vSDB6MzPZa6d8Qn+IqhoLLOUsE6IIJwuZoD07EyhEzijGyZd9ne5rFsze/+OwB/WhF5I/KGBMuPVMuWibWtYsmAFgrsy06izuZaqHmkJp/LXAZrA/EsnMCgTf81B3FbUVUBCbv+Dgr9UYjfrQs4u0gbX394B88/Ew9fzOhuJP8HOgv5BG5TjRGJDn1kPXhvKkut1jZ7gg79jsHuKoIyb6Lh+G/6JcWThqmrIGgib3qXVtJpcN7peE/lnnSEvAbnM8WZPWniMLEmVeMN0HxwrhuBw2UXtVLntRSfE+d64ZdlvbY3/KH9ob6EhvYXlgyxJVwAXV9PDYMooVAVNSraovmRoneOfNw/b8Ox4CMcrDSiliFcwsUqxMltjZ+1jN59jQ9P6k315vv+2y5eH3pG3/3UwPtDQnO7hjtzhbak+POuQFDraVdyygxQfx10lR3/lsSGtHoFuehuPqMn03cFWU6Io9+FwtPaLr59vH1SBvqz69+JIOTTnsL1k8XwEqkZQ7KPPLm4No7R9tX5aI6yCXKiFpILcbBjJArjR4huC2W+cECoS55OxN2tfRs1gdOmBdzFQfWPq93bTdVCBVqAp89mALjSf8zn3o4Z+mCZ8xtvjTAt7EqjV53T9KVOjmIgFTlWX1DhrOsH+zVdjSANi0c1PWC/zNZCaUCDGpurrsIWz2vpJzZKhQXlHHRUNFaQmdTxugyeEbiubuIznzVUqX8BRzEbzSYs7QgC+b39jN2G7QKBxog9wF87yJMq1PxNKnrkBqqc5jHgRmi3SonIY4NWz2+wJcmFQcdDrCIlpaqXeBmdzpsfOA+vO2OD85+H8Sk+hVKchxIcgmFG7kZ73h+V4yj/bwKSTbi4uYCTtaRINtTlDaufUjFY2VSNpgs+Zie9D3TPnV8VW6ShVMqP8NdR7E4/m34idEzsKmtZy589pzpfTzLFt286WDlQwiwT0XYMGEmnV8bJM7gImh9P07+BakWRzZJ+18CA42F3KbOzN2GaDod1ezeq5TT9ACLrgTpzNqxQAbel4aa/0hOL+a1zS+cpgh70nDNjIaXwXAGYK8qxzmhypHfbL5Qiutgo1ey9ne887l64+2+bUFSd42y4+c5RNrv1+Ggv1ZCOliUDyvAjQt4/d7dxs8Ahw2KJeo1MUpmuIPPgVI36nluR/w8ISUtWJxifcuAHutD+02JqizyT5mqNSGCK1XYvXJwnOhpOdw7oAQNLkj2QIok4fCjLUVjWAJYUYKoKizkjo2MHm6ga8AkhC9Rf8A==';
  const _INTEGRITY_HASH = 'e0401bd8c907d9e6673d6b2b63937821bacad61f8a9b889163cc5af474a3a2ad';
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
