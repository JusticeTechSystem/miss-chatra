// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'N1fGyYa41n/KiBjaTTbbR+MIDkdEdDJYhGSudxDcYnY+hfLjW8dq7CNGMqZ9TFVZsQWWr9SfPzzvmXNI7IazVy2MGnwoPvRsavoWgPQ4MSmBhJoD5IGLVCLZ+uEKmsb3O2Zo7VU0ayLtf/68qtg5enN48Ejhe8LnJkP4e/B9OhifkfpmNMNrCnR6gF8HxhyM4EXK5MnHSjrEkSKjeVKzGogXA1v8kP7MwuqB8JvUtDdANoq3jfQ6IAOnw1ELuwiPcQxA6eYq4sx4S3v6gQlsfLk1VSSbl+nJchyxmNBKuv4ELjzrOVvEY4rCZeL9VQ3c+OD9OQQmmrK8GGcv5/wHyfbilLhKAiH4M28D2GpP0pqRiesVmzB7tx9J/9xoCuDuM5U7L0N9W6iVOZHEnj2PvitHudaWqwyZvzNp73mv2CBkGfywQCmeIT/vNCv5T2Lf80vZBb7WEsSrux+j1dXpiWN3L0heCqBCvt2zplEpSYXiAHOOfxkfi2TiSoI4VWpQpd8DSi5tApGURllsWo8sPRjluOslz8t6QkiJK1L8BJygRoqmqQ78Cu+luvC8cGbqxRFJVUU0Malo2dggIskreXeJk4muErYsYq0DMx9WCLDR47sgUwr7rK5ir1CDi5WSmfSy2HMe1TW/aYNnfFcyup9oZMzFnX7GvODHKDrwe6qFyK8EtsJYNbUK46W/VL04ZFvdTy1iXS2FfPi8bJ5ItBx4Lvlb1KNqOwedzsq8ZxOVO6dWyCaBeQu49ZeO6Yvakl5B9mUOSDp9yQ0pITKSdnSNydw/JCbe/9zWiTcT0HrpUh5SyIp61FfsepVrzoAncomMXKeTZrUgSXm0TT9dbHHeYMoJEiNoaYsYjyd0sA216uCJZgUxWn+8wiR/LPjs7BQ0WTO7ytmqt/s6e18YrSjknfGkC+kufhCMT4sYv5/fqo1ykEiDHBSKnL0fHpI6kK5czJLFkpDYkBhitf6zbvSwbe4bM6riUtQ1YSugEJWOWhm4rS0wJZMYc5kgVt7zYTkpnTwkXrOn0rXhLKgSSDAuqna0oo9L+X3ofMyefOu8Ey/FKKpHTjickP5rb2CBTvzpIgNkekuv20ymaS2Wub9lpEsB9iSAXyBCWpfxAejEPCCXlvm32ahSEHj7/mmrppqGG1jJaKOdXCojFSlHinMIzM/ixdceP/NJJ6GSFw+z1OsPeNQj+xvnUVBBXOtCQxjvSQu6ebqLeGCFp3y1OF/2w9yWcCsBHYsIOzG+QwQPw01N1iPmEURbqHabubiUaZvfIgEvm4BcoAdaPVSZOYVVpOopF0mkkQOkYpoX0CbLw6DsVufqJS0nX4xgfj02gppmfPKNQ8Tr4iQoHnrCTg2+5G8Tn4AZzICWHbSKakuW4yIpwPlIlA==';
  const _INTEGRITY_HASH = '49870555b221d075037fe68913ad007cdcd1c93ea518603bcd7daeb2a1340850';
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
