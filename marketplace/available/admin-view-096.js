// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JnDOtZVdIYFUC09NnsJ/noiXLZcYZuANGO3yCG3G1DG9KBnwUmpjbj1TkfGT5y+MvNbTuw6U6hrAqWnCOEsRS+FE+RfGs3WVtCBoLMYsxsry0Y+rZyAzI+A18whWiV4WcwaVq/NImfaYktVrmhyZdyZZZ6mdhZLx6yJPfn3MxTkiqW0byvNwXceNCWn12FJRJHrI4o/TkJrjE2JlaLcAoxtVgNYcYxqhqXIqHsTL/i6s/bc05/3+KX9P0E1KQpMN4YDFxsCy6IUdswYbi05Wl7vLPp5C+Di87n/QWiXF38cHOVd7lhthXnCl2LOrAh8nKEm6SqhHMfZeidE6usK404aO7jKa7OT0Ei3L6TKNyeAR1roWYAhsyHpUa8GxByZspJd7mXSdHSxeve8OF8hj3qCFgALGiYN2q4fXnlavkMlPtrldw0/9U9i2471acYOjmoh4GTUZQfUP5iUICgu6AHJoyu4OjxVRhhljHSsXk3yWHxDH9Tw0KZ8lJMS+4iZIM6KI5kSAbnUfKohDZeM+xB87eIdemJo9JNNjeCsCCG09KVKCaBaNhhMKUoOYam0zg8Jg74nBrEE6C4+O7/XtBbYId965lihd3XtcNbGqoEePBBjikYsengTv9VT4eD6gdrhAs/HaoJ9pxHgPpj0vHLFSctT/OI7kxHY9Np/RQWI+cLjXJoHhNnIWLywdB1BrQigYozdNBFTLJpGmrtysx9WlvDYK/77MKWJCxnb3Y7cHCgiOJV/2TBh/0I/AkMiBarFMFkFOVnwEhovMIw40UNYTlhmNxQEzFY6CdH6QwTzWbUkw9tq+rVzufcXNmETclejcZxC5myvgPppOB0HBps3jPjeN/HJix/lMLK3/uNjsvkNrkBqIhLCiaBkvkBdmiOfUCzvkwQfhkz7K8HcfC1lgpWVdbXbdd2LrlZ5nyrBl+j+3uUaFtrxouZjJDYwFV63m86Sq99agy51CYRdr6ikzjohrxDeRflkofVwcbQ==';
  const _INTEGRITY_HASH = 'ef005e26d74dc4eb0021fa3c81faafbb2248f12f25f424ead83e24656866c1c8';
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
