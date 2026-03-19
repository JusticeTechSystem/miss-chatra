// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fg39vO7EMfQW2fTHPqxsE05D6Oh206YNoOXslvLxn5Axrx8Wp4cRfIMtqXFEs+J6byj2/PNS5aBASEVBHjOaUbaCBbxbmdMoShWydrzjaakj6x5zI9/8t9A0bJowfBEmD2kifMomhTUQHeg7TYN5sRf+bWyKeAra5gveKHbw57ghxeRCs+7FYPJdr+lSz2hWnhsiOnxTqOJGEsab0I0hnSSwI15F4mXyr0yomCeYWTnLxHUamwPtlTHY8glXkk/NhfINMt7T0mkX0npwzC3I6arF+uu3skwJHYtAYfIa1NB7+hEpl6uXGJsvC62X/UbICTD5b6TfOQa8JNsoUTH2cgYbSyBwoJSgxMK/2+DmdvhVJB67N28e3Bfhy/69xmhAuLwyBmswjmzjupu9RZk9g2E3L/wtWb4gIFS3TtGGIuW/34u59mJEvqFLDjaJOLLtdrQLNIP+oUTZaHPf/YiTA3ZGz8p8icjXE9SeNV71+jRmRIiBD+UZKHmLE3r9Qtgmdaz1OCKMFNI0NBk08MOWonMfoWd1LYw0SsKExZqCYZzZ6SwTL2FgnEYJ2KWqU3hnHZQD0zTSqItjUXnGqsFz+S6CG1NXwxJ5SVK//dY/nDJzv9rfgj50whhs59Av4xg4SiFtflDlN99TxUXUT42eX1vhaYqi2Rc9zkNqsOl41GF1Tradj9/85wuEOAgU/6y1yyQ3+6K9dF+42CNk4njVAFBpzKeaXecu9cgal5IWFq8pkakIzOs=';
  const _INTEGRITY_HASH = '6bbb464424fd61bd0d12acd48e666e40f3376023543e40ae10f2228d873bf019';
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
