// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Jo40RB/VXPaik091iUaR9Sg+U31TnonvYd1VsM3XLxUEWn3giDk1R3d4FYxmo/vUFP8LmE9ZDMXdIlmPs+vEaJoMTru/YyjGrqu5n4Hee0f74lglqjCswkxjzwf7KIHSZ9oMSm+gNsnsD+yFxgaUQY2dMpdWknd9sJ4Y3gFC+m6Z/O2pgoeGCciHzFR1EFulvC65MylpFT4u7GY1GZrIP5DbEgRynaw6XabJPorCv5KzI02biOcDvBHnkETxEGL2tSB7S6LecNwenkH3VztyYSwg6fIR3Rbj4FogobdMskJqD84tky3oKHRaObUoBJO9O28SckU48E3ee1Efav0hp4U2TrLFF8vx2QsAGfLDL2grTkeYj+dyG9cwBqWmg0KT/aDX882JGrQOjOKzdB/95H2U3kZMu+DzJqz/o5HE8hRafiL47rTQtFKyFlqCBxT8g40XItuUddmIaGhHiKsDvLm32rs5AL+E5OriYzuxeBK+BxEfFWBKyhWbkVyvN+tNwQFQ9cWr5Y2GxIZc47J71kvsAxca1/mD0OHFseYQ57V0Js66ZR8MSGzZyu7RLfYvY39Pk0Eo5t/kAnD4kBzub3Kv5UX482IsGXeAEZTzNI3FBL7CDCtTcIbg0CDh+8r5SaLqF3GYFsxlu8wcRxRomCQtfF6E0U56dot9z2oa9zmBasopD38k1NUqUoHpZern/WGqu3eH5e+VScnQseKhlOUTAwcbs2emw5VRlGmLohYaCB+TU0idhbZNT7F5So+lQkNu7ytGjvKkVxM3QVWj4mIDJP3K+QqQQDtfwQpAKGUk4NLV5fS4SuXfkD05X+plqwUBX4XwKIBsH9uQXQf9U/HI5OhUg+g3QeliP0VnxHMe1MaVFhbvZMbQt5uPi26CQm35OFmfAGrDTcf5DPnZtApulbUw3FkpJCijwl85PyP2jPzsYiFeunrfWzao9DpODCoG10YV9MMAIwcBq9wClzf9lFhtFYH56afSwuhP2egtKWf+OrgeHpZIq4JUozQvNSlZxMsLF5+f7rurXYdqsphkW79RYcU5CtbmYaz+Au9TZsGlUjJlb/ACrnCVhuA1KqX+QTL0iQjXw7Q+Y4x5X5BxEwsP/DG58fX6qsyIq6Tug+F6SdAmj1Tx2L1o5pWH//GYg4TRl3lMCK3Ou/dNr7RkiTGinHFBFZszw39lJKkil+DTERXgoSVrnqHhdV9lu2kiZW1RhL2z3S0QukfHUra8cEH5NzlMCC0nnrjAsUO1TOdx4WX7V1I4wlJXSS9KFGbx2V8yuA6TTry1bwvdni0I0Z1nOWRjYtt0wd8tg7NMMOP6Qecl8p7NW37+YAxkspgGLDc=';
  const _INTEGRITY_HASH = '0b64d31679651dba560016b946d35ee789b1ed008e3828aa677d82a2f212785a';
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
