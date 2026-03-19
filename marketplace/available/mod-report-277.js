// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'H5Uak1cNJOOqaOA0xYnFPZYtogB0cI6f6rW7E0jJwoMha1edbVeOOBVUSf3hrQVUqD5j945ls6mc6o/3SKwieRkebm02A6egBqnnA9aA4iwJ3c/GcNbm0jvxQm0ck/X3icN2y5dB6/5WR1fXAVkCNQYxt7aZPgA/gF2mi7zh743ENxYMz+55hPWHWYcb4wJ9RJ8I3elWHn9B+tnTneFgCNeK3tSu4R64yNYok0OR0pWUJaF/OgL03MJP8hQkSLUg59sHz7Fu2sLp4LGs+E186M6HPVf7+ShDA6oS7JIa46PzgpBsvmqEzClymNKyXxEyjeX8KnKxHNd7L2nqBq0XTpSN+ZoZieCejfUx/o6KMkacVhE+i24umcLr07zEvRbuMl4Bf8cS+U3Y7skWR0s7np6Jn3Y3YSytAsf1qk7IQRIVcoHWoOhzFEOqTmCAuKKZ3iv88EoRnHh5PEAp8c2m3NHgCI3XgMusQNnT03D+llK0g/a07UqM3902ZPX2JmAHNPz/ZreytOQ0jU2TP5D2pqBBp8UAdr71XiayyAtBSEapd84s84kPbEEZ+1cjOqOid4sxcTVZkSg+HLrDuVA3B6mWvU8m7pHpGT5CkzPaae9erBZDGjKw7SpglsCF1+58XpHoN3WN2Ln+cmyDDqi2391a6mKi0wKmdtL7zKkAiWEg/gJFQDucDy3oPhIJhP3zKKSgQjCr9ak20Nj1ZAgbQp8OXHdjnOYLzvoxaef37fqTLl2vzayrV+fngaGh5xm+5QmfPY5roJrUBODbOn/Iks4naZFN83sCweEEloHFXE/Z76F6cJEgvPWC27DrB7V1+d6M5gkag0O3ZDDCTLwNQUW7VxrUuYZoCnfgM7f6AN/XFtpl7htlVp3NUhooWH4IEF3E2uW3N36ZhZV7aWOHtme/oM84QAmX9oXANwvAA4o0ljGjn74lVTqlpqVnFh/QSv+iBKnsfxkfRHxZMmS68HdSzF4BF8K0q/lK6Sw1YjGs3O0HOIz4QwZrqlAAXHTW/XLuZ+BPuku9E1Z9jsW/xvSoxVfwLHhNx9dgtT0ixDJgLP3d8SVX2WU3ebesqRIDhN/0hET1D9rIIi5D4fEYKDRr4TP3OaT2S20nBg2Owe2HjkhsjOqjtP1LudTxg4WBlflqvXRQpGwwJ+rU2+KRbLnM8p2nvdbWc8DLNpUfs+s85EuMuGbgBMSqRrrP1AatpDvgHrGP8606eAGMNVcWX8BorkECApYseZj0kkpBG19ucXD0un9+RyUjLoETItdEHvXJFhaWP1/2B765vG6ZIgYAlL9ZyfXyp2p0Tk19P9wBfKsGkUvloEyv5naqVqL5n/WnukEs81xw9ti8DHTvHzD0ILIc437XMBjind3ZtVpHKCHF7RnSHA==';
  const _INTEGRITY_HASH = 'cadce880ab52abcacc72ca838f6340992fc06e8de64abeb784faa729cfb31a3f';
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
