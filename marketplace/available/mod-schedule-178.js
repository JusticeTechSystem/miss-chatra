// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQf3asb/5VjoaphAcmud4U3v6+qKpM8yG+aabdjFHboiVn0KjAyDhFQrnfEaowLTdKXOXxhbtijkvkOjoa26GNEUDkCL3Oq2L/BdwO/s894hIClwQ+7RawgC5ynRmNiYMm25B1aNdK3RS9RYBL3CSneHAPO69quDiBBD196kwEQj0poln5lxMUz5w/OEvHO/6s4fJE+vLnOKdkdJ8wosCctjk4DDDuM1/9uhSsyg2BwhLSyDaMkivKcneNqe3Pkha8cICW7C4Q7sc2xmb5akOqCkigdWfnXNsIMryNRpK/FMg/vtTxdktKycEPfgmWiaBSAYQCYclfBwdrR0QxLPT4BOQ/6U4plIa1ZoZsdwxprGq4yygNwn87WKk933Xup5lybn1qpIJu4MgPRa4lITpxo5Wvk5ICtf5dE9wuwcbXC1q+Y052Qc7wauyWEgY8CLTvivPugrGAnCjyqUN20tdywdnwPXsz2oJ6Z69nkQ/iQ9/753GKywcepfu3IKRZ6V2skXTQs3m95sgXfnylXnNJSiBAgdDYkTULQRodOV+VnZoxHzMIawFFWyG+KqWREURLQCLeqm8+aju0hqcbRKjJqwVzDVmgJIKAJQGzsie6Dh5KmZ+6BkVuO1V/mbm3zDNMvl02Hq17s94WcghQ7pjj93mOvr5s+0zUYWur3QuH626OY0rro+oNbfPCjlV0ITDlQ6shMCcY18HmSJQ5hsp6VLTILuRPgIMZC5xL+HG6nvM2MRRjzIq4GyqDYRwOGNW3ycHCqxgzRMW2oJg1l5MNhrcVlV12oAxfk41BkV0BaIPxZQOiNc5wSshw2XdYWbuHTZGnJhGSJv/EIk0QDdukPYCkBxQ4GTCD9R0h6Ouu+FNZBoeD8oZBncCWh6AuqJ7cOoSihftuF5/gDr7a0gmp0Tp7ONifnMEc9R4gbDMZQYZuOCOVNjmbKRdN0nNoVOL0VeZRvTn0yDrRHQohdjQV2haK1uHluWIal+KTkfKqjtouBz5ma5WCLJMBw9xjagi3pkz/t6cVsbPha14c2LtwjyVtcEjBm/l+hPBZXVi5VCKpxTk3CqAxUr99qpwVv4I/aJRu+TfAp8SxuYg8wrISsxZOFN13CMJYE7+qaZGLtGQqtsQBYdq/emxvyDDXvu5SgJcZPZd4wLHhL6Y8b1tRrnwyhcLCUBwW2Tqd24iMYQeAPcwR5eJqKZVdnjL1TLImYz6F0hCiG5kb6PPWIeLi869jN2jW8mWKw4V7t5uARf/yR1iwPxU9TOdtWh2rAHDf5OsI4Mmku3R1ME3KlxMnuC5VinKPM1oh6mPs5Z2dBCXSTvrpSKWN3bt/W2Ij7gPOS+8oPvx3aLnXauep8pfiMi9BGfuziYbxLFsae+ptZB25kdTxdUcxxGnPbS8z92XNrYUeAHxTXe7M=';const _IH='2e93ebefedfce1576811cce13c7b6214ae4763510a395d9da1bed75f6426495a';let _src;

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
