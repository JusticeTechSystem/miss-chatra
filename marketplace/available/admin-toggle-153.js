// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/zN/AiO8AbdCJ10mekx7gBxRW5FQxmnfcNYlVlRj1zsalp0kPdAp/OXTfO5kik7FLwplkKdP6+8u/D9ZfeHxEDYiSrwpvZllCA4/Zl+P3qDsKZCY3tEoDQlAn75GIRRrM7FIPKUp1RqzgjDal+yZ/lFo+X6vnrCH1lrbZaaCoyP9wuTjcS0ZTvgbzWT5xLell0xXddt6CLN3lHhi7gUJ/d6w7UevqF1cQR+wQ0ZPqsUO43XFGTekFKb8yBUZ52LJVZ1fs2gNMX90QdHHICDT+II6UV2cXXK4k13DGtnkZ9Fsiwqz3HJEd34vJhRv/U+4qm4gvUndroij5oWymDZtvYGiQK/vUjmwE8xakTFFW6dQsjzIxe+2mxj35hRr87RoozjIw1g41b5uoAKZaF9KmoPhcoycabYfK2sI+zYJRMfMMEOzaNHiF7oNbEi6Y1Rv8xfGuVBIcVUNHAfvzNvoIIptKMO4lI3pa2ydmTCDTNZxDtnXNfi3JO7b9yLuZaSUL+pV5dbIvUuqX17OGfxQSOEs/vOVn9OsFdqHw+1UwvrBK3llPNOCgJXOWD4RnUNoeXfH+uuPesBvKkIA52Kh+e0kOLodsofzBc+0KTqQr/JH7kglWdsMpOxqRb3UHowNTK/UnfEI6wwtpwCK2E4TIttxD1wNSnZ+pzFJ9LOt1WUa/ipv+TT7Z6QfgTyi5nU7FzM+NhQR54ixvMY0SGwiOh/JbZ7dIDAwXa/UMPyzgLelUrdJGYki6lN+3RH5cbEzAFEzPPQ24k+X9VcXIwSF8OCF4wT4J7XJdJ+Vzlm4UGp6cl4huI9wMZA0eGvl+yhWTmMJzUU1ZzCggY1Pw7zBbpCNrPu2beJkmzvY+JPR8GG2yvXH63rxANuAIJxQ2qWX2YK7Q3X+qjQTABRp8fkmsIBrrLyQc2ZQbXkgc6l1IVnzfoSuUYWBRXmFIn5x8idOOs9GhbEF5Q5bq/95QzAI17mPZguoU1wtTPt032VKFRQYhOsF5wdE56v/BM2H5/zKHQ==';
  const _INTEGRITY_HASH = '8ed9d62535b94c999cf0410a3144da083d64e3d4d285c011805d7b6f1d9a3187';
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
