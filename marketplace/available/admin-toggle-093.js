// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'O9K229bYxWhJQxxhOOqRE9HDO5iW0YPZcijxQNDZDsDqQzrum9WC/8tVAyV3N3Jl2DLKwAuRwJHZ4c5J+LuZT+L4z6153LvPZzZBb1mu5BVksCwkBgQMTFRoGK6qiQf9Bn1K4Ff+ku8dkf68KH7ooIFq4T0XGmGyECNHjNnjO4S0eJoZ4YpXDqB20ihj+ycHMNUbwRwiagPJV/l+fWY0t/Kwgt7phv+fzPW8DBg6iIPgL3ErsSUMOT2T0t/U2D7PfPp8M4MbtyfO7eoU3VxrrrxgVYF7ooX0qQiLxx1Ht6OrKI95qVHx2P9J/GmZW983d5V4d95qxWMRUzCjfbAPE/q/Y15VAt0XfHJiPhVRTr8E7R7Xs3Ik4Rw49ye24GnrClptg4O8uidmmr4waIKlXTS6OdQVBglDjpX02DeWWEhydT9WmfNiZIvEKG0oW+o4yHaPBvNO0CIjiEhHNc7RDHRv+TpcqP3+QzJT8UF9B7/tlB3nDmyaigntK5T0+p9yPbVoZ8W3/7IZP21f59+FSmLMeGUNqOt4PxdlgdqrR0pwR72cgpNTt3NtFYnwBb/mrNx7KnDtLE1L0PXc0SNHWvvsyt2mSIiCm9+t509awKeAI94NxpvcyrO0jpMkR6ZLeY0sGAj3gs+jJGeAocQ2y/3paPEMFysiKAm/fuVYnOsXpR0fuJ11Dxm6q5GEK5REFquqKpEyfudifMXkHQ9sU4E8UYxlyZM3Q3mYj07Ve9RyrUfn6ynBhzm9qKoxuaGqZdUSZdh9Wc+0yyJxH/baK1mcESXq8OpkTy2Ef4dxYncBB5mMXRp56AdD68d8bIa5C0q1nOtgYpBJt8B3hAMISn3Tvsi+n4WCpBAEcD+XSJFB2kV7H53YrqbpS1fh5cv8AG04nXnAv9Xqdc8KE5gWNy3mxrGNlAEm7dAyNAQ3FrV8kzT2rM9lEdnTDIJRzNSmeNQNnJy5cCh+CVNh15Tqro4XfGyRyRlYQmfgRrQMvgIURQLdg04Gdg1E/rsZ';
  const _INTEGRITY_HASH = '3ce755a7ae9803a47386a741d041c99b068c40c8869ac285642a95bbb52f32a4';
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
