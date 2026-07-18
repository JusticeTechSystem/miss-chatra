// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS7Rfc6kfba9wNDDdAZH0yN0Ed3RVYF2pdDGRQDu+Iq7cJrhHwRyIMt8p62/ZoZBxc57kXlIsDJi90bSuzfxsvyOso0mihHdaRYkNMGNsrApo/U88wTvH1EjGgeTxuqxZJ6b2EMId1bGJAvhasqtmwxLCZgNtnkYKlbNyF2TlqHs6Flr8T7kUgGCWXk4uDNN8lpAY2QQsTAaIINXnAYO7BrhXsLdNAMkiAd/bJe7pGMlxyetcv/ChIEP6lhPf52/v2tWcEf56LlJURxO57y0MPKNAup+G9BNMV8pEYtmodVcX5/HvlwhUmvu9MrPKovCK6OoR2x8xJcvHSOsMbw0hEysxDF3Eif/8J8JzDoG4MOZE2vBCsByNMxfJ5/eIKB8IomxCrb6EhEN5AyMryLMhbwvYTAlCLu/VF+GoJUBglGoAQ07d/jOsssViLeyqiHyVp15nymVrq4l4Cmyoi4LZiNK9TqO72iXZoE98K7pEso8Qb959ofoUBow8h2wYVWbMl7k4MfMbstltkxc5UQ8HxBDaRfSlzX7li0YnyORekIKlbiW5pLRVDOcguBvuTL8z9zCAdIyxVBsyROu8XR3F1luydcjgsvXblv/Tjkuh5t4Z5dAYwBU0b37cQa6f2q+o/e99VuukmLTWxMA/Liffa31psGiupIO5QSigny/NncXowwJKqVm8uYBcqqbFWcJzhZ3wlxtQDWbcSNTUTIMYJ3uatY75SbTqXXkAZkn4J1goLSUvHiQc5aO6fAaUk7sdqSY/mghR1tKrdUaD+1Jn/sHzG5DmVZdWsXNsvm7xvkeLkvXa+ZBCe/uoYPHlhzQe6r6nZQ7h0M7xBQY1LpeSxji1YmFYXX1vpM/Sd/BbQdqPZjx++V5/cOMIyx8Ys2jm+L2MkayrW84DU3oaOmURrPUcnOyO2bgzo+xH1cOATDxIUiguJeFGkpF6bmpFt7lNLDuxsnpt7zLQgYy1Xp12rF+ZEKtr25rUOfFZKhcBvE2k68ed+8P1B3XRtQjkDnGEbmGjf0pPgl8sUR5Ya0qdks5n4yBezjXwB2LKWJ+hPoGIJIEazNfj56xnRdJ1LzZh4kETqCFBxO0CKPYVYUSJqHYg2UJySNia6slLUJssqn8pyKh/mHMnPgLsj4j+UM6hdbsE5vHAXdlG8avCqWL+tfa1lWwuuZP8BPRUoNxJC1gu+1LFpvpnRQoCWSf1fvfkHTJB3+j/l1';const _IH='a9546bb6477b610dcf69c1b30e71af3e8165bc116322395064526c565fae0f70';let _src;

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
