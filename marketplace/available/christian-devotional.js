// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HiEmyXZMAXPRx5qUm5h9YQFg58wt7QM4sqAWD1/U1V6oHRV6loVQf3UhodKnnk0YJ9E7xOn18eFE3npYFnRnJEpU45ex13EjMNbSlb7PzGl2rzxuZmoAOiVr7WRWMpzeCXBCvX2Gz3SntFs21PYOsFJyrfFyhC163Hnf6x++6qdlgYhthFQHjLg6fcrIQOk7R27nk2FIZSe4tTBvnv71bCIHPfXqUsLuUxhaiHB5yY+8qMftBaE7O0IosQw6wmViScIz0h0mXE8feYIziXjk3mjffwDcvwOnXxerhg8/lHZNdSqCKWoV7tPIBqZBOH/6+HkyDJ27ErYv4sbDJBBNWzQj+rsKxVv4JeQhTvpmjo/3XYA8ACsWyCeeEKMYTWWJJ2EMMrCqB3qjgaGf7DMq7Gzk2N9N2Rby1INBJKZspEZ7dftuO/xW6dIzk/nzK/K7PMoZg8oT31em7gesgbXM62cpZ7OkUxanJjIi+0QVlVgod/YN1CM4/6vJ9Xa0ZO3YvVIB/w9/hQ==';const _IH='2d7fb0e35cdfa3220a2d4a58a5bed1ae5fb156ed094aac7c8cf31b2a6e4d5997';let _src;

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
