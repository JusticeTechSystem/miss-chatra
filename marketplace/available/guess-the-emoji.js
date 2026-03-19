// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mSmC2SMlAcO0kjt05MOZcqy+h2BsD0w9f3gGy7VUsXGepH6kA8nYU5P43qwyECcINOHqur827LwNvUazj06rNQkNyws6/x74QPBz1rNHBAwx+L7HNoQ2H0Co7IkgAEfr9uoK+09j1zA2V+cxO1Q9c+RdphQjPmTS85v6i4xb+pyfNGqgBQ3KriwH37K+ZCKXVFpjEFt2XvyWfNgJ6pcpd4NvwBKAT987BXR9q3B3W0VLl2bpULJHe005qW4igmF7voQQtfywH5i/dyIDjbhvgxOivtDXkOOIwQISEpEzfDf2FjtMpW0cOaxe5vD+7iS3W9tA/NhdW+wZet3DhUrDKxQkRcbwSFYjpccQR5u4oEj6h+goXHTsZ3nd3P4v9rESsIJto9KllQgvah39+cQ/+580Ofme5XQLsIXcDNjCyqUjyk6wRdLET8gHAVgcaHhnSJfX9UCOLAJ22BYfYNA3oIGP8/JQzhFtOkjAOIOKD750ZGj+g7+qFNr+eYBd4fbSAS8DK8fD+UUnc+Ve+YmWTNbzCaDBHvxx2Hj5+G6MICbEJjlSktsxFf1/VzQ21rAjXKbdaH5V2erJlvIzQg0nuBmoIhVsgCD+a9i1cwIw7pUxtc0HfD1DhkxsEGT360V5hmqreCaKlvLbHhQRdpMm0LsK/+aOjKAOqTQcKAJ2xqrmK2rQua9NfzERWjZLOBhNXrD4frelOkAEXj52BHYkcerK+EeYAqrtRUw4Y/0NxGrLWnsXkAvpAjLGq8wE0gsFA0+nCKoWDoW9/INfMHp6qj4+20q3k39MBeTgt9KUwe+BIp18K8LlgoGFwSQQTqb1autXRUD/6mbsSbeD/YbBiPhteyuYG3HpYY6XfahNSGKCOq431fPeRi8rt3KJ+ZTPvtaOaSnvYd+3tr/Ldd0cdEczAVqn0ishWHuDF+CkXRilSrBGCYpf/HAIn1Gxk4wTaaR9mFoB4BTbZaL67NS56YgkAxmx1c/ItAOHX8w9trJlOB97cN8/fCBUjklV+xFd9CkYkPkSs6IR0BHMagpGGJvFy4x8lHoJNlRSq+6jU6Z15uUKht3waYf5HB2HJVOS+/w9eSMieeDC9ROiU4MUTNxLmpk3ztVaDMTQoOUFqnM6dZGIx3m5CzncaoRPfhqKKhDCszD54Aq4bkrBucuCDbjZKgN6wAYhO46c8JJjvH3vWITUgMujlU4t79aTBzzrz5EjJK6W3BZ5gwXGmuOBqUPft3D8AkZqzDL6QB3gsV6gqzGCDCN/Qm80poS11XU5UrpdmA0AEYlE86SgoawtLG9M6nzJVBdjYTf80lKlwAky61D6RSM5KPbntMIOnp6egXMCsokMhASVC7Rmy1U8vygXo0Q4fH26utypgcvKiJg0gnjlXuzOwRHPdHxHaTwad8QWqxFv6SmT0NlgOr6JWVTd0KIMtjv+QY43SX6mnGcMvinBHz9ToXrhdc9BxfTngwBopHA2+Reg3r1Bc+2UVvOor4wb8kHwT2SzKQoLZVTBIOdlmjjaMeJbBCpAXTrLbtf0QNL2al5KJSPYhNFFEvv2O8Mbv2LCMhtQ62WDZkeBaY6RvFt04vxP6bCdZ8/Vmq6HsVc8';
  const _INTEGRITY_HASH = '14c7bbadd249fd3bca0c57db8c2a5d01d3da970e346923461ff35f36067be0f3';
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
