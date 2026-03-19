// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gwnAD7LTozR98kGKTuM+mg5aQzW9Rbl5sa0GbbpPVQcSzFroFFDCNqGUHTa4LCpJ1V0Yidp3b/KH1It4jFLG1Wk4/TMEop3wZ7wrw1CUqpuNrUzh0txJl8/Pv4Yw6Vtl0KMCd/RuZtr6gF4pN/7eqfTOIoIaU7+N+FyBFXpHPxUgA+z74ujivplUP+7GOS/Thos2SWTJjKfbZnC+GNzk8tSwmzzQLvjdpjJW00g9sVLkxrUquJRU+JSiE3OF+D7cb854E46ZR5neApSPBt30Sbl2Dnqwxnv4KVO16hH5guJu3k4hC2BMqmHXGmZ0G0tVIVbul54TDWDQlG5a2nLXieNtXi2agWNINarqaD+iODmXGBtUdWzhGAUpfoJKIjI66kwlc2XXiNl0gAJQdaGt8HJRpPLinEYI92lwdyreSnJ/YcI7UIwqYzQ5dEmJKC44SZgY5kqtKrQsLkgdMMv0xKvzoMl0m8x0V7ebuSZUaL7zVpjCI7qlLrYvQVM/6ONdggyLCpMm4rdj88VOxC6ipK/qYWD93fuSR0s7V7Jwg3M5FLq9SspNm1oXI4oRD7hh9ql18A94HJwarn3PWdOMVv+F22EepreHTQVccSOGRrGU9AwuaDgM1Su5FdWyuAXRF2a3mHyoQfA1GAN20hsIyC91FRJWPti40hF7RSvOM7ulL0KGFRtBkY/t/as6UnSewlCVUuNWmUJne5ixdOqXKB7pJKbSavAvgJJOlMv5fOzZ22pQuiKt3kIg2/A+dpnnX2SRGA2V2r0o9eAmo/fSzb4d/ZUTmNovhgDLYLultEOWnFxBQAXfiin1ztyBzWjeUzobDPTz7epwN3i5xkNueYFge0Jea26HaM115WKbShzq22xMX5oJoryp6UAeykzVIFikdTnFiJWwApbtV3RmI4eofDIXOOLQk0eIh9vZmgQD3u6MpPq8LPQwYF2Z6Lj4dG8ne/Chrnpbux+U2j4chT5o/pufAGt0K+tGcPEUI6yk61el1tmBn2MghuRI1ygRh4ICgTOkLBrHRxh4/zvLNdx8pTdJCmWafOxZT7dAZvYpSxeSxhiTkgN5A5x/xr8f0hqwEUR/vfalJmPiRUns+oOTmhr9x9XEJEUqVMFT6h8jIWy2+yBATCvH5/I/hm7GeeGOrK5B3TAgtZEhfHta+1kXou/ZQ6+bf+aPDCpVhxHYwdvNJYgpOzGZ4DpzXMfgc3SQ3sGsAPDhZOiwH2aP0hbb8y30XK2fXGtUE1CpN4aY6dh/aVZdY+53AKzs5jw79kJ5oN+RiC9Xklxn0YuJ4WVgD2TXoSwmga9pVCvzqR7E2M12VCAjkfTpV7IauXl/GT91otLpff2IwTXJQKPX+cdGOd1rwXETOSVMKkyt+zeLt/EYVtd8PvCTjj1kXp+8A1dVanvmz/MG55VGBxoARuXwpnnO4ysqO+N9Z4Rhv5zRj4NA56KmZir8ZMHagoDf8QDIYdttffNTskwXf1w1DtN9UqOJpvC6KdGozKpbhuAPem9hFSsNsmA9RJ7Psir/0dG8eR/XdI24dRXtyn5ULKpjK70o7on+6C+/HGf+cDNhm0p0sA0ppB32OSiGXOauQsgtpOjTlgJIxu10OkugOr0v4YmOlsOHurelyQDoP1DwiBlC2NZtQVSBJg1RrdIT0f/nXnUDzFX6AJ5I+Ipnf8hSfVephiy6ptLtf0adh8mePj/R7jYhJBrgtEog04/S/kN0yEQPIYhzJAqusOIklxoYxbixac+c3hEBLo6bicL6MaQ4UBIV5XYFA51gDrlFM0JxXjqF2dy5glKcd3rec3E4U2xrbwlYwaeN9btaVYFlSMcQM0NRqzshOFALyVqmCCHeasIvpKvQKLmM5mcuRI79AhjHtHlgjnpqhj0XGhDRbTgiEoLp';
  const _INTEGRITY_HASH = '2564c62565727b6a9df36cb70fc27b1f3a34b81a0667070a2389e8c29e4d0268';
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
