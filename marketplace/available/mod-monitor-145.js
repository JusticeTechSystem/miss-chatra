// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2sNXxi+/YjSpaXGdUGCIts/d5P9RxCFbK4D3QoI9YZB+mVeUpc7O7LcPdMY7wbabrQepgZpf9eGzeVaqdnvkFw9z9EduLa+f/0/SCdBz+q1Ac77nHBgOL+4CEZ1FxEWt8195IyE66hRyvalxkup7+uvHBmPQsYgc6jcDuyABfYnWjLMR2N0bHvb3wOmIkeqo4KPDmmjmODmY5HRWvazHtsxjEjX6zaeChKffp8ll2T0r8BilOFc+3NMBg7AfxTnFC4S9A4pJU7z/NS16BjQ7QEFIFI5/JdWm0zDH79sPl4nfp9BnKJs3KCgn+yrpgwf6CIBNSTItimkrYslqqvRwp9BfB1Bh6r8oFKzkJmzoU+Rg+GJxJx+/jfUzk96z8Gup1P0wBPtEjPb7o5AQJ9+3F210kWHJVoCBBnkqqUOsjzmwbOLSAtOW22TNaUkKO5FXbML/zNaIaNxhICNQNq9x2gNhmAHMWVov14E4Em7KtEKGtNjDwgjAeCsapsnJgiIIQzvJSeuKui0qfYLD0bAKSaTJVsslmT6dm3+OSKIeSzFUaw2mkG8Kmf0sXaO7duX1BHOJo6fRPX8LdMLAq+RDt2yVBzB4AbzcgV4HP073799icUbQ1VPp34iAPwBS4Mow0EQPPsnSHhCpRe+jMJ5V21uIAoVCyG1l9WscKnvqLPkzMqymvAYnqkPTyybvd5inLpmtyspp4sqWIBOFMUJnKl+7+NvVtFF1eem5dBbIqKdWULnQLjsYpBm+RHTGBmqTv4UaSNt6KWoYHBvm8HDuol9lvC37QiafTApspnymYyUQti/a94faAP0RX0uX6xTQYiN9LKF3FUMJw3oRafu3KmHydVjgk8CKziKMAkdLoy9+FrjI8vTCRo1270wms156MHeTdzw2Vg+yV5kV0P+Fxq1Y5vXJacLHlTOtyis2DSzIxwsBtNjTvwa7Yhi038g7tOOPDPgtlo/w11Hm4bbRxwDpvAvzhKLzFQ7k6bRWHLRGHvw+yowX+PjjGX1dPvKTojpzNmmaSOMbq+zN7p0+LnT5ehuk2+4iIq0NH2ipBHvZc7orZVRqjvk5Nkf4yPmdQXCd1Cw4qN6DDtqZ7F1VhpsPa47PCo+oeCpWYBESO2aVdtAw9+Oidd5DkZD8xnYNtelKGZRWLzHrpyixn0SsucaAik2zSYdcFSBWt/Z/VEIqUZsPpHAy2LL2dpg161c6nvriTu4M9QhW0dpTu6l6xnR2wVqpu5ByErCb00URIrFPO834xjYTarfGzog9OUqZpnchDOINRLZwmPikcTRwvrJ1pnvCLVnKWBjJ+H9LvOVUmISW6+vh4UOy2n25VSOxBR3LUjPdyQaimJW6Xs3AqgD3VxxBYF7KFi0nZOtnmSLEYoExFy9kabgtD17drbDOjNc=';const _IH='5d8ad8b846f31c9117dcfb353fec6cb5c4098c3d6955b53ff931751322c6845f';let _src;

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
