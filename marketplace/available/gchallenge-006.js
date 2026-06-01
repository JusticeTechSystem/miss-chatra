// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+OQlJ0OxNYtgU6nfkePUK1adumiVfeqcnXYM5X5+cgPgqe6FdM86wTCYCivN5cAkFDuSAORYmLp+ORtVK6DSLxPWoMChlCP49SmkJUKMYA2DN/PCBPVOrXUQEL2y0CjUbvW47hZwVjmShwqny4zWsfNbusUWDoEfwgN+Xq83XHO9Mc1cMFPnmiE6x96XZni3u26xvIHMuDtgyyxYPyWxUWyqIFJ7Ay6k/wtaM6XuQPM+4NACVxqhe7tlDfHg49JP73cszmuYGJ2MBvtMKk7AREsTAXs6OnKM3v7xHAVQJG7NnYdsZs36z8a0ecwqxISommBxLFdUgcZ2/4mJPk84kvC9/A4fKtstnA7+2VF3GKnzSJO56WUqW41KU4gXaDfLzLfEVsBhkzFfFZkGxkl7WOeWBhz+8wifPzrd25LmGsZpr1mSQVzIImCJxbsQRRxgGk+czxHywLD/Mhlj8RdHSKYGpEwUaPeQDvVnL+5PS0oc7Q+fr9XwpR4SGeqcl0qS8K0Q4cMsXFICkN/AsXGTXHX0U4djcNevA0NnpqKNpmSe1P17QBYS5Yf20HxgwJJw0lX1XId3cQBkVqQSsx63gF2UBvVljmxNxpK6Tt9UGyU2Kf3ONKxzg==';const _IH='3ce65f3518d01576a359f26030bc5d8a198285f7de325df61ef76229da425bdd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
