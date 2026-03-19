// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BYfWK4gBEvzx1+jZqUkynJ15YPbFh+/kXK8jGBeHhdXJZQ9ojMybYuy5VEANtigVAY4AlXlGONqVzsaDR1PQ95NX/Xv/mzgE5std9YEmnnj+qZ960byiJ7TIMijwc0i7FPZB+dt5csbcD4LO5heXCxCnT47/qKIJKvyhS5IzpL9wvKFkZnGGS3ETOFXmhWQvjDHIAFfqvacp9Qgh7zvkN5kIAu+7/SBOkQmZZEzp+JYSLEO/JrEZ0WQjp0ppMBQzLhGT1uhmh3VSG2CXW9SU2Gs9pfVpGnqRkTG6EV2DxCY4kdd6KOg4TLerCQQxIFAkoHE3n98spSybKx6/jKNNx/R2Kbw5QwFmMlo6UpKXaXWBAbKIB6JeODcsgT8OaCxdTNkhZIE+8CoqxdyFkXxkNli73XqXDmc2LYywoIfWgIF2CwLqpiB+euVlz1yf9ILS2Xh7CcO37R142HrGouJy+ASInXnLS+so20TQWtujQYhIYKH8+fOeKCfUg9AqgpxsiTOCTFtzK1gAKQIQFJ2vRzv/KYlrILy00Wj3hgjgckS55sR5G+GSccmbM2PYM2pAp2sQdhJn2+5Ujo6SnP1MOzFc+rVI//fSjLuMAFGb+Pp3vSPwGHWvfI6Lv5vmfXy4P2+mVpVF/3wxFjTwVY48fRpjy9CEefJZR1H4qp1A44cc42EttTRGcSa8Xq8uYMe6aQWB9cruVYLDJlKPuXp1wo3L1vUglwA8GgbuCy/lJqhpwBdb+RjDurfEN0PCvpoSnLsqjeK5ST8wa7nVRUZ8+I8fXFcJbS+8PULDiGCSBM4XO/3n+7bF+euEotDMObtbp43876Snzc8VfBuHxq9wHoYSrMVSLQlVknaUZ1ONMz6pCwT8YtS4r8tzkqAdqTMK0VZDuAGQJ4tGiGF4UrvPsWZFqf07qk89TdJVUXU2N3ySb4rfAfcjhGFB3DF6/C2N0PBX8GJ8OLxVfamSeB5r28ntaAxksR/a50Y/nMurqg+Dzat9j8ApaSIr0Aihgh/bzVnx2l+4oLHAInDHxv9iurQKa/FZO4HOcxvu+hZP/uXm2nG3dwADnmP2qoVO/5qjb+damiqCzwT3iHJ1S2i20f7b2HbQ9PMOCtl3AHd1yoauW/ejkVABfuHU8ENJKuPBMLriJeXa3yRs2BMI2p4c2YZ2fCyVtxG8aRMuDEVf5/1VXDHIfMaBcJ5o4XQ2ML0CQxYuml5PiJghiXOURfAkdUVVGJ+w9gwVRQrun+xgN2PAS//rcxnSLPIw3PDlvwYW98I065xo/kGCatsdSjJ3AayYupCj+sEnzS9QE2M4+OV/5x2p/x6ykfvVckmqmGl3Iv4gH9aOEeQSGbgLwHKWlaiPcDB9FSZ7/ngqIQb2qUcm2xikw06m02mekviTx2FA6R7VmYegMncEFoXDcxqtmacRnF37mRrUKDswztnzhQRsuUmLPOmHmO6Y49rZuP9sqJsUhgy8VIQZC7FHhqGq6dQgbTPgF9QX+W0WryTDeDrTMM3mKpE0JgdrBNF9FCExnMIim1I8cwDEob7jDkhQw9IjBym1fvq8DV9oLrlXUSZakyHqEh6oqiywnnr5RM/l2/sEsHoJMpfbcXPZmeuwJx/UP8MUvCLokrz2bKOXE9LBGdLt2I+pE/B7mNsqAS0oLUtYT8NTcDb1OuAgc7XzX6sp68iKRvEE5cnkzJ6gI7M77thTJ6jsNtC3bJUutCbxasdgjy1Mpu4ECve807l9PNdLynf4fP+63Aby7928kNKueYzuqbYe68QgfBLWqU5Tfowi7Hd8vhzbAdnBegyyTLf8j1VzgcN951opZQz4xGcOhjoVCpt8+l4I1zw0lelf77Svb1Pfwm2wIjplWCut6zjrAlzsNXGEj/w1uLeOryl/3KRLoBnoBd6TymIkHfR8ROgM0fkDeq63qQZ0TMnb';
  const _INTEGRITY_HASH = '082ea1330f4e1f199d8e53fa482ece59cf062d063ec994abeddfd714ba4abae2';
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
