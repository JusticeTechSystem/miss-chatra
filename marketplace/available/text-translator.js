// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/RgHyz2axBACAXUTlN6UDWZ1lroh3ucMP9JGltl2ScwbbDx/wL9y783YoSKtSB+6fY+BBu1QjqPnbTDAnhV3MwUjmoP4PNAQ+CTNKujhqyfTFTtBW4xS0Y37anWiTiW/F6MgUhSEc6WNjHOaG3pKBWwLQ6p1oBvN81ktDRVYqlsJ01o7/juyyHCFTfvvYExi5i9irKxxger9DvGSdYLNP4mYl5SoqsNoubL3tpNRMOHsvGdswalHZDHRtiJOitgarbpgy2NHpG3Tw1EIleOrt0R51wJ/VdypkEOPhJ3PUeUB8ul1j7S4xNLuTUU2Jw/5mvUCUD+WkRny5m8lMTTZiei4hLIEVhPamCe6HPEG39eo9BuPefEeNGC2r2yO0OYy6a7tFPr4zX0/DM+ZnkmMW6DaYktgWTtDUqnLATtRiyXpyQnAt1Hk/tvDa7qombVIg8zfSV8Xo1wJd1bRZGPaPYjFMmZ8GUWr68q4EVfmtkjOyLY5CLgfASGeSoRKMZkRQ1eZMKuwlUvOqZC8K/sVXCBVhnVEAXJlpNAnff+Myznx5vD2Ea66V+bvW8leZmUmpMAu/x7GK1ZxVp86ylg0kipC8V4y+2gIAAvt/wBKYPUy+W0BTxvYFV4h0DomHCTQTMeoCgGj4quZNOO0VMeaa0Ji+ocl7nWDLYzrAkjUgXfiyAW+Six0hsQSJ47onSzDSoafyFsBXPxjXKh/EjkQsn+6YVYJ1+/4e/6XL3kVFV07n4jhQyZmoN+lYYESUSoJ1jdl4SF0YH9YoQlF8CgVuiuEGArTIp/V8LxsQoDWKRht6776MT8egYYKsxuCRC9Cweotjuzu18BhRuuhkPO7gXoyduYVBdwxFD6F5ivlpns5g681GRD3iGrBxl8EOgMddyKBD1o3sLlfAod9GaEciiF0GgC3FzxjN4k5FC/NvJ/eJHdwavZ/rOhxhH7apfKOG0WKSLPhlgn1lDMlARGppKihTIt+TAb0m25dOfX46621GkGz4gX3FeQik5Jz7oI9v/IDWJQ4YVRgjYdquGF7wfVTTJApdZBqWif9GqBj7qInM6yJBEpKW1R+ZQ38mX4rAfubkR3sjI62oxYU+xPqsS5lasr9BQbM61YM8lmp/di8pTmynuuVd3Nrs2nADALXQhy+w2rYRTbXDIBTxXelnpfY8Ujcxk22mhkMim1+qXiIdvIMnYuCUdeXgtIj2hJcIKH5biGPoNONDg7c3RFfsONnzXP0yBBtTRy9I/YQWGihcelsw40af2PQXoGCgAkqY6J3DG/r0tDIZTgXwaCms1WDRJH4iK2pQc6ytn/YNFkQrHle3xb2hERjsMrkh1G3jsBk3xJY1kviwfRxCjQNRrpIyty7oo6A2lgmnuQy67/hKyHbaBNbMpfI+HcYSFcC3hyEZDH4Rtws2y/OpqRKWRAKd6sCXChPgd9Ry5ctXIKAQO1cXF2nXJV/btEgdsw0oTfQrBC92Nne9eupYGFyOYy6Dn+3Vk+KK8fRvRQafWQiQWizGdbljqTKxrP+sJdoC/PPnxjBxhCa/Zilx2JCAB5GGUyPm7UFqBTPPp07+jsTZq5V/J4Pi8SGM9lWhkn+mI88qQPUhPntQK7c6viTp7hzA7m6uMeNrJtb+sl2LMVM2t584q3HHJhjaBGz41iVI9zTDwgtO/ISTqP4V3pWjvZslsRWGr1G0mb/P71tZEUljQ==';
  const _INTEGRITY_HASH = '3a9988d6f41d95eb0fb9924c6428fa5009a9a2900f544c0a5d99a7addbfa9095';
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
