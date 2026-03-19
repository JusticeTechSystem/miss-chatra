// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '03iaLMIwbIxWW01X6LqWezB/o57z45Yzu3hVYgpuklKONuB7V86anqycSvpBsABivxJP7xXAMq6DEvEOJp6g3iFvLh+cFVqQzly95yC0FsfB4FjFg7CUUYAA7U2VetHaoNt9tRME8/rxDCvvQh2WL2pocd7YEiaMtLc1ifBPHfRX8iNd6+bMeBnTHoCr0TMXcK+RAOJXM6JLNfEhBXLHxa1joBs5foYhJTArqdFtJ7KlzV8hFr5HZlYO0AfKGkj3b4Arc1kjPmcFyNhhlhPHW3abADzuOLHT1mWcavUTxnD7teYT/gjszpGCMdcXAop0wIwpNnXX6Uo52b45Ei9dsZNnbFLAM0pbWcJW9e1qV02GKxwqNsAC7uDSr3xM1O+xVotYhdyHvtX4u26izgPUz9f7lLUD7mkvMjDDZQ0ypunovWLEtaQqbEgHLwaN0wlRwPcSqb29LVq9H6AlAVbmuh6XBNzOYLGL4bHZ3UktkX00kGLCHWALqUnC5+hsFIYlckDCwZSUi2CMk8GjQL/EB5dSsHrQlekFxb9Tx/ViC1KoX2pT49jDvIcJb/HT6VESCNvEjsVZ49tydeVdaw2OPr1YaLWU+n4ug3VwrzZWFMGYVOqmU9wh5GPHSOn1JO5gWqrHbz/P2LBgKhdsHZYSztgWewmBTLcejS7o8k3+X2Z5xkYG3ilMHSkv1YO2YGzz9Etv0mqcJR1pXVOGMhF2nBeyzQ7iz72SrKfeu8cv/dY5DQ==';
  const _INTEGRITY_HASH = '53db42e33a1b8d268bece9aa9872eecc8344de8d5ca2ce5ad039b30a96ea46fa';
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
