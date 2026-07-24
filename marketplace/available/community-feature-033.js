// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+Kkk2QvuD0panEg6h5cpMNHOrLMTL8O92B0dOffVRhqqsiQ5Rg4kI/yWJB+OgckN8Ux+2i/MIjHjPbjcj2BH6SDDPRvHnjGT5o1jmYHtEMM7066OC6DmjJZmVVm4ayc1e3mde09gL9SFtqp8zP3Zt3RyxSd+6+1Fa9BJtsuv7lD1nJpYflq2hTnUuMnTTcGLt404nfzNzsZQlgurnVDef6mkJFSlWgNlybxUhYvY3KNQE7Pb1Pu8isvVdmGjb/LlgOKn0mS42oB4QNtYDtCYnuGDHPfgTB99AiIUvTyAmibHhCYChvkGAln6tRnAQgtY1chaC9POktCFSQ7eYfEMnrJwhOznbzx79zbCwHKcjCmVkN9mjRZX3KoO0s8aO210+fhzF16e/3e9Ph+cqADKla6vbfE6u6GS19smGo3AXDrS5my4EDPS+v/JEBdLl7Ra6dN1u7vEyZ4zG6xW5p1iiVy04/uZn8k3Y4VUnKCGc3fHMxyYTSe37KLgLlNB2oZmgmzHc4rovFqCbi1zYut7G9QgyeGPgjd1L6l1ZWAchx/W74MwspunLiQ9pbrUlfTmNG7ZtvsfzG7rFelTCkz0+DyqRzXK98IQkf9wVRXiQshla7m8f2ng54JIQ1pZCQjxte5HZ7LJX5w5T90qmi+arWZddhXJf5dL0zYyeC4OzBk7Rrenn/aFjeCaUG/6SAFziomNNfYjsTwFVZp8q4QkbRi08bjuGr0xq';const _IH='2a39ec57c98f53da9bf14877d33254d403215af15e05ef360f096a1749dbc253';let _src;

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
