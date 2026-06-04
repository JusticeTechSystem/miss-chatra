// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sPaRr5ZEOdG+0Ya9fgE+t0+YvD0JPRgeYy+Aeeiaiaqjzf/ywRXR5+bDtzO8ClOxvOLZnX5PoQUsKRHZbmoNvotPkWl7JzWREDTz3fMChTlti7UCs6rMkl25FpAnNL+RQDqlMF4pzzFthzCC8GdLH/ZW+1mGDMU/tgYs466B+Yt3027Qifa05mOW4l8fZYuCMz5izF8LqWF3bMo19GuLUk7i+LpYTbNkUEC2dKJKW2+oLJAFUCg6mQ9xnf26gJRsoiR6jA3m+9/FGXNreh17wQkD3ah/PS4h4WkmvPp4CmiCH5+iVTyaKPY+KE/qyDAGgXR/dOBHNgtHC9csTV1vG07CvXHy7IKHIbXk+n4hrSeaGpF2lb1GxjqM40GYhVhc8qHPlRCFUFiaLEPlvV1eUJyJP4ja4F1tkUjNPnn7T0x07jS2L9yo9jH7H2CaytqhSWKSLYsBGoc/Exl7LkOvn9w+p6ajf8qatSsEiY+Oz4Jt9nzaDoedTPycaWuW4r+P/bDMshNInnCrx6nFbU3xJHSrRGsSUR1SqKx9e7fOzkgk5gbzusAs5T2JGIU5/AlPzD3sx/SD8K/kM4dizXnbtE3KgWJsGXtogyfGq7OcM/WONwl7nKJZcoDACs/ZsFXFBgbLEahab601cbmRmfZY9nmEWAkjEiDmrc0Yw3ptCiSDTHBBP3NqRkDTAZRMsUmE3JL3h9BUnElIBCzHscXlgpaPiNlgehqYt9nPOjOjM3dd+CZ4LAZM1HasB8I6AOmi4uzgefsoXkwWwN/vklN8QSP5GcTJZtsDHrnHh93XGOhreiqPn26jamAJm7n7yKDZhkGAm3vNAIypAyqqPA5nGEV/3fU8NRQC7R6t/F+CRlmEtvPvg9jTcaprC6HbI3csL8SBckt8z7SfFYpN9krNoG9Agz6Qw6eBeqd+pQsYITYuaJzaSlby8Pl3GNm6fS6i0ZAGw93TjhLeS15VqraBiGkumP8RkUm+Wz+cuYpPwy0agqj7KPOT/EOxo8o8m696pQNH0xglRzcz4dPXjKJKY0YySlwlns0RniHhM1q8rhYSMz7x5JN3OhOch+OWhyQmi3a1znaQtitfW3MKkfqxCGS0cCRjBFpB9mgYh/j0g3CERTSlR7CXaqBVx1RbGkqY7J4RQSrYQJMuhW+jlJgjPaHTxux5vyC174AiL7V1q6B4hB3mIUyPibPSjwRvUy2OCHOJIXPhLTeKMjWqQufp8r8Qyzm6MLl8Dh16fVjPKJwCKQStDIi7zSIgEg/ZD+xzggnBamJqYlAEUzx1XpOYiNopuBGEe4NHMLMMyFrQwTWKveaQFCkKG/M3+vC5bZCYRFIU0WFTWTpywLQn9vAN5v79XA6jQ0nBTg==';const _IH='0ad586814547c7a7b62b35523f496017dd07d49b8032be129af671e6f8f0e569';let _src;

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
