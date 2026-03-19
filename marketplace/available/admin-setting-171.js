// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6jd25EjMKpotYE2w+ui+AiO+qShY0fPSdlm1oYtET2ooEhfN+LP2nZhfhj6ToI25xKvLKCafxQQSmcauDDJfG4AY3SRxrlw8s3e5VKVjAfz6F97ynSmOZuQ1B7VE+LnoVR9+HoWGrBRgCelfsVoQYpc1fWKvOKiX1pX/seWs6SleEYCoq7qvxBnWMNyfCBtq90rmoAeyy7TfE0YUb95GxWR4KeDGlsoolYTLS1B9PsZBxnt/+MDetM+IXJ3rQIuAbldXbkp420ebvtJDy6oQjsm6KWRXzyzJkouPC3nyJJobqovmiVonUOGKJFiN1TeaII2HM5APrnXzGJ8sn/W1R0dw3ZcGrSTOW2HCuNZQMxbFECey3CnV1xbwU7tDf30h3+vBzUSY6mZdcotqpnEbx6TdUdhQEhLlblFuvvT4x1jFUHb4o5je3VKdFa3aqmI6ptSeXd5aXEG5fBUon0fFCY5S9lpBH28HhDZFjeAnmoYxLajzL9ubGN0BLXuWXpOClJDnHGnmUaIwNgbUa8T6QLxXu77UavyBLayZ3glpeoT65mvuwsM8w5B6cqV5RvZwBmWrH/8x0ixKQPiPq6TsnPiB0DenQ04HgalVHDGgcQUVxH7CWFbw3bpXFddC6cpMklz00A4JEy10BZZOlJ1HYamcTyAsK/lI7dMCYLDA6WrVoWea2sdm1tfYO2xtWFc7s/Cs5RbT+taDoP60UqoB+RdQ6BFYEmz3Fjkoeh/BDfKB1XjGibvfVBUwBH7/J1Jcd/hWzoBvY1S30fx6HhqBwd6/Xc+tdohzO2QJxu7vid/6H0xgBDrxXb/QIPddUE0/CYRuFSpwInEgxn0ptTw0VSR+JzJ3TAAKBphj8QlU2OZlm6XSrrEHHEtvqEAnAQ5eJw6MoNdafU9Nyb1AbpEM8ssvjRHgbdnYIy0nqNQSpPEVrvhQbJwJIKBZWchDDoazyaHkCHLAUGmGGf3pqyBR71dYjz97eTtre76g5DliPj9r6ZRAX71idNypAbyosyJlskeaUISpxJQ=';
  const _INTEGRITY_HASH = '14f49c417339ec78fc46bc9e8841f3fd1c2a8e4f1078b328a2bc2b1b96b67fe3';
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
