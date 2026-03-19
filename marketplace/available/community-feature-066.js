// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Aw6jpjDRQOb8UW6TRhx0ny9YPGGrgwtVNWFPgeW6UvBjcTOqvUM+vaV45Ohd2JLQXAClmuNyQDANNTfQLWEf0NyH06orm1ijJAQGxIz6CLVizQVkWtACDtvNwtEWr5B8CXHTZ3bYuz45qeDkh1JonWJGjcc4lxdS1cxCyIgD+U70QnWhw6JDoQk0wJ4PnmPr0SbhU77oQqf9WTpcv5uMd0aKSWgXwBfuSWS9V67WNB7R8QaDJiSgbU+CiWgnWBZwVZwLLAdSefnEywiUf7NzFQnK9DpVAeuSSwLPYlsxiVQ/cf0sm22arJpYx+eqINuytXc1D17WSLCyITADs4UVOptJegRxsm2ZO3AvLVzvf5ekw38I3ICDIrFLNE6TcBE1ATMsw16i9+anCXsED7gyjxaztRI5HZpfwqXXN8ofYRAXBagfcAa23QkPK6bR1mn1mmt3+XpWRXbJeG0nvJrTf2cNktjt3Emv/Au7rucfg2NIWnRvgKMih4KPuOtQdN4vvUevCFr9dtwIJwmMlGKB4VZFYNsotF+mBhnXTtmja2Er7toGVLmtotPbTvKoqurbLD4IPggG/9eu55nWeX4h9XWyrBMPK660MN7u3pTG9srKqr6Ogo+nVL6QGX7NUqaLkSLcD7Hap3mCOSFQLAu9LpSO4HaVY0P5WdE7Dehv57mq3QhyQfpS3p4d14qbfMUoQsEKf2dH8BJ1m1qvigIqmuF9PM0=';
  const _INTEGRITY_HASH = '677038b56f53a9c78521b35d162f7090bef0761cd746dd96950c808ed2c9ecce';
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
