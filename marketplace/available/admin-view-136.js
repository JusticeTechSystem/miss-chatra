// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQwuvGvtbMPo3iHl+PTqKSHEwBBoSM8t9B1+gty9w6LboyCm8rYgM0qYGXGH9ILlvG1mQgKvCPhIDLRNu7EfACG5QtTpqSDP2tkpK+OX6N0DfvaXfyTUHa9hrKqxN2jm4D/P7PYmVelcMH1cM60PoVxhWLYB11Fx75fY2/awEmjYm3+qsEfw0jzdT93GkMycLEKhjSBBKv7SJcefydgcafvE971wg1OSmSlN21xpHk0ysQZ2v4DUxf98HoTUiGL11dCZVZEM5hKpyXp8Ma3oOCWlbMuRUhVB1VeftXjEhewVFXcHMhyvK30BliBYUIrqTVeUh4nTi90TYoie9lRbEozm1pC65eaPbi34F6LfZ86wpGH6F4LG6uXwPwQ3FN5HWAQfrlqc2ScZS0P2DZqLrQQnqehGT2HTM/0sIWq8YXZtuFG5vdPnVknUbIxbSEHYkBzSRJlGt0J25QAwsNjJ5nnpQhg3KuLke+DNLZZI7EFjDu969nGa1jn4hzxDKt8R/9ygGZR2WYN/EiPsOTfV+rNVtE4s6sVhrDhY/VDqjqTLjlrMz5lsJeDZj+gm0kM9Q1zJ916n90VSQnHRI9Gspn/m1oS82kEEAkbK0lmTTgNK67QWsYY9aqrYtRSZl6qC3h9l1k1eGNt0Uoi3fU/0h+zM6j1mAMkoY4aKUSdh5s6u7x1n1dyKuHYnAE4blvj6Td3aYcIp8J+wrN20lCj8swNrrlkIPshIQzgpi1F+vL2ifOGHxAulZnkmAUBxgpDmQctX1UVvHuTwGwL8Yo0xXbb2PX9B6ZbdihtCQnDPKxzr6HJ8paj6uIBzO1eA9ozyrI/bO6V3NwJi/Y7AzCggJ8e9uQrFKTeSjBLr4EHYWC/x7cBHuF5Tpag988ZYLjA5NWi9UpPlWhHKCKupeirhOf7ir21psF61v6L3rMTyVMZcePF9TyAkVJaeW2SOmqQ0yfyBoPDdLx84M+GK2Rn3KG2biSh1Z4PGlIej1suoaK+aqU=';const _IH='4c1b1a1a7964951bd315b1fccf75e7851434686364c0a8436fc81e1ca3393ee2';let _src;

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
