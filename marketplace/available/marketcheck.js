// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'L/wNDHMC59+CjTtUX0eBSSqr851If2Mp085fLsbk9mX7fA6zN/NLsLuOGoSVOzHbKVTxEG9bkS4NAGYCWtNVfc9uKQFwG94G+eW+wKuQpqbBHMxhGuLzjQkx1MMqcpwh2r4wAgTnxJm/BmEz0kDTikVFIkmWkcrHXxjpco50UlqwFzl0jooyV48pXomAXDATxDwQ6Hfr7mbYiDKVu/0WZ6XlcgEO097fNYTJBUQfBRJ64WP8whnzN7QlFr33nb5t0WpOkt5HRJGghitoTBHWMNGQuP3IEzUBXHcbtRO3GYDyYgnhqmRYWdN1CM8o2S+IqPX9P3caZy/AGEKk5pZxsAZJLU/iKtVeDmwCh6bI5W2rxcCf2Fe0g+kDFuikMQNzqaM4nJIJO92rvkwliu7VjrLzOUSRxcYFVE0POktbs/KMK7KzYpIL6ZRL4OPtyIBpwfr99Gn89g22Z3yJMjVMN/8XQDmDnauDWjqRSiciGunVf3jgAAtokxNxu7chjBV5/lijPM6G8nSMpBdxo66YhGx3LS/PINYJFwHAU7fmJZH5q+Z25B6R7HiwxObKF7UB/3X8tuMasbY46GEiCzD//9hcsbXSxlt98nQlSB4F1dwMmzi3VzjHvyXEm6g399ipa6WrV5beJxrPqQUHrYHQReYMXPIOpNMWXuG4B24PdCpBuKyvNSHSdhqFPovduYMLzOKgvuTqcoqEEzDNJ1ZveXiC0oNPr6rV9jnt+hewSuzXNYWIpV81RRyO2LcW6yBlPNjWxgA0cvGDaqy5xDB9vpvqQkCNmSC+9UvEk7k4FcTZ0YYmm6fZFCEcek7Iv2sjEK1thnY3pDVYEGoXygvaAkXpVQJBj1/NujKfyjxqpewhioWa8ICn1/uhwATSOuEVIoFZHIbiwPNkH87BLcAvZsQcs7jh55VAeUsbiHIIGJG6H8R+zqfqEw4yiYC8H9+XvnG6oKs2YmCJvmAOUW80Ttxoq60ync17n2js/gJoCA9SzZFDbvVvDX3X0mmVE9M4l1/lMjefi+DBX5Amjke4AaFS6KKx/ZQBlh1FFp6CzQtSV3X7bMp0RO8pplrVprZPEmvJXYot0Dv3pjG83oVFodkmbAa3fciZwX4P5LHQwqCPzYhSyiWs7zQCDTqsdb7Sz+4cASxM/YLBRoYnEQETuGtetI2QEH7d6psfMkStPj9XQ7iSxN5I3XCLJT8DjL+CtuSI';
  const _INTEGRITY_HASH = '8b9d6a4cf99822332fae06531988019e49a78b17df2c344e62bc65363651eedd';
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
