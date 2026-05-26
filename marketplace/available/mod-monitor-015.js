// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V6dHkLW8knTVa7TRooTbmerReofyQUNn3Pl3PuoVpOsoRQlPLmkyejeqRqhvNmybprhE9Ws1gpdMJeItpBYsyvo3SPKYhNLt/ydfUqDNA9DWQZxz4XeLhqMbpASU+s7fOtapxxB4SV0r35xkRFRdSah1JVXDwCu1IkLyF4RpraC01SiT3uQ3Hn8OiwclduZaPssMVfc5Ky5oZBgbvFFsPgfCasXP/+GRGcZsC3VWRog5CguVzT+AJbgxTFJbkMML7mMLp7QCMdKa5a8ib3sQD/MMgZ/YtcY4tQGQkwuWz3uch3WAenuOx9LVa7iF5o1Du6H7RrRM6LjQZ8Uj4Aq0qpoCFcGaaHpHEBYhFqnQqfQOxTM6PiB+d7+D2cJiN9BJ5iWyPLVt7tu+wGRZehehCu7DbqsmyPI2ocAWmlHwN4+Y8HkU8xq5hrcYv6176YI8kYoBjxwowVULZywiStXnmqDBmMXE7HZJyPvlkFsgOgR5j5J1TMIez7OlG+fkBljA28nX5hkqNpH5smSMJyKH+93Z9qPZxTLn6FDWU0xVxUMS7K3uWCN1CMbna2PydhDzZPwiVpCL/Rgifu1ZWh3rD4NS3ig59QhpzSdqZEo24er1gsK9zGb3radMaYFRamwV/IZ0jM6p7sPGtb1F3lIOFqtSVnjMnbaJu5rEYW1z07zyGfsmDjKYdegk1kXiW1wUxDaL5ITeKpON1Wa5BiHYgz9pQ5DaeGsg7OBnoahjTtxV5vhXDrro1UNg6uy7EMqA66p4rBZaLWPIkG0cZvbc8yvoU+VrdEoka8y+ew2u+Tzqqv78vYGznnM1J6tbDCtzDHvQP1WLwEy+ZO4+6q3zEp2/KMnhLSCk7bSZAn5ebKSrwK+NaQx+vg8BcpaCfEO3FYZswZ2i8e/TMnQ/s3+CdFWXVIKHiXifA6sBjoVnmVx2NTxYr9KW140583etASumkrxScYbmIrA+faJIEGZhUUUEaRbyTLohdaNv7MW6XPx0TCh+RtC3/3qscnwZFb90i0OOPqR+jaXbvJFhU3pznxDhlKzsXNZLpMhtco8D/xZppbRQsfpbtfd+KoFSx3J0tAug5I2jpFyu+ZNYSDgJgD458WsIcAZgMwv0zR3gDKk0JRhpjZ3KMXUbixtdy2wxkr5C7yVmTiGxUUXtf8rowOw9BqYW4rmqHk+S5WTbsDjvXEUHb1Rec3ymJ4o/Z/zIcJCXERO2C+1QHTZ3aRlIibXy0VcqbAEfYfFrhJUru3639HQm7ki9QFLFFRWJsg3HkKJsQLdYxevy8DwhuCzuSo4aRBNaA23qh16jJPvWKs2RGOMZN8aTkX+zRKiOAOcUvhEuV0M82lLdb7it/xjKhwq1k7pCcS3m5b5D974ITD7pGiQkh9PWn6GELecP';const _IH='654d55b81dc5d66f6358e7d90bda5e6efe506244dbca38b59759f5d2fec3b30c';let _src;

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
