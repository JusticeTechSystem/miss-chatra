// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQkMqM6i/CsFcSuWftYAOWEx9vzeitZo+PI+bE5oLkqf/osc06xxvKv3QKiyBXy4jP87rw4O4lwbT7BcGj0sF1yFsktdtb/maaAUxkdhMAU2NObSf1+Ho6FF91WHgWYOlTvVluHo0g2tO/1BZSVj4bSkSV8IbvUt/6BNbZVwlNJJIELYShOxi3hcV9RX4A0VW0YxDuXcm50vTeKcKt6m23X8+7Vs5c0H3g3Lx3japv0WvU86Tfj15vK52augvH0iHXTveD6Uyx/3KZVga8wH7qd4zdMtujWhr7twNpuiQ7w415bgy3UG/nHqfe8gWtC37ka6LnqsG/PUGjRHbiWvbmEcG4eAfRKo2Rc7unEn1UCz+R9mdasM3m4tfOC5b8YmNVIHjdBbxvYo9/+yKYKOtxatD+2IAiMvJ2ItJIB8WO9Rhpld/xfsFPGAw4tFeixAnIISC8OOeCQj5x8iYUlQAccuznOEfD+1ID7NUW6ajOZpr+sp/Z6a1SriDv2i7Gbu16wabgyYdsx7wPSCKdPkxsF5CjWDOE1YJUf0K4JNJfBdAvlOAbwWccjEJU5fIN4n/VR3P/CwTO6YwZSrEZwYbU5ExQBS7j2t+B1gDw0K6Zbo6+1fXlQ6xqXPZlkKOuOEjdaC4N93/zWsypyz7KaA2aC1mI4dISKP2zLvrk5MEG7tuHDr2z5WcHKw6xU3SjldR/U7HMQSxkSaMuXyCbrF0a7mBf5Hw==';const _IH='8ddd1fa57c311bd92b2940172528739e8980fbe89ea791ec9b99d577eb8a6dbe';let _src;

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
