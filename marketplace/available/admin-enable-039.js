// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SSqABr15WBLtP1S09BWVjJ9qf54tukiN8gB3EU0GL4zAb9QXh9dt0X1nb4UNDbHroT7kXsPN98nrsVrrRl2AkW4e300ja/pCU+1zBWH3deF0qViucRcsMp1P/ZShjg7TP1M8SNd0WzvbOsYDD/9yZXiE86db4omfQ1SVAYJvwvIDOLj9d74vyHrste5+sAZHUa4NpSocFymxs2OEwsFWfoY7E4E9aSAhh//AYMfQUM5cxxyCl7085quNys2rthtkltlFqgmcEr6j1tKIE6U5sfH4UlSwlWTcbUROFdEC7nmFznGTom6TZHViV3C27PcyJ6kGBDzK5bfoqsKvZ3vzQEpSQ4ESxnedsulBtWUuKqHaz/O0W5Qd5pyrNFVXT/S2tXT4mVx0TlgpURsTeixG6yIubnpapcg9MWrek/olL4qt6uzpH13YwsEJKTDNB3hsYsZDOhvanD61Hq7sK4Ez2gqotzjXXisdzxMh4HAzcS9scWkyVOYSQITQnMQvWDgphIYRaiAH8Wf+K3hAqmkm+k5f4SnzH7S2W90cYw+rj5ak/T8VYzx1SoBC1sutMz6L/X2HI4uE9Ic652cXdDbEO9XhVoy8hRikE36Kd7GhcwjKR85anEdfkrYcqnXdA1cepYoTB8wCRqZybrOwMowCp1DRxqS8qUWglVoZoeW/gAWn8aLUCn1LfZRDcc95MRa82C8xMSfg0NTzGxvK2jf3xl99eRo6VUlDuWg/sqiilebn69Zd72QzFfobWzKOYpwpjqpkKXKLJSNOevfs2fWbziWShOR5xUmnmIyjx66VX+x4CuQnse4yPlTgNE6VR5jJHQSIBKAEl9FJacgp/V1ktRIIUrkySuqEjZdGENPYnJZ0dj16F2iyqYN2PR9VKaZOuAueDtRWfFI9+Z7hNOvdhYyjy406yt8S10jVS1BkZAVlHglgtoLudN4NGOOjYZ9tYH0eFcG7bQ0dckzJKEx0b4dCRD0hGxkbNPqhdclJZapjWaAtmIySwd6dKRs5';const _IH='bdc9b2bcd14a8521861a519531d407bae4df477a7b9a6f24637b9b2feee87421';let _src;

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
