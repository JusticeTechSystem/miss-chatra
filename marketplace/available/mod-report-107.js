// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HUSoj4lCInMEbzp2yjFC0iZVgF7VJGexzqCSEWpnoQKsK3ZW/4k4MdU2RlwzABf9KbnwCbBRB+cixdvVgCaEKx0K2yNJSEhx+3CtfaU1sa4wvjpLceEWx/5yqH8EAGm+upr0dah97baLE98RsZSZlyz/sJv1QLAclSJfOj5rpMDCBXvBuDgmn58exNc8MYyrrCejg9vwceyMiie2ELFjOlGTg/Q92z9+oo/n3suWZviRUSstoCuw3ntdag8yGGeqRJqSAcC/eK97MlSrQvUReLWFYKoRdCEEp1zz+zEwiBoxESXrY81gY23ecYMFh/wtZ6u0BhQOVU/zdIg/f8j04e6g1eywJ2pPZ7zPNhgic8SxQq1yWxODAhH3pWXcUIoNV4rcCHz5b7mshCrXvO5q/Syi/K2J9HCQV8jFRYswLKIEQBOXOMbcFGJojHBBdfR5AO0hWZReVM3w8XPAVwASFaNpdeXY39GmLepq2hffn/9cvNoPyH7cLkQSn/jIbxYqORnRGvRBg52HT4BrsMA3sHQolkx30VWQLsje/0tpOcDT4/3NJt04M5PWS61PODg68TDddQcSJ8iCGkl6giP+YrSqxdvIP/uc6rpkGWee0iuvop50fVaVYmutRy8SXV2tb+9WDI1d1jsQZQbtsDErNx3FXDchPcodxtkh/E8BnXGST08D5M+/YL5Fk5lefDImmKULBRhNbHcJYhsrUXPRqwKrqr5jxtt6ULgKtSsmErJki8SFd9vZNyrUi21nVN/IDSE0mtqyoyD/5512w8ULxY7+G1BdSQc4tQqFQOhEKvbY3szOir3YjBl05RkNn1lyAjvkiV2VmuE6SeE9Q8niYatG4BJwjZPcJxE/UARYo8SnZuZ5vZOrv3G7/j7eBiYlC2xi8RkKiIiSMxy8WlrV/5YPS3jr0L9QSpobmObcKVpzvVyQwaHpl+Bv4uWRVURg0OVFw0tMGvz2oUNqNFRVxkw7SzCIfJ7+Ci/GpeP0ISyDhJGUxkbKTqvwQNfVti/s3iVzIKbZhSg6zzWHgYzRYovBqKt+6hWz58j937iYKpWzljvwVlwNFszqsX0M0rM7N8z3KlEbKqu5LBO3KwxI+o34wvs/W5WVWuA8ha6YK96dLfm9pBeb6SncIMsNBztuYoTuEJtk1CifSYwy9JrP4Ujon9UUgGJeC6XIx+hQi3EcfSF7J8YsmIDjxN4TG5yftdJuIYrYP0y2M/i0RiNmkL32RPonthwMkGQxKTvmyqv1mWwfXKPKyVJZYb91sP6lVdZSs7DICgCBYoOiVsn4t1eeDitNCfZTHMLpJsjkL5SUjORnS9ZsIWJPVGbnZHpbWBM+B6wGX0IePtwFnjEBd4nbLzL/GscUjaWiC3vC6vUc1HpbrH+MMg==';
  const _INTEGRITY_HASH = 'a5a8d15ab3c351b468afb0453e3522bcfbbc60264ebaf80f22fc7f5fb27424cc';
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
