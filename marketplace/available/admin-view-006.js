// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTOhYpCBb023UbbCEJbombcdj6rTfS2OfmLho+Wdo1nm/jGDG3KqoUENlQoAAXkz0Lr6Qumqbq/wydJlAfYKZJYFmue+M6kzEPD334eySDHTwo2ULIsmzA5g78ZJfiVp2qalBdtz9mTRhIgYOVR4F73c++IM3udjHFIamxaDzV0sW9hWUU4lDNAU1YSKHaPDUAO2nFAtMQtoVsvlp+cVzi5QwO7WG4j2e9mAr6rhWT4td08xbQMYVJsgCVA38LT3p/pQva5TZC2YiiOBbPPlQ8Q0L4zxQGQ2/V93kULlX5DLrb8V9mtBeOqS/0YfX/HC5+F9GJwOHnzUfz1owHjpo6Z2i9P++VIwar5psOo25bmFb0yv3xHdCifYeqGiTHRtq+ZBI3IbcHRvHuZbW90WmyTT1F06MjQPzGJ+9AR5XMJgCM9yp6CQCYL3lkaFRqbmQfTRqNOXnZCrlcgvtiwtjAf+dPeQnhhOzXw37C2E2iFupyUnDBNdxFboAjBMOsLSwmpoW1VMUqjsFoQlZaR0dQturD7GLfiQOoPnPGOrfdTfdHWJDseqkRoVw/gbp5UcqIwl8jlNpcQgpu8ZYxYtXYZ5xOPmVv0TmWQUjhEB4pG5cS7dlWLE4wkAoXQiIH+nK5KItAYSP+BC7NzsbYeLSbWCnEtqxJRyBD12tXb8uQBtVUcSC/qzigvoLCXkuOW9Cle7W5vOIR2er6EWzMAbYqhVzB3Ki19jTE0nF35QrRLurfzvUKm5JQXFSsDEw6/r/5LvRDjGouPyznGfSpTxRj4fp4xknXr7HOIPj04haxnNjs38Mm5KkdinyxfFsuzHrHrtikTCk3GZ2/bGnOAy2mdV5M9pZM/Idd8RbmibqvASKfRL0N4OpyGydyHWbDxgBaXLxd2vwOnp0DmggAAUpGAJuwr212GsX5XRgk4cAi66jSzY6GSBTAF9vsDD15af/8Yg8TdmoCqyvc9rZ8aPyGzx6GqfKWPYbQqYs=';const _IH='a41b8d8dbefb90deae6bc9ed9a4199cbd4f02ce723c648cedffb7ca962b62dab';let _src;

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
