// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'EKmrENaGU8KQ7BuEXseRbZC4L5up4E+wNHSU/+kxube53VvRnM1tHZNIlDoZGNoGVwHK+lJMGNi0rZ9OIeOPStLoT2Mf6J3Gd8srMCZVquM1SFJOt76WKWCoRwFRZrkg0eFSRJDL/hCM48+9iuGQhMDWSP7lF6/bTos3Y3qH/OvkZ1rydVpyd2CajhMesYjIpt159fjXgYwWe8lprAG3fxAjMPlEzx5tbXrTJEROtU1BBjFJiPmVfA5p/ZtifDEyHmF2FJKcG8gzDR/FPmY5JM+pFt0NNP1Wq2BmOD5ftsLmXbjACXbZQ3FmVLSmFvGrxVZvHzYbOWccTE8phh0oQYcF8rzWoM/WLHGsz9fAO7CovEPhmhjW8w5YAl3P2s5Fcdwj+cPks+oIwjOiYDQo4Woy3junWPMNTLutMs2RgymFJNWNUQ0ZPjRgOGhTAj6lYgiiKTyzCTPj16rIJPp/cyVd9Ax3IDVYJe+Do4jQGRRLxwOw8lXmAoG7VD0xxL0WyFNKnj2Ggjqf/5sLXMTHKtryhqOSB971DMAhAbiGjWFDD0koI5WCzrrUO635LOIP4VGlvdXzncQVsuOYbbNuixqbmTpj0Nalvbdgcf4IMcJOZbPuCg/eablmndajk63Ot9Vq8RFtuK+XiMp3NddjPzI+SgIkO4Pa9yaf+YPbcOuEbjx1LTSP36dRh7raP8haZCBh85lJoykdvqTNb3NGPjpZmCLvU8eWsfG8djNEGOrLIQ==';
  const _INTEGRITY_HASH = 'c9107a1f4c97c629d80745eda6214ba8b90d07523f3f07bdfd73e86a4fb64a9f';
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
