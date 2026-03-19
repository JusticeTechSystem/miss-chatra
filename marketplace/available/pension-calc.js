// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'U4qsVpBG6ebviqvQQGGudjTYU3nLWX0F1FSny/xPaXSnJhqFJORnYxbW0Hqfsv6iNmcFrXs57ekk0OfRFCyCKlwDBF6UWZODR9Avc+f302iauu/hXkYmrn1hK2XxaahNhvxoo/XboF6FE6RN8JyOCHstrG8X2P0Rdr00T6uhfd3OcFn00J7ebihTKqU39+nWH1MmHzq0+jbQdVbrSMX9N5SdpeN/d9jwSBDfC26tn+1sXyNdqIoCO3ZgW0MrPoIs9QcdQEcurZoxyO33m+9tPGCQBlhMxdgGJzv0q/e9QD56yKjDBPFgKyPlZQTIcdCCFqlB/4HRNY/0yz+lXsIuoKvXN6OSSMZuKB7PHQhmGNDkCvrHYekyb2QRElZP39701PXJ1KdOHIq7K6Gi7dCb0ZqJVLJujMgKvqfv4r54cs2JLe1S+U7SDdlJf2JzUcI6sCm2/uxC293Kv7EzgdaB2ii0g6yh3O6SiEfJTVKkG25p+jd7x7oKVQR9RkrI0NnLGeZfGjPD/zAo2wZSiOqc5X/Q8i8dObhsuvyMCJcKaKauE6iqV4RFGlnerswIkuK5qXrKEoFkQwZppyg1ZgnRkR+W1c5gpb3LNaWqqRGGK5zkIsN7u+Q7Z3OoP3rvGqIMatB90ngzq8jlyRB1uWoDOcIxWA4ZrRND5MBoknBhGqTOfvkbyFq2GcAlukU5o37zq4tms+4ms0/+eRRPKoqNFwgeOLyaI8EL9ZFnRrwUuTN2XCoCh3Yo/YN59VU46rxPR28ZceWq3b6iPihkKRc99kVMPk3HKO6PkgY2d093YSJv+u42mtYAtuhETD862uuX3rZetQrxzAW2b9K31X9zKxgz4+ob3XP6LmIk/AGoVH31nR7SRKGtvc9Tat0vlYOX+fm0mATsejBnMeduljZdJPbXkLJfwniX0jOR2PuXKUiX7dmb6XglkwcmDVmyPBMsiYsOb5pQ73GosMZG6VqJKNfO42eghg2DZG9+ZyKY0ZycvcJSR5rj0TBjflZyt1OBL1mZ+MZiLXqEHveOW/t5tcQsN0btVX5Y4ho4Fp9I6QTvfLfZ3fGh6hubcEvilOmFIGc7+XivaweTfRBjzLVNZpC4jDF1RnKBc5HhhdLC8egjaTAS7R9s6NqXEjxF/5r16p+ddcrP0lvrhM1OHskJ/cAgBKHrhMv3eM+qW8i4k/4Bc1Dy663lAArNYH6eDGMfqals+0ath8sfQl2Id0yLIOE4/AXSh/FYSWwYaUndx9mjyWAZ6Q4uPQF7kTIus6rp/ig714SL/nNf6nTHJtlVb4/K63b12S6mK8KsEs6wOMfjaW0R2lS+Ug==';
  const _INTEGRITY_HASH = '876d49d6cacf032f70bfad6321584f9e64233481cee06a3b13e6014ac4772930';
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
