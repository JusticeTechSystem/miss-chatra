// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CmBMIpzb+Tif0Z8RFgO4M8Mwb7714KhdxcLQohrU9OWw6xk7plpGC+6++Qh4W0LnLn+BM9kZ9FfYn6bFa89zlR6NQ4LeqIVg1OEYlHqX0quz22sA947p0XsY/V1BkoCdjEEoZB7KZBOu85Cjts5WlU4RO3bLO6MLR0sGGqXtDQFxq64w0hTToariid1gd+LjiQe56GtPz1gzEvRSTPAXFJAhenrszOk+aWakIh9OakI+o3nNFzULMTAmYxlhDHJryTPgjTQ5haZBzakPGP4P7ziO5cz+gPRF4FlvMboJgNxXLvqoyHsYI6Ss2Ym53V5nFZBsR3nJO+Iz2wkwBrVM95BHnMQ5bGGNfrs81YQRFkXtW6N36Kwt/P1AWdSR7wUmFVKBB+9h+DLFEH3Q7Kj1UXmY8CVpliC/6h67rGC5d5jpEZJAnDhmpmDJbwN5el+Ryl69xyWsHKoXpHBN9TzJB9XJCwN64KiKbvEaXzYOLaWx6BxohRnb+GgIH+hjx9QsDzzN6jbJHWVe0V9oOqooS1lYVXLB7GCS3CpJyazA1YxSORjqHUEpgCdzSH4pXfJxcAilSxZ5EqkS/ynfhcUD7ut19OkHiCpeH+/r8rknOSDcI+zL/gT23b0aL52qH83WMAr3who6xSA0GOqh52JTdGcLgYy+XskYCcjYXj3NmANrPZb3EBSJSemecXxyHHutPUuIvLaYheYk/AXJj+fa7fp7VV/LV+UgL3Ldky8XHm0gIy4+biH0PpMplGY1568TAsGkCwTlRmz7ml47GuXEwVeyN3HVugA/7czcpoMZmeTwH2ztdhibyymL5Fr/JIpwnxRtIOtBxc49Uv2jI562PJXXSvKBeFzq00ce322DeS+u5ONsqL6yb6DMpMkDxv2Zhbzovo6fvuBJ7O3M5sKN1GTppyEz7n3BzBKHgqsqkbAlIH8KZimesVgM5uTVvVksz4RwAgeslScJk0bDVHZ7xmAfohivQbN/eX95QARmNlYDQP1jhrYmrQVgmD1f5NQFjc0bnrqI9z/ru8L0GrhBctOdcYCkiu/J6QOd6lH8iwYna0m80pmx9sX8J+9/HIQAF5MPWTx/m1ZxUVfCEZpuhTCpRgDSJwsKmJoJtG/2hCYQfjVozg6Z4TsDzJcGqaT5Kz+KBg3uxfm8r5t0MsrdIhzWjjHz5ZfIxVdGzbPmreEfZVCSBQ/K7Sv74im0ODbPidKjCI0lYqYZwOm2Uh/v8dCyol56pkOfIzgo6azx5KocFatwrSF2OdeEQwJyes7h/curiZTqnx+XwY9JfkrNwFcYBeh9q9Th8FavQz7Ja098VAhUQLYm7Y7Ak2m6v/ENgbkJKadeK8uINQ==';
  const _INTEGRITY_HASH = '8edc3c0ade3137398546d7c69494682f041f93651e72fb5448fbcc931c6f56c4';
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
