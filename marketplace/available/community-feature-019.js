// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1V871AKn+5h52cxEu66Y9+6D4UfnpoY42EqW6cqj45ByU61WIlrWwE0ksLQ5b1oQXTX6IU+LjegMnfFvWDxjPw9dhycfXMtE7WONhSmoZtxYVo42cmmgXSfefDnQmT0cRX4o0dAguWTToiJKZqbGDwrLaOrd8WMXKUX4tF0Aqux8O7V6CSJaXFKn/+8BsYX9M1J2U1d2pBku8qVpxP6vvdwBH/YPHADhowuoD34sm2u5NNe4qLSktVYIf3zN+epC7Z6UjcdO1OqfsWAKJ0Rw46v/gzwvcDC0lYKIUtKTLYjhw81sn7Xl0mWaK/m/03KKTO6xsXmh3i7w18cf+TvK4c98kpI5v6SC8gRNMqw13bHL2eJ8/iGYdWa+V11rCy7iBQVJ4N6iSZFZwl6B/jWLbsK7yNXLb8pYj4yA+KKIcmKo/iizqxxXyu1ry4TFe46J9on6XUwi+fUZ3iDYUTmPGxJ7GwLGjJocNbEf03Dp5CnhAhvRj5wTFQ/kt22B/xYY0Sr1GGK28xLD3gdwSlFScmvex5azbgMt/QDbfmVcnWC0geTsrafbajxF8B2Y6A3SoyzdBzkkjKG7QD2J0fPAx5C8Mel1gSALlsYyToIALjTD6QVps8FIUfDbR+J/mSRQRs4cHQSZKBDhgwkxI04xIFIAK0j9LAfhSdDxVxwwxNjFaUDbfE/vZSfyyhx1l0g2NBcNsD5RVfa9LGCCg6qqONIQ4sIS2hfAnNJ1KbxZtDmpzQ==';
  const _INTEGRITY_HASH = '0882041a01e11e7ed329ccfeb5ba5916e60fb56a7435fdd2fb21c547d7821bb0';
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
