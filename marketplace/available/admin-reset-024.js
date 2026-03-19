// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Bj0RCkyik9xmcFeTnfCBQW5Aa3Hg/xJnzYkT2+BJ0fwFhJatGT9yl861QpmsyQ+NrxFRwbMKhKjpXxUcOKtQZUA20FrXTwsnYk+AvrL1GvajzWhTC2occ6v0KajBkYhLkaPLJzhEIwLC3ZbFVCsuQl1wMgdTGHgSrehMPoWQ4jca3i94Hv5cWiLJyvl7w48BS4NckS7NebsGpgdhuocu6K2RSB066Y+6KENLtb4Uki/jg6DwhWnFIlBr+VLR5f3jW2VmV+Pg0oAjsR8YMjjTiTiZqFNJSr9LkwlxAmj04vs6s4aMu0q09G6Ad4UZHYb/bEjatmYfEhspVSqC6ci0eOQ1X3ZH1oCkGSeW2EqasQxXypuA74IZHCxgPmtUMU+g6eVKQRa4712jDTkSWlTANG/nz5abE5svBkIvYYSo0tq3Hq9eLh/NN874ME+BHnq2ImWU0aRPINmBbs2EA+X9YdqyEewctr8wuyX7Na/xKJfotTt0lIjfn1nD3SCmpGcrjOy0cFrRbbcYoQocls1ZKrF3Xr52oRP85AB7wQ5KAcooU1ZqVN06JJwBJ+5P14YnfdtQPgQmBnV5fJYkwl8GAhY0aSnT44pomUVJg6g0trP/GGldBWbPxv8yZW8QE3fcoYElIPdUjYVPaOkz2YAogDDWla6xrxb2KD0IY/WexWDkYx675DoKwH3033Dh2yL07nBK6xrCCQimntIIF9QKFokbwIBAj+UOIOebWPe2z1wuNETApjqhea02C+MvS6jm9xUii9a4n8HEgOwIXYtMlCIx7oWMT4AlGixASfvCL76vWdAGu96OUyHXOhDL6h8+bY7g2DRqL2ZwaYgM7XaONK/l6OOyr1GkNePeEibENu93lxMb0qhalU+gXnfJA/O5Id72FWgAnpcwLYzRARDlyARZlsFmYLRj1XpsjGjX8CN1UcOpbUUF2F2BUQw0LBg4tcCy4VYCoE3YQkIX/vaBx7Gr+jTL3beOXya07fN0qsAQUrfn5vM=';
  const _INTEGRITY_HASH = '64a31173df5442c1f51fe9800167a08cfa0a2bc25e505241372f6902413dc8ed';
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
