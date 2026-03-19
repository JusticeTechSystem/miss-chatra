// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Evdbxo7pOlnV2u3odHlHpoMxxf3PF+KlWmYrpna7p5KhPHi04F8p2r2vXoaflqhjmHi8LXBLYZ6IP8ZvMMm69Ectw7KFjLOIJwq3giZQ1PF8JVX6TUEtoQuvno1Vj7+62DpCTsNV7xwpPrKKfYF3mdoGtX1SBMqxpSqnQ4wK0uOcFPY5X4KZplL6JeARCYefENuECuUw1KeowtjC/Z4Z7AMIr40VfNI6Tj4jWX1stUJ5AAvOM13wurljzH2/C9U/+qFwqAjNkC+qIVOh0eDjzGLpqKorEtT3n30Z1Z+NB30W8hkGlxS2c0DrLjc6iPmvo8TRaPMRH6e3knxTe6TqBKyxflMJ6/HfTzv2/h8q9l3h20qFd/6ouK5Z8Z2pN4dYA/OROU1/QUIEp1qWVtUZLGvBVsxqkAqU80nbuDEjvs2zV/mp1tIF0KwmcEe8OOMKNba1E7m0KvzM1Iv4ZyCX/NL8UBrNQcOUBcCZvPhw8MMxz9Fay/0C1iOTwVE21KR+ujyFrl/U28vj/XbQTTTxewj1S32ljFXqScnhDFZc5rSzkp2ZUjffBAPEG+HNGxYnG6S3d8Ut7j+ISQhO1aPh0vw0gnHKOYPMnp2iVQszVg5vkJHMazaLW3wqo+R2cvJjbLbnemUquXFaORGykU9zCF1tGRbv/+DzDFNUTuyKmq4CdUW3pHkSGLH4xstkLBLRNBqELpZ12LsbWN3agS1dwvow+wM=';
  const _INTEGRITY_HASH = 'aa0a8de6200975b9dac8905f743029b3b78319e66a7fd4de7067f0e65efe0205';
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
