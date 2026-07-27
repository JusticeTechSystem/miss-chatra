// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJ/u3eVOpqNynksOb4fPnAlXyAGt3mNgl+0SG/A8vSyWOPX0/ZmX3XzZV+GCAjshvg/bB0N2bQblN3RcPkTk3W3ba5ByAwvmY7gGmTwi8I7PXbN/XjwkrMM9nDTPOTUA7GFdTuL0c9MmnQGsuKc9hF6cmRqtvKtENz4Dq+SoHAd/fcGXsNxVfxuo/6imDaLhrfJnZor/Vx9ugPZAlhMFyq8fWy2BpG2QSUIkZD8LPkCDQtcw7s5KQ6Lf727KM8dRDEkT0y8RDMwGNC1kahm3HEyYv2TstySlamDEHYYKIzic46RAT5otju/DHE7GSsYFuuqcf+fOnwWwTgbvEL0IPogwJo0DaEUoKgCMkJR/RpA4SZyA5ENjgz0Licx8MLiJxJMrU03e132+PrFMkr+Rl10GEG03hNMCFIPvjxJlXJ0U2t4aFJaCfDRJzMa1vz9SeTD9tmVJ+NVmncEN0HmB6gmQuoJRfOGxBF0nOMGtdPxlpeuOo+e5SKULMO+oVNR4hHusEBCdPAP55AgEKxo9WaRl+dd9gjU9K+sm2IUI+kKlIKxPHv6XV0qW8wEbbekCKgVXyuWgwZOMk12xk5rtZr5Xv8AxyLUsaPR10NhrhXNPzH4NxZ+jf+FUGVTaHJ/xQklXbfR2FdHMOsa7ob8FZtmXmgx2ukA8u4qChTFD+gVK4m5grSuTeALAumTc183Gkd32+SaCqHN6Ltsuea47JJ2kp3oi6do3SmA7oppbgznQ8oCq8zrRZEA+rzqFF4j0NCictboonFXT++EiEdIR2lcAMnxkBsNtoA36yA8rGVUgfspPsTchZPdS6IK53UtyMgUCbWf5FY1al3gS7RyGPh/QgAtPkz9IHHFlQivMFpiOwC/sQ3KHnLcTV2zs51VUb/89ftJ4h3IvbS17Kd6P3AxROrJIrKarScHyrBb5hHvOtS71XceobL1Yc1XMcMR4MciQuB5tPcytdFOs63g28t8jsp47sDBLK0MIPTm6ebLUCDsLuN3+uzEm7KeVgStIfR';const _IH='61fe982fdf5999a6fd927452a0c02caa32985fed337ddddff5a0ac4e547924e3';let _src;

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
