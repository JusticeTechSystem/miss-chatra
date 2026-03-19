// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PAV2Jvvnx+wYs+HQAYY107WSrepZKh7dCdg9S45z1/ySzc2mUlSbx+ewMYdwrZnrYWeUIU6HIdLtXnUsn0hHlBVTdMQWWtqFh2DrpMqG5lH0vU0uxEoen99vW4fi2wyI12lOrnFHyu2sGNBpDgesNN0JJeQs3DS8K/8xq0jtmmkwWTxI2mUJtuG1t6pbDlJ+RYq0tK+yPLbj+20ku8y0d4Y1ealIQ5nAwCPk48cIEJQFtDoO9kzpjX3WlKZGzTUVoaCRhq1NbGuJw8ai8IlSEFFYYJnK+YXuhgq8BuI075woFWL/rnIQ5d2vkOqyKYty9ADrQlWmoERvXnK3jsoyKj8Aa7mziDIbuBz4FarZZ16Twk5B9R/MfsaJgSjE9ZDr14GuvFVgvyFlIlNMKPHkHzcsIUfiaRYLTBO/VJP1jp8LHHdG+rgdZr+DiIHql29tpZTfiHsodWNrb81K31hoCFRvVz3takUzQIogSlMqcHFKvlhII9vE5g38CY2UGSHQwiOvY8Sb8bjkuO6V55BnIkWlOyP0xfsR4bIGPhm4O7yyYZ6ipPrh7CiE9gDjRXohilut1RY4SvKyNtuIflzQROHCvCdxivEsWwcYhq4HKGh6DofOsRVFzIt1sfULV/OZJhklzo2HwG5RHJHJf7TASTN6X80mlTOUba87QtMmmhWlA/qxLQ+qNzpVdjz1Ypesu3b64WBz+gA/e4tqzbyqZMcsqwqo5UrMrkFW9UskBcsacyJeWpd5+22apsgYhHx/bOJdqAOYTUUQgCV0nrT7FyymhVyNaXntypFp1PlJSQbVv2gdQjSxCCI0LQESBOxSzNxz7pRNwPhbVEPdiAoeEkg58FPplpglIUpVPU8tGAYUG3yU1yk64JERq3ZsTjqd5rk4Pm8ttso45OTTXPVxj6E+W8SyiBQcvsKVuIEhpdnUyrnHkvjutKsijpvauedOJm1LKniKU8yRLHo9+nf5UkpECJEm3felKTMV8OC6rg1WnBchNFIb/uHoZ0kkBFsl63mzNoiKzfsjuaq3S5MEmuUr/+wAxH7J3Az7FnR/ckQW4p3/nAvu3I1IwesugZOFbJRvuI3M2W1W6jlo8vwBx9C8bKsnLc+jlgRaeAupYyq3FbEYWRuUfSmESI62ds0FhZ7H0E4nYgAf/8Nyp2h8RrJlIZvsXbzwO3/q90jC03j9cLJ+WmHlPIQT3TcJz2EYty1XEms+Hpmiq4bnwJa35fvix6VCJqufQA0loqbjmCAkjD/6OuC7ky3k1nVe2193Lv7dtKq88c+3A7wlB/fNzO32St98ZfL7rKDNuo694MaIk44cizoe1Ei3vPV5QswhhPywPYc4Co5+qV/iYtU8RuY0SXILFMy29Etx+bnF';
  const _INTEGRITY_HASH = 'c933e9067cec0ccad6ccbec059b35aaf2bee460873e7d7fe360448dc3dcc0062';
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
