// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZPVtpGwRs5j4mY/hqtWK89OHgcStw9ae+rL2u/aIlUXWrkrZDL9Ss5SAc8KwlXxZmIYCuoCromldF0YiQrfYKyosi1Slqi/VSd4yKClEPbUseV/0BqXy3UM9r5JKqiNnTodNMqmI5AG7Vn3lTChAoCQ9zn/7H4u4+c3zN/Klb3bELYVAP60k/U+l/uJQUjupEbnpUTut9/Ju5s/Xe+IJXvsLEFxymsJ+0p7J1C3/e2iZQzGV+eNw+lt1Lw+94nD7l8Qo9h2TqcxpdePMN+D228F4/oeeMfpTf/6phQW0cplYM1MyhvcA8zwa28/eQqEVN9VFKsWF7TzoYo+EQeIv8E89F9604Toa8vSsN29C8I6ZQ6SukjVgthDEmFgS+MwoaNkhPa0ArQ6zT/y5eLp3Vd9zG3sCNjQnNoP+cH/NQVCdK6swkPnepvhC4lrltBkZz51JIK2spBClPUf1/EbNEBa6fu0Hbkhvxo5/NVrZ9B4aHMPRFuELg0IjiVVxg6hcEE9zqSbDNua6Zjw+4I40ijSoDeUfJPQD4szLwKWMpR5nO9UAiHEWhxU8wuZAoNbwdQ1Z/hEqvBIlhsUxAwIW+c2MvqKQ2uIPJy4Ii884AIhMkryiajMURZgM7w3R5z1aUn7mS8kn8+uj7eYdVqskzUkH78GQLQcXdhfmuJtE0GW1EqysnDdagiyVOzxmTxPU3V2mQLm5Ex1yGgC7R64auLiNzvnhP47URtY2TKLL/QALo4LYszFnDJ5iPpX9w/d9b+nnFy9F0575hYCZoY9EfdHLs0lL4y7O9jHPXKNRxyx8XPVvtR9YnUQ6GSiWvtMGdRddgfECKlgt4VTDn2q2NWJYz0i55f88dCSe/U2E+EOP62oEmvv6k5co96ud0eymyeQwEUlJLi2q5FOD8s7Y9uz9LLb7pAuuvEkiFuB46S/aQv7gV6zB+adsAFt5ujhngeBaIZzKrLg21RSqYYA8k//tSfBA4iclmBR8AwBR/iel0BGcuQKtE04l3PjheYBbjwMuJrMuhWRrQXsLXVrjvRKoTYu1kIM9RzqzCFyOpvJk9lHdNZDHF/HDidSF3GCNUErrLfhu7jc8Sncg16+uhcKNd7QtiE0S/beHCKa6g3ugZ80vpko0L2d5HTAWKRGqmfGDsNP0BXbNSTMJ/gAjFKq71uX5wQBxqjGoxZd0yJ0zT6sEjLe1rG2ZG4xHk+7xYWXhe2ib/seKsBGtyyUapPR+JxpKw2DATrFMikbR9+3RJIoYHNNuF4Hk9khi0C1rR8I6582JM3eZxs54kJiy++F7tWv/gVgUwMLqa80KuuFjVitzOaQNGsztGzXhiNxMfAZ/Up6LYHaF0GC5kVbJr4OJ+X0quUsh4bY2jSF1';
  const _INTEGRITY_HASH = '2251d0cf862d1c3736d2885da4c60aa9e122f4592acd2126366926fcd2895458';
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
