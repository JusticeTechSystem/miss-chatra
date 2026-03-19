// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mQodgyOqIhaLP2mcMCBUWCtK+CS2xbNaOG4pCT/kPwZJD8fdkI78MqPxhx2r/l7WHkL9YqadBeKkVe4y5Fy3g2pB48upE5s2n3s0jTQ4KrdkXpmDLzh2URjBL4VeP4khGKnnwZZBZ6gJWR3gjsl6GqY+ehPUbUEtI2dPChd6o7sSxWvCNGLI7eRVKIUgZyTvtDdn9yoxjUdg/PW/H0+EEPHtvmXyfVqsUQuk8QqI4EeQ72bm8Pim0lzR+m14lGpiorFx1J00oUmrsZgUL7bsadEXJRNcLeWFIsnekpO1Yb9xi1tY6FRe2E2mlWYXHG9PH5aHXivEZ6hlxynLgSiVyverW05O8fdf4/a9Fp9RyJk4qG1f1IXY+RBo3SNV0onBCyA2W5nJ56DH8lUYuuPHFHGmaSdQ0nNmUQ5AdOHRovuZykWDAIQCYqF+ovpd/FuUZGNbE8SunrbJDV8nQnQAMCAQaFsufoPqxVnlBq7lgmMN1dRuTBJhfxw/bYsFWyQOH+0yWuIV/GQQniYGTfiqMMHMcSC9TxFcqXjUtB6Za2d8Zj3PTiBEZu+zjXSpeqMi//TXcC1SBiUl3vPJwbsCyQmA/tqpi8LIqcZTZXe2lnEICrVoIP0tt3X3bT7W11CPHOHwWZHS5xUwyH3jjRYgE4GNgvkfDNQvZrhx+GJ/pNxRT2M+DLYrcbtIFY8XqefgnnokPv0tcZ2b3nGRN+vTef+T1MuJLqUdJgSB/Rsm6nC+VzBOvPnQybBhx5rgMX5LSUv8Tp1kGSI2ABoSuwT4+eZRxKAptLWCtybzMmG+Owegqemtecp2cf7g9FMfRSs2zUd637v5StLNrtqiZFH9Yrk5iYSx6XBqOkjyl2JveW5MZUe7Oe/ndwOl2wKr4gHwHoRdf+QrEWRssy2OKfb1uVJk1HIM8xeOjm2S8FvN4dFc4abBLs86a5r9lA==';
  const _INTEGRITY_HASH = '02553bb1f23350938156a9eb85f4c77634c37c9b5e1b6bd9a6000ad59c2d9577';
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
