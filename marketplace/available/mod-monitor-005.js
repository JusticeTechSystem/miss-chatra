// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J33JjymEvnkEN211U/ltrOyo0S8HI0lCFCyNFvANV3GcdLF+SEhbylkeHgMPKrfZLVG8GSzZatSti5+2np27dWY23Gflxj4e8/LlbjvJN48ySJm/9pqnzAlOd1GMDC1zq4w6wTXw3oTEGQypqxUVlGAtE++7dmDxPUNquMNetnqEbiHmJwuhCveR8JLH2bEk9otbELA/x/1CXUrtpgMC0FwX4NgLPM/CGszah91uw/GTPz06G1oHj2y2C7gUOWMZKeH2HmCDMXeRWWDJyjOZ9VKBfCurWprK0yiaok/fcw+60xPBaLRCB92wcF32FKpVnH8UeU0ycNcp/MCasG4aueBr4dAm7z6ELWHdsVT4qhJpfMKT54SBOb9igE21ffuE3GkZOBrUx2Qww6uDesKuSRIm5qaBZqzVQi6wiyuWlnj50tH8FX+7+FeuDTa0AfAWXkMvI2PfGCXP9A8QnEPf/Og9fT/LZA6d8GGUpQ7iImL27S6xYaNfhkB+vZyLIth9M5FE+d1LxSNgJ07+VXhYclFxpyHKEo4V5lXIP9YrP+lwaArWdOhytoKAigKYWQ7Wk4/1z97LfQyQMgPbK3S9CWsdibFEGlYyCmRdWnb3iZL17vXUnCwOheh2LACS+3eUqdEFfdctIU4JdJJAkeYBHDi27Cyhz9QHNUx1tvdZk9ni7Q/7fWz2cvTKvgjOqrRjVnE98MYlYvmcWTl3N2x7HATylxGRNVN4rAOK6PtzSZpm5PxEa/Dk71Rc4lRc5NpFZNcLB9NyhJIpHvSE+yHknno7wq7ZEmdtgj7qRoy3QqRZiiDCQIISk2g7EAiMFrnJFvqH54KtELdHAyy3V2tKB8o2MyMex8iOWX4XoAqb+yhus4bvZsEIHufxP+kwiOBIL2ciewKOod89wGFudY0tsSTdHbukLgZA5Hy21PGtQu7P9JQt/r/No4iy46Unbwk6H0kQ4wGbnoU8o0n+UO+b3Sdd9hW0o6iq4/g9S4CX1qqLzIKZSxcCE4vpCnlntda2/pNWBcGncxVF2JW3oV5GLR0Usnj0kfPKBlQCx347FAKHnEnfc/le9URcuWfRRY/lyX/8hvRs7NsAhNKe+Ac46Nz1y9Eyxtnel4zGWjbZubYPkkYMCp2sx1eXTqWOPL/kz1YaUCv9VtLCU/xNoBAae/pWkQ70BSniHB3QI6OXNmXLHbGINq5P52FgFyZYHcolefMXL4qvYTDmBp7cseUZDo1nJAVjrvlo74R4EJuz5FHL5HoCGc6UxSXRI9lq4UFz1E4dJ6ziqnz5SoBsFBtpaUFlNto1fsZ3UDq4GiRwaE09ceFr/y2VpClU6oehNun4iaHV+DV2WOjl/A8vuz3f+jeafru1HiUD8TqBXXbBcdz5Lij9KKfGQg==';const _IH='6733b210c1e6f6268c04b877c16d9c64ab644592b2ec2f98437a81897d7b2863';let _src;

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
