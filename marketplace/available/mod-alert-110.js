// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oYbsV0msZ1fh59ESfRS4YxHXXPSvnDjKvFIa2eMCJjYaie2QZ/WF1mmPi1zxslvPLN5z9DH+IHJ+Or0qg6WqoRU2LuCf3XymEx2/5IMyK8sgkJZERxO7cZsEvjFI1Cch7bbeO20vwLfvPUgW2dvxwae9v6VaOvuIJ+HxNxtLAqcN47fGyqQnjvALFuHtz46t7No3wB5a/AVeVfmnSyxyPMqBoGomNWUKNlZu+O4efyAE+W1ND8a7OlzfO42/OFBPfImv5Y+Guw3K9VCQRrHluTOhs1YuDUUkYVPgMOGV69rcjXsR+IfRRosi6MNin5sAbtn50NUt1e4nd6zvftFiXKjpcz9pIK9vn8lx/EmzblAUHZoNYOzykzavxINFH9bGAgB1YjHhEZIW97oGcG7S2U04JGJdBUPTsF6C0j462BQJeSSXFLvD5RnhB1jmYjQACmCEawB73OKg93DyIWD0mNEQQxq1092dtYzMpEpCxq7GNrFCFtQJQ6pB244Pj1f4AUyHVd0aeFb7vzItzilrlO/4hJdihwDuIzxBThgndwmDCRwoArHf1QKrfshgqqlULrSDCJAqDWGJYBY4A7FZvd1AMTKVwLaRtOzNLrL4XUY6OD5ShwdfyIYBNK9MCKL8PppcBfBSM7oSMws7ZxLNrfqdyV4JxIEHXJm+jLocLzs2ce6HEcZnCVLFmGMPQeu/fUO1xLB6nzv6P5z3KMPcTc1vN7x67tGxDreLzwjd3Le/EiUrUwPaVqOemfcamZ2V2qez6XHVPg9wW+ratF0nvTCd50GSOY0gLdHjdgTFYmwneVWAr5x0M1J5qGBhPcZWCwp4gSzanM93gjBf+WHCiPb+gifNCoYljVu1bW9F2EGKqtkUnBbBcSALDg+PDJnsuWiXa39R+4xfXiFLi21GOxlGzcpOb0337hzMVlbu3ZQsc/239uqlOO4zxu2PrgmVY7mdzd6wk8wOw0ss0QQwfANyIKy0u1rCFhU6QOPnqA1jmmXnGDDeuIo7dGY4eDYOqkFaCV9KqNz3V/xpt12wvsgqVRno8b6N3qVqD6nSaU/VzZm6GTAsgmr1IhkyWx47eTL/OfxcDmrUVrgyryG4o1KQ/PRQPavkzaJNlPz1EgYiPYXwyPYqTZIQPn06FSXiba6Ak5+BCU6dAZVjoKpORuf1577F8RJEO3XBr8nrhkIz21Jx4sUfPf/6n+jzY54JkZOGMdxcjhQVJtZGm1rJ5taqt69gaJVZdi7YBtIgXsDhgwSVml5SsPepxVZU/AHnF6Yct4ReJOBZBqlKcK1M0afVafIOCJ2I4PCHzJZ5uhEpXALKPgSOBoJUiykYOBnufms07abdziPwhQQEoHEuCWJ/DjvD2d6Pk+ZQhlZx';
  const _INTEGRITY_HASH = '45f19ff7b88eff0ef4c4d9bc80bdea5b850cf89b0d137fd75c44bec9bbd79759';
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
