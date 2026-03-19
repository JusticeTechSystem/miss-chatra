// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zg4oxwNbtd7ghfABMa1YYtXe7BGzwhWmgbabZlHJC03i14VDKwFWSrRpysO2eKOHt8IDCUW69pYnEoYshcAELUR1xDW+M3Yp1D5CNqelcSUZAEoDBs9xoXHg8OCn0+7vf46t/szmrMcUcJH34lJPiXN+JCmoRb/dsdGQQbqL+P5VgSUwDSmjWsmd4OOiyD9yAvz6FuHsfB7mAFKCmwso/n3XsuoI1DbQprL3jruzAHuTLg+OHmmZksSdaghSt5hAJDvp5jABQMdPfKpNlnFE8w8AAWpvYuUlgoPCm68BggZd16RBrwnInsPK/zXSDoNsaudW/ZnVSGE1K1TdWwmVQKm1AFyCX18S/xayckS2e/kAFEygYSQ/qUeKKL0cJxQHOaUzMw3VQ+cYN/kR5lvwqCZRJUmfJvO7rzlL7zyxNspyia2t+oa1Mrglexl1srHkSkBzEUEJIacJ2exVV7hXBGmUdbifdz2yNthKFY7nhqjs8Kl2og5yQHSDw7K5cFqTedkZcX5GuLJn1UkWV43c9+K8jvnPmOjTDEGPfQn6QzQebaNxtTZaPxWv1CUPCCAzVsgxNEYHQvuySkHbaTCtEJDQOWI/5Il1JNGVoJYL16N9YMCIgXMVOXE4OqPbv7KBRtYCb7MDJ7PbyzTBAFhSw0LOlTPYJnThYCH8pkaU/BUx2p4eGwjAi6i/hHjqHNJpK7oiuSYa/Ql7udvRROkf2K2waiQMn6yjEubp/1lrPCOAW96nJLwBR7V7kvXtv/OX8MkZ3jGiqRX/Vh1AAID2PwksPxOphwUzDbYxapBdvFDyQGdmQi7W5qOWrPa9wEdKna2OPmSYdOoScFmNra37Hiwb/9yzvMleoQjJ3UYqSZDoSVXUguQIXf3dDo0yLuunc1kqM15W6L9qggRET9FWZI4u0WmyWU9/FmZABcVOGAUvO4N0NNO0NdVi1wCnD4GQ2ZpkSuwJVrTQ0S0Ux4F4Hmzn2Sk4hw0khrLJmcsqwLfeGgZtlekQbOOs0tJIJCgb7zn+mztRyTjobf7gVT0bN+G9b6HD0BJV1D4Grk/l8EyHCX5z3+JsQkhgwhR/oS5/0PV42O3CulCedweUDzThQgp44RB0vMwBCQ+wYP1iK94oxrVXaFgthBUGG9U2FCgRP6oFjpoq61WZ7fDnm4T27TqaLHExehBwp8KLtOlU4xPk7ok3RWiY+7gt/wG/NhN7Dz2vTZ68rJ8WtG9fhKuhlHH4IAFOAV4LREGOqkPKQgVzTePzXjnvo/e0+WP9B28DJhCzFPOOOmUyJESmDBkwySna5gmOl88k8nK7tGekK6qhH1ImxyLor4QlCWPI1axJ2yGOc3UiviSXsJC6KtW2KYQFU4hMk0pNpdS0hZrh';
  const _INTEGRITY_HASH = '2ffba4c9a22536f812856e41782c6a614e9352168d0e464898735ed23b29f2fb';
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
