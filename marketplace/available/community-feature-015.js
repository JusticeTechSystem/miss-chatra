// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nKNXJN9X2iblf5zV5In70MB+Vkr8q53BaidZM+2hN0gbOpwRGJNUnQKfvOE0th+St+Ta3dayATwX3FU51iQv5YhZyTQ1gmWqZ0JetKsXCvWYgI+jtQHpx15y3T3M4nUGtPUPqztXO7AF54zSKw8bDTf9rDcMkk6ofE99Z2WtwRNq18dRpTRcxvufOM87mbtxy/CxdT67YILc49NoSX0GQmP9eIekuwP/OuSK8vKXNzTtXFwSp94wvmBBwe6cJkzBffEWn3cAa1gV//bxtr2Qzrq+FKItQOqxvxnu82GYyweyltJoi+P5JSMTrNJ2DMH0FPl9yCexQrhQbWsNbdlpgTFzwLB5JAP7yzDhcQ24XO/ZnXsab6GsHBejKofhlgE0mTZHi4kk1vlHg87D/+l4HY9g7bHQ6Ni0J86tXhTCYqKIPet1u4xLQGPQ0vt1rTsGpQhrchZI6BbzAE9Y5e5OvIZ35SMtyEKcHQ1AsZp6Qc8KIl6ljuhrSy02GEmDVSsVyyZ9TQTTQOadDRlIrs5Dlfr1pFTDjRcXdNbAE+QeNn+CJlFKQMp89RmNns0NevuMO/Sx7i2lN4d23xKkL+sTGggRavDLbePaRhHUpyzFkPraUx2Tg5WdVNkjbzv1q1Zri7izfHfSj/d1bDTD8nDoQEV5YMPy3imL7DUt6R/agJ8UmbL+ydKLv25jPm86wfPwALxobzyV8V9q4OXAj0VxgQRYL1+46Am4FglB6P9JDEAkQVt6n7E=';
  const _INTEGRITY_HASH = '5049a5689cb8c235a2ecfc6aa3379120a41979ff339ddd687c2adf5f5709788a';
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
