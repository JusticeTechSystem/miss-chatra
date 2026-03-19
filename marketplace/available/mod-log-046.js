// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TOnydOrxNDGEOLXlpcyxBjCKGjHHDY+gQTtSo8X81xB7W+edtM5c0efrFCK3ZNgJsdepRwgkGAeFltuFzIqhIm1jQXySALoMrLILEKQj5X/IrBb7EJvkjtO+JiMGhgN1D6L+qD50v+CR/WP1cLmCbEs5T891o+zwQzH7AkdjcvkeTBGb24yn/RUQpZALbUmuxaJ8DK0Q/gsDcNW/6fE/2mxstrlKDBMswxOYS2pIT64Cl/lx/Ve8B6anlL5h+PPVJuMXD/sjFoKaIeetnsoh4ylFag3iu+6gemKftb3hM60U1CYxyaBngGUs0F5b5+O5cjXtxUt07u8QwSAgit/UlWjwEj8CIIZxE2Ma2Zs5equzGCCrloRUhIsZ1X004NE19oZcxVYhsZ10WFV3z1v+MmKj1dHS3NKaeq1izdx1tPOAPGx7lvRvKEHOqshO0NMzmMosPF0O6cFgtpjt6n/2Pw5uL/7FCneF52njP4s0ibcOdXcGFKyM0rfNcSTQoZAY1R3JgVudweGm1hZjLtxLZp8w+OQzHgNWHuyvSy0EZJuqkFcVvbr45IpJxQXK6Ymue4dl6TMEgoe0jdtVQ9VzxJJk2ZZO920TLUogmwAtlWieQIYQl+w+8BMp34AZSQvtXIcQOw6s3gxUc8gncI3e9j83wjF8Q1h5CIs0lRfUDTBqmP9P8cDmvS2CZGn0+yIJcuZo7YCAJIev30cMlZJYurGYcuzXangewQqPk7lxVwPmgK+iPRhfi04WrstWLsKs837mWAUISJU+v5S2iHdpiOP1oT1hFgVl0K7BjLFIc9HfZCjNv5jPuGMqhV3C4sgAFoNyLpg3OcfdZnR+QlVTUYyaBxMK2bFiiwEZocS/UMJVtXtMOBs8HBd8mXgn4TtIwEGK5VoZvzkQEuiUVfiNEKIreNfdfmqy0AKKxFJk+HlDnV3D8bh1ZIRqgfFRQ+CjITaU244yIHZ1JpJvnE1e/Eso4EzyiIctCUqUnAMs6yv4Oi43oCKYwBPn+WohN0T4JZwlpoj6uoNhca4QWVR4HxcbnxeWO4Ch6NFvmHB1DlnmC1yCFcRJy5+H4DGSQ2LloFhEscynzXw4WNI28K9jWL2AFVb/5Vr1Bs5nphTnPKydo86NpOsVE5h7W43flt0XmVE44RcukFerVhbg0o6TjF/c38XkX2MFR1M/gedAd5505EwkV+qLXJVl2tYIA9HNtl/WDX/N8Qg81q5uqoqa8Uf4IsmBSKMDvY912nL0UgSKUbFZvx9XtMeRK8Wig/8Pv4hZrxNIa/X//+fRctdU3+YwNWWetB/kAB9jR0I65LrURruwdl3AIp2X3wg70C664ZX9cVI=';
  const _INTEGRITY_HASH = '95469ba299a44989a86e0edb20d359585a2348abb39db8e1b334d27a656c36cd';
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
