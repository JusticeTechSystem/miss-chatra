// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JMRmz9/9B8iK0mLufpkrxVO+Wj8a9+FxBFm96cCrbUYO13SRzHRSo/AjUQ9h1UEDKzSsNkPym9SF0rQPq27OWmx9W78AcMbNXTcCA+IxtakvhY6f5bTMQHLH/V8ZChWZNnYNCe9bFskJ4JQ/LQxivdmFCJYw/7su3zmjQ3OhveK8QB523ZCeiTTs9EDz3NgXXYEJXAfhCjnb4EoR5s/Jf++tLmyQPfOQbcBNQUzZIJEWsQntHvDL5ITXMgowx9lijM5mVIblefkJOvNuJ5ScAExmvLBTP3OQ6+Zio1h32jhUxhX0/6OcGlbm1bqH9RA7yjHt1TXQhJZkdX6rVLxIQR/5EqbuSumBVZRMcju9BQzt1DOd5TEubPSIU79rXMXuZ/Elkvw1n5u0uLVfbm5Ly9AWk9mWbghOR+NY4mDtQFYbVrbTRNjtCrdEtnf4mevE0UyP7VUrXNNvakBCzwvdzjm4UtfsD51wKOmPcFbNKCtsNIMNhl5qmix1f9Si7HyGwZ4tLEoGXAfMaMigvuCeCRlV0UKT7HXBFcPPRJS3AkGHYM1y2Zwbe6JEEUxpadydZyFUYGvteohOaa6U4eRxHC35K4RM4ePp8miF3/HA3WLIHmsBYfO1Va0JCb9605M+5rGGqFDjWG3Yt98nEg+QzTbNLl098Gz9gI1yNvJHyF9BxElx6I6H/zRdV0lZ5CLhLwYjv74zBiAk1D4ZZXaFACaDZnaoPSN5VRchb5LAQA76RTp/GxiZqbVXMdX2zYPtAXUTcBxILFJ5yiwPR3rH3Bsnnm82ZexI5l9EzE1/q2HvbHRx9hRRN4OyDihfwmMtjdfE7475xZ6HZFWkQ1kj76nIwH8sEEwNq02QaeI3ftSfvkmjPYxrhI5b/P60MavpN5JJgaAyIa5ihBMUhL0eBqCVP0QIGiFRAyPhI+U6TX3ZMsSUeuLx7CUhFjzey7FJslBrg7W4MOqbmKrvsDKvv6VOEI8c/AlrJqnk+7p1W2U4jSN/Zbu82h3ll+R0OmaZ8JqDVCFxFNO8TcTrLloShauo';
  const _INTEGRITY_HASH = '435e087fa7382c68c4f0f7d2a7b5e4027e5badb27a8c23347b6dd342a7405977';
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
