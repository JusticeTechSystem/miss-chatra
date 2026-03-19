// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XQIEAvGuXHBNcisDOC1AteAGyjGAhrAySYiMqczyto2oeG2XK8DWsWy210B/gnfs9dSN9DFLMTM0pXswkrOr6T0I/iG9Mr1ezxMNOFbj4Y+pzsw+FIDIzyhXwCK8SgygNnCiwY145xy2+agXP7ULcDI8DU5pNGJLpI7W1u0rToZS6s3gs1qiwDUG4jk/MbPB9+c2m7OBNB04S6u0CK30aUlQ4o99GaeUQKscZCvjcNNVVlqg69rzf96UcMc6FssA5Rk7rw6ys2itreBKjzBmnZ0nuTluUlxLwDH/T+KRl/A4Jt9C2bQM+K4CtZF16wdKauAbZ0+e6XPcpHIHpe2EWiZlsaIW4ffr0KtErmipGC4I9qTNEfPFI2/klvo4k9G05qAihed/HnYquJASqTTiHVWfTA2HZLnGKV39B8p5bVZJNl7HiyKEtVkykypmoUjUx+yiuMqyWm9lwsUMA0+KUtIvlcBd6oE/6t9pQEoBDNk+VTK+UB6OiHbYsyUHu5g+tsBXkCS3XxQ85UkcZ0mTnt61lQLSYcJTSFL6B27x4FXvv9YRLWbqhwnvPa5G+/aNL5J5yS192w3p5B7TE9wEpL86FlZaPsCN8Nyi1+YrFhxMdzwB9aYmImk/bYxUWVYjf0+nEJ0wxK6Qi/Ni+oddtyqm0KifGiafHkY1PIiALV8p3x1CIXbhhHSq13pE+KABbj1ldytPIXFsUOtYybHCcaxpqgo6s16gAF8iPxdP1QVd5GbtK0RwxDIqSlyY39wEx0kKgHATCsLv8DZBQWgFH/T52V8AoOh4Zm8gCcN6/O390wZgKmQdhVjOnIi8CzOR25J+yGX34eUVBCS2kAMEJxNaw02egoc/yFPxvmoEj3rkXnifDYgnEoDzuxL442KjX3bFvX558tqfHRLSQ8ed9TsLZhrLxW4fDo3QFl1ODT1/1rmxoh5tzrX+F/UJSC+8f6rtYB+t7UW7cMZja4jmaGIaTjNcSUKEc5lp/UuVUtfBLaxZIQIwTUyws3n571uFepSMww==';
  const _INTEGRITY_HASH = 'eab409bccdbb4c79494c34a705fc08eeafc2948d6d9c15feb7b1cde82f8d8837';
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
