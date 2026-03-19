// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'S5B56x0nw6fGLL3f01x5N/H7P8mN77vSwuAmJuV7qCk4/d8TNl3UKm8f07NWeUKIowQRlcJ0/yx+yluJUBgBPtg4UIFzP90XIRxxaQlxtauGG9lfDMju82Q1ECpci7EOClrupCjCm645SAa4cAOMPgxQUwJu5NtfVU8HxcwLcNqCDydOEz4K7HQsx6EKb63x5gLj1d2tjHXDNgg6B9FiiLlaNA2mjfZaCWTxLIa27nYt6B6fZbvJJcJjpzcN8gVEGkfA4IZts1yoHrJbM2Cxc6oOUjRWvFQbGxnkOsYMA96VyTDnqBagF2Vd3o2vRsLdaEmjFw7L1eKlT0Un59Qmq/Z6uohoxtc4hktX4aRQtB8VQcVjDvKYhTsDywmjm2DD+sXTnI8hgUMaVu6y8QgIdtzsm0uA9epceMToT1Kiqwuv8odRKQ3wqfutJIjQ07LKZ28JM0SbcPbTlX91pMmm6cnWx0ftnA0QxIqZjDK9Vepe1P6tJwhCfOOiyxA0jxorDKKiMGc9/tZ9ABwG2mqTAL4fXppEg9Gkeq44deguBCldYPAjjjqyGrcTIalxhgiBEg+OtIFUPGsIBtJdt01bmKPFDL93cm0k7IKCdTe4N9wYk9ceiG76GCbXeaJV2dac13hz5HLNAuIrpZ6HDvItnyFRtohIoNrH6PUUwV4IuuKyukHbKGvNKYkIrytlLkJtzgI1Z3nyLikSfWQ9c0e7c9BNUxPRUmdLuJ4wjemXDoSgaYR66x6LE+E6+9w/+gGbYNSOGIA4J4FX4YSp4wrqXihS4oHwHitbmqgarK5Mf9YOw7FjqNUL7T3dHTpXpT35RTsRzHDH2syyXULjpppUcK8j/gdUOcCj2F30W276Y6XP5jdp6WYl1QhYekkeb97kcaphTrrC1hoWUKac1Z++dU5TELLV29ctakuKob2G6eABBRYVABd+lk/T6UU=';
  const _INTEGRITY_HASH = '9dbbe18d7c6586ae031f0a3233723ac917bdd092d2d847e1cb894305deeba529';
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
