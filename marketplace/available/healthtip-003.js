// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wd8VZIrV0FiMTeShDXzZO0YEmbR4M/YpwklXTDf7RK+9f0vpgmN9u0w+UAvihczs5KMBy/5fJKRfhIXNeP2W5/UHkZH8QtXy2WANBec3HoceYi332Kz9B6ahxQ3NmVN4WNU0gwjYh1ifnOynBhWwVHuDUmQuGaQMkJ++XJ45QgxYXQnpSNV9xZUbBIAu4mvda1vZhf4C3PluBQRjSizxuW+CpOXerzWzJziqqnrIInu4Fzw8rH/vQTgC96vqTYirslZV/ATsYdjywDHrH4wJBGHhyyDPjd3vD+4/pAumMEJ23coLG3xNOpQQM7sdHtDjhNZpUZWxHmff5PgvGAYXnvquwJ9g5T0NQzaEEN41KQWQ96KHNj6O17uHeLOdTDA+t162YzR0pluhTJdeHrLWkOalePXTBQLVsmOaVDX1Bb6Pt/00imfk3pGfZRdK51cbgbXuweXhRyu5x0UC1BDv3raOfDmHDW/biH/aNmIQQpKYDUKTGDLc5VmnqwFGtUiWwXvMt/JrNO9vCMYy2NZyprjQ5YpsP6892qE6l5G5DFBT5JlhnG3Z9kcDF15Adn/sBCgsybwuqELg/yWy5l4BG8ca6K5D7Nhuv2WEz98jvIapBfEVPvRY2R0F4rCEMMFskgFXHoKrjVKdQ6CuIkbO0INdw2l7js0nLRj6LqH87uvOanQYnBaC4DxDbmWFCH5j0ydoFBNFEtb2Wg7XTvkLd0FBXC3aDticTcsH22juIXE3ttsTaCpS0wndLlikQ17kgKQhy6a8BbUimS2yBlT84ma1vtM0Ud/Uu1wxmmgMK9z30iiU05N/u+Tpz/dN+vpATG2hZFQQIgBNfEHfA16KIQ/kOcHda0kgXs00m1sIwGWmNlcka2f3XL/Iraw8NQSyHerfUNVfZIRgBDhwuo+Wqu9FklLF8Ol4jRQy7wuqw10vj4UHMgGxqQ==';
  const _INTEGRITY_HASH = 'f81504b466c40c6eebe6f7d725b847f0d1a4b523b8d48111555906321e90aac0';
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
