// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MThBrURrEJdrh2Tb72GKaKLK7a+aWXGqZTM5nR68Dh8aTOSyEodxnOWuRpsnckJakZyfmt6g2A8q7ubk/JoXrPaxNCv3ZnCXBHtc6Vu9UBLO8mPVLwU91SpWa2CPRo9OnnjbieITC++shnG0c8XWPOEo3az8OsZYUKAZTi2/qldA7k1tqSRRv+UHLIF4SRRG9l+hkIcb7lPOvbNQpDk3eyTjuuORd8H+pvvxX2X96I89CL3VaiPjTMa/q2TBfTjg5xrDi8O8GNwsfvyqGHpOwDM+c8XZQ7pm4u7dh3bgtT9A8lYQ4w4Ihra4ZXds/ghAwpCqPbzwoJzKRe82rAfpOFHkbUdUMmLoFWj6KYUkRnl57om3LCzjOIeiRwImTXnhU/2d2bETvBKVkMcsWy4ptHT9b+IKYdDV1UgeLikxg8A648tKH5geUp98ZPGCMfeuN+q1e+9gWXl3C/mWLZYSwtwcv3K+c86LpI+6xescKQlhyoRZKoqiipxXA/Exjffx/2zpNJrUad0uvJYpCWIy/EK1coPLLm4rPE9Zhks6XztmiSrKQVf9z2KAA4WSGYOkxz8FSl/ben7G/QsGFU5h0386CX7xJetgmAdWkCaJ71zCjGr7xJYpv+xsvf5JJy+3SYMszrjWsK2fYecOzgVz9IQGHypTBM9jBBVwrWYlZ80CH6NJpLO503ZeBXfbnDROT1CdSPjaJ3P8LMkJ/DFL3A4nOs5J4xNzh1Ac4mhS6RbzyZWAd0+u7GJRz4E0sO2Zv/cy20o2hqVxIu3Jr2yqeDx8RqjxGF2xx8qZMJZehtd4nS6AlB8aMCJ/BCbAZZ/bn2uyuOmYSIg+0O46tX59oYElpHe0r3j5vY7lGHZph2xmi5JgtDCiTw+x665XslZ8FHONMIOyF8Whjh08u39TnqPZ+b7Boee5iLakuuBrog4rbBFReMbXl6CeZzY9IXG8sVKNGyh7mrlY81g59XIZhUIa9ZyBEe7FCIq+IfAV';const _IH='24cc2663b8901b385a766f2e47bcb0ba728cdfad7334de2ba54547228172585e';let _src;

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
