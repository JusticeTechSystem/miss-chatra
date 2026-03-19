// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:03:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'I7aAxl9VL8ZcDQpzp4wr2BEBAkH5gx0Y3R++r5xtptueKFnn4dk2iBmBHtkzWwzqof9+XCKCxax/fnjNMjN6QVsVrNvGz/c1MZ7dbHgClQbFXxQL6Vx7ks5p+T01miE6yqC5qA19neNxVr1K/Z6zIPPFe4ajcm48Kl6zsCQd41m9gGHQCfHKAjF+gQ6iBfc9fOWzmBWFiyeQP1pCn/vmKI3tENjmNWjeDjFoMzzM3Ff8MfIGuOZQybyvDaAXwuI7vOLDRx0ILabx078aHkB1dDeGwNmVbzihRmdrzCcWk/efka+Hy5vlYSfpvyuc8IgKAfY6NVpEN9CyOVwJ2ZL5Btb+3/dk0Fu4fwAKwDZO+0IUUpERB03yY2kj40QwpJQO4K4ZfwB/HMzrSbJ/kM+5u+kved1/+VSD49g/PiiZp3F9X7xvaDBZNzOiy4ikb0xUxlhjc7lHK1S8hLTDwG0yWqm2ukYz804axdUbiWiuzs9Qi927Q9c6GtSWxZqYQYew0AlnYMxCR96oB24dtu7glwJU9NZC04cbY352rfsLL9GyuFa8bRoZ78qtwePojN7noKVyzc0LNHYs/C/2Uob5ELGu/mt/QpHoVvMyLz9jPK416kM/dqk4ni1YXzzu09QhD3nO8MnhrhFPJKwAg4z+c/sbx3j7P4R/hft1cb3wXQfBDfxlSdlBtv1zdwUGRqpuPM55yjImZ+y55SDKvaT3yBoJIh/zIRrd/12Xx43r0Gjo0bY=';
  const _INTEGRITY_HASH = 'af3d91ca95f1c153a2d6d58e755c8a40f10288d57e4182895a1fe9a806fcdb76';
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
