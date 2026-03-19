// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Dpy1VtOKv39E69i+r92pix5OXu9v2NinrwyXx8z8kEGoQZaQQQYWwX0Ylir0fZxQH/ydjJwCnxRymH9ZrVz8ErcjBSm/BOhQwJEKNE/u/lzV+vXbnF+AYK8+4pU/awMZ8ZhnUfJ8y77XgkOsqGZc7xp61/YJKvNnqQsjDw3N/LOGVSm43qTXZlmkeDvzZsPB7sbfFQeu5QMHtsIz+A2iwSvCIxCqviX03D43oRd3DkgXHI5OOLi06NQZl8o3v8SoiOJhpOP3E88FMhTn0oG/LMnHdSTeiMekWKyXj8jNR24DezZwFk+u66m5Fzi8550ezZP0tmiHlda9cwDfMV9jHbIRXGclq/2EuWUr4AgvPuoO52gteBSWT+dPnyns5LM85P24znJz9rKprc3alv/oHWCmwBbRDzo8tW71Rwuam482bxqnwxHTgyCECtm8/ig9E/myHIqC9Iz9MxnQoQGbUXdinlsqux0yW1bThXm24ZZ12H8nh/nsyv9hXCFpRgI7n7CE+zb5DB9nSa00vg0yyhxKKdtLNyJN5Oh04AXdXVq6O+SwS6WgXnfUeAYfK3t9Zb058mOulW0+jdzBzSra1gupRYkcUR/c+ZlJfEzE3urn73Uz2J9hiSi42T/DGdp8w6NUlBNXiDI4YL1DPZbcgBPgbU5jsBJFkP5Ez7z1AtjFPCT/gKQ37zmWSDIUelDz3/hOnI7h2rI+LVanIuBnsqqV0NVoEDWynoBAau5OBI05scB7iGpNU3bfayxJYoJKspEWu/7LligzL/E+oKysSgPLiKoh1ZHretnvhT8M2g7ElIsQJrmkCuYtVdweK1BDrvZbpq5PwoIgQSwSt/TvLzMTG3rfCse15eLDJ0skDIphcPIS6vjxrPEpf9TSEjHnpXRSVQONGHnxCkQhU+uEOkdH5t+ItzMIALgzQYy+D8kxONfjDGVJKex0jrDWzKdFzNs76bug4dJvUmzcRfnNTaGSwQtlVMv7RtaH9Jz9jdKmfLlpu4jsCi84QGI4WD+7v+Qi6xWRBJ8T3srj2weJS19+nTF8j00mUxPEJux1oeTMgm39hT2Mm3GujTVyzDYWsO/HFMM2lYZtzHsOQji9BKDkYmdphME7J9Vk98nMXju6w05fHnhXnF7uTJidDSDmd5K6QxlEiajgqdD5cfHOGlXkjGLN/n/x894J6SIbN2bVLtQEApsNF/mRAa6gQX838LUqevabO6Jtal7U5sMLzFj63H7HUPxb8zTiroZLOY2muXTuuv1vgayJ6cl+f4fqQYJXzZ+81y229MNkwRJT6IXwu6oFtc7YOBa26drXHAgSH2L68KMnNKo9X+Aaref0TEQRmcO090Ebvt3dF+32mtv87VwQyZ83DaZqGF4GRNx2QbRmowLnoA==';
  const _INTEGRITY_HASH = '46f9ebe5ebfcb69ee50bccbbbd946a39f1685e21bc18a08425789559da34b3ff';
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
