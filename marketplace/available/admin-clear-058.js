// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3iFltyvSeMuK8QM+dh4eOKaAW311tpdmrZybaJyiY374AcliHzsLJ9ryOjOyaW4a94kX1+o6PFn2vabhqxpgY9nr5a/zJ3iAQh+Cifib8tuXtXOyzCnNMTMd0jTlnSS4HvRF8NDQ49DkbhcvYTCVwW+iLz+bCrv7KtKkuAad10M0QGptxH0X18Oou/CyCdYoIcDZ50pv1EbiFZH/vWq0UXT3muv3EjJ2VYN+YAFDtumSB6BEVYiO+tpQy3gsH4pEXQGlizKnwi/GUTJLexY/b5d7tIVbjMi6G/OFovviI/FWkyZ1VO/HA+7M+5+zz1OcVHflTc/r0cYCukNzbLfh0Rt3AdnWPwVsjNc+WN6MVWnsWnRWe1zEF9dPurq1glGSiha50SDBzQyTKw6AGz/rEdb2XJl+Nj6kc5gqhDa4m8xEiwJyl3ggBH9/rwB86utw5+hzk9AETMZkokHzzgA7G4fcjkAzIVvTxx9RMJHVrO6MkPFFaaW1AYAqgL80KrzA9q9zzbmx8jYcv82kWhxVDN3VE8jGWTa5SkR/zin/99k0K3TViuK3+Q29xcVH/qakemy2gLtoFdMM9oiEN+2QdjDvoQZHgxa6tUOMtzHXyDm3Dr+M2kl3soNctYeXrs8vRylshVatm6G7DS9dj+Mrkvsac50LEuUezcOszrykRq92qJUKteXtSlaLV9KvAEBxv33LgL6tYM+WRvxuyG4usdqRLS3fYdn6ZlRLuVJhRp+uB3zTnkMoKe5FgmjWpGZ2MMo2Fvv/EM5dQDtLLcnHQV2eMm+h8atazO0DvUELt2nu5lkofzMmFhLacneFHJxQvFyuD7ulQeucHHbNdSjDf4QstCaz6GuwapDdsHcoGk9u/5Z550z8iKpPD+M5+GMku6azed1NZILxAVzDOzXgU0zq2AkzQItGrf56R2kYZ7DbWvrMvrTwVNrn0yUiTqoJvHO/hNbT+yNslXbSPXZQdsSFFfjLq2m6piBID6AzL+v9YQCoLuF';const _IH='e0c7c3757c8eab9947bac077f5f8d75f04c1a5ff5f4fea61167df2f8df435de9';let _src;

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
