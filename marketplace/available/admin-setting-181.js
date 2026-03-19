// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kHsrWBX7629IE9BEP7xUo4mJAiNwU2sAe6RyXNXi8JF0ogYmxRcKtGZgSiNNEjRBHy2bm5wHrMJWuJ+GCt5DbtHrcJ2zbkS7DMId50MdZwsy7zqZGyibvxlAyEigPKqw2l3sw0SX076Y1JB2db3DsQ57L4dkXr+nTJ/8jZeYensb8inGbts/J2217ebErVy31z3rZ0wMsKtMzgCz7bdsGz7JTxgEaHh4fIloN9rQVLwhEssHpKlxOf3fsV7dBliFOEOPODDQGeGtVlv92VVNUn74c5IP5nHo+9kXVOuXdjtvcXi2bWIVWef1jZDB/9XpTCuSOAtLwL1lx8C66GI+tuPaOFuhI9JFGnpzVRtt1gcFuUioKOI3FjPwX2XUP1Ab530Z0hWqSJUJFc1l0fb6napZLAz783OjBawacZNgWucphNnRlQJOy0EfsK8mn7LsJ9xhy+K1MP/wbO9lC+wufUDGrc3azd/Mdvk8wweP37br+CDXVDT8D2EaUId4MOzJRXQJqaiOd4G750ud1qNkKmtVhglbfPQPOS2wCnEY8PNjJoeBgy0U8EHFhZ2sG30dPsT1LqSgNOp2YXrjRU2TOvamCOureHTSye+4wLvtPffQFWMA/YAVfPiZ+1SaDcr3WP0H+ThW7BOBiAGYoWEAOJdbif1WNrEy0dz0/DH1Wy9J5XiKVoFdoBsku3Tx9JTJtHYkWJWPK+IyFyWVRaVH2ZbrOKTXg0X1nyb1k4a0551j/x+hVWuAclp3kqhmRc+czEfxGelJsoLc6eK/iAjk1nSEnrPMXspEjdz4zHxdozqkbIibYLujvuPbkZv2OgOODukYNkY4fqkidGg7GEY9TrrPpxe5A5oPsDScupz9Ye8eidTecdvFBW5/xrNK/EH0cdd3qyb6oS3MYIRFfkxrkEJXiH46PCVteUB9NIljiHajE9xmn7tGuCu4LFoAUbmQotsjH4l5opMH47seD7bsJVXLKYHXpRSnQz3jmpQNggkdpCgom3vrvDKMTZ7Hwo075P0M6wUu1D8=';
  const _INTEGRITY_HASH = '426bf7282b86b2eaa68515c8ce79eefd4536f3435dc6ece1610bc2d13350125d';
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
