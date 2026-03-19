// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QGQNMH9DtJSCgl+RTG0sHFYzy4DII6TwWhoGb72J/miTy9AaNXHvAayWUEQZ6aly1CfjNoqbzqbtfYnSe18P1JI3xprFD7beF2Fspz+cm99gLuQJey0hbPk2JOYzPZqN1lsvr+otmNQ4dC3mAHHALFSxHhn0Ih80fIjh4aNsnEc2k7MbmWbVeMTlpFS6OiYLOojSV1oNUWP9bIYuoqzoyQXDOFssFTxcS+nmM3XFlwWUMf6v38z0gyL5ZNVODznj58e92lJUXfhYC3G5H1Oz9vjy1q60W28L6vJGdxRtjDGPHdSn+bhU+Yik05cyusJ0MinQZrM3Qnr2MAcuLKDjtTb0E9DIghbZmEpH/DiChZ08enW1XIjO1a5rQmXYY4rphYCiGek46WX0n63E/DJV0a9oX5ePROtPAtBPR3JqRkpMug+5O7YvM0KLcPW17tH0WNqwMXjdCMlH1haa9F/rXwJUzbcPDdaPe/fWMJ8p+isgr8Z2897HzGoq8ZJ7dpBJkl7t51RMJwy3N0sftG5ixLLlJkg7CTtfAxWZhkHca2v7/Vdb52oxA3iyauNj4+KnePxvqiB7ZS6F67ld/tofyMsWfSP7xBi0gy0Zfnmg97XJHrzx5J3cd8JMLrlEVAzKSVJ7/V8oWRLkjCtFTHNJjhGXWMrhrXUq0SaGO+9XmrmtSJyagumhevD26tLkq9FDburlK4Ysv3MxU3xRVyAoA38lHGg=';
  const _INTEGRITY_HASH = '2d8565cb4ce711a9559ab08cbd7eb59a4954cb7ed1cbe6b54f0e77e2fcf7c91f';
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
