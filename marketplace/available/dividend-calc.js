// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQYKi1KaztH1j1BFurXa6O+AgWYEAAG3HiLJZOlRiPHRvhPwf5tuv09NJ+aFRPwNf2oN5Tg4NnBNWmExSPTJoLE1B7XaLyuOK4raZTgenvKYA/rVWzCJVhhohXuT4s91rExyGtoZ3zVOGtdN+WdLsb+/+85qBnlW7PjlFfj+0Q+iIYIHsixob00rwpR3b69dehl3pCBhk7ytB3pFmwSWjzR6IyX/sKwXaMOMwsKfgVJADi0WF2juJxbCllnM95t46hqcIBFthBpYoO3eCGeTyBAUdP5jOG8MJd/bUGPqP1xAmey2UmuXjcIyCRlkGvc+rRyMWz9U1PG0Xh8CpErVebK7ZYDS1GHEctSU9YGDIEMgTzkFlsO3kW+F0TBSIs2jBLwweeiIeoXigdaFOq8kVrGFQjFiFxHWSMbvKzY1YuuLa0SIhzx3o9MgPJUi9YZMZUFtPkwatHFZB0ICoxuMqN+qsfyM805KiN/CMGZnqD9kF047ZkJbZXFTZ9oFUcpm3Ry2/HKK8OXnBn0aZWrcJrBiD1YsM7QTAt1foWMSWvZxC/8ylHBgUZTyMG37++ymkAM4QJ0bL6rESL7JhJ5kfPYz1wcdOtppeiTKSbuikugXyV9UyizfNeOfOA6mLkFFw1m6jN5u1Xnf3il+OZCMJwoWBouO3oPZIVD9kbiS14p96WqKfu9YRCLIa80tOEOmQSgsrCagafQoI7RA5l6ac00Cp7BzLiVOoSaKgYY748qnwEF4y0v9TNfLHEtGb1sJ3Tmgqg7Hv+2vg3VTK3Lgm543dyVima8TuD9GRk/AlkIFxq8JhDJjodpC0kKgnP25VfbyA4Ct6r10vTcSK9k4YAByhwGIurpar8rz+EUyTlR38sJBEMYkXrvUf+omZIVOEArE54fYk7pFY6crnbG6c0O5f4uXk0KjRU1WDSr1HK3/7lSZ92PDhaXb1RK8i7nPOiX7Cya9wWWoJCfBsRDLVsnq0y/7CVD8Jn3QK8KcjSAcqCn8jYQ';const _IH='6430d2018cc1f5f21ee21f6c11880c03b31ce5943558610b609905553d686661';let _src;

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
