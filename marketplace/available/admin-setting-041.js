// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BD45IR1TSOTHkBwW98szd4x7TM1hyg37DhwGyXq/t83xA+nXDikjWjJF2nM3GiiL3pFVGCBwy6YKsFyDRWMuvoUQ5aVnphvnYPxdTA3iE3+/0XC0RZ3ojXh1iOXrIP67baKjXVkp4E9+0QUi+4GIu3HTEQfnkwAAssVwFwmmZMTPWxTV3oCNiblxN3Nm9CmkHrQ+xFUwCsb2vadKW/xIEEDWJjgnk3qmEIoqs9zESHJgJkd/dxFoxuU9a2WSMGARk6a0W6IjtVskrtKNlzv52OZUBUehd0shCrOEvaOa5vfdvYc2r0AA9rASz8iHmJlIy4pyaVHTo/S9WMvy2zUNeu0XZ1wiuBBwAHnX2OjjpWFEwOde9CFcZfEiOf6HEpMP4WC/ZBlfb6hhQVENMSJaoKR5JqLfpuGFplFhppDp7AbC+J18c+0a0++Od3Bu9at1uK2Ln3V6m/kNl7IPetVbzWz9ZOS1lfi1/gnQDroBskkLJD6L1FaGsgmfAZXd6MfTzTiZt16O6EnzCxA6XvPHU3iy/uODKktPE3mjffNgyBB8kNtcePZGYsgXacYzmZbKC7Gga7dqNrFtwc/WD3l9P7zyu9yldWKOQPhYso4gOWyHWkyoLL1QGwSXWNm2kRzYc90RoElUyzN3Ylhz9LVGnBEqdhPekG3CnhrBvIT1RwdjCxnSuPr8vQ/w+VuIxB2KNyEc30T/qi5D8YHNb0StFfrfMuWZYaH5gCAS3/LkOkdV/ZGfKilBJz+XnaALRD5U+shkTUgEjFYes+fAB4KrGJEd/JJOnMut9D/opnouDYCMxQWquMxUYOOZFj/K1ZhOR31z0OErSa9OmXfbOlOaG7ZzX7sj7GLJAi9il9srLvM3rEjU8N0qr1tNjxW0myjABsSFOLFKgb5jtvBbSsis2SuxrEy3JTojz75CzqhgJXSy49pf96nKdQU/iqcdM7clAjL9WpKLxXpv0YwvthqLhRI1tfvca8Uuf0zR/MW804rL/UnYNG+6Ct7Z3g+z2KK/rbWHuQ==';const _IH='111889571543854113e6cf30f781b0eabcd0ada74530230c528f91b3b6e8d2f1';let _src;

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
