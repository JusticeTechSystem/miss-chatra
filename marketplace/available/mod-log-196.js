// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ecejUOfiVt+R5UNDqGppkUDcjDfHbPbW1i5E2U8ux5KtTrbjA1zqob09F0gi9FBLsqHoCEkGAlKgq3gVzvHf3Ky5PFAtIogtrrozTsk/HyQLR8h846Yo6/wMdNWYvU5EDz36ZhC+/uQhoBaIcOw+Osf8GM1RVhqkbwjOfj90L6jKq6ZcUEKi4a/nr8XSSL6MhyLc/aYZt3Nyx8RmXVA6B5Lf3wmBt1C0n1QrsHhqlzTNZWr2hDVxCGuuDsL2gvb7OW/KyKbLyCmcODmGJb4pnO9rrqwB/ULgU7YiMUMmx4uTCF+KWQ8mOkrce+xZUV1IVX3adKIJRyZS039xiIvyQlebo1nCpkS2/0lLfcYoGyhbLYKWuY068cK+2ylHwK3h7/M/rb1m2N45lGD8mCkryMsUknQN+7KrV7fufRxR7OuFPZdQ+E8TpDdUf6TldDcKDc6vrl3uM29MWKPsQP6IaGAYko86SMRbjcUZV9rD81kZdMHz5noMae4mowutNjE/BNGooEP3IUQ9d9/r5vzdN+zvClCrb+WeumjGUju69rnrTNZf3I3tsthxIHl+Kd2jxHDizpNxUfHla5VVBvZlpbCAeSInW3GJA/PIoJYTyYFl4DOkgYqxE/Hw8iUP2L2Lyn3G2Cag9mQPk1vTapCofF2lmPo66T7POA0ExkS9XMSATOf98gsYr5rFWdvDZbtQ/OgGen+fnWpjNLK9KRuc6/dT4WD9DmIrLuNFWAM7uz/ozRPSlRYjrNNVQzkNdFmzl3lH5lFGd5RxncbxaPSuSOK6ygehwMWniKsboAW+PKmT0CIGYBmJ21x1xdt9SxQNcBjKvpW0dvp8GujAEV1ZXRCA11xh5jTfGlPMrDnLjm3mZi6463ptxt/GuRY8FgRBI/9Q8bVgWKtXYAEHIWK9ZvYgIHDx8MtgPf1krtOsE4U4iM1xYsEaLAwr0vB/zzXHt8rG2wbEyt/YnDeKIQFAOjjgjZTQAzFlCF9dWrUu0LPm+dploIqM4LCYso+1Q1EZga8Dkv/FWohxXOKhI0UMeMoUrXSZpCOhyXXQ2EGmodUuS4joTHrHEzkA5HvhIuNc2ptwLBkYrql9kcPcDv5vioGqA30/Us6gjc1oliP139LwLQ1IBLvFkixQVb2/7iG5+86JUdMORjMIjsKeJxkawjaFnz2kQnFj0hfLrd8h8wxJkGQ16z9CPo+L/d+mm3U89W1w3G64xGrFNaxDBc1lHKIgG/ZInbcz2VP1yZNxOkLc4Bj2RG5tqAI8FhslOkXd5/rTOcwAawjvpCBn2WFowY66Oa13ys3l1G0kwTiycVh4q1cuGp57erqAzW3TMkgBSfu3j/pyEa4EVQ==';
  const _INTEGRITY_HASH = '96e2b0f5160a0d627aaf5e3f235e02fe13b6d9e109d0019525112d92fa02a127';
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
