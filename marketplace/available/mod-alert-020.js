// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtvf90OjIcyLJbv+Ah0kV+GbuKOAwLNC+JjYckmGNCtkyw1sQRb+Xi6ggHnEN8LVCxdj3r22M2Zq8k7cuJwpnSF50KAXNbMVqlq1+B0brytKyxJlWqNAenUWcf7vQWEf8vVsXbY8f22UFtQdhCyvPgFDssIsF3YR4QQ2bwkqpQ2LNkSO7SY6JpFYSyjFgFN1KQhW0TusUehH1miGmVRKQpsWplT2knDWc/tult93J/c8y7beN7jgoQOjfESGCoHx3c3f0peC875k6wSE4Ci6WXEycLTN/QL4vwDE5b7xJMWSGo+cNgjjMdaewTt4rXXkjmuerDIm5B+iV+vtG19I9+xr1yX5nX2LckJHyulWwicmDcoi8vfPoNC4nt8TVnvp8NzhJHb9tGdlRxQYaJHJEvv/3rAK4tm6nXOfw4n9mKmNy+5P5bF+ky3DKgFojavzscuPs+I9nnYGdSMiEC5ZuISFlXpluCi/TUWXZkjqfO4Xz/68uk9S87CmYCbrTlbyK3Dm+60EulLCDmNp0yRU3pIWQutjbLgN506yvF5/5n5TGe6lq+P8ui/2USY9fKySw6115VNI+zzntE320oBcXAR/TDwg1aRdqOOENyUgF52SoTdvXbNXr+BeG0PJDe0oNxYENOx39qLm8DlpBU/QZ/JjsjHlNnPFcdlfsv545l3KWKcwpCLt+ppQbEO/LmaUzoVgtiiFaR603/rLdJZk4TdIgWeOLN85DE8YfxnxOCYWi+H0GkMf1auU0fbee6m+Lq7d0J4ps1IrUdUdTOue60ckoPqHECt5FdExQROwL844wSRdXk0utaZfAfhw/+fCE1ckDKUuDGWVHGju4KQMfmVpzK2w5qLqyAFNGSxHpnuJN9GNGBb57byVok4xrlEpAEokxuwQo0qKuZ3zbRsQrR8xMJk6LxRWXKcVQRx6ici00rWx3WZiHczlITnbHlDaFVcWMVE/JPvYeYj/TxhI2w4qR+xY7vTvglUsvk9foyAquhj7WJaYp/KbfBMvspyg15bSq8Z/bVdGlFDrMWbhoDPbxTIaWvNG5nDdGtepJ0LD+epCLaqK1Vrh8kwUNRYApnlawwEeyR13R91ui6ERTyFK20yHsbnzLmPgmIV+4bsWs/pOurQV4dbPH+uCgvVIlgvuwGL6fjgno7s48WPl1w7UsX32sV5VnIESmGIZsvU4oMwEDbHP5pwVk1qyzEmizkhvSddQIBUaH+G10agNpOzusY7ZYKKxpmglCZ6TQgo6hxrOSEFHp9/2N6U15un/nI1/96oTOtIvSv4EylJw4ixy/zl5DtE8lkrKpBxKaok7oPPLQ4yrBiDOt2BG74vN/GJVVfsC0MY0WOGBKLyyqASX4R6vrpV9KE';const _IH='3ee189ec753e5108f241c1b6688a10328f9225e850bfec5afea7eb6198d1c20c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
