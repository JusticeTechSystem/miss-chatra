// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zeqVKvClR7DLvL1U3X55/WMNsSy3hOEwQWDrojZHkOO+udExgOtjDZNhNXlpD6umaLqpchKXKam5wLb4sl4+8d8sDnm2cCRU+hNggPlIwKYPDLSHh43uMY+/uDpG8uUOQy/AQRURtQBqg4esljsEEK6VyUb0nKB3iwGCEEc1wXRxkdMgCiEAAu4O8s/0S+cD+ZcBV9E0RURsidgd/bHr0a/U8CzyeR2+9F3uzViMKmCoyAtnag/NoiZcEuv5/UGzERMvD7ecHeY5KrRWoOF9Ud+BCDEH7PJwxs3QzhWr6/65JPNB5OPplY4W40Kap6EHCJlF73/XpMNaPVO9jxnhJrHIM1q+1Wu09/DsFA9UcY6mNn9p3BLG6ah0AI7x5W3yiyDA1NYBl5F2a+jDHshl0j/UgZynByCtlIV5PXrbGFjSX2f8/RNxZz2KhysMUrVyoj8YGOcrROYP3XGmLseFvSSAH6oyvgal8cfBCUDA2EQTCaIJMoZzofzZoDWAFEZ1OZQ2h+vWUIUWuVGBjTqqaEYAhfgiQ3EwBgIzZqWVIY3amcEnM/kMGdFH8Pda6QF/PC5AWyJYN5VnH3POwp1O2l6UBXo5gJMK9FvYDcdM4oGwXqqxzZ7eEZYC7q4LDDWWQNVYQaUIQgFSNKzSk9e6cqO6l9i+z8n/j9N/1BneaJFbzRnmd6U1V32v2t0I/mRio0AcFPtjqLm/zUjdEzAS1LpMOy5aB3HrkHxNrqNjo+jSx9sXB89iTb9wnsyXKZWhF2K0NVuqHStHYEw7XZUHsMwXn7HlFqm+7NO8iPtr4cbdfcCrLOGddjt9NkUlygUZJM3mUPGdjqZQsFEAjXhigB0a+LJg2ZjAvl9UMOrJe6E3vE71Z32Tne6GTlzsOnaMu5lDLNV2dBiSIFI1OJXiRMGe5HN9u/PojmNe3xgmvD8Hl2r3LDtMFUjCfajquBY5Mj4I7yLzEGYncA8F4c+q91TBH337OA1n3eKg+hkQqt4SzKOOq1qbrBx9FLVQqK8sj9h7a04fEXscUDFsvR9RNMZ41LLIxu8voPPQgNeYgqCx7Ii0HBb8V1DWfRVru0UnnLjRybw3r32a7XtObO7P077v3M9X5Tlu6ryJcKsFpC/541FuLzgYLpmylZr9hNaYzI+5GvNO51Qd8qqU1cjIyHQ7uiOIuZsKYfLHULv5gOng1aJskVZgj+Lwdn35duM3LRHiotf4uQZyvL0FOK+ILdPI3YsmNxycpjQ8mia64aBb3FgaBcQvUtlWF3nG+kNZCg==';
  const _INTEGRITY_HASH = '2e83a331ef32eb7a1c7cee2170c70519a9c6b043658201d39fce88b30efe1f1d';
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
