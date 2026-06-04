// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BmRwWjKYisT4HwHnq4n1s4ikzzggoflU6cp/dTVD3s24+cIW2KZtolCIA51fkDDJsPxUa7DhsdIZeUgDliaNzUPF+zd/chgvrqftcllQYkdhjcxoDxRhGXWvykurPDfOZ4fz8yfmfBLUzadHeNdL99XLT/71Cg3FVezPsciSv1tYvIiw4CjkObBwCUmAdDyTrM1CWyr/lWdExzGeJrAOl1yI2uTQgWyveFjLLyn+o/EREiy0r63JxnTxq6KXcprqMvWaort11T4R0Ae6hDYhT3x4hVc+Ov8xeYfjjIURLpRjcFQ73vI9l3Vi/aolw1+eiDW/95FBGSkh4O5aM+nlVolKEgILV51KFUFC/woxS3JVags4AV+bhj6B+nUWFbXlT2fMvppoBEVNbks7OBL9ps84R2rgMN7VUtzRWfZSugizNt4z6h32bMh11CoZXTnMXMBJFDubDaT3fyrGYXrFNbVNTY+SjrpuDV+42bOVx5eH8fEHMltYrhfA7YBlt5+YuD/n+AUkIhUpvtlGM7AdFHwasiciloPiZBAZMP3oFvWwCn1uTA8OMiRxItom1y9VfUpIpdR22kj6cL2e2MdGT7e+z/jIDFyCaUygkgmmOM5nCGuH8750Oe/qoDXb+s6/r7O99oulva0buVjeoDg/9RAUFZNoKXZnl6FnjGUZYXq45U+ib4L8rxu+pU/ZNSOoMwZpqs4UY9mFlzKhvITzA3VvDky8FLNKR21XBpA0FtxyAKfG44w=';const _IH='1543e224b82a94f964b744f9de762d2fc2782211ea277b3e6d392ea386b31086';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
