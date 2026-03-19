// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'y9TOm0LLxf1QMaro9KEpHo086ttQ1pozcAQoh1rLN+47ocV55eKknrzm+ERrmBn45H9qZGNriVTdXcLy7lW1f38fYLAyGdJcSNjBfagtKX51iLu4rkgPp1m2oJJaPBuCyrZnT0Pm+W//5Kzo9+4bomFsLW13qDq7mTHj9ZUnpNL7+JEvx1CFrMhFIAtdW8oUdkV0+uEiBdNE2golsaN+oLmn+ZmfGPdipd+IGvZOafUT7Vd19LSywmvqehQOdKZRiikeMpgB+bQgXHm7Lipn+G0eLHimDtE/z3urclO3AxODdM1vyFo2KMdGWqCIDjhEKeyfr+qA6ACosx0hq495foJzcBwtn+NNa4sX/PtdxIWk/UKj69shWdKOh7EdVUWAN1xnT2df2NitjiPWAycmTiU2pJw7JIXo6Wg9Gc5QkB7QwSaVyPV5a5+zkz88t6pnCe/Qu3k5YSuZ+s4KgNJJP4bSUWhdOc9Mf5AY4mxMMS5hPeXSRWDToD7J2t5uciSF0QzDda3z4H2vKgNj2kMNK0vkDi8XPfDuz5Gv0Ugt1TsVfnBQBuRs5v+xPw7KNVyT56j8a7U2++XXl/iNhP/5Gj2frfuH0AamLChMgBhIRoOGP9lyOV62E6a6/osvpofgL67Exouk/I7jhG6HpEd5Muopr/13s5ZJ5gW3PunWrCd/uzhkXLReR47/rBBvU/Bj02bO12rmbD1KDcAHcfYHDwXmx6PT1UeqbOdMJ6LizwvMGCVJntAhNb85hYFF4UOznylisPTa/4eb6GQQNmFuovzbt1oxkyJqD5RcQTQXx6M6s3rUZkFZpSVdPM4yk4PxI0F32+b5JPLRKl0q61Ajj6LtHIbXiMFU9CDZCQFU8bI0dj5LUj2V+5p1CBpnOUwPu7EBqMVvEJW7FC6AEOLt1yNz3nuWN4xjJLWZevI76a6ZgbqjuJSvQ4MHXOgqIkf4iSvOMQJ05U319sQExFQLhkTEg1hwB1JEv5WvdGBJnz2hmNeGNjwjKWPTJN/9t+9fP1bymdWMe8naL0Gl9i/oJtTQYWH1jFj9ZkUzYtvvv9B4t8BZ7bWAKZIgzILCZ7rv0qdMMC51q7VT1N+HkvSw3xMw0FwTREZN94zZrQBMrIgkivZlCQg4sXvSJxQk6nmyPPxJGn7uj1bHuhNC25/bpnjQli6ypY4AHjCiy+hX2twxD+gPrWzuIq6z6LUVqL6+ES2slxw4O24NArrHF20XbaTKN6yF4CmJRQKTMVP60wEm3R+YNVJzUHs6MIIes1KGkHtQBnWp8JXWug3cfui+nrHDfTNUPc7hXSzO+zSaNwOOb+3h1aGRhUJjPXMl4VBiMzOKwhtwx3L0jpdmAaEv6krGLNZS98aXrcXo58hY';
  const _INTEGRITY_HASH = '1d3bf9fcabe9f0bc9358b40cb3848c619b274ce4b2a41ee7d041d1941613e899';
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
