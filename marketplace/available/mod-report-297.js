// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YSnW/WNFT2SQ1PDHsNmbupcMKQGurBuudnkkUC8IKTlHjEwWVy+V3UbVpttMoBxxl24SGo+2bxGVI7Dos0jNKSqiydBQ7puBqh69UeqMA9jPyzvwrUwrLf8sDl/Ghsf8GsipEuK4XKWaaZc/bTelWojVF+9S4Y2gdIoYH3Ossi1prKqb8559INp9QhX1U5tLQa+RnJ6TyiAkJQ2K2+Vcn9t8QyCVVnY1xZXoe6djlB7Tib0588Z58z0sAn9XqyFBiVWbauPt61KLuWXICvDkmHrCtbMvRk7ds9/3wAYgID6N/X8HJMroiSfSmYJMYc1D96Z808loyF+xMkBYhnkZhKMCNkZvXcjgaIvJVYf04BBvJjWyv0o5nHRFq0sKvST+72d2/ZiWPY5YAvGM2CCge1L6pQpmqA+nzKAGuwnM8dKoNnIaJX5kv5xEnAKrQlJeaWpcrIXYqm4MAqZZOIUQ2M+6IyrKRZ6zRC5JRnjaOJ7gfgADZNfpOXpPmJpRdhSW+JTZeg69uUjMPopGLYIxuxC5CLv4MhcHdYyAwGJTWXRJ2VJR0U30mksaN7xjZix4IlnB050LG/ydSF2TsHoMrWLVJ3XnObxiKPl5p34NoK1r28EUICbOUwjrsKVWhLR6DAJoqlouRZaAwKEzgaxiv18PMCayvKPm30PNKe0s3hFCtM9HEPzher8cDHBRLtWe8GWYIrnF8AZEKsOIWIHs0L118/ERANrMLCO8boeYnFMKbeas7UwCVu4NzX9qC0ZoilSwSXUqshdTssYVMiKZ5kX0hgW2uk8HlP31kxzt5DR8j9PlUKzmNAwBP31C3eEr+iQ010HaKZXWFmiPAWb6DBfjE79GhGUk2+nct4e8GqWdVTDowNslgcd0mUsVoGMUqFVtvCdTwhlXPLgydXGFkDZ7S2Qlvd1MyD8iNeHsj9t1YATw/x+iJgsPIVdetEhnomnSNSl5XRBRdxTOmVl1mjEdjTKb6/+fmm/dJZ7Lu4amEubZKyfRV3IOxF4ak4d6N3UU8kFmojJiWl3dDNQgwvYB6OJIVJ6sJ79oyLn8ZK80ZJxxQn1OVBSjr82HftygvEkslPfLpiDpHaQkuhwcxqOkCkqwRsBsxIuioK+fLQUOhS8XVzS1Pa3/Uh67GOdFxiSdS+fNsfLR5A6luVnejfJ0nKGBmFQMVt1IX8CEftNG35ZDuaF8DZBYl0D+KHIqEPmbkuVqbX7Cz4BX1KXwIYMWdZq8+zqWKmKBNiEbHFjIqv0jaDjxyCtRhDkf/fGNmwnXxnvi2wYG6vnD+WWeGP8AqOs8u7Xgvqh0fyXfYcqMKGI6KM6lIz1du5yk0SyV3idMvoNUQN3tuPRNbOr9g8mCg02V61MyjZDzptWYF50brJ0lKlU6KA==';
  const _INTEGRITY_HASH = '8266655e4ec3f9a8843efde8c0c877e12d30864ca294d14d4ca030857cd75e79';
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
