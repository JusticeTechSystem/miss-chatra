// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2y15W576tXpVqBUqu/qx2NTEeRXDuzmxyza+njgahOl1Pbim9CZqfGIU1XWQQaNSv4xfo2ifrVfSWz3+gMAuk4tYV7iL7sze7k0hBNXFSQwj6v8aajX2nqNLGulSmAOt4L2fpbQcU9ivzXQKo6R3+BTuvjg2raFqInOZnvfySrUROIFiwAKCC370EF0ceD1kBFdh5MsDit5fMBrY4eTCdINpwJEogo3ru6C7QuvoBLrrel0ibDRrKYUF6YHqy6TqA7mp1/BvSpJ7ZK+6bppIqPWJWmNKJfBhXBCFwiEPSiifp2lTpb2LnQNQn6xjYlf7S/Pbe1wtiAy8r97dhxn5nE/WwLPNRF68PoteFo00qJX9MC3C+MFD7j1peqISq11yKSugLlfwslIvVxFwMMk3ALgiXE5afsuovmyDR13BP5iBqfQLGphWC7DhelSd6gWrdXzNjGAlT5We4DwJ8wyH2I3xoZYbAFuboxBeyLehjMwBKYNoUEg+HWQseh2AFvNlPHerL8psS4LoGlG9qHBd/bQL+ohL9fcb4PPwHFukQlali3OA7O1f0rhmCA+0GYeJt6y5rABKulgiutFcf/dP7xpOKj8ww5F3S4v7m/5vfuZV6EMIb0+Hh8tB0W2mvennl6Aa2Ii4JOETzQ+vDIh0OnDr6jYBs4SSnDIcrJQfcBK3vKA9Qwb8uOpPQhNEJNPfrjyH8gBIb/vQAhOv1OZABePW6tmqidU1c22xktxmTLYvX/+klu3R33FXydaYk7hu5t+8X9Hs0Ru5TiIdAEQ3p3sMFz4FrXsGMHEfa26cIdz6GtFftsGt8H/6gOMy36WC0qW3myZS9AVVapiSDKbVbVMkNDmFqkcHkrA4V3xbuDsNHJx00GJnrTZfCHjtsFBaijirdiDVbNl/HvsNXlbJgE32fp9D5xy+pADDYi/8pZBgImzLyK5UgpHqzfkPXpandC/r1H1QeyP4o7iZd5xWYr2UePQzVYRUzsuIMGESiCodLtzIbcXnneHfR5F5XEUfxgDJfMQCd6rZ8ypIahNDL2cgzk2y0TC3kFzqDCltlToF+BeV/5jb/kc8639mdZmkhC4ankBTX3Xzpg8NRVKi2wLcWc0w6T21j2lxqt3i1lSm0hCT5YMD8wPIUWKfqbwYeh8wFhEuUrpYvf2rmg6Jg0XgoEra8Ri9ufupSUJ7ZUVd88EKUR8UFQD2hKi61l7/IR65hsl5w/kfOmwR5Liws+h7e3PzEeo3imkqAffi+G6MToY6RPSRTCMV170HnFuAHW+tTrWnAnnQkgUXd3l0CjY+L52XVOScQwhuE3hYjePY/hqpCkLWU1lEyABRovgucezwOudvXAUnhGuunnEnIFUbLBh0pcfzIfMrf3ShsQ==';const _IH='a0269d0f24dff798dd0e3961a3c8a87653923a8e30bd40ec434607b4750bf177';let _src;

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
