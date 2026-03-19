// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8tVleeRxOI/HnoWzB08q9mjmKZy4B9dInEcEuixfsEsVu2do3tHn1U0KUKlMfprm2qYcxoBErAmkX0zOM33c0wEk7YSVwm+lOc9WEoNP1O5hGHh0Gj6V1faTioxQFPVzwwXJZdTfAg69xPiN+6v1r+yfYiX0lWfjXYrKMsVTJ3bQcEvxNBiavFXIx1vQZknSxqYPlHUOhZnRxbnpJp17Nc0Tg1pyFksEopIt1b69ZKS1wWO2MXMcwgVfV6iuz0OvEwT7nShNPRdbtvqY11hlNDkZx2l5gz7je+pf9TMi26QK94fB6GuTD7EPB4qH58RFcNl7N9PtaBxc0aGAtdUXUyhceTBawEnMGAwU9i+XVjXlC1CP9DkxBO4IS8jXj3fB3Le2rQsYUWqBF3G9pqk9EWwno7pg90SAmbb55PCL1SSPWQAGzRwhnCR4EJnEkn7k6AX7mhatFEu2CWDEFJnnJdqXDs34HKnzmBcnHSv+1cWrH+qLyE8rneOZrtCMpU3PHOKn0RXf3AJtfXu3mBAQthss8Q1CYrDmlznvu0QbK2WDuZIHsVDtM8VwoDTJ2P7/i9viH8s3BZ8LL+xUd2bU0pmPzliShVMJb1TAwSYA7ySj0uDY7liOtjXp34GBU5nLUO4vJuz1AkUvi+C4jVEStBcl4S1g9s6EvBkdOMsUdPaI/1xxpK8DiuRpU4Qfz6EbdlIdeF/j626ITSA+VqsJurxTGsdOnm1pDRQTHQxApWYumsJ/Q+k=';
  const _INTEGRITY_HASH = 'e39b2fdacde913faf720cbb390a7ed2063d8bc2c65354704292fa0a2d24c3047';
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
