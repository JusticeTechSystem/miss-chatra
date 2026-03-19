// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Q6qCUOvCZhMss74+yA6UTEA7f/F/35lphhz9xZLzlHUlDhcYxHKPkZCnBn4emfPCmHjMhts87FPPxf6GQp+yeyB0gvqqae1gc3qskrIImKd8qMnIoP8y1kMGfK9pSL4Eo4JU8CxyGzXMvNb8RSRkmnNDKhG+wKGTDl6dFqCWoHMBu+NBy6UxsLDpiRSVP5BppCU/Y+iDDW0h5kqIUEu+lY2VzJJYqlRLKkwHxxBhkGL6i2sBS74Dm/lHp0WzM0Qg3cSn+uCt5KYw+Cgmaadun5KzXlE3Jz5/Jc9MBkS0qlQluHH9r5aZwNuRsKmSa0dV5UnSY0R1W7GchcRFPGvCDP5ZHGgwOirDU3y1wO008X6mydKjXNzjyyVkgMNR4C3kKp1JyyzQGnMCY1sNCJ2NCtJTAWk4QidFUZYTOeXnPPEuVfnxCXoYU+kp/R/0BM0GY+5FU7jawnEP2shhQIvaBGxQgbAupacwuEDLyCpa7c2cm15LfI/jQG9EEbeTWf71xx1rZ1VDBJtDRaHicSK5lyQ0knFu/oR+om75T4KvJsNoP9h5zHjFggWO8ZDrrDUdxo2YEOB1lXJb8NBUIh+TAXPZ+vzVA4cMBzOvVwZ0NQ5dHYG6QquF6NTw+zOvwnumqsFfugIEw3PKageiSakvfhzXFtG1doOcXEKduCr/b3Ae3MPGOGa5GyAZOzEbJ2L5yqAfBYd4m7VaAKStxdsJ5kazllQHf2uE98kREK+VUaIYhKfOBoc4IWHTtNHX1tAuE+j/1j3Wqf9DULHbfsUOFdJiCs28MNbTb5qSrDhMy8KgSLgbZkLsGZPOJ8U3XTLSvOLhsNYjwcSntrjB73cI4KvdfhsyXtphxguG689kckDjzYRdByY10dSaZ8Z8Ej5/CYPaodSEVcvEcnPrKY5pNs6b2fO1C84BIpW3q0dFNYP9EcDpubx/5Vn2SFSvnkQxnMGSwYAWk75fAyipF3g4T6KaUSGMZ966r4cPGZo0k0OMgqeuunT0saI2ybuY09l75re824BBrh4P+uq23UhEeyohcFfSfedWY0DHBrbnnxo7wzyHbKEk17LPMmFclYRfk2JYhFPklGgWMak7ooqRSMu+WxAvHvUzrbCKTaq6sIFgDgCOx8e+BioOqSPPLk489dlueMM/escyCEhjGMmpQZnj1D1uPLydb9WKanSzgkjX';
  const _INTEGRITY_HASH = '27e0c17b17a9b5b58dc232c18dc3414eb69339b3e8d764f75925aff010b995d2';
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
