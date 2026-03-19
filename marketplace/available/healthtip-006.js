// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'X+gZPZv4RNhCC1ucHA94lBhhgODVcP6SwfuTR9L/pGe814OWnWdtrKe5NSa/foCWBfzP+/+jd5cTbfG9J3a6Zev7r06wTsPrrTb/pOTWL6Q4+bESc2m60IjKLV5ve66ZFGCcxHqKZmBceKIApEwHpOW9mk6b6OJUGEGK89XSzRTHGKmlS7AED7YzXoojS7L7Q1I9jDGmIkTu+UTAW1Nu0nA9UE868yzTanASK++YBOjyCORXN181b6hJkofQzERX8oceSoG/qfMluJTgyWU0EqCPij5CeK/MhMmdaiUIMp8gyw3yERjcZiiaVq0e+Nd+oKpy42wMEBz9rTArT2Bisx7mocCm0D6lxNjxl/y+19ChNwhANMOXzXt8B8gy2mdr1GlRcp9B5XozfWF3qbzdlagjPeWojz2OYstauOVsBIdLxL0SuHFqNToGNpToz+DsRm43h/OcTvDXkMK8ZMgQCWqH+IMMJl+DiLrDbBVp2mvQehPYHzttfPjQ6Xks+0liODqoQOJh4h3wqKnQ1SZzuAGVZg3zEWh2IgVffeoHP78ekV/kT0h8Kb4jtXvBlnlqstPRNWjh+XPUSUPTvPV5PgHQb9fF3GIsY0OAGkgtOLSMmkamC/8CEgZKMR2X+I+Ag8nWwe5MzgWiKENCHOW+tzFcZdMgWkXvOTJE+ghVLtpDIGFU1TrFG+sv7QnbNJYDv2iPtBGRh0No6vM4d4Zc/aWGRuYldDAKB2pbi4IsDvxatn6ti5EqZUoFZyaUC164PaCYTFJOw0tc4ymlooyZ+tKVHH3iRvwStkBCIHbaPN+AwKVqR19MDYzfkRz8u/wkzDxtNUWr6FxTc2KhF30bzHi2xzx04wOJzXCu+AIBB2ElzG7Xhp875EE/gupln73CBL3oRGc3qrEVYk/pYFVpcluW7q1dbkghn+KyCi55l3N0qUNcV/lSJA==';
  const _INTEGRITY_HASH = 'd6b0bf37a755b6bb2883ef86daab5270ed15691b0459cae7a81d2b70e5ff2bed';
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
