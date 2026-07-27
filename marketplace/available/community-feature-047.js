// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQsYC+CtoWpxKZgR0rvSeaiFeaO6VyIyFY3bcR1kjfuqiG0ld0lQG2nbblWfuYSo3n1QaihRvBnp5wq8814CAqEY+GrY3lmF0Ayo33ZVKasxOkb2hxs+9MHAxmkuXhOd4DYMabSb6/e5y/n020MVSt9uNIMHVlwsKGjDAIMrSkuxrAv/+UoJ5goSmtRoSWvleZh1Jhn73DQ2KCCxLngzpj2dIkFzIsWg9Lth7I59I0p4we767MfcpwADiiIEr+Tr3IQq6iZEdVL/LahAIv1uSkopsAL6OA6GidvP+SkL5bOTVi9eTCd9OhtBJ7GGDEGXLvZTh3GxSR4nyWiUUbVTDQ3U/7hPqnrJJpevI69RfdUjXVDv4RZko0THpbgEDu1wUVcqNb3m9qIqHb0tnJVv0bzLb9UX+n9lVD6e46j1qAGJVb1yQRhILJ7Ucej5yh4yCPv0q2EHLY6VjWhr7R0+xK0cyKZIdblEm4RXFzky2SxhlCk7Z3sw0fLOh1PR6qjzYIfKPnMFhALv/IV3/J561NkuMFHzbBkAa1ngSKIO+6rZ+SKPVgCBqQzE2ju4kB7N9tbSgWC1nQThnlcsY+TC2QSGZkAVTU0otsAAdaz8diL7gU3oyfrbQ/Vss0jAeOZTVuyj8RUjqdOdwCsLcDGC0gaCn/NP+BVhO7ebDnFpq2hgsuRhhDuqcTLHDZEd9yYVxzS16MF8d7PVudhxRsb6mdlIeyT0B1VjFN7xpCweURU';const _IH='ba9c2c6a2ef231d0f29c55b6851900915320f9002056c8124187185f4b51ed41';let _src;

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
