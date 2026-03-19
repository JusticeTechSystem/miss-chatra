// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Wu7GyFAlet/UgcItSkZ/+X5KPnIuiFXgiFQKY3PMqGomqMZiqYLFXIeZKz4CeYglwEvpqh/OtGXlxWI1q4NW+0REe1hMlJQHn4fiuo8MRuxRbC5xw6q34bzYFUAJrAWeE85c13iatzLCGFEwtk7e10xNGr0X46Jid57Imx0Yb9u5gqGFDrsChngDq3vzWja5n8Vo26Agp6eW8UOfzt6U//0z3j+gmRozAWaZknFTCyJUUbodvejWulhrMWr2MCggXa/9lKcdHs//AbsxpegkbcIMVXfQIPHUlUfbEhodpaBF5aC//4jmiHGzOWGTIUfeaXKAUOTTG3TwbKd5DLyHLmw2MZA0/bkFvpQ5Ym0fATxEujX/gNR1hKZg7U9rAdrSW9EjOxUYSCVBInq2z84ParwI8mSbfA9i2z4bH5QHLwrH/sm43jY8NOYNm4ZDIn7dR6OD0od/cduALg3TCW0cfdEig7L2lX//twH6u4wtZKVeeZwIuMatZGZfvdzhY+yLoTJTNKBtI16dhee6aTCWz4h8YIOja35nNlIvKT9N5EhR+5WMv++sizXcOx0+VGnkuVoK+3Qrs7gxg1SRW06dmUt7Fl4Bi7cO8ey/Yemz6HDr4OY97lN9sCKgHLYTncIYgFbydl/Cjgir3vxJ9EGq17GMlsZP8wUJdwOJn5JVoNuwu8il08dLhaV9T01FsTPonF7eGy6PSI2wpbrXqut2y9PaMvEXa/zErN//u9gVmhUk3Ysru4M58OVnh139V5inL/vXEPiPG48+aj7M2u6GGIHzYaSs6OMCMDBWwbGbW71/eLBiRl9mp0fHr97ulxYwwrNw71zTyk6XmN0lyTZBmk7Y3qNsM10zXpznsbFpfVlz8qLgai13SrjOMIr9aBzHGiU0mlnRebPHE9MGIB3FPgzkdC+MdXeo4bjx2qKg+yMaMl54Qr/CE6KZngSyi2hbZBkEGWMmSkTnJ0vbFTggchdaysa+louuYiW0CRzq3+yVbE0nw0An3YPRFTLIwYXheZjwaBC5LN0Lcf/yBkwpMSZ1V39GjealjuxQ4jy7Gdp9RRJx1tH60S4Qtj1w9+YOHBTG8NwIrsL3l6Jz+JZzTYy5cWitBpPhPAZItbs8/KbmA9c2Q098KjhqC83DFcx8Yo3gC0MAWPwKSugFhEVQd9u2qK5+THWMf8kEbX2DMxqRPLqvlnKPZvGrSsSgBuwh2hV7EdZ9aWdMBHpm0EjRhuhYqMxvssUshm1C7X/G/1TN78a/NK42bJV4bkUAC3XnBZt78lzb47iOCxs/pIhQRyG9Gy6OUlzMhns3lE32QxnYD/eBACfrs0SObcCUEehdRmY6KIwN0klPHrleZXT6dp+G3LKQY3YeEowWs6Wan0bIXv0=';
  const _INTEGRITY_HASH = '5503d2f7ba195b4414356d1d57e291ded49606d4bbb901d3e27a81352575f06f';
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
