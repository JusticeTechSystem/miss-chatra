// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'rymDAWe7YpYhEojnGDuw/zNRn/VOVLvrFdSVdf19GGTvde92AmqGnsV8v/EztjYN2Q3sDQdf1nWmaB+9XNa59FpA2ha5ve0OQWHzpl+heYdcoHT2KkBHb59T95XarBJPv61EKytn3UU1kOa+QZZT1e/Zn7g8dZrf0cmUY3BNlLspqvQpfGWWcYAbtKfSS66l7GOApijQIvgr9C7bYwP71gyEsVZ/xOo13XKMtM1NjxQKLgYGXJX1NXkZ690+jA5mjJfdNTfZVwYTSAp9JDrwxixjiuyTN8MECEQPusOeDd/CCyLhyYsqZLWdxe+jV1ZWkRiS545oEGA8nxWxb3iW6aFv71vSxKy8I73CYUHtOSS0vWT+zFjg2F1Phvfuz5j2A09WUtccmeoaQgl+1rCzfvNx81lsAJ20KrQB22UhO708ftgp/OaqtV1rpTS/TvMMqMEfYw5UP/+wHeT0hYgPHvTe+Oekxc4khmtpqRIZ91knLj3Y8QuUXp4+BJZjeELHjrEn/hYLyEM49AUeZmjeJRozVBwqxGEC2ct16RkUtHzQzjiE+Hwnwn+Ds3CW34aWR5ml3YCnHXYOGm81T85m0EV9lUlPkezmmDYatd921IX9GJo81Eh1sjAfR78LpqOZcjpLb7CVdTlNk+0nGvBC9tXW6tITPxo5cTM7khozipqllwxNv10f3h6e3YgO2vLaFiotxw1woUAx7D6UDsXIdIEvxPWg8cTyYcCVHfoTW20aV912/IZhQ3Q6RF/bc/nrt70Dp21iYkbZ2TaC5lNYbOBnUxQM+gU5eIOKdKr5h3UkWwc+2+C2OqEb1yPi4usPinhiE14Gv3ej+QGxnuPMeQ1tOWkahWfnnMS6zZxVZGLGF2fbl/i8nWQxOkQMC6tkgpRtGQzGg5ZQGyIZ10naDmQSQI40qnDpx9Nw08wp3eceSH0NpVpogJ+JE25b0OgJ382VIrKshptXTSckjqFYI6kxIk64+BKqS0qbJY/H8fZtxgGogE83SUEUuxW4om3SsdrCRYonIFQBLMUN6+mSMeYFVAiZfxXQM1tkcMLOHz0/RdWSJEjMFkHIJw/qdhAqkmnb+vOga7Eu4Ib029ReM4YtCBaanogpQM3j+HnweDCa7pA8kRrE/KwkQlvuAfl8Bg1qhGrZhHScMa4aC7YUM/0w7OJZEJCY5VMe7fB8hUVfL+iZ7TseX7HFARHuO9GRq9bYiW3zyXXLhqgyJkXt1V2SlT/WxL6yDTgkoA6LPL+LfYOyih3VeaZbKWatTcY9reCrCPb1f02AAzA2ktsBhy2BaVSmxuZI1ru0v9iI9ash7H/l8KyxjIwSWEBwJUtT439YLv+8Tjh8CeXk65zjVVd6CNlj44cEEBOP23rf';
  const _INTEGRITY_HASH = '08b573e015eb16e0d03c66d010d7d76c0270b976febbc6663c142447cd625cf9';
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
