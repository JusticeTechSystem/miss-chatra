// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kvpHnWqPhJ0FamJ2hXLwHblVvxbQ4Do6ayPA+T3Wz+7VVaUCmElPZLDoCU5CvLA4ec4SrRv39K7QxDuOHvJLBa6sGc8ktevxi7UiNxkY0uVAGsUammUGbMUgFWtxKpLglOFQc8YhJo6WwCGlen3mQdPJT7FcUlFGvroJJfZJTOTXleI4NoCy3NaFdizizua5FyD4gG/s81qTW9Iw97AYdv+ufsGecYTeIV4sZi/WZSLTBsnmDoNfbVw0lVj7Lvj1pqtByCvPKrKgbHUuNH67hneJRYTiDRd1BLL7M6GFC3ykjqY0KlQr9X6e8JmPqgJnhIUfkseNiCvbNZp4eGX6OU+q7visGUQoLRo4iSY+GOiOp7vTe/ehpk24t7rTtcKkHlPd0/TQyitXjMTmnkexure97xLMH/P64SRpZALBNW8iptelqjBNu8d7RRobG0ffofL15ey4psjM6kyc/vxKmwp7wk8qLwT1pJX/DSIAUD14qn+NpoSSnUu3gB4i9AB4KC1u649MBdYmahEYrahIWGNTvhoBCkusSqlyCaLrQOdgK/rJ4AbaDI2WGFNIdN9lBxZUfrh+pt3gH1khsqqwaHbn5+hFINo8QolaTk0x63FXvY4X3IcWMf+IhXY8PsbTHY0SVCDHXdrw0oMoEyCbUFLmxrVYQ3lYaWlMOJq1Fv4gIMLxzv/dFEdI1WAouugBVcCrvC8F5RyXdahFfxO8G3NfRbbywaDfF15XTkmjPsDNYJ0SerU4L4SlR6MqSOcJZvFI1zJiEnEzLL89deuj5RY/HPqYiXhtSeMIY47amGV5LaQoKp/2oIiIJv5ZGprvq2vtaGFUGnJGUDm4II1zr6QH9HSDeRbavMb4grPd5lxS2eseoVzSF+m7//6zJaWgV07ZZA3aEEhIGqPZ9ISqhoxikXcDCONy6U//vzaxs79A1D348hO5r4ePvmhWYxWA3QqNJUwikw6yjmpPwXVn85fTbG8YsMdVrsYIjbhZeD9mVLuog9U65NP2cfEEOWGF3tBFY1n81TFR39vrow9lV1Xz4YUslSHQfKA23h+o45mh5hk24ZkJQ3jvgMSLJ+BlOitd3hAXY/WyFFymoPr+AnJgT9WYOuaF//VcIaet0mKEbch9ZhWiLLiBKpW6rPr4mX0vsew9yu+FSYXdpsU0BBj9UiyAqVSOHlDyvKMzZ3Uc5vthNt4+d3VlM1Pfwih/9Kk1CjIN9F+bH5vkwYd+UuiZk6MOzgAuHYgLn86lau1vqHIzDOBb/s770G7+g0t1qtnz2CzZ3n+H0yuruHw/onjs4M1/FGf63Vhbm0wccGEZ4GDCkTaPqg0kUTKexVTj9qAZQTDscX5SlZJC9EEIxgyg8SWNlqfHWlHFXkFJYYAV3Xo9mpk/yw==';
  const _INTEGRITY_HASH = 'b5ae34ec8e3cb13eb7fe94cdcdf985386148d6b48a589584d8e40a13511a25c2';
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
