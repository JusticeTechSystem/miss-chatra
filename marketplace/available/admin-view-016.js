// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QAdIgvTDcFB12bRA02ByjUujo1VIwIuudnVR4WLi+cyUQRh6HQGeSPWWGdsZz84dcIU3SvKzxvaKsx949/fs7DV+9+yvIYffO3gH2zpJ4AsmicZ4eZe8H9jDGXkDCnGGPf6YEsTwjFVrYaTgpyDrart+Va+5eWyNzeeBNXQ2yL6b+ZxOdcEGD2dmUPxF0YYpCJ0T5u8Dee9vjPDnkd5NDT2uBiIZ5GaeO0nmXsTkn5DVhM1gWkEZv2swl59ow7W4L/gSv6k8KzbMNE/DPAh7AU5QsQ66T4U9OKjX9JbfiUaLmEa7Q0iGG0pFjtM/vK29UC3raAC4qJR2Zkom1PhRiGfkqgpKybTpY+7DhMV+q5vzg2XpeX04WPxxk37WBPp7mYmAM67nb/yZGiZN3P1nJF6qdqy02AfWa/teWHmWFI+BoBig9qCO5NM5p7NjYmxWTj2TC1YWAC7EgqMC1dKMx9o6gCWqbvPO80t/buWPSK5pg0k5CvpeBTNAhpBSbDGHiSDNlWjzvf2mY3lC2cS+kzSu69dQ6asSmx1z6Zu0iVfF8f+r2y9/pRLSehzDkkBecmhKx3UBTNRM4Le6kzJsVb6cCP2hU1C62dnEmRddGWHxQMHcewLFLK6Iw2s2Ax32aGL0gmpW1tJ4BDMS0PWIpwH9pG1/RDs6feuRmWRKH2uYFGvEy3yNVUoDaW0bxRPJ8DVKUCFxBi6TGXkotERu6nBLMVe4KKA3+jAb9vG5wLmGX3FTla5dPhVYB3JZtxrmyXpr0bjpe2hCw5DWUwPGffeoySDN0tmz5YWDb2XXcuSeTJ370maGLc3PJU3XnTRNgOCSZtztt6vJ/uP29ss/z5hlIJlLCRSoTWQQlI2tn8p8CZbyDz5HCgLKTI6YHuuAT42zOV6xATqohRheSbKPqPLxi1lbiB0XM5VbxWPCD3ZCS10OfBG+7EFdHjCfg5A3VtbGK4ANH7Tc2a60ycrWt5by08JI0jjJ/V1lskLovw==';
  const _INTEGRITY_HASH = 'd1de70100297afc1a3cf8a01d89f17b8180b3bac1b176f4556c7ce0d78e9a4da';
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
