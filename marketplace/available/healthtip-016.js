// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1nFpsiNdEri1rnRZ4UwKCGw9xm0Ns2ifWxKHbaG6YYDEZyDRweYVaSCiLS3txYIJ4rqnhHEFSZg0Wy0qxGM8zHoSOUvEDIx5OgsR4AZTqBaPRK4y6aSe235VvUbEx1pAeTZaO7VDfQC4GT38W7P24oWeoUt1bUR63e5SMjVBIAWQ8iepDn1W/LdQrqAWvKbGZ+bbOIpkvBggtuP/chjf0VTJXT2xtWWLGuj1uuve7tR32lTjj6RLanT54HHcMtK+AWt8nVtGSgzMC6XaLlM+pOh3tTlw3qfF0ICiluo6moyPwkZ7Xiea5FcOMjGfRzyoEgSr/yAiHfYi15/10pd317MOiGqwA7q/9YwGnS39qX2o2jtoPsMOxj7gLQUsmHWY3A99IOF3nkzC1uAmR5x9aH7ieaAeDTHYFPzKLd4mhQD9urHJsV1v3cl8MraeRwhZ8vWNA0RNtMcUNrykczRn3mqyoTXYU6GlZyi18CmkZGqd+WTWhOq+F0C7HypiY3JHJEiE06Kon9z7JcmtwkSaxqmxT1KcxxnohRWqKgkiff2VeZTOa0fpfVkQ6rYJegc1U6SucCvdsWZcdqrrsgsIip0hj30Knl6Io19VCeM2CgPugLUpyJcYxY4ouJ5CCmkNlvmdcVczYwfBvtzzQk4qlgCicIWsmPaQrnY6KNq+p6hSSe5EJcH37tP7V3u2vQTHLvjuO/zWwVxN9O/CLpSmIBPUgXusMFTmRCN7r5win8A3eh/+9tnVwE8/WnaJO9bc1q6r4NYaEH6wHxScvo+MPFKB8N8Axx+/vQDdsGYNc/l+ix4Gt+uO1gEP6oBA5XyPd8TzCtxyemGjgIGJ7wy71ZnwlbxZfUvvHsLoqPtzMr/KyciAFVyz3jjWYRf2Ln2nF8yGrlG1y8KSsztaHZWZ+BgipLoVSneqGCfddaH2rAO1Ayv8N5WAuPY4MzQ=';
  const _INTEGRITY_HASH = '27ed5a97b8510da83eba3bb28c0b44fa1f0b9674a4cbb120f66b5ef0b54d8203';
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
