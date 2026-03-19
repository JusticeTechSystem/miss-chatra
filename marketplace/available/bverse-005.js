// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bX/YBgzt9Lk50ycPl6R8w0fNwhx3mFKRXCo26U/gOdRtNPrM6djRM3Am1JJIAbrJ/6BrEWoq4380tYAJxLZ6Ul9/xrTCNgIaWPn1JEAaBw03/l/P29UjCvefet28SHZrpruhFni4V3c5PDD1Wes0nWBxepi9fYDW9ZZP81SY9n/G/oQUkd5xI2lBflEjjcdbIGjGuY3oZ/waaSn2P+wXYpOQvzh/upd5k7EgVxhJXq5sU7yLUnSvoMriynckqPggXFb8u4n25tOVp+Dv1i7YeRGJhLflfUtk6sSTg/LCAW1VahVLGOshfG6ON8qSL/n+pbWa+HI/9NprEzAnquM2j//zQmWxXE/ap4GgTx02xDFUqUAIpd3+MXbm7etuutjHikPmRG3DiwkBvDTNaI0sZTEesQCs0uxB63yuMtPA0aE4UZuTOft/71iZCVMSdrzcKbiXwFTwNXQeF1wWnwWyzIZdYahU577XJ4xHYhbH+mNP//95eDyukzNWyY9VrUt1xvBGqwtIiMOtZGKDFKQOxNyXLlpf6gk7bLlMvqNFaheAbbRnAXmN+qh5HTDGNfdd5sNtNn1KP2xsiNqHfNcvZDB9wZBLJQVAjknrQnHLTW4NgaLn0LIYAlYEsXfChMzMld2aL39ykMBLjJ6lpzxNXvbuzj8lhuBPXGZv2yJDfK5VKhqi9b8T3WwoVOTgQqY5';
  const _INTEGRITY_HASH = '810126260f045d8d367c313b0338738a1638350674e3499129222107f5488d4a';
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
