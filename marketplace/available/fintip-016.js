// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NzF94P9quQIGI9peyTMYKdVSv7mYgEFz6eAiFeOFbC7qIPVj9DrEjyZNy3AVUljvdHSPR2x00zHIKhtIxEIM5WkEh11M+B+L7gTd6ZNJ8aUkOBdD7oXgKqXfndU7+Lz+So1+ekHXU/n8PPYLk1q6jQQDVflyFA4UeFVCZg6ZpQwtcgzN1Eki1Ehuyejll5lBAlkG8Lzyx9E2IHLWYeHbrc/zvXqSDcheoK4MMSQ783b+kaxMA4ZQqyJ9hVXdqnyAWB7x89gSWupOY6GpOpmstA02P9uueNPJ4jb5qKOZk/QXR07ydN9/AP65B00rwCUTHe3/0dtwZmhuQ/N50plouwVFp7yCBkb1XQQdXR13PNO+INO+zIT8IympI5/ZKu2vRZJxuJXTEouVWtZ5KjqpPAtMx6KtfyUUTDknrrAB5hivlXzljqwK02Ot5FDAglkXC0cIdC6q+3lYlXSP+O24LNLOxpI/S7mOwrG4t1uFq5zXFDp7MUuCEqNkIpK1CpDIIZIwo4VcSpKRHMK3DRGeecRPNWjp6XEJpoPdW7AlR1iLVlusOgBmekdBxvSFRZpSDY8dWdAqkrErtaa92AYzrGzqaVhqLjmsOK0qgHXO6+BCaGHxr6ZfsQj87fLvz3JpR1KRXPoH8r5LnBJJIUUSBPUwi41A7YqxvY0R64yPAT0kY0FSrF4MfcP2eM5GsQ4wPfpe3WPOro+8flF+Z/2oAEIomSuQjfFOBOitjdMLvO5DaCJrL2MPJYZreqG7Gp5K+zzupviUT+iN0hjq8uWdV3hZ8FCE0hEtMVrnUwWCsW01x27f0BvMq0Ve/DgEPRQnIz2m1Rl7KT2ZeR54W+/j13kOm5X4lPrU0oJkTOC6UWbBNXT3XhU3yunEGdjLA2BoQ8d7hK+KUEUcc/No41HE83UqhI/hrWa8GOP/I7YXkcNLomz5B3yGOb5HaAscVC/S2pJH8Ez0BgnhHy0lesbaVkoA1f3AgQmbi3xlLXklwtxRK9CZYbYttg+4i/tp1dtAf5oBDplHb/wW0YeNdmXbEvkdD4vcxXGYEIXPr7Z6D0qhYQ==';
  const _INTEGRITY_HASH = '79854e8d8b205871707db95bca69daa3aaf99d74837d052101e6ae5198ee34c4';
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
