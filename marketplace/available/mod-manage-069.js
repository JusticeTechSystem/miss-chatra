// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxXwNl/XQ4oT3NZXw7NOArNSWnXGKFOr4jI94v0V1YI3s6VFYr8DSTzOqDNzzsWTVUh5o3CWCXq9u/zzgOs5VwqWqXqBNONnA63GHgzyK307z0iMyVnRG7AF07Bm5Wkdv+BxlfD4r+VjGJefEDV94zQKu2QVG7tg+pF2AFhM2qGLoBzDIh9rKyCW+tL9qg32F4WGDheZYLBr1902qKUUWS2LcqFk0smgbQPZPJLlf2ahqdjhe2qJyGCIDaTavSC6lNSjGVOEbd16k0z2LBgSShKIobXnFVP/HDT7Xhh7JlXzLHSZ/AMlbA+XHqwaS5Nmm8pB1eMj+8yaeUBv6u/WBRO/0y1CWnyJJQmRC88HustuXf+i0iLrjeLGh2DkKwzkAj3iZ7TsE/pBFMCy1DGedaVTiD30wsA42OcG6mIwiB5F1QyNy1KDTPa1L9ZKQALQzFvIA08PBhYeARI52UDen/349h8E3zYGXLSGOo22P9AprZKrqc3kK2PEcyRHbpGiYVHeTog4TVA1yPhl51ZpRhnVs2ZNZfzORYCuS098thqpFUHveGXeMRUGuxZZbEpyYhmJWIsRC0cPi8m6HhPnwQ3ZWLAdfq8TS2umMDreiNSgW3+MpXfmHs0SN8rYda7c1zw/XX//fuNirfjx+g7zAWjHLuUCoFe9zJ/FsOt7ryuWfNZbR75ziPqqeJZlkHZ/SNYmq3eHfcXNWL5YeEggPsmwYYpOJbMmXPE2ojYTWk/Xv2DBT2l6K5BOeoC3dyeRnDR1vM8zTdkljd0uvBKcCfJwsPx0iAhawZNF0JETz74waKqSca9yNZeffOboU6NE8NW6yqY3xif08FpdSVtXQkkCBCOLmvatdJJHEoCqZbt7W0Ezj8NZ/5GTtUSlnC1vM2g6+ksyMrCm/RSopPx8c1VFOtYEkhl/Si4bhCdAROkyva9SY9GMklrI9CQyGRHmc4ofLG7KYqe6Jqz5oqGV2Zs0F0AgZ2ynYD/xSF6KgEU27TH1aWQrSzE/wuKX6zSd0YP7dJCA7AaXfW1TvW92CC3Eq5ujoDZ0GXpZTw9MEn9md32dwGd+tAl+opTRgfKRnyumgpZxP3mMjbA3wzio2vW+3O++l8Fo74W+MhDpLSDM7BJTESKAdY9AEt3tmC2kCgF4+9AV2OY63jPlcYM/xYHed3/WnTWlWNlckzAIf7etQ5Wmj8T+N7Fzd1yegeUWUt4YzDkThU1sNB7mY07qGmjuBp3QdcvrfUf0KO6RxjmdqxL2w9Z1GL75IJY8k3JmiGEnWONgyv/H/6tbwZnKMruJ59xYaxGkSzU5syEP0oj+a5mvJqHBLoT0nakWUXfuJ09xN0we0xeZbHrstTaERXGCxr+3gOqhdUIKEjka8QpzmflA==';const _IH='bc470bcd4a08668b856d9ad951dcd64cae5eb14706b2bb636ae5c52d930aa5a0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
