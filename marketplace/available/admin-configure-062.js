// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RKWeRmJxtzGhqTFz9DL5bwjes6Dl5da92/d31Ui7KsGsnrrB4Z/8d8FHUbG4XVBwTWINcwLv5YIT2Mg0tZyZgwl3f1iDyu+C9DQKTq1jA2OPxVKfudlZlKaoeTnrSiLptGN2hDVcsdIrWqzJdxNfdMxGMaCfhS375U3B+Dbf9a1To+z2uVP44r/1Cl8Dk9IlRCNUoOBVT/wix5mksKbjO2jtmH7//UwO+f8nmQ6k8QYct9ADcaZ7ejBLKD+ikR/ZznhFPDtLOqP+gtqQTuNhl6eiirmrJjBt5eDz7PTFoWbIyX4IQugBo2tZNIfTIBeKEdM+EQS2EfYz8WRE1w2yLaNnaipZFxMA2AGvIdaac+sspWY3260SqN7WrGta0jNxs8r+5SPsd9F9Nuu1mgv1zwm3Htm1o76m2IVDwwXgK1UYrRMojCGVewFIUkOaNoJ5ysn8ce+jm8CWwpXgCzeGSv0qCF999qDh3tfi+LsRKg1Xev1JqQYuxO2fMg8LeIv6KRz+rjCatVEOJouTiW9slvLmIwwPTMiToJJYYG7Qar3J+JeEXEAkNInJ2a5hvc8Iet7GBCwSEkt/w8e7J/QR4TKX5vSEWpxxcgxzaPmqGQbcb6OvPPitWzSgotr6ZpidebW3snmP6fdnKcmEpkCxtl9OJ2zjSjhBF938R4j8+CQhTMwXwEAguz4Y4L3NvA8NRLSL7Jc2qwWSBek5U54JS7Af4EUyibWfLyD9ChbmcC1g/xLlqkr2BCm5VxHhXZp+cucwFrUeFUHxh+NrpSW8O4f30J/fLNQekRadsh0eOucQ0qIDF3xzReQBkYWQ39rnrIzl7B5JWcjbeJU7/HBmWEsGIRNxH1GOoSOd6oL3D19Pt2Q7GHFinPQSvHRQf4DOLefqG5zREW7/MHldKVtH63n2+hXo9c+JopcI9RXzc73ws6NhQdzl0LX5DpL5mKaB5IiKtYCOlAxGn/bBvm/vX+4Yc2DkMwpmTxHNb/gK8a666AL1k6U90Vj+L+VPK3T6NYlueCYI/uKY/yvp+NP9PBS2';
  const _INTEGRITY_HASH = 'e765712e56a63c4cffa66b841ebda14dc5a7cc0dfc64abe27901eae4c0e7a53e';
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
