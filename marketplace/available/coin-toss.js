// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5lYdv1dWgBri64a6YSMkaev+olkKKXsQPfJCt/PDazkXTHrHWvL5HWUbftaTLVUez0a4tIhpX9DIkGFiXbMhuI0fVHx3BbNgUV9Fk13REQdXq69S0iJ9Lv+GPhdAM/XavucsK3rz8t4zeNBY+wwHJnE8rdy4LVmqbLXqQNa4wI+ZVl9F91e3YFMleaUvMjXAstb/h3O3o1QXoLityEW3blMqwtMHTI2Tf+V8CU+OnPzXtUnp/HUtlT6ThGGAL7ixiEIrt5wAbYk0lzhwaQFvfowhpGnhwUeRJH6ozcTMa7eGSEpRL4ha7cEX2gv1FHmHx53mJRb+n0RZm9mysGiS3m7GVqYpMXeWeC7ptQuXY5DfkGySvRXjh8zTnBHMRMrrWu/QLiuX7Z7FFs9JCO7nYLs3cDhCWrf0+uP9aQuhn1NMLzXDGCMoWdL3WXCg8EqjLiYRFzwfPC3+r4Io8To1JPXQbERB+GXi73DdbTWAC50Teivrt1R6Z0/Afg6ZfiKl906dKluJ+vt2a7URAGT7G1nZJmlCWI4FLCWYTkm4JCYBXTfUrva1AS36XWNhrOepFX2ml0o4JrzFdWxpxJvw31dlVEZuchCYC/CSEIIFB6SnkTuzTDE0276oEpZ3I0kFpwOouKABINlaJsrEKCblr9FTAy1fVTOPrXC6MvEiszGHxABQcHqSwkmpT1l2l+SxATW2wcQI1wCPu2xYsWP08psfNc04QIg+SvMnRT8b9l+8inHO7vAEZstaxH8KW1u2MHUdeKFNIm6SUULeM2NhHSNVf3KTy5pGtA==';
  const _INTEGRITY_HASH = '42ee5fdbad3661b6d8367b7216b8790512adcda5d3a8a18a4a5e7ea8c5ef370a';
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
