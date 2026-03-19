// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NdvOquxMoRXuLjsvbs+L4tZNAqRmPAbODRIYhDrjFAT3NWxUgGgcl1tL8EikosJer06BaveKfmnlw6aVr1ht2NyxZeCc1+0NcCJyjyWjKp2C8ZP2+yWPB8Jz/KMZmJATTsqMmpDsh7fjCncIZRfPfDtwmgNxa4le6D+yo+eGpfrJYfT8ZCLV9ewBANM2osmw/pgoHlOL8V6dtErADARR/SJqxTPzkeQfl7f5KfzgrK11RTApdRUFLgDKzFaNkKrOiFDZGgEQSicnSiZ3GQ8lOv/rjk1NJeox+vBG70Fan0/WFf1sLpkVpWRoYBWgbXoIh6AHUR9YziGh3ovFsAuAsMdlLkVx1CdtKoQzXO/0g8mCc3S6Cf0mBx3w72hM6FUHb2l+SIU/1CTeFR2EsuLBzir6wESKoYLzhCGFIHhXCdTpn0j3SPbvDFWB/tgzjRiGnRmqkjtvzAanRXjUyZ5Ue8MpfNOkOtfJFrH82JTXQGGeYzk2/TaROUw3BfW/1s8eQ+8iiPiWIqXS1MoxfjfF3WfJpZI48G+pGjB7ySIRS1nlk1pMeP38kyQCjKzYFoHuQmHQBKjBvTtOlImiB+abjjDjtfTSFVTkjwZH8MgRqwNenUhnU7agP8TEO6Dy/w8V39iocDcXXywczSFvYKgaTPx4EAoOTBlqfEwxleLD7vRg8OI9TswGQHeu0UayaOfVVDhNK9UmVm+TzA+QI/6yTsm5hSXot6/rMwqI+oLiBcb+04iX8M1ZZSSDseLNxmVPo62N03p4zm9ItWaqmpFpxNBB9W0Jwbn2ZSrgOWOEHZ6D+th87YS+vumsSEbxDGung/+0MU40Q6DTQ+VsGcXR53Iq96KqKteVpiAhO0cWSYJX1ytU1m3EjWSzoH7td+J1VVibBF9eCCplukcJ5BF4Nvc5RhDrHw/9Pe6xzViqRNGHuJHUvIJAZa8N1ePmdYhLuC0VVsst09N7Gdg+UjR1NEKhzgxdtb/MvSlEpiLgYVo1wPXuZ4rUNnZ4xn50mfxTPD41DqEoyP0qha4TNRCPWJ8d89068t8rzF5f2whF6NAnkvueJROldTIIThgoPWzookwSIkCir1+TfbGAvxNGO2dlSM9uCoHepZbk4pmgjOnK77GPop88+8OWu/haWDbL4/j80s6sGV99mQB3euzQj4rmMCORKDdR2CZ5c+4S91l0nXQjKNU2vOwZLEyhld3HGp1z4yeIdNa+RFBetFJohinc6EYvL9SrrDoxXONeyRVnNKhOHa7SR7HnKj8ZMi8/zIt49Vof0zE6sgUmAGuCWIvJsVcQBNe8/OIl7p8s4Cwli/k+eQtWQ3i5XtTL7gdhAhVjTjaL8rIreJ3yk5manuq0AuzrQiwtLu68/Pr0';
  const _INTEGRITY_HASH = '6946ed2be3449d2fefb4e18262066ae7f2cc8ab5db74c0456c9f10700ec2a429';
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
