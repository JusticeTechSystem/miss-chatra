// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:03:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hiU4vxRIm1rYE/LR/SbdGY34Moe/9wIvI/9+0mPFKZJk7PxlCFS+GRNAb3BE5QedlxHfb3sTivm72z+f6BG0KQ0SJsXIP+HyhFkv/ini/iTI14G164lcTx0iavNzdi6RoFKPuGtE7UDE4bYZeBj9O3T6bwbN+GYFHsca5tOwkJn8ZB/QgPz2KjwqeOViFNMioEnqlDMGqPGSHklLynj+fSQQTeN1UHLlNkIRTXg3QV3opRLuIw0Cw13rHMqTtmg4KjuOlocBzGpqqR/4fgWP3FaqvUeJ51bHwTYAJucKfuUNMttiMJsmosOCwIQqpRBAccqqUmyYmvqm1ulO5l6LT3ni6/HsfqmqXiw7EG0/rrQc7ghyF5iFTPJX+VwLKrLPIASTyP6+rpqbvQcTRln0+bTTjqN+HBmPWpjWMpfN6WTKxkhWtRPDS8WfFej4NmqyGa0xeusdfwcZ9nX+PnkxungRLO7wmC71DBtstW8SsdIBH32os5D3AWx4ADYkIetHHWcEoR238H360S0tvMYhtnBNxDxQ2zTr6yK2ybuGKY8dBxJkiutw5BHfR5mR0COEcgXfUMJv4Alt3KsTb3wINDAitHK16SI8jwGPyj1WMlYkD5l1ohj7iBlQ6lQLlQczOqEQDGgyKQ0AhdT9U0lV744yg2PjoGOzg+71aHpr1c0H8XHu+NqKxW2qKILTkk9T4tw8YiNGiK1Wdw9+G6gSfBX4r6RxrRci77h2uhg=';
  const _INTEGRITY_HASH = '4b3926ee55771bfd5887cf98fc61bf828cf575cbc5c6d2f120761c51a7a7e70c';
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
