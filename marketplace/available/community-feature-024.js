// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4SCwbu2yuoCzSBVW44Imd5KR3tFtUNmMdUy9p89n2pnKwJYipY5vWlG8M4aQkCl3ern1vRtdAKbswxTmLiNbILFQx227TW4ExU3x5FpLJkozx9JxE/ft4RlPFLhuhGAkJh5UzLDh+0sBO/AEidB2sQOeIw8COkZgq2QNKVLDaXxn15etxqOcHjPolJmF3jlC9tYphj8bjAid+XZAZRM3rdZ5WViZZHKxlnyD8fYBs0j7tI4r1BgbMZaGeeKaOJBTF7jrAl7aXXKgWVTu+hXMwOPp3cGd0qloXE+LfOdqDpB8hxcb8F8uCAxZOLldJxLjYeurrP2KUwKH3kL9REeJO54mjVrRmOXZRoVA82DfS9c7BwmEZUlT0BxNEZqPuwgCChFqDDXSNDj+9CjvYdHiwLdyZjwJi2itXOMLZyZRRQQ8UIcWe5rpWxAbKPDN9SlsB9NLjp6YQS/cppg/DLO6m42ySbrHgSCl1M/LMUKsqC1f25Yqpjn9ibhMDsJEMwTVLtoNzfaELjF/OZoA7WdMZyPWb73CYP4DON26fmWBrZnD0UjBSy+M4vcXgH8K5QwiLHw1vOUW0c4/xRwbgz90q8pjRpzNo58AwpKwtMieIYeQuzFyGvq2zkOb1w/C+3tyluMPeV/eYH2DsGm4QjW7/tB5EMabQfULfkrBpU34sAESIjQdbsu/j389vmjmq86wjDKmONKn5CZ72A0yYv2l9O3Cgp7qHi6PbVXVdQOTXjWeTg==';
  const _INTEGRITY_HASH = '2be29855ec8f92d8af4b3fc8b44b446fd08e3541515efd087c96be52d00031f2';
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
