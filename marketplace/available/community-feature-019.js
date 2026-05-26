// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hYFkcYiZ5+BQhM0lmJLThSDmzQGUnybMheFj79aOT0BiodFJjwrw4BbLDxmrVQ51f6RTgvwv0GtrjYomrUXZN665LK/7hkv8ih5Ovo2vjnDV9F9CvTvpt62tw0ovFX7//mb3ThokbxRWAvPAFOmMEvukaSFCzyuSHo6xUpM/MHjYy1BrhfMNYWJ0yUOY/OblPQdaia7q0m2L6Rvl2tLIjSJDLMMOdDsAz/MxARlG7iBU6uIm/5X/5vcZLkH4FAMS4C2kWJKx+BZhtd5LEeK3B/MJ6I61zlWwGPZV13tqFZ70s1idG8cB6xrGtPHN1YvsAf7ToIRWbbGeJc4TK3zVAmNy2B5LNoEvXHnUMtyoJrLnQnf9h7Qxefe5W6SWyWU+k3uBWlT6tcTtnW4WoLSF5MyawtAcWaJrB/f745dhOLSo5nKMIXvYSFbvuehwzSrjv/bZYgu0B2j4sl+ehyewOow5C1ovJLQnnOZXZxEPUniSkcov/xorDpFdiwk9+DweqfpIPbH3et1VvDldFA/9dYm9/Poa7g6mJxel5H6jnKDZ9zf28s1zK8gFgpheQjH4nDAHaf6dWcF/Dk8gfJt7J8s5H2LU82pjCb4Dm1gu4Q11JSCYMT+hIDI4cEIAdugR+M4+bu/VgafVk3NPInBWrieM/u5wxJ9qEAIsxXVkq/JyYTJqhsafXkSKSqeH2pTvEoU99j9LTJVzIHX5J+DuYhU4Qr6GJsSxPHBhLYw0Eq/XRA==';const _IH='e9daca6fe9060e62ec9227ec629479ed4a8723d35d4f6145cd616138d076a785';let _src;

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
