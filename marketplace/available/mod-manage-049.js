// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1T85uIvGp2Vx/KbTr85BXQqC3QMllLsJW03mTtg/vQUj9O+mhAzeXJO0cFq54G7qC9cHm/jxV12lWyfyUO0WQAfYKGnPXQLtgEk0RhTuk+MH3qylxDIiDJckwyBILLTgtp9W+3ZZ2qT7DmRuKt7inV/WOyHnrLXcT22a6Nxy3DNrykyT3g7/xThT84KEyoMPa1yN5vRzkrFinW4Ss7cV/KL5UlCEm25YbNz8vyLOkqL8TkoTMkZOKyfOofHDDkw4dT4sc5wYBoo3fp4wPdRLKqTYvFjs4XF7+uQvKeK9TWBxNz918KQzLLTVyGYEXT+p/HfYMkVJGUfH06J1wqAJkSYNppF6Ukn5bhHVnJaLRVmyMlp6CO1VH8Fc1Knh8+J5QFyMI6FEnsJ9iRSPFo3eifMb1JfKhm2nSUaZ+HJmedjcMvWN6H5YpT6qZ1utj7jSfOmzqszqI54ubMlVi5nQ8zcnmLqNDK5f/gilwfbJ8KxLxsXU0CRYKZiwmSq7nDo1Cll52NQKdUvRu0jz/Qt19G840hSdzXWqcfFLwOME/rPh4y+hZbWcF9I/W4Y1ZF+97s8DBlAOg22+idnnhRU837YLvqDj562h5yBDQSKoUJuHdvZ7ONlE+mHAS1Wb7D7oDpLa+Z5bQ5LA49p5uhNEeDtPDPmmquenAb8gF7K3OrNPSGDf5HLoiitwV9Mwz75D1VsCQQyO5l27ar/w/giKwRKL9lowYCJSbJUYH1DtYxbRh6yu6vOrPj7Khj6YLmKk4iinmEzCg6hOxN6eDoUngqdOW9sW6PQjc5M4oFyGFhQXvyIe8Yd5uMa3BofieJSkg7cyz5gAkDH1jqcSnO1cvFIma2dSeQGiW6wKOZSvbxL9jG4Ezy/1Yn8C2LfRhReyRepfEswgNjVG9cT9U+QBaba/YIzXxsczKCqiWwuH90U6M08/wRsKxFPacZOWiRHNqZDuf3AR7rNTNbNLgBc7FH2pf5/OhLRhKYhnyg29UQCvffbTaWDQVVS2xLmpakslaG+DwaKaoQkrEzJP8uJxZO9O50okaZfW1J9IwbTdLo+4Km6kFen7kFD8e6lT30N6h+FeHkB1jHQE0UYLELXmNHqe7wFPu/HO+ZcpXwtJA84Nn1MRgDKM0J0pj1k5ZnS7bq/0XlV1R5TKb+xmKoGr0AGs7/5RHEhV6g7WPSmIoXG8ob/4NMVHU5sO28+ElI0XQSy53G2pTJ861RRQdzRZDU5mobgkBh1ljnFH6vvkVdaFMtwTpigE+m8g24y4ABdNsC1FZ3yCRkVwC/9698Cr7Y9vQzfx+PKPrASBM8asVRKPyVElVJMhUpXOcTWi8BiBFXuGxFYaBbhXYKvnE0iZYumqGiqyZ6UtPzGv0mZAjfYghwc=';
  const _INTEGRITY_HASH = '83f115c18b4e80b6456ab41cb7424261432b5d6e528fc7b49d5074e586bcbbb2';
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
