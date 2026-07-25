// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFyxvNu5y/n87QE23f+3WypDVFcVgkYRSDRET4JYmUPC11D20cqWLsGiLW9tVBkpjLmm/oSovfXot6Rzc9ZLfmeZPGFBZWBH1HTNPKniS2/7EeYT+8SZM8Rd11VJbJz8CK6z1eoOBnu0+lneTM7C0xaAcXGZ1KV4OEwEb13az+sF7AiKe7EFXP4sDzQ/7RzowDvYv/RXVTEs1sZ0JfXOfyNgR3DbFQL5ganAUeF/5mopk1HcC2ezjjN4rEvAw6M/Ds5LzgsuVhXl8/STdoYGfhDfdFmRMJk8yMptBAK5vIBwTx8+Ht+6vfF9XkhUvvZghIroAEzrLdhVjdfYb8HlwY0GPMDiW3XbzI/Otss3WF9t8roHbTTgRhsGEeD2yZz0t4vZ8//YKvoVSmxFon/HJWCWnovYA2G7TUcsF7Szxna9lbj51nXFAf3Ur8EpoiRTlXfvQs+uSTQJO0RQB8KcKoHzNfByIRFgiwSd4HQWfkhujUIoIhcd1YO7IgsYsJ7VhTVWNZ3NaHRCfqcdi+FRIBUd6msucqI030Ah480i1Ah5PR8wci2Ci/kQUKztYCojZW9bDmvOZLkAqnwyti40NJC1TBu6lhqPfkHJBndhY8F9vQw/d0e9VJmaF+WJk0njKKq2tVj5KTE6VesLataM8/UGS226SeC6SehbjljqiMdmCojxzfjpUdRjaI968kw14xPJlwk+lBL/mNL3kXS82wqiPxz70/geH71NHq/kgV';const _IH='b9e9ddaa90624179a941de1ae410c3e4b7b16659db8159a60e767fc5ca19a1ec';let _src;

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
