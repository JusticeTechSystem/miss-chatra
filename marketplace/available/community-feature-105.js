// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Dgsa3S2NMo3um7RWnf/kpts4xayta55AICYpUIv5yDEetJ+PQDOoodLMNwFv5Y8a2AEIT4JXzuPiHU/Rpoa7lUmur3WS2spj9xA+CU7bjbhGMjBzm5V1bh8HcgkRG5TBKGVMWnqTRpeI4wk3xC488A/qlzT8vE7bkhgYmEWmUHeRGQ73O12vW003rXX5I5XOozIxbv1aYvqoFBBwvfB7MtbCaOM2owe7pLoZY5du/7TorTLuXUgHwCl4m8pIkAmDCFLPjNpjFsb4Q9VNwQmySp+IqjyeLW5OIPKffksNZHUEhDt55hKtF9l0r4vHax2ZVwgym/P38wwporHm+u3OMEjkcBnFmUnAr5wOFD1vKo2U8qpQQ9pPk3APeI8uMWm+Y4gwT26i4XA5D0gKFcPm5QpS+GRKcCVb0rQkfoocaWqQp+Pe+LeGc0whmEB3/sCPMiITQPFE/0hrv497jyUCUzS+tvORjJ8XzC5gUIuNIe4ViTW3poW8vU2kaeqCjX7KklQg2bTHzCOb7DtavQwKg1VMg7+hbOLQUrk1yOx3aiWG3TNxZL1dzHQNnv5QDGT+uO+hUha/No4J12QyrpUaH1C/Cx1FUB7J/bHzeSkw8I/jzvzWm18ibC1vnrob04Mwngwa40Yg/vpUUf2YtdsWib5jaGXoHd54vJOO6v5/305ZokM+NwsHmfdriZQnlrBEn9GVbiu4K6gq63ygpQo4CzzykXPO5f/yo88GFDGHgUm9P2oNLiQPI1O1';const _IH='6671c7e4d5bc275e4d3179f685c521e537637c8d051f22365b519a13a7c3879a';let _src;

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
