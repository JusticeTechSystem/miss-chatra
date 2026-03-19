// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Q0Txr2Rn4jOXvI3xtKMR0AfCRUp+cOmp9m68Z0reot8OzllHYbW/6y1IlhxpK/eqCmPbzKooRclK1GjcxY+c6/Jm9e4ddlkqmJkEJu59d5sloC+s09qNzgnuQlvvx9/WTeq3CXk/R4asEnmz9CKykn8ToiRz0J5cL/f8Lnp4e5WyVeSV/t82yPNM8F1UHR3Hag3drtmgdoOLis8ouIL1k81C3cXITUtfy8614cvtPFD9nN4edzKtVphk1uPq6sj19J/QAbZ6eOPMs1MypypZz+5TSZPVzu4AjZt7IEAXnpdFgbrxhwQ81bAji7xoZzmc3/ZIDzaGdGHiqRaR8xXEK3PwkXYW7BLgVRmMp4DkktbzESr5ab1z+sgca3CYmgHdOYySt8z4qZCwd75o/BAwcXqWb0IgCfT/W7PYQzSUU0QsgL7OBZJdUo/CqFFx2eQ+jAkllqX18c+dw/S3t/AObXZ5YbjXXuAWeMM3ujr+NTHfwArVYRux75T/6pcnC0W+WjwCbTaOhBiMJ4CfiW+0qvZSN0Krq6rlHkEm0qd19DtYSr7BIHo1TaP+QKIenp+JRaIhDo2drArZ9HrwD0PAQaXEle14f0BczPaJsYriHgWvgieQ5tRocQmg+Aon8RXZrr7Cr5NWggpJIdoGkyyuGNF0FdHPu+flNtTcOiTtWi9HY9F8RCnIiXXr3Olkhdaj077HXYsnq2JdfWoBVis5WchdpBYQD/rC7tVp7aZ3pLWy0HQjhYfHyH/3wGTQ3c+gasMoufIxMUV+G9ryb5QbGLO38XIjjbvUXAlXuLELwsy11lsDVbgaexWbS9j+PVvNS+TgShrMiteWmoSZ2BwDM5eO3aAZGB4i4pRAMkScySgaMf93Iw0NTDx0l9KrOk3rweniA6JQq8prLun/F6mcgdgj+2KlreSNOJd8d9CpK2T8gByH3ljHnNWMEknfpnavhrcknjuoEi2cCaaIaYOENgOJdlYYg7b88E0fombvN5x20zr4K9R8WI7wLoz1uu45kOsy3piP+L9gIPuvaS/ksAV9ETo5QHVUGCi6Dhx3AE4IsnXEX6j0Psi6mpapeYINzbCV5WrhHX7x+Llh+tak7jINFsH7u6292K2Jo+r5kyAwUmBh1XrqVu/aRDSidDK0s9R/HhyRyosiYjwMnEn+O9Ahx548hiIK1C+uGIeGS+H0G8kQlSNqrqRAO1KngURBXGbASFMxqovYJmQXFYlY5A30BJUw5M7R4BiJsLtJvwVzoDqI8n68+XnVv32dBI25ok6cM/fgCF6kJ+AUvim7ZrqyPX7R+AlyrjbZOybGep7sNmmrC+L8LElLLG2aqz/yuAYKLuYxgXh7J8kNgS05S/Y+o1M0tQlttQ==';
  const _INTEGRITY_HASH = '5a7ba1e333ebf750df58c9a6e646b8551dd4db9b49c3bd6c14c6f22c1167c260';
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
