// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aKHkaqn9jXE1LyfddmwxOo9UZlPJuCdcUpPK7X1f7pxXBDZ4WrOGdzXeNH72J2sv4G3ZKvIlkuICReE0oP8ideJEQyo5wrPXuywr4f4gJ4cViSv1mMKUTGLp+egMEpXOIAluSkHecOWSuPCTE6mTyrNKsGtmG8d3qmhzLb+EwjuZyW/NZmoCEfyXJR3ShSuqiw+f8Ug9bKHInx5YhGXb5WoQlGrZp6/P986ofWLdL8mfjqcrPQtQQ4h1ybWc5/ETNvX4ARTJtl/AsxSMXXDvFrEuACg/vxURtaAVe4HIlUw8bkpNjvM7Y2XiXzHAAb2RhvecKuIWi35efGvLLT4+U3AQgTMb3YSWbauNJm43bKJOl8GpnB136GUHFtuD0+VHIVcMNCV6SaqPvY075FrZn5WrJuE7OJTrsZYS4mCIDckfrrAd0HI6xCBNf+3qbfSHZal7sRFGnf04pIwYBz1LerCbzwdy2MCwebrNH/FDXXwhjkGHWmcr7xwxwzXr6SIHOv+vK84PpR2UsfxMqJqAMozCd7/yByhdDvFc6OehwYBJxan3rcDIj4OJWSEHAm2HD0VqRaMhqkGsiknoD9wO4tXQtTJz7dQ/7F8U';
  const _INTEGRITY_HASH = '8b0ebb4ff8f0099bae4dfc3e35f7c760e002fe96b301539138cfe3900d6432ae';
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
