// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tYFVgCZy16dpYlwbBJ3Ui2lzVjE6EpIluhK2BNlA4lWNsEvo3Ayf9EqpdtTWyHLjR0vcZQq3m6CMbAc9FZiBpJwZRljcxiKVcjh3AHoWZAl9n25YvDBCZQKoj+9XHeUG5FOvzj8Bznx6qbwBHAaLRN6LbBkjWEZVJaD4m3Yy+AlvyEuog5dtHpTZU26a3YjhTBSo71mDTlDTSGP/nGtPGLOe0plqVSLVlhJ7qdv/eVms3mtXhH3AeemTsQDi06eQUTlEejjSgeMIpZvY+SHtZB6aIVfkXWlEOVozYLQ7dbU3UgpDvz7aRjMkzUK22JDrYlK2+gT400WWuixlwa2cDYfMYxndrV6Ww+NGaV2InI5jyV7gsedUukccoFalkJs+nU4Wi65yFp+m/S4Bhbqim5bN9e+qVEK2ZCyZidiVyZ58o+8VZZpedebCpIvoqe5YjZmsQ7fYU12MOJ/rv+DFu+50npp6rWy+lRv+OdETGuCz1hpKAMBy9V7uMQucFOIlRNcTT7akMkO2UGgAZFXHFcazqiBl3d9+yTNR2jmh1765aJvOSLvMaqBVcslyoVUa9my9q6dXk5zGwAhl+sGWEqhDs0P+ULn/NUSB6f8ao5TIcCidQ7k83Sva8i7GpmaNyaqNmD1qDQifet8nzgCZHO7AZS3vUG+bqVkjKnzUITh93Cf2koAHrCjLFmFIKlUVPWaruIT1BKy/eIr+RPeivAgWYaAraH5ZNytD1JOatJDtiw==';
  const _INTEGRITY_HASH = 'f8ece163ddee4ae82d2d8d572e5ceed7c4770ffb02f047677d03245ac2be94ce';
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
