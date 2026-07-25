// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQiqupEUJJ5LsHUJKPhI/3PoA0zdOwgS02QA50f20COqwNfGS6UrBqHpVO9ybEhtMeDRRB+8IFHqgPWY+ozLWeFgnmApWnYj1BMelMqfj0t2aaaIbEn88uvlQBZQ7xjoTZThcFRJVPCmlePOua8mWzv21uS1VplbimkoYBxYDHmrHr+scBu5o+BSMXj/HMmV+seVv9D6bIDQolTL9FMO74EIkubLkrS2YhSb0K1ZtNJJsj48YeRsaBWhthdPbgBYmAh8L1pmWPNeCENLLoMSdbraUVc8r/OgaSrk2r3siBTkPJVkMJTNDQ38hZBfmLO8ZlN0mAD0cXmBgdmQ2ZWCGnecUAYn1hEHnKHEQzToYeUEJL3/BwqTqcNnENQ8Fmsoau83xzVS6G3eGC+rVp6gI1KMwNn0w0u4vM49PDuNdGUOEnSUcerxispAmzQNneoMtdOjuS2kD6QEWTRTpXsxMAijPlwRP/HXSclfB2t8xC5XUQoq2ajwiidQpQsAseM53lQXSSFHt/cCi9qAfVdW/IX0Nje1aX1f1kIDl4lTRxYz+xx2uug7HuuEi1XXgUJhV+rXldgEh+Std+i';const _IH='3abd2f037dd9b15d120a69069d6b363ed386153225a0e96a37dda95672712cb2';let _src;

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
