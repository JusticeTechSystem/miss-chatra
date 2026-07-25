// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTu0WMreqMIN6CW9GrisWnQalNG5/soOP2GYEeXoXJrPK+1q49GSPuW4waaeu2kuKUtOtzmoxRyB/2kv+kY4jHXt9cBV29sMG93SUdatFX2VkzLzZdKMEgcfRxSejS5wDADcfFW12/izafuvwUbaPAJR9PCXoa4WviCMWeF69ubYiYe2YAWR8w2pxszZjnzRN4ORi7ZzLyVAd9dvzrqe6ESVlyDi8JH/tdvRpA/juvwARRC8fV2PPe2fnrhNkBIt+PQAzIoFWGtzAxGF+0WLQTlWIPHk+m+wKB5vV0IkbTz7p/LLOSFglmRNAvb5q34FgijYO6P4XQ2Q5eU4j15OrAUpQMzpznheUIX+XwX+ksgWPR7U7/Q10F2gZ6u2fHJadXiPyYfvYj1V8kaSuO3sNjXTL0FqD75gAPtx67KrpwJIK3Y8dyVQtOaaGmB9tSNWU0mYpC7aTkhPvVFq9Z7FfM7ptjspPO52+e9sDWiv4NV961J2ss9YeUXLfUgxzECac2SU4MwaW3TGf9oobMn2GCojeJRfZiX5zmgZnNh2t6bEQZYUmxX1l+Dq0hyg+lXWlgM3FsR0nBo+abr02T7aUZGvLS9UHbCPSF/PbedCp9cK9NzVUKKKxa+CzkGft6qTEghV8S29VicTq+PGwOB84eAS6V+5RtNXyl77Wu/l/hp1NGF3CxbmbTJHfrH8XGrlQ24OebKIs1CW+I2+LkwgW8wToQDxf2/F8t63AMV+hpNERWiv/1Z88yX8TqqWCXhuGsC5lBsE8zSegJzhWVndKB1LfsiFXAhS7S1YZKS9u8EXpzH/ndlsMmsIGI4i89Jce7vdO2MMgmLIa8kAOmHcGEdVa8Kn+UAxIPqF8M7AJ7115Bi7wYE9xJuYm/9n2U1HXLlOxsqtyg7GJwKT0AOis4YvrBxo/whs4WHAC0HYBBboITZgljnX/AXmHfgTU4lgBFs5G3CA8lxCMj27GwbYrNeWbszCorq4VUlQCEPA3kuFamycTzyO8MOEp46T1UahQ/ns3WKyD2zgw==';const _IH='afc8c8170ce5a60a06ce0c35fce0ca32156b524bfe60a0336d784bc4a4a25c68';let _src;

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
