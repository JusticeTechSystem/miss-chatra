// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'i+hw7bVap4iGUgFpcnXSEQo7PYxOnKEUGcCZ7IumVulvcz/tlu4JFgVndUOkwf2sMGPV4Hmt5yRDoj8j21pSlFGfAYyDPtCFkuVyPPdJiu9x/hRDMOfIYHoiPX5ZnGD8VEaM2sSBb/qNnHVszjIqGULN6HQZMyDKtEAaHCmM9OI+71m6UF2P0q/zz9A1uAfZicDhOCl3DxPNjfCIZE91TzPGLPPBc03ZMPWngNdO96XNpNmf4EZGOHxJJEbh0NpI/GdUKuvOU8mG4e06dlQsmu60apFsuHIdkdpr6THHYWEGwSntRdRKORRNqHf/pTCZwyQt2Xgr4KFfFmuTPRCsN+lt0HV0Wq7nNBGmym4NM4aq2NUpJZwYdZ+zw66vgnlYNPrApEGron3EhN16rg43e1L0ilhCmCdUPaNa697mk7lHKclmurgi6M2WnlbPegfb24FKqTO57KPg4NicEf4zDP2LK9tpbGyWmi5uufPJ8TP6cbPUDZRdNavj60hHJKcYIsBALHn/rEnUnWjh1FTq/yUxfTKOVOG3TvUaKCxqZ+MGyXor6IUiQjL1XCPLGPd8Cv6sj7IPW9fmLwA+PlnH31bscyG47K1z3sPeUySGzz1jEcVcbLUSbtWAAhKU+PcmjaDhN5ahRXW0nD31xOC5AtTTWCrbDlizb90aMzqJnUkPMQoFgZWi5DXoXN5lC+V0arinW8H3zV9Y6+m2oLR1CzClNtuJDY5dp/tAc7UaVsH/9HuJ0h2HYroNBsUFclkKq3A66350lZTo0gF6p13cesDhagGGDLQrXnVXcfLxzrMDgo3yzu0LLQCZdY+iKn+5sJENHfH77dqEtOS1w4YMjasafOuqhbgibfuB9VdFfdI2AO9ywg1/NDe80/BpfhDPl68azMdLhPubJWIGHHXvPUS2WePAF1VV9x+3vFJ/M4QGQWUbylqVQ2pjIINRGNmdYCjdwurh1W/4UN6OL3Or0eC5JIsXbeIx/1ob0cVT/WAzBhBEUPf0hLGRltqiswF9zTPavhL+BumEIh8UpRlOhO3YRbuFofYOTIAThtiRC5K6B/7iDEH/s0/t3dMDSpLQcx3P94neB/yhXEo9RG2N+A1obUcE4f1nLJynKIeXBF6W/gzBp15DOM/24NLQwj3EKYiUkt7TQvIyv11UsWEaKGVTbGeyzVgBNb3prewnnSGDvaiicWnHq9NxeQMxQM94WSAh231+LNJp0qXdnXdr5CF/4LdyWwK9tlLHXoVS/AhBnOLb8ys92G9qkin+8cXbTogCSE1zQuKRye5HZGMsAlcsl2O6vDuOk7fakcIabMGR0O2rnPfVab+6kW4943PLpQSykxDcudocPg7Dr5ajinpvSYlH9siCeHrl1vS8Z3tRDNASzaPh4GE1bwj6xba0U/s=';
  const _INTEGRITY_HASH = '91415012d716b473fe03845468ba8b3536110a835244a0a5cebfdd6709431209';
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
