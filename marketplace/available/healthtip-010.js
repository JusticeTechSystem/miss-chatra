// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'pklL6cPWe7RhecpblWgiOhBVFzxiMjXv0fW+YWLsFTx+gaDMsXmdqgYA4lBAzdarKTdkNE0ngEyTGj9QW1RLd5/mIK7wDp5KuqwP48aVLaNReQGzRTw+jUBMZz/RUQKZOkJrGP6zEe20gkj6JDfYVfWnIiKD/u4FV76qBMMir94j+01LUu6T+04TtHexjICxEWhPgCxc1ZIBWjWtzzJZT0713eBNnp3zt7O72Ja20LT1p58nXOMuX66qyJEKH8DezcW8se+9H0yZGS/LfARZLofbwWkRMpmzAJUoBICFXAr+JUrexTRuYE77biYm5U5+aM02pUfZ54vDdVmnzEPuMbNO7lGIvBt9MQA8hVM+IVLJv4yEtggApo7Fg6ZO5ObWcYN0RKSOLHX7NCGZvDB6u6/h7elAxWL1H4qqEFpTI6H3MaaKF8FSMN530NBKiv2rQCXJEoBifXFUUkyBCFMC3ef9B19PkXsm/NEX72/QlfldXYL2rwirqJSHqcCfP2xwE34Q+NmlvBbzQALfjJpYw94DqZpjy5DoP6+dAnp3UxMDrs0KRouZ43fRZKAoXRijcsmXAt4yzgL5GlQtHeJCL6YfRJG5r3D4Yap5Ha4JjrVANtzkP+aQwvL4UgfjahxGVKaomkkn/kBKbXakRiRV3i8F5T+5HWt/gSG/EzjmqY5rEmjBPOvbWDuZ1nYoPHUMP5jwHfbbtSpPpHaJFA3Cuwah+Myrq5zo/uwblaz3mUwkD/WGW1SCfeUJvNCkhVQogvvsaKzCHf3fBsiSAHI3q3VnrCy9frz2EYjfUNi4q45iEgn+ux0VTUF9aIOkFyDyYdocvkBVD2OoR/2Tn37yv+wkOzmlKU5Yj5yB5niBvm59D55XQVd8MnfQuaZTVzJyowaJuObGalfKKSL3QXnRSvLqTnfKaobO5Uh2d1ggQh2shoQwo8/Dh93ltw==';
  const _INTEGRITY_HASH = '0382ce0aa18e1f5da687a0249b2cf38bc0105ffc090ce4e8786c3bf66c416396';
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
