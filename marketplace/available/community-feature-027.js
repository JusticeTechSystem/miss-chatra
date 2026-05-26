// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GWpd/HSBzwiQEFubsCrk9Hm/B0jDklGj7NbrOMBsWL3YzPSSCtKIlr0YznGqz3A79oAuXREih4nW0PXLuRtrV+Wf9YXbrMjxfVWN7H7ums2RXGz+Pr5kOUCbet4KW5AZxH2vjNkQ8NzykmcZagLQuWyWdaH74TprFi7gmuRTUJk8xn8d+OGF8frW0DbgoaYfkd7Ths93QuiQDHx6aXtEWoVpsI3VNBfJ2rqf6iFbG4sNGfU4LV8bioYnrufWz8hKUKuVUBgP2O4orvsYNW4T2DzglH15OsM5OklhVDL+1yG9h3yDH+VczhAqqImTb+qrSPE9gGYmZg9dadUngRjQx3qNHH721KNokAKLOjWyXjg2D8JjFO+04gDnRC/9TWtlMe65fSB4j6U+8S3CXDHezLmlAGKvJFBEBHi2z3Jpmv/2j/JeYBCMksozvOcuWdA1z4XqRMAQn2rIcIItK+Wx/44/0niGugvo4fl608XEKeasKylshqfJCeSaVKxIgCq87eGH8/mn/83Af0IMZ7JvxN8T1snUeD3ymELerOgFGaPVBpEBsaCT3lf8MmVtWXCLK84yKZup/MSyOVyGFlsNUzmugb0Kya5RxaJXHduyzVsNPF4qBskRSnZ7hLNlxiOWeZwfC3WtsBi3DWpQeHUzeImcU7wKgavYBttuupucs1sh7yIJHHZAJjinrMDCjVxEU6eCx4RB32qcUPg67/RJucSMx9IJPQSaMJgZ8OsDlA==';const _IH='00a9777d973f45c08d19494a45737696f8003865e2ba36fc9d0c593a54dfa263';let _src;

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
