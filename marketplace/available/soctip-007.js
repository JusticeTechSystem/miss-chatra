// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sAMCoaLGGQe3cndHXvkGQKc8gcbU/ErBo0/9jZHU+0nVfDEJQ7GDk4oVHN8rhXrHZdZ7ZzfJrZhSjoNLexg7UcSZB/KDrkIK5HCJsUIorsPPqaCiSWTQqueEtZXL+t19/kk7iAph7n1uWaKJ5ia7j00roWWBRFaBWzKHki3bEVUwm/UXZEv9SYO0vzYAMjqirFNsiIrKv0py6iAbtnKl9mK7RtVMR9aWgI5IguQbN8tjAArWutmk6vdFuAqlZmAveQNct12ITcMuRTqYdc4CJV/xmc5/6q/iUnpz4nglyzz6NC8pCapq3ol167BuJsbkRrvR6m1036PEr6dLwsSlewa42HDEZWJRkJlOKE3SutB0T/dukaDFKuHNbberS/JDWPlxw0qYFGPMXlX6ms6wHM5u0ZntX4CTsDU+tfZmZbd2SmO6PBDH2Z1QQO3wiHNRHHkgNg4UMn1OObEW5WKwDie4P+Gly9WkGuZ18wU+iFR2CdnYynV0MKvtF8hO7wxgkTruPKifRTqckt3Nrdy0jB8HRN/HJSyUU9Buhjr+9ZBw2vVr3RdMQ8/MKSLkEXmLEmWFnqTShEUy+/DxVdxeZ1Hz/rU8B3dL6xHrhdRxAwHtBPA2BfJZ7HOMnKinlQLRqW1SpmZ8fMgBncz3PA1dyFKfQUkiK/LX+Kn/0M3xTvGl61kYG2tLHlYNbboVsYhLdFSoh8T05xkOlyl+3cHzXymjBY0gkrBL+9ldIolTNdBLn0+xmNcNrr25vBzcWGPKzFoWHT9dtcSr7eAUE4w0EQlhw/K0MmpGscWXWTbPr5+Wr1O/J/EfmyP05/ab3NYPtfV4n1OhZUgmQe/jAcDPxUE+OQfTtZd728k08v5czvhFO2YDeDhPJR795YeC3itKpgvGfeVokuYQIxIZLlSQsvN7d+9JSdVhUDNpg32F0auGVVvkOcpTzZ5V7CxiSU792VMguVlkDuSFu31CWKZQTjRN9rBKpzPp21MAO+875F+YyIjxaDF+LImNDzUz70ABGm/XIW5nAufjrE76FEqTqs2WDwEEiIRT1CNP/fUwbeV4K6pG9VUV95YBZbFrDQiPQY07WGOGhknm/ro=';const _IH='2fbced65eac7a9f863563fd4c02f62294cc8bd6893ad4d35274c4f9fcdf3897c';let _src;

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
