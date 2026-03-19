// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '147axBTRB0LY5sHnhIVtpIQBMiYMSI9z7hfK1J/JFFcdRVEXibMNm8I4KxmbTADuXBtwk5dK7KCEvJG3enii6U8ihfa/O6VG+sgQoMT38fggaCySJs1A1fhe4YY23dvjOqLshdaYrs0HOFcaA9074TEkteaBoPnRDJn7dxCxDFfoMkSamBWUSrQowZxTjFXK5yiswlQFHPfx5YCxBZrlTFvIXWrpavphvLACnmABw4RnpkKTj7fg6wCWTva8bQnOmVR5lxD62FZBzS1yzRB1OXipNh4/4qkTx5/YlBIHSDY9u77XHo+U5IT7cdC8EQVhSmECguq6UZ1G9PDd4HmyJiI49w5qX3AYgGU7GfN34cwPZY2xGxGhA1SjZEzwjXO1Kp2ythpOftsEuPA9iKtkJ9gGlF3czfPuXraRjBYgnw57IriSNROZltCaJFXXH+ml6kSnikB10Dm9ypEbs2208WfKXgt7l0wY5jTXYIhkiotKRIdrqpiwpp9PIDzwZTb1yfCp6kOPxA1ctH/Q3yZtfUmKXq2rgSmd1tHZuXww0f+5Wr7/1WvjrSHCTV7R1lghnFY2dXTpozvg54xHnRkkUI+GfCSc12z57PBtn0LZKHer3PNPBxsb6qTWmtrW5Rh2V/d9ZEgZzK+c8/LGRiWctuGn0eeGNCeaejD7WqJUiotAwh5CZv7T1mxkz0V9hZJ14VdSlzGeWGjGWevSovdMGaLNWwWw7pVQL/R7yagnK3s7MObvvqTf6hNcI5GtlrObFehgafuoWymomBj47rkuyrlSwv80eZOmw2dERDxUFfsQijwT/SjIsj9mwTOuoWxS9V/EHiQad+NuLuvRjd01p+V/aXxr1AICc5l2p7Y5ccIdtB8Iv2twIYs75L55jBVgVQFijAM9zSbbbAK9B9Vj/QGwqVt9hDWwUFtyfMCQAlyTDIzlTTaSm7Q00s+ZFy7ZeJVJfFhjp577EcBrjrZ6zDH2XM7xzZ/C04BWNyneehgRMZyLQwP/VYw/AxS/SzX26k/5g0kUIdO3P2JaN/ugINvcuLQDHg==';
  const _INTEGRITY_HASH = 'c3bb7bd18c155c8e3072a3f9f54cd94f980c149b4937907a4324ef3368661497';
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
