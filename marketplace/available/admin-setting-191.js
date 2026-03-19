// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'oJO4dlV8oLDUbw1sb6vJO0dt5itZiscVAFsMwJVYtS88nfeoHubWFF3Qt4aoDZ8LQnFSQxpQnBlOGrFwYOtOtJglwGnm/+vOkAXl7rKxrNu5oqkfZNJyNUHWZxl2JRmqefJkC0DM4QDca+p6bYDf/AqCM4sGu3E6eRXC1QNgdjYgDptjd7Fp7ClGIg1huwPFS46a6kuUZJZHx98nYoIDaz8Yx+0X7uco6y161pGxnnBh4XhyRWcPWANycqFLJQRm+XSkLVu25mm6pM/flqi16OpGHxzE9wZZnJdjnxLM1F9Y+yQ+u3KXWkjHw3AXhcCtjOfeRIosgOTXKSGO0T3EOnFUDk4g29h2W6FXAc+MiMwYDgq/Tg28eQnRTNZEbMT68tugwaWN1BJKPMq+iHhj+hNWZcbsZD5CsCTvoV7MfYyrCUr4dhx74yXvKMp0gW4rmWKfPi/k/gOwfOYGFszD4gPzQFBogKg5BHX5DHF6CPWjEb08saWgmtUODKh7BOqW23oRKSAA6KVAenMcDvouATIODRl+mq9+j5AsKbt39zflJ3ektmmeeVhRwkqv6NNFLJZzEzwyU/w08ouGOBBJTuYc0h1UbYqq8NYPtZQtEorR6wqY2WcHR/xglPzgesVMcBHz2fT9eKm811QHe2LN3s37xERPg0nrbI8kzgZYp8dl/xAA+mOjco//1ks1GIt9KoXFlD+fUhbYQewf77vjoIoekHv1ZoehIMMCT3ur7rAssG6a3ANTmDcmKT0ywg/dmH14GbOqyWua1N8TTw1nai5RN/dLTkGAZ3gxMPkunYHHQkkQYV1HUlQ8H21sglb5lPIYbPeObzomeDFEEph/OMZD4Apjf/s8CPiF//Xyc+uDyLYb2JRMtXO/kIJZsEzbCcNVe0tqnmkxpk4oVKaMTN9UsHkPMoENPPHVMfHoDILBlBeKGufslj2uFS80UoFvnVKK1W+S0++lAWxgRwiA6+eHe0Bhh150mWWHJYdAwKn8DseVe7mdsdyjIrA43MXnqw5NIBtpML8=';
  const _INTEGRITY_HASH = '612ff750f579dfa01fbfbf4c418d9b1aaa3006d37d09fa5f4bb0546262eebadd';
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
