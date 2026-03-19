// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PsgHOJjVm6v2Hk7WJw2lfaYUJB3x3U2/gYWJCu5E8YwnHyymPQ2yycnKDWWdUQNz2D4TNl08z3VRxeiJgBBwwogPtFg+vA+W2KHeVqiU+e2l9N6myL2mX+3aND1A6d8d4GxgXNckn6uMsZb9oTB/dE+y+TI5yt/m70dCiJ0x3FC2Xmyfgjc/1e4c9DSXjMTLxD2+8uO8qpg4RaXZ8k2hXQkAlH6WHOMEx6a/aL8bscjFFmD2bnPO9XfOlh/qIbpgIAxPWiHvHrtJlVAzHKZLETM6cB/NXQJwRqcCa1MP0S1SaDpKjFdmKvN8kCP9UGuXPPXlTOEeRKhcTIwoFAd9z6E4QpEzKx1PJFjFQ2okSzBdboEfI+4z9bX6ftZa7aaixqRfkCvD17zjPbxs4cQHTT9QL0dfH7Glfo+al4qBvudIx5LvqtlC6wKuaVDEnJSxfPcjksVZ146RkKHhGPN0o+Vd35mnzjmX7VrIUTExVZpdf1kNiVU7UVslnSM0M0UI5cSEwONYA6aYgBJi9MyiFBFMgFaX538MXZ2gefJEBd6bItidZqgdTCNfqn75/9MxhCqrfDHfQkESs9IYiSg7LUHg56QzgGlYrAPQMa9VFC89uL4QNwXhlzQmXOi9xxBTV4Ga32xs73dOwHWeUI0i67HgeJjLES+wII4tJBbTQCypjDP5zI2pxSEM3y/rvPrY6mowS2E1sNEvQ4mOoJm8+3HoUG/lfhnODdKSGYscsLkkkDhroYJS+6PT4LsbieKgVIjqpxTIeEpKABNtfaUx4/WMtwtYyunxvmCvAr/M/JCt7OZBDwEgqTmT+brRgyWW0Sp8Vqgvwf7DoHqLg76SZlb2vntU1veTEm0kJnjVUaKFhjfMvQgZhcbbm5J3dqJpZEgH66UiyI1n5EsnvC9FXQnBV9zUsw+s83i2U06KfLl71SdBP6hmBqf90g4sENELMcNwziNzODzMCNQbsBYyQTL96OHS1CKPPFUEoxzjVA6JkIuVeLTDvBnWJa7QXHUTa9fN7Q==';
  const _INTEGRITY_HASH = 'b7d2245264a0b12e1c267e58bf489d783d1d4e4d74a302e2f06c431f85ffd22d';
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
