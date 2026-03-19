// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZHcOrTOUr/9RRdBiHImA6NTvUlrvAG0svsQwXty6Tax2GFsRwnaSMpOP32MiQ/Dty6tgoBVZNrt1/xn4PrEie8JzLfi7bEcXgcN3sZJPoPIP5lsSixfvOwFAG4podP7XHN98QJFHPSX711XO9KmpN2EeIIeNmsmk1wXxPw2lkPd/ppYgNb1Zz92dhvVT9Dmx4pG+LQxRiTq5t9C3A5mZBZly4025GypR315ucCdIRwPmJPtMVDADVuUU2AajWnFSXQrPMdlGSmeQyn3ZBTNRaIe0GAX8nxJc67hDp1WIOL+EPg7uTD78IpNJLtvRIxn5pVF3278NI3+DS7JYlPgTRGIc+9hNZXa202a5alYov1tv0+G9OB/dzBuuprTpOChroRusWxwTDPmSeTSbYf72oiLvbMOBXnXguaep8cT1u3DjGyqSRKNCEe51ERi8IEAnl6MxG/a47PJpAlyLNt9q0kIx0x5J/Ygy2gROei3aQZXNRjfZ9dQ2UmbJC1Ii7aj5rxdwd/rIu1gfyZh/8vVGF3/XstbbGffNnK/hLkzPqFnYn3QK6mar51GgZ6AGi9uNZMUzulE+khDYANU4GYJIzp5a/AJVn4/EwqCFuzRB86PzomDoxuUQ5tZhenFz1stToqYEYpydQXNCWOg35oSxolq8XgnfUOeCdgNbIU0+udpyws4ie4yZ//sAMZwz6jciOS20cBNJ12gqdJIIkCMIFsjZrD80tWAaf84V/CqLaWhoshZY1zY3u30QB3B6iIbjTR1zAc3wUlxE1T/dHVCX3KMt7NqYE9eWzPrPTWG5t6yTyN7C5GrI7gcADq1pnmoLDx8uPFDLIi4IYlAJsayKool4CruAtVQ/Sb8eKVxLIfykSqeiBn83xi/yPqGOsvdInqvXLZTV7FdDgjhDJ72okHHO9n/3J3CDldilI/fUzSCvR1f1ch8IsX1Cftg21fUHugqyIGnERjx3xZkPHWRgyt+vsWnjHA2F1PoRphCooyhMZ5t7UQoJHo/D6boLvi/7xeTAeQ==';
  const _INTEGRITY_HASH = 'c5d3bfebc7d8c43dc012cb318a843c3b2df2849af7b9e3cfa75d523ccb884460';
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
