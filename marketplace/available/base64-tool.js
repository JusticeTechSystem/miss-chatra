// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TQUymPuRQcJ5FK4jT98WWkHxDVRIYpoGvVFWU0oSG0kyuuTQvuoZCcg3Cbvaogb1jqesObnvyLohFA3hBIbmVwlFFw7GJkWU7VZyV4LDxpeo0QJhZPSDw5/Esl8feP5lw+XHz12Fz/U7GtTYhX3Nsvi1MWFyH5TFjMWikMsUABL5srHApxkInIuVp0J4pPJG3aSiihZNzC+yg1EHnWh19I69u48MbH7lew1irMoQ2uh7nheHk51znwSRKR94LV5JaZqvB9+GUP9ioPjtEwbSEtKc6/O8t+74Il+mNChwEerhPTXOUj0SHDlP4tP5jZLmM8TGPvW0jh8+d2XXTwAN41pY1/AaVcJpdAzRAbcMSz4z9t2HGo+7kGjvtiwXPkdT+OuPBZHpz79wrzpuLg4AOlaHV4IeBodSmXrvX79cmPOZJUQuvl7nz5cNcWFLyFanY51nJ5zYK1OFaJPprz3Of0QR4nTWBEWNCts3TBO8PI/pw1Imomwtmf1bhoFRWtdQ/OY+Aix1CX9wkOQmP4umqLiYbLhN73ISHpyOQ8q2rVoVW6VILl+PNhTw+lF6korwPppw0gX4Z5ykUoEd+G2Wg+gPPrOZJL9SB5MpJQx0VfGbpOnixoqmeLLD5Z9icknBJ0//8LppUrPhcaj/jM2s/G99lUzGc1wZtcjyYC+IDUH0l6VLqpw12o+B3blQaGpli6N9ALo3jtN6Mvm+Xxug+boQbGUKSnyflzNusboXGjA6lxJzmucfYSfllAEkF2IIXLz5z9kSjKAjRh0IzhVfUxE1ENQlb3BIVs2IewKgR6LBtpwSlBiAUytgW3bG+ywUUMyU9ZGnZY8aKQWfdB8pihyEaee58mV1dma3TNpjRykiYHN1hqjpMZQ09/hn8vlQc/9WvjUdvbCi7pbxjLwHA5kGOkJySxUwOhzuCyMOg2oWeWcjAQSnOTTjyQ7saXzh9Qtnxj6HKAPCG6WNwVKAczNBKfCr4CvcTqMSYv6q/7f5QGDYUB+BioCGZ57TAhI5jcXiG/QMr1CDOfYXCoDMhHj/QkR3t5hQzos5QvdpI6B90vW+NO7Mi1p3ilmRFwVO/vwgqzfzv5h19BHFzVJRleBd+IvNhyK6YUSgKJrbaVDU8hvejPWXL2q7tQo7VqzcKjFSS7EFSH0oj420pgoP/wg4ClQeJfSHfKsgcACsjIebPelEiH/oW2mpZiZKNDCIPI6r2RxCSOKmG+aWsSJMNew1NIJG7BSIhvhr9PX+YUb4dFYBrro40i48JiBw2CDGAwY2hEQSY4CJQq59WR6De9YIXL/gzVCsY56Y/StiFp9BwCDY3xPoji1fly/xZQ5XYYWVzJsy0tHn5uC3Fabi9MpIuabqIYWjkQ1H9qvzEJTJTHsgc/8uNdbqGS73Maf2qreMUZ0h3Po5laTyAg5f+tE/WYG2j5KIGM4X2BaKvOSrZ1iymb8YkSj69w1A92ZEATLM6tdIRMB37rDW00p3DwCPbkfGl7e2gDOQ4B/8H8gl3eP0Jq5rkXW7mNa4mVPOYxnGgc+seeANSw1C1bb0QPFV3SKyO6oHygembg==';
  const _INTEGRITY_HASH = '6c6c8de571b9194a875b663f0ec78ce159033b6842fc875525a2e7fe66778e5f';
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
