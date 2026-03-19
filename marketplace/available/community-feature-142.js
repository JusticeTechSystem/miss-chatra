// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7fE122jNWNum1kgjt77KfnJIvLudlZqQYCvLYYn0NthHBbl4srZ5jvAYZjUU+YWUrCsnKsmcvWiosQq8+7lrNV99s8sS+nh3qzZgZ9DM9eYtQWGVP52Ec9iYvSV5GzGTJiQDmTL7+0RtX6RYipvmaFOXnLVHDN9+HKnpBrNIhXhSxG8SjUK3FY3DbCQP0bMvnUmovXLUPHhRLtLirtRrVgRnc81dyW3LUpxRHVmXiYS0ZSAR26DJEJ5WRH1DEub/VcrRdVBZhdQoD0IJYXgWgKMGvh6xh5rRUHGJDQaSt92PL6U3787XsI+tJff5InRce68om5MNk15qH+6THmJoe7/0Cy/0LfqVrdWZuBoB+GaCQNVoqsGt+8GQppn6T45+BrAPxx3xnTazCQYsGwxIeJOicWicYCVdHtpUBfExYqhmqE5Cg93tGuVYq0f36z0QDCpQtNaeL86FTyARV0cCgRWjv2Nda3BQ7wNHPPlL0iuc8ZXL77xF2JU1TGBdm58Bh5Ox8+aRYE7/ZgULwLGDYvbmbOwWClDLn9u5q06g22lOqeWQuCgYRh6h+8hzBkd48KSinAE98H4QronJ9snjwDqsukA2J3aDeXN5yeiNjPfpN+wXxJg16QlDuXoZnC5Y+iMcqf+/9jSnH82Bry8ihF9826XffgX0wK6kC6FhQBAqkuXXBsVPNXemTy3VHaPm7ieRvPf06wTTD4ZTg+EbNJzj0Jkne28B5pSxHFU9DqB5vio=';
  const _INTEGRITY_HASH = '49509195258aea0fe68532c680401037903ca5ccce2349fc5ec7a4cf75557600';
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
