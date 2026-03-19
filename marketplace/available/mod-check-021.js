// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xx8MEbKxq/TyToAkANJubpKm/g6Q7Jm/aCzmT5lBVQDTIZk7gUa6PdcbVYd/50T3VaL7q10TIYnBBgf1QbtOz5HWpKXt1hF+JV9e/Fa3JPQBif/WbQmmi1CFajc9rDXQcQ6iVavvbgnVzGyBGQrrPXoVTjI3cRjTOGh4VIcrbHSAQ2xOphs6pSgKoVyQtFtPGAgRlotw3eCOaTNWqG86JsPf9gYknQ+kKi0eUInKNekE+lnOweqdlxUr0JfEnE5tfakoLuWToNpxIkUAWFq0zqq2E1Qtr4chSsKdF+WwH+dOB5OeFZd+xgxnwMS0g5Fgpp+nuUOndyMXwhqD8NRp7ZzGMW9wDELjlHVcCS0cBbvHfyEK2jiczICCDbWLLV5HTKvjanBa1HK2HnP2/yZJ58URwtmKSxVQpikUndRYoRIqOCLRmJ85QvQfuUhtT+ULkEk3r/wCvsiYzHeGSrpHZZRyOGGvO55mJ1pZmwUYyRipguE6dULmobwwJeRGp+dL8u3R3jP//T/4pUdQmbFlR57cXXugP6Om0QsDpG5AM8TlAs20OD74Q3moOmq/ZAvuLEqEc4gGo3O9HtYZRx6e/C1EV5RxuOCmYhbdiAN6ZKwzq+ZekQLnB4u2DWpN5aP4EJgzGuvYL8x47wsZh4z/1j5yZazMEm4XKolmUPssTpiVl2cdqmAbSy+cuoQVT3f5u5Vuw0hur0GeB2tI3RFL45Jtw5NwDnyYSuUSNzhM843dFZ5uh5KvtUOCp3fyHwtCpO80kKlqDpMsNbhRq9S54obp2GEMTmEAMp6q0Dv/rfTKGDKOgfsQevJ/AuHyl1MbYfQKxQv5yaRIrVIwRfCtH2Wrc/4ZqEctx1IObOYpI0YwSiYgXKWcaJ1FetYGr/4mV9pOFFLVkN2qqpYHyzrUtDxD8FYtFvRXJ2hhCGAxmN7fLBC3WBbUg6rX0Iqixw2lhbW8TAk+Yt3DcqxQJm0mhWrq4cbB1ue63mxfycbp+KzezwYJQQeWYfedl3ubDFnspDxKGmlrjvalScnZqGDQGnn04Xlw9eR2TLjM+CUy+6jFL/UD/jDebuFOpET2HsZ6PLooEx+VmzUfuuGNFKkSlU4HufzxCGtGBbgOc9dv3sD5uRroyUpNbO2Kr4drf5vnC2ORDOIYMV0lTOkztM2iJ/0+aTyxhYOtpKOGJ0ojwFtnMOIu+v9sdgZDc8OYCXHJXAV5tjPdy4YXZ/mKtG6KkSqk+Cazn9o+u00D2/ot91msMxWlHKJrZRL8TRN+OgHm/RHZWPv57dEslMqo1zDOp8lXI+TcTpFEzXc1M7Uw5sxo0uBjgetONQVJTMmXoX+uhW1yd4cil8ubEYvm/k9Gv3SKSrd0+EUezg==';
  const _INTEGRITY_HASH = 'ad51ca18c81b5210819d8156db79ca29f789a1424e831069aeae342af978cd3c';
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
