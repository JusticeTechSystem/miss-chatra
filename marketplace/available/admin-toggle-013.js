// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'A9q5Dv6dEf7LV/xnJwMNABS+6DK6a6as0+o1hXkqgIbN221PKG0tLlF+rAUore/4ddwpQnyV2rGWByOvpeIgwYCAtX3Slo02klhYHOwbW5oJYr8o+Q5fQ64G5HOIKPDTo67NrqlX50mBNPOpKw7Cr12gQNn7FgaBRtIEknk65nup8PnIGm20LOl50XpFWVa1TSJO+MWN4bIDGfvJVDV7YUmXXFg3p0PZIDh2rGzSkd4lXi94/gReoTu5HDxIzkjFyUtxBBSskhIJsJXIr8I6OTMbeOOF+EUpqFkh8jZKgqmsyd0TMtbE0cBcpVd3ooQv+ACZYY8uQmFD6ma9eNGHQhd4uxBMyFUQYCqlCBiHxsEYys4hw5ucQCohTn9YYklUGxzPJcmxO9HZz6AO/qumhwq3lKEAsng1e5md5zlkwI2HNl2SlRXYEXfOArDxi5et8YGKkNz3qyIP8lnBFoAu9IWi8X3e7pk0h83HcH5E7mik35CVCBeBV9JKakxFz8tUSjjGmjLfEXp5xCp4zqBnTimhqBqNHHTQuGEfMw7lHH8epoYGR9F0pXPerEaEYY8r8uuWKRLUKoxTnVkiyQVAbT6BFJr2+ZARinwzw5yOlIXTF9397RE+yQh+ANxfWIXBRWRFaSWeuNNPuzk3/yDKjt4VITI2d9o2oUgtUklB8cWFrtv0AiyIkFXn4ETB6djiFCuiyNN53T97VnMLRUxrCOzxMXTkHsEKx68lY2eZWsPv2To/zq+Pi0pCZ3aVEHuD6fVWQLsj7tN7fbl6bUdQa0CmFNhmWRCGloHASU13sC1cA/S6F5Dev+KifF8cPqjCRzFwRIlNQgmnxyUKUDUkJPggIA2qMu8bTJDXLcgBrYO+ymsgLLvRvVcJHHlIDqLv/18QcFeh9LzPAQaPrRXfXM6Y5mTJReeNAB9BFxqt+cnqJN/YQHCX1pCmOcbnGiZn8GfNzKlaecgx2yvTU863IYijlJ4Z12zrmVPvHsRwIhtS2sLUm65/fUQ7VXJq';
  const _INTEGRITY_HASH = '722a6f39e54021809e6c118de1d4f042de861b213091f70dce6cbc2739bf029b';
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
