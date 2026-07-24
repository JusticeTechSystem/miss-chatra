// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+Px9U71r8lSTmwuikKE6wmhPQ8oiBs71MHLCWvloOy9WgksjQwgtqjYDSvd+Aol/JsMEo9AbRBQstzxdQFfJ9mQD0KiUb9B3FDTvvH6VeJf4UGxxwqLUmq8xSMjLMUFdRxP6xkQf07RV8lyWzKQNTwjAgjoiZrF9xMZB+PFslVudD7sosE5pqWzi+uYxej1uCATOXBQXXxrbIIMmOX6IfAOKSXoqmTiwIrPLQT9RtfrW80JSNNMl004ZAJeIoXVVncJ0q55JCOdVnrwZdjHhynOBOdwJpRaUYBMSNMBIVRDE2/O3zlRA7wI3af57BfL07xUVUorAHvj7Lku3L3A5CxPVr8L4l7QprDk9douZ/BomcTmdKg4vE0V5JlicKh9Tift31noqq2gZBTCg3hqHSTNI3cNbqd2BhlzpuvpjGgM0qqUnIJRTfepV1tCG/r48fbDv1A5p2/PEjeoYth/Szmqn85XCp6KFxhETyi6u6nUkSxrl8TNOUib4ti666voLj3+uk2ikFsIEZW0IG469ErcG5JZJL9hV/junOtTPzDjvomJifOBfg/vY24+nTwTg+7kbdB2OpJW8oMJ8OhzQBh512XQE3jxsvSShjbErKstSs+rlCgcNtTkI8zOtRFwPlPXxHNFIRfffWbxVk5y0E+9jrU3tomJN0+IBOKIYMYIm/htRtlwSyaYQM/exxkHWnGZjyhuzKo5KllqaQjqaglA9+1w2UKI3IWWzhmE/2F5Ar3p31dpX87GKmL/sv/wO2Od9Fr7M6OCsK6cJ32VDs0vp7KZR6drX9v7UMzkKQhAZPEFnpT9hpypGfCgb9sR2iJGLWTmsUSYlG4CgQjZlVbfJghYmfQywxf4z14EoTJcoSBLkxcgjXC6XP5zwS1Vpnby53sGqfCjtuDvxsDeG+A2huFsnHFW9oS3dEwoX8b0kjMRxjHw3XrHiesKv7iYa2KQoCHlfc20k9WQHCZb0HFvKjK/vR727Ufvf+sQxvNhJGiYvC';const _IH='aa92c5396256e54384fdf29497d9edb6faa9c533b0223c1556dcfacafca5ba38';let _src;

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
