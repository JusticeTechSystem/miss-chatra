// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'm1yUrUiYnrmvZrk1kT8I34w/keetjkkISeBeqwT/FLHpINh7Cx+pYcw0taGHIrb+WSEz7bxY8+Q1ocRYYhHuOfGL9NBhJhkgs6uL8gVLwwD1P8z7rzWqlXeUoNgZ9Yr2kaLxoCzi1zvj/1stfP5GpcAe4rM9Zj1TfzJBzSFWbBIBzqQdZByFipYyGS0tm7hXpmbjDiOo2KT1ElmOmnw1yjhBP39C/9AqWGBe08z4FJTBsLQ+X8mdsS7WBBKEX/XwXrXcQ6ytwJ8Z5FP7y679ApSJgEnCW9bPLXDImOrAFJxxQNS6wF6fAmVbw/snFfp4r4yAp3hHziVYhteTNz72jVcl7paY6lJGnzUA//yjkhA8z8wqbsO0Qgo8GYRPFBb7xRuSTHMRaTYTdXprI1Hh/eUtH2wnuLVs+VTreKQrwCjNOVa+iii0+6uCEH3idAXJ2PcgpWrqRA0f1gnt3Fp86YdgWk45SosWuWo34UtPE6DWmNQ4mikvj01xhotCLLifcG6CEhGf0h/lEVy1lggPWeBqT9eJKud3cimtXOoC/n0kQIIlDDu6W9qagdQ7f8BQAVCWXYoHl5YlxOefujhARJvkwA==';
  const _INTEGRITY_HASH = 'ab83c9f014613f2d79d4be548bd082139f2391f1f35d6bcbe7d52c23fcb63681';
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
