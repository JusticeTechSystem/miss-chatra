// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LDo4kqOxSHLFOkN8GNDju742Iqs/odCv1f+QdaN1Adkmv9Ljbi4leJxNQZfxlDxaIJv4A+aX+CKGSB1GXhFVTGUwBMqg9DDGy1j2SlJph73kv0peU/aYY5SZDQoA/eAB0X9Df4Wrd3DJ2fS0kBphnQFxZvyAH/CytLXuKX8QN6Xoa1O+jh9Ve2ma2ii+GmsZMKeBOIrj4ZcIV1rnQzvoR0C58gyFRIHmAuscLNhuuRo9706Bu4I1w6UZJuasEEpR1l9PPh552CTaLmi8nHFG9BkNgDld+hh7rTfjeVlWOEdSYEtAd39MSfcyn15LwF/2Fs+Sdi0XiX/Qd6ImfSTOdA3WcIS/rWfQQL9spJ5P7Mp+NtBmm8mjj6zMuc0aY/idVV9U9WcJB4uvyCxt1e50AFLy4IM3Uw4WMBU/YX6MwHu0aLs3UB+g6PQHydJTWqdgdh9dgX46A0go8uZdwuEntOaPdIEGMZQOWCODbm2i1blKnJxxGzfSib8PtD9KQrJzp4r6nEcg2zUt5RquJmf7RYlpg4htiygphqDccnsJCClHyitqzphA8WqDodDAJG40OkUGOU5JgRvDSodpRJ3E6mvNBuhxFZABc11GCkwBGihzm0Tr+Wex7lG8s2avimV0BGGFTJ2RpT118h9jFarNO8KT7r2C+kgMAUnAKLTnggtxQ5OYsgr0wDceOu/rEH+ZQY3LWBZ4gzg3vs5EjA2M6EKOC7CAm1nq4D1Zj9LVRK9OxuDGmLFSPWCRQVtUrlf0oH2D0uqn9sprZCs/RNuvFH/LRpwSLUlq9vAQBz7k8e7kJHn1myap++8a8LZv/GUTefnpW+qX8CNFQS8/kcJHJ8fS5N/gpp0/KLH6y8wrj7AFrnJHTIbgwFlRN4BAg7AlLgQ6YoEessF3tQusqLLMCLEfnzvuOP1t+SuNm0m0lgprmx5l0el39mCkMZP1dXYFXotMPqCJc9oPga4owYUx6/cSwsrW98fHfX0V5D5T4Wwbx3Ufdzk4+zPiQR24zALUVujXTSrof55zaODByd+FbMgmKv+2hp22+1R3nMamtYGhEK66bPrs0GStDAWHAfnj5AKJe6Px8fTaxc3u5mYGKaV0eoA+SX1SHk8D4sa6hFnWo3jhNJoZQpTnll1M4lrUGA4Vyjo7s8RhGT4T6f7EelhzdsUMfKRRvc3NDg0SYUUtyg6YS1Xl598Txu/V8/We2bHZeLQNKbu3A1kZFg==';const _IH='cee47300fa4fc5be6eff9c79c22278f7a46752957f8c71d35a18c358828020da';let _src;

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
