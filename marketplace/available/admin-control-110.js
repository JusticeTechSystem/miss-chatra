// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cys35Z/YdN+KAmwYMlaAqudh1B714b+3FMa+45D6ebXCN9VgxsmNQAVZgsrRlD8ZUb26f1gMYtTT/drEg7GO1OTOPvfROH58swIjphWEz7KeUL/a0w+wnmVaK5SPmB2IUwtLE9Dji1kc8wnE7MCm+DmtPzlHRIqpDLmhnisWBcLz1IstREBvfJdrAxhpM6wKgyDYn5fLNNSp0aO09DjhYUpEbzKzWGLRncWKyxHTRhnzmzBg7pTdPqTxAiOOsGDZNn4Mp5gKpdYTzj8dK1InSuNKEa44Nrl/L10AGX5A/QgcLZNR6uczUhqsFzl+BoanzzmE2DR32XLHTIs3u6bNmddZ2ld1doF+DgspC4AucgNRAwOT/Qgt9t2Nn6wP9kfNUb3Y9fKSwuRoS3Oktm2Omlf2v5ONcX1uyTzglQpCUwzmbRWRaC/2AASIyvSSzWSWQruVVn8b8NbYx5yVoYcS9tTu9wZsL8PBs5BVXg7coVDwwOg+24gAldkQcnFwhaB1NOxYBMN46bY1sfsbESygtUYH86zQeSXAVqG6JBHGGGBNQDrJk9GgDMYxW6BL6YLMxs7vISTuMwo6ruua29QqP5wsW4bmEi4P2ROjnGpsUolF1aVQZBuDWV49TJb7TrLd1BdsbT4RSe7aUCc4uhxOviCo0lNifihIO3SS4KBcRAzo/3iTgqjQY8GQeJaFHi/FMlJWxPJ1S4U5iWayNo9S98i34SXxT0d5aBxYMmLkpIjQXMdENwdJkNAt9z4sxhNCAWqRJHR/fDpslXdh9tFwfJe2VyC0YIfExONRwjR3rPkXhKM0IX9pbYZ8ridpAzXZ1FTZweYTtBR6RmXxygyjg22BJl3fkoxkAgGCRZb6E/O7E6k6rS4iHr6AqULp/8Rso/6k/F5YcY5rhNTDGU0k17jjeq+uyccH4NmeDIo5tR4jCbbpnMYcmNLL8ca19RTqEfyUIONk8h40dQVVU7ih73+4Urrf/Y7+jF8VmdxcB2d9UJBnWIeWXoCyTI1HVmL8Lti7JYh7nl0=';
  const _INTEGRITY_HASH = '4e1ed232757db29d551ca345b8a99a66f8234e3f4e8cefee1989108b0beee2f7';
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
