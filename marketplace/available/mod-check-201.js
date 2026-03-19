// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SDZZ962Gwc/VDqnS7/yOAoo+YWmtOFzbeb5BdkeE7YCS9qAmyDmx5A+bqkflRxhAgbO2yOAkHtDa3DF2kKI2IMPYi3hlayyclHVvHyUVU3P5NH27mQDHAlVbZwy2V8Un7z+/VW5q9Dyf4UXXIMVGq/qN6STU7zsSWgs6t9RWHvuwEN8+f00XthQZrI9Xf5CSkmfzo6Q0wqEUT8dtldO9NjMuhPwGWruSGtd5jc3zzP0VEYgJlI/rmsnSSgXieQZlt6w+vx2B9eeYxSIBpdaIu/IkxXzT5ZGx+hv53B498thyNVOgYt0zypho0LisnGAmHfdDIXumJCtpfVKRYGk/42dmquVtoTn0fPC3xpC1X32t+ekOajWSpFV6ia6yWB5pY5uccrxL7wN/yP5lA96t81mKbG5CmNoeoKZgvT9v4c3Sa2xfcc6LL72kTWpm+q+hz0zYKrx2sarE5dERVywDD7yOnsP+vU/0rrxNBCZiS16uzXk+3D0PpfWDfDIkKZAVFXloycTsPOCfe6JrqC3zJPB5DwyCoOMY2SKA31ACIJSHD9yTnRYqCETRgYrTRo4DXuJQNaVWplvzVvSdK4poyBczuRUGYUybPz0vsD9cJ2x/BuT2PS1jpReJ4HU4t6bwQFKkGmIeL1QV1EjhGfuQSqSLAHz+d/TORBE6+AwuHfLLQBRtp5eOY86gAz+4Mx09M3RYxr/q3iRGpUcTqZoK1h/UTeB3ooeI5ecrX8kn46uYmnQNFH8IOb888WNcCflgsVglbK+tF4z+rQ3LsExWuucu50AfPj6Zx7gRuCNTSmth2L/jwcVWn9L1F2VsI4nToXXo5PROTQzTBnclWQMp6mkIoVSOam6Pm7zruoU9lsYhSm43X1MdYXKioa/IkPpWSJZuNSxj79ACkpWf2Tnk0P17gXy7EP9cAvrPa0qRFzv0qhaRoD2UA63/80o05Zg7F9y9js7D7uds0emb0HQ0DdnK1gQa1GRpLKh9aoEjTNgcG72LGQOy8TL4F/iTDxyJaSrILOhNsWnxQ+8hxiM8t57J4+S2LZXh99Les1FFBffxSjOgQkEtV7GvfU9QtSu+KVJCPsIBf7JudwmaJZ/Ggx00qachnc9Cp2jLmOkVLzvgeqO7eyME/TyNVPqxKBfhstlilOvgr+Aq6S3sukWjO9E4Oi4N33/4v/pXDj7GVTtPTWuC59wYOvXRwJNlhFFbo56rDeNvCABfg/qTfytRfEqXTNBCrsL7k1GElrAwbOKCbgr7zko7Ee19fPQgOsONBkDFjT9+yiO52rRe/VpN5N7hFQ2LJBOuAQabYQu+KKzTjR75bBYhNHawcyNUeA3LjrVkhloWoALWilwckL83zg7g71cHyLMTMbLXUi++';
  const _INTEGRITY_HASH = '1ab04ba3f64d17529e21ba60b64a89b9cdd98048e4b2b232269e4d7254bacf1b';
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
