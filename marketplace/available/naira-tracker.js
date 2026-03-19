// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3naTwx6356Z0THLzG56ZrC4d6jM/K8SkndaVwxgfBnLmqAtWLI0Gxf8G/ESx9mAy0o5i3TLgIFnn8/55/EWMx8dc0qYMxWlvhR0N8ZJ3yMFct5up7KpOckdENlzTVh+7qffL0mGGBrdnZJ08CBnogfg9+hGhmLsyUwADEVqMB24bEkuESMH4uS9C+SwOKicTUauZExRtZwcu8yBM508NQRBBakOpWrXOZN53ZF87NkmXN9rTucmLHgmAhsg/vl3JHMvS+UTK0KsVMrfGMphzXQG5n+1w50clm1rCFJZTyb1bcnhtOFJpsoGv/4muJ5ET1h7cvw8yk0lFt8MUBvK6GoYnpM5SwlYAsEerP1TGSPmR/O1px/rw3+BD+skKnPrDgkGXBCP9eKjridecJ22dCbmOgFrPk64HOEqUa16bV4djwYt95HjLzxrKrStXLNdm7jDRAIJl56BLQe8dt21wAEufHhfJuAivLni52+XUfagrA+4ZP3dGv2SmKfr8/dj0OUJ86LRM8zCPg9uTFwxEEGJyv7SA3AgGrrbjA8zf6XZAHIZhndW/R6/TB4RkJx+zyW6O3k2oZTcjug==';
  const _INTEGRITY_HASH = '8ab5de89de5e8e68977a0b45dda99bf1bff29609dd8377b75d089db79d9b69d9';
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
