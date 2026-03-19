// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8VneLrqqQsWC4ZN1tSgZoGYuTRQFH391u0UvmCXnan75cI1mjkDVIrUcVXNgL68FfLrXlMn8HlrSePDQG6SLLQ9JTBjfI3zJaW2PniEyUQlQhOzL7GWyY1o69BXigUJfT9sJmgGVQ4QHsfbAqin4Kqin1vu7cnrgR8jkda0CEfEFLUuwyTTUpdRnfhVfJePApJDWyG7x7u/s1CAbZr5koenSEG7NgBW9hF0PeAgfBVYEXWyFetVAL7TjhrLuD3RfPuuGH/fJ73KLOikZstVYY9uxH3xp1eLXr9B388XvbStNJBHzV0NU0YxHqowQ+GPDVNnuhC+J3i3H60ki5rzbxXvJACgF8BfVWzjiBBdXrcOjFwjmV26W42xTDDJCB+IVXYgGsPjipEnc5S5pPb4L3WmiAGOMAxRLsCAq/sHIy1z4f6ytpatssHaOKBFX2X7O7n2w788jpoSWgQDZwaRmkdnu8lMExZQht9g14d99XwUrcxVAB7w+i/mSOzbKMQpVYw5DZ/5M9P0m05L7jhBZFFcafnHdVMUH/+5y3F9IwyZtWQ4RyCjpylHPeTuB2+4xvSrOMqXB+X0/HNejNclUUPXLZKRAZ1sWwsfc';
  const _INTEGRITY_HASH = 'f28d339994bd0a7c949dd0f9a9b3b257e43a11a2e346210e650c277bf3c96a47';
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
