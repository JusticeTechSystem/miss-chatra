// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v+n1IBHMhSw4m3nRaEYdTnFSaiYmPyU0qDf1rm4W9qon5qc/yLOL+UR3YYmQzb+AaPk2OOHjsTJVswF1xLScGn8nYeZreGQc9UTBdkvaPF2FOsDsPlUwyZ/C7WKlP385DDGAn/F6hnWtBpGwYb2YqZNrmr/uFj9KDkGQ1iNKuGvCj2ijVo+PUkPc7evBFMMXQTmL7nh1K8LINBWhmv4aoFxvk/81V1DM/QeM+QvTzQYgFeIANXWfVxkflL4XSu1S8R2IMKOuR4jE1g5Cf3GzBP13g78R/mTyUPqF4STJKRluFzAaFHw/qZsQsoZkHS4Id/a5LjhngBdNij1KsF8Q4zZAZ9KFGnbHJBSxqoXIOGcwPlvHRH3KPRZf7oMVUKN3r8ef0AQyHPCTXj8KBf7PtnE6djF7Lr7e6WXG9qsQ5MvAi8Hx5wGRo2FXCX/IOLLA3SXBnToue8gcH9gRzG3Bk3STfLSwTOvTGyGISQ+oTmyINdV84XxfYC5iKSwt225quTKVEs0CLL39pXrvxnkfMgKFVxDisNU/XQJohD42WxvrPAvf1V0af877S3N/7SjGxlqSZTCpO3uUuhS9FgGvdT7eh9nAjYgpbZZ/IikdvH4nxyxw8A7/oLt46BgMjH2/SENiWpqZ5zMszbEB/6f8pMGrngPk8B6EH8diTU5750/NnonXbW2BcF1SGeuTBqT7TK5wCEL9GBpVReDcb+eg3+hSwcyP7aERxk9Do1TnmFGcxPKuLLOIS6ecvVpoShD+9PxWD6feaDlGe8SWUKchzfxqVf9DAdRSJnY+hAi9Y4VbqdBA+0MVvrHPyTL7JoOb/Nqbr72vSBIZOfocoZ3rzXZFkHlVNgKGLtlFSqR0aYIYcRd2PC+mowxH16/s/YzfW3fINfaD9vITe57vS9M2gMhvHNb34JXa9mtVZKwiGyKIT1644b+QIONjauywdSMNJleb8p09NODcCJxnU6DrfsbyIqzIpH4N1SYjUx5xr4dFtLOoe0NSFMYCBPbRQAcfYnqoZwthnO0=';const _IH='e603e9215acf95ddeeb7aa6d545400d21ccb8f23b4ce425a3fb9a8b1b65cf4d4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
