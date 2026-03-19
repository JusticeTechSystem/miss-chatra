// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5QV7suNPjWl0JLmw9m2GCU/3lGXKb4DtiYRSaTzT5srcv7Tw1VzksUIDeL0Vw+8Cxlgt3LoPPMxU6DG6aXsiOVJnmXV0AAaDAfr8DD5WM1h2g1k0OfxRmh6Nb078VOOZ1Ahj1Dy/xYKM+ZfzZAEuyJnBCyNvUdVA+/EsD/4y7FKF/l/t0SYtp93/K+9frXmI3TQI3QahNJOm5YEhXOrR+2uVWe6GVYvGvsA7tRxNsa1bRycsabuIxzqTANd7b7Att5BiSuPcs4KOMRGXy0leGA4gTYUPyK3Lf4THm2kJxToCNRUQCDnATXaWOogoKJJxQMpv7rxnTVbIsm7ZCEYN+bq5S5/HS50hp7idmmejkui0TATpCxKW20iPkrNBju2pNGTmvgJukOSbyvjz41iXYhvxYfmGWzSIFnA91MRvw9VxK6MN4vVMN9x8d+ds0ELeq440+MQbgnpv17gU2WfOC9P97mFTSGamTyKGeiMUQXBJkP6zeZ7ExJFOfissW8S/HJdbezUzIhhw6kWbCGg9rgMar+S/J9bvFPX/XXROCV34Dt4rVfQX36oV7FlH97J9VM8MOTQ58E3N4knDYZDoWfswZnEEr2MGM+B/guO+VUYK5/ZBu3QT+p9LGTSVxXqPqLRabgdQUxpA7S3cT/altnIx/rflCEp9K+Wytt9ThKzSCggkC7+lCC+GXGBrLPkOPv6miJPLHMVoNaDxpBebjl0QHIo9m3QASsIwsx4qSQndq0qjqBbQYLr+rATSkaJ8waaZrSpudyU9Rqe+iEWFZaOTY4bCcJ5goxYLuNbiPpoluTYcwJ8Apy91gh0c+hUTimOT7P1rw3HKGKJrOdb65SkD4D4YyDUdswGemfLn++Bpv4nEhxrn78Iwad9zPxNLF8wb99ZXTQu8D20bKqmJvx+vEJ0GjAqdaO3r4+YeTXrGBjwSntmTABozzGDIsWKZOIs36S9xdmannYRCWaMDGHqf5XJN32gQm0DtKmqOAk3O/COcelCF+mw263ZuF4wYlnaxIg==';
  const _INTEGRITY_HASH = '2f4ac5b2f0544b3346e270e37a322f80d4694e8501bcccec548b0b3cb7d1ce94';
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
