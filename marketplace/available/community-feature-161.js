// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SyQd9sBH/Wy7Im4iirevkSn6RCVQ7R+z4lXxH2uyQLIHKHtGvOYUgaXGz/tz5OIo2hvIaViUBc2YmvZbt2z7AfBvSniGqLVWMSoVHTjjoYBj6DOjNS5+PFdB5K4te6OEn5F5wLwW1pyN/LrvL2I/O6s4AvacP1IKyU3OLsVkiMwi6jMLgxRiCWncQ/tGb0BEjwO7aCtjTQRjgxMWSuwKA76cIDo3jqzTJHKnmOjQ/6uKA0rU4Mb1XibWiGA5Hsz0xDILGbfHkrYK7KuGNQBHbllK+LnDcJ0kwCYrFZ1IYWKrL64gN/d/Pr8dd+RHeRVaHUBmBUy8bAa/y9cQ7taSJZ4I402/w5JjPp0tegGEs6whAKGwPA+gMhYRsu3B0gPSE57liK/ujJ+oyUZubpcprIgjFcgal69NL3wNllWYu/bScrbH7fFs/n6kryI8PJxrlVLRif39pdAdbuUjVgWsu8U6eqH44vz2Vc/nnVx2TROu13aM7r9ZAuXHOcFXsYXRwm/RM0UgqCdrIQevHjWroJy1QF9gfi7Rwk27HWCQp1xjCO0UvQT3oo3Qx+WTiU3Lzu25u4YX2Hu6cSyj11oFoSFJeaVPYZ+Uev0VoHBE9g9uJg3Nbrm5X5/92sXw75ski/f6IV7rQ4j3EZmCQxD+h6ET5zN80l6cWBErQt/SPXqOKphjIGBRbd9lkLf9oE807BgtL0L168bGI29GW+99UgGylaYLt9H6';
  const _INTEGRITY_HASH = 'bf37599043e6b0ec211f61de4f5dff3762b0fc67d2b82e5e53ce2567438b7882';
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
