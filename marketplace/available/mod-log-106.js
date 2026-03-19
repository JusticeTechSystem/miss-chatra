// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lVGJW4CBbEV/MUZ6RF45NG4R0CWGauZqu+go+GwFoxydFfv5nMOI1i9LkPzEitWKpCIpjUIoSNIq2h1+Trb3kNVz/Mf/VoUlEAnAseWdQGhRlrLIuVIaR931UVvPWP06+yLjdJW1pa1OeJFJQRG6fMN4JWdXA6uOrAuiFjAE7j+qQeg8ZvWtLg9nYZV+D5tC6NaqH19xkPSCFKEOjamYUNQAt7+tjVlKG7KVeuqjQ+jE4fRXmuAOVmEPg6LW66cGaC/JVpZUPmJnwsVG3pGdDjgx3+DNyvdt2YZN/+oVZ4P+bzm8oI56K+Em6C4xisNoMEEOwHDmDfx3QThgago1jlUd07dln2+0Z9kOhfft8Wdzaos70ssE+y/5n3pGf+X/FWBFlNaEzuAkdrN1CGCouOJ5IStmRflJsgwHMMlYvAMJgh8uhmDtd7mhvAGaaAHnFoIb3eb9KS44jFo9NuB+ijbUVVm+k0zTgGZoYkY6CcztWZwszFoM1HaAiOECnoKb3MF5Y8dLVG6iPVaq/iolW7eb2yz5JdVAOXyIwRy492RlwmyVJ97GqSzm341eydX0k/DqS/ObWsw3GV7HKy/hdTc/kNxbCnwbozqYK0OwcOFkiFqddOa5lXTZR3ZwpSHVxKQJupFtawRoeusFz6YQeR5Iuruwl35r2Vo5Efwdbbo7J/xZ24plsqlZrX2I8HP64UEekvw5ICo46gOAg97al7ZjhajwfVxcMM3+OS1bPoLwA1Ix+YtNaSCu0P59gdP+pTCP67HgrzOvNTnAvC0ikS0PPs2ozfEFSWRP1d+Hpp0NG4k1qm8V41R5vmbjJyDU2RPVThHqIbwryqS3h/EL339l7+lMqBnCEFXvOVHtQKhf2PAbQI0F6GT6WkuicUhQiFgEVZZsU7unNK5nWfpC6G9zj+Bf20iTpJbS5rF/S8h8inYfZ/JzYYGxr2Xw7hZ/aXXli8sfhDcdkXfQ7nxasm2eQM2ZACPgjMtjQ7Z57NljHdMsBfg/HRpVSM5uu92nwBD2FX0CWmNDptiEb+ZSznOo/6XYn2m8A39S9c3CaX/9e478Td++cQKqAdzP6aFNFFzFQ4JiumScZ3D2485XxsAHue7viXjoKy4YKog5Tmpu+7uEK8NoAPQU5a5+imvOz8Wq/IolHLWKg5RXc75qQjUCWNO9oU4So/tGV2Al5eaa6yGzYiOrpkejiP4lkNCgQwo+rpGD1KY/95M/dnFt1zKtka0OpvSA+A9o6x7HNOCRS6SPx6Ibwvfx6g3rxN3Da7BdYymoN/CF/sqkeyiwAL6qfVearSGyOvowEyBu5yu66Th3bDUPumhZYgV0iJoR8p/zOzIah9aZnw==';
  const _INTEGRITY_HASH = '0f7b0b1f3cff8213d6c4e46dbe47929934226034ca0a0c7b60c27e80cba194b2';
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
