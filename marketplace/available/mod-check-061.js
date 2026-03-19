// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oqc88xwLfVoGJO9XnPG5rhQ7zG9WCYEzQF3tLgRDLCtGzLrCqZ4TozUJZIql8hXjrtdzDSnkQY9JmijQaRijzTfwdEcV7YNFFYIp7v43+F5EjGXHBolyPlzc46TYzAW+Ry/+JKGIdIiOPcb1tNQ5sSiCs1OCnLhFry76gOIHmwFILDy9bPvGl5r4XQExFjFKFefjAJ+r72tRVNM3r8p99pOi1Fk6rptwexGo1A+c0TReyYxCAdrXKaRUMKjlZU4nTdXE4V+Dt8Asp+3nQtxYGOsxMTZHlBGw/nndZ5ZByX9fyD5N/KCNMbooXxMERA2vWeJEU3njZNQ31wVvG+23HG7IpoJtAyEExiCMCaQm0fqg7H8nk6kIvtpcaB+VGx/4hWfCD4ElXtPVHYEViVtgmi7hfWc/+dCzijDJaJvRJgcaYJvLPjPZPjCjdvc1st4Kk9e7cjfUajYZE5lga99AeDSpgL28NW5NXGYAlw1RsGrUWmrcYf0n47W1RHlEd9+GFOonJAUPw3DCeeRSc/rZuHaXWz+/EkFAGxa8m1IwdrbEKvscPXkEIEEiH6hTZy9PAlKtYjm4S6ZxwX5KPhsi4h5KEqGlWrv1CHY/sP8MVA0F/b50SrspG0Rjfw+uj4tjqmPCdQ1ngKlpK1/2KJpdxhTYetlmi/VI8a8cc45PdpfuCz8ga79NEa+eudcoSWSjQbEyYFcXclvuAyhNw7OUMoFwJgGd4q8yE1d5aER4fT0XxNZNUd4ULsT0tSy0DU417iYoUX6GwuwMk6MTBbfVDJ/xs35v4Y6RW3KczcSipBOcwoeqvFq5MtyyewTqI7rU8PYuG8+6fpyQNNMjN92luxovduWriMeprIxizltJ93NsrTKboMlbmulvq0QaekJfcGZe88CP3ojPLXlTrVvxkzfSCCPUspbg8laHW/Mspb4kaoH6QAnDWJIB83ZApH1cZYvPvvLytljQAZbElH6hBqbYCWiwCmOTqwk64rdrzLcBjHxKM0s4ntafwGtmHGiMRS5Pvor54JEAjvl3xacR3UamW/H2JOhm0hQdJaTfRsmcc1PPbXPxcUzfmiTSe+wAsc6E64gMKPn/T1cNs5PDXmlFe24+HiGSqvun1Z1jecGWuw080WO3TmlfB4MK+v1gzpMuReFM59fSopeQu+1zjYI9aExOXJH3r1VKM5s9nHGA5fJfGHvCjwC3eKnxfUGjl/UuyYfCGzmt5bPn3Yem3A9YJwtKMSf0aW/l8w++vxWOPk0Hf+M2UU9txc7FXULCZbU+wmhfntc8WIQTVvAL3tpkiat0VBEYBFcZwE9V2ELQHouJxQAPh1M/fNVW+hqgx59azJaKWBY59iMlYhgv88MqPzwYBgNIaw==';
  const _INTEGRITY_HASH = 'eb1392f9afd104a5c0beed677775300302a879920e3c875b58c98ef7a682642b';
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
