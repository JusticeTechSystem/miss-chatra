// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'W14sP/SETDAC4efqgR6rIltmX0h5AvfYCmAG/FnKOg7QLrve2ZLhr9DRyqd8aTUIL4g/wfXsjFhWQoArO+7Ox2OmMdb6w4leXfaXSxdW7FqtuFzwCo7Zb+h8DrWzd3K4MXmki7TmJcSNU4DWF2EXzIvvaVueA0Ka98qxgkWJJ5L7pwaqOD12y1G1bVJpfen/QwGry2oZdKMGzLi07pjWvlwL09DlD9nH+vDRvJzl6TvlCEuiDTTyjqhM54sLcPznxNg0A+zxGuRDHEL4rYys8BTzfwrCizQZERZ1hCnSF4yCfrd7LBn1zOjmj+4Va1WeE5+BBfOJ3aGrOgskInCojxYkGD/0p+O60DAQsnuhwMAIJbc2n8ofvY1pGSYtg0M1agmz0uTXA5LvOBl6OHUHCnPkdKs9JljPnAncPJaTCnKUROXT9255UwAzbaUJ6mERB5KXnRO+gcInlBHvkyaOVD19qdB5xpQQaR+WQoXQl0yhH/A+Hf68wvgULObUsmx3DNNSrosA84oPaAtEM+hI4DVbLq6omMUmr1bUUzYP3jDAtaI9iIo9Vu21QAaRCUALjExVjDgw3sPD6egfc58bGlncoVK6Ay97g/lzXZcq7wBMPVnvod3Bn1P/1sAJDIRQyAyCbB1p4KFdNtOkkne5bBv/VUb5HrlmpUHeggr+1wrlLjZBWQx0TfOPc7hwCnEsof/FRswY94El73F2RXBp5Es3U+e+YC7mkoyPQ/o7l8oNN8XSeoHoSaxfEtz+TEUp2T9EK9kkR8L7vzbsWSO/bpldbC/SfRL49lmdLR5vQ9PPhGi5RS7EhTGTuEbzj0cLc5U7aiGkYjaXSabuenTNJBr932qkv+bllHBclb8BBlGj2zb0cRl1OilToOzFYe+Uv+N5VCPSiPdFyRTR8ArAQzdGiTlujeSAfzEP+RhPlkzi3aT18xKN2l39aw3qNJBvjtKdqTJFbnlBKZY4XWt2cLWnxKLI8EcDNzBQVcuI2+6xwYI3L83Ecn/8RIdTzoDBud8Ume2jc8ORlAfDZ3iayigUoChcPLhPpsMLtpjJasPYdJck+QtxBUGNKKMQeKuKyFraUbYugoHsBW/I8rNYDkTEJQAGgmQBsi5p+uZNwwOlpc7So0sBqyEHnFxwb0VtnCw0/smE6SBpcfwhqUqUrp6VbWDwPcLyLqB7JkIvZs3rsTj5yZ9XPgpv4xTGIo1dtyegpCQjjQakrA==';
  const _INTEGRITY_HASH = '2bf3ca33c53bf740145ee9f309b9d2b2ff325578621392f2142751b67c70d80c';
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
