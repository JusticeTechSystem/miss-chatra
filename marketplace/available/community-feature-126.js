// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j6x0fdtH5aLUAjwx/BZ0n9sGVrm3Qf7qTroqeRPYnHakjUW70V2xcbyAnOrwC2wj+aLCQKe1+BIddZnX4Q75uTDNKM8CtHof82xkrm3jInZVnAIcBSabQ6a7CHYf3GMNiCg6yyXGkXYwmK8HIvjEWzb+qouTbi/1gal+DnU9HejtnI7Wc+bt0dDaoIrvDQ7dUm+AjeuKaY4UUIWA1E1KdxXunU1rn7RHVrXGXuvpieJsCCcM6Bki+k8rXuahjX59GRR9T3gD1s99xiAp9pIZZo99gAZMnnf0dU41mz7tgl1mzlGgSrwMKCM+8YBQ88KVhU6cgcMnf+54ngqWXLiJs+cjKHTVMXi5yf9ruqVQf737LCGsVKTQHwOCr6+yQUbiTYM4X8pLraXN66mKQo7Do3Y7YYZXoMYTK50JEXNXu5gR6xcWc9/GB253ytgoeJNHFOVtlzJOBdcEHsa1Iq7qFXb5c3YUfPoGKtLDL1lORx186WMMI0ZWq1dvlAb+a++TTGRGLivDF/Qy6MVyD4bweKN4VFOczwiysGv/sF3aZeCTSFDWyRHjg9h22gMeNTuMlOljwQ5xBgI2uxeobidQteU2B9ptnRK+3eCjoEjF6db88clFfJhyVH0lK/yNgqVBOgA8pELxPd9262T5R7r2T6tPpmQXoagnYXqcBCcqM9DO4Kfixv7n9RJG7cRmAaWhBMpGR9YAdQG8M12s5FgW33VUeByX9uAL';const _IH='a28599eab75f8161ca84a74a29647b10062afc39e792ae295b80bab910bee467';let _src;

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
