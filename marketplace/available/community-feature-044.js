// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8/oEgTFfTeoJoqBOIt1CIBU9ZIgxsL1jVaTS0kK/l4gMp1u8ggzqGRKna9i0B0bOtRth5YIEzxqBID+14eTw5ulMgrPej5/tlqhSwz9E6C8pvfGSEY4JUttdvVq3Rh4uf3+ADgE6xV6S35hyWI+AHdFuowukQWQRJVRq8KCDkGh3IEpJz+76wOHam+a9pISXfkuyYB/bdMB1xYcdy9IRpaqoBkynafCs/CEnGiyPBmRtnlTZTFqC6QMEQnfigsTiuHVRalFNDF+vzwfDHL7QVFbzkn2NqSSOZwCFAUNwhbcCMwaDKPxeDzv5v9nMC4U2Iny5UgZId3o71n1nwiodL5fK3tlUj/DYBRO5OGA1r8XAxj5H2qWeec02VmjPmnBgC4MkoVXRvvZ2KyQ8n6nUBnMl0Uq5ZdClIPFEFkVGnn9vcZQ8Ye1KvQAGyqjZnDMPsy0IeLGHd1ixaPyal67bjzC46CaAia995QJDIedYrUaUCvzNiLiRHwaWEf1LEPIQE4oJkrMyBMSu8ChXa/KlznzJPpuTex++qCwfKqdIhJUwjCGmSL9a+rqcSLJSYOUP7wjN/T6GvoqhgBMhHwf5twPXwBu3tKbOo6NhwnW/+1c+NVKLWhnVHWnsQ+xI2iup/buK/whEQRzz176PnGTLIwntkggbNgLNL2Uu4LbGd5BuILCt1d1rIYVsqAvR5cpKmmMxlQ/H/FWQUxm98nEuTPxfQv6+VRZwkxXICQo4nwbiV4=';const _IH='74213409156290460c8882e2ed8ab6ae3d5dca9b3c0f33ab64e8387e96d948cd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
