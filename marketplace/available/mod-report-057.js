// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '6zgGAFwAUi+rnJzy5b2GgD56eEqXBSXWgPHMuaLW/rs/nF3MkE4AUXPc9oNWF2+4ANxa0z8KUSREIFfQxIExIy6OEG/za41pa+kvo9D/gpZIfckD83cbZ0iN/sWs/P95xqV3KzodFe+2y64l62ihDVc8mzwl8YDphcVrtheZ61w8rrqujPJtm7nZ9MovgasiFaU4KCMQP9d1+abfDdbp7nEioHHlRKYYi9BblQwt37Fa2YWk2DaEBewU21EGnEEaZ2EFlT+lnoAF5JiOPDDP8CXEd8KGDPBMMqDSiRw/qZVRaFqTAVCNwGjdof2IvOPmY7dtr+wNKwJrla4NKmKIu7vDhgkZQpdp/zUsWpzW2zZgMgpmyQOnTfEvqahxE1IARlI9yVeKGLnNngNjMP9NYdAN+x4BxJ54Do28fPxmJK23Tm04uv4jj1KPbGQ7lTqnaIKDptuamJMURM52l8JfOX1JN+58gLgGDUfU1RzKqipbEeKQX7zl0MWmv6DZmqhxUaYSiRtgDoZRvPx13GtDocOIJhjdMp/dhWgVCSp/P2WMHoDHT4XKJdR4kgxyD/Zkr++/qvy4CQFicFM4lFsBoA5ijfnoJNBWVoE6YcoYrwCykCIkQtR35CpfLcr5Jn1AjfY8wFDiepEqzvCcqqR7ASgEcMTmS6TLIYo+IkeKhpllTwvj3JwMiXT3bbCxjb6Q6Aq05QjnKF+eUUGIDpy1jYOtUbzsk0ufpmZrV8j/9+b821diEM4lRx6mh4bMriu9kUk63GZCqTBfZYhNcuJJIudDmqS+bdpFJhvzcR2gnIdbUNUDhkA/zXeUEJ9kmG4IRtYG+BQBlB8RKYOvkZJkZHutPScqoiWEO9ehvl74CtmZUlgTowcYsnQt84ziuCzAX0xBh7a7qEcEIS09NgovSJS0NS14PKQp9IjXjA6adxvU4vx8awXv12zU8V+5SO0stm3c2cVjAxMvgXUPNQxQ4hOqRQ51xsXo7hS3F5/yTV2rciy2o7jEKeuOiOm3pxp9QFyTZ+fAeTNUQe3NKUkHjVuPrDn15Y+OORFXa9Ddolc/oxc0vfCCRnHWreStLzQDLoVkjkOaUbXAmb1sGTJf8vg0ZdKwY2eYKkARFXCDQ0jpDsrTSXFBPk1tvcgdpNQYx+nIcSxBu+rSJjT3vxbNZkft+I7PYexzwglXtQJlTUQZ4RgfIsi4ZpbloLGFE14bVsZnj5BgjZzChPTtaXmIK8jWAFfmX9Tmj5L8eoMp+oNZtP//3tGfZQgNjdwI/5OOKnwUgAIo67JeitfBt07mVTKyV3I1N+VodNWLuVU1AhKuVoYUjRJdey01PrzEtJ0RZ3wTCjEpohGJGATcM4vi8UW0l6Nz811RcJj0eL5REXNgLQU=';
  const _INTEGRITY_HASH = '8d581889779c434b14c90f3936936a4ef0a25c0c41f5d1802b92a02b44943508';
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
