// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'w+T/A7XA27WwOq90KPIgl4NeqLTBGPDYCveze/G/p/voaxycJPIvGUFMY4fUaET57fR9kiTPme9ihRxcMVDa7275pjlAY56xOZZnMtewKmrnUg9Fo4LTKQ5O1latH0DX1VwbA+UuumhijnSjSWQBJYsxo9QdTVZs2/4QV+HIyydMvR47dnvURAXqTX3OMvECHUVHHnVb+BAJzFg0b/3Uy/9PCWyzCkYO0cTskRV06eT157CnvP5G5aPdvxd5MulvqjlP2ALfZWTItpYvPtAH6HBladiTwEcseaRr0bBMVnJ2gl1Dcj2v0p3xuq3nfEGkwsoOw1vHlTi/B8bTdLem7SwlHz0h/Bs8F8vFoB9g7d5NPshVktdvYE9/emqJRaO0ZwHj9g4Wul5KBaHEc6/GQJz3R8T5SUhNkmu2ekD1EyywYMxi0TTuKPU5vVhc3rwcf/IibZRQFCS8ik2BLkzDW1wLldTRXxIVDHSdkWIFA5G6jTzw7qLJjgaqh0R16wLPdOty8vBbBKyAZJkK1OdSOsPVPY12B3USOPaKL8IzSLQXWTrf+AubV7+dPyvsyKpnqPhM1ErErUYmZp2xGlgYGoDDORbbVaHlM3p33mVd79YpFigcszwsCheMmaoOF2rIDZCdtnLnc1fn1RRG0yaRB5/M4rgMFYeHz4j7Cxh6jxdNIX8cLAaf2fuSAnrwukyVu5Le6rdLSVHA8kX9Ehzd+v6WKdtWoUDiOB5kykMbO7f74qz5muXO4mk4viTlCpDIdB6d2p+/jQ3aqpmF7X4HdJnKvERZpeReVKd8kYtTp2QcYAWJrBa53RCofrntyTHKlWDfUePWQ0jYzAsLy3Dz4myBbrNuu6fyXyT6q3k/MK3YDVGmJ0/Vr7jtZH6l5YjpdLi+R3Uon17uNO4mt4iyIWnK2P8ItrtijFSLbkWQKvvNNPzk0T0g7aXeyMTFHhJjEzwbplINGmrZDAoCC40o/p7ByvQuzlyEzJGP04UIJWpFY1d4OY/IGsWOF8USth0Bv0uRTWB9E2E=';
  const _INTEGRITY_HASH = 'ac6d4f67e75644071655b12e40c2d7c4ea64212a61d139fc76f6397baba06b16';
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
