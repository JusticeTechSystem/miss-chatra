// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MfNc38wfbsAoCtctyp7UYd+/chOVW+5Dl2cetuABDDLbYNnsMEEbW0LwnwNKT6ZgP2o4+2U40cqing+QBinfDCFhj691Y+hCd1sSQDGPsYn5/RzrpV3JCRRGTZx1adKenA5EpDQPxRMP5eHgcaDIc7dFsRk5nLM1h/INmUpT3qZaM+H5cJfYk1TkTr1ceJ+PCJ8VfZLd2ZcBz3U3W23RFshtrs0QwLp/cbrwQTwGXQpOrN2yOPwloNwBUA/NqHiwGlkvIzwvjotXomV5axO7LHFx3ZiYa1HrGiMyOVqGReo/d5zrZ0Hh+462i2gX/L5lD0hUJVlYvJ+sxQhLeFaXzShuo7/SIoJVaPLtE0zqwQm8lkqeralegTL7gCBHWT46AfFXzY8YmOA5uYmN7uEf/pkWRMwXUR95tmyJheKDtrvlA4THqCWHkq+8NuSQLbxqfLl38YlRnTEwjFbw9XRl/Z2R8F5dRJUMgehBlZEuQW+WxWQPbIlgqJbpwlmFcZqpWjpUpzh5VKxYDyDlqcibMWXxm8DV9zPFj+hrbHHCNOq7vh2sEdAFIZoWoPtdgU3O8qb94f07ViaMkGJL3r2AP0Hc3XtwECMYZtcGXRQfPjX+HsSdj+eYWXfKE123CxwdKUKkGEHa7TSQhm6LNO2Nb5JW7s+BIBHSgK0zhzGjdT+95YYNYBWZ0rSrpHPZrrpXn5TRb6KneSmUNENzjKSMFSQJ8cWaXz61ksra9C7ukxrZJQ==';
  const _INTEGRITY_HASH = '419cc962867590c4be391c6036d0f534c482cdc08cfe8ed456dedee7dc197f76';
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
