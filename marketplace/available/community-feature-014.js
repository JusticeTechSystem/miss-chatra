// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3pKcNVu2ppgfgkU88F14qnfqNfjVsXwyiOpJYbJRnX1jiNV+z/7ZcPfddja4tobz37eIRj00YvW3k3HgfzYv/7VSwtrJUoXiqecWcEhN+ZqrbR5g9dOO7oSsbhPdZ7gctR24IZXsz67tc02v3XI22WrG5aAeKbEKn0/K3jow4Ejxu2f/9Co0MJO8SOe+nA7dJ2phNKZ2z6sI4+hJxdbOb20iQ3HEwugFUgDkl7qGGyNssw0k+/0zfSzSu120ekWM2sBDjxrJvcd7XYbXeNcJH7iTT1CluON0DFpqCWQ9023LGUssmrHVHDs97nzxYT+H+JYoAkgV+Lnm1VPRlLdpjIqBziigPZmUzmz4Uc1gbumOsJrTze9NbrAf+2T3q5l3XLmF2+0ONtsHE2fs117HEey+ojNmHpQgdPUhFa58LvzZsjJ+im9HRKAmqnoBbHd2Yvsq3piG1de0FPfSG78Fo8zB3qJQ7c3kRgjLDyhlWy8bMYXIg4Hkc9iTsPtHYDiaIejXVzdaG9HHoxCnnRtCoFDIsxlUNmi9s/T0tovVldxBTF22Fk2+hytGIB9Alqo/daYVvxmWBDNQhQhvJmffgeJgcR7GkqA3+CGGLllnveWb6FN1tXN9PxdFxZD3OmiNYShD+eSJWWPRsmLBUK40eg7PAYTjjs89UADXuJHh+Wi4+DSkjW0d95YMXz5II6Eazs4OWVrCyzcztzwJlA5JxphNOh+eO4BZF038y0ulRMkym';const _IH='0242bc97f92a18e870f9ff0fc9bb902392b8d461a9cac9a650b3f4cac53d7a64';let _src;

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
