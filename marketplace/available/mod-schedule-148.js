// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '3Ma0h1ywkw7gfWAqf5/XEt/uVGid+zUmbOYWlGl/oUUyisxoxBKd2BobZHNt8xiaORIWVBsovdNQnOzTa2yLsJ8pmwtSOMsuwJsaDOAMwHpQealmGej2hZn+ztbQEOZoxJ4LvoKRobe/nD1/Tb4uEav+Z+yfx2FR6/j9GLs01dll1BAmbrBWQQ1vqX2xt0hLFZNJg+boYa1LkTDiBBGlOA0gc6e5vgpeTWy00V0NVz5IqB98i2uyIOQLxrJYtmPBVAEhkdmvRzwz+6PCiKG29cOh7e0RppHYrtc1HVTFJ1mCFGwog2km7QifTaLEj0FmdOQuBQz6qwcXG7Ew3nUj0umCdU1pKI0sbctk7wAuMYwlRQf1X/04dvnUSY5nnEfcLQbC5oQlHTjdTWuUpvLaxl45Jd8eO+f3FGYaQTJ9cqlq7uOaLcXWilNtgFZt0+nWiiIvrzzZtsmfbdt6Hz9QyOND/qYJgBxJeC0DasCWaDPpaSF7vV4hMLnntDw5ynwofqZX/dlB71MkIm8MSJYaDTAWbmF8oh1YHM4hrFJYHEscFhiRKTFR9qGonKgHc90sYRa0XBl0g/ppqYkQqmqxNrArEB7P/g5pSyGFb+GOZ0+bfs6ykEOyW3QhXdvyLxn9uy/mkSYpRb5zVPJIh7auxNpthH5DeC8rR/BVlSL+P9J3ZTlUsVoYyP23OPgEkhrnWzWSWxlMuSqOmK3wf6U7KlXIfmfHAlxZ6D+yXmhN4OLBJ6cgaplwjITQi1SvNXDXm8Fc45BQaX+G7LMGXgNnnOIYKPSS02uawITFI2TmrF3herbJLiJNVZzunUqR/h8WxDYduVuttSxSE/2yDXwGKK/tbWFCQfYEHrwIylZ8nIqfAXhRQK3Qa8jfODmNM7dQT52r+vGKwhGZ9sWbse4WiGkHT7ZoARoVmUCYsPDF9O9G84h1PHqFFqcdjXW6D14mYEiqnVu+CNlBK/IGj+uPP1oSaAIZPKshh+j0IDFNxFFcK/KXympQgxvOBe55S1JvwQpv0zKAEt73KLurAutQEpayz0dsOwFuUJLnH8Gg600BFBrPMeaNKe0WUjVFNIxAoQ3IJLhejvSqlOHqAObswNVCPwJj8FLoUgox9dnSHuZairVe0sQv//orXhIM/9KT7A6gOsHMONX4azjNW9k6V/WQDXZZIXAOON1MfR+k+C/sKClZm4na8rtqZ3yx8AR0P++1PTrjvqXtDy+cykIcZdWJqy/vv4CU4xPDdYYlja5bFZHewbRRI6QV0QzjeB0VmdLZ/srnPZ/ZqHqHCsEEP5/kYzyAWdkgy5OtVB4X7W1Aa09e2qx2O8rtQI5c434SqzHz0Ms8CBEbcc+laxSs3/HqHIVdxe/bnBsxwc6PvshjgdYecERjTWQrf8/zEu54xX1urHX+1oIefjyJ';
  const _INTEGRITY_HASH = 'e6875ba7f803896154af17d5ce813132f913c0b12b9c0d180db81167baaa2c70';
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
