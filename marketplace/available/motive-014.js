// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BIEUFuJg9fpJ76aIriKryKjOSyrZ5AtECRNxqr6868yV02tXCZcjSU9MLVG1bpbjQjo71S9K5nqYnYMsW8JiFfsnYGHWL8+Gsk/pz0Z6bWhfak4MG4Ihim6vxKjJPNy68dk0658TE50s4JsS47lS7xoRqSOGueveHJkm+1SbE4NjzaPhmiMk8aNrDEpd1NpMx8SoxWHeXOqVRKumsqnar4W8WPgtiTlik/HGF4/cyPs8GZRzp9wi76cFTmlamb+N3E5VN/u/vnrMxTiQby37XDsS4z04p8w7nbA9OtIopqtN9zCoAD2WYjg7StzIkqCJyQ9n/AQdhJ7mLEVx5pGl2+awh+QG7tebnKcFOtQ4TCVOr/NXaqWOBBAKk9KQ/4WSUBw1u98KLon9nhiNBBgO4rFa7fzJEf8dkPtdVjLcPztiIW49xaXnb7YD6bQ27I0Gr9Y7cBELrF+uOj9S2SZ64mm8+tVgRytlGb7gyO3UXAhZUIV/gAE2Htd2OUOC4II+5AdrDPyPBg/kwEC0TuSbQECYH8dmbJhHr18Bbj1qwFZCC7SVRjozo+J8/xOjZpah9w4EqhiKB23IczdoU3T8z2HioI2As9Yt4r1tYjBzlBqxfyBcQ6AKLj8jlxkTTfpOZAjdeAL9pZdfpc0VyBWAIWRFMe6uppBnOam8s2i0UKrfwPRFfKeNz0zQg0N16q00yHOveWiPc0KsTXkO24g6ZL/yjfzqMVXUf/3C+vMdsY9Cau7b6Kjl/SbtUWe5jzsYD4rutEwCq+EB9YCsLX+SdEWFqa4Bc6vh7D4iqsjU5Tvk6Sg7PhR7VFaQCaCbRzc67hXLkv9uB3GH7kWmIThl3jFTHRhnUlPfP+pr25qN4Tz16OKnQ2VxamBwJ0vp3VSqY2perkMvop4VDN/pQ/uX+KNsFQT4Q3yfB8/EY+oHJynxvjuuref844Wmkoxm36tb7bh6lsyY/n7O0v7hP+f2haprcUHAaFw95lBOR6yUoEC+45ZCrAoC2bQYTj0CGu4kfu7HOXDT7QKJmS4gfsTWkX1r';
  const _INTEGRITY_HASH = 'b7d9aef41601f118abd65a3ccd71c6427e1522295535b842e5858f6888fd129e';
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
