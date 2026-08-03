// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSC4EkkThj2uPWgfJaj4RIQdl96d80F9vMNCWRTY46XzUakkRz4JMpXF4FqdbnDBkGshfL1o4PxL9X5Tc/rnHI8j3bwv7azrNBfudCUA4n5WrMOisJM7yaFI3tvkUx0vxM8YIpUjGe8EdKh8akued6eugX5C+MUqW1DX8ePU5C7qdlEolerTzsIfkhLXSMt7CN3W87al0g+EqdBWBu94Q9ckkdd0vLYOzqRcZpdd3m/vm2pedbB7pK0IGPL1pKoD27RAG/OyRaHSrei1su6iGKnfWskTs4pg2Re75hZlpz/wVVtB8jntnOdvsJlJUQu8GesLQVTEMd4EJUGyY/lK1PbvRDqkfwyujCBSckLstJXi27khItUDimXuKZDg6xPWGvRzXEIeCIhlwYIqEN37oNK7V1u5UJKmaF7ZjdDgwl87yplAdyfD3ovD83ZacxLEEgJARSriBhKJTiSkymcZNBugap1Qx/xDsk0KD6sBmHG3wzv584ZDdH5LFdLAZbneXxAMxc2n82E0t5cmDVcPwOxCuWCSO+hgFw8G+j9UM4jS2QC+UpQKodl3+y/prMgxacNWnyFfQhuoFOUuyDeRN6YvYftp/yASo99pKEqEvCZDA+I32P9TUCimxU7aQEzcKZiVVlJCkyPJpRy+OAiVx95MfRh1Sm3SP27rkeLSwAFz2uwTBA6LBOd81LLQZTbEt9TvLqmEo24e1l/PcAfeetMarM4mTjzGSFPjAEifZ9NJwoS';const _IH='0e07e1b2d8bd9bc26431856b816a866f120bfc95e4a3677ebaaf9336063897f3';let _src;

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
