// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+iO4eouuFLdhhNtzjSv/ceU4sqgbqmUBy8ImCbhZXQEp5uT9HCls1AaeocCRxEV7miM3DfUwGnTiuwOZHcrnZM+WW2TXBKL5wNWV4jEAYU8Q3R1LfTjIqiWb/uIwPVoGCWhBJSo8lyiteOwFjeSeesGVmp3705IUYuffsbAh7SWvfYhPLe9nskbE+tHsJ8yGApouR0tB2v7sKNwyePIyUuRw8HQM3Us6xOGziuKyVMKo25FZ5hIoE2LakOtHI4AvHDQGOMdBv2es4PJcjoqr/i2c3r/jYm8Syex9SwxVeIZJfW8MKSnXpocpA7fWYOAJKGH/AQAtF5Hgn/ACLNphKprNHZwLOOkvHJIBuxOZIK1LjEfMnw0kHMZxu803SMHw0SEnVyQjC1PHu6zHwvJHmprku94Y9icNVlHpbVjzoKCuDQDyzWs5pl+OOAMDtea6LvqPF6Q8ZfTa8RnYWCxRMKlmw5S3BQRt8cnk2cZNGzmc6O77p1NQ0DYnbXp16gSDTlBgCpYvO2nagLrEkISBMji1CBEeU48pfx42LRbjrxlS6XBF/r8qQpeW85EQ+n+raPIkbrwPtNQcDHzeO8q78PDeHK8oOFk8fH/l0vb+qwGtpy/WGIr8Vm1D/Pj9BCRHwEpxW1XK02K682RlnZDJR75hwPzZOYe8ZVrIjQFWG0Un3n0vHZYl6S5MJhJDopU+t2ygUwpvHoaazwF9Y/3f+qTOCCKjduThEpF4DpqLDzZcKo5W8oKsT9y6PNeJO5U8epn8CqbKGl3sOOON8etyvnNDilm1iy1zjlSdowc74EoXwGC4sG05QdcltYszkoxqxXs9I0i3zcsNdSOtjiN+xreOhfgks7oCTiNoQbLBLg7z001CdYUeBc7HPzEjyxa4PMSukxe33TkLfTZ6VctV+Rlk69IzNA/u0L2CkUnA5Q7BpNAsiakD4WdzvKLSTzqG6DoD04dH7epDGwsCIFMm4UH8zScWH4AUtQJZ7DtB6LdODj2QI36s1dvfe0ajfiVXNDSwsACugR4ee+UlbXuhc8WY4i5cgxLaVLPOB2zB/cfGxDdjf7YBJKZqvOD0GpV2PejMVYGuXaYlBubncF2qI6sFnV5zKNcrUqqNrfFyS0xNur9Mwme9PwwFJtPQuPk5Bw6tNrdz8+UqsAXseBZeOX2+ztyiRh6F2s+qbcMZwFSh6nZmtUDJtgHYZ2XcJVZqKQZy/Np+asmnCTatFnxRI4sxEgiF9uZUsnfwX8j4JeT3WlgeDE585w61snef0Q3Yzw5LFx0B32Ei3jHUA01DjArE/no87QBMr62F+/7vo6xP11F2A6FKqaIh1elqJuqoJk/GhTg=';
  const _INTEGRITY_HASH = 'c945fea7f62c21d02075ef002106d6312014a33078165d6857e1720b21d840bf';
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
