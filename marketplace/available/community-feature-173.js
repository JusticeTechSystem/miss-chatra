// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DZOLXDJpJe0QyzvKpZh5nEBdEaI9d9DZMZZJmG0Zt04ESCikkN6vFJjwgelIgzB1MlKZjTi9LSMP3Fpcy5CiGLGMvFtcpZN7HJ7fGPzKcn9uVt2eJP+ZOO/UUuEw69LLAoaxK/tk+22P9GQNMAbkUj8oRlvaP3nN4XaJjjYtaYTKPOUNfOw5d4ZXE6IXrsZV8RwFl+hlmdOtlI3OylNzuQdJDUvhUEGnKuTdDq1Tb6lwq2zyFDA0BsQmuyqKVtPli74G8qNFP/EbPynDe51e3hCtfEjyWJDEaV6IlN+NZYNSzCsjKVBcr3fojeqwYYROWqWIhYeswnoIf4mxaEoVQXofAyiAJNRMtK7KA7EakUGnrtwGVwvSVFeGKq3vCq8ERN5f7kgVecEGQb+rBz37vX9EPm6We3eCb+28kzim4MgACbGSUOLeVT7Bd05MdMVpuOPIvhGf5XP27xTylDC6Pshd5oOlWEcyqkthBhbrfsKIZw6B3zlbngKEhEIyuSn0v0JyWRgUb8H8R5zGJdYB6cIt6uVS0k/tTF/eCtCvZTarV5ljHaJvRXRpCML6nc/kEvmU1tEXEbyuJ1vRK6fVX4L7YglAwP4IxDojPyTmzTrd1UVIMMXAJXMCMLFIbTv2rIy4pJFksdyNPBzKg2t6LVV4Yl3cK3zpFboPXciKzMoTL4eGg9nkrGPsjuY7VdkkaG0r6zu527lpb8Upeie1Mxbp8xbR4wBZKutg8FQ=';const _IH='4ab556f1ccb880cb6ed2ad058025862b3b0649d92b8bb924067487b2e6c2b47f';let _src;

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
