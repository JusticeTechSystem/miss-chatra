// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8+S60ys+OdkZ46OVAnUAzPZT7xxQ0HUX6KQIzVLSmNhKHJ8EXPNv7JyNZe7E9UevI4qkcfpQZw5gW4t/fah29q4ZC27UAb0G5BXONTVpJJXupeDtJ7raE+9G29Zw7A+lInVKuHZ7NUX3floGj1KQIAGqLEeeay18LmDc+e12Lmax5vuC3hbH6ysatZVr0qSFqEUM++ioY8GAQQOi7dnzVhCu9IqqTuHrdoJMmMYfe/wu89qdqX332LtUBv09BHPfcocfUlnKrjeGUPwa4f+QK2s8Kkf0wGq6UoGtmQIshCqO7HcWCYYRUj3vduv/YrFqT2cHV1rC+m/bBQ4z/mTj5y4YnDpBW4dxdusR0bihkvUzPej+Cxmhk0flZmx8eiM8zb9PGbDWXmMvYkyGDP3qWFcdc8NBTs9dClRS7PSEYx0ZIc0pdijT7ozbUe+eL9bLn4QNdDWXgKQwUEEw+jFmKMruX0wt9xgQO4p4G2jHpFMsl31uQy3q9Qrt2ODzefe1Nr2DrrySHWGBF6ZnWD2Rz6km2acFvdRaC6wPr5rsqMua1fRjOtLoteMW76WGJ8mKQ7dkRDv5nToAqDhQSAj0LEuhAobyJwhrBJiLgwgqNGVx2L3X5VENaPPg+W9gH+tNsD0tGpw6VqzbxlsZsTj/hEYa2QZP+QOshvtm9r7MV4ggHeKyoTw6TluEM23slqTeFxS4YjRPBmN4DSAo/ma4ecDVdwKn5CYp+MKJID6e0DrxV0NVEp3Aw+dMuJxOjO0A51LZH4FkVk+9ddsurMZd2OrBqdnjHq9mo+jK/rk3+ws5AZw0/oo/vYBPl0dBNArAUKUHsHObK/djmpjAisX63VOcnuPVG0nAgyxByk87ixFNyMBObpYDNWl4ei5Y4cdVwwTA2eFSg00Sm1DTdsBS13iSrk++ljIu/97LpUWi5m1ZiRTHe6aZ4F3fFHA/VJQJWyN+oADUmcCINPaui2nahIGx4QTX80W8sbEo6+sMl6YnZzaGRVY6ENsKDXQv+Ai8m2VTVKmPtvffZ4G2Nn4TsMQT7YkS8C/Lxm5tyWt2MWUEpxbKl4JA7+UpZ4AaIUHLOgIhCaXEC4Gj1EaghaL4TeVJCTpk7QfkMlzgxl9R9mKLE0HayDuENQwB/CHWH4RaknD8ijrQOS5osQGEl+QWvBhk1fzPwQx+fCOYaiorxPXTb7GotnX9RTsQJXBdHHSYaw==';
  const _INTEGRITY_HASH = 'f03026a3f2f2126cddb73ddb6d061c58415353d8ab84dcbe3491924982ac7720';
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
