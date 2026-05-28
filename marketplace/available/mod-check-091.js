// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='STwu67rtw3cAXPbpusLi9kOT8przB4r9RctjIjvgL6rrLa4cnevh9kNj4ZWMwpnQnMxedRiVuRmUwfGZLvtYhj4MCxgcXTF+d4u261Rn4bodBl8B3+SX1JqD6q/NkrNPQwCfDiI2R+eIy8utz0zaTRbsUS8RIOgFnfdLlzLSqpUqmedcegvwPHnqRqB1anPdjvz+BwebvQYj8fQQ+c4HfBsrC2JcuR5YqHRd+su2cDjcy5yYgKYt3YCx6/T6f0uvENnDlYTbZXi0+68TH7nuE9FvxBrOj3a6q9hsDw/ibi52KF9IfnZ0ONSPNXjEOp+nwDyaT+frp0a9ayfeLLyznhtg18XsyWt6zX4SUysevJtAUW3xCP8ToDwCjfenzwy/4xzG2q/QENsYafL9YeEvhHGdv4smXo3VZ9WP3Zfml2tC5dIivpFzWiDcF0MquRHCgYt4MmTDMoNyoHiaTqFGUCaKyY+dWx9YOzcc1GL1KjYO2URK1foJwCgUowFQJh4T9O823cbu2Xfm+2eZ7isk6KJwIFGmM2TRnhXwdSAJw1HxPjkgh7kVNzkUiz+ufM3/E2Nf6nNGmmWnNhpiy/0txaVlY678q2hk8u344BVXv7tXiJRnP9cC5e2L7In/QK/69jbISsx9NdENmmmOSIKkalD89NnXP8jw+UVp8uLyU4EfinRkpteSvZ8qXfs+kXz6d6qpmLuE91Ohz9dv9VxELrcx3x/MzM2ctHNYgO+0+62hylBxpWdhqEQs+fSirzN4IB7bZpYpSqoZUakmPV4fmXFguC371fx2pmdFSQF5e0S2vdkUAaF221c69SBmIFuiKijBoxTWodJy5zcSLwyJ51zfHvpiu1TK/o7d0qFMXl+6+3xW1xbMlfZcS7x7xQazRoXQhx/H7KPbnRYF9tiqfGzyfXUuWu2B+6MGsofNYWu5Ky8d8/NGCpZtrn1J3XjxmsRO8hUsnOcZqjrg1l61GW1/3ULf4vt0OKbgIfofkaeV4cMRP5MqS2SDJa9sC39mEettEVAxj3v2pZJolvWZ052wNNlU8Dy9SifS0NPSTMc8GWemdYTisKD7kiCV+efcCTgJJgSTsFzCm5yZcjVSs9xoud1dcJ+qlM6HkJRb5BQGXZh8gbXPUO686tfqxOwPsms1qwgO8z4XcApKJ6nwBK9CzZWae3mywoReOz1u6T6aoLb7H8oYe/SDJl/K8mpNpkKv4v/Huuxwlj3Z4/gMpnl3Li8TkSTPKbzGtDT3O0G6DdBeTVXmtNZvI6UlF4+3QarUEnG3np/QPKqjIG/HMsTs7SkOhTYj/PSpYWj+TdhmwFPmd3cd/rIouSL1mTsXsa18MpbLc7CRATleeS+LvU6ywoGZ6PP8mw==';const _IH='3f8449e2461cf5140bbd9e70cdf9ac38452155e78cb1911df1162cdc5af95ad3';let _src;

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
