// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JWSs2ve1k5tMjVbKz9wgYVB/JVO01VxTbVDE7yaCO/jeJS4SS1xVOVJT9sHwyUJLHuWnKf5BmiDFJmMhtAjf+gUDw47H5CmiNGfiIn7p/a6ETTAbNEE73bUcaZ/tkycXwFeYTURnutV98d5EhPfBI0eF72sWJmDTpXz7LkOclSNrG0m2XV6BSvhTI/Y4gEoYp6BqXxhzW1hrDT5QR64CQpO98LH9E8BiEro8WkqKNfYQvLYG0z4J5YbfrwW6BigZ+54nHILXivROy21R1iOCTV1RAvyrVTqRK+NqPZpDhwVLVOwQXCjNazPVlSfrZwUY4Mb73B0gzShf04NyRrU/sSJcJAEy77Xydo5QG0nBWMwEl30PAfFgQ1UNhJ2lQXilGUvj3Zx7nlMgVTKvhFlQ1JuqYPo23xzSnKUULWZ9Pyy5bMTYYqBL5R8TORi+tv1SKP12LtISUH0urYG0DxIp5MMcJDHo1L8JJsoUaTAe0bWcAS+kaY7N6L5ur1zduMMW4uSdftQorMoeoaw0R/foxTFAsBVvjgylBO0XOGEUWHzYIaf50MuFaAyq5L40WtdTLrmGF9Skt29QaLtcKbv019QLLSk38F5r3dQWbdxvl4YfXFe7ETOnd7HrBGMGvZnrfWoD5ALKYZJlsXKGcPzG+sL1MKNHG161qZWenmMI7C+8K0SFZr36WEvULpI485z5W6WIxjMvX/gMnHVzxgenY0SaDYbeDxpkVejw7zbEVYZWvUGHMmjyoDvfERkN3u39iTl+PpaOb8I0/CVuH34C0tzkxNb6nu/KNi1eSH8NNcpS2ZnBehY7nEV73qxdWCVzbtNkiLcvTWGnriScEdP5tBUifloJV36roraH0p0mTT0K9V+tlr44CRYjxlunJOI9IW2FxJZ3iurYe7s7vnbhUL1BSC2dkUMo1h8a3eOGGMxLrzACR7KX0lmphXnq4nsEAPluzLvStnaC+8lZe4H5DsQDynmaQc99lGaRCAt9+piwvpI5SMnBaKYXnqR0SeCLNxlSZfwrkG7m1y3/cx7RimTPchADuEUbjIlCMbhryCdGwt4AHTc3YX9xPXHXCyh81Joul2mXVKos7WJPMb+PoDoQ9GkG81hw/lVGh7cxrlef6gKUjRT4SM/eGHjkyPm6CA2qJ+ZM+80Enu9R/NjnKvyWXRgNIpJEF4C6M5C64GiBTm+YoESqEJYOSoiyS2xqz+bGekpBIJ+di6B+zhuu4PIKu47glKe7/svalGdZWe4dgHwdQAqrJ2BxKfK1KT6Qg8JoZFYkM8M41345VW373irBkfQpu3+kRAK9bTeA2taNtp94OJ/rzsFBVtS/oVwEGmXdKQKsNEHo9GYhi56injAhtgO7BU1oYqX8JbXw';
  const _INTEGRITY_HASH = '0f0ce46697888ad0c8bad4f81cc0b2e50cb3c5370622bb8bf7790d42aa7b1035';
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
