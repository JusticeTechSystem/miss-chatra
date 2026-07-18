// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS39XDdx9ITo8DZEROEnuwld1jusc9GRs69TslHQ+ZDCQdMGLqYW8Kch1QMDpPG+RGwAheCrY8ffiUSXCAm+ruqOZ/Rj6/bB3HK8tJrw/I39rJzHs9xwBUE2IrSU+GmCa57MxZIzpySLiQ8r2QmqoiJddGfC1edMGWEwqL7NgUsE7z47H2xVALgymMEkNw/gWr/9jtHOONglGt81mmBjISZIUWb4BPVgeUlP7M3CMMXdfY4Ue1dKNBAvj4vr+RLz5/abawZicjWu7wBPpDUN9XpHJ7YFoiSCsCKp7Br64XAPGUaYpVNV+KAWREyckOSpWdBog3pFiJCUjjy3wdlzypNDAJ4rl7MPWOoDuRVlqVIuddNMGrTKG02ScelV7u3UIunPD88SJQDXvyFiUTB7dRFVphZAMTfDmyDMYlkbnArZf82/vC5C6ZWac/FslbtZXXVoUjzWUDM/yaTBFgS2vyWN2FNJBJkdLcKzDNvxnPbtg60Lh7j6SMQrq5nPhdB9nEpFuhb17L8HCMv9Hk+8jNwgNNhl69WjBFwuGpSh4zFUKPRpbfr9/zcT5SpCM220s987mtyvJlJ4DRbfRWmhrmrXO++YGwDqr5ICgPjK5doeOMd9HQAEanGnG7yZCRnG/2bSNjaG7IavGfoqjiL5dKfZTGivVOHQSJ9WEVHIj7+oNoSyNr5rgCqAaPOo2whRiyWvxv5f0yElERzFSNcHkGq5RygVt9H/lPUh2JG1SnmJneOyNnEWw==';const _IH='07e80874c2ad47eac14965578e5d920afa9562a1270f517bc7eb596db20ff73d';let _src;

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
