// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sCveORjC6SsDDimaXKAGU2gljleEIm2CjUO4nFIccZdvuw4THfKG49x7+SGBke2PFlM6ih53FVJ3m358ZM2xxwYrvx7Ny7axveIl05wTyFAKJfewVt4TYOgN9DfEc6U/qe9d7qCY1OMlR4arm4FEjVr/ZeOJ7ss8qXXv5VGWUSVUuCyAaUIbXwcZM9HV+RxtlriPkSocO5Lg5n67TpnSNf5V5c6t/grT0k9KFzF8xz6eC91VuAtJgogHoTjdJ9WnpPJ00jTElenRje2PgkXhkDe2Wmhj9iJJvAFCvD0LVy0uE9gFdo8mYk8zhyHog6xyqs+x/9jVAj7Pqr4gaVBx0WPGiP3a/foynJoEdiypx/Y2oN7wktimS4agxq9l3w/HUC0CfFXbiJVeAOV0KjjRROHyymu7ZxkP+fEBJED+lBhvXOasiGsZWR6KfnyozPtIlq8e3B6O3BxIqDVIYp2i5QAcpofvnHPwPqF4rYU6U9yQCiX2mRoBVD4RX4Ev7MhtNXORqNE13JdCQhsRKNUx5CwyZnEc/oXyNGNQMfiD6KrcAlwmgaCBHeb3N8E7Qb309Q9CHBwu1F+u1UsbzuIOZmQGzra+gkYT8odljq6pzLVgC9TrJF4ulwNPzn6552D6Mk74CHwyiAsV9hoBQ3vS3KM1Igr+s8eu6yMERCMpBQx/BSYX9URifPae2+9J3vvF2NshWutV/RbIWjzMEz8PWAXd9C+m26+s8y3hMkLA+WWjFMed3zhpikvRuHkJdg6xftA7ElJDFyDhvWBZR9/rVMTJIYZfakXlvjUQNQQxdBFI+uzRIGOLvVISdoSZiavNcVX/R+J+o1J6dqegqzRuoOPNvLo0UG19iz6JFJ/HsBiZ9I/NknPTcjPu+uzF+ibF2ujZaYnOSDIBUwl+tHUvAQbv1feQTuHycMmwvl3TdnXlm78o4SuGfip1PI5F5T3DvzKpyF6+abAh/AJy2RFbzFwYIjb8P6Rkrw3DAEbSjHfOzdizjzk=';
  const _INTEGRITY_HASH = 'daf238f0463dd3592b9dceb13f8bb797bb7f6b2be2126b475d9d777a95f04f17';
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
