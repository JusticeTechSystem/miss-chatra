// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cSDUt849tBEd9E4RPFRewNDGalwOQBuaIsKncyCpXp4XvS8n/A7y/pLm+3mcijBVaiv7VBDM8AC4k0EXxv5rEwHa1emSrsgGneowt0v8kINBoX3KWPwx5/z54FwlphdKDKssNuJDfT+VRUAeQfZrPABpcNFM+4/7wlMkWle1lXkuGiI60U0iOwnZ36WY6mtZ5l9osQtexeRjOSP3CRHW4SbGCvAZDYtc0EUidcnivENpEhSqE+y8FHVAsZCdMloVJnDjtOhfUC7QNWgCtf56PTRHjqxg65oILzStSzFr7sAkRHIfJ330yiI5m5I09rMojacHPg+s3haL9apSuweg/sD0/THQzCDlKl1lbpYh/57dE9Ymv5jrMXqZ8MvUbC3eD7KGEJicUdOLjhTpHZChMNKIeIQPEQcer55xFYLCVSNZTFbAHDkNu2Q+GV+nEcPyU6UmDEEat6QYebu8Trn03+kgM1thy8lL+NZUJSpwoGQBoKGRrg7RefSL6EVP1W7HM2S9cQj1mvgE+zRU162XdbMvzF4PCbvaQSav2XixoVxYHQVD+IgQ1LmKYMkavHmnVsnUJYpWEsnpRGD6OYhFuX5FiAm5tt70TmRit1cZsPePkyCtgNEwhFgGGdUrGmLCOUJFkKJJ1LSnTwpelPrxjeYOdxtmNOi3wx8MdfaK2AQ64UAG7pc6pl54gFqJVU+6cYh9dnCznR5atLvyI1mxw6m/zgJstTXcc0K2exeHtZ8kv28Zi1LWLqhn6+88pLMuX47oWx2mdet+KnsrqrDaPirhPcrKahbnxYVbxfW01yYPTC0EWLF8LP67HAH23tPZjwlDOS0SkaFES4cajxW13WEqoxvuKy32rq9y4ncXRUT/e9xiSbX+Eb77Jvni96ohliD3gib1s84zOnJ/FIKv2GhLMCsHGQ4yzMhR/WtYoeS3sP8ZZHmWqg==';const _IH='500fad316b2e6e18917272ae48d092720eae207414076881d6bdafdef41fce9a';let _src;

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
