// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BAmY3jK3qJJl5bhSLbL4uKqLCu1cgnMoePDHhQlm8LSxG7a6sPHxn+sPJubnBztrHAtHVnoRoLedMnJDZmcnHT4O4gcR63nswIgkDeqEON0+wv0GdtHdONK04p15OPS1jRCuoNskpUtU9t+vnx0vnEEwnmehiQa0YDJSumxAy/mR+GySGAA3GzprxOeOEkoK9G/25IxNR8a6XPvzo6BkZTlgU4b+kkI65uKuHqKDqdcEk5mLirH4T3HTvFLqlaYzgMTFcTrfWiSaWrjKedD+US/txCzYieOt7/dwXOA7b92X+25CjjlQiuqE/9XezYeddpGZE0+tmxU+bweutjBK3jcCvnlQRNy1CZhey9Z7wrlsoORC7c1aQOVpxuggoku+iqH+JUwQHqwptWHmfqfG9zM+JEH/UZM8C9+YZ7c2GVX3KUSkOXjMhKe61wmhHXWixKO/qEbfWUB9A37tsPg1FTnboCJ+3bZiK4aHdRehw33hbY2fVIIFEkUgzGHhmyFQYBUvo5f4Qk5t4Plj6e29jn1scWXULfBoduLatYNroHtLXHcnO1rAwzrloUIWcqUxHPSXNkWaeyVo96CUbJ8vjhp12ximtI6Cgg9KZIc40YdPwG3s+UpVu4QQIH6dTOGB9VVHS1YtaGhyTp1h2m0nAKs6bJXt9B9owAt5yBt4E+5HeVyg6tV5W5pnY2KGXej97GB5KHe1RcyYzLZSA8qy9L+G8M0n7iTOjhXb1kqPmliOhIU026hNbDF/pQPbbF4Zt4KjsF2hdt2L3Ph2BKf4T6lc+TBsO2fWm895wP7R7LRpfw3+m7GhqWX+FhiF8ntK+pJivvoVvYEmrv46+CJHvuF/15g/yTuW5gMoLH3Becz5s0oXYmZOo+VYCfAJiPVreaPPOpvLgZaZmWpMcKogW7yiYbAXqffIJ5WPkJDbMw69PeAR4SRvgyPKbTJb0c0Fb0XngzfvG1Urf9pUYL8p5PIgNbOOzdl9Q5zOrTp1QyKrUoxlmK9EPUumwqZ89a5kxB20yEBXXXWnp/xMPBvoeM5O0n4AW9CFF+k2lLjh7F4tVrB9dib+CiFqMzPJFCzRQMRjwFMRxd83WCG0JAW9gxodSUjBdS9erTg0WPGrDxyTuyPMnoLl6npfXmVNDSWezmC2wMdNZ1Bm8ntxLOuJdoGTK9afcd1zzLJvaQwLpXqBi9Ru0RUU+TI9rLFmQirTxaQ+ORPPNRurffaAuvITS/TMV+VEkPwGWZQSWAO/hFOBRCm7KYVAnZp1ba714TYr/96wxaB/u6BC4ekeBUx0Cfb3pZmyzEHaFyJrzCvFSIuQb2SGciI+AiS/sc8+uTZFeNq4UeYoEooEmabHLmLr1aFwc4y6QBoX2cOy44bZI4PRbKOnE/JdRA==';
  const _INTEGRITY_HASH = '8831a321561aa17d1eff6600473d17694f4399e19652a449a11b884623d82ac1';
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
