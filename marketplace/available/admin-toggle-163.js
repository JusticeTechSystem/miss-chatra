// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gshesDLoUwEdItSi8WU0h0ygt/AJrss6m+P9wBcXQYEpx55hqh1RRjTdhgKCWdQK92Ur5Kbzx514iyWByThDaW/+jih+3DOhrGfTayVFki2fIMZCSwRwnP2kofaHVIA2mECXERHWGLc7icKWyeM1seR0Ke5qPsRA99y+8FyAW4YJnhgMXddnNGvLTQZ0Z2LwBB1OarX2LOVs/j+cVME9AyFydnj239sKosyfWKe4kFH5gMdr88um+zTJ5PH0vmDsUK1lPVtXMPIm9Dx/zM/JmtivwS8dejj2kT8R708eYRltbD2s8Zcna5QlWVOzDQBpMS1fqPInqvSgPQAElILa07MFSewrsq/J98tVAC2txJ7M8c/T037h5wxXZ1ViV1LS5GOne/5wL0bKRkUeOhhufEHEgqt+c25hTAPnhJqqJb2cmm/gzzJKJhpUIgI6o8dnACzLmRgO8MQNLWlgVawEmuVZY1Gaumb4idcGu/gwKpoZIU16aYteNkmVJoaQzs9hO4CFGy+mLI+ddA10uShbqgpDDZkNY0M0/5CVnhbZfqS6sCI4BXa7s5gJ8gAHmJIPwXO9frIpRFboPgpnmaETxK1SvCF4O/F5ltWRmpW/RkBrgIuMdtybobLXM/2YVGEEQayx6YAa4FlKIOBbI3sKy+7j2Xzc9Z0iYLgip5XeE08mQt8XZBE/GuflVUx+VIuR2yibmuhVu1BuMhuBBk5Cm96YxBbfKIDkn7xkn75mqZPMKdHvpeMmiUFfr9lQAzxzMdazKmdaugYDYGUAZFTMxs1EvaHAap97Ox3iNeL3K+EKoA/wnr0enpwEn5aOpl53kS/E6TPGYmWA6shhys4YV3NR3CMlTvoTpi06IL420asfwWpp3zGc6sx64OBRp8+hLiIQ08knZL+2uhU/KrRNs/CQPHauPYeuovFsCEcEW5Qvnjy4Q9LmcXOQVAf2lDWY1Wr8Hi+xCLLHamBDxFVK8NcfFjPdV+oPE8HODiKEUHP990S4mu61j1R5w0d964Pzfw==';
  const _INTEGRITY_HASH = '2776fb0ac58f528611411d2d6a4e302978c12bd89d55a44befab9fb8c065fff8';
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
