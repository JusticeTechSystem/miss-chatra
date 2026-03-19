// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '37nWrjIpQOlgaKsjTBLUWl+TV/1IT6aiFOL7KgMKdwQc4ZZ5tsshXnFC1CLBqW0Ke+Ebwo7e3rQVAvvlKlaCQq83o+caj9PLOo3UeOZgeXzxD7tV8OkDmYO3hk2+fiVJljVhfKut+u8GY2sa1yLhBUzZ4rhm68Kh/HabvlIdcm3ln/gVX/cNF6yeMk97AumGkSbvIErnp3oKfhHXbfd2bOSmEnlzRnFiomkqunhHkvqqFfAkCeqgcX1zbVUjsLgt7hRt90Dizh6YX69EsOK14RhMOWj3IVDbqeLlvnnMDjSLOBYltwtXPYsM6dzQIivQOdESZEYwJf2jwjTV7mtxdZLguktwTBV/NLODauHZZE4THGqdfPPhJnRPHokA1CpMMpyTycSmtTs+V762tl17LE2qQKZV9zjeJ5ktkFsNhT52DzdF4x5L/bTzUw/EZ1awB45bFZzCQn9qNytAg5V3Ovrdax+rgwZA79EzD6Cfvov2cVgHG/Z4lW2hfZPsdmnenStWMX7wNjgyAJac5yfsUfz7tobbZbyun05MsZ6SOszmUaCKoI8/Gwk6lRsdC8Nt91m397p41JWyeLU03gfK0SdL1HNecyDjGixPB88GA87n4CYBpv4fKdeO58mDaHenEY53DIwbfWbJUB1rYr5+oXadWwp4/hVmLU/c6ynT81if8TBdT+9qN1aXUzF16l9zfZpy0JN2xtcy44CIMZvwEORCIimkJEZb7OKrlgkMaVBkvwCg4709+n8vKjaGkGcMp9jeVLhIKfFPvBc4bV3f0rTDYdRe98SjBtGFVrLe4DSGJ7cKfcIqdutfMcweh/7yFHMpJsEy5KRiRvZNF/vmq3FOVXyuMYwUeUKkW+e6OIBLw42vaghSk9cS4fsCD3iWT8jcZt/8HJ3kCzakHW7MReHz5Gsat4ykMaYu+F4RQrRdDAL5XXOIZg==';
  const _INTEGRITY_HASH = '649581e04e3ba9caa3268525bd84b2d5a74cc0732f395896ff713d7a7aea7298';
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
