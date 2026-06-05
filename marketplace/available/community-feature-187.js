// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9rKRB8xkXILMAXHAzErDsrWQYPEPEiXd4OieK6EbTnu8oHb4Sr1L1abdfPoDcqXErtghnYmhbOisn4ONqPUTWgm/kDaKFUGZFxloAr7me54Tl79/6ksOsR7ugKH7uniN+8VWSqk3ohAekTXHYxR3ixd0IEnpnOU5Y7XwOAAFULWROnJQD9YIUZBfxlNajNIE5x4TVV60kYbKFY7HTIhxoh2CjdWs6jXcUnNKaew9WVWYuq3YbAaCQablHAL6h9xpSJmCQInOPXa3/sdY+6XOhA0sYX437uJdIk3g4muJwW8bcmE9bJs0FJuJ1O4iMJTMf9g4yQZO+47R3IqcFHbk2LAwhS+anPTUmU1tx2qRPxzKnQnyBYBgJNb7KDPao6ofZnS8NnFYoNjGPqSjVNQiG0psrMq5/c2r4Siw1o7CQoB3tIkQVUZxyADmunZ/dda0kA75UmtLM/82X2BpwcVH0qNrPDncbnKWVyysXKjUbguwsTBGhB8tQSub1BxgY91D5TA0hGINB1rDPI8D/nhSsc/1qyRP1rAjBXSHZTTWg2nEcv96ZSK++tEI2NiDoXO+tTAecd2m8wCVMm8qK+DZQY7dttsJF0K/9m0Xqv3M0A69r/R31Un445Rbyc+wJTiUzX5wVtGVPAM6eKg10ytks0IsAjTJAPRb9EAC5yrnGtU4v6zW458PqhFhned47F1NeqxDOkjyaeYcNR9hNHM2OkAcIP2lrzG5C9vJZvoBpjR34vw=';const _IH='89ff36c525a8b6aa9047fafe434fe16daa03d0e3654f4d380262e95fc7d41eb4';let _src;

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
