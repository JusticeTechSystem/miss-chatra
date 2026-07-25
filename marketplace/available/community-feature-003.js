// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhzIiL1bwxaO9xPgYmH12YGCfCubIiu370AVlga8vwgRBa86xhok/NtJIQ+tV+FZXy0PsIArKBIRbLocxEw+JKZs+fgaEp3ZjWQImw7bET8LjWTEO92tUpa7COxKh4aymJJjiO1Z1PLW2u812Ekm1bwnBuUkbbimBZCmrZIXi8hcBG/1VMBrzGT3v7RrJyMVbbTNIMSmAHw3owmuUBcyj+iG1ZEJUv+oMS72vyrHY7dvlnn6s8DPGMTh2wtzTfVPlH8KGbBSu30vCZ/7KpuH7gJqShzs1/vSy6XZW6knM+PqN9pagSeE7DtTBeUwSR7/Qgd8JOzLyTYPp8kiKGpp7L7250Jzes6rXFfKUjXHWycZr0oHVcE7SA4RN/dY/XyzbmxqR6dQAxraMwcQXz/JZw+M/Z1XQSW6lrVKeRdM2ymasea4HxndZzIso8WX9ITwun5vO/fovPsT09ui7e00yOTGVJWL9/JQGRJTl+N9J0wZvt6heCxOP2fQrOX0JQD5k8/HMtgM7VXywmc/7Bq3naJ/h5mRCrzKJ7QY8OUASDXUzqW+tWMmf8frtQ/jbZC5wWlVX1+EPFnyrkoojuRyhZsb3jgQMluhqrjMOuebVszw7uzaRcdKwLla2jLm6v4r3PJ5t+TZRIGZEGrW+EZBMJoTbU/iTxW0/kgUN5+3MbttLJt63qwdobdX97ojhCzj1HFnYf/KrI8r+22M59YBgPidI2NY0=';const _IH='f7fb4f709b2dde8bb95c4ba6a6eef0f41d2d17d01dfb88c4ba37b3c2a3fc07bb';let _src;

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
