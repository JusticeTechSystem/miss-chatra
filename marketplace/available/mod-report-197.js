// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSw6teBJwAL9rJwzUxTxJpRGzFO+h9Hqx+WodBD2JVsDZRrLyEtLwu6kdFXHUQlrJGHoXhJKFZltrlHZI3I3qaVhLVOi+w61aV4F6mKmlJp4cUUmEHp+xc7aN8+HO+cBwkL5Q0b8JUckLZ4HCHbmTtBAanh8/HqDMsTYlbJ5IahOOoNGCaW8dHVAE3sumuKUV2GUBppRNZjWAw1OjsOOJXXIUNI3yv0Awq4RthrORuakctB5o+sfdH+bN7oT21i5TqTwl2V/lUlzOhaJdXFBWMxiJZR3e0NW320jGUa6C9utwpsVAx2cmNzhR56CTaDXali/dOjy524WD/0JivT+ZF+u0HcO33Ece810X8scBDDNkkFrZ1lbSAEU3I5OdTAt/dn+suXBBCKx9kjOdDV825CETeurBIkFoG7E4xRiNUyRzpiemm7A3zVvdznq8i0UMZuy92Cpvs/7IhA8Dr9xJW/JI6GhsYUjuymXuwfR2raoeZOtb3T6189+5aX87CSdPAteDafz9qVKnktht3wVyJ5dlN7HiKsgeDPyezLnRVSxq/6BbLkTavovOiLw7GM4jewPVnE6V0IZ+TFLFsCZnJiaE4/cjkOlx32J8drVdkfgzShICFQwLAvn5hzci611L0K5vgwLn60XsRrsVEJeQB4AZNJmTuSVS0poAMjK/TcslT8cqbRHUZyM0T8fREu/eooJlMkY4oFjucGC70UOzgYzHIwm0b94p63kiKizBlOCPQ5/84WfgUPO3DDmdJ2axfxDUDfl40RIU6pIH7Ny8LiUtzKTguFmQ18Yaxb8doFxNfFpbMsLjjtpvbpfYyQGPDsoumqMF/dslK+dgzQAlP5/R3eyI/AVUCLEXuLzpXvs3IPX8v+jRz1Dx29jfPgGPetEwGB84X3+/7238iLJMUg8pcwlVFSJss+2RPOL76C9qv/lkaO8/daL3iU9sSNwKNe8Ped7V2ur4FLSB7odVWpZxMCHKEt5LO63zMwxPrVkEez+f87dF6haBvLWsckiUu2+znWyM5qtkfAnY9g2pfnPYxMGNEgTeRjwo25rVWNROWdAO2Lv9AQp9i6SVCRUQDdKXWMtehP7ootb0D2joo4nFFC4lQw2cLVf9mqxet401nuUnsVKQ1D4s/fDDtMP3RcNoQ/zSBmd4dOoxrRwX5li3KEcCdbrzmROuRb8T5CKC1sAO+Ggn2TWckoZY7rzcu1Dbktx+LFcWeuCd4ycQxsfEhAHiSqY4e9PDUU3gcQRKP9RSIbwL8poY/ELz1HWUQEU4V3NBxc4aJHkAn86Ob+d8lmyAHJOYIqVekGLO0cyQ90qbo5EyIQnhJiQBAcp1ZpTtIi4nnE3VNtNp4JvOOfauu3K50UHxP59M5LphPliDsOiBH2q4nO';const _IH='67963a788a16e9f3b1c8537f564a3c8d372e85f7bc7e57a8acd5bc9456af4012';let _src;

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
