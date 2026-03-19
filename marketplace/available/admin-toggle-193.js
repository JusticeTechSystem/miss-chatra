// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cs33pY8HzPlFDuOFK4xf3+dB1Uyml6XvpPvCIwGqZlECn2Fvec27mgxvPXKMKCcFEcY6WEHXxoSkpTjIow7pZUE4G3SgbXg/sbe74fycC0QPItDHfveSimvt3iNrm+XcOig2pSsxgUVVUd1lS+nMqwxlSn4KKHObd08H63xLGKyRqUsb3O1zbrRXuZR9SzHkQ76GTfDo8QfWR7auOmhN8kDBkBv/h3P2eDT/gL3QPv9YoZ7snLDSfqGO5J/vJJTwI5NkOis8IWgP0yhX1wlzV4I+CkmQFrnnWVFJy5/u54+j2D2nPWhzmmxWeIF2GhzF4Wh7yebffEttyzmMMk+eexoGu8JsWM9amsVTPjSymN3M0TfeSr6uHl9Jfk5YuxSAKoL0FUOZ3KpO5lFHX+e4wF9gslN3hZUcrEgvYWxcPil/sqMSL42tn6K0H6cJPkBFLR/DtQRjGCS2fccNAKNPtwvdmLUUDz7HoGPz0aSwqbyS6Yys1nEPU2682Hp4tS0r6WgWYOJ5exy1Y27Q0EsWnKB1RnVav6pgSYjUVhaioQFj9OMZl35HT9oJv6e/Zs4dta8W7HnxfOC1c4A8y7zze3CIsKANHSmVcadjxgqdX16oRmzicTPpVdOFREZt4nbwCxL1b/ZW85tIODBN4OHOJUa2S9be932Ap77fOo5/4dwecBp+kQoTVneITDZo71Vtu+EMX7W2E2cVw86YiGloZ+DwUPnDEGsOL4PMlWHkOrmDm2h4CE8aqoBbQR+6mehjNgyzdjAOX3QJC/vHa3qVrCCYypxmOM3DmhI41BxePs+4HP1igqFzYD2AlE5hxYQdDrXK4VwOWZDw4A9TXLDjzaMIpebQp8OKOv+nfE4FSe9srGQyC89SbVnuSu0bm/DMogn2kpqv98xzvGD8Zh2/nHF90lzRlCJG4bUrSBNABWXSrbAgDF2E45XMciYVs8ixKYQpqTQjHeAuAYLScetjDYg4/KImb80rLBs7S/Ml14xPfm/eXnWAASGCLemNHD6BnA==';
  const _INTEGRITY_HASH = '90d187a855fe403c120cac727d436cc9d67eedf2cda72039ae4257e479c7bedb';
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
