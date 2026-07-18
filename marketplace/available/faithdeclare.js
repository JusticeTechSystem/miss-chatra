// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjhyPGoOUQXKQY4WnAihMoP8fvZVpYBcZMxJ0pdo3j2o/6QmO2oIzuLtHiSFiMwbqDYRXnqlKOEGpixuDboNoHrayfqQZQX12zUB/pLeq5hLlR83GRTCOGihL0RHrVTrreM4HG4GflHYXp/R2jqSH2Ex9LeejZ47jVlrzF63uwxfctEaIqeahoUYxq+TuBNwcAMebjnF5m6JkJ24TuUxEwPaehlHneifbkOfYIdJicd8XUzT3EkwQbBwohJG9TQHHiSkg5S0MmdfnJ/oNfDjEZLsZ4Y5DSS5TBR3qifGyIpIznuyJ2STLSSsQhdXAIUoG8mF7FAHtv1WNAotsTsHO2S3pSrXo+v5Fi7z5un0rCZCTZmL13NWQTnr3zYQcH4UAeX7vQCk0WHvFTIitIgCgDxVf9lMmBMIPz69CcAYXT9zIXc0V0dKLlkTLP7A/EdaXpN2EuPA9U7sn4sM/tNPVsfixH/kNHnt6yWlG775u3UCFEqNNvHgM7EKk2ck75Fw/YrrmgAUm8vgZY/qTXKVMxfbMBrYTnP9a8CgWiRSG1RBmadIoFNwm7jCLcH4f/5tJqTSD1d5wybJELWCffezkoiaLMIbhUsBDz1cp/NbfAfhn4AS9Jd9EbMoPvzgS77NvwExnR5nRvkRgroUOWG8Jzqz9D56+aZhI/HN3CzTHXWz+dGm0JDA78gN57+WcKZcnguwHsvSRIsG2RCszu1DduisQ2eTsTB3ObUQf+Yp3AAJevUoOjjTz9oM6xffsqBls6OKGwyNdBZHSMobs80QU+WEWLJPS8qNlx+zWEeXiDNAE/jx2RRI3sJlzUpxxeoH6rkRduzd3FXfVxkOLhTUXA6A+/CWIaYPbSkELGmycot892AM9dp0yxD3GhiVnHkvSLtc5PEz4vEPqZoUzEuXUPFD+thGf9s2UXqmk0mnBKC76a1U42g8PIBAggMnOZ2fkLgfc8nCRC9CgQkQuob5lngOwVmR5cnwElOdl6fRYOq4yK5ApEHdSwOMYCY4u7nC92rHaEIQWW1zwGRvThtX4WX9wWCfe6P69KmP3Mi/ZgGZe1RMAz1OOQAyc9ngK/0QchSGMRhjZSXr28sgXVtBoo6LuPuS3KF7HpDYBql0HxHkeFY8Dlm/1z6k8TjpZPvYFL/M4qy1OCu/JwCYoeUte2phdQ5AeAnQBVczIj90oqB6GN8ICHP94HeralxqpCvckrWKhSxN8=';const _IH='e77137b419b98383aff4646dac282308b9779f838733ab9c452e4f31854577bf';let _src;

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
