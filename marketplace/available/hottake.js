// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'APcsESQXwAAfr7NaB/qY5LlJP9Aw6OnqiBlUWQHg91ayuBrsTpQB4HadBfTFkA8joPlpklg0mR+LPL0APt7Bfg6ucDIVU7/kNIM70GCTZXa7hlZ3HIyDMviB/NKjQ/+4N8rZVyhbGcfnrvYrmZM2lBkoAp5RX2Hh3kQfQUoUS1DsZRFKRN2Z3MRIpltX1mcH5LCQjyS7aZCKrBX0aF7nr7BjP79uVP+zIKN3SrrKKR996wGY9UQsvpcnyaNVizqTgLaoxiq95vQSy6wDA7rMslpdFDiCy2vIqvmrtwQ3T5TVlmsbcqW8El1o6WtpUNuAgUc/QWWYdRFUFyiwE5dnXM03kw1sbSGM7V7aIj152TfSuoKGFHTQfPuYqjJ44K29UHY0B07OO7LsVMyWICoY2wWmROTqXUPPXw3wFFUXPQdYqoOYINF0pomcLBYXQWhb9mi1PoATZsSGTQqG4ctdf9gCHfVQYOx2EdePn0pOKMToSLJsWXnFhraYW3gqEpI0hpzdAjy6S3HrzGxx3cPwEPVYABtT9UkxZaE/ap3U85B6YNBYWKVLlYLq8yooVBLkt8guAY4O1qNlcC9xtemmXjid/y1p30arbg/UAxZTt7qLcPbkUk7K/dIkWEq2ZvCDPJDmAlwhf/yDw6FZS0Hw9bC0e9rJjxkChAnp8JT4DYXasvPunWAlMiVrATGtxhc94EkT/o/Sm9s8wU6+OQYXg/i2B9ZRx/Cm7Zg8yjZauBn6KXihUw9EliD8AZS9dPP9AWuiPZleLjZQnq2CpM3zNYmwVAS1N7/gSJzcYikJNEuffhGromJKrPM7PhzqpZqZC0PErSIHUakhxQlQLS8rwHpwsu1dqUsNVHDTTYlfbaS7Z41cdX+FkaZo1taJy9d+lytn3EVC/oKGoUohGL1HO4Z/xatt143kRcIQQYs+H6dZ+L/7QSEm+t+AL3PepNZRb64K6mCgen8h7xthbAP/wCfKBhelNOD5ui9M7vos9+8Zwakags0swYjwyqMwzO4VKnByp0II/dWo9GGj0WucAfkqxCKuc5fr28HgeBmYrSktwi8nJT6cBGY6jxf3THn9p7ImMfmeOcyYkpvk1gGBraweZWNDsXUtEJHbNULkfimf2MxOEz9M3Rku32mjXJ99Knybn72eDqzsK4ZGoPZ7fcBmF4XxLOyDfKT+pa7Rc4kJz8SdwD2FGgIqn+n1z1j2r4g=';
  const _INTEGRITY_HASH = 'eacc67a89bc09bdac6b0f7008c40d987dfae010439044ce8ecb1a0d3eec1e279';
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
