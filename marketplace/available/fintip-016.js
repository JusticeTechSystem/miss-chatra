// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dJziT3zEM/zATD/7MceOBMzKpJZnN1uAk3B/QdAFNycPI96eXvQDE3zfPDnZTa1/Fz3eizuedWrKb/z6Qc0o9PT9UIwTs4vulPl/qgEAFhPGLv/d2YmFJHEhkK6zlMebYA0eNvYRVSTALJJpuSY3efLOW0CYQ6eBEsYe6D7itzDMBBdFsrKwYV3ZOyNlcv38Rj7CRtDfgIWi2Hq1sCL74u93438PlaVPty6OUCElI+MCBs1rHLyBpy0TOfLYQyddBEDQos1mtxPlNDUMTn8+FW8ATHUeBH4kYg2zgZ5cCOIxTQv7OLgpcjI+mQtJhEI/ElDLhdwBEcn5grs0r+Ix/Axq/CplSAGtTJgOVFORo3NVXbb0TbZpPQi1+tJouD9uJz+QxliA47fYVAknqX5S5jsnzGKeOGQOxYyQm4WRG6nAtz6BZfcL07YeFyB2IaEOTXfdEou1zbx1ZnIg9MGlNuUGCMSVHQLKBLgqcg61dBuRUf+zux2KxKI2Ywz2ZURwHTc8ZURdNzUs8AXKdIzfZZyiaS/Ik4qwS3OGbJlXHIWRh1eo9Ta9EjEWEuDclrvw43sNFpoZtB9f8H/VXZggc/FTG59v1djuSYmqlAXB25pmn9IdbPu3i3rkxSZmzeoJ5qLvBQtBb5+S90zeDLdVf4r+Esp6wNS7GRiH8mIJ51oKVtlWuPlVJxhrLIxkOikABabb8/fEYNtYZvFB1fcYoOwXCnff5yQ6sVU/qu7jLsxO/t46odiXmJoD68Q19E6dcv3BVjpeOAP5s+KJPbMced/B1M4qfnZWeH4SuOKHwnTtVhiZvjnuzZWl1JtH3/ybmBQP40sCtqGUoudVn7sJJMtn6hkZYCtQEv0Wxzdw8MjK+mJE52RWa2fXeMMdOcDQKqSNggT4fj7pqYgakQtmPmGJ5EbTAzKUi+hEsl6BVeFkdDJG27LBGDBTRXOYcEmGUAGvtyWf8bAfR+SemI4zeuTiwL3x2AlC1bR5qdSXewE7EX3eFo2S988Am3w9fh3Y1UsW6JxzGSZFBWtkE+coTbKahazC5NdRDN04ZJmTQvwpLg==';const _IH='172a9df57a4a9ba9829e20eb54ce7025ed7798dbf373749bc5a8154db5700e24';let _src;

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
