// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+xksWjsf3hcDrxs89+QQovnRgtB6UPbpv4Ogo+k3EQmVzvcZlluWt2VgoppT7wKer9eRg3UNspX4uxDwZGD7LhNZc7kHlmEy5Jnz/DB+AMlkfDCw3pOV11KWG3ciLrNOuiG8nnZbGyxiB0JLWn71JSsZl88njzkOW2dGiA88xHVG+yfAJqDm4D+hF6fd3xTzmk5KU4R1Ha/SRZMVLR8zzZtXflBLoSbXti4loceuPGrbG18lstyaGWIvisu1gGFsh9aiVrxZiPps43P/d4N924YpyK/WcjG09Rxz7ss/smR/3nbpH3ARFASZ7/kLkUJ8hwhQRZoa9WmmfiL59QlJJ496jF2R5VfwLq0js0AVD9D4SWMppDOc7Ncg09g/W7B8+EQXHUK2wVc9XIVjS9WRQ1N6iIB1Xb7IdmkDmpyRCW8n6FtwDstcGFklS3j9qSM5R8jQV0NQSIh7oFq5ki9WGYjwj2289RMrscLmi0Y4v4UpzPqYzrau9XmozeJKqAoSLX1HH59OOha9euW5KSWV20EsJSKX1MvKwLg/VlV7zCKlEOk5iG/AlpvIoAYQkX9nicGTJ6AP0LPsRFTBCLTqQY3d8El11ZMLW8sQLbtagfvTig/lwG6vWFY5pl3+rFhwv6WP6i+VvuxoY2LzQtQgcdfJfWcO8LKNIsBMj6kykfqzZ+zhZH+jvgKBH6IMCgDxgiLTVSM6DBxy22iIEU6mlCjJvsF5oprFDDYVK4Ss9rCBUwVd2TQms2QH0I8LppacCshIEnfyaI3T8n0QWm2XFGFC1KaQuta8Zy/rMoXlhJUqig5j9VhWxYyjD90gcwVCILukioevyCEISkKw7Ewq02MIONY2hUNRaeRWk+SwpQFqJ+8s/pWb4B1X4M8o2A7hEolGY4buGddBkK5D5GEED4jV4s4tddQiRrjx6YUHzLlF3Zasl1hrEmaZZWQLgdKfVYPXHhw3OCSON/plle/Zcz/ebYdCKK/ZmcTyh0800BFQBC877ZN5IKbj3D8D1usrpqezi8lqOBfA4UonFpu4SLgebXjLdL/+iObFhCVe/equyvhTw0fG/IXgZ4Bpskdx62+pSZqEB3xdNt+ueFhWRyo2ZqC1bvN2YUusxuCa4YyUVhRIsHRpKiexVJn9t+F/YWH89gZofpBP61CZCwReonI5GeNrmiO5S5KSzJeF2CO80OgnQLpTsnB/SPk+J96DdJ0Z2TinQbdIWSXjCCWGQF5BsNGD/ygaopun7/zl8n/fHU5c7I4iQc6X25N7ZjNsCk3rM8DnuVDdXmYMvW/Lr8vsNRc8uTaAqZraVKWgO+ZD+dvfFwpZOp/JBa8QS22kyTBIVQLBzWsRmwWhxYTqgNdbRDnUJMa5Vk/RcEO4';
  const _INTEGRITY_HASH = 'd3f8089e5ae970464888e7d9656dc8e4f91ac3b77670c0a80114d9479afb6c27';
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
