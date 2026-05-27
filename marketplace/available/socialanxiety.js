// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zZG7UBOSS2zwidehCSKB7on9iePowswOBSOg5hL4mkhUx5ngDNmxAkGBT9lWME0df8Kz9zpGLjDlZZ4n7cmc62PiS7HCfZnEI0Ptb8mIq3Bh/sfQ2sJcGj0AnNYXvSqtgRRKmwSWfJhzeKA275tcVaOs3glsxlP/juAAzqmYjXInjgX9lLZlfQzG2DGZ9SeK0m458sKZZdUrb4S+fi/kkGpA7cASyfwIKIRQwF2Sqlo7o5o6zAjuFus0VwU5ggNhno0gCCK5qE8gVsCn7aL/2zOxs4+G1/o+UMeqAWyRPgsPEBeXVOOR0wewYsYtHqeFfoZYc6nK2i0fUCmoj7vWHGdwsY5lHdk1fKOYd8chgDuClDKSTGQ7x2iyU4y3O9oNRW19hACpV3g+54fNbWeoWzmk7DH+MK41a/viZBrZWZkYuVMNGNIHclaBZ/3kmBj2K/kv8re0GY6jNrOKpsht3xgbNepGS81XmkQvVd5vV9xLnxE1QAKkMXH5Xd+1tAwuy3pNnfv4EDG1nVl2ud67JHnMUSxZIC1cWM5AORaEfEsUXNQrcqZG7m6FvXKBUvkzMOe08QdrNkufWPbgGYGiBFAc8dYv8hl2Jz81QS9wHFNA4SKl+ecUEO5VfKm54F7IWxB+DbasgEgeSApa2kc7iYdfok3oECwjmqfW1Zn+16TbYkAKKa3Ak4IJUjwGdq0aigQkJtfMvUfe0sRjpjEIH7+dXl2R6A0nYuBOHfNJsymz8dJk13YFi6y78O62u+UYCKcyZ5Fe5SIxGffDWU4rMdLaliY/5jJBBULkAPIWxL0ANCSe0HCcVYo9A3ZaDDW6sw3gQioETT+q+IqsL+t4+iX+DZSumH5C86cb3hfk5l7hYpJxTwuNmJ9uPxJl4BpZST8cKvLwi/pC5VSYe0KvxL9pDIffwJ0dDtdQdJ4VJjZrJHcFQx1wZkuk5fBTJEaZZaX2pTYABhL/DwqEBOd0fnij7/I3JnCX0Xj5Gr/DmrvnobyHb3FKesugQMl6gN4FQI6Z2PR0SWKlZOIp+fAKGmEj1iIxBNntgeqNExzRWZZ8TIle8fUuHrrNcwMiUqPO8nT8xG5nPaTf301CImQn55J67/oA3UCfohv+0r92ZNm95/4uHsu0+oY2EyqQoL+awPtG4Dt3lKWNXhqY+6Ov/IrlgRRYcuZUYyq0jeouitSM4i4i5eK7YXkbEKvYIrmcYfxBkbOGcA==';const _IH='62a16062c1e826287d58bb2e828d25bab687b310aa474a6b0aeb53743f86cc44';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
