// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PFb9UiUQb4D9bb7bIVBxZAOv3275JEhwag203fp6Sy4vtAI/mkaQwJC7s+uP8QcRmMklUtIGbRzrkbX0vtvBenVcCRRgsNXj9cg66eWOLuws2ky81oonNVzP2241TW6muBmP6SiLIrxEeu3vFEQIon+yUMlT8PiozeRQyQ1fohB9U5OHbt8wwtbBDiys/Tbqbb5SWMKHNB7et2dhdvHtJLEf4MWoVCV4ITHsw1b1w5EKpjwFuNWeCIdp/dTMSlsvQJeNuwuDcQgm1ieVEa2VlIeYmuegy5dF0wfYm06pJRnnwn4imHfZp/S4GyiOeyPffSrVGEN8KaS8qJeJ73D/dCyT8fH949DjOSeZ3cCID+yvHxwZaLyLGodyK2IM/OerKGcDuU5fLmCJRFFsvQk96VYGT91QFR/dcDvOOfqVB0AUgbP9/6U9CIbjV9FYKKHSIpxJLSHJWU/NU+y9KP4cNkoBkpmQVws+E6GNr9/DASTZG6dCSXRxajv35ln5gG87jfbArNSWnFj1Wuu7WOV4Nu6i6XtPAjA/E/5WC0EBIcIoAUnJXTVdZ67uxtwttnkv8sN/7clXCo8x+QWAQtc+fWT9xJtYzhgRN8OJjwQxHhqcNRBlVjOtbKpE/G1y6Ro/UmFhgfWQLKF9Zsa7ffBt16AwPA93IWsAiwQMPXtAGwi583aURv4Z5fBlCpp9ahl0lfjk1ihL/ieQjp1Uz5jxXBTv+j8ruIUkSjgPmP1LZcNJa15mBCHmLlOA4dAXhBrrn871yWghnnNIvCVaR0vcQe5ADA7zaQWcOc+0pIRDWrKqQoOD/gYI7WUwye84sCjINWNVAxrAnJYLG8IT5yuLgUBx/OiuzSUxRkELPOC5CYvfCMdlTltgYGNsC1X1n5zh0GHOAmEK0WtZ1oeIWJPX33InnG+sxCHJWWG8H1ASg7JpngaJghGZp4ZuzDPE0IscElfSUm8GcihKSonGwdmRINIwil6i0rkFx4wfYDtzib5J+fcOBV2yablHO3bYdO5mxgpNzft06PNURFI6weUGtclAHAi2gVdQTBopX85bSwdx+VOScFAaiIV7/rThtQfMT92Yw8ph76qIm1Qf28uPHNpxBOQn3Htky7czCAVTzue8yqKtVuLMH0u4gyQ1kGKA8BmMFjBA5k7CNEwUP6OZuoRsHy07vqHTCsajro0HZpvSYNziQ2Z6PPMxqTJgEURku4YSoBvVsKtS1xBLoOn+TGRC5oNy4EKvVaV8CqsmlhxKpDNMEMGnhm9vXmKDvhl3z5M31LK0WALuRgFUK6iZeSW9vXqHVOd5RXWaQaP2sN5a6YG6O2Q/vB+8+Hmh6IlI/rfZIRf3+EbzgA==';const _IH='eb126cd613bc227db436e781c95f735b9f29fa2926077c32f6abba4c1d4925d1';let _src;

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
