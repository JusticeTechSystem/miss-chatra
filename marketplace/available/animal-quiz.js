// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '48VABd5VaNafhr5jjsPvy56GJfhbcIZp7iu2BwOPnYzV2zdhn3R9SJxe/WaAqw83cwydQR5tqetJu4oV3GEcfHEY28gd7cJtZ3AFmr6wbrD6xRnE+grrDmDYW7PGQk2J+XfzNY1MigFkSndRs1CHMjYt75Mv5XsMLeIox4/cm8DsT4lhDgDUPHnqDShhZ0xVBlRohWcylHLx6Qx6pDQQ9MKDa4r2Ukoy71DROLVgNfFX3qzt48/zm9Tp70grCzwwW2AryHwpVsW9aZORWfNNuGZ2obsgckciJkpvnXYyEe0dMmWKfFRXVhnTOLeMU5tp+3czbadGzNt7piaxK2ZJvsa70F6fllo+xYIluu2SBj+Mayng8Q5nBEdAoLj2QXm1L3DNx+8laot/Sa8PIWf17lgxB2UVN6joS4fm5eFPTCtbhFbkaYn0kiqmmASh3wvHRcKL4o8Vg/9tV1qaEM/SJwC6s83ogiKjpqkLQ3nixiJlELOelYqwzkuRX1drhDmN6Y59SJHIAMeAVjqCs7wEXM9jc0cNhHaTfXaq50OYdyE0XHavKasqcs0a4nc5eTQldENf35fdy45UhaPP/0u/FVmtsGTKpnFGikyE9mcJ0wiVc09W8wuX4oQ69Yqp4Qr+3uvjR1YC9p0uKE/+CcRoHUuJT+IsM2OeKn5jRJiGIbrWiUkh3gGaCBRwY/OAm7lTmmkRyScNpuE9hbzSO0fnZA+3UWdR3eNILaA13Gxe4zRn7fOoGzAzSuW/9XR0WvNAP6YK8LGYDy//bXdECxs9GHBS38ep8OmVqPhRNSxt2gc63qqq7amt+ToErrbPHo4FnzEGgkgyhOPHZBKyHWsunPxI34cQ8gWeRowSGPyBQPPLV8UFqPBplVMgRlX81cJ2EeDKM0I8ICu5IkcRZOuqY2RT1jcgA+yw/AXdh16Z6wsHUwF2dt7NxJmsNzaz+eKLnSx+hxu/Y3Zj3EdmyXQ/q+3W/ZrYG3GXFiCk7hXQIk7EXKea3DgExKtpZI5BQ8zXcgXJGtQEMEy7WLrKR0xQQ3KgKqC6xGH1/q1Loc84uRoUS4tv/6nwztEnyUSqAJl0hUVZuOLZQ3FtNOVUMD6nQYexbGeoy3TduEedbqRsH/PynoE/+224/uQuvT3gDC/mn8FB+ZeNxWn3LPE+4PC465WR8Rg+Ow9kdGG0Yoqmc9JevSEdDfS4nHoMLFCgSRpn3+OWa3ZHGU3RJwqPxnGQ4OkWRO4VVf7E8AD0NiqQIpVC1y6xWtjxP+Ex4cDsHIWK2dJX47/regcIwIVcAGZkKTe+90PquhhxWzQaHb9QHuwggYyFjF9nua5xXIU4pndCyoxsPd+ZgVETp+zaC85yMgHje/3eLkZo06cLFbvb0xiRZmgUiEinr0XSWRKDUjOnnhZrH1wlwqrp8MA6pVr2DVN94GWgObvG66qah3YBkejWNBlvnUkVRNE/aOvBmrXE8qsFODNBlC8PANz7tVU49j1MoBj3iLRJY5FIPFhsVA==';
  const _INTEGRITY_HASH = '9ede15ffb5432f59ab992ac91b566fe7b1641dc48d1446534b163ef30cb3cfb9';
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
