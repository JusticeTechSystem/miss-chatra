// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTINuVnBG2cXqmOSc+hqlYndy8fO14MZ1ZHDSRLb0dU5fO28lzbyb0ofrD7Z2UodO4hs4nB1HfkK6TkFlgipkziTEaiXaIkB56sECymwlCJDUeTyPgZixQ1elbWDmcRwfnm7W5QpaCXwhetovzpNKz9Vuu9mK3dtmJe6VlmRybhFvRVifsL8YaXyR1Ylr82YMJP7bUDbyW+KdQVD8+tgU8J6lNu9ylQgKdMaW5iB/6IOtdC/i0bS8tKpObSVKNgFKU82j/kadvhu3QrDIJP0gBQtE4cn7vhuYMkcK49mHi+P5vekBzxtpqo6/A556paQFLMsmwKH8qeCUrtATEoc6aM65pHrEUniiCzEVJZhOKDOD+E8w92OqyYA7jWkITMzIjNAVOkuu2IIKLJPy5JXOrGTyOiO6sE+mW43eTMRv7sL6akEKPWO4ylmqTxLRWxdVwQE3rRuQ8dyw7Uf35wGtEif4mz4FwyhNCSF8LP4J96DAk1q86q+tHemVNJD+vw/TUyB9SZLqcrEG+TXTf/+JZL0s8nKXoGSNQUk66cqkZrfKLPiBENYk5sQtk/gTCyFEEZlfMAXdkR+UKVAoSy9r2sbrVkgieSapRu360RjpyDGgLgcieGPKb9W8KZvLJjInJum6aGYGWkiYpIdwApCcdtZ6vFnPbXP+MTqezpXMhY7Q4ihKPLylRjqen3JUf2RWbi/SmL18hEd/aJCWGkU537PtV8yb5X1zwUp/9XTw==';const _IH='9c763ce75b93a4b363a9c1675415b19fdf63807b3a7f96f871de06e0a454aa36';let _src;

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
