// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nMnW4/MDQlqJ+9eNpw6Gh5edLQhcWEKEwZhMgblJS8vV4fPso3zPN53PIYX/SvdZsRPQVOaRAQUoqJoLfKswXsH/xS3yCDvkOL9Mt43PJLm4s6H8qltXTGzzHuCRqa2yeQB87xf61QuCC4j8IPeHbXo6paA7WdNiUJz379ZuwP+OOsiOmOD2dQUNi6piwi41zCFkCYuAJfPRou+tKIWkGa6j+6x65prIsbCSRmEnYksGTAcD64E4Is7R6EbCb5R+fqa+eWuKI9MfiBLnL+9yG9uWX+3+Zfv1xwAjkEzF4/WNa+tCH20UqVA8xtyE0wtZ3y7BHO12IyBLFFv4wsh4T6PVaG45dNuBR7gQ/xWApyvYUTSkbHdzETdde59k7B60WzlvxrY6n+0zrBV0b+jyvw6EaAUd9/yVITSgbHjv2am0RPGzookUt/E1eTaB+LYkCsOtE8GxMCJlGmo4myxyPEKf+N4T3lah96fqe9FMLRa0ixGzfGWM/GNVxM5y1/JLNoRkHvrNMxkENWej0tGJy9jk5MinpMAHM6ZLT0B4umceQtgdnGNoDpLKxz6OHHXlSnEJq6aEdVKs1/vxyItvRG9l7Evh54BLPIVgeL2qeZWRtopyU9Q5IyyhrV2/sL4uQPAEHe/ZksW28TzYuB9ZRqDy9pUvHgwMsM9nhbxIFPliLpGrg88/2xWAL471F8hqWOXwsmYS08uqqytDMKVtmAqLdOVsg0YZxbObOxZ9PtFURWQ=';
  const _INTEGRITY_HASH = 'c24d515128a3180054bbfe808786b5addf88ea04f9cec78c43d8e7a9d034c884';
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
