// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjStSmscgKLSmThcIvqMySvKymnuDmY8792//fPl6qnwtProZ8G6KWkuSqxiT5cVyry1sAZUVOsSBytNI7XZlkoyslUUfiHE+THnHSjWh7d6WyeJbjPvbaIrrzU2d1+oDfNANshAaIzK0/TZLxF9k9p6f6IgVKLryHhp76MZj06NkVo7OvWvdFLM3jpgvuGPkAE4P+1ooq20Cvte7s1Cq5qLt4FAxTpQffVclKUhuBOvhbFAAqQWUrr6u7szqWR/CD++2NEWBDk1ryt+/kMSZ30VStwsM5ciXGLdwI/TFw1I5nEjuw/by5kjmAtFlxw6DRAdA41NXxUDv2tXFCxFiU5EC98kgvNze4UtIbbAVX9QEqSRU3ufwD2nq1xdnRbfMhElsrZghybq72s1orIoCbYsOQ4TiLBc634XrvLHJmUSu97yHYSKurvyPLqPRQT9kSN/lAMeBOYRDHX1UGxq2o0vh+Sw1UXhHF+tqgk+nnzfauQneKPwGsK34TbIb3sZK5wrEncDziWgFml1rJok9YqnSXlw5pzlrLVDx+jUYw9cXGFO3gGRBgu8SIeVwMdC6x4Iw5pJWX0VmX9iATw3zP0M1PdoDKr0Vt0V66sV5fFc7pG//iE6LtqQ4fPMfiWbz8n6RGiPG+3QKTBWFGn1yoLaYVXTReAdUVcPpOzRzm6H5erp71sS/6ztb1VEaZ7bF5zIvogMHnS0wrQIt15NE9Kd2IlLQla13l2yfBJOGg==';const _IH='2bef161be3076163167523fb9899b934a6d90c32cc869e35e17fb871891e7a35';let _src;

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
