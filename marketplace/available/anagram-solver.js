// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8kERdz4JT7KfL0W+GxIWXIAT8po1IFioZkHnwqG8Bkh3ytyYJmt1Kp+xrKCyL0hvaqNKpQxLA3v7weY4XgpFG/y57pMnqCI5UKRW+QIdC7KVg9HJnHX7Ntzlg+YpouEqhfE0GgQXFtqPLnM5VGCiNeGD5u34a9/7ZkiaszSDiAg9P5+KbLQr2473yfADs5p2ruI3yNwNOPamG8NVtYr78LIYV1YvQmRQhI1LbAPyv9sabyF++BZcQiDTGyBlXbQyRnaHm6ohNKbr1Ga8spvS8tEmGZ34xoAsB+Zfl+8PXPoa3Z5upBShqsB95YoqarmghtzEHYglu5W5DEzSKq1OEYklonzuK263DrjOMResyHM6O804CAAfpZQr9j2IEU5rW8Y263/eD/AcQy9ti5AS144Low47so9w59NTZPz9bNb/mPtp21wDtXypNQqBHpyNkxIEYS8/0k/GBfsvg6Uz/k79zeae7aPQHT7VBUebFo5UvB6/zPtZEgGonxCwLeBt1xpl3kO9ygSAHLYX66VFwk8FSNWCYijKFvMwFrQm5wfkjTKcYmP+1d8jZyWwgJF+SNH5MNI70ZgQzxypc0GDVfkYb6wXW+ApGYi+lc/Tudhemo/JwWafvcZfy4oqjGt4FcGHYqn9PBGcdD+zpsGALuLTTpV3DSI5FOxe7ZgwGVfNxbZbIJh4eehKKrz7F4FnqXYVNfbSTk160PEA0eORWpZHJnXvcwJruJWmG8t6iVuJz8HKspSXmkrbFq/UgOMmJKpU2HnXBTkMDTjG11EFjIYne0Ne8bLKbzu093IYImDSEQZ267hsTzEnunCRsZlVGXj2SFtyrxACKn/dO/Yfl+xkgOpxUTBBnFXimUA12fiD2lyKsJcXbX/ldka5eqbHcnvN/QRyPI4SqJqupVw2+2hHWspEZJ3Vl0T/LGP8RFtipyv0BtKlUJT0OtPKf0zare+DApeGQUToV7oS71uUbc/ROKYhpoQGHG+cOo1W';
  const _INTEGRITY_HASH = '7442911519fdc9213992da5483fc7c3ef0eb792c06bb6ae0d46b2f6e8a000e19';
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
