// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NKUTxqzb6/8mTacq5IXtM5kGwRrVmITq2TSyt5ByfpUqohjBSN+885CtarUIpSggMr2D21MRXP2GrZu57/92kv9mJ24TPue2xMGX9Ypnz3f2eYtLackiWwYOhMX9KxWVfhLZkAWS9tSeZhwvCmhas8ggEOdlP+PGS2cxLq2Xpa52+XccSPz//AHEswb1wBaABzSzZDMgmdeUhncXE5yak8UnfORqz3CtQbFPDGbyFKJ+cwlNjWMpbUXvR7j6BxZPrN+KcTHrGm17jaiH3zMy2//eoQ7er6i8TDqtcTcRkfDogiBv0lD1de7WJdme5MOlnsllxBr/Iypmfhv1LDqgVynZ8a0HbWALVlwa9K1S3pmZprjGVULZu7LJ1qihSBcYkIjJnTm5yrqRMtOt57AF9vhh1iTD2c1VJt8Z7sg85FN5CsLL0zfMFOpbtxDDw8GqbJyJhM4vxNs5dvD9BZOWyYnzVHCAK2xoJnYXwXgK//3x/89pN6+1O+wKZ0YF2TuV1GI7wHh40X/g8ZsFgr8QMlcDLVEdonY6rIaIv9EQzYXrlYDDcXoo2hqf72OmGn7shuno1vRd7hoKdBCZC6csDQXyBBchJnXvbs2XSzm2cl8U+aCv4Itio8i1jDbnN9X463pwZhcu4xVWAx2gm5yeH2RP0Vjyhq9rOvYAkYQsBdhh9vZrdwRXYZq7UCh9HVnkbr+oaiPKp9KEeC/YQoBR4QQlPeZBPpdmvne/5WQq2AVHK1hEIPIgSPal';const _IH='51c543e6816b15ec4943b34f0c8db04b2bbc8417ae27f3d91c7fa69bc7053eca';let _src;

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
