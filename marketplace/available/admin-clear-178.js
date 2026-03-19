// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kXOqVfZpwd+i0sWJx3eKPHnghpa89/OKedaGev2dBKYuAxNUGM75IMqykqOmd2WVNI8jLkK1qy5GCXHnHQnvu0rx59rz0/mx/DUzQlrqA6ujrtl/QN7HKwjf4MY8IALKw20EbhlCIj8ZTX6objZES377rbfdK5Bp/AsZtEWIOJtFvA6lvwAgbecKHkwDC12NbstvOLbXxAu35XRn/kfdlP0y5HS2VD3lotrOG3DVEFdE7iBZ4w/s2ImYvLieLHbd9qjoFfHRJt1Py6Q/D8mjpB+LSwdRm7GshD/nmVKujZRmHvSuD05yf9K21kHqlvfdeXdR/uUPDBmWL8zMuQu8Yd/bkynqtCAvuqldUZTxcCG6Fp00VnOlzIXWiN/IxiWrsZcSxPIE1ipzAN4ANp8+RHZbPdqiVWFBxHq5qFgisixKKo2TGuFXJyCWcLWDTt0CE8W4uKghDPXqU+oWvQXRK+U3DngCwMImcpc2h1HItUo9Ced1GXBivYfgKGzLlSX8y/9z7mTv37aB2AmMJUPC5r+akj9dvOmA/yvO2LxKJ0e05IzIsvb3MmbDnajQcRj1RKMN/zpXH0u3Ci74PQobDWt3+h6lrJalfNB1JZwHP8B3k68XP2KOqZ1YRSDZSfsPru1aDUxNPChqc0XCNsFRrgTsQ6OPqqXL5vonnhAfDmVdMOQqlQdJm5WGApuuJgnBT5W622C/750PoeCF1nQU5UgY1J9rb11HL8JfNz/AzWWBOsfJHEDleb50enuDa9X55ywL9ZSyGM96KBp4WsgW1KRwojQem8xoVxARf0B69On6lQ5fzAxaLnDpxcuP06lFId/4z+IaehnbO+2NSGqlucYiyMwkRMLplxOOJD8Bv62misB85kNsdOoI1pg3l23XOYTfKQUXefZsDXxaHtqUBgUfe2Q6tKzKEbkYoEW0VqHRFetFGMLzZhoZcETalF/xGOuuTtiJ8q9BOE3slJ+vcEJgJczOzkoJkHF6oq7c5DwiW21LmmnDgI94';
  const _INTEGRITY_HASH = '6430a9a7181e43f259f2784d54e903de09df594a1063fc6a03a93abca51ba47d';
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
