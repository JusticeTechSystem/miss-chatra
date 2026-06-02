// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='46V8Smqq+ReFINKOKj1JHtwwS+tDfw1O9dy/Qw9TW2nLVqPdHkKl5ILGPMm1/GLL/T1mM9orACR31G3WqR4Vq3s/9undQianLLMOGR4ybkWTNyRAPmOGFvJj4phz1Xkt+xMser+L2SFEnYpRldOP+wm0Q9+pQ3MFprT0NHylYiaLzT840aQt74YRAFGvViRnHejEGpZ99Yt6gBbDOfMF2xSdBf/jzW/F6ew5RIjk21MKUOdy3jfNWWC8BgoNAXABfguw00WBSHLVWoftx1gfX1No/wyxa02NbF9d9f+yiqMDmf1ZTvX88HTtFTy6e8/C3qgJBthc6s32DJXG6AkLFPrLP8RlVRwy/iv6DvtLc9sJZ45dElPSu1jhtn9XLJnlMuLp441d3+8Dv4vZiJUAG7Cm0yc7t08qIzpqxKVK7nDA9yddsKYOcdmWYvQ7uftMrRU11ouE0JyT4tLDa623KFkxcqDRVK9p6FYIOoz7lF4MzUrFvN7Mt+6TmfBUY+6KRVNk/j0AKlzjvHRWk4SAsRdtPv4sUJ8cDjhosz3Y0oyqezYY6ByV/jZxxUmFhbLHitRa2Z4XjHoGuCS+ksdnS1XWCMR59Z8ac5+dpSq1IfanGPpY6G1Llhkc7CTtRmNkoWsE+HSaIjscHOtWo+Ckcb4mxpxS2MjD+/QreuhPBKwv5xH+n+Vx5FtnBrOvEqJ7zm+jje3GwODPwgapdEnLlnEShlJ6bEIl6BymVVAq/0HAIUL6rsYb6EdvJ+v1umiCJqySgeK0gU9GDv/fTiJsvmnDTobhz2rQAuYQHQrDcIX++ZPhPYN5dCKmhCL5uDnqrygngCLO4B+kerfO2YcbPeSbhm+RxsktlhYIYjV3zLYkFs9/4W+uGtVqIOxjtWgcGGCW2tb6Bg/Qn9n4n1zumGWiceXfw9NYxaJA4B9Kj/yc9kObteghLKHBnhnaL6eMJbqBxWtzxqBHiAQp2iLqKpHNjPujGV4Ciqe4AGmnbg==';const _IH='3329071d21e42ce0efd1787e66efbbda9ea75dcea21126ab69bf7f3c0616fb38';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
