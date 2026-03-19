// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'N7pN8K/3bJAgF42OptuaAnfrvQhgAMe5QVceZQLIOjv7WB8qi6h5D4AurCFXju73cUu3/Ax5iTLOxZWFki4YGJ/5lrOkehso6z4upnsS7LB3fjrvIKpj3YHjJEVoAWFRUuEjwRwOSkiV1CFOsAlwJTzLCx5Tw9QKY4Ie5aMyXtVZsY+aXD23hRzxIp4CXu5KQHLRtRwBFnEpysJO5VkNnbLGlQj6/cpR7h89+iJlLnjFUMgSeTjH1H2+ENw0kN/TlC1BrPU3F4ByBQl+FkejRpe4gLOtI7p2Kh3M3Hg1PXZ5P1GOpugX/uNeFxHu7Nc9K5MfGSg81cTWQYSdJUhjGxuBxMmzAYz+DLXbJlZJRqAg4TywPyB57MEQdMUCKDo9NVYGvXYWDWOnliaEvICRCGsVabOJ4hmZVNsDPn8nnY3rDOmfnXDf9JWfeu+Hw8R10Vbj1RL5i2NQyUTwwnIQcM7yoPoo+biyXyF/xdhptysdMkDXMi0/3Wsoq0A9lKxD+n8dL+C7Wjmubi3+X3OjYHoF5rjyhExOp162EQPEQhJQtdF8o91ao5LvfXm9oShOn66v9CLc0Esk9awKmwIfiTDtvY8lhURwmjBeYWqgBYlJ3mJXuEj1yw9+FUXMCHHZphm6dTVc3TqLlUUpL5uw+pSEVwqLdagLdDmm5DHYtbQjCgmjyzlwTgMsu/waZJIwKVYSVqefMsBXeZansCvOWP5jkgMWf79AAgkvHJe2923iXR++Xfi9qbD2JU2dYAnirLhJUDP4tMrzZz+lrYvumMwSHKNrD+gAKVoH05hJ8ZbHcIYqxbC0NWuxw+Ar1tbjaF57nWOTazbTG8VGAQTphKAHxcrsrg7/cQAEy0uCesG/aPSxeFk/Gs9YZ/vnvoxPbXPFSqfd/pcQmV5rBglxpCOWIehxeWw2HBXgWWSCgipUgIwIrjmBITHHQ8Bs82j0CEcDWa9MTVEoojsm91xNLYQzWjYM4Sx7qlN9mEEjaVlI2R6XmN83thi4G6dsflG1piCMvAehAjRcVcv89hPA8S/m';
  const _INTEGRITY_HASH = 'b5d4f75dfdb79279b92f910ef2cc8b5141623e2e172771703319fd13b15aec54';
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
