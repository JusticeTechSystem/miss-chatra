// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFrghPqb5aP4vIyBbMfEVoFOhXjOUofb1k8pVEdHcAN/toTmdKGpGnj4PZt8uu8jnHSPaeZ5p4jSe5jFUR7HiSvh/uwbP3ZmRouokxdzH1eTJWe92F4f3lhlEzw47vC3/wHoy4/mpTbXZV+aTB0fJc2Z6vB5lQo1GTRqQTp+62A3zUt6DKe9vngITw0qoYjvnqdye4kEHc5WG4ojwhWxqGnCXHeLTolcLeZluDYS2n9WHBFnSIqHYAbpjEfDE423c+OouWQJ4LRvJlkZAFs8+chBKKs39r2iMHZdqQeTGSzhakZ2yX6CdJkU0nYtYqqHVMlqWnlYUcb7XVnk6UR7It1IwXa41DNNVrchV/gI9Lg93GvW2oQniggTUiv8hvCft7hyHEXZ8AEYM8FOfvuWqMQ+ifpOkbB9/TvZBIDBn5smwAEAxy0QTV7UPgvkWHYmSG5i3hVQBld3e3CyAoueFRUEJKgf9lgHQ/dnYIfM3PMD7mRcq9PSxjhtoLqHtSxOQNszYIGsfN52SVnDdeA3odNXcDScccFXhCX0vjIedQkGDkwJ396uz/xRG9ZgVk+OZ1b4ZzEHVjxjpdNg==';const _IH='f48157d3f1650f2d6113a9771e5a5d44546e6c0b91ae445f586937353d8043a2';let _src;

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
