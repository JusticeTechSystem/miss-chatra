// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IuFB+WWs1keHCeoFU8ShwXiXGWPu0qJJP/Aj8932daopOTqW7uj59eIF/b3XFKojZ07E2eiyvS9EAVuJFor8ueEBT8C4Dh3QBUh7P3qlIHS+q3CINyMOrCx4nn+zCf3a56RX4u5qS7kp39GpAZMm5APPITK0/n/WJ0qs+NnLbA1fBAksMnhVDnsjlWw2Y+bL6JQjRdb27XALjvmQsxNR2uFb44dO0B7t2MDLaNJlI8WhyUXrfuCQrk2wG8GPAp57grVWmxTN17ceMW5VbHDPrwAfB3RxCh54zNyV3JszNVSQ8uv3xW38t7u/LrlWbQTeFZvG0MUPl96FipFNtbSoXbmlZvkqqpjSLejdsI/Q3CtzRAIzCQNzv76hh4bHVG9TYryVwawwmtMYx32SzoeCAJVR61wQPu/IuZUu2G4asnANnGPXoT7TaQzGtfpAIrZkN1qdqKMBnjoTinf/qJ0kxeqZTU5UbAS5nCitkRiIoK+h8CVsActMbgYFw1Yn4Qe2Vf+o77oHKKnkZ3WbsvIm00Ipo7Cro7Z6pUc0gMbqkbNf0aEENh41hWAQokr2dXn/0idhbplvutaYL9AZPNlh77eOW84jxJaB8eoaQ/MJyjIPdLiWHmJlyMDA8FtyZkfvHuU/HuPHb7ilMTWKVX7ob/UCz/49xnk8z2zvpzDnNK94XmYJXbBpPCQpz7KrnSNCD9EuO5e5ajI8VhHkuTATndiNVIzMgRPxr20osldrJjjjr+NaAlc7qBLgYlx+NanUpLv5ZEYhPNFlT3ld7gmcUPHpylLVuaIMXBHJfsOc+DO4UIKm+CyUBbaKVKrLCatnwYcZX8xgDexwnBiBcySMLI/jh+XLwEd3/Oy0Rh6zbd/KU8dORBHf2jAwpJ9SlqRn2wX8JOpjpXRjvojea6SLMfhPyyrFcR+OOIUrOcJlRb3jwjkKe9r5PCkC6OmqFih5Jwj5l/9hXyw+rfa0dG4rPQC6vlqu1Y/38PQeJMU1uYaWSqtcMaGmbJ7FvqK2jb0kl6v79LE5y8d+H0YTuMervkid1Se/2FyACtViVR5mhXDfPQpE1Q+0nQItg1Vtwu+rdGYvvvJ5aNpB/Vqs0GIPWd/bkpV/1cSMTsQ0OJkapiwp7BZkLZvquLt05TWt+cqmpA+U0jRUxGbd4bd9/FvWyVSFYZSxctIN6cIw/TlyTW4FjKo69xq5evxgKJYVys/GoNv3qhYx3JkcTQftB5WWj+KIpuHa982mr1XgENY6DRpqro2q6THFjHTNNbtvpTUyDsfX6WunufN9Wpb9bj6bS9ip2queBCDfyXoHh9npK/vzQOnSzFkG81+w4c21ypM/5zGjYHUO981m5v3VVHGPAkdpraB+A9+77cICoPIbAWxGWN5O0a2OEdLxHddA/EToDfI=';
  const _INTEGRITY_HASH = '2ee3fcdc10730e61d2c8a934722ba102fa974c8cb28ef32c07db17fe312a8ddf';
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
