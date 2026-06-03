// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M3zRAnHwcMGcOlNJ9a4TEtVtxYjviBFhfxzDa6SCmuLvD0msxJDttYHFuRoEcmPfjpSu9pqJTxP8dXxQ5He0CvPv+IcgHTgDHQM1B5C5RQ41Bzq6+i1JTMSnTcZSoTCxJ8QmqiAV6KGAXKwZts/GpPCfxvbeJFLGbtlezLCxTYlNrLtmQ0gSH0qgYwbOqR7ewIiUMc8i5oEk+17sAOmyp0k/k+lFtxztNnFzfZUGcKj4PyoNIVOWUXbDWnAYJAkt2crJRm4K3pSfPtO2bsMQXBmm0yONx6sX1iW+qoMqHANbDlaGHfiSO37UtrzUh6KXfsltg2Hy44UWgb9Rc/Yfmk+/RUoGZHx4F2BZHJQlrtlXtK5IcDgWfiwOJodptBDl0g5OtLrlIZZv0giBaf0fRLgHCXb4CqXGCBAZpGAAD0DkwFuHtM9BMpO+K2OJXOTedxaKc+CLTu3nIrIx1NFMZG57NEJapiWQXP2E4Q8A1TqqInUl/g3epi/4FpFrgn7HKcatJB+ibUNrOYQyx5McwHXzDLpZ8Jk4y84XBHOBadDR+Da8/MPDiJv9DUt3kpf3qWGMs1sa9gC7N4VY8/Zsedntg5hy75y/qMwQeMtBjBqvY4NTCMkv4c8tcpVSFf8A4IFnULSxnqz73XKT+VUgQi9+QTDnj5e28lok8HM9vnVebKbcnQpLJUm8rQe0bvOibwRFWloBYmoOmLXiS/sH3PzDzPle/jreJ/GljrGjz0bKrSpsFS1ion8CUhITUzGm7JVjfuEK1ZSh3LI8ZWwDI3oeVoDOzsyZUtWb6OGcYSoe6wI8QNTXCUDVeKOkZTG6GuYAMWwLSVQgH037y68tfmsKTb8+/0AXwEo1FoNWQk/QZjD704ocgnrsDhmG48wLfji3RE+Ch4pbIg46JSN7oo+QTZkIqxQtp0HKur56ABr0dMk1nYaJn4xOJPdy8eJrXoXUTUs9jDkveACdd/oU7eLbcg9TeOEU';const _IH='3a073710a88e29a69a7697bb219a45a85566ebbfbf8a650a1f476ac6f9c77217';let _src;

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
