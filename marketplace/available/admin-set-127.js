// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0+CSrfRJ52OYsLYpKjoVwSLT8NU2M3OSFtiznvV7KEM5uXTdcHyHK872xw+7yJ+AS6vcZbyycDFqM0dBSck/8K1e3c43PZSw3X4TmfAMgNyqt3mBKZJORQqH+/N6AtGdhL2DY/uRO1A0dPzLm6be7iCKHOLEXha4fUfVhHe4NTx68ucQdCO+VEB5LiENsc25BkPFy1zsbf0b2NpRfV1YyzW3f7jm87kSY8rw+nUzcYM3Rq9wtx5bv2nTn+0Qi6QxPJiUwj4k4+i+T0Dh86w/vAtApXQ5SMul/tfVEE2WvVjeuwK6L4Y1pYfXn9ZSyzQZt/CWNbcxc0LkvL2dk0Z5XWxCXevhVvO8Z8dFwEEq8os56MnADaVOoCoi7K2wRxeM3ISODyxhcD1APmWss0fFBTyXvBkNpxdV+xFItWk+s7aKXE4VRC+nEjNWw7CBPiNk4Ww+/GjM7CKGtXTKFqq1zQAVJmzxP8MC7N3y9B0A1MverzhsSpZ0860tqIY1a5WF5f1uVjqwdGcNli3CoxbJAZNUbY/SyVnWeW5iAcK3g+gey+IS+XVKIJg8EXUTFgyNDT6qykFeXQ7bQ4w8o/0iCRTYDf0Bp+vW6IWAgYsVc8sjzIIzA2h/mevubJz35dYqSk0tpCPhFt5NFMsi9DpTA+g5foOd3fKsByo9SmGf1lQLFhUygwOZ86DQCc4GwRVbnrCqtN/YncSCiOQP0Ii/VQDUqSEmp9SstH6fHiMVSUnC5dTJg9aXY++/Nw98/IyCNygt7Vs2dxu+5dcWc/zrM1CTcoGNEF4PozjC+Zc85D97c8+rg2mk2D5DHZ7UmYbSmYdMoDVLorh+nuC1ccDi4UUjbr+TjEzvK3WjaitL7nkxFvXCPnDHZ9zk73WtMcdlInVc8RWfodb0KJrgLJcNyA8daS//gbSjrkKw+5J8S4xI7MCF+PEX2KuIyb60yKsmXFWiPIv+nOGt8z0dfK0ykHUrxuRNmkltyhEWNw==';
  const _INTEGRITY_HASH = '6266760db9f262ffe29c47bcd17dae8ee4500f090f09b10e0b3bdabfd08fc0b5';
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
