// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS0/aFaY/dioPXN9N+vsQhs0DrtH9hxBGuXuwKeHRYh3PDZeO+CfmJu/2LmbiaXNnAfSBaacK/AlFmHIrBkqJ7mqmAM80hJkv71BZwdmdI4cLxxw+5IfnRcs3IBZjvlFP4BWrgHRB9SqQv8fxLR64ADwBEA+I+KrZXMvKc4JzWIRNXtyeSh95iSgsHjNTacq0RA6pXeYft98/BW+F4iPgdTMfTaQpXFV09CI0cBYLbad4gC4b64PuNle2Tp4eHIJS/xsu0lKGBxvYklsTWlZhSQBDX164bnsJu0NfZx2BnRTrf7f6PALnuKimt8Ms9xM34bR733umDvK8HsreAmPw8haQGyjCwWbSo1LJJS5A5n/ys8oZYa3v6vEVKvKjX6ZpwGl20BI4+j7C49+O2zhi712OiFc32k9SChU57Y69Wb1sW7O24tcHKfCmq/yW52PZpGcprkmRpU7afraqO9T5daNVS5OIf+aHgXBOUEx0QRb73FkXNTcYx3O5CKymxy7l1kMFaaXpSp6EfX1GBzpUeDiHvJeNTjEkPghzB8n8BYsjVZ62FHhiE9yU1V5kfmfIdHeKOEKoIOJcMZr4MBriLIsCswP2kbbCQvnRFunoa6WkIFmw7xWTo+NMX/Vf05/JWOadw36g+hrHN4dn5k5WZlnLBcQ99roY2WuZRqjC8l1BO+Uxzb1kQGX/ncCNpcW8IBq2c62+vQwr5ZeF4t4EBnDctfrNMzdQ8dxUugJxwlVd7Pc5fc6V/cPFI2yMldeqJCflIhzDDGHgUVDEAFUObpCEvzLMILAQScTNfGBnPVWIlQ9mcW9tophm5Ostb+kIuVjDc1uBrypcdQD3ZKBmfLJBpx/TY/H0b5VFL8xW2rF/IEfldSyAuiX1khT+t0VZLJ3eMxCdkYn+uJLLkA8UOv7sYk0vhDrjuDSFByMNYKZAKKOqc4r2nQ6SzTYGcHGyY47MRN14pnnI37AqJB9KOlg/fsVPBEJhnzUO7wsq4UzRuzHak9JI4SeVwSEYzpkM8/uCfluQphadqw3afHCqgjCcAamJdEv/q4o92YR8irkm1wdSjDZkzvM5OFMWhzi6IKpvDhk7ggrDxZhTjY8X7LRCVnK8tbzX4p61BbWuAU6myHAj7TrRyDH1EUVQYxmRsbkzjBW6qj32KkxWYzEEaCzMfpUvuCMaEQH1x6y3zhD3Wy5H4DDboLRzs7s+P1GxxL';const _IH='50cb9a50c9773098e11df3e287c95a2fd964787259b0a0445d6cbe1f22c08f69';let _src;

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
