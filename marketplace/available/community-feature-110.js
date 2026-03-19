// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Kxvt6MmoTyicedl7TAOkBGcx9a7X+n41TUKmmfiHAhlIBf7ccLuQbhHstVDws1SMtvHtS8OAMLKANDaZT4sZQjVNZJ5fcc5GyDKD/y2PIYiS62haQzTCFLRtEkdHSjacM2mPApbjlfZUvuV7l1PlfSx7mI9S5u7dqAl8Hr4tv1GQAu2fX5vnT2+JIWpd8ljPQZJJ+qY4Y+4BHIWvlT2VREiQoX732dEcgp3J8DRI3V6Mmxi/RxlZXY7KKcuiN7E0uQ3cgjBEeX595VR7lStWVuQoWRAzfsDY2rt52AVQ+A6iGlGRdXhUORlsqw3DLaibmLofeUm30roPlMwwP7D1UT5kJjAEbjnbW9w1jgD+oyndofnD/jv3pPmz+Hi6H2/TbdWRLpIkOkmVtcnZsQiiseJL36lRoo2/g+bhIOeBJKwkqvHWnH0k57m1n/wDbHrU830NvDtHjYVSiv94xBuhxFkxzHdQaWSn5uz6vZLHOK7wnSugKEjKPWpXvakT7rd8HLN+LR/w5Sxd8JWGNgncnsX35N7SW3m5/+muCKTfP9ffbk3OrBzHu91mFCwXDSlLSDZNQDj+xMs5jrMOJ3/FF7oJ2V4aXnsKpJQhyI1c7MeNNYLVSc5epZQRMZqe+i4MNrA6qa0ywgbpYZvHx9ZzDkyqyDMdPqWfE/Eocl5dK59geR4A57jeVg67pHDlBOl6vI5sjICH7CunW6HbUT8qOHcN1BzQjGS+p0F0kyaI+spOYdVHRaY4r7Yz';
  const _INTEGRITY_HASH = 'ea2ec5543c0c6f519300bd1cb3d3da6a6c6e44fcce0426eb02257658c25eb317';
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
