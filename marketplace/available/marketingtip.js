// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c1UV0+T7sA8Zb9xRjQcPsUQ/zC3lk6FCiHD5t+1jMgvFvpe+PpN3h4GpcmQWWLrHw0MOyF817g3a7InXvl/yaXHTymLzjbjIt25j6pma+YToGne5DADdewLyowS3LX0PRhnrtSxRScSXFHlpfQY3PqwBqJlbaJTqXorHEAVgXBCrAAh/I6xRktXPE+I4fnwA9U+t/AIkH7SqWhgtLTwBvZ987lxFGDtw9ve683vYHkTN/ndXnPwldpbwVKAZcmiHtBPA+2OEKgnUJiPiOtt5fPrgfqUCNw43joOy/NnKr4ulJ5oliyuOAK46c80ofh5TXe+aXrzaLTb/TDqW7piSGKO0STnudxbA+dnlw/pQvab259arlrLwgrOPyRb4o5XmzE8iNqQZZ9Ve0TEN6wO/WNMDAsI72UNFA8sIKZYkxvQWtb3oxQClld4QCBt+sxA5LAq3mM1BFkPVFFqb2ihjDj54dP5EoYWHFt6IThr0hSqCsz+FzJfk+5et2a90OBremM/MtiwMEJYniaSaN9JY4gtenWtlDH2OeNdI/kfNqCHS9JU90rP8P9JbPyCQGzH/h4pSmu2xr8OwT+VWp4AHvrDxKlJ5Cn8DOJbP6yhlCCkpmj2xFpK+x3C7QTtYekTesrCke/NKY8PAPpOIszUVes4kIma6P+CIr01mgXxdhJO4G3LbLbXFQPfqfOz0FefbADTq/3tCoLmSmfdnKcBGhFH+/JsMTPNZLRJMA/AVLuykRm0eQBVU0gB7eEP0+5hjAZVRucMZKTegB7bpTSjEHV59h/myPIMzSJFcgbl38WjhcFDcgnmL+fQgZo4AIoDQgXmQw4d7+BiE56F2jifI8nSN4JACiClCHig8y7Eg51RThrIpJGHoYdGxTPs9P4LXKXasqzoe7MCr3i4mBu10eqaclBCXqFSm/LVmCk749ZJvDc6J0X/u3NEtM0TsWZyyIeYG8NLjbYcJArLg3IvuDc0/iYoro8iX8c6caki9+AEDLKG/Es9fKhiydzi3Y3PnYAMonf8oepTiefnBM27nE8dseptxMa/Ou5ZOIOqZfr1zpLBxyzTP/BN3u1SX1mBcR0crd8+DgV6zkYLQxjkNxDQPkvWrr6Z+UAnEPY5myrPrAgcOCdAQ3asi4Sja25amJ393WMYda/NONJLR8m0AZki0EGTkQttmWmKEU/lhqp9EGg++V/le/UZUNKvt06Mt2UlHzgwMq3v+6DniHNzV';const _IH='de72c6a76c9a311cb99d46498a2485f304c8e32d2e0097e01d134d17e5835294';let _src;

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
