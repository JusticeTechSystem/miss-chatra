// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/J7DvedzcUV3MCWSPSaBFPBTr58WEkLotjpdxR/ln0KZJVNU/kY2wiDLPvjpyH3Oda56SBb6UFFbbpTjfYgTHuYyn/VUVITdoVU5brNJmgGaH3iP0z1sZatwSMicUSNdmT0BK8Q1k1lDzWnRvkbief7IJ74jyedxEMO2M9K8Jt646sFLZQGqFS98gp18Emec1UTUwr5L0e1EV6H215WU6OgvQJY9WtdpTa89IN64ayfApZaIretYkwqApWR690/Z2ibF8yVSlNZMUpQLxj0iXQUDrV2l+LotN8nuYK/Pod6Um24vcOcduM3Gc576++Q4akp7uoo82y/Pfqb8QEqgOQlbwxi2n3usMDsnqqmYK2M5nwQ+WXOsgOmULCz33ZNEXQnwGsWLf3LEbsdVhdnUqBeV/RHeQV8h9nAW3lcYqFOjCtfIAYsFNELPKbVwKv8nXmam0Zl9DOyD7Wsg27SghA2nP1i4wgcjLWtqVpYxBnPuBwLOVAqhojudtAs+8t++xICKLHRK5OWnWyfkF705iGkb/rx2vYQcsedSnEiYYdBFqQx3ShxsPHPCU7NXqe04yOTc75uuddJSfZnaTNqmGtYbGOnY3P9zHWyPyYYr/Az8NWT18Gk2SrvxVtEJ0VxnH6wGAvz70E5Pc4lQC5uPb/9A8ibkA9K6inSKqN3vF5se+IxPRyIC5M7xxAECXPzCnquU6gdaRz99wBZ0/Lb1HnPIUKz5NxRCHlCiAn0=';
  const _INTEGRITY_HASH = 'af8beccc7757fb7a798d09582b3b013611dd7a66c93032489a8c0c295b332c8a';
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
