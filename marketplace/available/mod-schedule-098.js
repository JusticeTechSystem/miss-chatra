// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8LuXbKm1LoNSiVkaRb+135SyFJbDz82XHAYrEhabrFtt/jxIlAF3OdJixB39wjcWAmkY8mVkDtxs1jOhInJAZnYRczN5l/2D3oTPO8nYeTJpX0CAd51vdda1XOxFK+N0NDS9EU1ya11yKaOBxiuX1xB2/zfLLbRkhdR7rTRmicysIfLx3buKL+G7rB+CVXvqtt3G5uF+0pvAwltde0D8vI+hvfncOvNFUwmrnnRI3o33Hjmt26KO6+NSsx67NvmkHezYF5VLkG8A9B4QSgSmwWt8CuZH+faoTNdWtRvPzwfkm/TGSUH20Q7wSd+GQ76oXbFDtE7Dmie1B9uFDU60+q4++c8aYThyuJgPfNQ6JCtord27O33idWh8t810kLw5lKry3n++S851yX71eDyPGuVaLldpGX8fQu7H1RDRMUwIhbZE//dY8j5K6ev2WKwJsIAe2R9QpJQYCcHWLAgW51WXpbcXccDIqsGob1U+HOKKhWhaqRAC7whPsxjKHxKdauNCWpOMkAsJRTJ3oUHSlVLHpLl1o1n6nyisoUvqzknS/DA4jgK7sgHWPPuUU0eX12EVukAj6mzMZd56+k9TsvctO9o3L3Mnil8a6oFKAVHx6r9eXq8Wp/LvXrD0udatacJ0iF/UXzRg5BR+NmZiex28qWd7gv3FbEX+Ms6U3lAkD2ZLj/48k8FYP8jHcLJvlFMVrUdp+JR8P3lFT/bkKKqqqMn6VTMQqwObn0qJHBVBOO+bjJgTDY11anhOrt7zc6dmnK23IZRGvPdptzfEMOWFD5ZFbPcNPc5PzR6S0x5FYS+hBZf0piirSm7gtkT/euFNXrJfitl5b7l9+5Fr3aDo2RBulou2NN/ZtwxetskIsR9Ure7bjJQCwDwTpjSyXdPu9pMcU1TK80O4d4TgvYwIw4ZO25tmpw6XyxhuuAn799CEppohtTZWTVOOMb03ZPuAKEdJFJdpeqsGFV1Yq2S+XN65+3MP2t0tPDrzLA4kFgzFq18TgAzhuNdBA344bWvAewQbf7IUlrQVdzb81Y4NZVdt5lhZB4deROWOvQ6BHrNLJhSulqV4AOpyJjcKnov7DixJRBlG/ul7ubUfL+GeoIf9cs1+WUdw4VxZuRlpKI/JQJlFBtZmsmIk8SIywhvCVD9Ti4vzRe4gNQRzM+E0gb5QEy38tc7lZMh3ErhhI0iMWwtOS1v9gWdlV/Dm0OYt3y3zdmAl/9NbHJgxd4cYNehGkbA4MzaFSe79GKxVnsP6InGLE0s2LJb/TDeZVWcCGUf1fmrNu1FkyWUVbSTMdQerCucwA7Nas488YkuvX5+8RRNIj4gkm6X3pp37B16L7j3msHK5c3MbtBYrdrdLv3XAGP2GMAgRRo415s8pQOQ9D1TxmnsQIKxXOKdfFqXh/mAEHA==';
  const _INTEGRITY_HASH = '15c0147aacdb8f778003788aa9eff8c37ded38fddb55547b778cc6f7ddddd29c';
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
