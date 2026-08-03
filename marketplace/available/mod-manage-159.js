// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdF9GUn55AeDIgx25CoUHQAx8vUz73f6KQe5/O/4xY2FVmZTgXr/XPaGrqo565PuV17S6Y4oPvX211OGVfwj/Ara/hd302yhd8Wudf4eYT8TdnHotfnSAncrA2sveAtUMQAHjnpUMAQABXWLWLtd4GfPoKY4Tn4+nNWxlB2O+zUyHOM/HFFur9Ela8OiyyJLNHYZjGpHTdcJz0bhZsgdxPKJ8Sl1n8gHrghywrIRJE8tI6L89QEcVyYF3oYHsHTpfDPuFMi3vddPEQirIqMaIjLkDYnc8QXqyalfiWQUlhuLgpH2zCAby3I3yfur3AIke1gDhyvyfCUlSXsoUGiQMUemz03cVAwhL/qWfnN1YS9OZpYUrPaAC+bvgT6/IKaJ7EYXSVB4VVhZnew8pqorcJk2xOWIsMuqTRuEaqvF4r0OwooNbV5lRpZWCTc7SqutXfxrNfUjBjK1loWs9VVoGXhsB00C//zHRcDqYctwGYrD49EibnSlUH3HL30xAVC9l6QptskKYnMSpljQE5KM9EyD0JRWld3QGP3nBtK71qB3kzv8s5efmO8bdsClaHh4PY0lDdKFYvJty+A63j2xH1t1GD3E8WtXKYbAM+jZJ9IGFK2YcNC+Gi0Kw5BucsI/oqi3LNajL5r0NQAa28PVeZ3iWes6sQqtBTBE7vNOKeMcE3tNsdjBmTlRID01lW3dlNjTYul3CAgVhrh5kEQW4MyIkpbGZnLq5GpDliKA9/3Q3+kUu6q5PiI+UcqWSAZRBXokqnM8HgYy2MtrmLAudxhxcrhI46O0UUak9Ve55ZelZnze2fdt+ufgboKkixz5Xx7oDowRNfqn7KaLIpK2B+lPiM553S+oQKar3SdZENvEjdXKLCnAezv7GAhdUgIHqAv2hpJx/qljZPl1nwzJSgxXeMSBxbPXv6bdiQiL6Zl6PYWx8jn/WScTMZfbVDfdXCMvZ/tco7fEB2W94U/iCzTTsKAcr6KslgXSOZoflfMaa8Zjai99cFv8ULA1xNnYg8z1KyzlvClfovqZbfELISLD1GnyU21YV91HuPnivitIpwSFusGm+dACi2/23PYTg7PY/2YcduAkAyy008DLOAUrDbkcjDVLVyVTL0lYvTzPO7/4Ke5HmnqTUpFXD/iI+GUCB+lk/tp3KiB0TkJOx+9FJG1SlEzx4bx/Kv2QJ+aVtBmWLCFicEO9Y98yf3OtniELXyekH6gWxin0DlDDAM8Bh0r7fSycrxPAJvFLHQb8xnRB5iTLxJ3zO/tPDChaLyLULwxCrhK6N/M6pYfh8q+kBCplusIayu9T1zP3vEVbNBRfg/+sTJ8KFxidid6RZCfLgcJAu8FouHaKR4lZiqySkCpGiEdZ0pbUPB5KEAWf/5UsgQ';const _IH='06afd838670b35ce1479c2f075cd9598223f93bea13e472c539bd39f8e0c4e24';let _src;

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
