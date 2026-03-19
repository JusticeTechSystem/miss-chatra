// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1R/bJ15MXmhAvag+tWvwZd3Y7Dus5e+4OE9GTOmgKevBww7ZuolxL6ZsDH24Q62YGROzK0uEMBx5kZGiWSrbprQ3QQaOA+LbtKg4JqgPR2TyaB7uWX5DGBi7XLW2MsQqfqMVxclrx9VcS5ThHxqtIJsmLVAxqfqZKpUIMTLnyXWyIGou5KzUFt0SsOpiH5gQVhZsCrlt8Elzt6mfdnuz9bfldjc+rDeBijwhn4dgk4U5yJapJPZF4U07AKQkIxM8KHWZvxITRKNt0q2nU9sWwX/XyzRnBm3oo7yFlxB0RYzOpEHWyOMjka94V/Gubjy/COP+gYYKsjfK4pbEwnY5VCFH3nNxRlYA+UA5V2uTsk6E6W0AuC5zjH2ses1YArBA9oc4Wq5aKjjt+9zw7wy/n/1PggmwaLNoJndQoOvygYCg2Qpo4/JHVzVBgt/5Pu1kda+AhdnFDOheq9efOZWx50opR6G6UTVekVBTsBMiBrCQ0vx2UpoBEVJ6uD9XLX1jVEsnicCKh6tj75O6yKrRxzH17VgTUnHW9mCn+iDyESLOnwVhCZqe15IBJG25UE4/YMOfOz8gDvmHVYHxs6Stvfb46c54FfYGUMLfUrf9jiaUy/GIJJln3GnvE6Y/le+9bj+vai2z8NTo7Nx/UK0N9fx6QbRqyVWHJP8YREU1Nkmua5qd5pBgOROB4JGvSPQkF979NkTl2gqZxGofCg0nQotbTuNnV9UOJz2zxyo=';
  const _INTEGRITY_HASH = 'bc15e27d7b9a59b56a5dd1f0b1239f5fedd64e59762b888396108a3cd5db8e12';
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
