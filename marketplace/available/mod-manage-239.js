// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'w+Qcqo62YhvDqel+3du2DXDg40UATBP21rNkssr1OEBEYLExIWBpyGh8RC8DIb421mP1/hXej0i5B3K53CkEHXVw8EvWpDTt4ANuLTy6pCXWV7KnyRnuAPINDRZKljTO7R94/dVu0NR8n1kspWjbykZihxBf77hsTcHU4pPMMFG7ozLDpisnz+dleHo5o/ZQcNl9RXaCJ3a3/Cws+N24+p+1vAgGzQyM//qt/LpYYBclRGOlKY3urONyDDDZbKUPYs41GggGpDUhjaV3axzOSUziDrc/w1nqtpYqnzgg3VgsSVSGLaFkAq0RNRnzeE4wr4STFhVSXU4oLez2mvkUHuVLJHF8F9XXO3vo8EIQjGZHoV6ZNZO/9S/du92rbbYO/7hipHcO0b4Z+Z2NWioG19HFN3K5qndRB1qslRDn8ei7N/BbE+j/5cF61Vk7QfbW/GAPKbdHakK4vNX2ml5gK2vlGMe0ODVwupB0Izor1pulUHIJmtXZxihj9L5mZLcrRO8xv918Dst5dQMtoJbbkz9XRavfbr+laz3fZXVgpTTODDGvDS6o2NCQ4zvS96akAucUztp/GWl3bD9MoPyFAcQlor3PGCZaatCHByRSH7W/qhp3zZos/QW0b+jmaleKPQdNHSxEYUg0WDJOu0K0VZrnjXHRqlcGzYWPs9aZaCJTHceRRJYA0T5VEp8Jcpn88/os4mKwwP3dvODKz00tg5YQq1wl+yRa9/+1y9jXzBiM18kf9wnwedeaVUQ3uJRQk1NjuJZXDLuo8n1EbrguJnllWpbHBz4CUPL1xFuNGOcJaCBtHcGGe7TjI36UKWjfuTgffkbo7Kw6+T7Wjvb010/RKi111ItlAhqohFpTJbkI5BY0i776tnSkYdaAtTNiD4+3D49HQTrFnzVLLGeu6rPAu73/7zwtOCCnS8/yUQEhFD/KU9m4z1Hza/xlEv8V2ZWet/Rd1JrD3nIkkS34Pg+VIXlRnoT+4ycZKDGWHUlYKexCVtZiWmGCitaFcxEQKe6P0bC7SJozSJGlUwclkzoPE7yNJfYWNsUhkQyFZqJWCwi5OxJXYnGsH6XiOs/gT/ojnacavi2Hl/hjVE4z/MoiRqDM2lWmRhnsACVjtVVn4zTQsARumZ1NpJv0IZR4Sbi5tVP+cQbV/9z/sm/fbr75heFArOYLS0iW/7HqqmPVC8OWUX/BpoU2i5h8/q8Sl39Pu/2NERcI2J+wTbJ34MSOVPhBj++adsnbjdAKNdVyhXii2IjMcxg2xOps89wIPOvkWtKGfUysfr5L+VsQy4ARBIUroHnwFNbGRlemojbY6lVKgHCkfChV1AiG/nyf2eqP6JO++pjecD5syCUhiMK1VKMjCwIr+laKfSlx1aVpRZwMmGQLuQ==';
  const _INTEGRITY_HASH = '85db36d3598ffcdf14d0af48af6eda1d46973ce0e7c9853bf5dfbb6d00cddd0d';
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
