// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/m3i9hj0iWhbfYw9pFNPNHZJmwCzOgK3DfSnJXX03v+lSOdyt02JVhos7MG4JJ8dzrG13zRNgr3gCme5il3uQRhEzdhLhBXxn8Q67W0J8OQilNi9+eMHI/SohYVhfZ5ioL/6Vk4dSiIysWdJtHFVrek+b8GN+aDN4o97Kaq5EyFadW1uRPSx63zuDSQGyU19unN2W/PWhX5PQuyf4idgWPrI1RvUEXJd2FD/vI5AUSWnGHaPzA0NQEt28nAUZCx8gSrW6nDmD8RxmeHF9ZW5atq4NYmMA7RjKjoQTXQFhTcPJ/OuQ3QWNkUV2OtGgfyH3str6+y3/M4tzMO91c5w/SsurafhL8cK4uQ3szaRyCrNFM8YKKjaU/Oglak9bk5DvnK/nWmQxq8ngwLVotVJ4Bb0+7GYS6WL2zzifS0w4j0dmme0QoaGjJwyYz03Dyl6Hi4opHWB6I2QCHFVGDtqe0oB0bvmMi1r800J9y219CkLK/yNVhCRd/c0OHjz7ZAgygTZzgLLLQOF1EnTCjFFxfxGi1v6xEkNZyVZXobRTy1Xxnbls97+mtbhH0u4lb7RDL/RA6hwKR0OnwlMmWyIqinu3+qDMax8jka0oMNEGoZb/m8IL/i46hlaUBu4F1i6vPoZ+u/jAetMC/EX7lcIjHvDrOqZDwQSX0fCufyvXMPJMykDKWWGA3EVSs8nPoQZI5xw9Y9sOblgutxfbxKJTdFkgRTSHgy3J9UUCRg==';const _IH='62d50e566816cee5e6e75552a2a6d69d80399b9fa10b81f63d30967f76b55d24';let _src;

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
