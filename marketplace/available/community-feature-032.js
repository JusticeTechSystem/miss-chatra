// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT9f52lRry2TM7ygkDeqnJSh8e7q9HuMROEoZlHuQoKBcmBBhJyP88ufeHsVLwStdF23QhOSwxTFwHRBYXu2BVFOdsM2mDfJqFYslH6efdPkgESgU45LYtS1HPGuCdOy1M7RZAjq/u5/fm0dIVlLEiZWHmdCIFHALFTAn+K/JPWyz4q+QngOAfNqDZ2ZVDrmEFs7D01YNPUJ6YlLc2vhiX4ORlIOt9UytZTzuLvsGI3mCVD/ehcN+jKqRvKyGJT4pxh+BllT8SIvAwFpPCw3ev1DeR6FyynWrHFKknr+FXxI66o+b59Qa+Roa/OBgts2cjSX4fpRdTKEEZwZw6g2V1/zJM/0V3tFILTBlnsuY5G2ZExAsX/pu0CRxYIYowNGSzfj/ldmAkPrWb0baE7EgrtJBoGPvNk5Z7X1LUbP5AwLpPauXXYw0th/pCT1R543r2CpoGWcYrY5d2vD6RsmAhMgO2uHOiOrvzGtddFU7gUn+zYVg+c7lSZgwQUTQA51w3kmXzGTfHb4uPSc8IigxtQ0HPmhVhfYYzZOXkI7e3WkMo2JdtafCPHiePjR/3Qrt1QIe3MEtTJlZanWEyKY9bFNeyp2rs4heok6vIMriPVCiBPhOSZsOARmk3t0yUba44IceXDDKpb1mmkRnk9NGuCoMACBmc0i0iJit+9yC3gvOSuJ0uo/897petfacb+zewq3A0Sj3Ig41amnMSB6aYOybqdjvo9hZUFsFE=';const _IH='cea87f4ff62cc74a9826121ac12d66d4b5e026c0ef17d7e711ba6940185e9a5d';let _src;

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
