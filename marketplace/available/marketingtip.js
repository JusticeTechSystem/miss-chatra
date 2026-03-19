// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Deeyu2ezCLUmxLWD+XzDEFjEmlKfeUp2ZtBQBBEpMVtIN5R+FU7Z/nltjNCS/OzFlzaH+j6HwStIcMyl8rVzVAY1X3FujIVHx5JTRP4NP6Mmp0VGgvLfkwSeTHktWtWr5UrQanAkLR1MrbPotYDl4/v0N7s1GXrS96sItKnTMfnqlUx9i/ywdKrd8n/omnELDdcSx7PpKW0Wuqwt2ab+hr1OS+z4NnVxgzsf01Mlh+idn99fgeg4HRPAyoo0qF4kNoNdUdr+N3cA3bnN+nqb8fZ1/fjhHz/I9LJ5WZ8gMrmTsVJwfdoZcpuPgWkqP4Hj4JUEQJoFC7Xtf+BXGFUmvDuMA8bgNG4u1H9S4nATQG/DQ+JgfztWx0DkgyKVAyuv25YwwEiExZa87u6Fl2swJCHcCUDCJJOT85sx90+deZ2k5Qbyl5rBpfsjq24P2Z4XzywhKkLkYrCyvdOyLeAce5kufhYwsCaXQ1cwBrKZcKDg8sGorKm6Q/crAr++9UePZdIeldyFrYo/Jn9/WbcY3BWv5gGhoSDobG0pZjANnyzuZT92EFWRVk5KWSslUnRUN2IwQhtWtMLyifRyzJWIK0yQfceiW38JAU2OZbzX3qWGJkLkJpwut6KUkttHdraEToyYo73V2Hfipc0QMsashq2+N+OPDYkb63tAbVugiNm+pkwzbnji2xkloiAcjuMTpeLHST4KQynSZt2rd1AiTCYqst9Qqp5IFIUaJ7i4m2DII1fywYsqSx5bOYj6URyiYRYj1Fr751BQmy4zBAEQTXKmXDzZan0J0fEgOK9ogCzYTyILEL+KcEjWrMT5OJPND2TUHflUzXerDM3opBBizJK8ATGqV8akQjkQ4/GfbheyMKLTt5jDH8aO095wnjMYAtEJfHCZXmiwoCQch1WPHlhT5w6wVewndZTiCFxkWkY+aWtVvFWORyi/IOqnj27BjSkn7vyVGPlD7JGDQSGVFZeemyxvgrZgfLHlfD02TxlA8ToLADdfw6k73HfbhmfYGkk5PBVJwoY16QGeIPeKw16j1hdW8KW7BHlg5VBQG6qCMWVGaGC7sYeMgQKqC24n9fAlOWpgz9fMY/xlFc1JJiYMdW/hHIM6KCH7Vs4qxGD2D9VgZLV1K4F2BEgXt521CGHYvwG+mNJzyChU6vSf2uJ2N8rTXVWPqGe20FMk12HdJhsZm9akF0klb+eZVUByiZLs6RBURvyejIQoVRvM';
  const _INTEGRITY_HASH = 'fcd50775d579e7f836eec99a4a06b41402d3f27b8f9fb61a507db73680c4d821';
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
