// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/ETxMjSz7MYQCuMK/MlBswJ5DmDfW1ozdHmVqmQFjuKYy0R/N4whWsxdFfoIDikTIy5ADTeBvKq75s204MUJQsDliTDO34SZ9kaKDVwONNc+lPw7Uy8faZOoc+31X8YumbvWh5x0z4jwg0gKiiGi2wSAlZm099xTqCnkX7i2/QnobjRYfDeQ1k7QQgVHZmB+AB1yBBjjjNzhIqCls3VGWdKtovJaHG4okFKWAo7b7fGMGLAcfgsAXeA7Fev6CMHXtfY0Fvh22cspSNsQKBlO8FN3Fp5P9HE/vRVyxEuya2mckmNoUohbZT6VFwbFvM+rv3xK1gt6U5j1B8KbRzH1AyzUXFlvpi1+IDTDp5Fq0A0KfzF1HMbr4jdNB92pxaJwAoCFgbSPAQo+J3fRH0WbELxz+F43k66nwZfYkh3CrpvvPezX0MrTSkrcexI7WgJufaXwER7bW5fOvnhPVsSgWB7ORgakSR7g52AptAKZHxEaqnaBlBrb1GAalY5CvDfAzzsKYlqYfuFnoKwNzqZuDUso2jlQvnDSspTEwkUrmokqj+1ObMtCzgIMhneLQydRKpI2nJaY5Ikr6VEgjluxC3m5Dydm9NNNz0sQaDiV/9dDR8VMXF2kF3mNs2lDCBd+xDmCXw1Ohe9WowVzETK4NjaItlgj0KnXpL/QisoarPCYVfk/3nH0hO5UCNIgwKjpRVD1GCAJ2bQm2msDnf3Usl6Gg9J+eSMjtZ6oq3dwcqRnImvAubYTtAufT5Xq+jvxol4VcAzr7xOlXMP82iTFk+KwJLrbkDJ3uuJ2Ze2UYBTNIDd0mtpmj/4irIlWA7Mf7r9bLpEALgRCiA4kIc39d5UEtW/NkhXwbg6e/yvGJVL2F09QrSWecwfweP2Nn1cXssfyqTbKn+wnoXEg9MFT4vXgLqYt6v13OPYGgHCyhV59MNxdPa50h3Q2fuuDYgvylHyfDnFI+j7dSgzIa5/1zNdu7eKy2memeiliaUt2MnMgvu5+S2m9a60Q3++qQQSEgDudVWt+043GqkROY8z4FOr4Lk6IO3YsC+ML3VfT2KWvkZIOAPCHLryjsSCfTQZomrbR9/2Zt1JzvlSlaDsMhInjNVmpA6KcxAxzrfoPKFRxo1pB7bf+53UnfCnW/7Qjp0TGRZ7UReIzAdvoMJJgHtzCyh/TQJt91hPu3EFg5F9TOUcGIWhQuV1Ryat0Gx1GuqHcud5kA+Cgbgb+NeY80qp1CZJWOMIFi2eGy9EmunhEMghHbWl1GHPsd8PJ22Rd5RG5sdxzgTHr15K6JygArj3g53iIX4TQvynaylQviieAQbt5cSLstvniDRY+wHW4CdgaeoGUR/Z77WGANZbt5rnwMRyizInj99u5yov0=';const _IH='70329d14d9d30825d3b3ff93ebdfc98a8a0d8d65b90fa54e76aa60ebe7a67eab';let _src;

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
