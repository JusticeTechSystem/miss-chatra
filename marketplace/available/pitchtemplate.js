// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'x59lCcBeEARBx+8KV6ZeSblTyV+YrCEB65LPGcRm0hoOHDA3LbgdCnI1fgMO4wUwxXPbq5822mMtUMNQnkG+6k1fH9ReI/jagt2izqVljHV0I2Qhe77iS010QUkpVle5oO8iAUs6bNoVgZKfSpoRktdqLrswB8CmxTId5u+0N5lmEGcvTJ8Iw9+gTIP57jhviW/qrSiv82cXp/DIUN5z7XzIHFgWYGjWsWwEDMbwFNUBfQvnqPwzkXW6TmgkWvwutgMwM7r7+w8bY5HpjJ0oHEcDt+EhzWjNgdczJTLYxQs3iS81JtkPXQv2+8Oaw4tqncJKtqcPfDkt9zAPsz1QxQ+5LO65C4HmDbjzRyY4xUL1zjhG/rX/dXOJqy6VTMzw+IWWBJPh4U0PdEUZJKT/aPXT5X+d1ugilfCLQgsKOwWrhnlFUMp/J41zWqdIlf1+oDb6BL59oTBlfVRsjPnbJlY/Hp6rTnB/Viq9jEud0m8B7+MJ4s4zt2DtfDar0bH/DLkgkMx6OljkSs0jZclgSLDhfe3ALCqgMnx0cQy0X8RWKxtDkLTLKVUXC3mwshHjpDiQw9hf9lzq+fI4ytRKujsKl83I3B5Cb+534Xy2yWSBAyCEq3cI2Wlfse4Qd1MvKRhQ+RUDeofh+HEGeRRbDYUa+oQzyByur469Axay5Qe343uTCHSc3YpHxWyfrIFI9SmgPpVkbnheJdJVw9w5EBv4hHirju3Qq/9l4ha7LPFxD8htxF4xqnTlmBYJhQqmf3b/yjNROGyctAuHC9BR+KHUvXy90AKZwvDjcRcBAy6weX6+M1YgEHjacO6utii5SXRZmW3GlTQzcdjwvNxnUCiuCtGMm/vfQCZTYqTc3GTmZyWL7R+Upwjd03/6vpcQ4aooet4AO8xnTcT37evN84yJgqtuUiEDMp0B1FCYJxTT4cpqvDmpFrZ+XNBtYiyXOw7mK3RhYYQRl7fQ8TFEbF39FD1WfX4VeglhyDK2sNvYh77Xs0UNsnSrsiLGCY1SpkFPbtymeB36qx6m4HU65KDkxbGoDCLyxkNaRT0URTliQgMSPfzxvGgjhJu1gh7ln4Ou8jNUo6WOaCF5gW6rbZcwbJ9l+rjqwPn1NzOEu7GsmMZIkueJCRAZGQgvQVpi0Q/uMJ22BHgC7fpJVlgEtMYMK2qWIpX6PETklNOE59pdnGV6R68t17vyRxRzzi6odfHr7ivGFMSxsRQnOAr79Q==';
  const _INTEGRITY_HASH = '13bca4ae5d01c56c0cf197dcb880f57ecfcbe007219d00b37fc3b6374adabe3f';
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
