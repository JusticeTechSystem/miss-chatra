// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5CsF+pr0E5+e9WpWjHGayiMoadQY+gUg5MkxwwfgwYoZdjpbw6yxI4s9i7KdBF2NlEu62l/r2j032eY+YsZBKeqCY4//4k9IEKfRA7aocYlUOntj+8pLbaPDurb6XFVczzKsZfErYCDC8LUXiYjWECud/HHVgNhs6p8liRXERlZAtNFO8fN/bnrLt7qfu5GPpSwcQtINe1IteqkN4s1jPMo13orWXVNJRKP3in7eYVuUbKOAV1M16t/0lSWS/aFBuVy1r8eI2cYWYQ5bQcA+jHxSCC/cUQwz1TB1/avz1VPOBpleANTGLtj8H/vMuYlViQtZWs32/elQT8ioadL+IMqhpfTc60vqCT0xyOS2BbtWGhP+dfTC+lKg+PImVWPJCCiysQsei13DodRzpxKbq6sx2ejBfAeLGlaDXA6+UQoR1UjuiSfftsM7vQAkJPXmSMG30vlg2HD85Obzul8aKMsyb5EOAUWwEzKo4PHCmiXI6i2AtC1G8whoc3JDnV6rwzsyinkzwQa4iLiO9sHiTMHpPYJ0S2AKwf+Q5Rpiqaq29fsG3/Yh3EciDb33CEVTlW6gtxfQdFizZX2lss+wUuQiA2nuwPbSES5KF8C8P16Nkwk0NqE3pAP5n2JSCta3EnSXt+6B/GYvn71lI5fzjHaY8vKX+zHZBtllBEomDruCYIT/fbjC/5N24tabz3XRvMH4xJZ8rNByAtK59e8u0TKCxioaw3K0YPOglzwvH18Un1G3cof32wWNJGCL3CQp7nMIHwXW2yUVCARpfzDZ5DIN9H/oBUPCHPEBveGxpJM/cGKy0CuW5XvFa0bT99pSXJsPYdiV2PTfmFJJv9XnxfPxX6WnCb7F1OMzWup/guc9Aj0r2RM2UqsSFJdIGfKUC6znDRmgJQrOD+KkmRF5dviE5xttMmHfNG6nU321kQjJWRIOF8Jm9fVTj4w=';
  const _INTEGRITY_HASH = '042dfe54b179e7a44114a8052c9a2d6373ec09c3f0ba8706042152d4b5459a79';
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
