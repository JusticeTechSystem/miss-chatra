// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'THQ0Rfs2LU7BwilPI68DKZS+PEZCpaXQLEME1m3Tw4IRmgFvaS0sdva7X4w+dejFhUSHBV+oPCjRr0Ehlx0arRr99EAoyB4E+wtBJSpuvvzJfkADVu1P/GeB7I9mUOwWD/FA5dJSIi2wrXO8aRXJDryeli6XpF7x3UrjvMRnCm1HqHR7jLRWu0g1wHBqPced66btO2hQl0QnAmYOz2G0RN2RDTzS5Mo0pLKRsE/Jxn7pbK65ZnZMEz6zBPYeUsewtpe4jjooe1XT2vWAlmd/AZgHy08Gm2PQMF88w6euN4v/ND/7ofZE6vUkcjrqpmucWB8LYKAfqGdTNBoPDyVyUV+gchmDN2sJ8yeQYyPJa//50H4wIrNASBJSJ/jKHV1aLD4MjvdelmYd02eqlNxYz572M8jn/AOm1UzA9e3v1aSKkqcCEnNwWxwj2MAHWXSS6R7niT6LUBSqiGChaxPrmfQey6sCqeY=';
  const _INTEGRITY_HASH = '24bbae37b70a5035376134800b5b5b33abe06adcee5a70891cf3c4daee475b5e';
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
