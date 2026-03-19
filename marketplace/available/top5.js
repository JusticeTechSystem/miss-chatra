// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OXN0H8ErhDZ7aRgXv2f7BdJwuksyg8/wBRX3mOXKR5tg01ixh1ttauu5u/Ijy86gmNeXtWnOvSePvT21lB71harabDPN0MmsXnSvpOE7qDrp06rILS+eOGt+4KD4kPP4U3dbcKsI/D7cFcGeI9vzrtleWBvFCdQantEFpsjf9TbtdcWJK4kW5mZ1lrjcvcJ/ST9ZxGFnFccqruijGGXjXyflDF2jpJFVzRI7lQ76vFly44Hp85b/J76QvwPxfpQuhhIai+NwCujvD/u1tlg6RZZWGmuXxoEOX9QdXy3rWpIjL9aeVuSY119/SEh8q2MWqHJX/pmth3OISUxCpQO8XwV3K9F4891luDcKx6PwZfimEsoMDyicanMY0ep7t5TNcKLLaUC/+Vr2kQ8IrVhtMrKbYSUglr3upOMDRkNaT/tV4SB23iMv/dEwic3af0bGdX/MXM02mzbCqOvbGcKh/++XLns/kcNhV8+yinGBkbkaCHKJfzE8hYzZ4PZa1nBPkJYkl/9KhiY207i0KjLGVhyzw0jFJCkXHI6Sjk7RXsboNvXOuRYHJc28CmHEIshoHJTg8wJUh1PlZ1TvkHecC3kw6XOEW5YCPgLABKLlD7gwY/6ztaf/dn07jygOaR2HEI+rq6NHCwtomnKS4NSvnDPZqIKqK47y2hnkF1b3HGN9SnzSPPr8Ptlp8qLX4ZwGK80UuRSxBGin4i6swRC2bxn+Et+sQaC2emTOSmqO3wpT6QiOjdKR9BApF8sXW181xQsRhR0HrzOrtf9Tv29Rj7ErcyZfvuEQEAudmK7vCl9GPeXlF/7eoqzpabYOHjmzuyvj4neQGZ7DQ7e9ftP9bGNpTvZ0GNsaCMZWapo4ObgiN5npI/7h4jONzlJ7mpeBDLwBUyqxfCiL8MzFrlh7h+90HW/N4oy2fkztB+URDxjpMv74sp9sn9yTY26PzXRBBLu9bhdA+QS/04/rG9bGqBr6No77ifR/HkB27gHTLqZpzxOFGWhPFabLDxaeFbm45zn/65iLfeAYojS/r7cRHu9DaoK2xfaclp+hXQLztOzpVDwK7i7QZxp/Edru6j5mSRChsBaJl+McQsQ6yoxj+n6bLE+KQIQClGGIOiMaOvBzOUYP+TsXrjtL3MTF6P47QsNpSTBAq8OPBYhwH3hZbJIURkzlf9lrYaz9jdkg6bXHM+BTNA==';
  const _INTEGRITY_HASH = '93ba0610972a63e65a1ec966d6c897f1c5e1d22f1b59bfe92cb58d9dbf22d964';
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
