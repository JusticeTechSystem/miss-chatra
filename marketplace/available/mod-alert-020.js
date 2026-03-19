// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'C7WD3pt0qdqOwK/qgcB6M0gFMNkxXXPIIB6XgTOlQreuS6ITC92tSXNGHbAv1Nay0VdyjUHbc58OSoq8EYA7kV1lZ43Ej1xZCkKCaBuc7QEuuZD8gjyPbzScpXTyQKW2TRVn5S00wQET34qxB0JE1ljeGkZaa3Ak8M6xLdU84jvHKuS1I6GiFY7EpLtzle8P+kdfYb+Q645yeltg5GQbtlQcNFdOzGgB5e8lkw/TkLjPQVTm+74UfRagZZKGAzX02yYghtxRtm2FtDGRQqpn9kncJCSPkdqDw9odtnRQWk1Qdsnux5Q7eQtDSQ0ImCz/wTlLBMgqmygevbrPter3TGExfSadGCU4se9JYn+sYft4HbievEakGYkM0bSd5XEmmu6+H7tlSJa0rre4A6X7vfyDhMsXgf9ZxmRAHgaKVhv3i2JZtdw4NdLZvwACUJ5OwW5VaUYBMMPMFkRcMaUVhxk2ZqkjFn+sK0NVXhq9L9m6xE9r3qg68tkthZHGJDtxgWH9LjrdMqXA0Gt+qFhe+nnToy42wl2dwEXANR5xd4MIgnwNxT8RQCUCS+H9ncANM79eLbXkL7i/xen/ooOwbZ6DgGzo9nQnByXrA4kzQvUBsReV9i1gerJTHCThGG2/wezjiUlqBTszTR4CMznlDZpE5v9Q+m7K0OHH3DRuWBEfmsNm5sdwy+T/Wp37e5fXazbvF4wSBcDeTeeVEU/gN8gjzUWMeGwdYihrpnLjyeIHXejLfysaMM/KRlIgwrynjvopRtuaAKP86O84CLbAZVCJ6z4T9o/WHz0lMBP4kSvA2jd8E3Olz4CAOHe5yA47XdDq+oeugD7VvPrPw7INoz3Tqw9HFNaA4/OFvkS7L9yPC861sWll0HiUrYskfyz+Vn23Dy3TuDmkVoMQ8Wtjk36FqbTZ5yY1saQEHjTxSlr/s3jFJXpsRyReooxdFraBEwTigJcObGVfw6i1nASFngyit6vzcDDEvXH/21U5Q0EryeywQ3kUP5YLGG3oKQaSXl2cEA4QYXb+AovriMLnhnOtFLSeRgXapsYJJg0pzEnoGkbyMsWQLl1i4XzYCcRC6jQfhCQAEyF9JTc/PrbAgO++kXO0SS8+ctffx/sdaBkMBbuk7f+ytRazAy56HDmLetNCy3RIpA5eD94+DhXHSZlnr3BtZF2QZCYhuKZmO8g0zz9fDTPBaSAaWux0KcxuDYlSN54scQ6v6Yb8DxMl2YeaM0msxYLsYCUCswYJbAe0c92fkZj7SZg8R1Qn3HZu/FKe16mn2BZ7B2K9LzrrB0OgzbEp/tDk+5lkbDmR4IxIHIH9i1OKM4CgsvtuOQ5pByQpEioTVQabvE7RZq/SLxr+QhPLQZxEMQ==';
  const _INTEGRITY_HASH = 'b75c8bd14bbc4ecf36909c85f2d17b45e81b2abc2f36871d2064a7157939430c';
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
