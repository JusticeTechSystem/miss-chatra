// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'l/fIyRNEkVrFDZ62bEf+HEZWCEVHRom3Q5Q1EtJ2SWogQXZyGvZlnOHYLJ6l10dNfVL+JkiRO+ABi0LYKFReoPekOpLWVXn3J48vZ6f0LSHNSWWsPb2VtAmP5piU3SVrdKIoFC6rXZiTGMKX1naHf2Xl9j9mbAdWLR1zhIrwX+oXLG5qm2te1zKOoc50AGFbFGhuVx6R3bZVmchtwMgWnUdx8SKZ4fVR2P/w5okUrH/0UhRqWUui+xcg+C9lRRF6KTfc2Mi3igCiQZ8lWiPt3vB2M0Wzut+hj5HHcgWtHCS7qUbwYPrC3kyiLI92SU443Fewc1JDSBC3GsvuuD3l3rqGQYWMNi37Z874bLaWviprNyXKi2m1QwQiuxYVe/HfsK9uSwPUmWAwHVHTAIWNZOHEYtG3mO32b5C1TZ0U2fzvmYF2R1TeoEdMmGDt5O4lFuLK1PkRQmhIZ2TdJyFX8G9W07ilTrVd7hFxXivKOr1l4whL7n+/N9U4Pwk5MDtuyhnIfxvxGdOUJy9KQ/XsABBzdwEmqlQxbc4aSF1j3+3Uv1XJddKheIvx9T2wPeGV8ljKd7wVnRZDYWFNlnSh2QAsZ3dla5+iTrYDHgTqtCPSd5p7qBMghCSoLcm7zFW6BL5w2khiGLG66QmXJy2SAg34V821rFCnnbBMHV4FELSEgAg1L4u63xMY6ojnuC1VUOYj+LYmkjVV+vilxxSC2N7TE5/kZAksiQ==';
  const _INTEGRITY_HASH = '87925c7a52791e19f1dcfca24174c66d84b1c104a667666154e8083b5fac7e8a';
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
