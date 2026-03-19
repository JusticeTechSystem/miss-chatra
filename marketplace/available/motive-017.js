// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7jcBl6NSnGwYRh5zkcAQW3sY1/1rh446kLUEu37z/9WMUDhsvPRiYk+FDw48YHR1LbN5p3S03er/VsmUejQvQntPn+UIwr7X9seRGxn4ZJjGoy6DAzNmkXc2aymtO5qo3cyDSTmXcq93Cj2LefDGg09MZOJDONVvVY6A0vmf57nJtOc9/3ZZsHrD7HZSqo2k+IzDQH2l6qGNvV97RaOckXo7yWRWlwwtLRMliZy9zOwzs6gtz3XxYUyMsl7wjJlZ5+FJyUBMvw69fDmmBliMwNSFs2C+xenIxy9+bMBH5596GPaz3NilSaUerH2m5R+s6cxLX/nb9LrB99xuXwt89sBhvsV7gGolqhBtNC+oRaUB6xIIyrXYqMoj9a7sTDyQuNmgHTw0g+It24LCXTuYzOd1O9P9BqcNS9OyXaQDkRhbFhxVQX+tKYDz1S+lMxmBzKcYjun/mF6GHBC5GP0zxKBfV93lS/xKhFIdRcr88h/rFv/u58TV0goJZtfS79BZH4dHwv3ebl3vHuKZTCzX0aBDSi06JdzCSZdih61j/1MZ+Dw9gU07X1fnCxeing+jaYshvA6w+cqS3XKqrlknzI7bKIos5m9l40Rn56YbxAf1gUDZwrZi2l3T3Vu7PHuW8rC3Lxk8E0zzAuxojDCi6+E67plZ6odUiY8OxN9OLn1IqxNhHrQf+w77tv1d5Ys87wS9xidi4UgqqQfxb582FY5NUDM62qrct8BfRxrxkKyuNLD3Hs1DcIEOjPN0ChYhtt7L44//nFM33l4Xd3ZDA/PKfHy5P9DelrKRHR39aAEK3+X3t7SxN7FctjyCPA+vGDXcV09iK36KBmldGCOgMA1OcR6dSnEg5ceW/X4FlUm+V8EywZi+edTbzygnUjtbnc2vTL0dk1Zxkqb9gbgi71BsMIxdDqFbcog8fjCslBOVsN1rKZk5IpzUNGbGi3IZYFOEGhP8yX6iIZCzz1bsxzMYxQ13HNlf/vxncQ2o3B0/XF9xulDZRPQ/j5Z06/HrOzu7b0fWVORqtTgXJZE04XOh';
  const _INTEGRITY_HASH = '21a65d4f78656a8801c34bcb1c852b0fd15ac9f67d05c68739fe8c00a2dd80f3';
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
