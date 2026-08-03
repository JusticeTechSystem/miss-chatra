// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSxNcGO+Nmivt5zYTvwHTlVH0RIforVbpurllZKFsRuRP/F5wB1YpxTRqVb66KTXcS74bnjNkYyuKZB9PxfznPdOQwzoanSX65M2/K9KFfZ1au/BywNJ4CQFE3gQEII+Yjc3SPkf7kTiXmyDcG965C3WTHooLUbK3Ld5YUi/fUc5WrvQ6KpN8T4eXN5PAh3KP7DAIYQexMsQEbWP8H8IvCxVBzuuVeZYCr8QVzT3gPTVwg98KcS7HGtsOJkxDpFmZxaGjjZhg8eFQiCogL4X+c9fVlNESTjL5RHxtqWwA/pMbkPZJrsQIOGJxB7Cc44h5fXUt6k0yzR+oVzoElJTVrwjVa1SQFjXH+fTDIDV9gPMO4PNvNvwDj+46h3WVKsS8QOpCAznsb4Z28zBLlDYs4KhJ7TeZLCe2D79tB8IQJrTPvVzWru5wBYm1iBNYL2a672Bm7aDmNIKHmUzHLilf5rxzJwcgJwjgjuH6fMJbbEvk44FWnn+TUKYHzSuwZ0OubKBjWkMgUTAXQmbeMMw0glLDMj72fzIFTJKQBLO0vO4GSBsvhKEzl8/IP5hNRF4jXefNaaobs88RS+tfwgZREiCiyHe/kmuRwxVlU0SghaxmW/QlrGoy9lcx8OySLmbKWCOhRIFBZB9qdvczo6uURPAuOMaF4EdDmmLDa2/CuBCwdQUdskhDXt3l3j+PfBhPXcdC+sx7Q+tx5vA0zh8e4/DWSxodksNDimuejtIJB2K0IL0rFOkal9DWhmXQzfF8KS0jL1ZJjC6l0lPI+4GbczBXFCr1kEVo1ASnH8z2NMQYy2FOYW2a7LO9P9qTxGKVhYnhzuSGZGtJBBslaM9uMbf8VHkBgDwGH/SaE3qwmbn8hSOiK3+bazWwlahA7ZVmWsEqt4l8RZYpgVa0qCUJR/sP3zSB53NyO1tYaahzOYx2GmC6XlpAbdbnsnrrbNkpDI6L3jARxLF6XHrrcMu7ZRwLEcESVMS3h+fjdMId0NOWYGDpNnfFEsN/lHLXHL8OQmof0S9q4=';const _IH='82bb8936d1d729ce318255920889276ec666e7541e0e8af970f7d14da4e1da98';let _src;

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
