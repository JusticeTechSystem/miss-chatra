// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRlQE8VOEamS9ZN7Mkeoyf4qWb9e+5OfEE5Q5Ore+2LlXvKUoGoCB6BiEcqknJN03GkSPTVuOt6vIExTbRdwNbA3s12GFJF06jLGOoyXR8WNmXEZkIhn5dlwStKkUJIAgYHQXeLf7fDW8O3momOG8EjOZ3kwV+9qJ9sIAVMcgS43vSD1wo7e1HvAbfG5NcUD59TX/6LXmxZ4LJUFAPmoXJW24QSRSZXZ33//Y4NNLVPGrVybRQeFkkaW1g3H4QorcBRVIFTjerMaF8FPmrBOdkatJ2WsaqMQzGoTS8koI4Tu3mi/QrJGYtrO0YJodyigYrMnuPhlML/eeV+ioAUsf6r+UTFiVXy4G4uiL2ecu1Fn25UVSSmJNS3HVGO4R9dJg6edizYuOUXvI3zCF4qa1rqwy9LsYxHveUXSl+UPEEvb1mWHFHmWBLvKn118lx7Vx8VKC1ZiDOdNuE1cnir2a9PBT3ciZST/WK8j/qWFbTuFNBR5d/zTUGeLaIt0M0UxBXsQJ4YuH4kApKKT1jloXytvldaM/PCD4h2jBL4fHcPJjqp3s9Wd+0Zg/ulCmLmpAH6uxZ4LJHliQZzV84Qt8iFk2vy40T/+30HsJHzSmGu8tDXLopUy39w/EbbrxbBLXkFO/udha0ahIkCxIUVionggO6wbBTU4FBO4A9gYgTIX9qvhO7I0wS9f6JoOXXomjcpV6VRwDp+01Kt1f7RIUI/r7HJC2WrN6HsepklZA6feQ20gUW8Do5KGOL436two93JG0V3CkebfRcGblww2xUMv4x1eXLb3Q9KowKQSPxriXHugaNAXeuX7Rnlfzab8vpUE9z3CBhmERBbW9rngqIGpdYfmrkiYafnrLYuYlzeQEUXJW/n4yeM5AL20rposvdBmOYB6vVtaNKSSjomBX98kPXXSmmVA/+qIjyABVA/kau+bvuX5i4oKrFf66cXCbzGEmcsDYCKl9hVEdXcsk5EnJ/UPIAkaSA7t39upvkPb+jZ8mLwoqhKjubqJEqn6ipte9GPTB5exWVotcAL3uUZbdMrojeIS+Bt9Pn0s49+XHG9/d7NmBPHaLyVF1qZfoHRbt7tjL9d86bNMldf9gEJgOgLoL2Vzhf3j4UzzXRVixhm6RrFn+ROMpurbdoVu+0S/13P3+Sh4/4BbmxOSsPXY+IJttADCN39CDYHRNpRg/Vx0+gWp83zoIAKjxnBzjbH5iCwpIwYI1Z+MDoFl2g=';const _IH='f31b5dc5b49c0737b510899a6a91f77f8e2a913524034ffcd9306074562033a7';let _src;

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
