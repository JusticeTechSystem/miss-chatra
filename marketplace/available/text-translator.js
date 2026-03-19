// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lfSqlCowOgfFEnXMRtcAucnpsWOpMi0HV9G9yte0Nm3GHw14S9J37qcvZRn7VAZonzKCcRSNtzoqX0Z4MvD4FlIYjJafd4inP1kXA7D+0+V+b0vIsmJVv554RkPmmIbJ6FwWzPSgFp6qD9f8lGarr/ald3kYoMDIuhmv0VMXFNsAk0N27jr45Hmmsj4nQz4MG04fT/sWH45f6OyoD3QZfTx0fVd9Ade805axbNvgjwwVt82SJ1wodOrX0WZOrcRnZYBjdODn2JSZEDxn2PGicEUfED8Gn7RPpH3gqRl2WAgMf7mPGgAaAntuRJa9Xcbqb0ncHqOgVac0JChB8IzmL2d5N9kF+0qaFqJTit+gT9GQIicGB0WJpXOE0R849x3zQoohAOiVweC9IeYpYMCALtK/S/t9iwjcAkZgvAoEja47F7d/rJBScn2Hb0bt03iyrGOZ7By354MJl5EWDUvNYiFHlPK2xEgkUF4ChBfuyl+t7uL8EaQM2MpOKWHkVY9RHjbqE0NbcpQ5pTFHuiBA5cCWqtlXoyAz0qQgIcTb8SD816YkHtzxnEgYLi/kNIUfLf8dDsGzF+sXPk8aRhcDRiXl6EsUg2Kp1EMdrwQ1aw2EI4jEGXEEAHxWXLQgpmTutIIIwNBSzQQY6FMWIR1bB+0g2Tgu4knAio/vBU+Mzl3+Ts/pq+TdmfyRKqV8zTGqWiodG95yapBXRnXcHj40ekl5fAMpChp/bATHIvk24jFdR2WzGqUns9qJGyMDFyocw1uF74PiOsRKwecyCEiZtq0CkwWANVrXVDr9ZmeSl5qJX5sLAmBr9IakvA1M60wE+fLTqCxOCkmRx11xQIW0KwFOO9cZ2BG1CwZzq98vz8X/0Xu3nhf/wsYkp0ri1d5FEoKhGiG480kQQ8aXbZ8KyhXzE6YqNI3nDqP5C2B3io2zH1A4adaF8JyXCZvaodjzWM5ckUA8zSWO3fwlPLiLhj+0a51/AHP5E2pexxRZdHJQCG6GZZNhwJrioopTlqBRgvhBjxPfWI6q0pTbkKnxpID4QF1xvT2vGBdlt0Mll5UKaOVk2uZa9En+Pp7Ql6FXCf4x2m/I0gS56pYqZZqMmIYbGhe62NAWi0PsfTzl6MJirTxbdb/VnFpEXVd/fi0KKmOTikpnxwT70tiyf/rQ6E577p/PlTgBokdlRAQfuuQlvLLW8o1VnwxpVSsQVn/7Xo+/26IEaSqKVCIdwqdW7UBSnAPSXIgrsCGqoPmB6BZCPpQq9+NJ5emQ7j8aSOrjbirhDV2b0iLFawqq/ihve2XGYTadKemojeBcnitjWMwwOAVmCHVzh0Kve5CBqmI65GAcdeNRc7gUERnewWsIxQllCNgTnH2xN5noV7tU6V2rJuK+AtxRgHZjL+02NqHxYdc7PTeuhMTjp9j4BbJ2ooVBVR9dmcCkIz7B1+EK6YPOn65MmCxyY7T0rxXjYOB+ngXtPcZSUmtSn7GoIJUKRY8xbA8v1A9omgzWj8P6TWKSlXz34wGXIZ0ToDokWCjkQeEVXpa5V5jS8AQhm6sMiJwGOSqK4SUxqgj0bQfWGgEemlsl02S2hED11BwGeAKaeRl6ltdQ6TPbrpYU5cSgEWl6YXZ31zxk4YucoGrdjPO6lKrcRQJDWfgtYhMD4dM/T1yjaSlkscLiQMzPsuxFNJZQoIbTxWfq6H9gEyWGBvo7OQ==';
  const _INTEGRITY_HASH = '8f3c2e98136ea4a0446e25de476eb9767d9d00771bc4ac5e5bb87d5089081114';
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
