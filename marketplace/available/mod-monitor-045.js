// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QxW1K2aeF5waVeIVpDQ4SIiHCanFGlO+6exvYoNUCF/4G4z6Lhy/qObt5RHs2DSBO9ijHsZQtsgZygD2qHvI7lVoISibEXX1GshI8KNAfBfMsEyG/JEFmwfC1PiC2CP19qqmzOHA8HewEc+ktACN71zerJXX/AM/TzjLweQSf0krnhqPtypQezp867ZVL7MafYw5n3/ej0BYhUnXLBFuUma5TLQbaNqzRtIHO1bHaIWqvMqbwE1dUHDFVHAk1jG9cILJhag8lZ45wD3Pmjg/fIIpbL05BAhJ/jBqj5oMTMKCFStIb0NX06WZL84R8HActRz7P+/FcO6ABy5CHHXk2p+v5OuL4mjN77VsRQC9VOxa1oGmK5Sbcv8hpDibJk+3HzDC4dB0JVcOOoO7hrY4005S5qGa8d9fmgc1P7KX3OM11LqseIFnX2I91jkumIdRg3jNcaJedeboyP130jqhbpllCfckQsaSZpAn1YoH8cEKBGLr4xl/Z5TfKQQCVOQs1d911xm0VhGuGTTln4zu4bVKJwUivQ+gkRr4BEokigOw1PJc7JySqaZe4Lx8Uf6POvqERuwXPq+XO50XY68A3LMD4LdlYvWFtriJWbNTM7LSBZWbvDzB5m4UU3xCNSIkSyxUlTdKsHdjb0u6guLQTDpnv1AoCntQNiDzWJa0p4zjHa0l86tix/8zGr0wwLahDQStPoB/cn5c3ta6ln1NHPTo5e0ALKTjvzjlbw6TVzDpuXcw4WikLubVbyHYm6SmOSrYLI18Z8DMHJg99zloM/4dl7k2ZUaJlo89Qt2n2KeD/Z6pnN/GxsPL4qTEGdsI9AA5+Tlxn9IEM8Agi/6/y7AV9QRqEeSCAP05CYZW25szxA3B5XneNEJOPdI242fEbtN8lQnSO1Eqtju6BdNAcA5SGhvGfkIlqzZji8p/Hy1sBbNAjHrFyKiNG8dOCF41ViBI+bQ2YnUjB3XBuUwaUf+AU9TBpNDhrwTlx7GxdGrIE796xbLHaawkXyr+4G+ITDiql9wfE1X2tcKVqUg3AP/EJ4efs/CcCsFifNupy9JbgwL0ZPUIt3AeTUArR5f0FPwL9aVwIJKEB2Mwbl2jVFZsumAEHDced/vBFvYsRZ4250Yzm+aGO4B6NuTjWHCmJryYetyHYpA6jhKq/xzkdwwluvTJbZTcwom+eHVvb+Xm6nIN2C4+bsB/BZ9tDnM2mo4i69nAte2/KQ3y5q3D/9W8BkqSdZIU8wqJqInIpi64Rt2ckRHT6pbKqO2TGJs3c4Gi9ylb9nYQgjLtFJBsIofVKkOHqWLvMeHrBNKVBAX4m8ZoZnz8CZsyNQVzB/gRHdx1BHmjfmEzWa5KXDpBFZ054w84dZI1udzBP2PBu9Egasjbf1xRBLquN+n7';
  const _INTEGRITY_HASH = 'd8b8e88faf8b43a5cd4aec7fc2cfcc5d591f453019999074b8288ba16ac02797';
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
