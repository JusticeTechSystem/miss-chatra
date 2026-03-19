// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+gmHkLXF1XxYk0clFXLbRzWH0nmDA7Qj1beTdvkvdghHrYToJ6SU0Q38r7kVQYZbplIXqtk8weT4UcoM8Q0mfI9SIpjX+iBZXw7SjvfKJ9fSbUcpnlX8vOvJfWduZFdOfVBUcAWVPKrqk3h82MaoDPf3fE3mI1BH/VGlp0rCWjvl4GZEWivC/32zRYNBuBcCRAombyREvNRmZ+4SKDV9JBprDh5o8//2U3K5CRIWtsPsXeihLxkAQsdJIBTycHEeDO9aFmT6dgcvJbxIBNmEHdOiHnOSawvXloQGazbIbn4Odd8tz2Pb378ngilSx3MmvrhrH/ymroEeFljfVuvOT7xOyYG2txQQtEtOeTY/F8SPogZhgqBcbExPZaKVroYroT/7Ec+z/rqA+/JmrmVuTmxBtHyRqJl1cyqIpjuoDleHHC88L9ssLdFEBv3xipwPd9BiZhKvgUjKe0dvNXxMGBOxn9gM/nMaUTLyuRAXjsB5+TSO5MsijjHPjsb9fQ2DzIMqKhFrq7tjIG/4HEQNIAz0LXt1KTQzmZ/do9R00HPI4wp988uTyNQuH0H/p7vikW5a4GclVF3g6djExF9Ed3F1jYo9ywxuBvOCdohv6nmf35czvBdoSeGqX9zX7tjLLFrNAqz9t+5VnWQ5+LyYXBY80eCyd4FKTy+KjjcZoX3MRtykggDDKpHXqXwh2H6O3PUXBkMyPxi6uWQJrvBqi3vqgaCrsIg6ble4Js/UbYFZPy/1dt+rezyUzSxRwAbqJqzzp04ojmaaBp7OFaa4jvZlD/tkQgcSSJ3CNbAqZmJHJ4vvLbJKoW6K9EGYpqnt2gyykqXLASzq4kdb8lXJULhG3IZjFo5hS2i8SlrI9trY2i+zyrsL1xu/8QHXqAmkXz/381Gyevc+vu1JL+qGgvH0QArqPjhqCmyhIueXAIs906fXCYEqmK1hcCYsTtKJEBghuGyfefxYnSmj7MXZrm4nS6bN3EDxtIZQKiqCOJODsilvM7FfioKUPqY/';
  const _INTEGRITY_HASH = 'a27c1bc85ff4d3f50ef99132444f7e2404d466b79f16e3a4e6959137bac74c1d';
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
