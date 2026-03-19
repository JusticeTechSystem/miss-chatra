// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '85bfV3F8rgzs++CgbN27lrDy2xfuIvHseUhiVJ0vGqr2xrT0epG0UG7fyMS6wwUobezg+OPJgSe9hRSv8d1Kk9LziDVtd+IzlVYYAtO3UXv1h/9P8jH68pGiLib1DNs4zxrb8MWetmrjUAOfxuDqDqJmUICFWB9BvSdBxmF6GaEN2sgHx8vY2caMVXh1YfFS5kBKJD/18oX9fRCXmUuED186cJ8kKSL9IVImgE2axb7V/l+NK+FgzGVL0Njw71rKx9QG9krhM5GoiBtaST49P8grtdHNK5hO9ZlXJ6UX4ohY2FUb3UnQtbzKrGEVnjiSMxkf9YsZhLpgzrmlU2auE/6gSKI6Xx5eZ/LjJPpntQmyGgEUzGqV2J9a9ca9aMwox34yUmp31PDBsm1Muv3VcHWP1lO6eIWxZce+FF//p7nakrR3i4uC4fL8zdhKjveDQQ34jNEbL09dzvTkSeyaiGuQCEpqDDFr0ZqHyM5NffuzDGcxPifJndiLLKNvcr5fiGrjiKEW3SGZtZm1XpppH8SGCcKesOdrBx/wtqZd1AXz7lDXMZHWJmOrK4PgpkfMVtw+FmltNQ3m9mrDJ1imvjJ8/DvhzB1Wk/Sg7OAqNpzM5Qc/Hrp4x1s+q1hWP6W7iRndYemjOdZpu1tQdFAc';
  const _INTEGRITY_HASH = '4174f004c3240cf326e2fa10f7694d254997c108651e0bd251acaa13b50ded59';
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
