// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SejCx7LFnlMlmv2wni8DsVxhG8GNIy4GeCRH8IHzD6xQ8DXg2oJf1JHT2ApZlozwgFvh5ww+nToGJHx1w4ZEX4WFMElYhifDMqwX82fKKkoimPBsz609DGBXeJYdBEBAq+suZbqUxs5rrqxWLuqLq1OaZMOqjDmmgysWPgSwEv5TTPpHyf2SfBdb++src5kSF/0M1UHPGF6WPDFJb2t3uj+3O7NND3VykRe58spHE0l6FNutJNnmobf8d2lXNvV0IPG9diKHQa4Fwt2XYUcTXWqhFqf+qaP3rnFF2oCB/DPHYqhvVLTRoCvi+WwaiwlHtaY/h7HjQZexAiyw0C4xjZgs3T6oMPbq4VDIoj5cTiEd9HIfn0ZPohQWQbK4q3Wi0lFrDs95qpQ8XZRFzUhRzInqgg543n6UX6UQXhE9z7ncUDhoxQBLuiRkDGYNj/NUdQSv5L97z0D4sV487sFcMxb13Huyww6PuBNjsazycPgePC/pFH4sVVgxHNVw6bW+og6PY026yx1mbtS3x8zPdVH2b8CGA2Q6CC1Dhh9kOWp5LAdEsF0Yw7REn+v3rrtKiUR+lCC7Zf/IJh2Dgf9CBVN0rqQUIts3bK9BsEzTdHBO0Cg8uGoxXzLpydYcZ+mn71EFMNMwkC3GJ87k1tN3XLIv0YcyEfmEpbcdlOZN77mwFLDOUsCqQ/F3AIEOcWg+GyPwIv4kEvJyq2z6heQwx4Hw4nwKZhxYBQfbB8gvLBCyRG7Yr0ekAZKHt2VS5X7Z6dV0FoQMVXXL7zzLA9KlOGXUdxNPipCF5rh88I6se1t2KgQRj/et/Ur3Fey8kqUhjhWjGDUDZdvBqd92VRM7JOAL7FddW/SE7DJfUbGt8LMtJIY2TGSR9dLC8GCvx1QY2qJ/Af5dqgEmTnTB+PtmGN7bloyhEllBZa660hIAesDyS+tyGhk0Itop2BWxtNHUitIvhCTuVkmDDjMr3XsrETQ5IsEQ6lWhqPyxjb1KJcnt3llvaLDyqvlKT01SfLrnz60CK07n86C0hfcHUk93USz3Q9eXEnwzkuuY/ct7OK/9d1JnpKzkjY1nXHkDAdzMW9+S2LEH3HVWN8Xs13YhHRNVxn0avllOScgVUrZftrJqRRGWPHK5oFRa4RWshDIgwrlvpHzVnbPT8TF+of/Z80D7XGz8zFOk3B0X8pA43feG85wQmXxkUDatrXWJNI9iBOW8IibHEV/sBfjwsgU5oSNuN63QtrSc0Hwi9xTI35ebFwsObFn7ZLo1+l62gYVmUsOecNmopadukS1FZqLr+QAAiCY9gkqGgtpRtZatDYDtZp1ZZ/zQAWjza79AiWLQEi2e8DD3';
  const _INTEGRITY_HASH = '0a7ede66ffd87e75fb76404176cae05d53f729d5a8218a3e7f6699857d0c8052';
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
