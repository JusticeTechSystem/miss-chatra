// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/dxj/CeDwOP/KHyx9YYDpOTXTCouYKkcetM0IWXFa0EEvOQd4lzUaACWexYFHkk74CuQYFf6v6x2GpmpJGtdSivO7+rRosgJxvR7Q6rFNvohFDfvdQnt2qBWIjwfW71Ox1jb53K3qezztaQWzKuAJZJ7OMUDr/EpuJO9PScqj5e8hKqH69FNJCCkomVl+DTRwNI+UiN2hm0fcXEnOr/V3RbMXVPNwPOWBKaTJvRUlMrxa/ia30C/wklyRrguq9Xc1fbb1xTCPjlg1mEflBNvr9vK6ZCSIHSHje/EwMD7koMCJwknLC3F4A4cD2YBQi1XcEeHOM0z5zD7r2H/S8pvtpeJDKlx5nmQfC7dyQHzOjHISA8Waorjht44JkGdh6aezqAoD4JMs/yVibsPew4ac4DIdTTbwyF37Ex87zaKfqflpmuq9l4yAmlVWpOfbYZBKbHFqu1oyU2ArZk9yxnjZxz/y5B/nvwAyr7Gb/wmu3ZOZgfYXMyglcqG3mYAmptbZuvTzID5gBAI0RYJZTsTi2LSW/hrjZak6M17V4Dn3krn9u89fxC0QUKV0tykllJV1GI2STRj0QAMDUeOjur7xt96b8ZpUudaBNh14jg9pJNA0VESn7p6T2AX3s6dodf868ZDMmc9yJEKfN56240hSi0UM6azd3T8R+7vwUozt0ZCkT62Zo1CF6WyiYV7Qw1yNbRozkKbWuEfrz9NmJZEjMgfMK12n9M1xFEm1JH9sJr7toZg/P8RsPNbfEpT1tT16SebENPfe7HWBzfRJRYhsyFCG2C1X2gLFiTSxjGUd1at1Yqd7gdRfvWNd6SLT8Ax/HEDOdQPxcvGRcmUMwJEHuZ7d14ezZoCeBFSqIOjSx4PacoA/aOKltOzDdyi3pXf2CEMQY2U7NKi0FnLq4UUWIj35uMXiEmtaWQgw3Z9qnO6szRFFr8CO+oW+fvEnVUGy4SBbuoGfhedRGpdOFShbGA5X5kxlRQ/RHh7h3ijeoLnv3DeQHt1b5z/ukXm';const _IH='13b927d79cbd6728e3b8edfdf5e5299b38ce19eb254375f790abba78c104db5d';let _src;

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
