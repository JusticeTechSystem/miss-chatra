// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRHq7q14XqWwjt1xTiQXfE9uumNQCkhMzmm9I+5Nn4buEahC5f0lBXsDB4sQKn0/Sb7yMJfqJm0w4OCSJrOGrivFCUDs6bDisCcqZAxHEfcQysT3cDcJrDyDL05urf7xBFDGOiKTb5K+L9fR+g3V/FE9hqhR33ZELTvDyeUH/N3HJGCpagG/UaEsKDlV6wA795NGtaaxn+Ukb7BChRhXkwJFGsqdvwC2J0/wWAhjBKiVPdeeu+joS3/fv/4XfPSEKgRTnBmxu3nMFxxq3kKuppvyQ10RGwngV2x95KPWwj7RiLmZYxvMvKrDETgCXwiR1T2byJ+4r90tnniuk73I5Bsf4IjdnwvCgRhp0vG7dLb0de9l7JYt3PtS2p/G5OThKoap4Oc/tKmrjqA9dAMxbDaPIdY7TNN5oh+8bZtv4dhFLRkHn27NrIUtwLITzkDsgPxtMVYsuyy8H1ww8KtZhM4oevGNMfuYE+zxp5D5UjjejMpi8o8elA2I4YkjJhbKCMs1DVpNNEzZPtJvXj+Z37v/yrm56fA1ZY/5Bp3EWyLyvglN3iHD+QOm/XQbqR16IiNE0mPZblOmR2Rc22XXl+k4F6ySd/yIBW6yPEy73a/Hbp58gq9rQFSukm/cMAJCdF1Lkv1EiwaKWNYeKErbpNW7BkGo6bbklivbj1l0Sy+aQIJmFn3nRfRgnpahpHRu6uxxD4n80HVn/dhjqVsyoXXvC0ALyw74hUC/UoGc2KfKKLKikpbhLZYL2MJVimbrvovsbfPnLGcd/KHP5GXfNxdIZeVghWo12JnGFZqO7kMQyx/3A62iK+17pcW0vbuONV4vDT3J0AEP0V942X7/1kNoCmF0QGaP9mFI7CCINznDsBDbv7zGWi/J8PDCZEqqMr3IWk/vCGBsg2YjINu7Mmq5HTeUaI6yjmlKepUNCxuMZqI6R1sNKriuIJsdpiSi3Li+kXHDyjQ9EaPZorShMDlpOxwDV8yl7XQHomi';const _IH='5008120d2011321440f5f57309cc4e2cf1a2cd17b6da8a0234f9dddc3ce1d09d';let _src;

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
