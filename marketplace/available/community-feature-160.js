// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gFMytOe9UypIAVAVoOwlfUm+rCGC4oT7b67rL+ip0Pjz3gUJSeXlNgki1aZBjQuPtaxRrF7RuPNK2pNO0Z7yFddAPz9Z6HKvD7nO6L1OS/2iW2CMNQZcR2tNUix2aQL3rCuvFa0WIpMKJqx9CasuJLfuHCgBGUbvpcSsQ4sz79zig0cMudy/kAG3KW1sj8GbMjE0rWDJKC7pIzeQF1tRK2cv1BZTB6gZIG3zCeX2SD3tg7m+Amd09g3Mzv28kl5/rIkdpPhjRv3svaAldgW7vZ60/E7acfvXtzamG6+AtoenbuB9fWt0TZ0ZoFo3WHvcvLs/ULvxKfb5K9aV5pgk2BYKn4yPR+kft8cZAisIsIrJ79Y46kVRukKAkOAzZwHQAztByYXR6Iko/UGTkaj65qPezfx/B1INI5IKr08RG6jjvqNlTHGPwDPMSI5R/uThD0jzE5xvvQi504RhzUGLWNAfYUk86rKRuox3kilLx52oH+XY5rsXPte5jo6wKUrb2ZZzj5e+C610CPSd+6IWIOklXFRJPlq4okVDY3XEG0ZP6wsgrz2duak17I2jt3WN5l/3HiqYEeAiQeR+WD6BG8QDCSJgBvcckAY9pau9qh20Pr3R0uCMeDalF1Rvi92ZNyedhiY1eFuaUg50wDCP2pe3hqs1FSuuwEM/qRGBPisBKmq0duTSZ5rCuupuYWBFT4eegswd+6bb5kAMII8oL8rrCdURQKGNK83arfPJLV/Eh2lmKkXg/Zl0';
  const _INTEGRITY_HASH = 'afe63f6ce5edbbd02cce682536c7705149d1ca467654d00231abb3b65555d4e1';
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
