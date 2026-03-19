// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6DzYYfx1XI7K+IKLDEcZMJWsDL2sV5cDSOZubjEuQvImKMGh+D7XPgEcj0vFwq0R+GyBVTItu2t/z6eory91mUkB91tbqVZyQIunmLRlxN7SMlxgdY/xI2a3GA2P0ajEkt98nIoeUtkTy9rFO6SltJDSEJ6yBoFSG0faDZyxwx3NQtLpuSwQQqVO973JbI64hOU+mGn0jLf9D3tN3gW+nxZvBjYaEavtiGEqBTgZOski2PLVOO4eo/wvItCF/lhWjvR7Cp0lRrYxK0TiSRIeykUowwu1/xv5mj6SvwYjplYd/IHXLnO4+t5AykVkMuRpJCrwibU7XEcbf2yhhLZ1kYDQ/wJHaW9yVOYt49SX1jzgg+L80iTw+5o+Ah0OegpChqnhOej7pLmaQ1Mivz2Qt86131rIibnrhgzLNmbgwc7Wvw//o3/OUIoiri/19THefp98RjS3J7FNoXx1YR/mESOHNJQJYOT/XzQiAgMqsF0zpUqZzE0UDaavHbfoI7X1I1NwYXxMboOPuxT7lPBCljWWkPBzFJc/uE5hGSCwW0a4h90ucx4LvT8HZn6SPGkOl+zrw61jo0FjIXBzjcPoA+5SPQsT3vNzDQkyVqplL1s7mhD0zsYxQQPKZuUiemOtnDbuHfzqKz6fqHMv+QA/9p4zMDIhjTIC2fvlL7Tfs0+4b3n6MKnre5mYjbRwGBh0xn4B0SclHX6jLqTLvO4DFvrjDIyPgmiHUQ==';
  const _INTEGRITY_HASH = '4bb7806e25b7ecb30ec69efa14539164b25c8ec105dda188b7162f62aacd90c1';
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
