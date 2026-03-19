// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xqJdTEue5IY311OKigdHkGOVDhwXyiMkCeQ20FUhJyPRl2BbUW1U+ovwHsGYAV7kac5mg1UI/oGJWAK4UKqHGaCgU+x6DpVQIMm6q2jgE37AGGtbRip9/IVoJwQyz1Z5djOWfGfrcecaXANh1pi5fm8VbKFVXmZzIE9w0KjiviO2mYmBdDpKY60VMKqvHw6pruoLdqxo1xYTZ0waTruPoB//CoSARAWu+fmHQcKO7J5WkMgsGmfHlHUHm5EtABsvbrFtB2US259BTHkDNDAAah7swfgcTkw7MZPGwFZJ9PhmCZYjAzWjGFqc22u2U9c04dN1Kea4eqF5a+kpXdopgbQYVfb6EsXHKQtxB5LzH8kq0Sud5pmL8o+1vLxG4wsWOvJOzZvnH/jdVyIkRvt3XkdNA3/0+/1dE/1FmIhY5RIZm3YRClmsYDorkjZQUo03OSS6JzIbqybcLKnWbPbNGxC5aND73TQm/JzCnsMJ1ls9hOGJabiCsOapqbX/c9iw4ZGlMmi1dQoSLvp8LoqcpDRstjnghZAWPsDj4UwiFrQ+a6PnOVrWc7PhechGBRH3YNtlRh+dIrzPIxJKhRn1MDJ6SbRpdog8+1zd3ksRTv1CO7MWD3Jw5kypz9nCHs/3kZ1p0L4hi8nuFGI46niVr9EjD8aEEhUMo0hTcec27EJMDaIUUk19lPSQoXAutkXfOWUer5mL6PyqvVl47oQHKa6a9I6qxHK/xOXb4zJq0tjxPYE=';
  const _INTEGRITY_HASH = 'd2fd9b6b3ea732de8e200c89b6ef690dfcfefa638387acd71e6cf69d4ba149aa';
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
