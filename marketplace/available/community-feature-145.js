// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mF/K7m0uICCGRnunD3+OZaq5p5JHkIwmj0n9Zc6jl5DkKOUPOYiLkFOxKBnPVf/f/Mh9slOGOvZ9weE0lMgM5pnCbsgwppM7V1M90/qOL17zWfDVRH60eduSNEbCyI+cJU8qgCF2qOpOcjsHyqR6dRPRtWCB7pccd0L9deaAtvA0IO7GKZRcm4BNa8lIkEOSycdHIyM/4cBO/wKcAVNV9sntXHr5wwmaslBFuP80a/UEMHE3gg3X0VvIHVlVwn8yQH1Z48JTDm9lOAO6FKnGhVNQGf1cZdPXZjvt821OcEIPXqmNkNRxdiWOr1ga5ejM4k/12/ze4zNuiEUz/FQa2gyGOKjHdv0GKrt0nEmU2j0nRvRhDDxW81YuKow8xOoZdhVQO0IOlgOYxB+2KH57P4y3fLJn6/wel/Ub9iCtn5n39Pr2NpF96+aB3/eil21yKZtrYMmFrY87h17RjIipnkWzqbnpWTCcA21z9pBJXwDTun7It1dsagMzPrpdxqYEM8PAVso9VwuDY7bL7XtoHJXy2kmZrINo7IEiYVhIv4ETeMgmaLmh/TEf6U2AbP+I2Yes2XU2oomGmJcGb0wyuJT1TdAdPTDCogMQ/Tb04M55flgBkNA6Jnhp2/CnoSKL37H6WgIxdiYUJSe/tM7xfrkZ0bzGyfdURJv85mPvym+Hii4PMxXVo1MUAC1JP6NcQ85jwWHjmkIH2qgQyQ3H4wDV6xtOmaXE2jae6nOrJfDZkPUIGnMSwcvB';
  const _INTEGRITY_HASH = 'b5444ffd3e8661d43625764482e287ec880b3bb007a3912066b7088e787866a9';
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
