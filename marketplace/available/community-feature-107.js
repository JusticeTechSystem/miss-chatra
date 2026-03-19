// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LuS2S7yEt3YrTg+/aAUOadr2xQtz3UMx96i/Da9pGo7C9Wc5WN0jQIkvf3djwy7vatpxO9SFIH4eY0m/+pONsKZHsEDc291ADIqkcDYHIMTR6yasF9CYGTfXjUozPYpRZXoBebtBP2ZhtgH1VjbENiE0dC9yUBMT0vDWOTCbbvgOzur/58dXB1HlKtscitfWvk5yptlMyvx0NaEQQItxUdUbRl5bdEkkRvx2nMUodhBzvzVgruDkPRaJA24sa+RBalCvC8gB1qQQ9Xf+2v7mi6K0jkmgVVaKnOCwQ0ZI8hRnZByvmoyGTLXLlVZyzRTd6hPaelnxwLwV5e2dGrLKuEtan4re1Qdi/KeAzQ6QAQbXHwmooY3vyV4nCVwJj0e5IzGO9+b8YNVaX7rOQ8ExSLKvHm7/B+vPXWsIqVTVHmXrheMimAMqMwDCAAyfH1AMqV4tognha0pN/ryGxvSBm2dF21lw0HwtgeuxRCvy6UihIrf25VRVnIfUEsjuIIzhAHWK//v5CHGrxPJVkk4Ud/Cyh38pT8aBkp5M2QDC69SBI86OaXuj92z5gDIN35h/qj5UYATy9s6NKEbgN8u4LsoH2MtrA6TTrfoq/TfayS4Mc+0JXYMi5vNZthnwP/A2PdQ27EFdN6JjBdWd6F+flVASat6mkUPK5HLFId/kDOskyfVd6UlvX3bYeToRPjiT6f/HklnOT6uGO9Cq4cwZxroqx93+XSvOknn65405uiQ6dmY=';
  const _INTEGRITY_HASH = '4cd944cbe521d36d1e8c7a96035b1d625b75159109cf26f56fbfdc446151596a';
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
