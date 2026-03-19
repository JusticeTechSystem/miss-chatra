// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DXXAmygl/yc0FPCgYmCVGC5/e0Hp1LCNgOAL0hqHF5nKMfZlVtKh+AoIMTdiI7B4UZquiPPufK+HPimWUIUzQbz0xpDOdDzyNKNi+YZ/9EfY51xnhlfm0LRPGecHIFw9oUp0w5of7jbF6aucL/zWG3nlax7jK/vot4vD1FgTFLPHcPq00tix9KdGkTT2H3PqnB/sadDJaS77BT4sWBuLMnaNcKBeedgwQWlaLrRAXiOJVhun/Y5QKiI2GdXiEtSymeF1CvQgtW42Vw64JbTYWBp8D3hxxOT+XrL/KtyrwhPiPA1w4Pg8DAwUQ3IJDzJRPf1DwIhs6jFGTlNoL/mDGislxFeqZ05+XYosPMqRX2pN/YGPsLzSoalx2DMD8DdfNa/d7CvPPneLk+J8Q71vdX3I6La32ndzObYtCUnunYI+kKIknAENlTTaAqjdgR8KUk+ptduldIgLqjot2lwFKXLMhnsg0dbvKBNAFnVModVK5qlIoFZebcEtyql76ofkhypdgpsCRZkshmNlDALOpU+uvbl+NPdEp59PCs1MVD/+cPgXCBrtFZaGatrw59M7Y5A1exa0kR8p2CYeGQ42Z7duVZb02WaFL3M8udeyP7PxOnYLvQ8Rb3xyxRtQi2BbA2WkdhwsKLdzf6bRmxREiRN8tF1WXpoqcx9LFXhojIVB9zQsYRui8vwZkWetVNoGvma1/sxZxFZ3tFm9YLRLT5Kb5Mng2jrS8Vc56QOfA8biNNOLzodx0ABbzRmf9rEP6bF3Xw/osvZ4NieWEC3gdKubjTGxKXNlyqj2G9QGg3GJcI02tU1Nxr9ERY0Dn9ocZDowHURRN0Iwblw8U5xNyza5NHrlYG0NkNJLkVY/BE1oQWkQlEOpeN7fX0yJ6epezHe504JubXRMp749DXD4NTXrrYKoFixgVMFWVZXdqNWwwM9EZg/7ZMnC/Zw9oke4XJhBLEgnfZmRMuaRs4QFcSbcyB8j/Z3jf6iDbu6Tynd81fHttrioVhSt0JJ/l8B6WZwMpCNNVVaaHlr3FWp/OCLvsJp0fNQJyHGEnWu6vMdKiCC3/KosGgz6GHGQniz4jRCKm9OAMf3j+/SE9UInnOIwH5jgJ3cXZB8jUoGGkIVdNuANAYqeGpv2EQPTv1FTUGH+s5OcaU9oB4t1Tw+wzDMSOAcYaHH0BoaQcvR6lUpRNA9Fc01kWP9Q4pw3PJZehOwI1xhbrRBlk8NemzIczR3ybau9Rik7asqa2l8aHmBKqp9ab+r09RZPzqRoMGLX9WaSvTzVZk4wPSOp5LMpc8HcVbIWLhUwGGNPuZBZ/ukqUvxfR6H6gMYPugIT6OIjHME2wm66128snw==';
  const _INTEGRITY_HASH = 'd5bd560292c4fb59d6d180ff6a8997a1fe0eae0ec84cecc2acbdf3aedbafd009';
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
