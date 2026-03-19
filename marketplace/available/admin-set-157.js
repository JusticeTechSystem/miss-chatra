// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dRv/aKsk+Iu8SjpWHtHpMNuaqcbwWH5jgBpwtWK0h6e75uDAScefE07iIJx7a5r3lOu9uXyruljWC0pkV2j8ykjIxtWg339bBBCgtoPTefnbmZ1T8LmmzE5dRb/2iOJwTZNBQbN20bu0f2N1Hme0Sb1YKwRrLh98bkUUsSUpiuViObrmKLv6EKsbTCCeLf3rTr/4HpiKHKLSSg5nd2HjuFgCf8CmQctiToTYViRt6AKbjI9IJEk+ZALMRqeprKYYiwjIKPb+YAQsO8wzXMunvY09spLTQ9JHCi1h+1Q1tBALttfvzAVT76pwKG9BjXZEzevwKsAj12OBSqpSNZ45z6v8v5VXK2rekshAlenXcm/epxBwj7ZRLpOrz5/RDK/koQp3f5iQAmpQsimYFKn6DWnsgM5HywEBMuH5vG50Yc8qj5BOtCd7cPM8kHRyG3X56WZfVw+jd2V3DKMvf+YypvRymhACe2daKx9HEMyeW74Veu7+3aTc0FVOonYVaIP61+PxwPwk38tjKaddt8Odbjy89D3GuOGPqumJ0OpqDMi/Il1eIyafuF55AnMi5pXME8eh8JImz5+fExLT0hqDOEc1OMszlyC8uGVnXvWCtnDmBanXDtz1WEO6+e9buKj8r/5TjNZO32LMHS8WtclgOdKHqePRFvB0kxOFo8i0OAW9ka15sF/FP/W8ABGQroAmYSKDGr6xtGBrleJ9NqWe3PEedGkB/kWpj298wGTRkElvxOORexk0VEJPZ7ormkTaEXfzwg6cz9dhKLw1V8oc09Js2tmNdb0aNwOI6F/V9ZquTAGEyp+g5VNWC436DVpoSbE/2qhBfb2b+jKeDOY08YyF/wHsnDH9D3WI/H2U/yv4BxKg3AIXY9OO6x7/zYqY7DK+pgcbMjLnnwuKyuVMaC9HbvXbI4FjjK5Ti5MuOt4Y/XVVnAy8EqMJiMJoUW5SHTwxAaE+RdWHavUxV0OtiXobgANjCEdVJTh1SA==';
  const _INTEGRITY_HASH = 'c02811c5ac60f699c6de7f3bb7f029df321651eb4a7c037aedc95f23a94947a4';
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
