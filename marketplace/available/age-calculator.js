// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Trgqg+LqWhMOC+vai0wevQdeaiVCzG1FGMHj3rmKxmlt1DaYQ2j0GbAW59aqpesmN9ttjZiEwqFJsV406JaISQUA4HMEzCTln8yb7rJYmEbYoR8mieFwkncFwDAbPUaVg0u6A3gQpqR8jdB6wEO3UFGPoAJ7HwRqOaKJId5nDRLO3ddNyvsyxBwXj0JKuvfolcWeX6/Wsnw82tXIJFusHEUxDVpgVEmHTLxE0aTCc6p2YevU4jAbr0FYAtvnlRel9InTeqxW7PFTCWCuULHfedf6xo97AozZr8lSygmL8bM3w5REjbcDXUU8KBmYnd+zoqw4VbSzz4PMEOSL4QtZETwsAM4jC4bpDHXBmNVutGfe8H3zpZ1cZq9qWjHaafKwvB0bmT+lie6t53jNWGV6R2MGwkUw2t1Mww50LitrxcjK3pQcqUVKCc1+7RikNQjIhHYv41PejZK08s+tqn2J2dljpDwkUPXiYPSocRuXX/Wvw+a3FW/Aam5hnmcbKZIb/n+Kbm3nOZnvexeIPlVqssXnPVfLPPFuBeJrM4N5L/nqDkMVZ1FF+1Ia5ja5CWAQBxYOLka2pqJBhFu1SQnp8NeuzvcphzNpYnRkcz/uqgUx1Caftpczms86cT5idnN1WlmHgAGDFpu0K9gWdUt26Fa6B7yQ/n/lufncfpPBQ9WML+cjgLQg5B95Dw2Va+LZ5jPyxZfNh6IXI7Q5eT7dH6iAcv76F1G12B0r7QegumduDsidmg5I9pMaoo6CZ/pAC8yyqsSSZnhhAJe8wLMFQteCHKhjU31LmkLVCDSwWdOTf3VWGul8aBeiMKJspFKdvJaV+DXD0gnp2ojfSWOvu0nTbsFtJz/C6F24IGsFVVtE7Wigtjwnxqi5WOh6QggeqQrdW++1YSR5DCOr0r0WfgWjcGOpqpvF7Hchm/2ku5EkvUJX4FwYhpPMNvV33f+frjAo1COk/JEEWPkLja5ARpzABB341pSn/o1jEzDg9gpLpJleZ7IZ/qIobBKhf3MTEjaOY8/ymlx8XK0brjwgholOYFAt0eQ3a8Wbua6Iv/azrp0lB5nbH/IAxDXfU4VmlZqQJgH8z4hD7DAXx/j6E/mmeYyyO+MXl0djSLHUtmr8XLZNSQMRucy4U8F7+RZVqaWW+bR9BbJSgv0iNTrE6S/qrfwXj+8D/EsHvR0M7wkgqNqcCN+VczH69R2WKvx3s3m1W4YRQHQ/iGW69V6OBcat4Yq4iHWoRXSRkGYEpOza7QcXY8frKu5GMjZnp6k/tokTeTbaSJE8zq1ca8bEvmuyZHl3aNVg/C+uqinlH/nJZhcZSkEBSYuh0F49gFLyVJ6+M6uIYlS6nAVofXc6eo8zOEHAs/v5rhXXjj2s6IVQg+NELIFD7zOTSd0LYJArtkmaCswT5zTpB/ziEWGPJEq1TUxGsf6tpT91faYOPbFOWCv7bR1jGmOsxZLf5L8YASzlEnuwpVw9UkwFSxUrATCSq6GedkAi+KqjZL73E/efVD0HCoeG7ckrIuzowhxKRiK47Xow9+YX0aCKtW+mV/qCzEPkPIoXwFBRCXqt7sIOtdMfQr2C5eyD9UaP9DkTa7iyxCdm6ruR+7FE41zB1h1rwCNrfeZjRgRcO0lGY0WnJhITY8n/UhlF/SNiRprQw97wnz4PHcARJwEyW/BkKT1M6bvNrGZrWDJMxOCx0/1BKRDHtB8XjeCK8MSX2Q5o5Jr7DtD6hZZOdrcn4fbjArGI7FhsMbQmzV4nM5NzaBsvR9pF0wZJwKV/azh7XNKz1zhWgcSjhGAFmZvp7qvOQWDS4i2S/YMFyK/3Jg4rbXa/1Xp0i8U9ve4raKM1zbUXhyCaXglctWV/ZczCyc6Bzl5HfIy8xVaO3yvWsEJJ60VJ4FOIZA==';
  const _INTEGRITY_HASH = '62edf1dee0f162b6163ce4518fc0a817f9ad59b0b1e6a7ddfd1c8ff1a2db2740';
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
