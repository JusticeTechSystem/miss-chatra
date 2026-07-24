// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjReDLmHZlIY1ZdgI54ftX9fPzhLQX5GN3Jvef7CBO1YnRdFe/e7cPwmoJSwLiIE4AuWrKX2hti/1HRMpBxJBTptbvAjOkLB1yqZjLRs2B6AqcfI2Z7fAhgl67HPZYMWMTqEKaiK4ktXcBqK0KoVR51Gxi7hJtTS3rG7YSOoRGwS10PN9x7rtSkt+dNkUwnaTiCZopyKNJbCchOH41RGxGoh6ReVmbAheocBxS655di6HP5r07YdXzh/wp9m522aePHLq+S/+NUDxeBjH9bqhrAhvvB+A7rRM+StTCFFJ2Ffwf3zHOC6KiaHqpUnHMmCgsFcnWw8HbfQxocR38ozsjMRNPyLsosghdM89UTDLzMNs0T35n3zsUsUuoqw+yLak6BK+0HDJeL+qNvgrjJgJ7laPVYxVbUyXM6NYu/eDlP1Pfz0UkZszWHnH/G8AK17VWnsXN/+Qg3gpYWxQonBj1fjv+kOpCGwhdF+0YyeKlcvxz2GZGUYVzdly2dPmT9SM6F2K8a1boBmu181OK+rgHvrLwP2aLjuAyNU7rF952ziOxlhPL3FfigJxegTwllAdoXYX8OGkiVM7U2N29U1kcO4seX2lJd+U9h+41GYNR2fhN58/qJNuePtb0pAbU+PQmx7rVk1IE0S2ZL66DJpg3eP5mU3M5ex9X92NTZXt7PxJQqsP+i0wgCBbCuH891+14fDGZYQGslXzpEwQNnfsmvnr32Bbno77mRVLQjyQzPcJJcAG7jrh+Stt3RRyYbXMiYcTzh/igf6xP2lE/xKaj70zb7F8NUMwV6cwaYJgDxpYLXcBqIFksFMCnXsYrOk5lKWWrNnyNSJktLM0p6MrQ/NwMXd5at34U3HLbHViTQNmVIUWghr9ETy786P5qgj5hViM+p+wdsmFafy8DqVMx13Y6xWc/ZLqMqPw0Jd+Yg6eE0BcuGmCoJAO6gtiKpLRfeGdUPPENOdq2apU/B54UfatrZrpyilM8HOmMTbHREzNsDmEfUjpQSbngpgkL4EtUNXfjl9N4lQbcdVsN2f91KxkYXOeiKw5U2WKgUsLi6aarFU21meeyHhVqPUTPD9LptzuDdJazlMIk+5s7Axt2RgzCEOKs4cAZCmcHQLAltWP3IPQ/CrbQbpsDQ9/Oi1AJobMM4YlEPVn6t4nv4Fvj1yJtSNp4k486Av4gilKh8O4QykU5AsNcmJRwdICHwEN0xUlmnWVGiG7Z5imUOkWHR5WDKr5+YJswYCtOTicrXoJrZwhvuJmzskFoBQfrdhLxS6xrvl6AF2Q6yLWHPC8OHnZo/AaVXMLG9jy/8Dl5oKrvXpgse6QVtQOlh9OLZ8NwRyOhV4Q3Ei3xpB7ExIJT9htc4bc3unhfjHu8J/70GPiuMd7YpMqq6U7eSwbIU=';const _IH='2f8dacbd234e7954540c8022080101bb6ef1b6c501d2c13aae2d838ca5598ec0';let _src;

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
