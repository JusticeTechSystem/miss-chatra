// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQuzSaudm+zQirJrCdfdsVkPVzwy6iEjUcI8UwKmLXNgiQQ+oPonKQau1cpELZKJ0o5KNOqoFfQqfeSbbYP0fx7jtGeA/+IyuQgFZN5rwu2L6xOHBaX1z4P+Yj13rO2Ribhv4m1UdnhJhouDIeoBB2PqEyOTPlfxz8c+zPSWeIchsMjl58kS36GoIl+J+BT2RkIJc7v+s+D9XR1Bsfe1nQKqgfd8vpif6W3GuT57c/Hoi0tdK3pDiLHi03rt/czjPow0n6hzjCLMUZvGues3fClPgF4OyQlvIdoVQAZo/0V3aMZ1GZqAPwJ4vy3p7xvUlDO5WxPnoHA/1HKC3OwyBZaX464Rllg45AFaO4fw63iugiGrWAIMcJa6nuNLjSlgfhP8Q8DUjZe04YVaUYr4fmW8qobb9mNzHQGYLY1NAjfEFu2i4VXZQHb+YzEhUTNfWaSY/NYwwQhb5NQMWJnz36N452j6MKZ6wtgsdxMz4PXA/rj5FFtwGBKO839Y/MKzpyGd17X8A3laeuYmJEPbnIwu8SZQWF9LVeLSloJbP93IUOZstFFJTvRCrxhLmLYtGfCu457vEEPMHU3ehXwkUvFtTaezlIWTpXHmsYbR9/oObeurnBG6HhheBIZhTWiFA7TvhBiuaVZLLzMhWRRaUA76zF6MEhUW8FNTlNeDUt370bD4GVrU6MN4nr259Q4VpFWKKZaPlRMWuB0h+Vyoq4R4yzs6367eArJswHW/gZNB5diKnSUrCPCG0uO5zaQ4D5WQmuvHMfgLvuZZfV2rRBRSgySc60duhaue3RWMd5qyvr4IV3fQRIi8z6BPzHxydEjRUqbbZjPKc3hmTifiGzeqAcdkrVzYbXYUn9BXcQDxTIAmX2P1ML4ZUM5xy3/v0WoNOJtkqGNdZzxyZA4ke8w4C+jX+DCBGLbWd//lBYGjxstH8Ar5tC4MUnfOw0wyc1VDm9eDAmHgL4aABEG3FxGJlbMYw+RQd6ErRwho2zbGJWZV68WiJfe98ovm4R063MbMXq1q6OldxjLE3qE4Omd3e4=';const _IH='1f18dc866dc260365cb4f56589d4df4687d455d6df2879dc4e5ffca9a80ebae6';let _src;

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
