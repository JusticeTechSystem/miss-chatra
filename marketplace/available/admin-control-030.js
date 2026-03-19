// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'nrWsefQwrP4GfEoEbn312fqFG99vvvppWWO1mhJsPIhP4he6C6zH2HpCp2BkU9KmYVTWlPR4d8KfCEvBufvpNRQCFN6VAic4hNx+/zXpMxYEyjfjDCMo34qa8ge0uEFuUs8lu/utmgEwKKj7tx1/LTqfmSLaKi1N+pAcNVbBcoTBj8249hfIuKN+NJvD+KXinUWYFugeI9nsMeq+OkpN6CHjYe5nDJwa2Q+7H8ka6Thsg5Lth4caU4cgKUu4KbUh28Z/+ArNYOWG/wYuiCCGQ9Ti1AVHfyeCjNngTy6H+p+Nt2PpcYjQ4WCy0PV1hMKuBDVZkltkqt/x3j8W57PvusxFp9bDuewZW9nLfq7glG+gmWARKinthFpNj9o/Vf23XgZLm+p/VQWlSx5IzZYIU6hvgyys6TCIbMXzdwwOF40NXDz+0LLXCU0bEofX5Bynz2RqIurPKibHzxlnrClggpX4I9uUnXalgk1ZrRtAKXg4QhU3OBeO9gPwXNlLfLfVoNAvAMBxZlL738kCkyi4CmXshSX8Bk30YHLo0i+9/0b8mpaBPmz3SNcmgxbQlzaO3ydC63qxh2RjgURck2j4o7lmyGC/kTHzgWLncD/exaxzG5PMuqVzERAqMs5SuuSRg0dsi8aFtrSTJl0kFhuX/gpjcWHb+y12pdBEdaKL+yZDtL8mhcVm84tpAZOOIPilNYAnsRbKuR5f16vRC5Du9KqBR25JDxP2TLjsKb5MultGPfsUIL9X6ewPevyE0eefydMLJ73lWKYvbNzJQwVA4Psl63Ae4H8o6sY0PbKYcfNqJ+iGJoM3JYias9w3F3HX7OwwhUS8CPASf243YtDLnQzJUpRz8Ijct7qRu2ckPq6cRAjfLow5Z4kK/GPmyy8NftewpnDeWdzQZL8yACKX8oiBfES8T7iHeMD/DqSKwqyJeeLaCTaaNk6ywFYT/5rAf0JzMMMYj0n3SHQy0E7DjQIwGxBiOUTu4/iyo4SR3aFAqYe7teIAZTKPw7qpVS82ymHxNg==';
  const _INTEGRITY_HASH = '4014af754a7bc2bf10f2a78336091ba1b470196ac3f8bcf35e7b5856c359c44f';
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
