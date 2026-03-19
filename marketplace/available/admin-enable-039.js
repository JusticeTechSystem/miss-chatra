// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ASoVnCOa9EUhw4nXRXyda4y8r3ioqP7XqZrztEIZZWzT3TKO9QvTTLH8+opDhCaml5GEAEyBsQ0wQZD/E9o4ZcHOysNLXbu5RkU5Vjm/BKFolwjqLS23FKNKkHh+bABH++eyXfKyZJhIQJPuZZkPOlvsUh8u12CXkR/PrwcBg7kmCzuZykFlIWfTqTcurAU+vZ8V8GXtsKo/5LFdlinjc9xr90c+omLcxEsQP44pfysaGkPvbXlKa8B+Ts7UEQQUKG2bCqyi8/nq6aeUzd+GluVUd3cIoSBkyaG7fs51HsPaZG5axZj8cvQ06O8z6ByUqAZzlVzazK4HbfLVc4GCr19nMFXEr41wyiL9CsRcE5fXorv6JyGpnBee3HWmMsbl29JIU/GhXJEuUJEdcYLnY8cY/8G79UStqKoH10TVnltf0tpkBaV4P8NH5u06AW7ll0T8ZQKRepBKoVIetGiY9LZaqoxhjxDo0HS67FyUg0GpbP1n8Y9PeHw7b89wDZxgkumGMRBh+C6d3ped/q3uJ6Y3TDKZfaGULHAxj9DqbQG20Fuo3w3L6Uj55P/Kbpb8wGPru7Z9ZDYmCQ6vzWVXbGW3Mh41z0UaEHMNxOIuKSMA+eGvgdvaKH5eINI1L52xDDmUyvuNW5XYlqPz5JfHssKE2lXzPUkOPCMddT9GrZ9CcaK1cX59xBuxpXgxjCNYP346T2hM1Ju/ZxtS/QuMAxx9KKy8+L/Mmg9AGxvWpnrd+RB4TQoDwrn0Khg0qmTPIk7orzgCUFgesDMZkazfG3IrzLtm9q20HKgZSR6bAxyEpIVhdMPjJuEaAdZQcoWO0RJxwloIPKkcJngpDVVtoxCUtCHy+PHGKzfEEMtaPbOIN/eTbh24U9cPKC69+1OX/0P/gqPqfyy32uEzJ3Sl2Lz1VarMBHhOb2QNk6I4VXw/5uKNelY0PCwBZosy8RkCaxKiubEsrR2KOmKI8xhP88BjUR2Wxp1BxiJgHWLeBvRmoXDK8fLxJZpmhJV9';
  const _INTEGRITY_HASH = 'dc0187a94e0f4725058b828bd2950f592cb8fd41474f99344f09dba350d86fcb';
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
