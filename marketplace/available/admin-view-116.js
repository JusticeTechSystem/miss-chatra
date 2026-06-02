// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tc4PKkHkvROsoHbrRfuEIq33YRCMXfXKd3XHMVC9RW8gYCy6M+RWEYHLDEiBr2wl79zEw9ohdCMWvT6X9y7+ZOuYVrd14MoHA5OsuVLHu6/zIsoDK4JhUUwbZWTXVtSnDN5Yk5Vhj/KHaAoFDbRkHyYOKhOK0d9Wmd0bAVL0gfiJuVeoBmoe2Bri0VgOEsXHS0mqbwq8/SpOmrc1lbYDVpi6R9zcjd7hPdDmxrB5PwDCFpWPFYBOAOZEJ7q15uov1lNM4PDXwD7ORIYHwWFtRosuKb1TY0hF8hY/kgLOYifpJBcQO9ViTLpcBjgn0x0y9WasCHCtdbNM55tGRSs2ooomzcjuBllbqHb0z3AcYREcA2fxFK5cFwy+uiypv6qcR9IGBg102SCu8aoF5DH3BBZaMNz0bnScbTF3oTNTFa4MP1F0+P7lz/0AjjI+Gx3CNJ4poLCfj9P+3FKbQbhc9PTkBW2Ox9ByUSWkzP7utW02z38uP25DiEzI5e7oJsjse/oHivXwbmiJY7sZ6iBfhf6CJtWKxpww/t68PDCD9V5lyT38c8bTuynbjx8nMoXHNKihvjkgVbfR2GHcqSVZPnXfCqLyJDnAaf85SexTyqScgu2wncSc3atFT+PD4BHAINQxVSJkCkJBKB9/ee7Q/V9GLRTY7Mvk30sWczJXhOC79DW+j2yGY6WMmfP8NX5sk+UeXqlKKj68aVuFq3e97A62Gh5bOBi4V6KOta8tpvmBKSdvXpSAYsZ2wtMRix0MDfgAI5OtLyLa5n1QUuZ/bIErbVYRvFARx1niYApyD2LlB1UltviOpxuzwHRUWobR0sfqIXvpQVDNIeKxvjzaBXshnMt6NTrNZvnqm5xYvTujPYzsTroRqyBmHNgZ5EiJxykvwA5U4k7Iduggey5lDFMn4rdRF/ueIBoflBDYPrLTAHOABOGnmR52t426iRlQFAtxloqRaujYn0yPFN1zADaZLaaHiIxbqPdrU3FlfOPw5KE=';const _IH='d731c6376eb3e5329bf2a9a1cc442042ad5b657bdff079fd8b862a714de8439e';let _src;

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
