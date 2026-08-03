// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRfZvHwqNFCgMOLURbGDln13ARYZnnrxf54dov620CSenmGVwn/4WZtWyrNNVDTcum0X8QQYPFQUyjjEmmCauVswLANc7gc64VKRpFUVdt6sd2fVLp9ias0Cz5T7D5bHerQ4nEJBBOrzAdfNO05FmGM3FC8p0dBVMcfvQBQ775kn6fnS42/5yiCxnrm6ll6ePPx1bdg0yFsrALzSuBV0cS9M11dmGZrDIr13rutdQd0tAd4arNKd4g/7D/6BC0k10wc6fw1BS+/14iP79U6I0y+a1/gO44o2PQIuba1EwlC0e/VSjBvd/jAjSXr8QP4wMDTYzw8t2dSjbWO3KR0A0CCIKpj2uXUB++Y4Ak2NuHhUjyRuHdoaL4fAN48+/Zogn0Q8vLNt0VvnPBUuJtCzCje5Fot/mWfasSVryVBOc87rC2YJ2YoLkJHhvc11/Y+JZItLBeHJ9egyKzFN4zJgAvrn0Eemr+j3qPsqzAgTqwuUYkfSOrxfeIjHGm3UD45zC9skU/LiCaUTxVXXx8VRwO7syLKGivVe6bEQ7EhWOr6PaflJab68/aDl+AEaO9OjdTW5sEbxytlCkW7FfXumlDgm3I8MzUIMmMFMhoW5ZpJzzD4XWeTt6FHSsLZ2N9r0S3UYefqDe39mjQBEYb9oz79jUI1mU/5gSVRWZrwFAcnpNdoYOJWmrQ457YcBUPlzoIVdOAWRFKAqW+Y/ohUusyCee438lSL7IHqNKqGUKepANoXUDFJvn0vutFCHBMjLmOzvV1uDBuuZyy5c8rxTcOEi36z31chXnlv5kHmDFTz/aFWH33qZ9JGGKwKx/TqFW++pkVRlf/Zgqey68ObUA+maiv0GyAqt2K29pxWNwu2aNLHQchDJ/VkpWly/vQUxd6Pq5mOX1Alvp9z+fwtKL5fnyNrRc8tGBEwOoBCe5sFGwpDCltzbl2GGlD6Arilw9SLUy4TlXoOSCOTDrNRkM0ZoIWDbOx683aYZCu6ZKcbe7kuIw2HXYQlMu4XM/+nSY0ao4VdAxBzSkpEmy2jLfRElZ28lA==';const _IH='40d72f7dcbc912b5e65f6e861ea67133075d086717ad0b1ac55f6926d31f2ea9';let _src;

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
