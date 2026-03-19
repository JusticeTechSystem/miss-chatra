// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oh+fhJFsuK7wiXSKfwE9HMZRS0qgs77Xr2/crCAzb0nqYqbvVK7cPxxWQ+B/1iJcNWDId6LuvumBjEitYiMe9xRMBvkRI1pLVaCHlRYIuqucUWBt7Vy3Bq4QG2Q4nS+IzrFbiP0yXH4QRR3loHFbemXv7qSiSfba0JEj8OEzgz+8MyhHSax2g8qDWurLFrVFj4iCc/bZLmtvXoIAHhdlw6uf4KFmDbRLB+PZ2um6y4+JFou6Pd3f20wyxvcRSRwgzPwkH140KbSrocZqBCG4nVGB9CyuUNZHKYzj9Xdxy18bctLlNLmjKqx9GqGUEEsABp6NQMsSZFSGO8FAFkhII/jK0NcYmBUJaYpwR18xLslfcQOXm1Ihvkb43mlTE7GBKQPhucMTXtwBeumKPdCUUm7LWUI73TOsi45ZvVa1s/eWrhTfbb9NNtvvHJktT+Qp+pjiENgequ6z6kCDQNtaFfJZxorADWb+cf6gxYszx7XHevq+SiijG3WbI1IH6JIFrZldqEVPBDZuBwsAUsYHnfR2q/2YMwXtJsWVFqPiUGM3Vp35lRFAtAyQ4g7sCxRdlrqFg9QuDcr6UIvpPClsp9zTyXIVsqdpucnlUfUp4Nld5utRL6f26gxs2W8PmQ3o7y99aaAm89lhukWbRSN+VMgVlsOBtRT++LrwNHxjPF1qHoAjMvbyhdiSLWtxkERSYLgF8RQTV5Orlhi9DvRhdoXDr19KsjyNoVghd5m9YsK+SqWBTCH2evpgm94sxIg5R6IS1T+w27I8cFQSHp475zTL/g93h+L/1wBUCFAd326Lc7hW0LMyIyymPTWNvYKiGemfY+e3aiXKHfS9UqHb0ncsUPhjqVH7H2HS+tUGm1hUHnxARRLP+E7riHmx1v3rXIRHGG/8k5loUuVD7T5FR6RAyQAzxJZFLJxGmXDQ6+ltIjQoi0XjaZ43Zd8+SBFH1u/D/mID+G17n9ToeROBKXv/oyTiWXH0eQz1tESn46vf5hiAGwJoRH9DiM6jZm8FHLDz8u707yeFRgmzjLpaiCLRUVyQtYgI0z42V9+JZkJ3QOr2nwJWlzhPmH8X+VxKA6MTptRiFGuRvpWcNuKa8d/7zDGmz8Tg4LzcJIWT0hUhgavvoE4sEH5jBBWI62aG6U0Wl3e0g6wIyjjONythkDGKVFnRUdiAvnnE47DmWnqy115Liq6EshxiisaYEMx6YePDbOYO';
  const _INTEGRITY_HASH = '1b80a94a1174d4fbefb100c5d2c6073efed839000cc532ff164ecbfff35d1256';
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
