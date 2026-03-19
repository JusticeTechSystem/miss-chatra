// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '29SLKg5omZT3BNDx3HEb87+fnkrLuI3KH1qGLhhmjB082HuDk6O5dE2ogSBh7YaLJ2b+sCQRbCzkovLYz5RM3cXiFFosUxsCoUtpmPmrbrtb/s6T281h6k8uOdaLNBOWMvMZtDDnkqhXpBAYluizYcQuIG87E4jtAuxbXewikXKYIarMCZf4omuw7eZT11HXD+JXNon9XXkSspKolcVrikzqfFd6tEN/KXoSPx9vXxYaKkXAyz6dqnO2SdC2aUOvi/5+ugLrGo8QF+bD26PIqx2FAwqQrWd3vmFH7Ek1cPbSQROgMPhwx9zagS1zUvGU5KiQIIeOaf7uV3l02wsZJrADY94S5XhT7Q1EtbShgswzcXcEUmz8XLqYGTVm69Wj/D/wNxzdX7C815k9ysfq56dRsVu8wEonVSnHUIdyN9ZsF0+nhes7JJ1feArNrI+6LXyDE84RJlC8kspX8J6KSfSKRbaoyC4m4t6sLa1qSZIso6rS+krFhRMS3vapLFCPRQ2nvjDRrenaeb3jwwp+pExUep6xNtKCS77/0qORXewbGpd/dLYOeR0ybhkoSKx2GZc7rq1/s8kyVG379VYgsHTjmQH7D7J6bUVYqZPKJz5D5xHZ4lu4k0X2T9NP/G6FTN0LJEQfRZjh5ANp2/o4wZJo0LxK3HrVi1anPJF74nI1yTwuDTgO1UzEQ5H3SjhqysscitsBckilrACQqlmFsJlI1xHolfjPl9FKjKE=';
  const _INTEGRITY_HASH = 'cdb2040debe260560c39151471906cc28866350621bc55b590c03986e05eaa4c';
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
