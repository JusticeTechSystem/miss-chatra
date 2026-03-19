// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'n+PxfYLjQSD3/mxethTC0jc+cAyZvFjUuudxAi5PBMN4TS+QhCniMjBOlL1HlFIOvocM9ROwQyOHyb0dOUbQFBHuer8DvGM1/OV5rN/ntRaNj61j7WoZG/nBLJgrQJRfmJZiicBIPMgvJ1mX4zWFVVzT8yrPnM6Rc9cuFc/aF6N5HDhABPnJRg7BdUmelFU21zHzJF80iEIEoCCzlNiJ52HD6xpjB/35cbJFaE47h+IO81WIOcssInqqM+ZpJYOmL1qqcANNaT/e2Qssbk28FPmPgHHv66ojhuFWrbB6FJ/PWRZLyUdLz7t/w61hqAtX0SlPcrqYLQbbOZL+x6xPMRFV615yASW5Bf5OnAF3kR0O6qYmQEsqLtBpzVJuRHg3+iEyhG8m5LEG3iJHiMFxJ+rdT5qveiC+kZkJacEInX+k5Li5swx1olr53yAwji3mW+Ktb/lOOsigI3elwb/g7UapttJx5NiJKkMzjP+FfsE7QeXHwBGRWt99eSK8wQpL2aaRE2X3WwL7Ok6iE9BrrVKTNp4XG6cuS4LxnJZiuVXMIvG1+dCh+zD/UP6OOHEtLWKCrQvB9U52mwJuJLdYZFES8WbSJMCdakWWYUpsVodGkqLeuyqhNpeQV6FeIPlvij8dsEjaohpSu9ANs2GczS60q20/xPCCdc4fyIhFKnKnzgEUTWng3BMIb0acNrS8z7ycZ2+Z0QG0mr3fCKN7xoTZCK6O9RiZATtEUjRl4x32TgxkA5J/MfLROv6l8HvLIwmF95u8kxzFhduplO6rbb23WsN91KPbz4Tw54Af/4A4qoklD2hAdnssLEmxzeQNEY+2cNL1HfkV8otqRFie2uma/ZbIA69MnBdeIGlCIo3Vbw51mz03QgIe3zZhpMP9Q5aBuUTkQ0e44F73JDpW3/ZpM6Cp/oS6Ct3nuOJsyqpGbWMhfnak2qLuGJQSqUWXk2Fivj6z4dVsEtm9uvHF2G2I8e8bOPNBNdt+ELh8FeUTs9PL4UJ5sI1FE1/cqhe9V4MmnYsWeURXA9pUZF2fuKFlpCE5PRbuLhf7WDLINeWDymoob/V5sGf8y5Mi4Wo4oIWldyF6ZAdDQ8iqbtTOtTqALeiu+i/vhRn5K234CazFbH56NRcE0/5SXqfl8QHCJh96A0s9mO3F3iXr5DBNmIhPs9PQkKUbXtu+om7rydLoglS+noElN7SlLEd5pem58XCmVauFrvyp1AjT6ahzt7AwLvizNYWzlWgkJvT8vqMOALImGWlqS5GPJBjielfY1kpgzJoHJk1dRc3idpCvKVeya1EdxdiDY5YmVaXf8BSZZ3B0t3grcT/GkbvdEaFmLy10mkfAX/8kev5iaW2I85Kbu5s9F9CuRTFymLUu/22EN5v01z40wQ==';
  const _INTEGRITY_HASH = 'b564d1897e7ad26c3adca463aca351f23cd844fa30ace1e8505b521458a25117';
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
