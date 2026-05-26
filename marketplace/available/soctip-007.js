// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nn7SY9wcJ5R+AgkGfq6QbRmbYnuDC9Y4QSFsdZRlanUEYvmBbrFt5uv7FtNtk8gPKbf6AMX0FE5h6na1l5ZfZSYbnsb380EBqBOONvn10Ejp1lB27zDrET0ZiVUTaNxZk3t90fKjPdewbRuYpt3781VSD3TEhlUef5+1kAsRgiGW+XdR4T072g5spanQDo/M0D7akg2hnnStMukguQyA2FGMX7HREKPFLfqxtPBssHjzsLKCeQBuqYK5p5rDFzYWddGrrJtkLvPN4Acbm4oZGF08MfCNB4VBfcV+h3UG4+6aDZUisGMdmduaT5XVj5CO+rVH30lkg52X2X89iohkhXw+ZGsGBNEFq+KANhX07H0Th9ZyuzB07jfYxAOVGcQjpXVzSQuLJPyrerhEYuJPsj38p/2WzeDnG24TWCa8RvYX/Fy1ldNepRkLdPilbsBABCQAIVYm5N4y7EH4DRwnjBVqlFqSKbG4qRgmDtOgeBChyk1yYVmAFOpoIVerVv4E324h6Q9FIyv1xLVZCF4uaPoFpISWLXkeHry8xZINhTB9AawA+pGQBCVpcrQdodASh0BuCHUjl5WQxEvgRO23LvwffOvxAk3rJgZz0tjyF88d6EFR42A/fMO0/p+tNIyN03uAkTquF2JrYnHsevKIQZZ8sFVE1W9MXVSp+SKLnGZkwLu+5cZOBWXfo9SVF2//SMUrTcRNw1gp0If70+obIb6pDqzD0HPfnM/Y1wKIL71qp8TUXfivAA6zx/C/wSEoCwAA+27TLpDcFulnSXpJ/NOrZMyAxIMrj2JNC7Lekbe0l9z+Srw18KrCGBP7Bw4VW+Meqc7IWkZC0zo2aXtea4o/mo36s1xcqNG30C5yy3XgZAoxZUPYYaDEOrPTgw+PqNfp4H6YOHjtv/5aXP6iMad0omJ8IOupFDX/QrMJPI1lJF43zMYIhTd+hW5NJgfK45950SRJfIYUedN3c7Mgy96Bc+BZ5wmJQ9U5zLH6PolKYqwiC2ftOdw8EVrZWtaBXu9Tgj3Xd514igcVjpnkPuS7JmK3XSeAB4Zq9FesojfqgdMsQYJSO4cnKc2NhD90+7NOFIiZie95lRQ=';const _IH='f2b19bc5b47af95862c7cf61c1fa0efe866efcee7550b671edb7c2b7d32d6d68';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
