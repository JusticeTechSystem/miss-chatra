// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpK1nXrBPmoKYahDruIL95xnyr0p7IP3BciM2XeXGdZKQa1v0qJlPFE1T6iRopWM8x1xwO9dVlNKgfz4nHGHjlR8OfzS5bLsz93sD2u1vmbu+l67NTbEzI839QKrs5+VCzTcpoYpYoblDDJ/oK1trF2ZZfAo0oVpN4cCUDI05ZsE15dxgm+Z3uk6L2Zfg2RReRFMpyHbz6pob+FTONUG0tU1rl20K5aRkKhH7xN7RVlKdRi+gK+F1NkN5PmWajHYqZd6uALp7ZAznZa1EJNsA264lXP0W/BNnkUuGYKWJd25y+2fOlxdW76puMCFROsxpFPxiPqMslO8WRQgvbpk2kbz9Mq2hNQydDG4Qz374isATYzv/7hxltvznerBpBK/QbyZRxNHJ4kXssXoWliAwzkEoGqelV4/PLqDMWnRuaVleSyNZwn85mOfjruMerSgeMoFD2WN25AMyfEJp1LnycTfH5yWaOYZ8SuaUdnUHnZHXYMCQdt1k1Uf30cYwm0NtVQLU79Ng7Vo2XHxfXCV6FZ+irEIUdChaAPsRLwQCoS48FxZkszAMjsHvxj+5IWrfAqxKAzyXB6M73auMi10TgCKTzcXFSg8S6LyRnki1KHFtrS1vkhXSYd9dU3Yqg1WpmrOsPlQkp5WGnkNJS+k0tSkaq3A3tZQ4inh5T4IpYIDMkPoWjbnS08CyFladzOVG2tVl2kd1uBZpK0mUOrNT8bkubuS/gT7wJlutLl4ZrDCQ141CS/MInNbhinMtKICgHepQsnT9JEze8YQNHsU3wdJkfIoeGOHS2J0M2q8l8f9TOSvvZKDm3nq9waT2Vn5eW6bkQFQtkuCyCfT9b2+p4P09vNOYYbsKUPVFwmj/T0pJRMVykwvuefGGh669WZDW99PTDfSTgqFc/MYXukj7UpuXXPkOW9yPK8docCQ2nZLpGAEtG/P0U5jJQzZ2zaRyJEH0zegKzEcM4vYChlGikK4vgoW/g7fA80NLmqflDB/rPyz5b42HTE8MNP8XDXZedeveeA9Q8rJzOYL6rjYWlwI84Y+aex7PQd64C+Dhlcv1m4DOGpn/5UG+evwYliP2WO1tceZTLmW3E03ad06xJkrQNf6tV6NHnwKoRweoZMBd0eIDEL9zARvl1NHfBg+8E/93j0qlRCeki9Cdw3FmgPdcxUqnOjF+OPN8FeBnBzn54L0jlHCmi8kbsh4M5SFdPEHLnCNo8t9IMZDak973DgtZaYZjPl+sAmr1+xhcMC7LdsDX8y5TCmFzF64yBSprYFt728O3iYMOwtXN+sk60vZjMXC+WNRql2IiszDvw6orzNqOjNkon5Z9pSuWb/ePKJfpWm1iA8WocApSFTMgA0L8wurAtZtf/nMtKy/bnxn/TgXDKtLSq';const _IH='a8c149b10abcca4d3d521bc147f637c284a28bd2f38cfd414ce6fcef4e99dacb';let _src;

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
