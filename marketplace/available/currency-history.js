// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wJevwLycwje2DZLzOgtfyHOJkrj0oDjkzFvtli7g9K+wk4ZPyxQEwjUSQQuSh1aKepIlKyDcuyQYMtV2RZWzSSfc5MpXwXOsIZeFLoO+sEJaSMLQ2lPJgoD5juVlQSRcqREoX6Sx0e1cxMEXcDWLxS7eGPis9SxzzN6Q3XLXllh2Guq+w11P19Q2oTV069kp1MOX9tSP4cmAwiFq829CZVZRoztUr4NVbg3+DYMvUYFSiZyWLo5byoe1plWUD1GgpE4RbDrCZpRfGv96MJ5x+hl+yO04dXm8Dh9SgcUo5GWJQ3oWGRf548MQO+A/XsyKif888LtyyEPAde/OSfQraOwev53QY9olASYWIG/EM4yIonwSyxZ+54Ort9+Bj6VJEhmY3KZIq2jjrbq/sOk2HfIgFHvIdgEdzRC2qL7xOY8CETzsbNyPU8F/pTVpD/NAnJG31QiNGm0WmL5CXcLdhKRT113CaUs8TOdX/+zs+MXYEh5iYQJts877seohMyFnRTsoVDr60h3/83Jqq2zDwWMNO0pLBQdKhN7TgCw/P0mZGmNToiqQr4ZQE/fs6VkHWchLZkMVw8rkFWZ++CiTBYdyHLzE/fYR87TFqjdmtzMeVaNN6hBZSEXnM1i2eI8rf/yPFzHvoDzMjrvBJ8jyBDmgxy/8jqJLxrYNLYNCncdKoGXYvPfoWrr29GPPv0V++2uULKVNEL3cHJ9PjavTeadY4V53gtUYWDUtGmm3x4NCceeRZT2ES+7mbxP+yVPSHA7ngUKI9FV0tE1lHF//MVQPNF3NtgKh4SzkFyeJgL3uko/Jh44fArsQgndSxcaV3pXmbXeQn+bDvrfASkC7mSEJmLJwmegbwMz1/OsYcssdpc6BU5cabOefePwN7a5R1HFkeiBeNOhBbMwP+KuoX0C0Btwj6hi+pT5uvCw=';
  const _INTEGRITY_HASH = 'c285afb8ea227fbdf05492aa097d7bb2c439440a486dee8e7f3ddcff7347fb8d';
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
