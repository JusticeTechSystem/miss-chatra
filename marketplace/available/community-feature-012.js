// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7vVPxXVtBNc6nEdz0FMEOCDdTMgAoojtSPCrudGslXbgAkBO9qJ6HFBqO5wXlbaQioWXUjrLteIm46wc2n4LuhMjHvm1w/dHgkPXJ6F3ky4VrwYvRZ+Mf19/YF9lUUpYOzDkh073mvxGcMusw02u6VgKXC6IqwQ4i+qFg1sSUkrJZ8F01MQx914FN8U1RBY+r6YyOq5RolUJdS8n69OSHn8RmDstiOPTa3D7sXnsGka6vDhKm+VONI9NeHL/KO6hrTsT9Vq+YaQdQwNfY9bow/FTulsfe2OBJ4GX8FB6UDyOYHvSZGElnFPlrNTwBQCtW+WizVpcQ+KHwaxbx7dlK91Zg+Fm5W+z6nbRUIjFcoEtF5K/j2Hra4IV4T6+yP8IxIOBkiUkhRnl8ZWDf91PpgjeCqBvhBO4rfOvsNKHU2WixVytVOOpH6u35GmHF3z7wx8fOxPnW4+CZJ2bsV6aZxARGWcPXxmP1Kc75dvxQEpEjbrYoHRUxrY9bG/i+shXVKGvBhbWXgUhPsweRvAN779XTP1+v7DU/5nP6257WpsqOhR/+ulO1WR6TDa2n4Osdt8xGD74N9VqZPRUvLBTfsVAoPrpZPkn0stqf/X3ElPa9gsrjoysN7P2XRTQhJU7Jh90euFpl2zZWCfPTc3PfboWRIOL+X0GUu/86qOVrOqr64ZLAnenzPikIw7VHjB9ztBUDW3/JCKS+hlOwjJNWCCdaI+dvg3rHSQC9/Kniw==';
  const _INTEGRITY_HASH = 'cd1cdd3779ca30d4aca0123e201e1d9b9f412dde7cbafce57e107c1cbd11aa13';
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
