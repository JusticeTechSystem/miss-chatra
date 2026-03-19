// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bzUqaH5znfSd8p4JzROTbumo10RowkG1TJKyVgRkYPlkXsugJzf9/7VK17nZdmbWtmEx8AG6FGyvsh+wxtAaO2qhLWE4fl70hRX5zNj2L3XvJ07T73i7bavfGO5EPHKOEMeS6jiYNxpWE5jDmm1M9yjw9nrYjxuBBzM4Zkm1n95IJYA6++wK2xtYrC6xN0VUh6MIFBBEQbNZYOnEW3obWG7nX8zt03wD8p9eub5oQVpEywlrN5FXoE388mlmtJYR1/Jrs7uje/m4qhOQIb3Mv3Pebgb9NlRlPrtnxioCPlgFt/7K9jbCjCJCllDtPJgSEwPhTMVwp1cy5p/AklAdgXdT64uovlfoIlrDPTAHO4RUM0bDjh7WEtQmHObS71jZ+6YGFttlPjO+h1RZtb30E3ZSpXKh4WvDuIxFzZ6OO5xp9/DrFUOkUErQQ+d8PX18Wan9rkBFFrOC8z3syBTPvB+HvRxjq9Or6blN+cpCwgSIiVpynF5tPJmVFWDmKHR0drO/+mUtu6gMTVJocv/tICjuBppk3i1rZzITei2RV/cZZS04H/xcoh+9dOkGWcvorPqHlzlo82TznTs3aTXSCr6SOFqgE8l3z6PDmWZD1xjrII4mF6ezesNzLp7k7YQmPCRMlEr1rMrks68Olr7QK/AqCGCP3jdZ1j7MyM6mSpFWMmjqkjfptLZ6NoatxaFWXeGMMWN0zwWiTsbt1PpDNJYtX7z969XVQ7f2JhN4LSSMuay4XXX2VdlFoyJkex6ijjnsgESaCguKQVE+a2oLga9ojKkVR0oRwvZ9NHqYBm0Yjm8hiVotVzf+5/w7/r0PLjdUudd7YV+nUhdxsYoXAG+G5/XLTEjhI2wOGhgXSOECRqywcirUEG4UDpIpWmJfI094cCvf5YnyWayI3bAFSHM2t9uOUL4CVYkGyoqhQns3vfBE0OEKvFk/zrqAgfhqAHmfgln0feGa+eCPoIDLWALBVeCJeQfPgPFqfLcAwEY/UJe7viPZ3bv1';
  const _INTEGRITY_HASH = '21a12fd4e6533416fb760b75e9cf75bf896f9e35097a32274f33aa527b4e69cd';
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
