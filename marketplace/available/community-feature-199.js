// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'e9fKzz8XXB1Xm7BnjpZqb9P++nmo5FJan+VroQnUi7wGCcwTM4gUyR6xS2VODeDnij0WRFnUmlv4p1r/IXVHZ5ATnJZC4bmcnZWpsBGZ/GlArQ25TS8ITkrIlrw/f+H6ODEsxcUOETl5oGxL+MK5S07P6QR4RHBSJh8yGF6hY0DTxMXGvPkkKpXhXA8TTEdW3qFwBds4paaWr0gNgIy6iZ12P0Zcz/+3HGDIeo3Hew+afBAMyBNA/kT5qDc9DwwQFQnYK7Hic6NIEv0EmPDekK9mDsuj9gfBt0LXjMFzZkAQPqFIqoluiga22cEagWsmvpoTP/sEGFbhGE2ujBXC+ZPy3EknjO5wTsEr/rFsMVnYgcclOG5WtfPnZb+uF1OSakzc1RUzzKIxnUWsNu/7nvC27GDvZmBRFnnHHVgNu+nYYd4QWZcNVZtyK2mFlkeBNqWRtfoZ+VQG6qsKcMOElAlFEt1gzie4pBQV68Pv1irwaKIzIitLkUQcAyfaoRYobWhXT0zextKOPizOH/t92oWqjmMmf5X2UkKjeEmU/BlrqBAOWG594b2vDnfYVRO+uOTWcopMgCs/3rSVlpl1JBOQ4AwQnHMN9qZurVvWCiJdgiKFe1rSgEAwmq8unlgymRurjMhWg3K1HvIdArb6/Odrywd3ngTmva5vNBUjWo0Rv+bHgJEOna7xyXJujvohgd584WHmV3y17E9hmlxnjQ0C9O5gpLepRW1HaX/6bJ0VEh6AKAQ=';
  const _INTEGRITY_HASH = '15d266a9e40115ee2c2bfb4cc4b3b14d596b3eec0563f20edf2d9880c1b31383';
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
