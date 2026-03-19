// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Ijd9esKlUp+vnT5eizw38IFR/IdB3Sild8RtUK+QJm11QqmzBEOuF5qrqNHMSZgahIxqYI20J71dyYPtGs9PxjFlFFqKNF8eJrlHT8GiOrofbfPvO327Ey5WB+PnOj/hK0/TC+arJOQMh9nzOw88Irh1amwT9OLUlgj4b32Cp1JHQjC7WuVLYJPSKYQvKCz+dQz+Zn2ECQgUOs5ZQz9NVFNIh2LR73+3V18Kkm6alyhRdCAUKGFY4aD2DVxF+A8xiYZ5T2LVJdQVH4RoBi8m1G088z52hmIGk5MiCuA4KG6Yf1ro7ogtcDDz65speZfAr026QsJSVWx7iWYqDMcpH0tt0tGVmRa1NVyQ1/n3k6wPWq7Kv0DPhfY0VcSC6kaxViYVG/4nZikxnUBoeUwrk2eAiPUXyoWPt8KFHjYn2Jpn+hEnXnq56IO2/PnB3Qm7NlNDZnot9l7HMlwKBGQN3meVG9uOUrLDyv8w8vOJwuzogVZ50veHmm9av4h6iYOcd86qKT7Dl7+iZDxERLZCjT1M6griVlF21taKr/ggnbWT9kWPwbeTdjavkGp7eo+w9XgrAbjqkzQalQTl7C/geqXMdbfewfulOZyH5SaecX/LvlFhRl0kqwg96YY5JVE/0vON1U5FzqWLo9qS1lETS7IAlMpWsjB8JOP6fhYclsv7junC0q5QQEj6TeXvmscHiGTsVyItuHtKy+HwXK0bw0xUn6MxT7w2muxHrHYPnPebTiebL5c=';
  const _INTEGRITY_HASH = '0f56782b2174880288284bbda7845514bb3c5f9c1951fed130ca7bc7f802e654';
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
