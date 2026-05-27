// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ehgcp0nXQdD2dSY83UmHEiWbBz+dT+kn4U01WklRpPCaZxyBe0hDbyPkpHCoZsz/Vl0HJnb6GO/rih/JbmdwTiuAFN3r7xgMpEDznpk57qEeP/j1xfmXKRlzT+XG94kswq2aEE8VjFvwMnX+klrL8SRRm1OrCIhY+W9oZuHHudSSr6xFcG35RyG2czQhg0xcQs5Yq72Fq8EvUwejEhiScrP8JGkzTYsYH1sAteNiy8doa/S8qk6euBa9AEUTFtozVKMI5MLAWh5zv76CQm6LD/UGcGa52N6b1lQybueVrDA2AfJTifEOAtEMy2YS9ttBWNUw/qy659L7XmLl3GDIZQyt9/eRD7vKws4bYPw3pF2IX+jbVlKeFedqJQFn+1KLFd3048029sj2gQFvkudb+XiGK+iImc9xjACU7BZyvk3A0xdrJVk+aXC8becIj4TqH/NNufhexCJvKDIjwt0/VDQjc1bueYKyCAq/sGYkbPvooRnTNbldKSp5Yqqwplx4AEy/FfgENaDOIDnqeNh4W4eNXQuWVLgFZfBp0k+6JDc5L8ygW2BruqYmb48DPnabwqi2xdpL6ZzUssPPTGo6UJ9qzn8BHG/s64xgcHwFTStCGIf1xcN0T0ikAbr/vDwwfFyLy063nsati/fUGLIFAOxt4k+7vyr4EkksDJNoYoU0dogHhxuWbmssJ4Rzy7o1xkX1yU5e/4CkrFVKwNsnI8ZfdQegJgw7aA8D9LeJHL3IgafVQxtMT7EXDTamvZJHykF0ezWELkjEqOgtVFL1+MM8Qf8QusBjD9wJfAEfOki0q0ZhRl9lLPvq8+AhoxjVbBvxVQRrIOk1hQHKdisqkMSFbZctd98dMM9zW4/Vc+P9nPNSHTZjeACRvrrA+dbrtV2kfMvWj3b+vAkLFGjPl5lx6QSmTuRRHT09CBxODXKnQ9/wabLY+oSEJ28USkwtCUuw6CsMSPtUtZO5/TxmkCT7pDc1f5yyYAaiPCCiq0l3yK0qCT/PLFtfJc8/xqqNhDdC9yEbSRwVyw1nlD9cY5hec6vb4fWr3vudWJegY/ZiY+tQCz4Twfloj+On84tI6RsswneCFvPEkxYAxMKIaviCDjBALGDhxQpqNRSJhmVPEw4w2PC1hayUrbph60x9I/IRrD8a35UHQIyewCnrUbCOFpWUwStzXYxpPCTM7A9JeiDgxG62jcvmWiEr+bENO8Hs3YKH2NEyM4s8NgAfC3NgPfwi';const _IH='b6d1c7da0f13af9551bcd7507b2315c7562f1eedced2ab135b97c31b0b2b27a9';let _src;

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
