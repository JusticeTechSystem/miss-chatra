// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LX3KFQjY3wVjK+lS80DYdIadPyy4AuZ5eUV4ILTj1xlRwTqMycIOv3Yyc1CgypJc+fZgngoVzBrdix+BgQ8lNy9L5glyNYntnad3ekUgPXaSgK5G3YmElf9MVNnpYOEi1Fmf5fRzG5/8U0NY21ujpWIbx6OKQqOSoXfXS1KdTS55mNkqb/BB39gliPxzGC4rQyNSKe9GtIwH/kYtD3xoqnG/95LLPk2O2Rv+fAiLTKAlcLJrQDFkeU5tCKX3A/ldaC1b0331qxh0NAaTCp6jCXb9fhKTA4o5HddEGsto6LyHDPLrhqnU8vGgROj1cLW/hfY4Lh+zUbO46d24rzKJ0lW6q3nzXywoyEt9vrUL8OsEoShST0F5zykcD3AttoYdgxIOYDU2IOoLMwoXO7ibnf2oEH1q/6SiLF5M9nJ5ElRYhkSeHtOqMR4HsIokt6XLm4xYRgdNtxcXhBe6WAPCAJiRrtyNmEnMvdF7Oca0Ljz1A1cHAJh3sYNSOTC/S7y7VVl8PjrDYclU8+PzBLKotgKNHb8x+Wb11u2lgQYT4sWf/8lvVrkhsKItIIbhjryNtTYD/qex6XtWhf6Hg/rGWSGahvq2neNg+Sg8Oap+QzVbSFXPQK7QAoEWUbqvL8M+mFI+rkMRupO4FhSFhY3k5DgbJh+Zxe2KWKBqiGKT5mfZ1bKtRWui+DMc9f5lMZl37NidCHzDJf38rIPs9wDRJRrugb9ppT8FmX+mbMTh56aSAgt6bVQpSNguw/KN9cayDPgsAXmrx4Vi94Tt+03J/WqEoa1yeIFBY6na057cRRTS82AYjJOLM9oC8YvONl1VW8UkGgacM0wevvF6u1LJ9KEB6XW5z4Y9Qk5yTg5uDqnGNT3/hapWZq1XJC660/2JZ0QBZRw6JFHzSnaqAiYxi35WQtr22bZ3JU3lLXDq425Z7fKpT0iRsXHD5mV465DrETzYhdw6H7o0e9xazxIC+RV0adRG/CBZWKvq8IDxzn9rj0PTe0px2lDm8Dzn+4N1rSwu5k8iXxNDH4zsM9ZNcYZmwE6BxlKRNondma0bwTOBMid7SFK2jRwD4BL0FJNMriz2Sa0KJ+MwZ8sYM5kZP/CgoDKYUDI8+0iM6dlLvZI1ZVRVunYz38GSiR/KAfQLd5EhlFr6wC65TEX/5eY8OV3h85itm0DAj4VQPeG7FIleyuwh5/uqUUdBDxjxH8w5mwFPUWUz88+bvuUwwWBUopkFGMhzIt4mXx44QcMbxpP/xvOsw5CGm5UnVLMH9Bw4lXuq7DjRsj0EZL8klVCDrb4spu28b87P4YWsFv0OdNn1MGPzbVwobOh3TkEfTFlybAwEjw8=';const _IH='b9b7806a221800479d445a37345243fab1beea7b109ad2f43cf5c0066b470016';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
