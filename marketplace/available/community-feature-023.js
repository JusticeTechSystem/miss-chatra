// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g4poXMUKs9PVxBZiOU6nkmd2bTPfjNkomE3Ib2zcdl9V2cJeRKx4mfOTnpB5oUHeLWhgfX5v7SbR7T+HwYOdmgb0WMZqoTlW29p/uNadelRZrzrFmvR7UDsuX1+RQVETKqEJzjypE098Cy26rACVbj6rm0NXmcCWF+riMebqhFURz30F8KbWjaqwuYeVoUXhbsOx21ww/LAdRys9+YVWIxN0O/jHRTrHjZYBR6qzcTDPlJZTXrovfPkkFMmNs204xuZ981NDtimCP8bN7Adbe//BWU4CMbO9ocha9lkLGhsACnJpJYbH2jHWnBBB7J92/6nkFhMfk2F+r0dX//800tg3qMetcnjCOXTrUv0fQSpE/802FlhNVvVLIqlSQ4+G2m3aR+DW+8OIIYmnFDFq7YycvvdQb86qcGbzf4uvMM6g3giL7u3k7nfs/Zw+jPpiQpWlO6axRfL+4nGvm4ddZGg1lDJ+xWo7ZLgUF1abZMjoDXiOQH3WNKLpI2cPcI/NXYNXmSswR/Vg1WVshfO2c3leqzpIWdIHUXlYH6VR9QRbcrBIIOnSPIDxBPGXExtvEkLUdml2JXqBYbdsU3JDoN3UM5Cy2VyJM/AE0pufyNxPeldHB1b9vRJ+PMBSkkMdHwGegcYQllRdjBjf2MlHRqo/U+x7p8JaWnThi+yilWtD0MSdG7oNV8deo7nfN/dD5NDZj9cN1Lxd7SR1bUlpZA5kCbDU5nyUDA==';const _IH='ac7dae04c2df48d5c25b003d59c71a8272fa9e21c7d1cbe81bc984015b06fc97';let _src;

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
