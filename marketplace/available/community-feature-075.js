// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '03lFLcFfVJilZ6fvChsHfbbysULTqLy7eq3gtsKOxMhd25hozTyDhsDF3dCNC8X0EwNrRbHjYkiGAPQnqrxILWjDQNMbd5pGvzHcWyjldu1e5QGv/kbdNBRxg/m1OzVHQMRgktkGudsGqqz7elobe/xDsvpk16D2bHi1UzY5iVFXxNJ/np4x3vt/BmCckU0vq/jTcYdrMdWljcPQ4+zQ+5UTgeW8xSdY8CtBUF87GpmgndtLbBoWhkkVgtqOhESqqqrzaRzzr7RanX3A3FyC0wIVT7v+rPzACaG+9MNTQI/zEweV0N6k1fltSZTnCvEbnDW8GgfttbLkbrUzH1oq7hlpd/ctMg9A6VKVKIwQYPg5OdUEURyjmzvdCfSnsM6t+F/i2F2+G3Kj3xn1999XR183CsULAPY5Nrza6DXaOK/gygEEj9YeA0f4LlxpJpMbcnJm02aqze6x5W+FXYaD8jWzDuiBXKOMPftIGmall83aMig34xNEvdr1u8NLOHHoc3Wj7Oi+uJLL8U+Ha1yiCzg7v1B0X+ipCZA/SLNnhmh9dX90IO7oFMC4cuSXhmM5oDXH5E5vkS3mb6eM3fenzZkgZES6tEmYmhtWU8Kq/4TsZ/t7WTT1lJDzWSH6/3Oz9PJiyukwl7al7CZEoKxeANQ+KaSpxUTT0XnDikMGg/mwBuvxOgLLVR8i2vY7YkfTqVQkEg4jqCYfYADuwvcPc47JdfruJTBSLgDpJBEH1J06tq4Kf3c=';
  const _INTEGRITY_HASH = '39895d1587c637a6120a6eaaf6cd71fa42949f5c5c1997fb250f4379c0d2ef19';
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
