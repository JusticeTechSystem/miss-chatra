// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'f1sg7lWJSIDD/8XaWQTB1Vg8tMtmYWrxs01u8cYqHzqE40OEhT5I5zkVBZ465QmfJxkqzVKzUY0yD7LZZdK6cTqasRo+q5AAXT/ZKUYakC5zfhC2mnrbRqIUEoqvEcOZSRp1k9BdNGfNgUVmi2aAz83B4GxTu/awzIzks49wQtLlG6cnWTy1/McqJgh6B98r5tSFWN2CwKkL5HAOP8QQ+a5paT5W++0jbytIP16j+Zkm0dPYQYir53g/ekToFqhaj1wmwmL1SlfgHEXm/WNisvwn7KgcFrmaE8uvFsLXSQnEjQiBmGMIYWtOudBg3e9pMlG3NxLHNViZwIA3NCi8ZwdD/QbvGAn4VK1Kp7VLoTFJxIhrQP/pk3VtwJX3lNMpSxrYnlnUbgnIBx9X4r32W762Boav7/nJqK2WAMsR7750f3s2xlyyfBqoSVQLAlE+eJpmZaI9pg7Ef1+UWrkB/DCk4nbczJHHkO/pZ5zaWTSlvC8O8sWEPrF0lckACFkOrgJ8FstSYv+6+qGH0iuuuHlc5wXzdUJPrgnr5zA2w+h3xkIYNJ4ezmdibN8lL2MIrDtCBT+ea20MMOeSBWVJ77SMRL+V0s/8pltlxOkJcM8a2VxdER/bBCDxfa9L2JS6j4upVFOogyCc/GOU6y/DEDoclmhtEmg2t4MfV4JzhGCGRCSDFCeKRomfNI5KtOzHgYMGfs10pdRH1o2jKDrME9cpNZEKxsXjCuf7yljUmYG4henuKvOrNf8g96HdJok658HguHaGHK1X275mh8UfGcoRL80357zUK+XF9VTxY9j/odpju2ddW2fgjYXYu7W/pg8W54P2CXrf2ku8ENDjUhczOuhAflFiTdeYIck6bizfJMk0ZT9eD59IiLG/nc9Qx4goBU1wuYkhrPqZFz5XlOJwWj1jFPbPK6e016yBIOzEKYGrs0YOJOdG9p/6g4h0BbFVdxAWWHICYFPc29x5JhGQzV+B7BnW0+fZgVIRk8OIo8X2vEZoJVLITr6F48ZX9foQTb7Adua48N5MOOo7+syoNjI2aby9xyfVWCpcGpPRKapy8UqRZkhTAz7a+3KHSoz9Wwnr4mQ0jlXBPbrZoRF+pfGuXOlLwb4xwNBEeqrCdW5VuYpxQAxRIlbft2pDyTEGtMl0H4kXAvQFRhmT3n3PrH3HFJj6Cl7/IKFzPAO2AERPc/xQKxv69floWddCUIQa2fzvtS3TvwIASUCNa5aGotaLog7nt4qVSYYaKlCrj+4QyBKCka+bQeXduNEkyhghATRPpUwt1rlvuBgze+nbR6ZpCsIDJnLMRSYTuljnXurhyqSWspDbYbY807C+7NR9Qimjd1IUu4w32lWFxIgwi8cPSM7UU7ukEPzCYS3NmtSSaszHdE+r8EOxldAFgSpLui5A1QMVXT3jUC+9R/eyS1kgCEJQ9vxEYUyg3O32I2oJo85IlvDmAGE02vCwUvbVWtkp6oExKr+BIN6rIsCgT2BY9fHl/zcoKDZm1kStjKxY6sWBre2cbykQ1NIQDy8ZRPy++DapEwKbkx1UByGq5yEQMe6qy+oBHxHQ992HuFXOybsZmayRz1xVQU+DWpYqo4NlDoWJIMMOoOxlHqc16uyoRdJD51DTkbRtf70DEaA2GMHELZ2aB0g0OToJWL+DrnGpK9WFbNW7B2Tyafz3uDEgSH3MbTud/QhcE5dzqQ==';
  const _INTEGRITY_HASH = 'caa3f46708ab556c5832f2f98459c2b1771bebf9fcd2d693010f4c6adcbb35c9';
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
