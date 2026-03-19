// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '40WwcU5K+cDK9OQEHU4ZyDBup2aUfVQlfnw1zVVTbVeOXiDGutkRlrmTPd6dkLwXCejcTa4GNJGPUn6k41LiXInfGg1JwnaQZeYZaFbnZkERRCysO/WB0F0aXvOC9QP65bJ+XIxzkpVepSMazRAY6jwKwceY2F5/IXCR2SSHI1+Tzpq2KbXyhXCop107hcaZn6vjr96+svnvugBYDZ5sNYKuoI7+unU5YUtuhqeX5n0z4cRkMBGnLZqPD8WH55msIwTO8lIf9rZz94kbvZfMeBVUk2tR4BPsqkvGsp+ZczelEUm1/T80YJv94T5ROw5Nfih2ay5RjEPjxy4L0iqfkIHcc+Vx/cjsrG+G9Sibt/DJhY/mPXoT+m1rfqxykNkgM2kCuvkckA/AeTzSrIULxrqTJQ3THLLK5adA/3nhyEofToi4l/gydfR2X+hg5S56RlZeDqY/N16buzxlPzNY3A3al14nhJVeyUsf+R8UZvuyKhJ47c57GVNucfA9FDdEfrJwFvq6cbCUZddu9v+LbQWpe9PQcBA0dp9AJcslq6xYBgf1O8bcE7Id6myrpFjtXQeNLGUhy+kAyBtlZMapjm6OuBp3M3zjUriQ4Kba4tpy6fSmqfFxUisRccIrxmioXwZECabaD+hlAObBnT31hjEOOpmANkGjn6lJL2H0MGz+Kd36aqLYE1hZuv4Pz31t670goypD1VWC/dO062XYTYKQaa6nZCludI6pcUi/7MCsYvo=';
  const _INTEGRITY_HASH = '82b39c04a99c8e2c021b3447b67a53e18874ce96575e26c3d8b7aa79d623a85b';
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
