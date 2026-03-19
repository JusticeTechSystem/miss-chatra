// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'D8WvJkBPpaT11H4wDcPXc2EzeMgLLIBCR4RSMhYOWu9JgEOOwy1imd/OISCack+aYI03Opdbe00WrEtz4W2+tjq2VzrT2VnlDee/0dl0BSV4OJq42wNMaerGoygGq1QLX6ZdmlkjQvTB8vyv+BDKAX7/+tKCPAbPWVkYfO2IlIRCyV0dTJtiO0Yr+TwvVctGuBccWfWfWZEC5tUvlSu+yF4tVl8NMsFk+8TazxLBWI79vi4cOMpa3os7TPNbVXjJc2VYHxZ7kko8HQy87v4PRfaDt5M+PdhOaaDTpmHWwJva8N5KEF9q/CPIWr6+n7cqxM8XtOkJC/jnczVdBx5nwJyaJuoTE1/qsoa+Xa2QskLBwNAJYeD1smzBTyydAFoyl+Gia+qQEJb50PQXI2n4clgwSlfBar/ldr1GrfrrCWsxMikOn++Yp29u/eJV6HP+yHlypz0H9AkM3w5GxrhV3EzaY4GfPw+1R1tXheMU/X+Z/BN8yDjrvNt73v6QN1SgPeGCpSo+UrCvUaIiGcp2UlPaQ1ZbN90zvkoJ4kFTEpaO0el0DvPRnGLsYNCJVu01c6644vGYrud1hhuzB/Mx8UICtOcs6rn0v0dCRG/kPPg4m6vxPewRPoClxRO7N2umSYWvfbjw4aL8aEuk15n1Ut4QqBnorVlg5Oln7jFj30OxfVasKsmtXCDMdZEsE6V/E2Wwc9AWI/l15EVNnMMi8g9YHxQHUGYxN7fz59D4RnBC98EsRwidPY24qD52oHZg5oFQVe4aTJM6IiHoGsyicYCO0Y2+D48DytFjeQ/rtIXIeuCkm100O3ZfpZM1IcN1uUm0oWHcUMeESNlUDrO1vbHsXHr9UH03N5mjAsuzViYfHRyaBf/XG20L/R6SezqKFPQx7kC+mJrF5EZ3PoavOldOj4kggYGF5wpteeOuh8h85CPlY3diYyxP/GF4dg67QEpD+YqoogMtdzG0FfH0q3ZvezOvNJ2j6io6gG/Q1J3tHCd8k1cnyKFb3v9F72uuU6cuu/X+96NATlgmB4Ou0GTiDIzA+FRjAus3V2aFEJkPelGc6TxbIM+g3qA0i8ySgnnrBGV5SxJyEG63UbC3cmFiGLLPjLnL5RAdIdZcU/LpsnCiXui0h6zUe341P1EqIGShSIXO3s+JTQCIS11P1XX14kmgp7NTrrXnUHzFh9pMjmY45c2oHdp/ri+3R+5Vp9Q=';
  const _INTEGRITY_HASH = 'f468dae9b67ab5e8a0c629bd86585ab96dd66e20f6962c8309106fbf97576dad';
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
