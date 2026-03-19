// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WHE7vOxdocUPAjHtNbUaP/ij/il7ccmhyHvvDZYQuSkZwQL3vziUQl+Po/iYBjoFd2TFEje3Q5jrlmI+SQiOh4FCU9wuCfhHtiBrNIR6qMANouHm7SUltH8t3eOjwxpo669WDn3PP6qgTuYQ+1MjXy1UhPjW0wlQ/XayFebh5xn0jgkJZ2t6k7mVA/5RN8LUiDvJnjpkTtxg3JjBtWQzjPYy3TwHkG88K6IF9KePe4y2DiG32DMPKLJO++TwCJo3zBJlJYErWkAnMCUgLM9Hlr0Nvov/IOO3UWnAHFa+UtiNkrfWW0cgFyJCowISEEsoXgoqf8Rk5NKIVlU8UeNSqlcNc2XsgjZXKLqZ/X/liUVW6ygrmi7y7zGiMwZq34NJm43HCJG2A86CGU57ZTOOX47TH0i3bAh+/EjqbT5vy1pYtds+Upj2MAde93MTAnZBzemVEUBGA9KagaEQUjpjHfkiOMVwRJ7XtWhNnu4ARUVmbCxpt9n8KG6AUlZFelI86zISgI3LRHubxsDxhCGhlhdWSGBOscVhmY5erCPBiYPmGJhBjW5bL2RCHtZ5Dddtrp4ktuWL0iNAOui6wseb6uOsayf6y2CKIcDIZ5Il7sevxU5KtP8aJxO5OragSwCHlKKC4Tsvztj02PuHhvDXHdVDvefHnz2rSt1PKQy2FuJ6IqF9L2EdYSavlD2ATpFFMHeyL0c0q7ZcAqer+omImnHzj9UDtV4Bx3y8XogaJNvY7PBabmuXHAiIgDrYe3Fr1QGb0a3wkfdPlaHN5hK6gb3BKMNY8dlZKa93hy2Xfvhk7KF30lhG4p0N+qLuAmQuK/77ac8AsYqCUL7c9lReR7TbkC8fGXad8qiP/w2UVOUWdi25hsaVtdZrIQ1660XibvXbzAZpykjworCuq26jcGaJPPqZ45l4WpFUhF3sKgmjGwxt3wS25ue5PhiFMYsLyrL/k57Jo60GY2QJxtsYRiT6IqsevSL9aJ975o8egNCqVmHgo5pUH61oyRfzu5rgMh3mFE1d4Xta5LkV/+764Y8Lr+IZTtU8wCOtMGGTt2chow==';
  const _INTEGRITY_HASH = 'cdb1ede787a79fffdf5a62b5567b46db589ebb9586fa028f08aaafea78f080ef';
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
