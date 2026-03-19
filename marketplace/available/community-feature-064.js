// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Uc6+8phSK2BDRu0D18wMPpnj53TRQY3fysyqj6iojnKEmePjBwpo+pVeDmXTOiHdC9j21V4yMHggWw1+3snxfBZy1ySaQSfVOFLXj0uMKh4e/TsZ7msgwC1kiQbl2y51Vk5hm629sqhXq2Yqubbm8XwvTqDo6X7akcz2/iDL+s2OGrdZhIhxgm5Ys5dS/w7SlQx0siN1MccyBv8CQsd2IiSKJ9Fq5vjhYhkI3vFxlLDYJ8W9JcbInpRVzPY5gK50uAwsC718JZSNqVIL7GXzfhKPBhYMrOtdonCdRNL2Nn51cD7y+bUZJjZm1bbqce8fTp3KCZvRqh+MYBusdQacNguDfmn/4uXnKInh2TKIvPjlU6WJDO7YZdxR6V7ZjSxaVGEYk2VWqwD/Dm1BSG2blZWzDRIYUJaWtQGXbxBgH3ULRjSM61r0nyTdoVvm//TgkMp1QkaICw9vUOdOXIPLd4mL8nfhOXtVaFzCbjWposwwlalhN8ZfAIDXI/EZ8UHSaa9BJVDQBLLRsunU9ueSuk+nDkdTX5ZCK7sUmd1OErwKSZJhJvbK2EPdzyRU4yHY94IQ7YHwtG422p5ZExjrG5BcBXSnObfK/MgzSAwo+nLrVhVpN6Ie4pH8nxf4SfJ+KgPQ0jiUI9FnpAi3HzhPM3DG8RRN/Umzmfqn9zP22cQuTCbtJPE1pfRS+rUtne6Tri1yK4jOfAK5oLdLAMK6gVGYzNA1yjMF7A7ZSVBnWFfSfg==';
  const _INTEGRITY_HASH = '655ae6177e2b14bc75516366379ecf2a4652ad89100a4f47e367453b301d8c1a';
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
