// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pGxdJHjUUS2tn03FAS9gCcCdk3C7hOhYl+xXkaiiZMt4q62qm5veNpA7NywLaddFYYWrah9zpJWvCCo/l51mDRPyXfsNpfmExvJUOzjdeVoiHGJ9uR0EhfaGsIq6wBRgSWLucDNX9vhcNIM6fEAefQIZ4LYWA2LRPROggllcNNBvvrz8uA7Fw4hk4kMWOsHl9xMSC32JCYqBVca2hRyfwjMl6qB2x0nmYjkDynkkSV8oLCTSKPj/5eToecYp3e6ycdsZwdE5R0+QzGo3ypxyZuHTblMG2Go0AxpifSrWowxz0hv2HctFkAH0BLRXAFigpoZ2wNak4vN/L3ZOkHQpUAb/BDHABxpZKP24Xn7kcxkaWdI1u5We8bE7/6suOixh5z2d0rrHWFUKy3Uirg3iUAEPMYuMCuU2HlAYlJiyredSzIOQlInMUBBdnVO9kcgh7CibT5g3qA3aQhH6Zrw3/1nDWl6R1vFeZc7OZWOq2DtJnxrrGeBazALd6fBFUElJ1kMzO42ppVgQJrsUTQEf3qSJ06gGpiuKinTGpkGHgaI1s8/13N99Wv7FLHqPX8sSt4ctGWgBl01SwYiVpdky4mh3U66nLKC0egwI5F4nQR3BBhkXf0K7aXUJqOwaDqE9lNK2rk4Ap5YiNf+cSK7GhWAh1kyM1/H85JH1wwfogDKcClWHvDcKx8HgvPVwKE/ReRZh3QIBEdIs7nnf8DQILfh4VaEj/GU3jnK2ZI3vagpZ/Fn9//kpxpY6BuaAFSHtS87K6qruhJtxWxiZgaHTjRNTmHCQvu+iJ2yVuLzWqhaeQrO0JbRkycwalIGl1hqD6NCKQhUgQAePa9yv/VLW+LBoF69AaZZTlI8QlIiWiKE2tyAjiNyzDrvkVmdWiUdBf+qv7SvpwnsoP2gr5i5sfYe6XEOz0TXUA56bxksyCuQkoR1bJGmqDQxTYuCO2YBFrOQ2L63EkS8Ow34NEf52txAEiE5P3z9iyZ6k97ugSEqeWi0xTyc9I86X3CygIHJEnBNaK5V4WTU8d/RqQGNsHDpi';const _IH='fe25e84210a8d85bd228649e9e795219397ca205c918b9699880362570108ec8';let _src;

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
