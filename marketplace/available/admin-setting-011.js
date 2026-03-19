// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aXvtaeNrw1SBgTsRNUWJGrTC4jwMAiQU6DAp4iKBw9WDQmBxC7dvF7bKAjCUYp1K//MNIo1dNESB63gEBTNAvfcCjPvd7bfdh6PZMmL0PQN2KBIgRjE0ZdoOkn6vGmlR1N0eNHAo4o/+cj5LyCUsPWWkaaGjTexUI4sOrwBd/FdIq57C8gOBrCrVIsu9Xz2/YdJ6P6AiZ15/mmGR2fCwwocdzFruOM/QpGXUyCH/jZB1/E+NHS2/sjhF44JbrWs885aNq/Mob6FI0rOTMWY7J1jdlgX2ecl0xZ82xwahl0p8qnTFRiyrGjwMgM1uUltCo82KQ2aIrMaAACLJ1RgII5CVuNhC+ShfyO08x95XrpbE8TfGkNfLD0i4dQ+RL7wJFK2Ahwwcik/kRk2u7DNwN4/xL5YoPnoBW2lI/V8hIk8aX8smVky5/4kRgZpxaewSQ7BXfepS2gB3acU3aMoiOMcVYAOlxjfYz8rPP18qLOO6s8kVstWi5P+mgR+cLa0Ko8XPFGyo2PMB4x8OjWiNOIUPpx/pNopLVhUngOQgVHT1xWnbiWWWHWNZR8Qe9OTebr1BAyxuXSI9P6vbVnBhvgmk0ERBNZWChuOnTEV28T4vrE0ampG01pk6rvCtawgjbO2kV6fH5wPxu0mVe4PjCaIcCaJ132PW8O615+x4f09bg1oI76CZM/wx8H8LqtWHY2skbEQqGe+VTGntvgGXyycKiiBYq5BUVye4r08Y3D8XK+4VejRGAdpY/b6Ej2OTaqSK+LawLPOf21xWTTrPo7msvP8OCtXD+fpw+/0TJmL3Ha6AWEgwTyKF30oBIl5TDdeiU4zBAAOcXwi/KAtP3pz9w+OZOpBWS8JHhS46v+rTNHQeYLPi50/YoTyWgSwUQsrCRHi+jzy+WLnun6RtgJ1LWxTdwFM+CKwypXv8dJCJuT71bRulkTtYt3UkEzLanC/2V6dH9wnTxaWQXC+VgQzBqji0ri+6DZOQmMf0HzY1VifT7i3t2Y79Pvq/CX+jrA4HUQ==';
  const _INTEGRITY_HASH = '420842be452ecd2548fbae80a617eb1295de744d2724f6e7ef4d8dcd8b55c5fc';
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
