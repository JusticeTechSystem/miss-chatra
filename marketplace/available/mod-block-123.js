// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fYSyfFOE9Kq5gNeFWQ8rMveM1vDij3asKHa/qRekYrfA3ilVb+eswcohp6Po1pvGiPNAfP+IdgGOEX5o3915nj3HSTbeUdAQsJgsPhO5WuLxPWeFtfTXPqAN/JhwY/SYInNcXM8k/7ys9vrvX3HV7GOfUMbnzTnnurTdR4ycX76//BvFUdRAdN3q0v5hLGKTq3HFP5WFho3lrnD1SB2Zel4IgWS/f1K+mpzQQVQOWxK/hF/EPDFBGYnUuN8sUsebCyHJbFz0QbXgtLM09ga8R+9BERv2uLkgy5IjFNA5BCoLwuQkrdl1ISaweh9AMBghuHA7sNsrlbLKbaRz+FTIWd+ERQn2apmyb/PbmBha6D1JhqYt6M6UEDb2UDA17rCxXhDgLs7nkQ8r3+S3/7kljmaA9SYLcDpC9ppGUuUL8/DHF/mSF8p9nsa+Pc9yk90Zq5ZB8YWEUZZk4WV6r44evA/zIzyNyLflolFcAujWeQwo7YCsVhrvp4F4GGBuTqO0Z7L0dbi92FEjGQwRoPJRKHCxe6Eb0AYv2RE33HjxlGLKiDJ9LFOKw3G+r7SUoZ0JEwF9Bq6OYdTVsHApMKcBck/TBQu0KjSr9geZ+b6mcW9sehC52HhLy3jYeQdxijVOvxAiVQ9335rWZNatRUrLAItjyZ61EzjSmjgcZnIVcJuNARskDpii6sEIM9TBlcSJ6NVWNUp9OnLxXeVuJ7WoZfRu5SLTKXChB11MNZKmaYIL9T7rNPqBGdYCnpJnKJvmAKNQufCmkJU3q1+wE7KoIXboiAQhG4jxOYIZef2uj6DNt9MQ5+gjePWGJxZI7sVW/7Ato/PvNjb2ATeyicIb27B40ZkI2tDZTG2NHHGI0KEItWMVpwYy+bZMF/9XwLAII2C80PPw4s4njh8E++Vbc37fXjYuiPvYxP43fKOuERDRDGV0kzcEErH2wdZ8SCejqSST+Kr+eQmaaVqwBN7dRs6V1kxr/zIdw8mBNuFk6gVuA5x95+RhCBM5h7mdvYRgFP4CGY8yufY4t//evD15zQFM22D+sRINFBDf9NzM+wS0Re9/NC3pK4BhHkLxZJPedXabbIMMuCnbWivKDVCzUlMNVoNq3qE/XSVYNFcf4AX7oM72DQthidYI6CGRCRK/MGNkD1dMmzvFtnfX+AcBookrKCOelRKJVy+b5XRy7ALBnJ/avdAHNz9FXawsbewdolgPi9THWGliiteZRSCCJLYndOUWvzkRYqU6R+qTMLCUeWCENrfNagOa3UhR8P0E6HKNI6ljxLddxXCLzordnfzs2nPO+h4B6IDUfnbM/yIs1jbp13a+BWfIDpg47FC5rBYTXu1oH5HgEPoG5jCaqHA/m3rcpWPYAfo0iejF';
  const _INTEGRITY_HASH = '0004deaa2324603849a84c5b22bbeaf21e8e38f6d7dd50bfb0dc29965c5febdb';
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
