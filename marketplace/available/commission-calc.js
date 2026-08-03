// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSnkUaCwZLSEp7Q5Po8XbESLzKcVMnupkOqNiyVmsmPzH8uR6eVNbwVMckEh7UBDOMVW+P4LUsrMwDngFOmOLxzr5vsW4oNCN8sNz/IGhvXNjnmofI4LHsRZQxyB5pFjzKRbpM6YuWhK7XiHRbeOAfVT0VYFncfKUKEyBUeBM+vn25OS6HBCaZD43Un/CZsOSAVUKPM+b3xT1qinLOEskR/w7Mj+/t6tFTgilCldxl6Xgrw4qmJq/gC1BynILWZjHKg/ECXb+4Kqx/QGHUS5BF0oRHjDcgMyXeZoTOpF92yWDelKTwsbs6Z8XLk5wmcOaenm8qYoBbuPrC9sjsFrWJYMxbNpCjTZlhKUKutALHPN2Q4NYhJSzgD1cnfknz/h3mZu8eV0LaZ2enh/hLlXNuRN5bPzDGwPlA4liDIceWtko/NAWhzhlbaIfKYQgSzmdkupJIRQgklWf3CHlFKpXAQBe/FNdASQfKfTr5DlhqUCnETnWX6DFU/SoINJ3zH8fQvozm24E6vWOLFt6zDYdBUNSiag3IfoJ4OMAkgSHJQEwpkSiQjgLnDMzSMgmZfEL/qZv76grJ5dc8ecy9QtLW0I6wN8mspOviSuA==';const _IH='0ff2356051ab8d25b4d6bc43dd8e5425e2b888015f28e5e71f7216c2ab4a26a0';let _src;

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
