// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VhDGu2NjBbMMPJrauXVJh2ghDOio0E3Nh91t5wm12sKjXPql178ypQ3gxJRTX75wikieOqrtFm8QXkLUJXEv8ry/bhvkcB0fYGQSGPLqH60ClA3fgc9DCVEyw0Wa5Gl5ETHDIY3O7hOcoltmIlNPiiRRZUPPSUeVL9+ZmF/ozXwXcHgogXT35/1HPcj5X0k2HAq2C1lInX4kEx3NBsBrDWc9codsVaVqc1CqGfxFYtu7dgRmRdvduvCWng1pZU29QkCvSkO8dlUrZPFmlrStfnZWcT/D8E3lsFNBHExF+qfQn+n7Uw1qEt5UyhBsdnwx0ja6DGDcNJu+Gbcg6lMoEoAShpDQULRMOEUEPAJmo8d0H4fkgAla0vJ1sIDSlDy25jeuTWuKC+gUAvWSIlARNGe9ocvPvbA/sDewvxPemEHDitxkPEqAK3YN1W1cZoaEsxWpBMeYA3Rj4g8YFCBf0mjGJav4d808jS1/0/0H/WpdL9g1CYDm6Ko6rOruJ/CKKf8lBZ3JBCxFlTEnpy7Dfe0/r0VVfydLDcqtcbifhIrGum8yI3xxRXzYMutMH3DgPRymvT54stmPph/qTsVTLmwzBD9+v1fAZFBhsJzES08VzEBlB3Tq2KN68AtzeLaGVuz8SHC/oNME1Y3kROquABhETW3XxLe+AhOmDPYiPXNb0SOkHS+Q1Ndi084msiDIBX8rGb0S1XbYIIe112473ispIV6PQOPnYA==';
  const _INTEGRITY_HASH = '913b4989dd6d50c704184f913fa0d47ac21ffe0143950e1b55dfca93a8a056a8';
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
