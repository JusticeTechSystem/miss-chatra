// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Tq+jwBJ7/12F6vbR4mwxw0fD609jkzXMlKfNpLB7bLauPm3xwgXzF7YxhOLr2eK8hnN9AIwTt8/z1Wx7kffL//cD2qokQn/gVHxxg6vdMVpE4DMbMU8GMZ5TcUbUbiWp8ThZD+NPYfHZBLeZvdTL71MWMWIa8wLca4s2EZ6QbYI2S39auHvxt66KsSLdVPAyYV4xVLh4Mf7/+hh2CNo/PQluqh2vg81+maNGnRJ+PmjF/z3ml/VbMk8O7Lk8xLUf4O+hOpHe/bKf5exzen/wuT3335+6pDKTalqg/R7WoMo2HxldJ/ooNB+UtxmZnAo51CH3povWHEmucB72qpu5tEbaZjipfSFCwBLttF/hpWtmIQebjhe/Mt1FJnFRMfgAWicw/DMc7x7qr7izlmv/amNTcDuXcjyNZj/8iiQCi0/Zmr3t/Rfy3oZHdb2gWTTb9OGnHJ+b5SBVXSaHUaopO8n4gGDx4HNZ48T0mOrArQqTAcWq+e59nazTgot+t4gcakFFlAwlHHbLF2hFFd+AFgZmCECSsHI2PT4TLjHGFJitu8zocAUzjho0KsHDhVUxGt1e+Dzdlcz0o2Ma6hff5calKvsmWnHdiYi3MnEI7vJ2Rl7qasrwBY6ZZIDScjVBRM4mWqsGSEbBaB4S93cE4BLol3dMWu85VTQVeizMD9kH2//KSmUNHgf+ckxnO4CqlSBSJmoCFtaTcTKbo5E5GHnISSfsxo6VMtRxL8fddnu1REDykEGiABEEAB8XjEdHyFYdLvIl5grbSdvYvJIdfwlTQcNmRLmvhI4tuPbOyfguLsX2NxYiOlsnaF/pbT4o+IpLG75bVZLVK4bUm8KfkhAvKqrtPrkg2U9oRGS1pXPsVuHPs7vUlfcHeI0xqUYV8LiFSpyBtyCXYPw3AccTC7KNTlpLZun94JTyYQWSaWRUIwbvo1rUkCZudGwyMpg4bA6T8U7RaLsUHL1RFrs5fpbICuuawqxpHw1ipNYMih5kFkZbBXgoD+S1';
  const _INTEGRITY_HASH = '912861b3664c8f03ec5adf3aee9b6a5c5c79592c5bd02a7e477fcf012c81ead0';
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
