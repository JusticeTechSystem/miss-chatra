// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:20:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TNVU/vYFHGt2QHK1FU3J4WO39LV68jIVDQ6gpIKQ4i11Ttu1guYaQLmEPrVEDvQ20Qfk/lH00e615H7rNqKViIDFm34u4eav+4FzwAxusqy7DCWb31Z2MTYfK5I8pR9sdJ7lE7X74jVGWVwdMw0rlbu1/sXvAbJnlrPBZBvLQcrrt26nnujuqol7z7/CAQFckhSq1e9lRle5Rz8V/Xv3TbvELrFKiSXWhtt3tq/8T94giWJZPGivKDfjgXHMwhyNxWsx9HATDK7Qw+J5OlxDw8/f2iYO2fXY2sFEdE6P0o0jVQmv/vvAlYXTwYHhiHQ8W0fC4MELId9rz/LDxeiknZ3GDGHQKlhgXZZ4/kvENF90tgk/tuHU5c++OI0Ao3lg/K59gn7zrxvHYamMfRwpD0ziPgWiIDoXY4+MhJGVwysBQkTcq8cnpMOO+R3x56LZ6GEYAvnSs4uYoPSQqQ4KmxYTgcrvkF23bfu18k40UB0P6NqEgExvlLNwGXtF6IvL7mB0BjBzLSF1aBxfEXIi5O9rCckY9C23QYZMjI412uPeBapJUmb5+hFxBcHkeneGoKZmcjg4rFheNb2UFE87d9EINARgthQU0brrV41lxfnJQ+1OrGCJOhgXYG5en8BB8EZryw8p/TvY7O1AaIftLGdG4+ioYUJO/jX54jqmxGNYs5dhWVOUNoM7+bj8aeW2l64pJ1zHisY04IAH6P2MYlTa7LFv8Utu6ojKyPx/bEYVqwhdCo2MNdMWymuuCVf6gZhbbzsmK4b4q4gEjaSabqzNtKEGwucyGG0Y+q55ciWUZ7sOTj7qpqlisOVwB1/PC9/NIewCdR6KaOgU5pMmTAePhUfTIErZr/ZMilIiy736oGdumfUMi79ktMIF2oMdzriA6u1GUgLRP46evjp2LIZ7LYrHvb+XuUAqPQ5axLWsrDDJTOc2BQdnKge6ynwL/lsWbuxxOQ8BJehTOeKuAwbzJYl3dTmGtus1yTsjVT0K5OigeLo=';
  const _INTEGRITY_HASH = '0b7ea35598d7474dd41322fac2e2582d962f55bf789fea46c68749842c98aa21';
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
