// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PQWy840/A2CZqRSKrerruy414yahbiXLoczxOlYkoyoxsLo/JgHak/zlhQoIUNaStkvyVx+wO/llz6gTtxXGAO799F3lDdUwVepCXjTsU3uLUFrp585fkIEMQkwcsZQBy7OyoUCBG+TZlBzEn50TvfwlX9IPrTZdE/IjfvTUdStlEmsMmUX/0DTIzXbS76louicW9dtdnAcscRvxwHjSklTG4bgN8nsdInurD5fKyB5sWKiHYArx1x5RoZVKcsb8sOLm1gq8zN0lrNhImC9ydQNnxDF1GYbziEMsS60IfYNr0etsC2g/HS972t8G12kxMGI+ag3nibXeQzqEK7smuJlbAOAvF8C3AXt6G2Vl2W29e+g7nZZxMHWAIEUAXO/lIJKHKupzR9TXpXVdBp94yQh9dfbNdvb1T+ysTHEvBfCc1eCtNysv8TRRh2YElr0Mkc56C992mp1Vuoyuj4ONpWuREagixGUikICDsxePCV/qjNZcjfXxozAMrtocfM+yNWToFj6FMb9fFxUlX5zPqOc4l92qYtpAfWSpYtMPsJO+bWDRbwZjNEdc3XxuHZ+YD4zalunomE49KbE6NaZDExeGQ0STlCkthYJ/OPDXqYk0c2qgJsFb3nuLOqwjv6sUFEpvIN8UzTgSxcgvfsEB8qFs+DE0SeDmxVWdYyIf6xVV/xBwvLrexkG4BininJydHZEibU9zOQk3bSvEWdFYRTRddWM=';
  const _INTEGRITY_HASH = '9d5d45b552881dd2b277e063b51ca1d63853d3af2f617f76d11ea383acba324e';
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
