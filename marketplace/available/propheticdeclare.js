// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CfXOpLiDrAR38s2Rye3yMGBVB7bs9Kzh57vtR7c740xT6kMqRMJSM9AXpcW63UfRAmfPbLUV38sGnaVeih2366UlXf8aR2uPyCAMJmX1xOqMZziRKwmPFirz3g+B7UGefx3jnn96PjEkEnpnVQs4O/GF5x8vXMlroAW8M7tKYDSjGnMJL6eoKmlP1m3GkZvbFPzXWFFg/dcUTgdczZmKju0P4A686Sn1vtf3vO0nDL5/wHJv+v87UAuBzOD+xFZ2IeTKtiRTHCKIBQt1XwMZ9v39QKME0BeycqlK2YVBt29DTyQZNL3U2ab9Bk63RiHUiIsRPR5il6sGWTT2Kz44B89fXfTJVWHkr8G6XMD5ofqt2MZQn6XYCznYRVnmKyoW+Wv2/o3NYLZ+GhpgrsSOIetfGrQryxSPvBrbm96oDTumGTwmsNXPL2V5Q0EupROtTwoJOwZG/yIS7WQSvL2SxSc0+QO2P7rtPqOVv+lcOAMHTQu0IBzEPvV0KVSQO+d0JaCOxyhKUMuk3gegQl6g73qJmkUgFCWSpKtb9+i6Svv4vsCi/z+44v4exR0Y60p4tqsbOCBn2iScILU0GK/DOnUWq6HB6yVXts6w9hlTQDJQMXh8yr4FKO0Q9e6C6WgBRqAo0GV2HUjbiWADtEK/DFAlKogo96X4q5aF6Py4Z1ww53B84oPjwoammz/NtY7XtmJhPxXHS6vWjfp/ILhxzUbCtsLPTL6nZZvEcEcviSRw8AqMG7cndlrAaKNU2qRPYeLacEzOGl11or+xwxO7aqL+9BJ/gT6izmsNVkqIgdJttRiZCBo+HT4Y8Mpqlwf1KT5z3OxGzKpsTNHPs1WOImk0pMh0NjoTZ7BcwtCS2kggK9YM68Ey7fdHBFEjBkoNCCOhlosTNRmnDvyKkLCPDySq2kI0dCfwcNDBSwvxHPWFdxyhDlr9iU5gL7u39w41iNdtfQRfNSjiI0D+MspCzvv4D73ETvJh9jxXLYZ2ylNQY3LU9CVvr2sTtvifQSeVmmZl/lP/CN0x/AmdnAz+TgTVUNfuwukoMwFhyaJwF9G2QvHKgi4Wk0PuysrkRiC8tU6YxOt1aR2lfnKb92AWE8JCsVirXyK8+gZe8UYJZ9dN17d3fjGm2/3rHVOC+r0wJAkRfOPZ6eYQWh4O40riKuQpQH+BeYIbcR71/djiX7idgI6NYcqDWuPtLRvQaJAO9o+GSZ5IHO0p+TimPWFZJNUTxt4I';
  const _INTEGRITY_HASH = '5d424553a42b4222601b7a9f5a35179a0f73942826d0f5bfce42852714ec48bd';
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
