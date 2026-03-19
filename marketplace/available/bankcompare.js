// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'c+F4wRWl4Rg87fM5B4srbFCZF/2sdWOHXeDN4+2VbBMIHrOM3tTuaV2gTZqa+I3UHAbUp568WDMTi6KoNQolhS2oyD3z99+hDOUAtMQf98JJCBlzLVUpXSToXPpIdY2JqgEYbBkrxgkEacwFq8RnZlR02HCkzvDHKNMFRAVT1MlLjsO9W5HC8geS2jg0h/j4e+f+FKuW5sH8FeMofv8CMD9QBOM8MbaJQgtq3RLsS66JTHsxpP1XDmX9WgVDsUz48EnLN+atGGh849eRg7jOsAxu778XA0Cc20iD7OQJfqbKBTWc8iom2Thu6ylb7BfVRBWvRYeYnWWFHawGmy0gQ8OhRIVIT4oTGsiQr885myJ4zdnRgd8Qb+fKiT27YAkUi8uZYFcsmFB5GDDgFWnvhYIluGXLhScAkCavFwzP47RLm2z8ypVPZzIxCOG09G3xP+6YDljV+BbjxVfjnSggyyvtfN0YCbEdCQyyFPAyzfy2D/bwoFbmTrdwVYPfeuNJZatVnoBOJ894Wrb6Z9Tiar1Za58K+OuYlhXIVWXl8wxomvezt3yJoe2Pw65I6w3DV8/VdznEhzDxbMdXC1Dsb4yYqv85R/CFBBTdiJ2NzPjs+QMBaBtOzb2abLA+myrCcLJfDgDNlkKhJElDLGl0w7N26aAbX7CtcygJsv+GGJE8pqgnIhIyR+91QGzRyrbGcXbby3/YoaS2SwdacocbGEKCHUp0rJhEeaJPmR3jfhWhdIGZWGvCS2v6bvToH2oChxccffP1gE5Mbehhprpr+6uXEwnNc7omj7AVjb0T+OE89QFcdZfkSD0xC3nz8oz/h9rCqDiokFFZoGIJhj1l4fSwZBKTCeAiZYM+qq+J7wfwrkadWKO7L3Q/W54m38Pc6HjXXVB4QRvPYUf7WyjMmn1dXW7/HCSh7VWH8YO3rO7vq0Cg+RuNlZVjB4ziPVFXIv1Fqmme66ahQNCV+TEFvJ9EhdqQD8RRS4eiM4BEyObPNHoA4XeL+4qe1/5kWq01JkwtS413MIcNw8RogC1fluUtU1OfJ5duprC6IHPi2duPeWN2YwRC/WXGrh1o+bhDFAS2yMSYmdQz+0FXpBAV7iAebXIT+gqNzPZ1IfChSEIbuOOYLipKWo8H4eGdaRPXBL4uzpL0/umMda+BAcrnYUAc9a2OXuYzJFNvxJTXu1Io8oAs6KSmfISP25ZRaBZX5N2Pknk=';
  const _INTEGRITY_HASH = 'c27ffe52bac670c35cb3186fe62d375df22b1527e57922f96c0f5b0025fbefaf';
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
