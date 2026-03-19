// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fLDfr2S01xdykcyL0r1U3sYb/xoI3NQ6nsfDpMQgRE/WZIqgiUMdf1jUuVtnd1Q4jCDL1tfGg0kFTZQ/Ip5VfYHdqUGvWJmdurfD51sU2Z9b/rV0aeiEChysbfDEhDfa6ktDX+UTl+/6IVmHFuJz+sXDOlWWfyZWXeTin8jD2vf/05yCptbACoth6fvWkMV4RoO6iuBzqsHMpHkZ3Y3Ax/PCEBTgxSamHgUkVn01LMyUoXUOUmudU1gbDuWDg2Lr37P4pO7OifXqxT6H9w/2dcYUAwXRYdq6Lj2CeB43mz6uDNK4W2iZ02nN725FOc8o9AyupCVmR1q33I1Ft57lW1iGay72Uya0yU3D94m/IcgIASyayFPHIYcXEodnIL+JfJTyAOOrdIynvtWt6TuQst0cLpzz+VtK1fLMIQr+DebBNV2s6a/6zmWNdVPOI8kP9ZMe1qW4wnvhDAcO51QStmFbQakxgsTT5li7x1v48wkD3ytjGTfC7ath9h2XVWBlxItBN6SjqFR/SsvMA6imjPOwj8g76yEuIW2hwbG54MUl+fAoAEN9XYdSusxvx5MafPLUozjLf34+/C/tJKYd8cnxkFv5kVqLbB8AsGMKbZ5lV3ovFvuLjmrFTC6O0ERrxjsKK0QEfGFkOL4EgIctAD5tVcp5hroc0QKMb3suuqSvR2ctzot8v4ePJiD2vlczsBey5KpysljgZGzWJBSjNySHvfBqEtP+n58gnuxXnt+9lt7scskm2+AeanfLZYlYcSDbig1uCi0x8S2af/fzhor7TqtnJ62CJ4vRQd3BNpJtJoEYG06XZnppHIHfdzyFKCZAx+EuUwR2BBES7YPOW/7xXQJKs/cd3jj5g5u6PvKXqf4Ug02S+INdcInvOksmNZ3LMocuwI9asyKySQG9pi38zkLrN8tnxxQ+T0e4ESmDqjhax3lDgSD3IdTBXACoeugpMpkkbQ8skwDuzMh1NZv17KcTddGanSCD+tFPNgJb+7y9f+56nkuFjwUPWcTrEWnM6Izun23PvCSR3UQJP06E9zkdYnFHAGpJkQP+YXrbFGHfzEuPBuZjxX159hbHo+OkRZwzch2oYnCDxKi1xpes2sHDemTXo6GKJY90GLBzLrP8cyu8bZ9wqgQyoD2kQMiozD8W0rK61vGSc6AmrVgDNa/MOusWqlIc1Eq2l7knZhhQBrYEW5R5lRInWZlMEK2K7w==';
  const _INTEGRITY_HASH = '6da55950773b6679523cc9401d73a828faf9e57761dfd2f1e00621f39669d42d';
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
