// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/PMEqEMX0OcRezKxTtnNxLCS5zweOZjA8aoLCxxXjGRcBmu5K1lxZWuQT5HSoQ3mJ74ZASwBabliqtuuG5u0W3HoVktc8x+M9/84lQlBcBSpBsKhz5YwxkC4kOA5ujmF8EaQ0UI2/8/s36JiG9bh3zPtXPd00jpqQ2J3P6QCgfYdMLyEyuoSj3YLYSuTGdcQyM2xoY6qnazqBQU0tL3p6ZDiVBq1tj61W93atzHUZihb9Kefjl4+VG3BNLKn0EOJHLDGBrOZtOeo1MISgNLfnP9EtnRsH/4rrlAA7l9RVWSDMS65XG7OLo0++UOUwq4V6JU5WhU3EpjI6lnHQ4DLKduEzzoiXCXvQ18avWT+ns4UVREc9Hky/1AhqRr11bUV43jbvy3yliuJxbSHjT/PhrsD2hpySPANmciWvrmAm/0mqCXJAq75g0FlEP9nBg2wErZK42fODomxLwkn6aaq1/oTZu2uWzLgPKIxtFsaQKpS7WohwOLtABxn8Wg+lCoR1Cjfuq3yrXD8+EivsEaNiy3rTTi3Phb1TTKjAvwvz1j211S7XcA6E5g0r2uDbaKCRTyIQ3JZP1R01Ycm4OL79q0xuGBx3cPxLgJFAblVx0YX7pNgF2zV20an/NK7wpmPWTgDnVSdsepob5B7uiAt7X45drh3L+1WL+Yq47o+YvFUXm8/cZgFoDOTaBlG01d0s4rrppTkdXCLjJgP0JixJGTdlCJjGXUv6V5GwOBxpIush6TjXYE=';
  const _INTEGRITY_HASH = '2c7c1cbd3caf3b3dae48ce1623d126d613d41d599ceb90bf2d83a8c5585c40a8';
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
