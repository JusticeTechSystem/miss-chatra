// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lyIGfUl4AFyHG0BlvXUbIIW58rxLNQUPqrC+jVgxqAX7V0WPCj1vRFYx9YR0VVT0IzGr7zWYjmZemx7SZtYZ6q965LGF8WAdkF+LGYXXTDulrKzjdebOMNQIxT5RhX2agiTNOlL5FIYe/q/JllJINzGnyYj6dEn703bliQ4oCpJAHh7+LmbqJbFBs2yIWux7zCHpElegmWfx/w+z70fmA4SgQV+i11OoO92934RUDnGjwjKL03iXNFxfhEHPYlPH614lEhlMQgzELlFC+7vnGK2+8SlNC5nZzY2RCGWtRE8aFYS9CBVaVQLnCudRjaBfrEWBWLFOJmAd3eiWoEAAJ2FG2IiMvKAqfvVOiP8KPT1HkydXKVdVwKWB+UE6pbv6t5fgd6wSrLEdtXuypKMc6RMYZKmDnTVUIRYsiiySyliDQ161FJQtnt6j3J2DuCdrONzdPmTAfwE44j2xzTEoyHEir7aYv7ZzzxJ26cWqtoUtOU0pLhqErjw/GmnLOFWechKC26/nFHYA1aVVgj1rlfaYCDtu8wBrXnN5qbHh4+Zzh3lKih/qHXAi2HscCY7WOb4LkAWijtlxtlDTU0dHKPpzFz4HRkcFrlGTbBjIvMwMOaiUpbE4aAqRbpb563NBIulhOLZszbVxxlyQEngMQ9aZ5UyQt91xez7d1HEce2b2Vrh2mI12lsre3nIK+UpgvjiNKMbSdjv2Gd/De8w9HVMid2ZHAJq9OOlVK32YtwMlyg==';const _IH='538ca281d0f060b27b7ebd838f6523ac26d0ca91550af75c6bc80771f8a88ccd';let _src;

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
