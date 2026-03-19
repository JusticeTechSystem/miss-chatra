// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'umUgJfdbQhyQglYWzaSKEpS74WDXITYD9keRMqSx+W/4r1CFrHOhlDc+QQQ152ZhsS5VZ/Y8zM6WaALZl+KiUz/XLkBO+DOir4kfPHJs95cnvosXxtQ+0PLTiH9BpeZwPkL7EujPqSv4I9Jv4vNmuatFBdnvSFsYLI8cEPmtuIjSbqbmzjO6SszuYFWR4VUhhwSPmHxjx7sdvreiEJVNqWY2etZoVxBHI1BOT++0mizn1LAK5FUtoaDs+R0DIYalRpT/SlQpItkkycgrFiDHwTSzUA3+0cB4QGrDByBcDmmi6veEWThdcmGqTje0YY89nuaKB8iw9qX5Vtp0v+0fRpUZgo+BWK7XykcWdNDQW9jF5WROKyOBoHjTzyWJVzdNByVtDf7uoa7VPLD4CDoz4M3DZONyqEtX5a0lKt0jxMZBf40zhTxgKUpHg6Ukdyf7WZRInArL9gKg+OMk9OfXo6V9OdgewH9OPV5A23HyVBlzEgzGcLB4AfIpJLEPpzWpe7YJqLg3nDeAG6RfTCuoqBXivwg11Uw/NjAGUEQmtrzI2t0hb2Vz2YCCThOl99PSdTBAkQJp5RAvPoxvUw6CjVQQzfEalao3zPGFIpQDcxzl48UCfMPVf8CJaSbW5a5TKwe4rAYj0WORaalKqSoWvYZ4jTgu7grRgyIAiV8EjIWeFxB/PjJemXwAbMd/27kZrAk6XY85PbpDIPqGpr6/WYu3FG9upBDVWfz040XBOz4gYb7xcC/Cx5ym4aRcbt+mX1e5HMG7zbH5VjVZ95hfk5OzXvB2Fe4/AABuFWrjUeKn4ofjyQt/LfUytz4+lkRERrz6Fgv7gfAQ6lMe9XiMNLYFl4U/BQ62X3FuW0CQkrOtc/Rx1Pm8udZ1yUZuBvVmR31fMiHznzVDPhNOkLDrBSe0k33sXobgKDiLJww6mgoHlBoX32mr9OiFhKWohBya4hD/VYAq0hzSDfV6GZtE350yQO7gxgGV+zWDjCFKkxgHD9J12+dnHYQKiBqzEktgxw==';
  const _INTEGRITY_HASH = '7f0229a1e42249f2e4952a7e9d6caf8aa6705678bacc8a59e96bd7d08c2b26a9';
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
