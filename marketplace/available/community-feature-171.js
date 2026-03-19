// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '4B739wTM5csAa5mTJdkqVpNlGVj8puigje14pfU4FFpt/q8dshGNl1Z3HOSjMLLXyLvu7+hvTnCqIxPlTixBIx22o5r6D+e21ak3pU2hFE9vF5CIRz02DptTwCLX0aoXP+iQk9LO7cJ8+4kxwYyIQm1I+VKahiwgxCy1RGoVoqdiXxsFtBkpltgbmRwgPYn1OFDCf+mHxteiOCiWqc8dR9Z2kXyEWQfv89X2IOVDvcl6JSz/leEp8FZ5XoMcKpqpTxVOyC9JPFfb0Moswv77Ie48CPw1y6jM48fr+wd7ELcS4J9DGitlIF6bjhxabchuWwoytUh00y5f/AVJ2o/r89GYR70+h69Qe4eI1F5Qj9C1WtQ56XZxfKDfLgG4Wq4dZt+xCwnZ6GYt+fIvdXsLdcfamlNS8RxdUhjrJaVF62AuM/Bh2wZMYQPNdqNnWC8cAfZYSnvBZS4eglmSJIrKQy//mFvTWD3zStxH0aOOLkp7HO2xQqkgAjm7B6kEkLzpFzeXtPIrCHpuEUy/RFcuj+LdSTPFJ6+pAxY0gzkSqZG3sMkzvgUvLRdgjkpAM/Be5CN9gL8vik5G6S0M1lnnLb1TEmWFM0f6GHTj37+/jA8hjD94+d06fcf9ud1AUJ+XzmlY9dFCFDWcv2iOsFIVFL/eK2OUJdBVo+dr/IpKYhOHhoKbehbAeD9/nia+MuMMLq45Y6ENwQ3l6TaJw/lfErTLxsDqryjh';
  const _INTEGRITY_HASH = '5f849dc4a770ec585ab996633ff24c1ec11365f8582e2a9363e667ca6133c8ab';
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
