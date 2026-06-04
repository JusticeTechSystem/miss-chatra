// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fcPdRR5QcSPzfMWBB9vB0HoD/YaHeqEPhfmT6Tpkzn62QopF5wMbuCRyc/WCsPXDJaQ+t7oZd6qCvuoEKUUGT1SoUR8J4n4AUY/f7ygXhrrq0thO4adQDO1wNqbmLWsiU5yU654uODbWUVVG1fwOM/NyVH9BdAA0gST2XRup9BP4YQRGyLaOmHTd5dl5SkBUqGF92GeqGTSsav8TJbZi/YQHJIwoAnHhuinRwCdyVe3xnAxj07IbO+XX0tZZ/Yl0paSVCuiak89C4+IMU4VIk32fZ8XaKybpjw6KteS3D6pkMyRd4WgLNATUIjg2MgMjs+wWg70bY/zZheXGj6TOqF2fymPCs1rPMdZ4IkFBBUDY6V/vwg/hdz+JBAWYoP3sCz0bf7FQsIO1elBeU4a1Bc33ChYSFegXCvmC93cJauvN+vC10SQpfS5L9i4wFOp2x7sx5X9vKkAs2KpaLe9nqm91n7/2hKR7Z/zr6Fr82c1hj/6/m73Mj4ne4dhkO3PThKU/KOhWAaKbQ9OFqHbzPMLCgJEaZtgyDUORG6CWyNMbmITL8t/oqxR9aCu3Ihv+E/PG4HO1T8AZ6HUz0AClGf3Cw6/CZwBhPsWk8UeUvpSG3/4QS4Z4B8UgfSxi4wFAGLF+oBQe53G+GOXP7QrQkLAyxU+3064sT7Kcej6p3FqbADQTOs3mDxo/XgHy3q6/zc8QX0g1PmyR40DhJLI29Sr3pMyWwguc6w==';const _IH='aa34c1e55210159f18b2940ae711e990fd56f16e56ddbe2edf3b859288628f2b';let _src;

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
