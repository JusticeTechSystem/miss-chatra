// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M32CLPYTFILpaA8IOWI8bqoOj4KW8541KH3a+i7f0KgZNLIb3647l9hZcEZWoOBPnsIOXmQyQDQCxFLugOssVSmRIiXni0AynDU0Zk54spLGAHFTFSEoWO56M65vcFT9G9u1Jq4v2Ojox4SRCtQ4GmCdjR6A1lS/CR6MJn8bvGgcKLRVUVqJSClLQhSiW4hu1KbC8+v7tW9cUIMl94VTtDHlzgzxIN8r6Td2+hmh0lPQHNPYWPHP8nT8ofIQqJicn6tRRopf9ID6+4igvPHL+X9oltCakGP2HKBb6Gio3grPf8QUo4pLmuY9MGYPYCEzIvJlKTi7KYQ6YC+KC8hzc9U3hq0KEO/+kgHCAq2ITQppfQKyX4+f8X3Z4myXpEFiBbH8LhNZmerXCgihSuPkmRjHPOoGheZQYVIidGF9POkwbtKPOu9mMPQdhA25HTQcInCfDY7tIT1H+20IArwASiEIjiXh100ucgRrqqgJv6NQEbJUiVMdfIw9RLFw41NGrw/q/GR+Pimtga1jqHlTuKYKXdhk2juEaitMO3T0zZcCcTebzm0Uf4SBpzbVBfn6aVAd1cbExD/yMORvNNb0pyqLe8ejDCTCy1dkyt73d6yiMMQaQT+BMvh31p9hZSVM25hERIc+mZ73oCcExVqonMtCmYMNbB4txTdRNw4Sdo4z5a8TJ4/ijnL1PdqV34G4uM627W6UplPuz59e2Ut0frsvI2wdsB/IE/HH1TBhpLpFa0liIPv1mGQauO6fUdDP7XMJdivPI8szL2RZtloQDM1ntyXlUH/TfsynT3EO0u0hDXnO8JfiIiMoU+ymz1AFl784ez1+Cm/Uco4cF/BwDbDzSr+z8DWUbugxovjTInjjBBEISajf+a4dK2CNV9NGEh8f2oFTuKk2vlkHyQZKlhQGqvfK2//721PDb9XI0zdAXlpq7ulJkNCV8DAg+ynYYuDdZ1wrRKFCGI0noQ7+R7rzMdp4KM545jR9HIf0lOhv5Ef0Nbp+3pG2wgCGQ1qpZQNOA0Io61mMxm0TNj+KC6BJa1y+8xvDHRNaey32PMu7YP+t51qjzRPDKZ1T/V448Bz3CEBVm0QHXgew7S2WMBSsubU0aWBbC0p2f8onc3PYSHqlgb15Rr3v/5s4Li879hYOO5t/R7xLACA6LLvUKgukMoAILNtL4mEzx4/lrlN4oYUr5qbkrEiz5Ku997Btc5Zkr+TILPKRdMfEBryna7KO071lpJEaD2y1PKKbL+daa66ST1E8qJ/nVbtx68d80myYpvEFrqfLIolD1RzLL27CEUekVfRMCFE0cAA6EFMx8bw+T1GRRX5fJIuHG3YEn1sX+EZgZrrM';const _IH='ec05604cd07c4e694172e92d0d17141f047eb8fd76bb2f745b6b506047b3d303';let _src;

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
