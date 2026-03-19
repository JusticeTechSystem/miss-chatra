// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7yJtKNgyfqTg0uzPsiyoY0qjoOEHRGJKEKHq/fO8Buj0hiwvFBEgv4gFrhJv7LEcHrdtr75FaJNCGymB5E+uFZqred/UGD2bPFBMWJWVhESZu++9T2VymVqF1kXLYO+8f3XfgAvq0iRyvknMPYYQlMhBFUFsWl87elSOoQZWFggbJUzhgPdoNCz3CmmowRS5EJxzzY+sCa6v5hAOfn2rJxBaExwwN+JzBZcB7QTC4/o/2gTWzzrUdYU65SoFif1wt+hhw+RK0ymiOCMaZ6zwPvVKIoDsTYd+aNvjk8x7A4aFCzv1BpUHRh74bEIeSag6nfQ5nNcFebqlEynB7EKNvhacPfmZuyBI2W45PQgIvwUYBRmH7ZBcyMNle8UuFY0H/s/RmnKF/iZPmbgOghgfzw31/y4zCLRxxwY78hCmjhT7jYApbZ3b8OUSRf8nup1qieQktQ/Qec+m2NjtJ8TWZ//2+FqNQnS8iha4OmJ1nxxrbi9AuMUHykjQ6jTBUbcYQ9bE0k6SsRONMeCT8ccHSid2rPKNHDA80BYIJZTwpkCWWFIp1tRKlTNktxElXZZW7WpMV1Hv3hYiyql5+nUUV12gHa7fzsjvmJZAfRT3+rEuxoUoUqkSk6jjwe98Y6FWYfO5tDuWNhsvMF5iV07xtXt+Dxv6Rym0hXIiziwBLkKJpjFGWJTi7VakgUaeGwpBJeVPkQK+lFWBMamIXKxoXfSV5+NKrinbT6Ux1aahGNbTagJ+SUSTqVJTprdfr2ZOe86eQuLff4ydFOqi5n8RVFf40IKUvmqd1KwT7gxV0YXfB9PtBzXZWwRxFne3zxjhUR9OcPaHIWO9pivP05g4eV4bDKeQODrftuhB77bR/0votmNguWk9yRGYqnAla0sL/MyBJpymEEP3+mQnjb79qIBtI2+TYZ9GrSFMNlZLoCY/7FaItW24a+MxsnbcGDqEiWuvX+rvEGzVsT7Q6sTJoRooWCaU7eaOJxa3W+qntSANC7g4YqBS8RrOXVCw';
  const _INTEGRITY_HASH = '95042b76b98d8aac6d849dc106f0653a6348ce109a965c1a79b122202607d166';
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
