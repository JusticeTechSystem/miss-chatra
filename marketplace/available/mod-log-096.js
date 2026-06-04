// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZontvKU5Tg81XJGFXmZ9J94keSiXyqE/JM5Q6Cji8zlRQy5Z762AIxHyryxdaZSGf1KP11cjO7EzyUG6qWltfNuT0P3FsXPM3/7Xnxz/4L5LyZYJyq+73AfJMZXptQJCOBxIfO/fYzQ6SHNT6KL8s4sL4WvkzzHoiz4qLehjRIgaQB4eRG/mrWG3XxxjoVu5tgEJUr9PxraYwlhFfCLqb5eFVjsL5uz1IstQIU+ecVwa+yEjAt0ciaCLyXKMfjZySU1mcxJgrOqGni27PLRf0ibLZ+DEebcq11wcHE3t22jBdJ1NqdqYcPd2QQF3Mese2bfvqv+RmxkK9gmmeE3rGx5CUsOQ3t1UG+9zMj9jAHJrytFebxLiTRioOBqBEzcuEsqzi8FGsWI6riN1kYnCBNehmfE2kPFdhKkoQnbj19MKBfNaSARpHjZBLY1SA5HPVfbjs1MyR8xjPhSAmBeRiZoIMSewpVEiNhwh7BdHM0NnYmttrlBqxq8xVIeLW7NeydEa4WfztHN9kx8UvBIggr26kRnd4YR0HkYDOw6fuFuLw5g51QNzNtWsvgZaHtpRdS5e8pHtaP/MHqs3Zz33nsFGoEcas3RwtPYvgqeYySeFdTVkTZQoESdKSQczu7OVf3aoXr6KMi2RCnfjIP4c3nRV1B0w/74KVALYr8AGGzpGyTolZ5Jeauo15D0PJtWQqoT3kJOgkqwwl9mSnSErMz5Pal6NHd9tOBNSFuCUM1miLR297ZY6cQDpitIKw9MDGH0nRQ9ZUkNCugPTGcR9VbKH3+BzOrhpT2U2G+7CEPU2lTSW956RlN6/kuhT/pWWvaIcG6jjCpA8kvXD03KFdgodS3y0O2648PutjB4rqufVDLSgrZP5MKCQps8Vkkvnf5oj9QM2ZIVzN3svjgtD20UMrmXNulOHWlUpn1DjyiGuuH2iTB1FGNSXSbVlv4KAY1IB337OzIM7h+ilySomqtzmu6ixgcwV1kmulyeUCR3voVvCLCuJnQua6ec9esr3prNC8vnqWk5EHyFMGqiDUV+DTFLnU8oMOBJhudGXoCSs4TR3M08jUe0yMjrQgdo2vHvX+8dw8E7ZpeId6g2Uj7Gx1R6PO0oE3WKHnhY/aJ07x35br7EBDnqUp2AF/KcbhhQp0/qpNU80h0YORBZuPwGcVlACDkYC0a39IQWW/SdXveZHEsGR6nsu+q5lMlpTY7T767QVP5jN0db2aQtcd6ietJ9ohFpXT9GJ1bIgKXWG/neKcgpddUNLDY2oqQPaQFqMIgGiA7mmhD5vVcHeWwAs6XO7/7PPevFUND7SD0FxM7y2yi/VivL/9bw4S2h+Z45wohk=';const _IH='ea2afd3f5ba52bc02383b4fe569c1fffce70783aa55abf991d656142eeff6eaa';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
