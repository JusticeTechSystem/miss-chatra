// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SKOBNTaDTxNHtst4UIKCBpWMcJmS+9ImB99gyxQfaOc7qwtmJOzdvR6MLu7Mk1IkF7DFKHXwSbZxVgHkoPXi5IOLzez+CG+eIzLQWSOOtik/k+zvz9T3Yu2GGinj9QH3FlaK7DXogFT9ZSI3zd+FwbxN2d/L21gr2ppDZIHFdTUEjRJZSdSpZiYBQ1+M4xIjkVcqITU6ooYFYrt7kRHe7OR86It48qGax0BRgEvSTxbvcoZ6kPkczDs03EZtQcLc1AGknFVzqlOG15+qyxVcQErgzyaf762vP0Qy/6aXIs2GyplCN/VhMyGaK8K+m0OqCVTzcZ9YnkFkmYTs/X4z3cVcdGxy+tvudh5RDfITbOxrdOD3keCbea0gkrWElYfY41SouNMG1ff+WGNeQh0uNHrS9D6pkkFHPl3K6ZFm7cxJDniUfadLar8lukfjbWYkvlWzns9RaoozL31/i52aj23ZDErhH6P0/BYT6uPisX/7qbQ6jRHB25wagNzhnVz/isuJyHiDCVYhuLLJtPK0LNNq8xiEOBLYDSy95XjGRviwSYm78pLSOuZthqjWValrhyQpzJQyGvhFlI8KKapYlSBSrIIWMtUvc2llM74eBkOGQiAe96pTnNm2u8h15id36+QhRzK1unf9p96Y8+YP3UbrF/codFnBYCQ3tqJHrGSvRrzWnJet24X/CIKlJe96RWPz5Yu5EG8gmzvPrX22pPmp2YyHc6HX';
  const _INTEGRITY_HASH = '0c7b47d336906d2fd811340f4d9da45dd1fd1afcf9ac57195e2b6317790ce053';
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
