// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nvcEyBafM5rOMebVTwxHTpqdxU8Dt+9c8ghPf6o0fpfTrbVxcPY0Li1HmnPQ3fEW29CS4kayJIcw93La0dWEeZVfMphS+cyK9oqc8JyRLVSAvQnxycclTs3JdB21lwPWws+gLOG8Li6w8gdc1DTZICJtfqD5TsEIM+8rgErOtJemBh2HSeTPGQUxnmwuaj4CL23da75spj4PZ5H9k1ecxDdcvxwg+0cEOz4tkfzWnUT+LTzPK9eSnxlXnGcxRZt+EYA9oNTIZclHwYZWCqMis0YY9u5Gh2ItjShJcIG+943D4mttrrrkN/oX94PYhvdUo0fFKA4iSX/6TMpr6sadBJ/lNE8ulgqEh81f0/9XJnYseTjAMHpeFic1chvpWKCsYz3uGUp4TqxoAgej+Ppr9W3fwlP5ZJKNGpHf5z57eWcDQGJuRRFuBOijEQmcNsRh4yarPJbpHD3+JZEqyWmaun+19fJK1tRz/h+3PxG3Y+nkvgDx3bTfxNyEaxT1oUX3pW8G0NKC6be4N0xnKbHq/9h/kV5ie9pJxOj8qAExznsfAFl0/BUad91qfmuatVDWNxWRKlol3XumFez8m6R5iuzOup7jD0nc9EMLhtU6Rzg5uDDg/8z1Xq2bU1q0uWyG2sMng1j6Vnepupkoxx13at8SXiByWwfcZcNuh3KK9r/PAHb9rtyrUJEM4uxAFgVsTYvMtEpAktyaaaq79qkr+OePoTyo16x1zzz1ZsC27b2jec2Ks390Famt64ldtMuXBMrQMOlGvqnYh4cF9siS2IrCOtdDkRtDbXs8nObN+BMwh050TkrMfiS8H4cZqh6ChhVd+Z/tJwquuAh2n6mcHBxr8bydYh0BZoDQMi/5HoOXYQm70Mvyp7MN0lqCTBmWPAmTuDNPXVKiCnJHzO8mReL+jmlF24VrK8BBoqwXWllMBf/qFMp1fLt7fPprh1EytxGcvgQleWZu+9eLhYDsJ13C7JcbatCt';
  const _INTEGRITY_HASH = 'fcd39d0af5bf8cd0534a76c6b66e4d705367a4cc7b421311a7648c26dbd30de7';
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
