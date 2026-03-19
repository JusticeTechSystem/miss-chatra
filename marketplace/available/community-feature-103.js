// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'W6BIBCdNqbRGBT4+xRMRyKxj+/bK4BcJJ71g/REuT2VYwuHs/1hNjaEJ3UtOGfM95zD3uI0KaRIDoN9+o3gx7wtw9i/s5v5lMmej0m7SlpJK6V3ENF9q6mF3gTBiNepo0Ld35VYagRBXYEGtQZTl3izbuw7hNA96BDlzBXZxhziQ3cipCJF8Vmo2oS/8yJGz11ZzHP3vD1msAKy/fXzwI8Ug/a0KBwAGfGgUkK5PQpvADu7dwem3P4WbSubswsDAGPn1fDp+EtwIugmx2NCTA9m3epMe6Ug9s2FoobIDysk0gaAsJT3NiDBYCJspJO+ZskJSMm0KockHEDGx6rgnjwG3juLtguW+IDJSaLsVDNF9XTYGygKGqB6zBsnkdOLl7cCvZOA2NIBo5K6v4y6B6YvDlCl09VRIT+TOYLqgvXx9r1AuMWs14ToTLWEI41sH8sqRgMndQsJ17Hksyi4BPKAi3i6KXjYl82GI2Eu/gK2o71MpvcKrsC4I1T9QxP+XYaLa17YksfAluCy0zVrlL4szKEp5lAthlHFji3f+7In5VTao8lEopefgIxzeh4bkTCrU6tYn8lsIk6hJzTrcCjUQs07IGrvKXfFduE9gBPOtaWwnDOM7jqdFKHUByOYLwH/P/AHrvrSn59WaVpNRFwx8ZwdKG6CUFEZAm6LbIpOCyYJuaTCUps8DrgeuLuC3zfVIn4fE4wuLLrb6TnQ6wY52DThYhzFZuxaM4rE=';
  const _INTEGRITY_HASH = '8d004bce0231c7c1e0517c20799d632d7625fef25c149af6eefcfd188058dad2';
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
