// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RPESjoHqvfUHPG1/VmAKxf8fSxR2ypBvjfwXb2ywwx5wAlc1J4q8osojVxx1uEPT34T4tAzx2zC7rwoiSYaE/ybwaFpx6x+njGZhg+5Jekvp//HTY6ysWWqaYu+oRixREYFH6q+TnXl8cyw5xL2XAmyxVBubCnzsaxsCQE/OAJo3hVywUdEbd/NrqptQu8Xu735vk2ecwUVhsRoZiRGpoGqQEpqxRzFSTuzQbyDHGDHmMAvOaooJfN4C2GS9Q/lXyUdJtDeAc89KBBdl80prJ9IVLp3AYRenSeDiRN9rQNutYJXRMozNpyZqxJxr41HLR6NKdayT14TeJvrb7BtTbLcF2HZ+mcsVqXfUx2w6AYPvSbhVu4S64vfN1u/h7RpQcqCzkqZFlvubMeTcx8v19YNs6042ysxx5PB8U35CwOu/Xf1umdhcBZ9+inoTb/E6FvNh02a8uVlqOJj1UvebspqfBIwBbONM6TgXfXhFoIJ1Z0VkFVz4rLieuJYQtppwTK7b3ybTJPIDrxLuQaiKRSkSYYsDwcUy0d3R9B/p0qByMk20bpxCeZWK5F+ERG0CLdk1VpTsoxblBvDmuOnOS94QF6h3UAbjrHF3HrfqnaXEGlRO2wXcuMq9WHQSrW/DPVlGQFCc1SA+rPEMxyTWMCr0O25s4//unN+VhO0WdRemw/FnRnTf6UDJTNjRli/GHvWXcephPRCeb3pVQwddx3rL+Ejmld3lCU+bpd2QC+ImkjY0UxX5SpUM2fZTJANyUGdvTjiY0Z8e+u1J0o+NstRSTsL5o005t7Pd/JM2r5z9mebMHEjk6YnKvIWTPBxnDdjLubEEjDk4eCJNoQbWrP7nAYls5QkLTzQUUpTwLnjey8M9D5Su/8UnP4SetW0U6njk6iOitpaeVqKypcyXqzbli4jSIyG4fHwCL0T72nJydxm/CY+7zhHba5YfPW+364Q5rtcubS8vwPJrImObXjVbhePnqyOlnQWc5SaoEKitC5ridqNJHglm';const _IH='d6e8227b3be56dcffaa96962a31492b3556e753dfefe72a6a838ddbd2b431c6f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
