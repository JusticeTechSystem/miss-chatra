// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'U02M5xd6uYCuYQ69y2wf7C874n9gtE/z2d1bZQ1nizLoLkwLqTZobCvQMN0RsP8uK8jjsyFozMEvPbUWx7tentTu5Yw8BhPGHbDVLUz97cVaUE+HFthk/+GI0T+0h3TqNJvbaLXCokKjd2nf39n+LU+YvjnQdcoyMg4sKzmNRX4zLO89/2Zfey9pD1p/ZhjC2AFCX1z0GA1DHnhn4Qs7rXV0sZ7w0ELMFksNQnvGPpUYkk+ilEc3Hmwegc7s0BptxOaMY2r4jiz4CeJpvgBcw94MfBKpmwH7+bpUtGqz3a4dUUaoBRuu9HEOa1cOyaDi99IaabNWDm7D1hgiktwkDc2kef00Ui4gctTZda4TDEAnlLFEb9bT8yqD0a8vYlYUN/fmBIHTZw5CKfRIhz7vUNbhjFrjEyr9veYsjH6Xu9om9ohfKGkIcAxQurfU5o8jMqEL3GcsqSmkZP18GGk6lYsV0G+x1AAyGEIIX7RyfxfzZVqIukGricexKjnHUDqzBz7qYz1jX1oxf64W5B9GWqXGEQgv9ReaTOmx6ru0QAUCdWaaJqm2gzt2hfF51CMWmE7SP3rD8TpRwnvGFAGJ2RTOhFHu3z0I+BAm5ARroi++GJE2LTGDPuCqAD4Zvg1uZIdvFJFpEZQjAwm5Dk1Au3B+FBxYx0RY0e5NaUvFSOpaTW6hWlY7jWhm6SiWCG4z5sd32hO+zK7R2HPea7CtT75aqpgT9Aab/06KlZBzBkm+XpamYD3Wc65tEvxo6ncu3kJ0t2TQ9XbYO1b1hoT0rTqVqOhJ0b/qJmfmCrqZlTxgj7N9GrTnljjDr6/9Q+T3ZILTx5bqd8CCXLsILjLouzrn9LOSFK78auZsFfkMVklDjYK33H5gqXt71iFJ7o8QlkvtPJAKq+tIMWG2aK3JWdHNqK4laX0n/jAltqbqaR9FSUZYn6a+7OOTY7Up+J2Tp7cFXIGgFln6HbDbiOAOeByiJwxOGAiq9CI+WvvKrVelcU5Yjpdl8NwxAP30s+gCww7PxPeVXnQX2Y+T8gBcIXxdl5JdfrC9HHNtSuRYtNjIgozH39DLu4QA4GRNk5YCA/OiPU73BxFb6Y3IsJgd0d0bjontf6MriRZ/8g9JPhaitu0TNeXwpf/ClgEEeyZqrVRsBLmVBLSTsMLuav7huOXIMNnOopujT2XilqQDucF9kzbFx/5MicCjDLoxgkG2TDM=';
  const _INTEGRITY_HASH = 'f073df1f9310b490507ae36e3e860f3d3be7f95be9a002b6b7c14c01f287b49d';
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
