// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS7kft9tuczAXVXTp9gZJP9xtGQ51F4WKGuS8rUn0KkNTmDr5u4jg0o4ARfTDxJ/Q5yx1lmCKphF6GYKd3FLS/KnkeK7h9wJeAER2BnC/IfnEuYjRzuqGAcuPcWfCmVdat2oQtFZkPCFI55gby5KvWVaopGpPi8aWBL3euWYKGzADVaVD9t0uwZTqV1IUI1ZZ4plNjDpbtwDNDnm2IMym7eLXWXEfiZYbSZmnMHOosG+CH6t7Swu+ZqjlU2DdSo8fj04dQDhm8yCFWrkPUFk/JRCXJu96J9SvTfEIPpolRW6jh+ZEpfx3RlKdqut6cXf+sifYTLXEv2vEtDgli2YFV1OUIGp8bMQ4LROOBMbV/yHzv5ShlUlNhcJ18sqAfQI/afP1Oxs9l3DUyeBxwprgWClMKfgWtqG8XC8N//x/fftBLKsR086J/i44mn8BHx3OnZrs/Hgxfd16GpN7L4QCH1HETGmXU21M1dQmBxvB8GhkiveMGRf3EIHxp+vG9KzXfw8jYTC2yFDV2pq6z5F2XaO8vO5L6P23bTn0je5xTxPG4XeRsbcCt3cdrfKr+iiFbgJsFB1OA7Vy8FS23k1WLs7f27CQ+vU/U+4XZwk6gy8t7ftZd75htvLmOPLJHcM6nFnw1cGj8W/JFK87tM+pclR+nIh/VBu3VBT7N2g+6Fi0vg1hxRNBUZL9HSwmR6EigiQK7ZnsO/SQ/Z3A1wywyvqzdx9VDhBWABMf3kwm9DjF3MCDkSmTuuUkhtG3FEcHKRNr8i8+bmg3f1mkE4/bIVgcxX+t5WNjT0aPZQProhvA5EdV7UyOF8dRVOHXU3SQQXImvS2Fnpxt8q56e7QlO/CpL4YwbzTEg/Ph6lmUyHY210JIFnPSV4Ryp60wWDqOs/LuqeobxCRzSp4QjCxuRT3s1I7s/B5a01QG7vFimaxQ+2GeZWMNqWJipio3Bdy6e3GNCEC1a0dy59GvWSbtuWk2CZt+G7CZeJ3u3LO+oSllwSThLbjpNDJDV2tLYhb2E2MZhgSf5FQGsTeLMI7qCVFO/cMJu37ZYYFqmMyNxz/rSOJpQWR6z1sV9olOPaF39ZfIgYpwFq7oKUWDeAzQ6dDpMlOY8rFxkp7W9MIW7WFDaEMs5uXjnQkdjQ351v0p5getUSquQIX+LyNUtnVA3rg/sBMLG/3LuESFzFyQB4J9k9K9neWm4f9AdNx/PIrhP0uOc9YbUstRvyX1dKQmQMXZNU019LK3pVo0GTAdsHDOzXMj49NKdq3G4GlCFd+8eW5OjgdQ+oOqyj704jO/5Qe+ouJHSYez/2cfhQUSBTqB2RafoWhndXR7ktxNDS23Oara8PaGz8sNuJDdFzK/5pLcelKPv6koSZ';const _IH='d1e7189b2a551b2bb744867948580c5a46f75456979c6902bd865768e1e7f3f5';let _src;

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
