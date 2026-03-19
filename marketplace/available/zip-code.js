// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LLW72PKwSOnZRvfQs81p++I+j06HfsZDNNFRViqEGMxCIamFK2WvlN2CXIZD+KDRnU2pOF7kVCC05sY5zgciIqHmqiDn64LZilSHKrorK7Ev9CEbwzl3LeIFCwJp+xKnT4KkLimmpjHTp/QMb6Q1qUEnVadBaHSK3oUCzuUmyxDyF50VsSroSpRZ7tJgRkl/VxKPTSAh6VQbMscW96qssWCJIH/fvn1bhx3uktfQ3L/XJbuUdKHiC5+TE8yQTytSFGn+4cqRy4AQCBaImO/B2QdB5nFI6oDsqUvPRWrJz4Qi4zI4hRF6D58kHCEoahK6rHlkcUaMz7cVfAtolfyoAiNKiBm0MzIvBMYUIpMbVbXNFqvPdzgGLBcobm5hXlx6h+3TaBR0WDcP/EmIIGTgTinuNQRlMmcrwqouzAirPrD4kZTLS9v8jVFSiA6ktoPzHVcDdSN99dyMWloxX/B8BMopdRPxeD4dUNjYNCximtQhlosXv3ar3JEiDZdPYjazIrTsdGK19ErpOMEAkojNj6qQpUBaL5/MpSSOGxSAd5CzaZh48gcPxjGV7zatzmcmC3lZnY53iO2jDlRrcT6x/GCBVjHigF4KsMRF8bDKR2Fr+GftjG9RVVWn1SjRU1JdOC+GEHTVtYhcjAyeF41aYZSAVKFEuBQ9zStvQk1vatVj99ONkdUTI1kebnUl81JHXtS3mgzEcP5Ob5/vVXF1O7vyybU8y+C9JP28wJ2M54Kf/RlZAeEirTolnCyKArs5gT1PtkLFQ8/8T4axlYBNxOE9zOuMkU0aQbdZ6FLMJ1NGMmV2RkiKuvsQ9QNDJHgH38/rosAwL9/Jq2+9BupuklGxuozg0uSmQrwgkvIvHPTDEsP8wGdFt3X2g8x2uo/zupDbS90+L03N8nLDwOPZJmr0f/rGwe1jhivt0O6cmrtMHNthCDKUxVDC42eHLsBhgb32YhKSoDtnSuUu9+OfGLrOKDLMqmbSBGk54z/Ts6sIgGs0AuxSIxbED2N7N/JsktXr1X8wTJzXYcMYEBx20Om9Hj/4/0k25SS12Wz9iMc9K/03xy3yWrYg+95trNCZe/HQD/iJ5HA0FYmGXs5OiNodM1a7SeE8i8Quo7ZoU/7h2xiRAkIIaJ3qKoGJUKqeX5cx/IwNLEbCMQpICdR9L9VUGXt/R3auEBI+aQ2qzvCQDLdGPlIRhNMZYMYOQp9JmFl2R6w7Iq7jH2zrhNMKZm8tM/2BxNEhrT3it9aXBXgw36XrfeUoWWkSVdpoirWPMFjAS/bds6nK/B9Rlup+sJjRHwIKvv1HkS4SMiTL9YM3x13893QVAw3y5hsGiuS8Odkk+pIxKmmdhO1nAf5zJljEzDpXzjk43yGyh3mP93m4GvhL6HCFxLWhhuRaMwBPm3qhoePgBeAyZCT9+b9t47I8stSGBs+/Y8QvBmo/maqvJQpHulkZxX3xQN3LKHDEk567hHwugv7OcFzn1cDLUd7zLrA/DOYC9PD4DEpU6ij01E9TfVxTG4nmgONidwptm+nX7k12kQirenGTu9V+m9C1mKHVm3UTr2alNFH3BhLRsoh2CHse07I+WGw/ZHJkJw/hSB1lt5UZag==';
  const _INTEGRITY_HASH = '1fcdfaaefdd544991bf5297f557dee838183bd55b4dae5176539f54fa5a896b4';
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
