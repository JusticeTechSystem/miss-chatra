// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQqLDx//1jncOhElWaYH62sJD7YVPJ6FwF3JOo30BMT62HY/7wAZ2QLdP+nCrkvHDpIoO/KEkmXE7KXdJ79J8tkDHZxzBMz09WQFoYzvF6rPIm1XjqrHsclslm+B47r7OEtinMQngMxqiRVZiK070iuffM6KfX97gBm0wq3boKzTAaFFWsa6DqRxukp40agZe2xZDmrzKtTjF/lP92iaKybJ3GuMBDnLotWfJIwVcbUumlzCM4kyD9KBCyewf7o0S8RrNxWZFcQmxyjXBt+pZc9KeIGWiNYYC8O/PisZmgaZXSyDyBCpAHUZf1QQN8l08Xjajme5jN+f47VRisvZkypyWH6aXhF+rakF2finQIRWuXiigdqrinkANizj067ClThIjG557DBDyt77o/iVDi23FKpADx44SyPKwpbviiU+abCrGER1mz8qY5mFvmJAhAHA7jmepnChAIRq0YkqHgpmtfg4eJ964zcvizi2I40UBBOJki6byVTdgN3hy0erCD0rIshy6+8+K/2XynUvlI7ZpHUEaB751m7SOKA5zgW8FQULqQntRGDRNkABOTnUJnFGW1zjbnnvJ262+LdfrmtPm09OKoxapicJfaECjAng2VJ0dyN+EUd0/MaPFwQj9nYnIDXWUxV34VD3LOGOIP/l2KmPar6VQ0rLskb/gGoPw4eHnaHA4ritTau1Con89emD+Oi3BY0FvGeeDqGcHzqSMJTYrS/DRkzzlcSRm2QN7xNrfI3Yw==';const _IH='b36a84f5d48fac9c2044a54083e7878b922728063f5e93381bb45d9ed1f51e0c';let _src;

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
