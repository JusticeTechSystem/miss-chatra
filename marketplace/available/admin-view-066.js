// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fzdaJnI+Y8eM3zwUiWqgZLdG9G8qnMg+TazBA9OjtcVykn8MyhYcPEmU2sORVhdgHfyU3F2X47fhpz3oecfCzSYxTspIBdFTfCr2mztAX2jfF0DL4AAEwBRkLY+APq+1+16qmyrIdltfm/q5Uuxl0Vx2ZqeG+wPfoFHbPAmDAneRGBiNzrMZ22buXp67sQzvR5IZhp8xZ4Z5OHQRkGdW95FFMiVHI6Y74XBoO44VD0W+h/7z+66HfsreZgYEJRIqmU2J8754Oy2gbuMTSMCETXHOV6szrrrlHRB9n1hinc8Tz1VqBwXmbBsPwGXs3n7wDZq1vCMnA0/TRYvWiibZUEaAbDo//uTDcArWEFyhnJjlK3JaSOLDwh0/tp8f28MciJFImgFXYPsdsEK6SeUWbZzq6YxU76e2oAxTiFJspde3nMW1Kj4jXDnBYZpYZpGI4oJrI1T4EGpyvG3VSxsPcK9m2tHkq6hN8ehFCj+2fsyVanqZPy4JfZeiCvgdofFhsGR1hXY4Zlc+2nuqGofYG4bBwce5+qF5v/D2r0Y2mVhW9DNvEIkTpW963MOdOLweYFB+7MvSEnIr1SmUTZtVgP8KJpNZ0wD+O+Wku98xmNulmOF8WBn75NrzwDPMVodKw1dzkycMs2mKlpn9lIitFhaCiqGB21CEolEEBZ5xjvZ6BvzcPBYctaMYLX9/nQDNtTjBgD+7IawGSD+/PgPq7LlZ3GO16HlUmiF44dIEA9KFI1X9cRpbJ11pgZAmkt+sNZVBW00GMZLMO/wWr/tOvDtbut1Qm8mG/Y7eF4OZRd5V9+H8jpgYUbQao5onaJGjXcjY9XSOWEYMmf0fgV7Vn2FiNiRz3AObrtNoIn+wvwjSS68MeEJmBPc1zrT5Oggec+oQIM2c2nBSfZEzrJEESEKzsFVMqvu9PNbwaW4SfBgTrxwUM4u4I3vL4sqWCbaEkdVwFjnzb/cCFmObvsQr6Nb+bSxgiXgyDrjMN3hp4Q==';
  const _INTEGRITY_HASH = '46b29b760b7d2870373615a44db41a68bacc7138512fa3446be6bc9d5e9e8218';
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
