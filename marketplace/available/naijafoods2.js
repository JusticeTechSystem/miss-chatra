// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yVtepytSyk/SACwxDV5EONATVt+ONhWg1zf3qPo9fBj5UTwVltkf/Lbk0c2T3u+haJAy+qSCrD9yu2LJb+4ZemlPElCkjNuJ70eJzmmjqmPQfoP8jPPjkc+7WCBRp+enwxjDhi4/cbM1OvC3e2PKqlicKXYJGYi/Ax+ObTtEBI3AfpzmnNcELHJVUdLFsdEhAdHhe8xX/+N+ePqw/cchLVLdxga53UxZf2JdKLVacXgN9nfdZmImFt3xEzhZ6PHeEJ2vEGplLF5W8eu5H1R9uQ/UTLedFlIDbtPVIHDnm4LraD5YK7uAn4jM3PYJ2WE7OvwlYqlOAfLMkh8vT81ksePDUkhZx35N3msYMlguSaOTQywdMKosAMou6HdfwJIJ+Y5X0f1+anrZDi7ul/9/ccmMRfqSyKvzlCqpuwj0QhLayKyGHZs1iXRWvyJGzOusNUMINuwT7rJMzAHmG5Ya4aIDmN7Kfkw+S4qCi94GdUV570X5woeUsxKTE1DeTSIvHf1gNaag/P6FwFZQ027CDfEH+65zBaE1egz24y5kQU79HvEToLBAUeoKfqCjiETzI63Rv5PwojJxukkjmlMDM4hAYPxdh/+Q9vub6NaXiLIgK4le505LDiAklmOSmg4jwoQshn6wDaPioqLiww3o4cd4MpiCDfP2x9G84enE8IlKx7IXbBxcgdRQ/Q+2efgUcKmSgNkltvgq/TkUvikYbxzzyDqWoWaEz+h/LKdjQnw8agiAXy+08lFZMKXFORx5vpj+YnJq4UYPFc6b3nLbbAilXGQ1FoupLUzBjnxVO9OD6gJ5kuAMf64md/fJRMgdHbb02RrggsALc7HwtJDxcsyFeiG3i/DUbHUtNsucDIa2JgSVgl1S+Rw9X5qtFWZpw8QW0kbc91iwF8gtys+rLAYKs5F0Q9aRqVWDYZ96rGmRLKwXK9oV7XtEWwW+pkzHA3B2+c2Lg5oJW9nS9PzSO6DPyju88Hd4BlcXN7rBi9gh/ij+G3xrLI+E8zFZXm1H0H2Vh6KLJNayN/syRoT6AHOITKXt2J/acxILfrHBF9o8yJam7wVlTJXGgDsa+xgqSeSs+AVlnamkrHdxgLTn7SB6Mxh0HP0uskIY7IzajDEiKWmYR8+b4jcnBciuRKuQMyoAmbdIXxW313EHyEQxIxiE4l2WwAuo2BL3umdZ+3oOfrVkWSajsxdmJnIUIvue/uyyDtkdwbSUs73GAXoh30y7';
  const _INTEGRITY_HASH = '11f4e1a0431aa7c73c8f225f575a3ca6a42e6d276a7580ddf091c03c96025330';
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
