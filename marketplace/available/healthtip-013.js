// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TR+MkgR2LAV7SQ0lJNeN7LR4UM/p/ecyZKFyOIKhhES64ya5ynFOMFv9d1rxGtfwYXeDqlh1r7Wo9hA63uMYaMEBTLMqXE2r+Zr82FZdEWDPHRp9YJBHr3CF3pZlVYH8UDMGdFX5883mG2Rgm2wiE5LFloEi9P3X6XOOptityfXAlgp9dgZy4vucvI4LWCoJfaO14GnMcAlA2XrwLuUKr35C3dCGj+UVJvghRq1r3OtjWEP/pCVsS+6y6KcANXZ298OlxfKsBntOVwuA/w34zBj45KMAibylidsWql3B8+x+ICOt/2sNOdsId7ZKoH44Ms5kC5sAyF/oDjj1DAXvKfG49nhW5NUlT+lk5ZtKVPFSp5dkazxvCoMdFVwr4r6QDVWFKQ9Edn4waSNH8qXhpWD/cpZB+hpxnEPmQooFmu82BZr4Q2r81ubostjl7yWSM/XWS47jO9CDkVHbThzPoosZkjyyZM2C+vKPqpykzdlDOxLWSNF7oQOlNz2JnHKKvgCCBX8qPREZz3cYnguVNr1wkFWHrAoY/+GaNuFqbOFsRKw1Ca61RULRyb2zXPC/l8KoBuXgqbI1FO1zYnPhkP4eSQ6iGIH9gKuZAP0TNoXUKCfN8BMboU5pelURozG41rCMtiYvdXrD0XSeL1r7Ac+/v31aiX9Toskrmm1R6eeOF1VeiBNyBM1LRGtM1+5P2FEXz3tr26BvVKi3bvSb7ar9yMLPpufSvRrE9svmZ/jiXQRNsz/Dswa0Z86EBwp+qVDzZNaEA9tLtT4Zhs4p6yf4uPmEfnSwrkwvSzzT/BrgPqGehKeogbidMnLcTWbxpy61bh/CkYCbgTFLJhrFd+z86b+oOLq+QT9makifYozAbKK/GkehA8NGOQ8dadLs08EuoJp8XKmhuqcJy8Eg1QWri1NR6mPG5gJdrPdyY3iHcFpiQF3iAnT+sFs=';
  const _INTEGRITY_HASH = '2154a485a0d5646c63be7bafe215819e9e05dc9478082f24c6cdf83db18938bb';
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
