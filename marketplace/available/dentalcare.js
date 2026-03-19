// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tKWQKzLY5OHH6A8E1C/N7UOvHGmfv+F4TSg8vKZJGoYZL37WWeecKt4NIFh5eRbHhb9qD1AnvV9q0C6Vy1gybb/cNrdtX4Pfa1TUn4gHU/7O7cOz9GBSm8r16LKnuG/sH4w0WKNz939ysUEILJPRl8Eob4o2NrNN6e+kQPDNu/KTRiZ11quMFDr0qTzfVnWj1/2EiwpE0LwHiiMbYQ45Dy0xT6BaXgPQbZR01ptUJrKOHB6N8isawSUsoNH8VbjbwGgNvYTOf+bgJ5bbPnUzVKLiBfGuBMDwlLumb51rjVtT0k6r4VlRsM0W18ie1D6eshZdVhL5Kx0lU5HHXSeD1d1w/VgRucFVb1PZ2uDOdFmGfK5OlurKdRkn94BPM1+s+2cmViQzhml9P52GxSYoAqdElGzXm7sT88UMmemTQvV05v/j5vdKGJQoRo58o4iug7uCWjPgiCjk5AMxSOYRQpeHNQsNSBnxcfym2d/ta7UYGWOPoVj3lANpdJUcbs5jGwJdZ8t37Ea/GRjVlnWeJq/tBYcRsBGS3LkaeoQLafD4kkfYMVNpY0kLt434o92jf/Xt+VxR904eqSRzKPt7JOOuV5vN60/7mcIC2+EnvKidT5EdCniBkxXBcrOSyzDWMwSnQ/LsU2fTHacZDUshDGLs2xYiaD2hTNFN9zHm3srRFd0HX8Io5M7/56YKlEB4WIuM2vmPy4X8rBxrdUO+xrE/G3rgYW90itSCZq2qVjvyitYWDQKs3AADyB3fbJz1lnnevCTdLDS7JXO7nkIXWNuZO+G8MEYAdEZNDATSEQGAHQzIXg6uwaKwjj3jYZt2ggtwxbWxE47SzFTFhjjx4z+htYWstXMFHB7+ajgHRiuuCYGlm0d4XI4JTuwQH+JZ6+U05V84saUi4pyZia4Y/SMpalWbfTHgSp1DHsZPQ4vjAVoBInLpUPWRiEs/ZZEZ6xAjYvk3f9/EZMMpjuORbo0C8n1bi8bccXxuZ175QDNliOxBtPckqjAnb2BlqVLfDMjtCoSnr5NLhRzHoIPFQROXS3xxfa+oNVOJWrs6YV3/denG8R8Jadg/j62HMCuc7AWbL1/FuFHEiYw4HMrtngWzjssiG4IlxRR1qp3+r8lXPUWK7oLFHPr9v0k7fhVWhAFnAf+GckG0EtMLU7FvIMfntMmFeRk/FdaPb0Tw2qyJRycZUmYtf20/5/uNkPJKEW0+';
  const _INTEGRITY_HASH = '96871c1d9439df009aa630e1b7194f394f6ecc7c427f1fb4544a62de9761df0e';
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
