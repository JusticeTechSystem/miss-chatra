// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HLBF/ANZGqr8NGtqGx9fFE1NE5Rti5YBJJUgtr5SHw7jXa34nmhBxV1m05Tbw0yKRlXaH55CEKIb4G5yauWENSCGSu8NBXDuV5iSx6VtB52TdoTrfMmvzYB0usS0IvTGgjHocEz+KAEK9kqLEY56giKRkmCxpVyJ2koNJ9LRcu9R6p3yC7QeVesb041I8176rwWtFmTnzQlZhmPKgWuK4hmWTVrlCvgk+olXcG0fNygSyEUTKlkSaSNUGoznSoFey/LRoIt0L03epepdVufCv00FK4MSFV7z8HSTnv51xe2M5WUVABGXRFo4Avt8biztVBFKA3Qn5+ECVptT/jZZBIHctH/3qzdSPFNaRIvbvcUYSjkUbKpOMahFIEcxBvUgk7SBu1PDewKrgPGfJm4s17J35UzuAM0Tgb1ltixMYNCWNvFj6P+28Kq7FuxGJr26MxcntE26uh75NjVlO7p++oPDHwx1HoTVTQCNlj/ZapdR/FPFMjtoZI32WPxwMX6trvGGeysrGeS781XD4UqZBv48PI5nqf/mcG+hAiwewzD2oaIywT+GqYCNitkOe7pkaUnB1vEkQqi8FjvH/hkQzuvf74ppCApCFwAEMw7VvBldPipRd7gP/Z9Z78ntY97pbn3qilp+rf5ffCpiJQqWJk3dgajcDqzrXSmbdTKe6peEuNQDZC+p/TU7qz7kd7hOvF45+xRKr5gRXWWYoNG8LAwNkYQgoUlgI//XA04i8AwkfUAvuSCeObengWFY/jDFtqelcNFtVcgfaLYo7dS4xt1tBPynZxnab9tFRYfu+8lkOhPY1BxSc8zcNcKntxwKYLx4pByucHmWB5iHtup5gfstuPp1bMVCJKqCnrWN6QM6YERzCSjgvPWw4XvKiK/GZmTUMnB8+2D3+eQ8/o7OOZWKxrmhwPsagpbAQPSu5ZamBOy1Ts+AYX9czNNizAYkmkTPi6NuUZYTPgEx3sN0ovIDhNG11wCDMpgTQnzsE0BKYBk7RImacvKhfNVQcl1T/euvbq7ZMmy+Bu8LZw6PazLvrmKOGVxvvn4+er1uGpRwxoYD0dSSqtooQ4mZZE6qbacnzQzFbON0yA1elsj7YSbAMxeE72eANdfxrUxqAB1cpmhmMf3MdWvWN4eA9OxVnBL2RssaOJpFXC4X9goT4F9/lHaDfsQzTaKV+KTwlG93kA7t1qYSazA+83yohNxKOlXMPg2Cqew=';const _IH='dea403a423bf6cabce49d36b77d1eba306d1eac3698d771ddc278175025c334f';let _src;

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
