// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'D15WJHZzaj6/eToiq444/7zcgtX1VtDDHG8tZS8SwUp/QMOLfbzsUKAfVyQaEX0eNupH+WuC7QizE4F3s9ps4tAtecFsVIq7LHZr7weatGZRslhWjLirqRR9cVq1tsOAszmLCpuQnZQRgM+r15xhCWY/nc83frttgushx3CP3ypoWHniFCjJF8mpBxrvJvglncbD4mwCJWKvb+b1i6i+8JpZklEfOlsMa3h2hsd69lNtXNmD8H1vfUbJikR8OP3jRntBTLReY6/bI5A2bcCLuYP/IA7+hoeZoUoc23keP4EaTYYbH6Hsisxi9RIES70r7elEuUosubC3br7wgx/vTLtutm0tk3ES+LreztpKJzbHGbSUTIyIXF8Uuc/P8hR/VLUQ6iflJgHVasYTZezCT2fT98UmtKZpTW2M99SrwK/n1T3i1ASvMjKd/WVk4otDjM9GIkdNjulUmnUSV+2Pzm28Jf+9gnS6o9JPQRZrGqcXy58EjtZFv8wq0texc0WrlltOl4g9zZOsqaqHZWPXMqWfhGCxwtgzWPWYCzaCT5BCTQ3W/qmr53oDmBZzZQf2uTFz23iGftBavMshL2TJAXOjxJXmuHKxNUBvwyKF+JaldBm+W/154tlAw0bCqJT+ej/IMTzRbPCebyvc7+4KLLhc2V5nIiB7JpqJvSuM3hvLe70Tdk205u1YwEI9dPtU1R99Kh9caIxVqiuIXXoWvXcjP+JgmA3dBQjP0CBxqCpa4diAG2+j2usQOba2wLG/NqC6664uw43LCmDBIHRzcM5E0iA6X+8LQjFKS8KfJhB8KFjk/CFF7yKzntIp+FWpF58XWP25i52gg4n+WnSERFZUfBUrPwnWiUIpiGm5PsbXmMTbaaADovra316xj5lw6UsjCh26oixk5QqOd3JDzrpHgeoTqzA1lCqMzfxRJz6dxgV5Bi1dnR1SI9GY4B7LdL7cN1LjKlk7RCcleoD25veh3uhuANIxyxA4C9SEWODgE2cX5s3DD/0k';
  const _INTEGRITY_HASH = '66a3f758ea0beaa27df39e7154e483e6c5c42b3d727b1221aab2c42f2b37823a';
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
