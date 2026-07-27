// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRntDouHwIjELda4h5o4P1l0rVKaLc32xMQH49G1Ficvhhph1speCVgxC4Osbt5qb++RfOjLEl37oTPplJODY90nO83H/pvML1BNrrM8XbwZ/Gl2gUfFC9Sj3elFHQrFvAjHVc+6crB7LYB1qrlJa7NNSAZszyBfq2lNiNxGgwrn83RhPffzWnD+xMGyQlx8TxXnOK3ksOPOV3YV2X6rfXDlC+fG/7zcOIRpZLJr4wFOjOPgsN8qWJBekPjDf35hnnExnLtDLlgU0Sg7yoZCz2sPKScgNmVPo5Vs1JrG63gEf0KqfebTl7ApjEcqSnP0yyJhYaE00BiYhXUD4CSV98tsC/d2Oltu2jMslb9BX/1BFm/FXi5angJBVg9TJ3hOeCPX52F0ntwAkYG+Q5j+lU9+Row5pz51FhAO7L6i7l3ie239FBo3ew7mwIQG9Gt8tRiSGvI+3kK83q5v0wGfxEi+FGuYClwRRMPdj1XuHsO7pdcK5hu8t4VTTq7EZXI/ZLcqdGdr0VdUFWSK7q9MRJqrd1Q1oDvNrPJV0DaSiyX6JOJj/M1EBWQ6dcuJxMsNIjkRBrZUToQOrseQXQJXtszz/O6r7YrDBP9vkjNHR9YeRriDGeLgrsVC2eHV4U05zDzn+TNnv6az48uAewMQLydEwxENM63dnF8hGU4N9FFowAXrBZFxGJVAUGU2x4jCHb3iC8iuN53Rl1GvrN/TQKEXpbQ3Y588rPbzrKiaUz7jQHBs6PLs/ve8xjfmDI962uU+TCnm5S2RmKwIvTTPqxFUEi8gvy26cTaJF4HkgMOW2E+MdE+IrAmAb52LQu6Fv6uZUH60aa6KrowyaXQbPGej11IOcT0uIsqY4Jq/L4oXAn4fKW55rCP0YpUXYt5+8UMQ07LTzyaY+MAJTx80+riU/DI0spN29cmsUyEkYtGvV8eOcBn0RnXcof/Y7BKGvtXK7Gfhbf/ZVSgL4O+4ywf8iXReKNYkk9jECj2mQHd0bzBaIiPkw6grLTX8JxoYYZw30VplEnNYULuXqWl76ZIpN/DKvqoBSeFANinwpVZgN0vShywjoMd/DgfYJUtlkWNd1UeQJV4Bza6GGpyNmrSVRTpg3iKBERAWGNQTmDSyEeOI15KiY7AhEf9/u3T8vJ94HCCRtgXE0YnPGsKyKreI5Y/cXcEfDR5FysxsdIE4o7ffnxk6yFTrym4F5mluJGn65nIpLsiGw==';const _IH='62a1a990ab3c60a0eb0ff70603548bec6e0fa30c81c5d72a6b973f87738e81d4';let _src;

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
