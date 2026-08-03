// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRrUy/NuMponp8ZTBCzK83oVtDa7Xpm+g7QYYuGdJfG0efXvRj1gEvYayi9wv8ZzOE0HN5tOyBQerz6EBPz2XKCxxdY2MG//FBEFGaCsId7xtWCDQQfEaz5bzYdIR1XLLsWofcxaw9Ds3EfpjBQl/gGW9H3yUNOz72EipcrsZAlGG7qBOr2Mf+YgvvGnE6igCR7qpzXt6v/+ZOF34IjJxOuEEjCrV8w+JCBusIy9Xm50Gnta36BxVFZvP/OgK21oj9IGlAh30kkzDKRLRxxjeaM2MHlfpLMvfb20C4gtPrrNdS5x9wOPZ+3+AB/6TX5RSNRpqeOENmAJwB2SfDWMfk2hEs1zW8/rd+2HyaqNpgBwCaxpG8QBwsVn2MijeSqA3pGowP2e0+t79mZjUanEisR0G4B1ux6Cju/9vDfJ5wpZ/9NkJ0SsAdyCwOlrvaZhsI9GDGrC9vs9ZxbJWs/wtoziQ6sNYTyM6yBfcdPgFG+aQZZ9m7bUMV/IbMltF+8IX1tyA+2UyPkXc9rGG8WhOreSA0TZt02vJGCzNba3+YOZOG2/aLZSW5fzLR9Rl/pNsP8MuLME/9xepwqvlbtKDOCYU9WOTd+l1jGGT9fNTP7ev23qbSSJhmuQIm5TMH0mKud7VTW4C9JQM4loMdp+jlXkQqJSyfdGEoUXzQA3jtdplytOnNWe84NsKkxqz0rCgqoThxuvfK3dzcuDqyzidUwjl5BS2Tfx5Xi66IQS+pSfqBfhLbFdBHqYN1SZDaUFYEUmnYC/tMlpaJ7yo3OpiIiCatUgJXRluY7vsvpPql8dbCWIuq6vmW6rJhfCaFrkfYkAeOqEa0i0zj2s0DCloGzCWkziYQ3ZnXHP+UX64WIgsCfipAzj5hgj1Tk2KI4T21ru38Ae3L2cagdZHjQUYSIktO40ITSK7lDJPqQXMe00QcVylvzLK0OebZgOhMAGyosa/o4BMr8llillrNMl2GWF31D6jU54EZTBVnHzdV+1vjH4P+/48kEkMFs3Oj0+4sHCwqGsNOzWFS2tCLSu4ReMd3530Vkk6hf30yMicxEYNXDg/zWhK2DyU1wSUvNz6ay9oMVAFBdv9EYSmp2uzzu6wADuiV4C3FGvBhFsHDj9DEcTabX/lOll4KErJ3IjHnHqiDGCj1BvLF3GWH7BwDIeuaJQQbjCYpIFcwVxHorvNDSKjxwBSxbh4caKdULrMmZYLHuvS/S+O/zksBuRA==';const _IH='1613b92fc0c679c133c10bae6c2f41f68c23652c8e80ef839907eaba988e6794';let _src;

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
