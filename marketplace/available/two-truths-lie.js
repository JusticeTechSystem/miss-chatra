// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lQ74qTfgyv3AyqH9AEdLKgrq5tQZv/BLcK/sdgDOEylyJ6lupfp+Ows2c46ryGFqAt4i35StRU9rRUv51qIIkmVQXGCUi0QVMRkkPht2rW+2eiRSHe5usQqZNwhVZKVm7P6fSuBySQQpu1JKZL1vqm8NhdTqVJ19Pmv/sQlF2xXowGZlW+viu4mSfLCRaGh3XQT9eoovrZd8RTdEUIRJkj822eMPN1dkuXSLuVdCoNyl59ZfeMMhKDuEMeB9M2G6B8k7X71jzziELvorUZt297J+vaQtFT/nbUxeE0AvnyBuQLhUyyvsFQDv270QNArfyJEMGQXrozJ+n9xEwnJFKyRtyOtMsPKG9/29t609bpveA4t7xsXgZ5G/cSgp0VTX+aYR3ZX2nSLMeH3o3T15Nm117fKoG35T6ts3zDeAXPawfIx5wTh7uCBVMCVVTWcNxC5rqDNo2zPcPNA+1z+sRIDphfSfGjJLZWGm1z8PmqFRqXt6ofVoBMAvF6x0aTT/ioswBUZlc5G3N1UETbjEZ/zxep14Gjg2/iP2Osg9QWcjFMW/amcv6uUu0bssKkeWJBBdOk4ztEJ/w4Weo80BoeX/JhpsfqqMLvVQK+KyfUid4wPS+/pl97LQnjXLStJm2nUyc+X2nQ5Z7RHGGY/8oHDteFpxjEd/P2Kqu7sIuPSUvRpvolouchuWM21yN/5VeIeeHrhnjt3aeDWukjkIaVhZGUqnxniLKQ8CXcNUff/HVF1LP2KIz3UPxdvq7Mem8RhcH4d0rlVLIVFzyLnXTsZ4zKKxaIw8z9h97TUIt8guRA8Ti29OReJWIkupD8M9oLURCWim9mOBfUQNXxHslSLSD/J+Owy0JnjeoWt3RSnSBgCgXoAvZ4LdsnGn3tzqppmghR68NCmAcc2/0C2yk++CNH6BaA8co8GPIanh8Hc7pH3qTkGbk7D5Ob93jPDUacdUQKSbMT6otKK2tj1jYNG5fEJrlZ+osEzNUSe2PIBttUDF6k/7AM8txae45mlNO5/JTNqzApitalp4lVJvXsQna0FvxiGzjl102i+JTH3MlEUp9ybr2Rmnh0G+NThjkzElANxcRWgjIz9fi4pSJfgnGj06W7TN+aaa0EwAqIg1d0UzDKyfIfSMdtBuq0o6aN54/wGCxjzBA6WklX/Cg1bnVtR9ntk/CHobjiKo2tr/JXejja/9p2IbCwRrY3EJr7Bho1WaK9tYH+Zm7PrCH8tWr429AHm4tfV184Thi1THbweazLBw/SC47gxLJeH1NQsrxRrEFHBTAJClLHN4jErwSXYpF5sxes7n9ogRppbWuQMn+o/8oNGCjh8P3nP8/bxVw+MekKjCOkJSA9QAveMyAW1293QnUJVmnwfoLgk1W+MLY6prZ90gawaLOxOqCQfgpAmtwa+ct1GMr6tzIqD4jX9MrnXkEwFNQTM3fACmwcRbUUjRZ9zIDY+YpsqaHWH26g==';
  const _INTEGRITY_HASH = 'b9308abaa6794734d7aede82841d13af10015733a20a2e7e559632d1bb2bc674';
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
