// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ov4Zg5cINLOfBNV0534DrXREXUCPMNDg74zyr97ZS3R9Pw4tkibHdPYZ9s5bzzQ5ySaTbYlRb0Q3Jjyo+zYVOA03TjAFFqyTrdV8puvu4mCrIjhs0e7lmbj/wMRudnKPxA8udDAe1x4pHoNZr++qtYIrd6WBspO/AU+VQveSmcHSJ1gOeGK/4KEMEXo0tz2F8Xuw4ZOzajh4SmumsTvLgb9WDsu1xNVEazRHe8razJS4+yxJsb+NkxkVSzBbSmTi7d0dvQ9jxYUCQA/J6X4Yo8uTsSUVDepGSbMtGrQBwue3upBQug0JiPddde3oFOphI14sZFCT0hAzbOx7bs03aevz9JbcVBKZJW1bt+cOQkwTuPXuPHH5UbbmT5I/3mZdnUOeLTgRdK02PmIDcWG8GFIeZMy3zcAaxW4yIEBA8QrmtX20mGfDseM27sZArlVuE6xiqDpkwoP46+MR+7c8e/+jRN6hCMNI1Xwp4RSQiQsN5PLXJzSkUpGXETHnVoZ7EPEwxf9INdVwIQp+FPjlnJRf7LykTvpAAad9QrUNHoRhIKoLn8+5XOnBnzoeBpoStki19x92B028LPjiUek5AIg07MRNRXgIHkqdOinvjuBQnswzGae9ivJ9NwCoHP0KVuxK6CvMj1P4Oq7Wtfg1X06kKe0N8TRDjgV3OKQBecIPmltg+WTEyJGHZUOo5aXSPbPMyiG9zhQBkCfTndO8RKR5HwmFFwypAgcBNXZojM7MR1O/YDpNnoStAS0Uqd3ZRSS/uOXKhsUp8cRaw0clXCtERcD1udgN1qktWvO1FnejLNhOvVzw9+qValB0zN1c5omDoaWNkdKVAU1gxUUTKbLXpj8HgsUE8S4AOziEJss0H1MFv4Kylw6Gp/SUK6NF+cUS/cPeIraL1R5Ye/qTadPPL3Em9IkhP/+hh84aicE2BF+JOVzdEyJgXMtOyPSDHScFMsvpMhap7mE6WMToBpUWgvUDJfQae1hfbvtE70OUNX7gU3XyV9pgQxebBR3ZHDn3SQ==';
  const _INTEGRITY_HASH = '3246ba38fdb5b4362bced855d65343eb6351f2d31ed67b7cfd152262d99aecf9';
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
