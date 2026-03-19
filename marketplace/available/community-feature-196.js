// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vMMBhCPKexYxQDaTb4TPRTkh1JQPFssrocYzJ+1SU0AWfy2ujbleGmL8rVvBTslFvPJxsLhnAxJcPHnS50bd1IZ+gLQ8ToOlhBVfi3NP6bQxp6Dh1HemU69o7CfTSdbFQP8nPA0rYvqXlU8dDMrB19jFuN5D7RMWzrlfnH1hXTneVObb9xv7Q+xSAlE/Lr7MNH0fe41zBqx93tW08JzikeKjTEwnyaIzOaxNLl+YAsUtnxeqPY26muXT+INbzUZqy8xcHEV7JJOy1Mh6gfpL2rVMKg8qwBE7TsqobDJOnFj08mSx/flXg+P0bTA02YERxSTqqA73m+FUFxv3qbMqmgOIHfL5eB4JfblsMu7lwIvFDdcnqTJDu2eMQ05cNMFkkr/fs09AtiYynaAHLpjIXQM3DxpOIrkv9bJS6BtJEmo+ydb+huQ3UepvsuePsPC9oepRjpCyYtbgn66/yK39vRdtQ1QA2rK7rDIK3VhBMtL4elkcvxa7dWzwbcy6VzD90t2I6dEOB1AeYhA4EF09IKJGNA+sDMKLRCHytFLi7bfQc96s8m+HRn+b5Jf5EMLFkQ/9iO/VPlLzRqvi3XrStkGQcNL+1E05t07tA5lkh9Ip7ohDD4Ae7ri/qXt97jhCpUjwFhk4xa8aLkSQJEGZaTYmWjitX6m+rN/4E8pb3uYGRUrRQ+k5zH6ENucOR628bE4EHQztDS8OHP71hhFRehNwRD1wadHt';
  const _INTEGRITY_HASH = 'd008f681d3e3b74d0adb833a504c33ab48ee9e88be5488f7962ccf858a8615d7';
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
