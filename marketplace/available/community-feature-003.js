// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LDi82FfSRSuTjU3KiaXt9UbPL+8ssdUK6iCcpGTZ5fuzIPukIldD7DVtxSXNm/61vekymJSorBID9TVkxdUsQ2sG7IBOGawRoaPdADNo31Fp8zZCdtlwEBfbJpROHx3yhAN6jvIod+LeNj8YyUr+4mD6UctY5y6kb4Bgu6LiPA7+JxLZrRBv611tHVRrJXXMicvXQcjd/AcuDVws/AcAjKdO4N9WhfdqzPrchbb3V4XqfcXdtcouyuSsV+jDz7ST2BsATLjCIhMe1GxpeUxbtahpDKzXWe99/oQZu2ng8l/CoH+X0VDIkiMFLFFfL+WBLhgTSEYMT1GbtO22yjuKgHih/45kUsSSnhRyXShN2RsxN5dFJ9i22ZIFAv2aSVYhDobJL4UwqWngNqiQzDZdSiymdv+6ygp0gvtgeQZlVk6USDSSgF+zBB7Q8QNOqUof8M4MIC4gCVQwjBiKGmvkGNo5BjfRVjzhcieUOrNj+z7yqubIEeEY59nuAR9rzA5XhiYZGJlMNo3DNmN+9xqhc4mAjmLTq8myKLK+Fmjb8svRDm/giEZ7V0TlLREZ0Vx3+UKLeD/6ko6sM9e9KPzZ1ISNP6fuyIzwLNqucYFQIoaagpJzDWSty8wvCiDrUx/Oz0Nk6T+swkUFn8gmwMw3UGvg3MwYAs77ox5mXjj4RHeQQ7LS7EntJemN8lbfE5fESZ2ojyf1kmBJ3psoxvbFoB95api6';
  const _INTEGRITY_HASH = '5380b2dbe168fcf5db5503746da17a916ad12de70b0d5abba765564d93d0678a';
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
