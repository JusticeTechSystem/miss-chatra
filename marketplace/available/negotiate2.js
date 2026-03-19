// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'c0n8KZOf5n1TL6rLRY4SmczavGpGbe865QvyOgEC7jQnQyvM7WKbjp5ZYuh0Grr5yRtLtTKjtWE+vW2C2llfmlvgRRZWe9CjE6TFalA6ysxmeXGVmLJPtGzjeaS3RzTpwA7R0L6bahAXrOE3+qOLOmnc3IQOJIirtk6D8Y/cvaaYQFZ/JpKPS4+V3cFgbJ7Ml4abFWO+r0TO8TV9NaUlRppePx4Qhqp/dHgs34kptCI9o6FgJH93h7xoVr5+oY3Grua5xFyK9BuAKPGTWVx/GpuMv2B1yRWJ5V5IfIvdi7Dwyxf91zD7gIB4LCgXCOLFRfbcWhjBotd69UqLFoknqSrlWS6mulnA6j0nM9nQmQcH0CDt/NEaLi/SM/PrYRX93B/narGqVasnZLdFmH9/7kM0nDDNhycDWcFTorQIoAMbf7yKkxSGtzXtPmJdV1ZVaXOfVe4mUHt0GdNsjaBKcK3htWabMKkILH8wyEdTdtvizTW551uQS38fedk10KAlJNdzrcs5d3SwPZ6N19FZKLvn5/OdOXTxgi9jIetjobunfz8hxIGpwodJeOaqTVu4RhHOe2D4fWStn0SXRoVog04OzztVxYu4HJtW3TZGdsv+jeO8WwPvFstHtkRb1tVwPzDuEjukCoi4zXp0AC00h3TCjopJY32nZlEnq3SUi7MfPYc3G6/Y7W3Y2b0EoX71ERXYwOVHqusoY5tVeGBJRS+3kqI77SmWDsyzNW/EbuMRN0TwLzC/2xdAIjIrTMPdE+Jz6Pyn8kRleOm/ZOWMGuFzSsOEMeidSB9m6E0f80OHIk9vmvSHER36PqxrBmvtASB2LSkm23pGS+DXhxw9AgqSlDAqGpFEgHrHaNRxga/E/A8vdVldJBAtwD8cL+I7xwGHmFOrocTiouhJLR2Eely2lr5ehmXqkMmiX7FT2Xai8IV9x7pyyz0VvSYjIClEVQWZbpdDZ3Wi2uhxKQGzEwjg/Um5anyW/+WWMX0SWL10vKhtTSB4e4fU0hf2yrGfIlGZERjFbFNpzDO1dbTDrWH+7pGDZZCm1OUwKScNKBjV4pqAjiFiTp0wRd54gR6NTNdfHwzBssZhYsDEwtHjqaq9PG64KP8F+FTnF5gGxzIjJUi6dDID6B9Wamn2HnUBYWWsnIeeEIfL4TOgacwVW9AilA26PpZEU57BtOpcnOojcKFNCMm1rmNQAlEidebE3JrW+xsHp3gnMLaUZVgy';
  const _INTEGRITY_HASH = '98fb76ba62e5e3f1f76b31947d62b1c72808ee4e1fd07ee958a57309cf4f9239';
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
