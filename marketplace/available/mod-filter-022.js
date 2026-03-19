// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'l+zFkcr+6pYYV/BWQvzbpcEJ3aF9+21hvyf7gffI2m9ynia58Sc/4blpZ3eMR/30fBhIY0Ox4tn1YCDX0vSWVytpUXxWngt2P29cmHPKIkpLcMEhqe2bIdUZ+DjE4GWRvw/1EAymnPsycI5yJ+hcHPYN3yTk5kf2Wjk1zrh0H8lMB9hJweeFCCecHCUldvmaPExqKLbVD0J8NLyGVHPNkOJpH10/oJ9OqcP8Dh+sDSffq6it46bV4TXj7INzpWdmHK0sFZ0CldoamRkq2yYDuG4tVqF6FZIh7CbJV3XDDfK8Kp6jKbId6nq3vV9b2yNc5dHu+fX5j1veuU6fi7Dgf0vZD/1MZF1eyRrfvrTKHF5btR09P8s8KxEB6ORsZr8aNl8cDqf83Bce1IwKqPa+grAxmtfEfSrC+31CwJP9eXOj3UavHoDzjFMrpmORDPIk/IkzmBPbprC1pT4grtorwPceRO259mZTuiBiufYsY7vyAt8xyDfo8Baz6xyO1irtjttDfR+7wgTaGVv3c+Op9xSYCF2cTV24Bch9izi8JIzB1OuME9usFRGCtBPKhaWlK46AY1uBZRt9UYw1HdEFaLOqBcB/q6JQ9u/E8Q+qAdB3PN6UBW1+iZdIsu7UvuntAbGqdyZ051MbDeooTfEj8mcPpq0+HARMJUxY95FhOEjj2V/GjfwIuBDI22oeeWrvIOcpJlkabMqkVQJqk7F4LPToufh1hXQSzNE7NKif4oyabSfo9Nb6ipfAEkFcGIRl19R5Paewkff8UkwxUcT1+QYrq0OR9eaBumeyU1aOTyScDsUoU041XIur5ovvsOta8u4bamgg95sP8KDwuxA537W8bs2O/eRQZuM6A0HQl2og1V+2YkHuXMFGluAjsvO2NjWcOemZK29RCAKzbhOn6M7ImQD9sHVa24fldHlL9r+c/dTmgKQ0XI/ohmgHDOU//NthS7jJXNEH2OsXU3U8HwZKDtVuiwoaLHt3DQ834AGaIQWCZJVXLUljsRIeBuGJ2SqskjLnXHJQUdajUjK/XColYCKlBH0rpJudRUTzzGzuc17qOjvvS9CYjytDGL0iUCGj7Wp1QCB04mRL/46XwVpwalALh/e/T/Fucc3OBzcuLa5W/MJ5B2VuY94vaPmv5ZPRRV1i5pzwabgiXCYU3QmeOZdRdu3mIVonTfq8YTTG4cznDEuoJYyMyNo5Wo7WJia2nhWQiIUYR/6DaQFENILep41Pnho+rcKQ0wNnHy8+lzKtha2CpZ+5EHRVazEFUX0QeYwCnGUf/3mfae25uwuHPhDiPOun8ui9H0zaQi0nWe2xqFx4CK4prSEePIAtMj99FPX0ZBHq4P4HiElIfVuDTM2h6sDQP5KxN+CmHcccbJU=';
  const _INTEGRITY_HASH = '67af12dc794edd9519295335e3751923d65b2bf1b6abaedc7f30992e469ca443';
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
