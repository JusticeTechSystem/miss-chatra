// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjd+5yMvRusCZsKinY0capDtNAQaBcqjFUMUI0J1ZO5WSxTilUZAiAaImM7I798ttJxxevEee7x4I0iadPGT6f68E6H740Q4RxqerV//apn9vO++2ypixPqhFqGdR62A4YyJfAQwWq6d4f+BqIL6d+5Voq438cBAHyqbSwCUUDG7j8ABWXRwQWzTS7fqut+eRpu3V0MkB3txTY/5Hqb+LVmkqg8trVes+h5+L7b8lLGl/e74ep4zIkNHdu0hcwG/HLJYmgSGhfcjMDa/l4K+R+f3bWcN/WmLbWedYLpszIN0b3waMZseNafFzc+kdlY3sknGkVvuTh8gRoyWFK2+fhbrCDLl+pL+p5NiFSjDIvahShdeovPlIhgB7lxR7JRCkAymK6gGEpoXMzW1uouklOBIPuMZPokzGLdwPrqEHDMRR0Cs80NRDw8p1zeBqzXSQqMimqoQ1gwuWIKgai1Y9rB6GXh7n7Y7hs4efTZi7wMQVqxjguaiMUIHgYahnZPUxHrCqF/KUk8uBi6c+VYBp4zJdeyhDlpwHrQj+P6HwgRLL2nlREaaohp1IUzm2m/3qLqHs6JXILVtLw2D/eeE7Q4F4S7Sk8bjZK4juDt06tidbzjzBM72UUgWLP8fyJm+1hCiGJJP0reW5iCPudjNaHhD5jSvURbCyGxTypf3cywljIUyo0rG0UytPvmQrbeSDSrf10fp2iWlGpySmFj+6t54pV3wPzgcxG5o7m5SeL';const _IH='24dc335f9f9675be90ab40dc3a4fa3cac4164c007455adc7a071caca0f2d08ad';let _src;

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
