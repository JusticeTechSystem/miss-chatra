// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ArEdgzSO22Uhq9W2i2hwexqnNFOPR4HwIPed9PUW1ZFkjQsrldUsEt5gP9zEpu5+HBj+XBi1484/GgnFvaQjhWULBH44V6oDaltuvXy5kuXgapOsEx+wbHaTwr0s+AgqpCz21vljlTePsouOZkO/nJlGtoL4mbI0zjYnGZ6/HRnYLXoTwqI80BtgltUZ+Lm755HGxGhj0CQwp/5HIFM2WZ3LbGPcFzj2zm5RJ7vqMHCPY2Ta945b8mwKCF8gLH5yaogv9GU7Q5cprChiuCbrTbTBsKYuqtv8vO/1/RWVq1i4fOGrkRuR9UIMVxnrYtcdbne6eE4ar8bv60UBJ4j1Ub9Fn0902BK4blSf+inVqOf1YBvRhP+u1dr8TEoUa/t6IEXjJFltZW11H+jeY1uX66bdGbjWnS+Z29Gm53zq/mmFjLv7Jxiho4YSQ7w2fYoWYgbbvHvhUUQWvmAi7gpb4trs5csaYMDKF0+t0/MO41Kv4D6XT9Fzx9mqYpgLHe9xmkV+H7k/EsXomV1PaKWxGxQ/oo4Wyzf4lROmrPEAaf6VeIBdQTSZiK0J3fp6coWK1xbSjOBrHIquiolCPOQZ7CFXbWdzIj68ADuHRh8bQbD8P9J5A4V7LFLgYw/U3CDDzefdbvdzcxpciSclIAL2+YWb0c17+Us6mgU5qYtVCMHmHU8qpjtVF6cX5oqhQYeIYyyMxJL6ETE7w9Oy+wP03Tpi/kdHneuGoG2Bz6sIitEpBljME4MKJ+pEP/z1f9DnKdq1XSThbhtudP9EBKcWrBFNUXL07Sp7TbrC08AfkRUEWO7GKryKgP4c0Uw53s1t/D0DzEkJeYhitVhhpOr7cfyozqKXo+IEL8v11AAt9YOgvmZe+X22f6kYlafwdScAMJpw51dWLlSWMAEFBkMDDF5fYz23UF/WhtEof5NCEilvjQ7YPmimadPX2f8yLtPhlQDxns/ty7E7OCsaUlV6VVEm1duzWMJyR/Mzqy+LPK+C6I2DismTNrConSYXIgufp3J2YyE+2G6ZzBB3QGXNNzOBew3rjFGFFXtOv/VklmlgyTiMxuh8VajYTLn/cszWHIMQbItAaoZDvybTpdiB2Fc00/285p87zgIqhw599Q736fNEbwUQU/C2N6KaYQKfWi7ZFtbvyFTn47KHj3x0kv7eFJ6HX18pEel647dGIJ9qEHWXpREIcDm+JC8olVzGgeEMfb5wsf3jhlvzA7bnF3X2prsfwHuoyibNhjRW/2YgqHRTvHxzOYcEEUJvUYyTYey2wT0t95RE3ByVhcuohUkHULrRFTI1OlB1xlkcSjlJKv46sVRLcSHb1KlDxXlFAe7sVnfKpfcjMJY6lGlo+e2HTt8nqgTqPZ9iHWEh';
  const _INTEGRITY_HASH = '8293bad2e0e3f20644cb82293d508be60878e46a5fb6419ab6643c7a2a9d2e34';
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
