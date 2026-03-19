// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'P/9AytMlsDRc//fcLl00rdD3sZa+6u54oJXK1EP3vbjVYCtIzqn5gNVNAwyIRLMO6ltuqOy8rDuLt/NVUHaP8XvsNpvcYaUgE0YU/VbBXczuI8V7R+MznBrS9En5rLPJUmyt3dhRGud+fJaH16hzpLoIryJSpHnD02tP7ugd8orcCro/MXLou19Xx3qZn6DUw26iSAr2qTcKyA0QD2SEKpvoRSy0zrtRp2a//xkktUIluCckWSIQytFKTz7XrHJ5h06MyrTSBLZNiagCuI6iG5VMOhkWDcLOO1w8WqUyBaEphCnSpE/XUjnFHO8t+vd8+FxHFt4YxUbCedpxh3j9N3BirhkbqAEw0V0BdI8sbWa6Vvd9OgSQAFVLEKtU1RjqIWQ36rONoeRC4EKPvJd/XAheaFCo1bSQqMOR3hLBH18+rs9Y9aoDzxHqPjSdvbjzpTIbKHev6PU/16YGexgIGgWCMb3CtHyiitkij8I1fKVRUqr4hXU/1qSUNeN2P6dkn8MgxIwC13vcl3tgShIHIAF2Zfqe4Qw7Bg42BE9G2QlAyPe48JHyGKLSBtZcbYIUq/7DK15Gfe2HC0x+899SSQjSeQ8gOftayK3k37OelJl9oFl/5FuXiP3/cQmK8nt/4sCUw1MqBczkB/Dy4gO+o8yhtGW1ba+73DZjK+3EeFnbFNEdmNSKd+lFfQZ/lDFtlOfc41tjoSOYE+mH8FqOAeCLZpbYvc55NnDZt4vG5l9sk6XT3m+rPIiDc+lIzYjgd6cR4t8W/Ms0XWZnIaXcn6yndY/hH57KzmtWuPcDyonR37hGaNaZSzNdPGUqAfEWC8LL4Wjy9FXNiVtE3NfX61lpobH01x736GfSnat2mgiQ5UMyUDDZ/9CA1qDcXKhIYn6QfL6xDoTWJgi2T2x8RkiyoyM6gjXUW1rNrimxDVWDrSk+E2whSL4RJL9YguKWnS8vjBZiolgntVUPbltPB1qQ3QcDc8HgXIlzUqHABxxP9mIQ0U8F2+yDUwlCK70l2Z8Rzw==';
  const _INTEGRITY_HASH = '68f4bda1e660fd2c96a31548ee59573b8f7315eb7715bfbf74fbd1469c2f44e4';
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
