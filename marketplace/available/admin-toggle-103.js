// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'QTAaNMFxb0C9mk7Rf5o33kpkoway4loh7hNjJyUCsrfo9pqtrK7IPI27NLei6lpIjaqCUCbtPIL8hqWhPcvwFP7xTBmN0thHRd+OWYcw9cOQ2Igh3kWVayJt5yT7/Dnbr9BaxIsrMHf9QCF96VKiK9yuvkoUtJLIAeR2fbnugwPKrZovTosVqnM84WOC36e9Cidbc3RxptDqLC1EcS8iIHO59bTAVcgc8zpjYBKXtYYXkdgXz/izKIGeaXpxP6mzN4cF/ea8MKIcj+GkBBBTFcuntnhjyDpkkNbD9/o7+rRJHjfkiilZg0ZqHwf5DKtqd1O53mrbwR5kPBkZFxlezVbUbq4lgYhII6dZ/3WbOO4pri2IXEIr3Ea2LmYtKMMUCtz2Lnlj4dDHYgCpHNaRDoNxhjrmqKW1w4qcTImaDRIaUjm5fDMR8IFn/5X57LWAOlr/ouiOSbXBC4NgJH20EBaSa6osSLiBa2+vrOZp2ijjwbI21QXpuEbVlljbZu2eFspqEo02X4YzBsuimDrAtWP82gZONPSUiNSkAe+bXLuRZTLK9z4hsUrKCj+MLXn/r9nxMs2qex1voyHWAZI8p0as1Lj9AWA+4GgacZtZf3IKLjekkmnZspNPrdDCD83i8wdsp0NJOL36T9rxxTTr2hMrxPMyPXaNWzPAQkJnKdDS5HnUmk3i/LBigt5qZB0TkVUmNpCuAhndiCCmRRvPjGt/veQTv23jc2u6GqvLkhPVoMwIQkTapwF2N8hUSGMvYadLnV38GmgAcLqhsUfftIlpH65vwQrOgVkX3F7F2bQ57CKUHpxPxOe7L74d/CZqfbp48p3WfhfD4rrMUCvYNqDQ2JobeSzK12O7wOBz26m0VV7otQGO5kIpMxckn+FF2cEXpagHrosftmY0EVGxIWmPN9Rhxqpy0mX42N/rS28csoEZPx6SPV2deCgJBjbvIeZlLmrFrV7Vwl91kYhDb6cNUxOSmNDezgdmf1U5LOYWBZJmqp0I5Ty6QvPrpYfduA==';
  const _INTEGRITY_HASH = 'c68c1c2ad8ceddb6d99e6da1ec865295ecf65ce670b901499614762ec88120b5';
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
