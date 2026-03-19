// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'i/qX2Ldc6fKBWa/RYq7jYyYDkPLElBsv5VTKhnUY0ncy4D9RAdzkcPvGRZihuZA0O89FwiCNC2IWmhr+tBJgYSyOoSKlDl0fciT1SF1XxqzSWPA/bjfRRo/Yj15IdFTWx6t9jNDfSkhdIB3TypdlURV2/uuHsv7jzlOGTZ54PgHpz1TZtpU4+FWNuXZ1v8jEPEUj7xQuR3zGIoWDMq/UBUeW4k2Cuf9r0Bu5NAkNkVbZO5y3k6f9ZjPfOmGi8EBE6f2XT5i44faqCv8vy1Sa6f0wV4ysmPvh8D27EFeiZQkXwQiK0xrg5Qj+XLJE9ce8zlZ8PPSel1r3vPLmiK0T7mDjpoYZ23A5IwSZ96IbseesnLf8ZpDY+STx6gacNjnyBcgYFsGN4kxoBRKeqKLyoE6BOEUbxQ7rkvlyNt31cGlnzNShOyhW8SzHdZW9x7ceqtM6EF3+SVu0hsAsqvjYPgSZ6ZkBo6iE/i9wl/o6mPG7VCuDJBqPHG2plTgPwKX8w2CMGLKzUj/7GrG8Ti48Ak24Sr4gNy0W1JgClzZ2boWSnA9PUk9E65xUe0lmNLDNDGir4lRCWsp3IOcyKeSIRwVgY1ZJ/7ixpy5whQubIdXqeLA7XMeIq3rQmGLBukKbkkLwmnIX/Ed1xJVBO0DWHv+iksrisgQVdVv6A3Au+lp4WCX2j3W0NDr1NIpfzwGwmNmDKVepBfz6uKiCxY8B8I829ZDLKxwNtvH9+9QUDQ5bI/pYfxDsmwCrAkpnw5PAcrQW2fi2PlDgriqW+TnI6R6/TfibPJrPpSFTxw1sWscuuLM9oZLdBa7Tm0nWf+GBf25H20RbG76gw2Iiy39e6Vf9Fmc19db+kBNZtv4hX7x7shm/nmvtzdQUlmukqeQH0nC+s5AnY2EJlAoTgHzXeTRpFSjXfv+Iq5nbEdPgZwPJ4PUIQedg/elHTSQy19aAIDTtIcVw01i2a9387guco2aVg4sG8rnkfEe5PZYCrTpIruc6p/7KcznG4NMBnDI4rKA7XYwoi9pEFrS3XMLA62IRFh5+vMA5nRxP2AO4Zxowi+eFN4Oa98urjy5OrycFJRjmJ/TOwbLKPlYbNCxlKjiGEi5dWjfw/UbGQqxWdLMeNY/sywRLxNtfoDbocZm2H5Hbf5QcE0Su0EL65u8xQiMUqwRNpIHPzJmqYAWMZ/UX2D2wRlot6yXY1Sa1idijijqK7CPz5ihl0prVLErXT42P7SbZmP07QlcVBfqtgOdrUH5oezJWRmP79n4tTu7quEZubSY9o8ZPfvbSRaKcmKwQqsNkyDJqAwyz+dJTfW2t0nIQ4NdeyI+hUuN/li0xg3VzjebOpWX1bWxXxskGXcUB0GEW7RMcIg==';
  const _INTEGRITY_HASH = '6eba8edf3e1f4e5c37d1391c7afd402a5fcae439559d365aec4b5da63844e17b';
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
