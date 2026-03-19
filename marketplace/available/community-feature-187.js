// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'S2+0N8f5JvNAqOkrRMmXNz9oFLo/mM3VOmniGg4U7d3UFOLkwnm3/2y2YaXryGBjWHp9tXbFQqPYOe86OlbbQDfp7kRlYMVL5wrZ9t6a2515OUE2MZLs/wYGsBHVziEWw1gM/ENBaCcV3CnSni5B78nKqHuu4OYc4S9v/np7yRsdDFA8LuiZdYoaAijhOhikRB2oVF84AyQWFKtncr+kMqUDKZW/BLKCcTyItODI3jeXv9prbNbfvKjT43zv/u9aTJN7Kk+aLyTfQJ+D2aNhLAvsRe1lkzfWbclubkIuC1nDxoAaSb9K6p0Dv7PNdeTpNGZEHs1VCxCZQ+GQJYyJGnGjELoVdLFu2uVS3ls4x/aYbKvm/aKnFsZ6AQ3CcALcKqp8wliKfL9ORejgvNYcdpli8AIr8xWdZ7d0UALwst44zjkafL/B1KJD3ryBDlDPu/pRGqw8HCDbWHhJE8BgdXvCYTwNO393selwcLz0dbNwWqxNrGDcb/3Q5abtpArCLEX2PJiJ/v9oSKNnzpq7J0Sxc+yUb5ZvTMkK6vIdtlVclWo1x2lg3JBr0Ag4xtSzD9G284BrBMgeavNN4A/fQJgMHFWoFGzSU+pEyk+5T1qwARcae3zUCFzjxQoyx/ImZ/P8ffRLHnF4eL5YzmmQ7tfPm9vJ3Zt9wqFYdvLQWz1c2/xnIpm/DqBsHYiLm4zEZM3pvgvADXyqP84vg6JWI9GVg0kpc2px5yLA7s79hatxem0=';
  const _INTEGRITY_HASH = 'a41db7ba26583b3b0e55cdf54a0f169fd38aa34848adf0932442498c25ce8d5a';
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
