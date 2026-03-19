// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2nR5oDfZo8HpqKDkKAJLCzIdeftjWISHiVqJt0N+PYKEjwGcYB45z8MOp6we2NTgVxZ6lbR1I6SVRQuVpoPAZnpSkNPDJVZBD+THR2Z5t3Eqo9j69B5quUHOo73A+HH4TNZvASR9eHfeGCLy7GEBJfYYu1+gvZ4sTGEXOImnRgtBvypMI+7KrJ7351adjsqUJpKov7NRl/NmRrAbe9cj8ogy6pSpOhDeCVuwZ9jYlvslzKKdPTU5k0pEXgdwP9vfpg0wlWXqXMW3Qjojqz7l8IgHoCe8EM6czkuJYYuU9EKrNg3QZa3U3wMOnUwlQPRzh9dfqQ1FVVqUHb9JavQdnD1nTj3BJIFCJQVr7VzebFJ7EEn1oWVYwtx+g1oK/BeqvoJwF8Hlyoxwrai+OUVXM8l87oIT+5Ovs+gMWSNxVOC2TivZdD+m0YE3gImIPsXc/WmSnRIVK/ep9NIOob3vz8i2xYr+VzGj+N6ln8QHmzFeCWsp24iT1P+VFH2fcwUpO7DvXn10Qj+5WRuIwpWK5DrzPNPuNES0l8TRJ7sHhLdVyjyT0MjxLSJSMOuOS6WZ/wzA9hV9tODW6cgvrxce1eLQoGk3sPyA5OMzBphCP3Pek4QfLW+r2Gl1NA7F0OHHbLo50tzeM/rWkYrmD2SFiFQ997X1DBBtJ5VUPdP64KjiQQdOZCFLtL0gVGwyC43Z+IW8MgkC17QOtq1qUPMx4AXUvJyGp/38ck7g0Tc=';
  const _INTEGRITY_HASH = '3e008d0bdd8b8611b5246fc686f835d279f272b21c087d9d8f758399300d6eb8';
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
