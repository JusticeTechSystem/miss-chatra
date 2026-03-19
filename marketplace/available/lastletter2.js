// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:03:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GNd/owwH/2D9Gy4M0WSSLdQsp76f3EO1qIxqoB+yzemLcipJIjdwGHgOXEwB2xZ/WLryEQAijhR9LHL5zxqxwnR/Vx9WJVdKXdy9gaBRI5kGzHW1cs2NrzUlyNVPbyHcTI8HyqXISMlYUacQ5pn2D68MUOppwy01JvBLPpSntWaRJve+tX2Q4BP/f+wSksCOvoCKGCmqN8x8u9UNfyX5keXWwAPwOX0LBpj++m17BaTAWgC/qHiK5wwbQUTb9+QiEOUyfSVBKMznau7T5X6pZQBDR/p7cygw1vivqdwloekoGWDiW4CSEKcHE5a91YtZYTQSFPwGYpraozaDlpBO9C5f9aVgQyGJm5ZrNWDRx+l/1xEIRDBDZwYXS4Vbk3rpj20/oCK/5p+QHAU258fecsPycKmLtStZLyCeo57l7N80y5uXh+wfouAD+fCBqOFvQBoZTkVMGy6mTiMldPQkInLV8gNtUZK6AlcPUX+M0HlV2FvF5MZ6i1M1l4Cl551J8z+f01e5D6MZqOrhM9l+EaIpVvh0K0M1JDx0B8Su4HGxGs+irwhJViwSVHNx1uSQfEQRrkEEil/C/1eZUCD4nbxMg6+wjAdzPT27X/FRonBUNUqM8DWX/NF+bg/lL2r2mM9JmUoER1o0oOB2a76pjsUDGfm0K0nU/d2rt/l3eTSCzsEGdwQMfgCXENsFrF1p3Mm/pC/yv3Hq+OHsAQjLeuYlVbUtl3TNnMPMsu5CgwGr3/bXl+XygDWKzkZbSQa85Miy+TaSlv7xDeT1gNXxsVV10KUBq+OCOjE2OvBF5GUJcdyZopHYXVy+FGxS0At+kGmzn9MjJEwAZtzutNNAOZMesvX1O5Ns9LdElLjFlEmg3+H/kFZlYglTMtGRXRX+tIiBfDq/GhPAsHdHLK41BUbfwl+BAI4lamyc3Oj18j/dIYTMgfaTnWLniQWUp0d8HvZ0/PwoAaGvozChtzddWdWg8WbmXu0cHquHWrQZBmXtBccnL/Xo8hkXaQroHYx2oTwvwRGQfBBJkl+u7mtC1AQ/kILGXWxSnKGBvV9EmqFvUgsdBi+MaB3O/Hjtxtq22sRL4QsRSmdXEeiRP08OcxlkP5WrMbQSO8Bwwr6G79V6vNV2TgO+VliDz2IT4aqOxcoPB3mF2Kz0Yn070U7E24COrlq2xLpLD5XfC8xh0Cf0BH//HrkB4Su+0NesnpkGyYJM';
  const _INTEGRITY_HASH = '221af07102c326b3767b698d2c417b83576f6dddcfe055dca958b47d9fc2259e';
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
