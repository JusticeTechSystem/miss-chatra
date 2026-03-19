// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bwVV+jH9oSB6Fcc06BWCvMU+fnA3JiRKsnp2nO/+9VUlbLfhwl0cJ9aM3aKLbooBa+IbUlJI4weTGveRkjtETanSqoG4Kl2Ogo2+mgxLViqBoDmmUbo0DvO3xNpnf1hZTnzxgWjhuBr4cqEO1bRyZZkLntZUd1gSIEXIUFqOoqncpxBAKrQca63cpxyPxo1pfu/jJb8LxeTpqL1X/EW4MAyDNAMZchXIi+jVIXq5UNepOfaaGVNshltqE5XvbVCzmd8km9qFhbzALpatCx3PPMxf1cTbAigp/p1lz/sJwHokh+zJ5bWamGVxGu+Uf+0PMei93NJiFfdRKPN2fw+xqYYx/+04xG/ZqYDakPIQrPqOgzlL/VV0E0FdvuwsMuLEbXs1hzB4p9XOBntxdQFLlKborvC5KCo9aIx83goykZD1MNN91Bt8axI3Q6lq6+klWUIhqM+TkKqx4qd0AccWk+KTqgP4362io0WqXTZhVfNjcNEymNrPbLraRRx8WcdW0c4TV5vvl+5xYPcFjc+VjnXyulN1hA7NvrQhZ6pZbuX3EZAbrZLyRCtTikAU8FrwvRAp4lA5sfRgbtnHFYAUPX/fQQrkaDGuzMkdlOOgymqplZvC95dOM/T+eK6EMT8ZUG3P6tGPM32yxFA8MlRsIqjQADDMcr98u7e0nt0hrYBtRkEL9FeVO2tcjjjmZGKDNvjHFPwTH37JDAgIzYywJVt4HPxDLzrXzvitjHZJmbnf0RJ13Ke6I7HeJH980FI1ecGvU1pvNu/ExXZdm5exgpQd9RUMMSPKI6ccze5pDsGhR5EgWzdqzNMiRR2r7ULaIw7RSHdB04TqbFvzMrrSXFNdaF2DgoBRbRG6Tsx3OAJcij/wd/tqfwF3ZFbIdTzFkiwpW0ywPtIjm0PXVHwS4liyMVs5FYqWXdgiYJQCS/HYhl0zZkceiO6SKjgt7CKBwu1wYnTsHAuVsWLe7YFGwOymJ0fSCy4VZdJn2IlDdBFp3Z8tRBTkxNvY3kj/hX9ngc4Eu2TwYXI4jXeeaPWQvNQ1VKui9w==';
  const _INTEGRITY_HASH = 'a8916200285e4deefdfd84cefca64faba88c1af743109df38f8a713449991f22';
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
