// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kqdnEA0FG4AuZmTJ3FlY3xM4OruCN8ss9G4mNW+QeCI1gDOj2H9V878ElEf44FugkoQYb5LkA+MO4Z6fegO8s7nYQuJWuKZquq6cAkPPoQqeQGBu1gZxiTia+oAPK8GYoRBMiScCxX31WjnAaH0tqg/URSd3BRD+sCk3nX7r9/Q7kePscOlDv0dhWq0UJeY0WMVvvwqgteDez4HJOdArFwbsdiPK3S6UNL+mxPws3SXTWl6IWXipUQSYvBCVqqu3sFFm9oq+AWkVXW2JHOLtRGUH+YIZBByOYJLtLQFgSItn3A+a7CRCAGSvnFaOAcIMHEnb/WYcm0ATXrao38ZJ4Va09uDpYPFg2IGVLRYdk6DA5mi4QSXrnf1eZUCD0fOJSxtSHP3WOWydCLEoSYiVcNDLjszybiGCk482fjmL9JJYF+PBthlD1HC70bTv5qfW6DgEvlHDfiKIFum/zlzckBcxdkocv9wErtnBtYXS0CeuNenVrLeCjIaKNcmRbaOV2YOdXQhpCmZ9fs6B6fk7Dqm+pkrPHu5h60Zdvy1tvgQnCeQwdoZfirkCHm8wBPjgzgA9lMgY1KnyE+MSpX8MRTS8u/7TKD1F/jN1yLR5MAQo85hy1nS1xG7lMRk+womVeQxmbMLaBypYRrqH3SjHrVuAWf0RySeG0G2Y0ZMudq/lDnRs2tGIV97r2EZRqO6XF+eqNk53DfvmUjVwnJGwSN0aj9rXr+3EFjmugVjbbgfQpnnzs6RI7k/Gly9TAvbLssLn+pE0FL+idfSZsR5Vue/buLsD/fhPTe/ma2M8oBLQU6nnnA5x7KdapISv7TbZ97n/ePfyW8RnbWPYmm1R12u7UtaxG/2tbjQjpa0/fB44qWrud57nnP1OnbbTMoDQSQg57XHzWsampNLgKIGGPsDS/YQuzxjJVcMVftztFvHVTtsAHIlrbEqRAHbA7wlyQvR6ZjnBQb6PtxQNhdA30Wl9NCzabRw4cJlocFX4J/wgFQ0BFTp6fAj4H7xOiqpLaq6fS5VUu2YV8IahJ+Dyh+CnPnNjGZaltneBjb5T48epYYces8TPM+PZ2z+ZdWp9DPvKwNnadPVGLGWDIxpIwTOWvhBrxG5EkSZQvABd6obJI5U05ViPa6WRpwg35aw3XrpWCbvw17KXDGsIyCyznAzPIfBSX0UzUotP4dy8thzbvLZ69L+3O7ULXutDU2zkkPLF';
  const _INTEGRITY_HASH = 'a87b21d5b141177b0a9f56994a25923fccedf265fd2c6b47b5a8364a8dbc8822';
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
