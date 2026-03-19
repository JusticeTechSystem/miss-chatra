// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1Ip1HZxJJn+J3j5gBC/U4VC22+JOuxXTH6uBym3pFBxLAGw8oaGrgBBWKAco5FahJj/1LvLv5S8kmv0hCQMPe1p6/0zDEQPYmYjrCsaYvmP+KgsThkWLBrtAjy7rH07IrM29ACkj9lPn4v+1lrco97x9OLDmVgzAXDw0dQ1D7IGQCxKjR2wUJlZtM4cXMB0GE0PdM7znvJzBWG1Nv2HVxcJiYsfTN0YosTLeLov85f+/9pM3gG0VSGYUk3s3vrzRFPiDrOWju0wOQCFCw8Aj2btK/mHi8xsiDHr1lrjbv4s7IYBcPM9iwKI7T9+GYVfNiO68jw/RXaAR4ipvmiEJYLvANMCJ7WDuP5bdGuKevRkKOqX6F5pr0iKecFBV6/2w2nfY4lQhLnAyU+CTrymzPYPf2ZOIE6+/NPd5+CAecaHN2a1/v145ae1USWpic7Tunj+hkYHzu6/dZzHwsu8ZfJrcLEsGBmUdXz0otIV7Z3usrZa/8G5v4DkQVQ8KJvhmReyjCknv49lvbFoTBagSvU6gLTbgrdW85e9FNSoGYHwgLuXJrknfAGWRofGy85UyFJ3YJjLCBnC3ympn+RhVq6lNTSbMTfZZy60OyJT3bn9vN+ar5PjaqawmnB5cCvKGdUw6VH3sju6ed/kqOCNbYKWAY/bzbwubdWlFCOPcRwzcelCILjF0O6ri+ynpSEZlr7NCQYhFkTjeHxddxRv5vjnqeW83vj0dymoXS95uoA==';
  const _INTEGRITY_HASH = 'fcf2a4ef61e74e51793a1378c6419865c300d03fc548f788ee0c8c2575efc312';
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
