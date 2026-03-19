// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lMOouJVqc6mSKhH2d2LUDwQtscc8Vok87sFFvMN1avURnXfR8PvZrl1KB3KzOASgLPniRyOqVjw3me+MJvZpo6wvvCNO6YyVCkUfSEtqT/vWNPt6rYgDsq1zKc32BGbxU/qnqtKiSI92Si7cTU+WVT8dLfyr9klRnC0FPKvG6LY3xPbcEntBFaEYgjRm6h8yTMaohfZMYqtAjEIyRsWcgC7i/3pbRmhmNJDKuQjV0vv6ZmYALi4UikMcQR2OGVryy/myHN39EI++3HnzIwrzozT1YuGYpcfWZ3if59Q8fLwPtWe5qFgAg20FlfyO069C1oXlHRCXFRgFsKWiBjtAlm/Un4Z6vus4MLQ5ApPl0cWKOMEBLrH4gYa6w81GOZEf4MlzcPP6u8pn8wmjS4OyjX3Qbebk0sEU3FD1rg7k/X7oYJXxSnXffXQeG6PUmGp4jQwJtqY4vWXzsXLkCXRvzL90FTZV0yJGSgrCgXVVe3CJCqQ6RDwQBtC9Viz3ne8SnQuXu4IGhjlCfUkHWIi3P39WBemdGUCAJBBxBQcljH6gWJsu28xuI0YAEWltaPvRscbyLU1MxXXLOdLVwYE3BBI4NbEk5oLZrl1C2cPvrAT5/icTFYfx2qfl2eDpCdWKK9gTcS3/oA7yefTrD0xsO35jRcnStWEv0sfXI9o9fWRpRbz7UVuyIN1YpMYb/2BmkzHhkXD2QDgEwNDiDpdKP1bF9LThUwquGDwlZoSeKXD45Ei3UAM0yUajUJCRn32C9SkPjRB77Y+QnD8SnSaOv8qHRlwsYwGjenlXy1tDWFnRjuqqIQPTlL1lXjkTAtBCMXWkAboEx/Ir0oKQGGgYentOTCwUezqGObTyFo3iVw9zCe0we/IUVyFeX9fyHkl+R1Iqiq/42bTQlcwc3ZZuGORyS3UnG++ZowRbWf9DWBEfUF76QFixjBS09MTxKL2bVWTyTlBw0gS0D9qra4I9QwSX+bdZYuV+ivyr3iX9rZcO5LpMdjbxHklB/G+zZgKXMwptEp7xemAH0t0eIJU7ogL0k0B2V5jGEwxxWTW3k5F9v6DgYN56ghFc5BHLWu4xs6afUR8894PzmKVd6Ja3Gh+/gGjtpE6RrI8BlVUCcDGd2DLqcvwYYTTjyPPwNFHcdl3VHywtUXPl3bRfX15Vcsk+qGYxpMt2Pj4pWUavm36L75Z3u1+jZVN3wr0tRFmdD4JGLR4MY/eOAL8Yk/poKp3lbzXGgmAuCYtNIIb43itMZ28w5obfmMU5uvEqumEG32weBQnm1ou5gXPNPW41idJghuDNs/W3Pf0LFWfqGQrABswkXFViqTSLiOEaucFAmH0bYIR6RCJmB0Gj3qxLG0A3FsebiWGhWw==';
  const _INTEGRITY_HASH = 'b8d5feb5d881c4c402090322052eba48203c09820968b274105a7b245ddbfc1d';
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
