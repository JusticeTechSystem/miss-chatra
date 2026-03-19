// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nqT/2HZq65P8oP3hI9wGI9GLAIKUUzSyEYXkbnkaWXtqaZyTIkO4i4o8zkE/qpd+zYJvZAfwj+9PqmpZX4NVpMkBiwOmNEBVwd4HBjErAU53jaWJVZBluutXOn2pOwH8b/pDZjsqk62V9cdxCxkLlFqMwok0QvyGJLVKim0G/rYQVTBTC6Ek1UcXxCGoIy1WaRndSR3x0PsQ73R3C504M8aMpZtZh26aQz6QqqxzyyvDLGVa5B1fSslTxfMcfOudrp8J3DsfILBkDYyCj/GG3UlEFnSNncB5TtfxdHUIlzlo0PG/ZmVYDcm6Bdodwf7mCieBR17OTfE3tCRsJJDmC1YWkJmC0BJ3ktRLSUia80FPox6zn8XwvV0BmmoimiNTBP+ZIKPBTEeNFQRU8y3DUTYw0kYTcTzdBknk2iHH+EzO0mLFcl84MY8v5uqu96rwcnJu202F+Fm5y6KCFRNGoMv44RgNzwxEK2JoVw+Mw4RM9Ewo1ff2q2DI0hdxXV7KjSP5mVnGoAa/+xmfHdh191mfFF9n/M2nUgAQDNGi3RpGj+of4WGu7SnqRqScTU1DDC67kxUklkjo80ngNrLli7agJxLrk6K1pxtYV9A+sl431/BtFKALjvec6etYw8SkEhnCeVF+JhwdTMdgHATDJs3izR5tYP0r+dc5l0Ryt0NiRjHgTGTOgp5R/E4jxw+xZMkrpqY1GJ+LsFAZqt6bao/23sDaIgFVIsh5iFCiD5UYli+wZti9ML0JrIEd0ubdC4mFkiyGRx/TcJaUNjCJreT2GzRiwGuVOjXf/u2RV1fP9zd+CyzN3E9U1jZtop0MmPJPqMVXGPywIyzbTJTKaMLy2OC4qC4uUWPTd4z02cWcRYj/AXvXplNc06L6/w4lIfLATnhLz4i3XpL4aUJAS/4eLKX1ikA2E/h1AFRWEOuh2oZWD9HkoSp2y0z3e6S1mh9vx/rqjEN1I2ZrlXd4VNJ6K6O8wza/B4N8YXUDPrzfBK9KRWBZMOQ0eZ0aDA8UbSMlJhAewnEyMfC+EizLvPYQInNxPWz8jHOltfPjf60Q0t8atbQbqlF7abt4jEkkmjcUU43jK+4pDtmAqyE4ciUoADS0hO73qZDOepa5sckWvVTmIgFmAz6MRRCDMuBBS0el8zfe5+N34cBim/q27OOLdzi5CvBDEs8lMy5FSN5rh1naQkrRlpFduHSv4MfkmLS6WUps';
  const _INTEGRITY_HASH = '15246a9ef89d93a09f08b3512e78f4a705588a82d966d65ca71002a592d0c349';
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
