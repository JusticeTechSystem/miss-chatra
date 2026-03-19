// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZQeJi0uOrRHdVTVANcmPv+MpoiWAKOv/Y5ImVoURCus6PMMmPi5J3ESwJ4bkjPmvhC300gEBmeAU7B+qfSDb0sFdNxuLhVNTIdLp4j7l9JZOYSRxDBzJ4d+WwqInn1TR/AgKC1PqLx7yqDe1GqWkFiX4nV0d4vGPh53GD8GDQXhSdOY32aOCZF4/vRoyONmz5LROuaWNzk5Pe72RV6QWCr2eWQnLgqMaODE87DEgGO7uw/WvmWocUlV8UbSUwG1Whdli/RpO0EkuhcFgXSHd8vbq6+WqNbz6KtgCRjQP06Pdo1eOkFiWEYrnkm0+ddRtp/685K2Cl9UQILhPUgxBuou7aRneSYfFaALj5jciWYhcfkFHfhZhQKL+m47NRrHfJ7sIuWk3zjUhV5yDRksO1npIZ1UiO9Ir9J7NOvbJqZ/ee/63F9HumIvV1nmD5cEPDT8bz48S1+oQOs9Z03yErhqhb1rFAwIfhNmIKnOUw3xE1w/xyjaAQG0wJSrBIwWiL0LmGp9taA==';
  const _INTEGRITY_HASH = '4ec2015f61f067a2edcb389b2b5eba2b389733debc4c11378794d9a8fa89380c';
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
