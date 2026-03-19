// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Xi/RQCyA3dY7Gdwe317/erLoWliwGH3HEX7aeIHFINp5P58BOrWq+JIO0W8tX3v58jL/CjtCYxEdkF1laflyi7nY5CsUwh+SciNUluvyTIcFo/f3w3jG46qdH4KJqwt5HVfLdqjD/lhQw7mfJN46rqriaMUW1MZUiu1NE98YP93cjmoPW8Il5Crd6k8iZlwE8OuAcKZJAUhr77gz2frbtCCHiiFEMaA13fXuDWCv7JKk75g7fqR+wOE14N87WvOLBXTfSGMVwHtDyuz4LAq0QabjBkd4IUyOysfhLNr3/iqpZsmYmU6sFhABEXbDal8/e60Vzkik4eU8WXw3FC9St9khEdQxLA2dshOs3LI7W9jkPnpGykFbSAPaw7eMIlu8HVQ3hCADaXV3MpzWkDWyRTTeTtIboxF4I2DBSKcgzIQQC37XsKYftvmKUUr0X/iEv0+68bdQzHZqYetYNehrfekAXosNK4p8+QRllDU0SnFt0TSLfR2hu1miZWdNqQzAzB4ZAgUS3b24kfrG8hiAYlpjuD73PXL6R4Fc4/q+aOjqChFq6QMgChGlPyNzGfywwf/MwH54brtFGDPChOggaMy4TC2hJoOGf5mk7l44lHS/m4j5H65Xm1/zL3PRu4W/UgPIOSghUY38uIu+bgqb539a/iwF8YhrjdIouFJiAmqQcYkBDwyA8o529bxS9flaVwct5DWr2xrfysJpZE7+1SAnx76RYdUA2DLb2BOGgTSAxLbcTPozaeeNTxn3H9TfwCkafLnwIXhJqHs0z94kpzrJmC8Pnu/rpUo+qLxYQWI3WxSxc1ZYmGhb53AjaoveEWTLnDr7q6nG36IF+J1gyIWKaESUOSuWnAMv7UD8tqUPs4xzDYK/FZSvCpR4Isl5aZT4jmf1I6Op4YOBwTcPrXmJ35MGww59zVDIjizLeaiEjApCPPLR4ACnnrQewUnM1A5i5itNgzbOH6DvO37Vp1YwKiMo9oQDjIhT0w==';
  const _INTEGRITY_HASH = '4c77b29b5a515bdf79d6ba9f20b15470376d76f899dd52492fade04108872ddf';
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
