// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IhE6Ph65DY9Kpn+QuVip1DiMkcKQ2y6Tlm86RIiEkArZDdJDelhG5tGqueLdbU10OruW6JzoBL5VTcYyIVPEfi289paUdQn/u7GNQ+jquIcMF24kd5I8QVWxHZMcjkrr5h/KgFsT2iZZCz8/YaGLluf8ydO96sA1OqVR58wIfHqiO0dQFt6gebeHVhSPj+FpQ4dJy7H7vcVvWq6W23b813rA2unFGdhpmZLZChU7FUG24jXKL0eSp8YJc1EJzmCtXHimuKKMHvr5VwPxt90UUI1mDo4ihR/eDdbvXpmmg4KtO8edS/coLlxG31SkYLPsT+JmY/vwAu+CFJbvbslNZ09LvPmmfguOv37OUMFcFJBS4JivX3aUdnVhEziZkASDZJ8lFRJczCV81ZgtAf312WSd75jAvLTh/txQB2OTipRu4p7zUPQ0Dtb8AdxUswJ/VW+PvW6b2IKlOeFvlTnRxUr6EsoyO8+oTGmw3g947XHj0FTQTaRGZnT+Tx0Of8wLWj6V2/qhL9Cs3SW8rcEAHnsXdLwvRjbSxHrxhLFsgTb4AYJEqdgUTLzTozzp0FKaZOIrri94s9YTnAiwOsDbuJGYMDeM+yb0eAo5iVRV6MPPpRt4UsHa50RiilOjCHojqT89SJokeYcMuZYhNoXUwbC/pIH7rNdCSRicfd9Il1dmVkgHYtZpb1GisS6B+P+LZIXZjMSwEaE4TpBd8Avi7a5tEKFtJMt5GY0jdemExdsn7Pl2v0FfGmrooUa1qJlHp3u9p83QBh6HNpyVM/lU57BPqEBciRrWKeRL8Mw/NPUbhm+CY2kC9+EAtv7HOc7z89DDuKXRh+HDuHRv6ME=';const _IH='3632c38b12e083626e494fc82060c8ebd0b10cf1c732c3f040763e9e8c3a81ed';let _src;

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
