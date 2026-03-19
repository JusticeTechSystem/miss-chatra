// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LAA6bH+SSVK82YvA/P5XSclppSLQQZcsk0pOdUkyfbKkC9ha6Mt2oN3USR5U7ZVnR5s2kOQ0tR15CoyPTQnrTZimtiAs+uXKL5Ga+Ckp5NNlXSEZdn9RPSyuEA/rtmV6qM/8tPAboHeU/HbtuchVEjNqABh8hqOz1BaYhyNymWupEgMLIgE0O9eiT6sEeXb7nTU7HcNXM4zkFP8hvh0z/Nv33vsW1Uw0ETyGva3/Z18h7vWoHYtIDBk+3hHGQHUfGwZfNRof/av9XW/SFZRzjT682gTOsksDY9rG4uMcDiymFC2b9G2H87XHmoofBi8r0GfHlhGVcuKEsFhYWo3VljZD9SLXOvBqGPLVxECkwn66rD4kOrZwhlCpmTkYKQnfUweF4cegIl0s4zBg1Ng0oW2zymaRs3ddW3NEpMP/t7FYi7GGrSIqmN9lYK7aZ8r/ET9Qj7WropA9W6sT6vxyfHK4azThKbQmtlCpAg6aSQyGPfYXFQFCr8PSVjiQVKnrdAwaDjSLQ5eyuPv1zpa2L62B7JRuUCd0BTqZk61Sl19A5xN0ZykLee4OWylM31btSS/rFuZ8N4x/cR6ASpRREfQnlIPchU7UB7NVZgtWALu5OrKdSnXEn+JwO9vdIMzOM0EOzO3TWs8MpPM1C644NpoA0niYZmE5Pml061dHKV4Dl40BMOGVE2gIAzMHXh5+X8XWZUYemPHvBDHxbjbYbhOzcqZt9Vo1D7lD8E8NBIoqcdMqQdK6g0XvYjgxvsIiA9lj6bTMmoDfFQhpStnOZIDfT5FlHPdhtOXYWuyiZIOwOntvsx0ldaW+3SyzEJR9PKsEBDjp+OcByGgYJk0cdeULPNTqoCRpogeHp+TShTsuD/hCIyYRWH0J306NTQiutpZLZiOiOEchRMFgCB1cPqZ29wvd1jZ696wI92Dc/3L5XbLRP3turaU+9ahWJfo6k+wdGyaJUTR3a1wAvOtjkJIdze1Zexo8LMuB556KJJZsUPDcyUbRXHxRdX2sulsScA==';
  const _INTEGRITY_HASH = 'aefa7f26812a0d5b9ce09ab5c79731503809cd2f0ff1a1e28c9dc56b8d8324dc';
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
