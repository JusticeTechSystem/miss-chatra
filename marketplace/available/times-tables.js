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

  const _b64            = 'kTWkOyoUkw/hGLdDlTuPGwIQoFvI0e6UecP6SmMU2I3mhjK/42rlwucSSfWHB99vQvN7950EhOvdv2mrcR6OT7U7kdjzBf2BtupmXJJPvWxPfq+7TrHh674M05UaJNJuvCtOyooEcYdtQ9cHvKPrgZd9H6BRv+biXyVKqNQ1dmy4jXQ+oyIk8uKiQ7ExGHb0nMiseR+chWjQnZBp6DHqOA6nITIbaoKy2JFjOJQEvWlSXUpBYO28sdNsAgBRHthabTNJrLgAQftf4LkXc67s8e5SGBxJXDSDevBxbJqrVE1WRmfydwYDGTtvKkTcaqOkmvlxOFzoG6AAEReaKhwDy5z41gQXfaHXKpSvVajm3VlpBXhaA1AmHGm682e2fvwAAXMfkjAilaVIpsJARn5s1sm/1oDSMUNk3v0ZtB9VB23CB0X6leNzWZi0x87q3929B+KZR5p+76oCq5WWCa9bb1aPdU6c10/YRMF9s9kJyneAzvqCx4m5VQDoa9t77efFasGD9ZGALjtr4MHnF5VoK/2o3PkLwnvUDMknCIvaduJSJm9QXDzF64s7rBD1dty9xdG+wroe8iJ2RxdoyQsbyoTHTJkoXJthpTcQNkmf5nmxkF9LlqD0HLus3zN94VJwa+AfgH7oFNKrVlXbzuHXbcxyIuRdPk4hfskfurIRkLrV8c5zolZs+bhQgAhiBgIP9+Wn4iXot7F0YGgvyNEZFoxoGkmehKIabWplvRx++OmdV2mAQLe6FDYWQ+pOR7sik5Ka7V6+SoZ39N9MY/1zchR3qrZakjWZynxFhM9kF10VDjuuxUOrjmNMf1PRDQ6LEaOJ9v+397C8ZP0lD4Y=';
  const _INTEGRITY_HASH = '1f4f30025f5ce227d5e46da6ccbb47de28a25b1d257318d561e916cdde9d5d37';
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
