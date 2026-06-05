// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v6ronHl8186y/19Rql2U/XZRhdiiLkovcKCJj0Fw6U7mQL23Vx9BnP8F18kp2sCeXuMALFSyliiXRCKidsOcc8pEsY9f9beMN/nJGJQoCWlMkf4SWL0DIi8Ks/yuk9xl0iOUAJgVzzk0vTVWOqLqgkTV15nT0QkITWjuO2rBj5tMIp66ihGOQPNHQ+kH4ESEXbN/4JHnYj37R+58IUEOQ9boHhtFnJ5omZXIQMRpqd0CdwTk3GbI8DgdYe3215v6wBp2wtWBZzAnVyVYS3GIGb459KCHe7UkXrl0hA+Liicqp22lVxEtSwBYfKLBd1g1v4V3fiLx20o9khVnNsw9vSYIXesqnC89aUnQihY5c7/2x8jVHNrpxrOk7MR0IT9cAASVL8asNEtXQFHYd51ecWpdoNjm1V3flJRvSFqS1uzhCTpOh5JXhCUR2t/lItOwY7qKO9ftYausZwqhZyAk2FG17LaTTA7mqclpRcCx9HV6DU6H/WOMDrlRUypAcVtfT8IZ8ZyVFzzromoLCzt5S2OMHDnOvcEYBr8+cerNgGMss2CDcocIc5aCDQXuwgxMCAVzYYDBFQnikJgn6YunLk18lJyazK/f6eODjtULlg5OThBdk5WGt0OBRgjss/4slsexSHRpBd0mlINUyApIIMDnT2pAba8mZ6C4o3jqGuBUKuERI4RZZJzAOAuHJfJrr7R04S07QYOeUJMcDAGicGoMrHD6tdvCyCMZE0cUhe2tL/HI7EP1YZqz7tkQdjIgdlsRpUZDNAr+6IzUbEH41HP+vd6cdEndrwE0SIdbpkxEfRC0zj258JF392pblITTXy6YMSYlDZlIqMOt1MV1ZJ/l7SyPT0fGXReXH/zfPrTzq835rKMIygFdWbccyR8Csd4obQdKsHmN5CLq4kKEkh1aUXvEU4EpzTGu5781vsUsmTXeSnNxU6eG2fZdrGZOPe6R4U7a7qZf2/DSPjcwwsR74tRpWJF9zMuwP5DnfjqXwlskULFM92BWVCz82KNNcYTh0NqBDJaQmPbmes3Ej1qb3OMVSs/dcc4xvmOYQctgCIuTwzaAGrWUjqIPRrh1jDqHYoivDEDcCXSR989eFxoCJxBZUXtTXg4PamR3wG8NopsAI8wYZkMndLcap40uCuQY+j9CJo4jJlqV8NJ8IYlU9BcVUGI9BVNMFkGeFLwjOilpoV7LG++qYBeKRTFiO0u3pOturSRb/fQ9xRb0Xra26iQ51NfekyuINqgeTmhH4gMCCAlvyj2jofkJzBuyLkr4p7W2dvx9wF8mYFDA/n9+ZGDuYfIf95zyDGT+jyy+A6Dzna1oskWWk5faO1FTOuVpdSQ581+c+g==';const _IH='2f17c5d73f3f6674dee2f5e81609239a4b8492c78825433c8f8b6e4e088fe6f8';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
