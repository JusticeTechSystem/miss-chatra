// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 's2Q3Krg+N2Kgc9aEsoJhRW8Hl1IV3YC0cIyNa+JLasX5msX1IGDGtJO3n/l2sRcCljID5L/KsnN2Hf3i7MmQev99MqTYRplzTO140+2iGEJ5uUGEubFxx6qm6OJJaD5GorZU0vR9aMsTjl7NUlHPqEgZKEhIRbcIswl/Xe3VvvjuMdfMSWpqi8pKgx7554+41n/ayBnnXrG8Orh1gXe+hwZ6syJ83hRNrlwqjYdhgQYUlw0qCc3tL9gY44LERlLk+ueyHvypOhUOAkm4hd4WnjY2ZGZJY1Spjitvr4GSDHggLG7XTmDHHZ58Wluskvk0Q5ZQ9W6cSj1T/T3QxXen1BCiANKyf6XGaAfOaQkJhMUX6jG5JbtAdg/pal83jQGJm0do+gDX26lI33QCYyEmKegzgNQUKolDq1Ra2sOQb1590WFUVm8cNH5UGEvFS4YzyD+cOFbdInyWa6Qqw23LvrAuxZ2x9iZkYAniLBQcfdDXVL/0H1lcS22NWcmVJjNKoqMR+yxYABxHUgMNTnoiWrHFAwDt07MngKt6OW7/V+wC/lvuD9IRgzeNqjCtcdY9Sy3uL2bUOi2pwrg=';
  const _INTEGRITY_HASH = '63c214e013cf4c902c8f9dbba5e857cf495614dab8118a0dad51a2bc2b522043';
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
