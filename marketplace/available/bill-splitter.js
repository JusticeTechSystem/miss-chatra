// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0Q7mFUr5qhgdA23FM+1NAeUH+93wnT1LbY9vsggk7OHF9aJqvIIf7Wg+uZ8O+oRulUGn8lBvzKlT7Tj65xjfx7P6hb388eVitjGphXmYe3LfHkI+jK8O0wbsrZVe409x1ICHhgnPXMrgPeMKEwpC/ceyAgIwJL1FatoyQ6ipzC6EBXi2EB6WgZKIdE4a25JUCNprRebIRfEDv/bIXryn1Am8/dPqS2z+BpN0HAsIlnywY6LwnBxG6r2YyQRkRn1DJEU8UaMoKhKABDydQFuoRW0UDzJPBGfC7aq0axSLza5AjYjsr49gYcAjTvXQHsKj8nxgHns9AzjjCymxLc62EDSAbOqrrAQvNRS7Z/i4FZsENk3RVZ3v2MM8pgtUsp1QXBU+ZmnnABlMwwb9DZYiaMT7CZqqaK6+nbu5G2TvbYAOxwTLsEzci3qRY0yWUfPswPOUQwEjcPuVX7u4v9VE95m2pfLkhLVFrxrmqkvmNqtAe/ZUd87m8XzP23WEdHlisZblRu/vP1edvvqpKUHgwGVUQeDed2lx58wRfaKd7wCrwgtsaYQY0kX4uKLvT878g2CfKhxtTM718tb2COvxegje/zw1QeUTk53pM+aZdL3HbRR+i3FKw4zsUXlN2i22rgVgg7LydZ8iFOv39su3UIh+hqHXnZPqcjGhFLdlXbJqfFeUqY5PpqlrFCbN+btLLqlcmO0D5P5EFX+RIpQBk+miiZ8R46DY59NMu04/cz8lVskmJkQzxhpPcrfSBTb2ECmKkeGJHWKWfST27CkzC2zE0D4AmYKMIuOfQI904v11vloRXr/MRLXjAJvRCKVv2/+mY3POncPtwkFt1Xw88ataGfMy79iUACAPOVO/OsVIKNZ3dnmTyTnJW8vlTxULEu7eQJXVZ2d8LvcuF3nnz4/l+eCxHQDHrq3A2MwEBJ4u7gWC4auTDVm3wyiSIBZ8ehhF32qFhVvVbIb6QAPaM/ijm3qCKxIDxnaHZGGqg95ZTbyShWcxdtnOt/bEr39+vAxbI6qjy6oaGWnc22Tmt5UM8sBDYmLZ8i9mBCY2CGIXz8YrhXLDiJNL6zzkX0dGADO4lOIylI7PwaFnucaA8mASvr0U5zH+AgOiUqHIrb9+ECGeOQJ5GL7bnmrgl9AW1BPTSUQz5onBnNFMKBYGWy3mCSbfbifSVMsqjXyxaLfMmGIpsfcmHeIAeojP8sjxf+6+OfDp5pcmMfVtDbCIHVm2/kZhTskIbMaX8D2mKMfZXu9uhL0pqBtTDwTnEfNJx+68zz16fMTuu0yPIsyVrXD4+HXhutSTEksIBoLadDka4q+J9Sl3L3xLSfhZ0OJC9L+6meFvlPXjyImm9Rdwix13Ihj7PWrAMeXI8Y8pID3kmHhbTGeqO1eINL1x0ENHNUNfwD1xgJP/8O4d6HZHjycww+x29TcHHtuMIAP9it/uGrWUvQdv2MFr7bIFDKqW6lXjfMTrheAgzdCletkzXLkeOVKOfArXCJOEROlWFoATkYDARhVKbQGk8ub8tdzqguepp7W8v5+wd0zHoqlXvcUYvgR7pwBGr2rwLdLqeZRC2rAd4DSaeL0KJ9tS/L/HUcaJZ/lDs5YDoKGXk1ghpQN8H/dikxr/WbLKWmGTd1fjs0mH6xJ/hbi3wld5+YVYsI+hSeI+DpT00JTgrcU8jKt7aC/HT++ZySADNiELPKOSP5W4Jv6tiIt3prQIFb7SxKjReQ==';
  const _INTEGRITY_HASH = '8449d346f36f56ea9ce37426c034509fa498147336f90b1677300333a76d1eb6';
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
