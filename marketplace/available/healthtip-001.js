// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PMBmI9Q3eZLdcbkKtLwm9dNt5ZCaCPCqhgrf1qmzdmGg9LfNgogAboxxl6dfGMdMzSOEIRX8u4f/fRfQo4JzXQnnBd4DH8LJoRpaSTdjQw4XY3yaEcrwLRgEVslOlcShTrjjpoTqu++idgZEj6mf/7kbljGQjkRs85HaFD/SMp7x7fMBsrTn40HRmuR7g/potsGh5n2cVpplJLregUqKT0nTuk87cuBltICY2UHR0ubsC2u20+F2BqvCGlYN+2ltWevlVujwmY8u2rJ1dRWcklZMrevFKmSRdo1GkkMEOtzjDkcmxokWbIANyFcOzfmz/RuMuhWHYyN1pdTZA5gT4+AyB4RhON90rQIX0gLPtXxUmmIJ51Iw80sWsd8d7ZvAc+wReXAhV2fax+PtWWNL9HeivO+s0VYJSk5rizAELMKLLYfxQVkJqyQWx5qKiUF/p4w+YNKv6pDu20VqN7g3ObGeMoc4YcAQIfKNeCiD9UgrKhXuWA+f2eH7ghUzZRYvuPCRXoKaLMp+qNJT5w4MW0EAKA0QBYKeS/+RfNo+F7NeQO3a/emwtaVZqNrULY/EBHA7LYuZcMGlmOxR+Es+E5LVGgnkkTP3/NLi3QFsbz51QtZlStSiVx7l81AEUJSmhUpBJ8gZA4KUSjXSe5hSAgALhYXU1nVQ8P2k4+bzKun28ujSLuH3VPEj12i1volTOAFpd3YEHkipN6V4cYImUKhbiuLvaPE+hkTU+nF04MK+WbL3FUQJR92Nfp0wlDuKU3UGoN5m/I1ZGkF5XyAeBj6edSfwH5CeaV3jQFF1IVCgJNIHC3q9MycUXMMZIIhmNcQReyAuWkrN80uZPalSJ5oqrTiONHhmV6dwjqbeJviI5saIMYaJn2ANLsxqMRQtU+uGl/5fayaDxIBJzb6SMaLKYCQALsIuchFapH7kveBTP+r860KprA==';
  const _INTEGRITY_HASH = '8670a2fdb64c64551ecb18950e81102d3a94ba7cedf83fdf9ebad74c78dfa8c0';
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
