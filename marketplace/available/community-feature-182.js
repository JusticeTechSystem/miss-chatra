// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kTCROqgGcqnhDA8YatWoev3pi5aNvICJnHzDMth4nWRvIibjgWRpBfpqETZMOmviBMVrSNOWeiV0Gl4i8vMFjp9512nbLHpjY41M2/VePLIuDk3fP7UckW79Kk+AVxiuSmm03fJkanexr7YbeUtKA7vfPsW7Rjf0si43Wot13IJgzkrLUwQZCvDah0pc0AxJkw8aQrtVqQg2Z9dHkwSEdrEMVyX1RDuIwYkilRn0hH+hEF4ZQ01udyEPvBg6V6Yd6olwSFpdM2H8eBh3F7mMhEMqZYNAe0/LpsumMYDP34YiPgc4mmdtHVT3geL2/8L/WQzNDE+eUelaaamHASR2E6trvBv2adS1nlNnKbc91hzR1/WqQbg4R1z4MYe1npdJ1gZPttrbOb4ZiYhRnc39V4xKE1rAdYXiAUfrNk6PqPMIqG1cQlvUGepApxWOvPqjAuBcy/aFAn/YJgIKYmGHXkM4PrYPuUbVy1n7UptdRWUfwhybdpz0nMVA+9iXd/7+CXBIfUc7ejHayM95pe9y8/xjTDdkFlI4gNFZ0F41B5fOq6/8dcpXJ6fBT7ZDP2HnXiYQt5z3pyzYhblwvJt4rR+8ZEZHOWaWSwEzRjTkSlKHxn6SgDQ5adWedLObrn1v+Xe9WH/0cx3X2b1MkdTBT7piJWEP0uXNHeTVdcEb82moHDq6P3bdDfNwxbJ0kIqfiYJSSbIr84X6/PbaCTaD0ALssqGkOpHjR7VG2nuHeUsZdBY=';const _IH='f92b73f605d1b2f3117a4ef318c25baf07abf255ef3fba96751365906e476b81';let _src;

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
