// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='owUieZsr58yroC0/DXPXsBv/1gKzkpC68vRUEges16Ce3oOJ0RxgBrzG+/9IKE8OZ4EzwuOwoJsgAbuQK3OVfUmoNppLZSA8Lk488ur5ccYjUlInI89TqSTXvz2HtKWLuFATtLqRlZbzWDjPAgB7RzfWklHubIdx+dHGTZQdf43K+622K/q94jxRaOPV6pGzWfNPW9Ac1Bf3/MjYM+aay/mBWepvahnXRuEHUrLmvPNvYC2VmR6UGm6WaXynvR7cWClCKrOV8dD/D+LEm5UWAacSxUNSxOwZNLHBakcBahJSwo3z8h90ckQc7w8gHqOdeiiccB81hgDr1g55jFC5CCjlZhdHikxapvOS3boJuUILs41s0/qZrROGvnnli1FOM9KtWuhkX8tlVTbOF24x+Y+AJnDvTZfb/KbvO/XZlf8MKoeBss+BRkb1/hdYik5Nw0mjC+aYbBg3QycYlzYlvuP64igijKuW+uK/WxNlsCCvGaBeTDRVBHbNzqUSkAQsgTWpcPKkr69gIX8N6/i+AyPtByJgwiLcVYdpQhV4H+H09qFnJnePS4W6R3TtDJGKLShvMONTIkVAkMEImqXA6Lk02Fdt8fKo1H5l983PH7az66DrhLK5CQG54vZRT0A29jWH6U0E/s/rYr0ZY4SyyXyZT/WzDRUakI35Xtijb3gQGaJygA+8R9wIsrfGVgsvMd+jDcDYe9pUQyRDaZQsRvqXg2hn8ZnQO/+QrTcAx5hKhobXW0Taq2LSZ+5Hep+FGmUNfPPQ6cAj1I/1DQEalXvDrxbw7y/gwbcOuiWnTP0stbSNdMcGB+DQ8N2UDofxFsB9VnNMoXof4n6dywrutskIvzvmJm+3y1SlR1CIF6trdCsfy+6f6etNBt8BFlKj8DTq4cvZ3RrVDcIbpbdGDuDySYH8jjMQXiyQiVQBx2i3u/X9EczM/ZXiBw/U9u4bzf3V7vSs1D8mOb5Hs54zKkd0U1ZPDJEN';const _IH='e53ee6ab088edc89f919696a61ea09638c5754a9d350679339dd3f4ad0809aae';let _src;

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
