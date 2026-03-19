// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xfCV6x/nQ1gZzle7Tie4U8xOKcqL3tAZBCQsOgGGEEgmucLwUIZfz9u3ghXo5VW7SndAlZNb5i0hw2holwBN2o/afXM48J68BRFalcDTM9Exgiku6EAwgXT1vqrtVHzPOUz+330s3fM2hEfMyRnQMZocJFAACIuoG/ipcDOeVjrZE9ZK70+ee4FNqyKv5lufy1KNRmrggE/caYXUcU8164u/XvXuXU+SALqtwwPvfXT04BD5cS82KlCn64DVDXfz1LHKf3xkVhl1oZgCLnDDaX8VtMfPRsq/ohv4eS65JXWazjDqHwT5zGHb8WU/ZR7u9P5uBQiDzyhjLK+EaXoVu/AZtIoISzuPYXb2+5KnhdxMu3E1MmpAFasuFsjV6dv6uOS+0bEotlfdID7qbLtW2pxXHfheKTVJ+WyxJ4bXOxpkOoCzVO1EcJjMFfSR1Pn+Zy+ugrzvS6b0u2cvOFsnSYT3BF0iLzDVNpPGe7JWj6ZxpV4zqFnOXMX283OD6jK+kg7WD3IPYo3XjXEDnof35vp/I0Kx/SWo3Yi1o/+LgzdWYJucHpl2RDieJjnihMG2uRvsqPH+9kh6RZnAgDmXQPse47iWrKAEjW1vj2H7YYzkXVpvWjiF5Ri7d1XMn5ovkB8+Lh1ifcv+1U2iVvIoZcnPMklVm+fxssMT3s7+m4ChJJb3Bhtad9TT8yojZIUF9j0+MSplxlHuFq1dw+BgeiPKYfDvkhhUSjXYNT2p88Lk2l50gEw4vye5nWzjRjeHO9BlmulZbhXOy+ctHuw3pWNPKtJfvuEFNdSvnWA0cTW01rhh4gZ+tb4hINcYYMWgvvHsbdkPkx83BlZLVgtPj5dmJQfly8hb8wDuFZRPORe2jbCNUnKbPG1NKJN48okaJjFbhTalxCDPmIsEMlhgpTojOeoLZP5yspDhNGk6WiiPdab5YnCiKvYU4uQ/P3GiiDMh7pe/ln6OUSuaMcKTOcAp4J/YOaKRHzzOjF6trS2Bs3C0iBedoE2U4P8d1woPaiUbfR29hiylU06E3x/m+92nO9bj5bzFCEzf0tutW/k0CNscSbvubA/HJ0gsBk0FpjQU+tVsfJDPgPVjMqlDJR1MkzifBZftK2gbl19e3qwdFPNNa5nZ6k5GZYe+sZ5m7s2f9J/h8F0gxCypgl5vo3QW2vBb8HFtSSjAWPJoGOLpF1JaZWZdf0jGdKisO58+BYSfL2vAut55D3rW0zXXeZuF6kNgF3BrF3pat259hjNgpH+kPCrIi3VWI9urQKEXlwrpov6ATz69eO7T6Ethhk6cuLhfFtEF6KP2Yy6CmkxnIqqgHxcRR+g70r77+ZJMzdgtUYDQURbAwmawtJXzjLJvEEkILcFC/9PJckbCKqnAI0R6Jh/ztA==';
  const _INTEGRITY_HASH = '92f69b6284c6142daa1a8990fbb9a16db4e4980720065a7367beb8d53baa28f5';
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
