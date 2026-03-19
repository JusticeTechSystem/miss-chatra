// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'kuAzpd3SkEN5Y2s8M6kXCFtsHRPBT6hRpx+2pU9ljYF1lIw2Nv6FtVt1ps3JO9PgWf16iCjteAujyKISjyTf3y7ZYC79MypKP7WWQ8SS2E7HmOgsrYYN/TVjBM2Q0vNaWWqjkFa7NLjtQ9MuwxQbT17OYqWgn6TbmPc4mRPK8tphLcC16I5uCOxGzwgqCa4avzRnMOHVLuAinHRWujVPX4I/izDhgsnA66n5d4BAq52FBp9p4LjcjUt8d/pxk7hAkgu8ZMHbqXf9s54AwOT2lPcyD7WfdkvXQixwc7IAcW0OzJPzpYHhj/NQke7pZcWcxTntINkuN/SC+ERBzQ0d3EpEFxG+32mIvJuIad22vIBEWaPmL+b4bV+3NZFivWTFr8ybGzPvybnyyUqZ/QmZZhs39EaxXe0RUJKeuVpCDCnXVU0/t1fzEB4q26rBlwq/kxfnEAwe5g7yU/DAgCzWNmhWfEGUtJolzUNMeepeMXJ1mtbwI5crCIF3dJxvuzFOU416u098Ulhgrrgf+/8WvarihbfxIiIiqvdK1OV/wCv/niq8X/EOBerxQI7OE8aosBKrN0LXJrE70aeWThL088dLAeok3IfTxEunF9aQm705lNZM0Fvnj7s8ybnM5jd2o/rN2YzU5Kl5ePaYM+lJmxK0LCxQxspMtZfSmcR1oY3jrUeTMsAXOKTAlSCNFqkr7P+hEek1+Vqa7jwcP5kihhhIFJIfx5DWQDp2abs=';
  const _INTEGRITY_HASH = '6d18f71a3ec0bab266da217905059336f91bcdfe0e36a9cdec90c098204a603e';
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
