// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Sz0QroOwOAkB1gZfTSBu91DEMEx4GlN3d2ra97ly369SBDtclrmJRy+8Au6mkoqKtbZKmtZ81npRxAAQh9r8NFefqxDU4I1hMljT7hiy/PAzYOgqa+6YE7TF9mXepLYHXQbNYSh28TRwEvwWyH45cQ8Hp08E3Tvbulc6jW5NlHEvWFnpI6/gbhRn5tXEvOOc4vVqyGMi2BDQ4xLzdDa0Bz1Xv8hXC/qvu2ST0HPlNLLo0RwxHLuzcJPaYvwQpAQe6vi++5SIhNxckX4vgGse+/vtNmApvtrEa0SeZW7pCd8e7cnFa4Rn7DtEHmxw3AxJnIfTrg6DctYNUxBJk31gL12CBRz56XlWQhd/x0IgJV3aBoMjC2RFXV34qp5n0kiurA5MqXL8boIueytj5M6JVPCv71SOxRdry0hHWVQOimrVnPo6uOGU/eeqWinsSknU8UOWCfsHC2xyTyL5wSjPocOG+IHoHHuzSyO6cGYq/CNz/CWPVI2Sa0RZ/FEiolZViLS3Xpio3IuoD/Q1zt/OIjEn4O6m7dQEbKeA/8rEFwHNVI/E55hpQ7RcmnyQUaOumPiC7Sma9+VYoYQVSrTqa96ph6hS/JKQDZh0kx2oSklazZC9X2rQIo4gVv0GmvaGOdIS7d1Njt8J9qlZfr+1pObMF6njwYrNJ/r1mqA7hyN7SwS/F5X6I8gohZ7NNZ9IsJF+65ZbVmSRcJrVbxbgZ2Sm5twuLfeXjuv7We88VB3D6Wu1iksh4fG056m7b9YeSSPD2KKEueQET8imMIi06DsZmjBqSWz4t3e3CdrqHILBZ+H0vnzpLE4o5K+7kyEG+P4gj588BqGF/WnOxQQHbEdVfKl9m5h3bAXDdI+GK2uiIvGDrlfDNzLs+eHCsb4QOTMjfKn3dsn+QdeIknLaRO4/EBjW8TIUOnHW1NOUoOj5/yqOI2K9T5z82pznDeZlUwhxYXRh6zSb94bTpiZeOTqNX63q3eDS52ur3s/iy/Afs3GdrZpdncR9KlB9cM5Qf9EvXpuIrzDakJbu3sElnbzthkr37lBi/wJBT2tbMZLuJ6/kn+DL8t6SWZqn03lETQGyvXMOT5fijT7vwgDYxyjUi2vGrV2Boai7jqdpJBUEWfCgMcL2FX/z2Bo5IfuVOPJPlxoq6PPgA3TnQ0g3+OHqI3bLNBOIBBHu8JwxFO7f19li8GhO7mRknXgm9WN+zSBHBOf2XcXwrOSQYxS8lrML50PSlbVdHPKLQQvAoY2brbcST53Z5QuMTuyjWGF8ZM2x4lp59i13FPlphEAdOLmVjYkRXL3MfCwfXrAhOnO+kaff3+KqCkHJQTWhE0hXbaRFb4VcEnwCtX/rTOn+IVGf6yqOnpdRfL2PZc7D';
  const _INTEGRITY_HASH = 'ca68f938de3e8ab55b7712e3e085d081a2bd97fe70da402f5b31859a005d475f';
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
