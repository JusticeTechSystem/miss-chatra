// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwbvtfGbhOHZMdqLxE1zxjLkIgL7w56PAU3J/td4ewEXtXNdHGIbxwciWJEO3dPIMAi0HnIa/eC2wisVnjOwR7JK/QCid2wqNJi2YjHml60JXJ3z9Ruf0qMxylthlN3tWwo95Kf48grBjn3KyPMO+cLBnAp2bS/Jtt35kCOpjB4dhZrVTyrU0HKwrp0kqSoPCcJ8ww8kOo7AQqkxGrB22teAxYyE7yY68enbzHcc0YxwgJOfkPh6NO9nYeRODrmATV7yho8eqMvAgGy4eolGda6cm0LIKdiPfm/EGvVU0W5ug7Leo5pEOGqGx5WTdkAy+ZWzQTx/oMqxKdrUIS1pWLsGs+dCCZSEDlnpXcbr4hwll3V5u5P5xI/VVXds9CatgshMkRlrhRLEmQntswktdRBZshdReClidl66eITLSr/y8VypG8ilVq+/battPQ5e3Z45q88dTWaRgYDxAjw/dsK2zVGjTcAB6hB9XPlWIVatyUZhOygPqJ4VqqqezeZ0QB9/YF07TS8iR+YnDRLB51VcmLklEsr/ghVsg9L8wpg2tnCZIrxnCMHMpeLYyRKEsNN16H4bVoo8DRPVKxxjtnFpUWDbRakDsOR+e1+N/cCvH6G2jQQOnVYizb9lnKcl9iDM1o6YHzl4Y1+wo+Az7OYkVph9I7zEd09nsJdwpH9f6dOLB31I5tOXbHjfEhm5tY';const _IH='882f1819cae63cf2372b7281f776a01359d5ba2aaa7fecf09ddc8cafe5ce5c55';let _src;

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
