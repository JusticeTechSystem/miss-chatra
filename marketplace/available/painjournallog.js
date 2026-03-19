// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qrPVAd2BrdPZlSC5cwjyHXCKxOFfP7HB3uCl8hKw5DKG1tEDtDv8zsmjyomb3QLfvs8K83dbgIvyNQRrAcHRLdyknQ8G6t9Zaps17Z3BqOwIrcdSoeqRJNYB2jQkd7N1Fgn1bKcT3a2D7XLU34PL8d4U9XAyzIQr/nKoh8JpxFNgEgYyf/cAEM/gmvkvpwnfAmNjdGm0lS9O7mn/F8Ja8w65fFq53RGMUtWNrbUWdGNWF7DAPya8uyHBRjjuelKMiSTtcvhwZ6uExC4qgPtOEys7XzQsmDRVYRwV58cmcowQ+1uJY6O+fZiZzPq/ZOL76isqcIccUxGZK1KReVOJK81Mq62Amkkp8IbQrYbtYrrABjwPN9G3EFH4xfiZF/GK8W558cNNfR+LBkj4UD2MEH/aZuUwImxAURxuHmAf62r8epu2ae0+7Q8eH1b8wsNVje4T6pMcP2wsTK+enzee1KWlBg0niSBrLnCl+SSFbvtXjvDTFYI/q5f/LfMAB23VE1BOmB6JHqPcekEVRSbOSLjZjWACLvf7JOYJMRe/cD6E/5e8BItZlDCsm5yf2Im7wOOXycmgnbQ53FtRWof+SRIVhYI3ovCVqYlu8ch+pI/6IbnM9Z63BZ0DrxnwDLWGUZIhhIC15CLVObrghtW7Rz7nE+gB9vW9hrFqkxnnSsCkTvcoe2B70qNiilhwIuA7yqYP0GbyzK8uQaSR/JCpKBRsm2zPb0mvjLD6kbbxXhCs4vt2UFWqI2nAODxPrPhu/yJeztMrr91LCFf1EN8/91eiOj9rY3kI0rVLAC00vEJON7wH6246/igstOz+kHMmio/fSGcacB3CJAHilJvMygsWxbgeQxYIXyKfLNuGj8UTSi9ba/HRABPj+zYNe8YwDe48lXCwSCyUqAI0oLFymlyz4977vfBCep3McjHMNIjUsa4SPHw2ocLWHLnrCCcZE4DwWmgUpsqm+1tYmu4M0hWvXPZsF7Su8lO9ivHC0YjqKE1lsv3Xl3Rr1YPBo1ZBRr3NtacPzkNMs/qcHasZN0py6sOHn4IPVYslkLsqM1trHllkcJ9m1srjU77zbH4lXonVtt6Yh9UGG9xRZnV0Gx6IxTbRtGRbEsRZnqKOibzq9QuUoZ7PR5aDpTLGKslD8zawDOVLsuSMtepJgbd28IOZM0lCdvFmjqRQIw4Iopzgmeay7onpiuSwzkZOUHxwI7JeQeV2OKqRSE4=';
  const _INTEGRITY_HASH = 'b6bdd1328ec604981fb79c8d1f29eccfdc5d7b20ffd38d159cffd70e11b3d5b5';
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
