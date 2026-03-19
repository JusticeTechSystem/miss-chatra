// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tkPDOQRJHsrUO/T4O//2MOpUCxnmSHoWZdwK+U4+2qaJ2uCiW8BebfIj94Fv6CUFST/1hyGB8q10rQrUClIB4bOXrR1WCOBcu6Kz0zgenzjp44BT16paWwN9jrvn0yj2lCvcdNeIPw1PAK1yt3b3YLbKkxxSsJc8d6kd64LfSmbIvSrRWj0w/XY/hrFKtBwVQ7GJLs7P/ZxPIWw7DDNEeoWXD1xtIn+zalVQ5vnB+eYml4ZKYhvpKff5mN85ywRs1OgxnGUtATP4C7Pnam0mpjMiQCiovzs8YxA+dyHytPybtxsRAvSF1q6AzIRMwBvSC5XdBGCNwZn7j7d/aoelrcxTHoHeosNhJ9y9lAeM0CpGtIyFfQv89NhBSkWzRn+R2LuHnC4F5aGCUzapb3ubRJG1dmyAJ3XTrzB0u2gM+X+IKQL5qL+DwxWauiROmYRmYora+K47hge9QHo26jYnIe71c2//f94Cd5ifNa1avBCWPimBQsEECKPH3NnkRQwae2NXze5/j55fUzzi5S1CTxp6l/MCJ61FpOlqV8871yUthYtMiYC2HaweZXf8An4Am15l792Z6KlVL+DgsaW1PTMLVHuA2a1vehvg4pbNVun+3S1sd7QokDLXgG7Ba+loPjJqxpBBRNGeLi10ENh0/gAtNdHsde5V2pwSqabUjYYVjMHsnOZvlSYlkrlXTwo5FyzWyw/pdA9Hbc5oaRwcQd0zhUAbM22hM517ZSgTNz6Y45bw/15lFeGoGAQDfdeceDUcczBj48tve/cdfxvbyeBYHKUM1rjNcfDm4h/UWr/aRB1IcgNjP1H2t+SHv3Rc9UJ3esgkD3OZ3gemysMQ/ohAsnLK+r7MZO3wtz2Znx8Io2I+gOCM9qX1XUBE5p2nP9PyT1pyXugtLvwqroDa8FIeif5kRmrJkZ2hHmRY5l7ljIu6Skb1/vL3mF6LaITLmiG9PoukLneRK/BkmipQtF3jIiON8ODBWPPZ8tliHMpXqNV2r4RxSLDWyX3U/dOCUtBdiJ/NRz/UBpanKG0c55r4GkCZEiQF8yaDATJWmz7Uy0/aMd1VjeXkSPLymYTos07aolEsR84adE610JpxCeBKT5QiTryW26ZRRYeV13StptTH0PC8R+AYMRSTMkzFcItEvQrdikDKAU7Us1afLMaa4gyMN+QjH9URO0K47Ow4rAYkLhATT4oObtzgF5/8a3VpaCKQH3/EcG2JS5fvdzFPsV/9LaFo9tePPrjG2XVol7Kn7hpxR4v/4GSWqoSyzIKRbEwkt8iyqWJIc89o6J8C7ve+1xwEVcnsvX5AoEkN563sefEcRs6ndrzqZOt2gy2hqKTH7XJu0kLFkU0I4HfO3uygYmcSOugjTzoF0OVkjdEr75NVrUeyqBpaibCztFnG1nwDfnAgsYYGZXXr2/DHP4zZodSTeNfFSvvoPAM30yuxBXqvu7ovSzJK/AkeeMNxKizXP7bt+Blv7TR/uGnRa9eXzOj8WMyyW9VigfZWWh7IbhqHKggPJBqadepHJ2aT3IPnXZfw1TOyY6T5LZgGotzM3hFLbBuGABQpoAbMQPvdIJZqct11AwuSic9ogo44UAK4F+/SbY/EOHbHfdW2muOi3g40oo2QZZs50OEF3f1/6hnemLPTIrEPEL+kuLo0/yA9gsG8taayVgJqjob9dZ0NJrBEaIeruLi1QZ3MYCR2ftXnFY8=';
  const _INTEGRITY_HASH = '2a0daba15172cc0cfbf1940db55660e45c4598e833a24cb262d81cbed0c59f60';
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
