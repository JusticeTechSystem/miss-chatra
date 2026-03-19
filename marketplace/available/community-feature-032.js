// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TvGTbO9F4HZ4sPY1s8Dc+ia17Kx9dGHzR6GYuYoIZWZ5Kd40JCafsZk4C74XeeWYQQ9EyMNbCz+L6g9VbNy3nXqB1zXDbfKzGskKNxDr2c3hds8c7pLW4mAJJmqj480PpGgQN+0ro+sie8VSEi6/ahNXcQGw1zJkpY2qGCcW5pRNjQuN6kBKdgNHtoQN2InzQtaikdgKa9L2P+El+QXfN0R7BOLjXhH7p3N0iQzPfAFkGiSg+X/+gy38fOH7MEB5ahU0mu7CBWk2hyC/FpEu/yrNsdBZaA2K+CYi3CVTbx77O84TUZfYLCj6ig04Vhk6WiefDB6v8xwIhYZMmAFNfbskEPAQXLshbKYnEMaSKC0/tKikTdNrPNqXzqa1IjWfkAisVNypkbXYBiVxekMdZJkO+E8K73nQ5wMEIss0fYDd1MHnowD9gbleeiuryKuHNwCOlV+f2JBujpN2zm/sk9CNqAe5jbN5aRlwa5oZ+TaeZEcmVa6bkqt0SWZIzcoOz+EsHS+Pg4Kwb3UEAKtXDwAvuC1KqnAuI6b8CiVEuDRVqgnmwBLYXF4fE6tVaScOCxlU1EKIWkGLXdO1qFY0ROFSbzC2itXR7fM9cYQ+RUQgouaNflL5gYVvvavnw8yGjWe6F+89hdu5q+IfRhTFEdhkSYydxzp4H2xyUVv1scQ2nIUkFtW3tVpD61nXCW4LRgJHFp6VEC3jfHQWEGd1T83Fp2FjzoIf5RcioUkoGA==';
  const _INTEGRITY_HASH = '1ac341adafe9f821e994522f6bd78e25027ac818a4436526add02073903ec501';
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
