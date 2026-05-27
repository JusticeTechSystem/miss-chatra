// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TIMD+W6BJJn0EWHaHx1KLaMhX4LsyLl64WHS8uE5lW/zMXQPdbIn3PwQlwNJeB0SAQ5iI+8Q8xnQB9DZadi2vkrl9KRxAqw29QGKfMTgg3JmuRG+4UIMcFjpW+0weg89z7jpw2jEO4nAVT7qtK/n7PxzW00cy3hZaa/iXbi+PfpcGvt/l1/cncflHknSSvIKnAfKm/U5GiHxDnz/+aGa+qy1LxN5e2y1UyOLkIbxNUJUvfy0m1Zfjkkpv3NU/Mt15CBDTp5MlQ7DIEc8u2gpudsGsblN24wzptVMPkihKTqP4ZjHjIJPQ+D4JVGuXDr+k8mhNInOcjuQzwfuo+Z3F55bpNwcVWcqAHEaZTE9P8DcYsbE8wbAOVIv+gszE2GdeQv9NAaea/QFJEPsWLAfBdM7kkWsxW+YcFkVUiFq0psUpcw3WWNTM33GT1LLRPxfgmAur9QMnyBbqbu5snr2KmjTneamY1EfiwSYmwUWVsepceZuzd3HvzTVBMdIpsZU3Fs4cQP9ezo8LqWfjtrVSKuH/i9AVdJjvFG/Ml9ewei/39R6m5FfBv7eIv25hI3tYgPpPpl6HlxKVta8YRwKm+qHCj2/U6Zbb23wuv1zb7sHmOAvjeLQn9fvGHyQTNC3fFdn+VYYA0O1d4TMwd/CHgWcUjL81Ok+x5Q9C2lDqKRWZeWDW7Fbfdp30ezUfYRDYeVCtSxEQ9wseOw/7Pv5xStL1Ttkj7JdZ4ta8prPAYHght5toJ9AnBt1ZgRUx/eXbI6MgPi2s3fjV4jgrZDthRp9TiZqUVKoemNC4yhnO2zKzm/ZI+vpEP98RsuRzMGQYLFZHxWN7Q3XmIKkoerl/GAQ9dUOHS59oTDLISb3LJdwA0qDhqQrvN9fB8nLDzRH9+gwTldRVuRHz/nmNxcqEv+Dpic5Xp6Udh1BblmuuWx3aPYKJQBKJRAA6o//s7tiarCBsjEPX41w2nRtW9zAGHpuz/lFBfgWr3qrJTQvMrljmpJ1cxSum8FeJPoLYBzF4HltZ5IZOj+YgSEuMTE/oKw5tTtMb6J079iRDiPRER4bYbhdWg+gh8qTmIj0ILDaoIq9zlpWDVVOShup6Q5k281lEkhma3V1N3qCOFK7iaQKbHSrkfTkdnQ/SMDjdIPmG57LFWXCh2dOxYl3ri/Lli0++/TAYJZpFGtX85DhFxpkMjjoQoewbs1EigrZ9qN2O2ffEGXhLRmYsxYweEL1YrWWNbXSNzIVBT+KGAV8qrKy7DlCvBctfFb/WE85lu/OnRZ0BEDSjCgW1ElOBhwjwuh3QN80LU8DKfqBol3azRP0BjTByJe+bfChrlaLDDX45C80xq1JdcMub8fNPgxmxmCGg+HQ5LwMxIRgrp++Zi6eXG2l/fHesFvnRe8pCO2wa9F6EHrLEA==';const _IH='865c689daeebba16c1283e1ea8e1dfd11a3f69fb31937d586cb56ad807ef629a';let _src;

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
