// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7qLpS9AP5mxRmiQUs4U5HGq8Q/GCe1n0X36BDkK11U4lsKglrvbB+Wol1vbvWEgDyRDIbpjtTTVHR0idKyY/TkAjTCXG7YbyCgEo70c84Xu/U074BQ+dIHqtLJB5/9d00U+H6dFscRT7pntMTiBbTUwW0+PhUsjLUVFV2B/U4v+LYAgl49SgzU87nXmuzfvwiW62qYc6ypaNq8nMwlKMMgZ75w/F9d3yhOpwpYIwAQwBBaLqfxloGo+zO+1O2B5R8ek1OYRgFOt0VfZoJLDcYizz1d9eOcykLQOi407H11WPryKeiQVWaDkew+llLs91ocVEWIk9Z0TYWA+gsROb4mrc4FwY/cQ1kYVsrWJ3/5eiU6MZYVJ9dH3LZ8rHToZXY6giGVHmAUsovWd7Vj/KcL1aAqPLma6d7VkOMmGizKpOoYGe37/qF7ldgHiDjwfkz2nqx6ZxniKD/CKfhDB8ZSPdMso3FcxVq07IRDhmrRLjlz7gmRFgNNv2uhd7pjzXjddd8d4VQC0OZ5Q1D3J2ZyyKUhxGJ6T71i5qYQqxtzIc/xu2Qf9uI4uMm5zIB46RqGB72A3Oxkc5WbbSYoXoXIT+MMxqVrdfcN6eU5ukr5eVatg+HPM2UB7iqkUhB1yBsQMhpkQlT/lUSfUNIe6KiuZTMmnw7Jh49M/QB8MLQ6MJleP+PEmfbMyR9OeLQard6HsHauyGPImizDEPOTBEuhd8Q7zh42gfdJrlRVBogKRSoEaC43e2MW+C+jSdZUyUodPS5s2B7y5w10DfUlLM5aMF8e/aCuMuuB4CoK0bteM3hqF40VpVyh9TevE8KQk/7MTYgsIY+VUoSqgtt7pDNsci0/DtuhuxJSBn7T7U/O+be1PQKqiq2jV4EsA4ga1bVG4VpaQnSDTL90npw0/MsnNpmGrDsSfBAP/WnAZszbe4H9CydB6rAhQq0IKx0s2FU09veIbKousQAJOkyqXfR2cAkjxJO/RDs3gtRCrFsPjemziHsVMU72csRNiGiUGj4nf0nHOEMGR8c3jqhosdVXiG1+8TUhv430QghlX+B/DA3eDE2BhCq7yetmNQXxPmxcpkXu6vatkhiQfxivyIk+r9cs5q4SrhKcrfdQlLvHqlw7bovjw3ouMZZkpTpShhC4YQkt832yM3EjKAjGFjd0jY7/j8scd4RcREn0llAHNPbHM0VxtK0R28dmKtmUk8IxWrhuJRJ/aze5YrT+Sfr+8ZNJpGeBWXY+7LF+Ed0iey5iFZGZDkolY9DnhIIzX1stUXbCyoDKaNIOtnx57a1P0KoovJpV2YHfV7vWA6L93MSolljXRa56ho2O+upwLRGoWpHoJmiLug5RvWfVZPNtf+6xiMhOO4/pytXdzM680SCc4=';
  const _INTEGRITY_HASH = '92ff7aaf3a61e46f7ad2b84c903c3539366601f46b3e4afe2c20e7bde18fb085';
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
