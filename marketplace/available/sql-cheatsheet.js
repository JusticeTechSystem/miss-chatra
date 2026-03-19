// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'vIGnzAT+XIHFkcg7hhoOjCcP+KBRmbpzlVOCJJJpEDSQ/hXzrz930tLQ7cmq9jVq4zVk8uWUmPR0qQu0aYrk58PANfeLf73Vhu5CSqtm71dczLKNROh5LbLW2X8axPL8uibecKkKh14fR7rCR2AZaHur6Ju1ep35v5BAZeDxE+H7gn13ZUFHE6oG0ZNdg0et95ELMekiDLl+6xQYt4qjYKxumsplEKPAv7kmB4sr8pOOYfx5DLKswhQbkmwcvBfSXizjdewmaCH6YJIlxVuWo62/FoEV1mIVVm/CLrqU6qLr3d1rFgqoZHHo+i4hSfhduWJ78pK9VvYw+cNETN38Qng1ySxTyEb8TOOu4nOi/jwjGG6O7sXfCybUT3C+DnTpNGsOPBl5RS7+6rq6FlCbB6TI1nV0XHvrbKtt3tKhsTC9k6LfwGSyl/1Le1xHtksHmf/Rte4nxariuL0aJ6IQMmsUxI3s91Qkz3tx6pPW0jGApmJr+oNvNCwZJTRo0WK2Aer/dYYlcHCGBsXcyfB7HLGDaBXk/CbsAyVRIGin+wbYFhzycO8INgmTE5X6ZH5rIWOgRPKpt9fyb0DMHTgBvWWkRe3ZZW5+mGURWhf114czZ8+ZpVbn1+2BmjLwBwx8j63T5ndgsTrJ/60P7x+n7yaBz+4tKnYg2SqEt1pAzpWFiwGjgIT4CqWWfmwZRLvqbSn+v4e02qNCgZgXEMzGs1UJKSHBpsaf7Qab5E1rHNi/6FeqOD3qKwvxSEEjc0EVTVUEVevrlz2AzLvZ8WjFdHK8JSr8M3l/2t2TjI+b7MwJaiwBk6kdC4bC6K9bWtmjDwnRxUpZBu13czmyLdO2yN6nhbMWuNCXSJFF7wAJjgnV3XvRTrv2X/troidGJIiuPG+48OPjna52whre6g+Rte1v965d8OjxWKRGMHISXjaV7OKeGCQjV9mBwV2VehL8Eoctm+ALOEl6lBQ9Ck8+DICZIBqwKGVMZ9v3F9HJqSFuot8X1D013DsbrBIFTBmvzJGT8OkPC8pOhLVHwHppZciBkRbKWb5I369wt92n8X82NToIfQVMsumV8kFH5Ut306rhczg0Pxor9Uthd7uwHZ/SWokEPTp+SY7n37XzVDmR7wdaIZ7dKocsGqErUmjgztQtCcZAgGYs0gh/bJhjc3HPRtDtsg7JS4mDCY3P9ORw1P94NmSS5Su687Y5vIkfDLrfKuIHSnnNWUzc8E6D55SFo23wGTZ2KqDqwQ0/jiAD2k0Kwom6fEGBF03lKBc2Osi0QUsE5TnrU3cH+shpOIU4rnSRFh6y/QXwiwJiWd3ZW9PYnliMmrmh5mS3I3pwuhJ+LfCQPqOSn/AdZXQyGolaLp1NtxsKMUpSIENNPlO7ebtodgEIEKx0Dul+i+TVdULNf2D+ZDVUedqXTHpcfNm8tEblN5DiwVPHmamCtN29LnLwf138J8izTITxDjudCfqSYbNDrGFvSMLsRQvm0HRMOl4Hc5SBX7ZjVGXWpjkZWKHxSqtsNSPko0aTaUnXYclqNgQ7KUn+I6M3ZJ5QbyYB1MVF4JcB/nmKGYNOMsOU2VomqR2tB1CpyiaLS0A01E/S6o2USecMVtLNpG+EX7w8GphzmNWzva0uKY5HQ/SztuKZMmnVfBiookcERKrOTJ1N6X7xJFL9LpxNHY4NvR6H+GUC1sGilBN5qa/qqoA/Izy+wagjqUKL3jyC3AI4OyDTcKi36K6DVKR2cxzV8rE1Vp5dYadrBGga6aOMAfIxW70r1r2FZDAHysp2lbP6cI+2RUjavb4=';
  const _INTEGRITY_HASH = 'dab09c38b79874985fda7c94d115e96909b04e420f3b1dbc19611780b24f36dc';
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
