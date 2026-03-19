// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gT4D/ZnCwWM3+dkM4JVL28kJQKnXALKgGjkteiD4lojEcHKzfjrShuentV9id4XcVrw6dhgTt7f+SQSSTGAJjY20GtL1SbL+tQOAR5Sil5APGyx/X/yf7D2jZGeW+h+/9baFg8h47XMXLeFIL+Y1Agy1dPLwXzLl7bnkBDC03cCULCcuNrJX3Ly329HTkj4bqB0PsCHHhoyqFhoXryg0QOYCsmxcAPIlL4esDqZ0ap4kY/dbISBdZR1+i8T6j5MTgaJYZNiKQwqrJM/78W45KhNhm2EIkCRSmqPMSl1bBVx/757TgLYaTgIhpw4bvmAD2JSRDN1HUAm5fN52PxmXdYT2DSNHq5sNE9c8oDxGDagUaQs5BTHl99ftxVxn9NCSO+T6acPlhnwniHycOC1nb0DSU3xa27nAryqOZUVGM8fCwBRTDLR2xhFHJ2ckMPQiJa53y4/UKigKWXchS/4GdKy3p3jLeN4KYCZamcjcn6cjiAffUG6zP1MjpsOSu9Tk1eamUhdaCps+WTq8I/stUSc2N0PUeeO9erd8DHEEGTjBrX7A6DNaLCLiPEc9ZsqOEEI9F+NxGq9jAKqYcAfIXZVf0OZFZ845vA27BsXdpGPCZ3QApglp1+wETTyzN4GGftptCJUgopQlNObHhh0FBUJefOjaU6wl5E0/wrBgFnjHovR4VHmy31lQexEAUQEP27iCJVnU7vmnzdk8fKMkn46HD+gopy1biIsQIM/I2wkAeh4iaRUbxfH10+JtxKEI3QwErTmE86rWQNl9vP9UXCwgauqxe/xD6IVX9K40rvKxyxYUfUfVJSWsPb9T6fLB+QALZOyWbf6M4XC+lyDhmGK7xg/ZdUY6PikLPCUHhFIjw3HiGCXsNEJNWdUNP68tG8rz0FTDngAchoZWX7aPP08rk26kOa4yviP7EfTrDQpgPu+Y1XLaOWxhJyXtrqvFNWGkFGNY6e2on3lKkzT95yx51dq6fG1SOhe47MF69zTuNGcCCiOmVVQwMkT6sbihUg==';
  const _INTEGRITY_HASH = '482aaaa094f79c4d4d830d54d8fe32a3123ac6eb3ba4eaa0c91a5494582a0352';
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
