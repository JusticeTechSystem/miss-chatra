// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'x0lM1Go8MDC7KCZBVZi4+fgSkk1ca2BTtfNET0xtxZRF6lMULvm+hK3MponlazjPpscn/h/A+eJB3GN8wYqVX60y6GqTUAOe6MJ8uRBC/v5RAeSHl7ZOCMWCLHcb6oicPjWz/7jNfciKIdOycuUC/TrS6ugLKsuJB2Lkc3BWmeF/uCtaAUvsshJ1QHt2wpFvMXCuGk32Bz8hS4zCgn0rCWV3PPV1+5UcqOCsR6XM1KcvRP3mEpCLJADOFsfa08RIWGx5X7JzUKerZAC26koqVeHLtVJsauRSS1fWGlCpduBxiI4o7PgvjUMUPFy2HktjLl1icDMnpGnh36bvr4ysfK3ElUnme2dvrOA3TVtN9oetRtSddg3ZAIULzwxHprDPZJYPwBMBt9F3fxVctJtHn3uMhSqXe2gVq5ajAXbB2yKPEDdYIAxJa5APZUR7ADly6J3k1ymtr0Dc9hBJH09ma189X/0Q1WELLkWOordWodlujVv3izCBhGZjl3KPdpMGLMm+bdQG/F5HS7IdtNmAAUHJZ9oimTi2221UStpqM5lILWLVJ0J7gLCekZNyx0F0c17HtHaR+1Rqg/uTXAFzjAhjR6KPryvrPy+Kf+DfgJwm7UDZBaQ14RXup5wzPXJDDop53WonmLiVDl4rM+Zk15YZSJMWqf0URk5eastdQDBF6DN6hDlsmJau8uMKGwWAANFLz8ZiJodmM+B5ih+k2IWmzDSnuCJgmrsBCH1jDJ/HnP+IKirJT3VnrHvGjb8MKOc1MkXAeJM71mwO21BXP018qf+KOuYSHzGZCkbir8TF7vdUNvGTGl2XVRjMOSyeaDCaa4LXUEhRSPdwG/JNuGEYR/vnujpFhdfbCC+wzaXbOR2WRmzz3jQwJL2GzKmW6dILb79VUJaaDX/cLzGI31AEI2J/bS6KxOaKlh7M+OTQAXuQODN7d2eJosASCeW2bRHOFq2Hi+jmYuN8v5tAafW06Q73pCQyTL/ZleSyMzy2AdANM74V5f1sP8Ovxc91RQ==';
  const _INTEGRITY_HASH = 'b39f1b1ce75f9851b89a3c4eb26922bc90668666cfe23dfeefaab6118d3fd1cf';
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
