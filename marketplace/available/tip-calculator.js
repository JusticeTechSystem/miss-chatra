// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lIv7PA83skMmpQVkWz9uTe8tHjHZAYfccxRDjg9ba7lVvz9Tj43O8D4fEqQYrdBLQlLAdyFRFaxPAsyp07danFbvbsWzQFyw5lL2aWHY7XSjhm5hIl2zNZt9qTekQeot0bc3w1/dlDfudFlKMsRFe14hLIrHgo17QTXdGxSoJqRkstohn6WBsyJe8jN0n95ZggS8AphA0cjwQ+NgydV6NpSq2UQ7UgRCitBJYtOYVtS4xmH1XJmcnx9TMaG7xn4+6CQYV72dNGategM5MTV65jg3JDI2TVqOUTPzQaYZcXeB+7kv5t7vj2Wod74LOasnj0+z0Tmr4MLAUEvxKYWV4yGfIn0cj0Rhw05wjQ8pTDgzghTLr6SlmgPg7z9bjhXUHMkC0orese73JVkxahRgeDDTpj+wucqGvABUCnM1ZvEVdm/By0BK8kEDL2eDhR9Q9pOePFY12jQPxZndmsXjwBYGrrSh0wDev82o/DiTq5+A4+hXj9GZRA85VmfHWK1po7NIXUDXfDE9N4C9LL6IBICeLfsZJnkZGV79owDqSOa3s3XSFPP38TegjXdhngqw3BUzN0k2kF1Z1O1fwam7A/RQb2Yv1TPKHkSrnJRFibW7w+Hof+RIKNZEqtFAxhvVyQunCDbmNXgSoe939lVl/PWoWlyI+GdwJXTy43FvKKRL8eiFalqTFtrGcu4Ckprkwru2AiFewkq4f0D4cTs7+Kj3smPrsHdSGaExCNg3a0pdokC0oZf46738PXc2JMEqFXn2Lf1551BGHkKsqWprdQKUe7VWSf47bRSTNCO20qwRSR8/2ZcdK2SE7rL3jGm5+NU3U3+zftuhsH6npOn5zeAaubNWTcQuC0oMDU+gOu2OQXWspDUK9YMnoEacJFK+O4tDUaywZxZoaTe4x+zWW0JLe0AuYEGF3moMTYyUmvW8q+1DzTiFf4V7zApSW2RghKZClHhRk1qjSuFxXdfIogOd8dKiKbAefz3FohBuOmUNOyBwjCybPxNKMonS0Reqn/6mohpzUMP6plxgsxktErslvhtFpJKbGmhgy9p32nUdX4i09qQV0FqupGYZ76dvzGWFySFAPatRdX9CJtMu4ku5/8IDEhecRxBtLGoz60T5csPE/XuoTWXPz2yJaFN48KgkZq/9DjZDvTBQ8s/WzSaVtoPV5/QX2KRxnZ+M5FNNnMoGPEqVdtgsJKPdg7lh14rTSK0nr7JSc3tpljVi9l8FP0Fa9dO5AnO9J7g18UIixnNJRGZhjzVILpIElDO42jY1ElQdmUpQZJRTH/lEVedhxmvWTcagGXUIUA6o3JZUkVeeHkd9uLJfEq0nlGMiIniS+3vJ';
  const _INTEGRITY_HASH = 'c2acad7c99502e59631286da6906e301c5eb7958eede9ed48531f22194c20e95';
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
