// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'S8Lqs5XX+xhdwO/v9ybznQUTPJXGOCJ+Yw1t37RyVaIwx+ATZjzii+BghgYf0fh74azNt8pStlWmxlKsI6QQ51XEQrspcoje1pNswxWMLgwd8GIkz1nIUk8qiDRwQYyGB8Dp89b0IhHh7KxbnX4ZMFlbRMN8DjcIcNjb/FSId9nIHCXoTb7Ouw10XvBpo7/xplncKgE/u7kFawH/gZTbLdL2G7Zi8UcIKddagEKq+rk27949oQXRx5KInhZ/58q5d+JdkrGGTfyPu0Xis7df4g7BAWVEE2lTHZxXWejrk6Kt4BSeVRGu+AKPYMo74dyQjRdONlT7WYXReflqI2z5NR/8F/GQrqohxch115mRYmp4LJy+UZp8U7gBiUdT+QlPVTReXn3z6XPkc4GLs2cVIRpIe2v37A2qyqe5aCm7bREIHxZlp8z4/yI1/iYtRgpW8oQR23kn5MlTmG1ZnGAbnr0h5+QWxGQgJFZJIgPs+Lp8XgiDSxfP2wlaAfTrsen2bKPAFwIBsEWkZq6SZW0X3yPuD0EgHkW7ONB5x/GFeqeJuq6WopJTNnflTkvPimFfzu/pRANrK8Xh0xddInBqQPNY5QERkXOCw1ThI924yOVQpe5pKcn/evVSkLLNEHAqVCRMcRRikhf75xCL13rQjhG+GzRbDxvO/rJKk24ivnFttsHkzitQFytYNk6FQLVlGE+EqFyM4FwE8mQWio3gzp0Ct5uBrSfqk424D0EuhpqZCALDvLpTiKjZ0AzgO0WguBicSsibeLGa82gpB8+djH2Q7kTiD1LbRbhmf+4p1LdWuI9SEALfyPsdygHFaWjlH3MWpLiA/WDPujpgc7Dzn3187su69P8esIohtr7r3WbcZNW59rN/5Pcajmzi8DXgI1DSGNRCyGvGqeYP9jUD6LMn/tqV3DZzqfdqJi8G8J6FsuWwQQozQsJ23ZT4XTgbwwqmE9gOR1/8a0yvofxbbKZOXkrh9aCeVlbu3lCc0KG3g9FuifTGn4KybaiMFJJpeDCWkIOdG3KC/PRdJCwNrGYJxkK8ywKftSp6APk4C9XTYZp2O10O2hi2VznAORDf+CDCvYEZ+iQNHl8Cqe15GtXGXjSe2rXLLEa6SPh/UIfAg1wBMikIflQ9NVSbHTLL1HCkP4TBEHB5ny1SXOKVfS+NiUMfDCfdYb0SyiMz2AZPmTBK6xapdtQ/S1szZ1zuSdCPb+tKmowR0UtN784Nfe+46ftLrCJFzKUeaoghe+PSVkHRfpDLhrQjHCb4LWgSqlewGZyXMUdLRXK+uLjaywUJIwcPg5VPnBAL0zaNc6z+tVEfN6ZxEh7efBBos8o8Zl8Dy3XhFRhHfwXeRo77nHoQqjd5oT4=';
  const _INTEGRITY_HASH = '1671bec7081ccda501e984183f56452cc82c772cc480c18e943db223749b59fc';
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
