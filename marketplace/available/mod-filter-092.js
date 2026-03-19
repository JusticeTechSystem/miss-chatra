// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Z9Z0O3eVCyntaRKiIG3KU6PRCWbKjjTr5umkl0CLr6qNJ+ayj3dLzwqCJA1S5I04godYUR5gsvXffM0w557Lz6KoHYInaknVo+Qf4keBOBOyWhvHlCsfM6LBXOXdUP/PUl1X9uubeBXwiGmN8h1ExpMYKsF0M4Kx14HVOVhw3I67Bl6OIYPn5YY29rRQuzcnqAiYugJwe4Ov6xxkhWheRWxmnm7az1cjA/faK0Llq/pN0eLoLTbNQWZhTMSQVGD81hQDxnMvPTAX9yuv9Rss69tFg8VFwd18b9qSL/lzYk2584aeGajTvWD9lpJFVNKrr1d57UaHzFVCKJJAhu1bB1P5LvZAGHojw20oF2/serseWpilloSZbRtZt8la2ur6ku5+zFlKUsAqRzzGeYc4DHLdi7PBFH8fWoajnWeM8bW1368Ml8KMnlS8JzOZgNEEfqEYLa9Px4gFhs6Eiy9UW9AFve+mGUBoLx+MvE2tXKdJYRqx7n4cYh2eYN/MQ0Xs0m1buCaErmez2JmIBtjpodvq8hl2IGNijCjI5Bp0GmUCJ40TIlQZXB+PgMRF9ossJzx2CMolS2WFmmJrz3K6SCJ199gLcqdX1gw2QbXNnHeL0ZrN3kRUqz7UtE2KZnMiQxE9gy+DwQeQO5RBQfPHuIQkXVe/hboE0w2lls3OB07Ru1JN3SNg8eqDtqF5hvvZ55XpVb4Rz5ibB4h5KytKc3wmndpiHiW6MphVr/zNM5UFKoj3eGl+gsx7pJ+BfhqG9jeNCa1v2C8rU60sUeNKsdn5zShKmnhZp5idbZ4ro8SCx/eMTwKOhV0HLXpze8PEFdoHTnC/vjVzB7NjW8YijdM9iGXIQyqVvpzJZZcFhtPCThmqJBPTZlLT05L9n/foQH0PIQeEhwQjzwfNkwtPrVthPmw66bY20zzgj8iBfSuLyojfraMZ6ObV2pX4XU030yQw/ItJPVJAgYAu6Oc5RxtoG9oBf2cCJlOwLSXS+2hZb7WaYMJGX1rVNs5ijLGqei9lIYCnlwudTXSFx9bNNC3aIzDdrkxQKSS/9AjARdNVmTJctqBnREbzlW7TCDSUjhWb9DXIExWL3Tw/SOJgxuOg176tXEn0UaPhHsNAHSXSWkRd4Wg3rPWELklOgcMoWSdYg3kMx5aokjIC06Uac8+BtdgXZVNlVlEyNY9iEj+ZjVJYTwXxAFd3HYow5ntA7zK3f5wOdO0ZOShWXQt6xfr5A0eKELN5xbCP3hPyAFhjUBAiffu3YtjHyRtRjziEwuEXn++jlu8gnkeRIjB/uAdGGWsQXQ37PGvIvm4aU92oj3LFT09OjYZapMiW7J5CsPl9iCk/hNc34ymQcqF0qiLpNrw4+WCPPw8r2LhnR57qv3Y=';
  const _INTEGRITY_HASH = '5c22ff244536184be109961d575d1d16db31cae28cf7998dc982849fa85d64cc';
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
