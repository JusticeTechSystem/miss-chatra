// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'b+YU0Z0Ns2edSwnQmrVSqHb43NUuCJzhlyVg8+VKptsf3cz+tczUEinoB3mn+uNa1aq8/sm2yfgvN4n8MIy7nLuCHUNnk4cLgzFt/5adT29YlyK6QPOmNfhxJJ/Ao4mZ7g3ny19f2fYi4+jrgIxyKf4HCypve6IPhvNFX1as4LEkure4QyvMWggozjgcdblL5l3oVnYeTDxRzGn0sFSbPIcaYKvAJq3CvY+KJdFQPvpKP8ImOJklr7EWvZeUIHOBbB/KTYqXLS+AQ6K+qSsZz3ZCxwIu9aTTl3MsDYlJjXTiBRD1DnHp02K++8yrlHBAm1yg3HrjF27vYu1haGxjt2hCHvc4NQyeS4sCK3oWwFf1qsw3AmdZo4XF9uc1GvPJgUED8CEXPYs6+z1Gk4vKSK5EkY1RNauAiVdZqrqcjaqOScoOSIwafOZ727iXvdH9p9Rmr/zI9TA2tc28JgY3Zb0oeaa4RqAO5fx4LVk/P1BzhNffs3Dh5dKL5l8Bx9+t/GGQZbDJ2so/YSjKECg69/MY+bVdVFvcEncnlvsGDJNd9GSHXy/kW/FvWPaxikGMKW/wgLA=';
  const _INTEGRITY_HASH = '85710cabcb91ae48ac2ed8518c70bf90a5041de71c1539473cd259fc7d0ff795';
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
