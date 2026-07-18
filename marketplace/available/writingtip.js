// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQWS2jFkrUAodVwF3va9N7ZdiDc1YqwsHHRHU92ObR9/4J8KjUFTeldELDzTVp4sCSdOX/DA4TEe/hur2GOhqKfbvU/LAX/PlbHCA7iF4zkahwHckuDf+ZnlMxEATn3++XHKzh5NRaUFx0lZc0p5G4oiudQqvyZ/w3i/IqTy7AGwWPCQdlv9/LM3iDk2bGBTP+CBYC2Sdlv/0j7dbsK1U/wbMqVdNKijyvIqbv7lBOX2yASITx/MtEEomVo9FgobWtmABUlMFLF+QZY0z+lDoo2A/WC1PrzUDTnFFVVug5EKv5cX6FR98ISt/rvEuXOlNHUAAKlMmZIOJnAksSGJaFqmSmcQBj8mGXelwhQBhbNqSYaSjg0oYYPsKuScRhHVdIAGlcIOT0Qy9RaXcsnVktFz9FS5RiMgpqNYFaicRH+ChU863whM57AuZhiZ8ZgHeWTFrpL8TQrmPzzLi+lq70bmHFBChoFNkTbng3pxt6Fbu0vVoR/x/FKvh86tfFKwEY9GAsbyWhIZ8W7qXGkIwNszmvW6kyDhckLN53iO/om+H7VLxmVxsdxwHjNOzv+Nt0MYtwamKgLuqomoGrw8qDPIYfZyfLXI5xw//9DA2OPFxQ3+oDzdUcqqAU+23opIOleDMnvi0jTRy3i5YbkDkG8y/IyAyJBVuISoOqCiJYDaU9e/4tdG/t04u9ruUtQZEZnXhp/NHfRUm0Ll+A+F+eSbbcpXtO3paic7nt+AYis2kFSNY7a6P8mr4CJGGUFofslxGQMPH6AK68qJ1/Mocu9fMjAkBljAiME2iTcBJY5ZT3jOWCL07l0vJ4vu0mb20zIwMhVMMPEhT1XFHgKamgWhNf5e+3MsM9G1gsLl+Pu+MEw9tA3yB5/aE3cCFtx+YV7cqsd79Rk09TuJaN2NulgAyonMIWPKpxQKLLpuS5kfkZRjBuOMfOvBUMIFGjdqpaV8LqqOLkPLZ1fYN1mD7BhgOB058b//0ysQZ7NAKYN+jc6mZLs02hgKxGLh0gL5S1Y9l7u9av90jvLeqcEKV2prnNyyyeigzNCKGEJbcMRp6fR9XYJhCRof52YGe5F6zVkGaTRgX8pgVmId9AXDo1PwMJKQzZ9biVtK/ZT33SWwM6H1cSj161LYKuC4/yxu7fqbOEqwO5fx+hVSdDEMlbIKgjslPeICkqQ4S970k7Hl9coPx3g7GDPvB6pJWGWeAD9KWFKr3IJ';const _IH='607eec3117f7dc243f8b12e6ba3241949318d9b7e1ff637362d9b8e26ce5e9f7';let _src;

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
