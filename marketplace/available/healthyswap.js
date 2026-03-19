// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1tBC0J0ktmA9EaxV8YwsiUl57BIy4HuJNQHZ/LO5k3zTwyVhL0cQKspcQ/o6Td8eH3nXq4cw81kWn7syHuG6AEAJLmJUJDFsIxVNfR1N35i7AzDaT3y+XQRsF6qj4hoGS94WVr5yMgkZtI5jP430Tq2KXtBDRicsCs5b9YTntuVn7lr7iCQZRC+LpfhR92pxMWWYdZBFctV9dQv10wgT+L2lVyWqz38QPRSVIfarA4M4SP6vhWNm5s7p/Eyc2OVMI47E4bUgU6E6fU6ykMx56wvw4/slYqXwD1tS4vUPQ4GKgjS27w3EMDPxmlluY25odZxze/3HQ8nnxoLwjLd0Znh1CG/GHoGlG6z2/kAyw9Z7s/NfwPYxo8SJ0hStutNT/w8NPzTw5tEBpAzHNM/QWF+6YjknASP5e5XQkRTJGSeu5TwPCjDnT7MJkzPfbfJ7/QQVkiIY2IMu8joO0okV1l9xgEprBfgwjJzvvWSm9WmN4MtZ9Zj5QD2IjFY5fGyNb33Y3STYQD9769y/m4WQsleZ/l7CtGLgjL2aYK1YIq7SBcZ57K0rOWa1g57iPv4AGBZ5VoPnZX8EYXButQ93IgNjxsSf+h7O5krApx1mrUjZe6xB3pNNb5O2cp+Rj6f07pzHpPuaj4rrpblXponGd5dC/fxXaZAh/KtWNFBImo4SJHsOd4wrFcESXGgMBA507yUy3f4Mvf7gXFnwfOaaDaKmiGlwlhjUPRXW/cLk4bcXyzHSE0ewotawm899AyQkhmLxhM5JISzUkPmIXtIjL0UynufTM4elRwyVZ5AdIyftpIBo9xvqdcJZWULNPg+PiKOzrqgKeI3S22jt4RBT8y+GFkmtXST0jok+soToJndpLqe4JiQ5UxD8adosWVsHkFPNQe1oeWR5l8VVNEsEA9c8/2yUyTSqXFHxIsVK+CqD/WhJYyba15msZJDIC2VR0FEiUNm55xtOp5ijSpO8+64o2eTPqvnKYarMPZHRtgBCJFjBWjK8seE5VyIh5zXYV/J/elbBZ0+gzVahDgpjJoaXr/worBtZ2npxvGYlKL6HrJopu5FyuZPG/sXl4tzHS5lkbn2VQfx/FjdhBdbAuviUudP2FJzOqvNEKjoTehGmCgv1k2ktXJ8qG2YoBVjcMfPwg3X4vEY8PP954Q16lGo5Exc9b4BuSmbH0f7ke45lG6Sr1MpH9EMv8E0oSrxJGKM0';
  const _INTEGRITY_HASH = '3ca224f5c768f99b5ffa6fc64b6c6768008236b59910eca8a92c36ae35f38b45';
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
