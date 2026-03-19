// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'iNEiYn5ZinClZCE8ljIFZWWWCj3bBueZ9JsC9jYGviDu2fGqKejD6rLtKJhj8ni/Wiyu8w6zI7FWlm6TFa0bYMLE4Z763fJ4MbUpBADQxB5zYU2fclTUWvcxNVJcCuUqPa9QJ4ALYggryTACx+4U+EgDN7tOL5fVahG6fvJj6rmniPxhwcE5qhTnzbymVIQ0zFwEDODEpysbnOu0dkADfYLUsKgTqbnWwNmF2yi8xINKgPeD64V0qgzzjwr4W6Mt2OIjPHZlT0xZ09Jr/9nwLowP82DhPeR9EP5UUqw3d8+SHqmCAkR9FPfMJpZb+6U15wmPW1MbgLq5AVXx80dvPoCiMKyTTzmc/DOxeNKafB0z+L6uLyawkMAJ6Q8vm+cDDwpXkTvk/4aiA3YRg5/jMl+b44v5QcJlw7WxIcKbckWASMTZ7QVZHuKa+PBYERAjp+e2hIWwfijMpCVviQgZxPa+5LcajiiUvHZ7Orf8ascfvbp55Gmi9o2dxw1KMNAY3hebjRjHAVHuKqA/AnPHyMV2//UEg8usET6ct+TOkOFT365KxZl0FW69qfLAsuQXasBZrScaWSrSyRj5Lh2CTs5+MxN0nDP6mHXabboA0YYXf+WSO3EWfUtwLsLMvBMMaXEJrxGIy/l1yLo0BelT7b0WDweMo6p3UHDvFaxvfqSQFN5gs0ZOYhUo94evlZ72RYey1SrwTulreceGBRNM2hyslXhwzDb3c4HWmMxU8Birv/VWaXf0umwLPNeEbPyeClSEA+nGYA1rFHMkCc/Z3ZKMuzGuWHz+so7iYbGW2QSnP9C1NGc0+xIJ3dyXXsKU1KRvD0eJwI4GbUfKUqq96LbKhLIYMfFf0gHA7Bi/AjETABJnEaI0jZCcyZH5toutzgObusdp0MafvdA/36MGPDaE2WSM83QMR9GHy44JKQgLmog6Yld9cxioEbrJBobKiJBBytPltHn2Mfbe1D5NCBJmU46Ctz1LfB/fBS2DIWTD0PmAUCBfSl2ckalkyBEmdOZDAnE/2pGoa/4SgEi03oCuhM5GWZ8fz1UtZuA6JHX6GAULXy3hmL9t8smJ+DERaIqkd0V8CEhvaiuQtBC48EGeQQgPOQzKsTq0jHlDudNnD9ZxueF0nuSF/BN0Q/sVfuwr64YquxuC5UoUVgQE2hxHyNFgujS3Qa2dhQJ+gwV98OedxJJhER/56io133idplhH6CeV6tmnEs1HZFrnKHzeNVHd0d3hXhnwZF5i0bA0ut5W1JmN+QMTuz5tal2w/FtKMebvmX/5yYWCVhLdfIQuDnwMpd0/ZqUXKKNIXe6Pb+6OWwcwbedlOIuTDR4kzFjlyddsYSoYgNqG9ATjYIbH8AlpXi+mcjToFwl0zGlVaIfqgC2Yw8jxPKuceDIJZ6+S0/LrRbroYiem316P3Sm565flIE44GWORbT3cO0S3tDb31Pc6pt2gZzKZ4EVNWIv+Uy087fv3geyUHqTWLxlc/QCHqvdX6mFLCAR6oliYyQ+aD/yGZLqdwz+F2rr+NMsGpIaukBXUFIZ3S00Em8jH+Mat8iu/tObSi7fTJLA+voFQIWE69OtbmejNy+AOKLQ0Udp6F9X31szF9WFsdUgIZ8SFtzpeyoyo95EL1tryMxJaE6JweG7Ip4ZMFJ0RGM2EqRxYN8No6eH12IxrLU+eGJ4BSRm6BYTHHTjLhta5tXE=';
  const _INTEGRITY_HASH = 'a199fe86a8b275a6daeb669e718e78875910ce629771856ed985fa406c4586cd';
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
