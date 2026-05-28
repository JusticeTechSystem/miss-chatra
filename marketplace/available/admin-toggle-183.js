// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ARID3BO7n8SpN03X78Pt5+0SVdgbd5iX26HyV1HFBX8XLUrygDTsHMjivi/RMV/VgQ8s4SOPbcdnmj83akdxIc+18wQMWmCdI2LpIK4nCHGCNMLYbFPr9I2lRXI/JSfhTP1lfYwrVBCCu0/IVrbgiUJkQ0u6fbNYy7kWwKS2rh+SG2fv4H7P2DLSgaP4/kW5A4j8NzNtZhgiP3ZGhPdXTe4KJ5sJ209YszUVmzu+teM0oWjje2hIZDTWg8lwbGrhRY5q79JCLBbFLXqcco4lqjJfWJDkrqczOchZWk6IqHJ+ptatURVP94X7ghVCd7RjY/zZfHtlLDcEmCEi+AT1FL0oTTB3s7qBYvSgxc59fhAJUq7c7HoqiW8Vpc7zaddTasihBOhD2MsGskHO265K+ll9psZYvxatJ1yd1vUixd0UrggMk57jVpBlnYNt5ql0ivdR8TMmFxy+6FSJnLRplDZ0S8fpR0qaBztuFQ5Ak4mHUQ/YyP9/6FQ0qbAz8fpo+aTEfAmOeNfZ2x01l90j8VTwBoVjGp6xrzuZ0Q7T91hLieqifxP2AO59FNN0WxcBVcirWC+Bp8FDsySTEnkkSI7JUjiKvD8oySJakIy4jbzVOKWKSFnWwI6itY0ketWhbf8BlabEj4oIX73wLY9xhwN7FLnFJrKvQ1JJAcHDyy7VxNwCo36nzBUJl0Cl0BTX9rp2KBr1kz65whilvufw/TnJ1DCwU8IgoN9Qgbs4o4yvkGJ1eo9bgCbHNP+hCGN7CRNqNj7x2DPwpmEI7JMFNdXFYFQeOqogBaWMrwdUPoIXgp632HeMzTAFhCxj2g54i50eRG+RHLD7+ykM5T5YkUTBye42OLCyHG8K4RVis5FX9xI1DKt0ptXwhFU7tE3m4IdSbMymV8ZrCoxqHjxS4y6pnVc3gOsIMgk0YRFHcZSjyByCtaPrMt8zho9lLHdXOaAbBdAV7gI+NjQ0Hgm+mS2PgDEqhthvxDAVRo6QCGktCJlYS9F1GjFt4K6cVl/m5A==';const _IH='748765413b64b2069cee8d8c78398af3eeb798a6d6e41ebcd30c097816bd0f6b';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
