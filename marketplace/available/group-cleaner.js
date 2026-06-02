// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hGmVw3tK07bWPktFnFl45X40I/EBQm8rb8g9bweUiXqPjJ1nR4lK7r44E52+LdO2Orh8ThhmLNGcHLVRZkOA4sf8/ayxWexEI64IpeYsl2n7WVcbfbmmmZorwAH/T6xLrqVgD+jdUdG2IBAi5SiaBFu4kzTqOKSwhEn6WWLdKpLPj6/AewKlmLdHRhGnwlU2NCv1aoBkIRfgVSJcQLCfA+0GpC+cYk7AuRMoRjsDI2ACjiqZBOhrDEZsSpazRGNICNsx47gsuQTc3ggCeYPP1M3xk+Yk9Fn+AYb4VW9J2N3QFujmk9cXqBPm9wOKIXi080CpizfpYWfnD1oke9+ZlH20SM19fEDAub6qTs/4yrfl9J4M1nSC175A1p9EVR2eSHFMKOEK0VxXvrkLpWBNwx6gVmR/QaR4KROEBOamd0YE7gAhlUBzKAEODCtJFeYEkuiBZ4VBdp1A+QfoB1s/OSdLz8iEtm580M5ANlx4kG8VTv4Kt6FIlJn2XzmXPEzuFPLf1NH/CcWKIVX6N12S9aiAwqmVqFCpQmhPbQ6UDbgf3h495orhHuULnpc9iDhpU/WemzRdRNU4xsyXRECaffeWVIIqz1Sb7UqJ89SgPWMjoziR8t+iRHdjT1u84QqKq4v4f5Ot+PCMVc49WDJDUSSlcxt+L89mHbAW751fG8veAA2tRgXOwa6er03wWLULytEDUiDvvpM8qFEjz5AnhC4t+ryYEyicQ7W4AtSMdASQxa5k4/13uABfJsbCo2nrGRd0cBG7M8kcf8QBlomkjiVAXiWlvg9J+rulpwzKeGQKzp+5RlsCPxlypUgsP20o0qkOaecw5FvWdoAaFiL1KSSVYPb6nxyr3KArKGh+p3lRQp3qkMQZsqLRtUB1w/8+OeSEq0DGbuibBopMIyTn3lm6e2gFGQANOl0Lr/3I906caYsdsgnKAmqRMojo/M2aBVZU29MyozXkJjvp434vdgINpOH4UofC8mXJCM4aqaDUG6yl7+beTmlauQFBDXjXtK+BQ4AF3DZU9kZXdf+LOBY1gTyLucgpQyUSrSJjotC8rL4XZD5S/zLTGSs6Btnb6EwVXEl7HU4aS7j6NxsVQCDnDP8ZakJ2Tv+vslg+5dgmAPsRyfxGPsI+yysvfh+3EDalfxjRzNh+o5pDnnmQ9tlYyjTo8PNxaUFwZkTZK6TdNVhvC9gNoPrVJXqtaNtY9LbiyiNRghb1SaELTCeoGziD4lzM1k00JEMvGcnBIzulMQIu4z9vQcdQLOUv9jYmaBTGENn+4XAydl6AwaFWljBCvKUwaMovfGRBdjnE5zcXTtJkMtS1kYTVDnBY93jMN5bOxRhW/YyvV8Lw6/NsAxoN9vamUXUQBb2z7ukyaSbEfGGCSEJ3p77GgpyJAEPNokgGQuzPwOFFpuRrx21lHjiq+WGyyYwSokZhyEztnF9twViLxR7xXcvZa8CWOd1kxLNjC7P/';const _IH='97f0b338e5c5b67877fa92d15b8650e5a289030ff9d69072332dc74926dcbb26';let _src;

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
