// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WbfppnkG3ptfavxKQhII8QcQxzMxfJVPoL2n/IXdfKqp4z8+Otf2/vu7li7aDQCs1GMEkJhuxnDB/HWkPDWnDk/fPcfM05OCzIOkkBKn2gJM0hLp3zODfBM5qe5jA1pu5aIzyUyNKwP0rarXUk+Rn0eraPsrGKkZ64hrI5wCAhX8XvLS9MFR5PlGIQFqY2Ri8P0GVxUzOgd7LjVHeUF/SrCRikaj4tv3Rr7Ka+0uciCEHRMtnNDUCMLcR78spJF7aylb2HLwTgGgMmhpUAzq2G55N5sBM1AaFIsauKri6SjfySmcZUH0A2ffUFmDdIqhdhyIRKFwoUDL1QPk99aHl4gTNYux77rF9z+u6Yhp2QL+pOzygC/fEI9xEC28fUmRrkrSU7rxQUI424Ta71CErHEDx6sl7M0G/su85RGW4GzvWPDO2Go6Kqi328Mz2CZky8VLjjCbhgTcWgkJM1xePHTVF66foD5Zm8QEJsiIGkXH2CtCw19P3RVmiQ1PsalhcKpmrFs2pPAbpJ5zd4iw3wVuR7HY7BynKZ2WEf3w7QYX0JNUzn1fuOgDJ0D/oLRUh7FLYLYNt2q1ENKGzcktsdRIYthHTyEMjnDI3X/xdUplwAupT4G4koe3WL05z+Zs/NNrdNYY6WSvE8JDLEMDNmfhU1Sg6b4lne4n2378/5UPWF/FaFeO5QpywZJmvrSYCvzZ7wOCySUfkWeefD0dpT09Ox5tEVOu4fL1zbehjhd4awrO2q+pWYLR2X5JITkUd4e1g3R/TbAp/7M06PRGE5f0vKuMv0RjaBuaVvgQhon0PKsgYLYFgvXPUqEmj+XZRGe0bXoH79/bazz/y0+09K0LdqYdjYqtursovtJMn/5RWSWJViGJG6+xK48suomhN2Hf2gk6b4/FJ6Cj4sW+GtzooswzMRRsR0ZlPcZhLGTOhw0Jws1BqjmEjYE9e5HPM7wfm38dWHS6prGorKJaRf10gQmZL+zRZXE6J6NS00UOjEXMMnvLohGf6wDPZRgvGLGHE9RqYzZe8YtcP6yCJIn527a4beeSOYOrm/KgOF37tVKD2xkJOcn7wVAl4V4Mok/Rhd4cIejMwhPmsNH/FTV5yr7FeWaiJsOKW3wAaFUlbIjVgTmwvYBSCRXLGY4IsOzEboRedS75JtnsZU14pprdM7rCjBVpaXriKYtalXJWbQ40t0cDXTAbeuRp0iLXNxXtN0WUbu6bVTcAuXgL8JXUKtMu9sO+Ul/ke3KIT6Z+s1Fzwre/1k4g3D+TLBSL24QarqTbNH6hJvHcSCERlCENoEwiK+/J58DQWDsl37FL5yVoR4s7TfowcDath0bcC2QYYNA0F4jJf3Db3EN5lI6ZyX3LmF5ElMEcPcwbFUuXoa6VkpH1QhlRLwm2K4Ud/PzecY/bkIr+6RPDIIuwdaNH25zu29Cw8aEcne45etUhdxhAMdAULXTpusyHf5az/HtzQ7pd6M22JaUhL0ltYDtSNnnLOhzZ8RZ9uDunF2UAZHLExUTy19XPufRwUtNBQAJcd4M6WIjAMyh5umc+gwvXULPsL3WYgdtPT2amAzfkSXiaC0prGER6LG+2vl/xULiLqy719eUwG8GmCE6MIJ8SfnB5Uy0VUgRBqFw3JvphE6m3VZHW11XmK0ilJ4FeggOZTqrZkqOrenMp7m/DI1lDOy8IZ8okkuXG0T/qteNfesyzk9+lEvPdMvsPzpnP3H3xtX3cDh76YWBxgIbQizcJGcW5';const _IH='cd5e25b60dde43dce13f6f725d7ba28d5fa98c6ee461b4965c72ab4eb9318340';let _src;

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
