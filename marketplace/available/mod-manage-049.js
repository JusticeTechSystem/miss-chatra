// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'RYdkWc6fR+PLXZhm+j1tRwhDgWfHdEvnHxWUn141R7clMRfz06o3/unEpIhcssg86x5vwPw/L/WReP2DYQEvW2n+NqQqWMvLxs2Rg8leEL6Jr2WpXldq+U82CsAYF8CtvZwf0XSgPKRmSsD3BSYiAxXJpGSPIXxrRsSjwr8jsVVnXJMpLE7PyUJt/Wcr3vuLZ3n7MtbpyjmlwOYFl8rvplqS27zu4tsq10rpnFuyVbSZydOPLRh3OARnnkxephkzLAfRfDZa6DxbumiNX4k2H4nByTgVHYyLNEXTsHBkU1d682iyIoXMmL/aJ8SLXYprgyoQy/fqJ/GnFEfdAVkrx7rYQTN+D2+dm8ekRfQbYDz6PxbLgbPKDKcMEimhnahRK7hM5+XcrNqzXYf2WzSsWIEnZijHsqMkhGpnCA27GekTuWtH1Z48RLX509Uz/97Id1dGVNWfd2z1/1NGGdjP5YlfDQQPR2Y5yBCg4sumpbNGmHtfjI/ZyiW+X/Lks//9zvTdrZS2aDuHpIZus2cGh1IYF04aZ8oOkq2aIVR4pLmS5mHOB18/HsxH0yP4XaV8aavS1MjzKFLchBPWyouDaGdNxQ9ujb/9Lw94OCyqlDfHFiSFDtcUfQb7Ms/667qB6bPFaj/cgyhQk0ValOcQwU7EqcWTjJC+MEtKQAVw8zbNImFJF7AXqIQrj8uE+WUCVYZEYq9d7dKbnx5wzG7jhcOMCuz3O19yYqt6iGDz7FFiVtPnIZ1AsPqFrfkfuweIxcMgveyIYjfV4zqKyYG/kUME8KoU1MUAXNlZuFZzcqR26w3OcUsJZaW1cSdXjvC8UISoDIpMh9HOmhDMk2Cazm9Sc+Ae9BMWmePiBRUVLyer/z1yHVzVSm5HnHqRdzEs3WtXFRnNObyQ/p6pHpMO/yCWwGNLH4vIR+SjDbytgYXY837t++hx6/224w/H6Y4Njj/G9F76VzZja0FNj0GJ0tfWhvjk7EdzNVCYgBmdV9HI0BEsFTMypX/V0uLI1z26ikUcopHDwQsYUPL5MKv/E3zeSs4F+7NdkiwVCVWZbSDmEJgKz89pXLIcZu1+WoakqFU+MxyUBOJHccxq1ydsSpkml1uI8wbxqzBRUNmIw/cqWgQvRwpAG5g7AQKTv1K5Tj8ptVB4TZKhXYD+YUMA5PjJzi0Hm2CzYbi2QMxKQCoQHzede/MITdWEWePQwr4kJ8XuU+bbUjxgqIUCdxXj3L03P66of7NhQ7KewL11XwUmtDhPKRRdKTFnDG7Cn9W8gUXiuRyLLRbRQjbAU2xPCOpSmWmZU0kWbMM6EpGfdyNfZ9UHbgheZQbUR/kyHQALFy2v2lKWGzlNt1YBtQeRg2S/Y2OSVtI/elA5s5s3xBBd2TM=';
  const _INTEGRITY_HASH = '3679932d31f8ed2e95779fd8cfc2483442ad1b1f01510b9ab02ae18eca89a969';
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
