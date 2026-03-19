// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'mXRIq1TnkW9VHaySs514PTaolDFQdNuMDkwmoRP3GN0EnV2JZDWUAQuvt7+wWrpJRkgtmnkrnpKHQUGGV/v9fHo7JF4KTnOFZ/ehb7or1OWKJYQa0zXT2DfvaIVhgGSVUtDOCZ6b/L6fL/Xh1wzPVzzgFyKer7fwugfnwa/GphifemiH8+1H5uJZXXyU2i7FVaq/+waZ9NPPb7XKbl38tV4fj7y7rI6/DPLBq1FmKcXqW3J5ISWPA6vjsnS0HduTnUxBtmRUCIOYCKRP0bICrXFFKTA9dSUGjfrWiMxADaOXWUheftEUNnrhAEDsmgvRTizc9a8EC/upcJ5PKzwtmnBSkY4jvQIUWuNvOKyhQRWFz+VDbR/v5xw4A9hjAkH3EZuhpwDqiBU8eWjk4TC5PIKX0X83cGs5hNbcEHPhG0lkqT8nOMkFije0XjL31qy67vJV0SRtflityZ8J+rCK5w/rKDPvHMwnqBdzNUg4n8rVjsBulQ5c9KSf9IabO7oibmLTVCTWi7HvCz6u8c9JIyGFPpUI6uiN0vrrI2PJ4civQUpfj3aaeHvQ7jscbATO4bbl8nVwphWakme2amh8Sf76Qq3qZwVYsA+ZjP0se6mWfmd7a2Dh5fdQL2k4I/6s53je8Dq6KIpZ/MJFavINPFBABaRNKqHMS+poWFiBUhAmr6GygEs2QOIbqZY4t+eXY+i+qlL1FpraVkFs6uFCRUwpAZJB4wuyOTcoUxf3j7Cu2YFXAanocr9yJee4WLGcx/leGAkEgwgzZip9o7xvSroXjgkwC8nAn70hSvgbNgNW7byUFh814NcIhpO3bkfP03geL3D3fN43MyhcUo14xd/HhKJf8CWo5HXpvm9aW9E2jQxQcuuU3t3FPabZvuwbzyelHmjU4pdJhwsmCEXwZGASav1Qy/wBzpdC6CYdwHDHdjgdhBVk1ofF4A3LPGq0fIpjTMn7ii0ErciIblNQ89zG4gMExVftGC9e0GIuyA1YUTQFttqt5mMY+cXWMKn2cw==';
  const _INTEGRITY_HASH = '34ebe107e02b598b313c44fba19d6c59af150840bd376227933fbc12d9d994f1';
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
