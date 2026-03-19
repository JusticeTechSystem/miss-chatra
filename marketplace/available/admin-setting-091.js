// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Q1+K4U/Mhhuxh2gb56GibaTmGJ4UbejUpPVoRWW3p1l5CpWS7T/+0R0hHdZ/Bd1QL5HyshoQK41ilLcNyj2CeLz1Pta6WcLSx3nMWUpzadChUe0FQRW80RHsCinTB0rxzf1heEB93xOkG7fOaVGpMPS8k8kPNSigBdplG8iZHWSJbUASnwzyYl18XmTlcC+Cd1nhdW4QmlK468G5pnBuJtXUDi3LDq16jvpDH7Y7JDRwiGE6VFdU1lK/o5hD9E+VaGg7w/Hz1PRGkRiZRNjIBVxNQDIm44cH50NjoEIHvCMM4ag3nI5AePvJ+B4owfiTcnpsDPSFPmbPd54yjZfUhl+ii0vujaBI5PB5SiwmRtdlYXnmTHel5yXWCzhTDQW6TAel80CPVbKK6gcOyOD/Qqk0MuZwPAOuKGsnb4EUmkrPyuy1sHiIU1O8r0EfgtyM3K9o1Hlj+yBq5U4mcJPDCk4BM1/1Ek9JnM2m9yzhlGce2T6UUxOu50WhXEqLPlQG0WZqhhocs9d5jSZHCMyBCzWwm6JAb7yV7C9CyEAYypAijQA8PpqedUrD6PiIJGlVxT6FSwu33D/7vBwPzVYbUG3DjX294cQNzaDidbI7Q2TM2nttmm+yXIDgsPwKH/NEuCPL8xQJy7W+cNTwAV6s8VfdsrKqSnFR/dDlTopZ18mS9sf37Qk6Bi1d6RPx1BQved00yYcjH38vwNndsJqRHGdrFxOa7Q87/OIvgjn9N5USOazQV9KAmbamdsA9ZshY4KB5X+Wnp8Wrq5IHiRP0Ej0uGCQC7JBMr8frS9B2+ghbadOpVumCh0I5Pt2fkV1zqIEZByIZP+OuneiqOGxwhpMB16YnyOp6nBwwQLRSYfSDY8SH28TR8c82uI6r8I3PSKuL4H8BgdSreJgY7GTf3pE7yq6tgMce6J0CAUQW3B0zRUGo7CneDUOzN3OYvtLpUh8Obl6eQPb8y1Rl8bqK+BPetf3T8Hj9m7ztz2AhYb9yh/p1fz76zXeyljo28AUWpGv9Yg==';
  const _INTEGRITY_HASH = 'c1fb25772acf2fb245cf89f91378fc4978004c19bc15d86b9614cc89bb335ee2';
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
