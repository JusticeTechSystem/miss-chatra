// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UoOvG3K8C7TlSJr1DsgqVi5U2RlMHn2QZ8SKhkStHSWRjKQK4KyFZeyZFMgQVkYYLzo/a3bWVXCvO9YABdmbay/9XLDt/wZUFMnwLzNfVghikYfDNm2qXnV7HypnHK42OCYlK9Mh78JPxG63ot/IBJPetyGwqUZ4X9WV+BDkZW6SssAmJhBOta01J50HyWyrL0CcUsvc6wHlpIS18fAqPcR8Jim/40qOiGAdMPQJbMJ+mJG6cVlMJKuFpeNaj8exIq2O5gzRTsSRiQ6VbI8Rm0PqKcp7Tk4HI4gNY2rp1q+uBuae3eLh89inFp3/b8Fgc0460PBJq3HRpepzMuM0lSMg+11DIzmxjEkL+yjOpxIfvMC1iTVLg3Ka8DBSuy9u6hxdfBkiAYuMiIyKNCGG2CQ5sRlCrO54svOS0Vk30dgmEYA4vUR7gaxo0eMcFBc4NSaRj5MhC1p07CLS3eEBXlPlK3p4KY0tgLJWz5mir5Xit88DKzWb8brWZ968hOMYxxEWX9REp3TzJ+uVhyUqiO3QZwxvGmvt/UMmyYeov5f5SiobzNj5HmaLzg8EZ7S1JcdfN+UytszDixziZuhU9Adlhju9+wBVcqi9k2dEsVt5FL3W9IddDtbsN7qVmUcjk8H5bjCyHQQ71bF8545lI2ZnEH8LMTNfIU65jbVZsNmhPEJTW/Ic/m2ZcQlyLJcaMEH5PXgF/zcCVeVg37D1mU33ZVpHRXgALbM4qPLpyT3euu6RfFpWoTCc/t12sjLOgcuWkbaGotgLLKn0QqvUG2L7xgCqzjKjJykCmCtHFIVo6jeDmaLLZZChPfbUhO9VzRObzCWijs1ZRIWxN6ys2rM8wdJKOs0YQQfiaajfFFLqomtp5EdVXJt4rrwHoC3BFm16xRV2OZgZ/secPURLNKs+tkwHitLAMG+6b138mhrHD6FpY3xNbgrpSOOYx4gMLo0OIL+naUMoH2NoQhyDaITX6n8td4Uh4RJLzJ3SLIxRXA2uTnEXa63juoKxhh7kqzkEW1eM8DKynJQWUn8KH2i6Zbr9OC/v5VrKYX5Nk3kN99Vzix+Xn4ylNikqtdEc7FvZB1MMxbdpoxAxALfrJhJ24IsS2wmYfk34e+41pv5xQkch+B9sCIeEAarbe/3crsZ0OnQJOTZDNZJM+De0IjPp/IL6AOGoByA25qWmlhsZlykTes5GkG53gYl7ppBR6RwxAx4yWa/X/fT4E3VyId+84vQk6btcoAYmjze9nYea8F6HhAPOCkzFqCVDtbMAInc1CkL3XmjbNKDl6mjSmj/99po35gq1piJ9Vtkp+Zno1vM/IBLuGVTi8Gb6DuLov4yHEYIXI1XwhUDsU0SO9v90/0NcSFV7DMeTFmwKN2o38wIyQAnxog==';
  const _INTEGRITY_HASH = 'e8e5876dd0a11d9f2997a7f64c6ef20d3260cc1e45a1f638b0e977ea4e02c5c3';
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
