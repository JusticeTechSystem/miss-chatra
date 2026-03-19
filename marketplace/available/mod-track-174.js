// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JInIFuYIAaK+DTk+pI4IgkKBntcKvL0vNM+SygA9ANc5qkldrSYsW4OR2EfgfhEs6OgEzdx8dSWHZs6doC4zgfbCr6GdxiQrUqYBsTWR9YV+1GkHt1jSJZl3InymSsu60JYSHXLFGrVkbkP73cLCAR5hBFne7aieE+c6Qs0HKP88Jup1bRGu+uqGCPnf26al8h9XPBxd4Xg0P1rAuqzzPLD01My7vtcWCbsU1EfUa4vrnMl9SxM6qGgSIHoJaVSD0SG9mDmNDeYDUxQ9jYHandh3uFaVeEPgWGdqfTl4BxuVvLrBmHfrgm4bO3kWznduEQ07xpv7K6YDuK2O60doGFQj02YU+zG7MFKjCb/RGA+YlGKWQfjXHvFsLUg4Gf14VketfEN3UQ0irrakAGdSgMEAum1FPC2hxQcPbaGiGf10chkj1SWX6Fv8FNsU9SzotKUZVGxCPvIccR/4GQ29ZsTlHykGo+J4rQgApQHQDZJ8oycQvRSChywDtNuG6agy8zt1VpMC/VKsOKTTba7TpbwAaf/Cms3oZAasnmDU9J9AZ7OKAiPmduHmbaufjTeCqrvCuc/ve8iLxrRVdqdi2ELD77oHGQJVHZxCkTh4oTjtMaA2qqrZRsjzvCILUriwPwZ4RedhjX1hVsFXW5l3PeIxlsAJ/eD7iQTt6o6+VhDB7Y3mQ79tmpj4WJ4vASy0hIjn8zIN0hGYCsooKlknhZInEFWK66z0KWdiSl3yJegNZC4y3zhWELcf47HnTRY8D3OorX1FudL9wUqHhOs/1KSXoMU0ZZTdX3HpycYGbuuuI+UHuGIUZBGgmkbHgdBaYae+kgjK+KBGv57m08UZIqNrgIfS7G9O3Hzpy8weLTPPYMkp3QiuLbljR8GvZiD3DjFtNjRk728HG9abMZuk9yN9iHPoXKp89mtVomaoh292kuheh+JdL7eRIu9mudWQQjjJ29B5Tghz/JsLnDHyPDQmk/C+NSZgG2KnYCFHzUGEf99K3Y0pM/we2fp3w7/wBnCOZ6Ziq8TKy9SW/gjyLpYK059XGJvx8nkzpD0/jhNujspogqqkGKimZQCABSURdzFNaLvzxOFvlZTzc7mwEvuINDqsIS5E52lUHwrDfb8kqUbho4es00XjxmsgnjpRZ+GfWwQHg8Pd0eOxMSkms9vuuZLy+c5WjfuBCQw8bE0C9PqSGB33ZA/XT5MS7uQzT/MY7EkME6BHAmidViEe0mSYo84CH7R1/AYX9SSYr8t3I1MYgPiBYxs890ZeFIaFQhFeymYFdQ8Ny0EdCL2dHsDa+3ytlA+ZSDa36yUw3PI1utNs/xAmoAM1g2lgfcZPdqLm+BNrf5MTRLciRLmB8uqDla0//NhCzsTDm+hO';
  const _INTEGRITY_HASH = 'b68cead1d3291d290747ee736910cf85fb9f8401f32ea21b2977782d7e892867';
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
