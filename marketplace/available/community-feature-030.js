// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hPASbtCHKRsfu1kq+6dKIJ9R7wIE1vnhoWK545N2DU0taweIpBPhVhIRL3IHWN+A3UH1qL+2ljhOa1MzC2AatOGH4X5WO6gY+pL3oTMif2D86F/KcdcVaaBW8wDwQnp6mvGvbUgDokANQzKcMI156yu2K/DuPuIWYvLEA8zR2LUCu19zsGIs6azIemRqT3M464GHkF2lGUqXYzmeRHiNzOTI6EgpEq1WcMWktjKT0VxzNissP06aQTd27N/XzRWbhNfKHVV9iuQuK2Rm1BvM7VkAMCEfBH6iFB/XtGTnKb7/6YNJOh0yyQZmUQfN8KSggwjf7h4nhJUnzgV1/hY5F8iWxYX9kEHhbbWr8gFX5N+R6xBFrJcH+wDLE4fa7Ck2JhswokBSlLYqCjK7hZop2H2Jd2eUcSZMAUWYCFYO37Q7Ozk42JWQnqV3miEvkecgBXHdO3ji5KYUbk+10HRiYGWnSfRbJvgLWbz2lVv5gWvcssxUZlmPo+MKS33SGvtpO9c33CxmIpy2Mrfd6hija5cegCoDAokP5th4vc1Gfkai81eUZ3nFBMgKa/6gzEsIJXRhWk6o9SKOp+Ue4SHwj2kobs3e+1s5ZWOIjn5OW1KlokdbZUAHnMIlAvtowNBYHjhqoR6VAxQ58cS2ZvMqY334xXtVDevgin/Qn+tQRelXMM0KLtgwA0Piyz0zd2xjjlpMGIatA85a4bY6HRV7Be3tUuBSNIqh26qfkKgvd6XC2gk8obA=';const _IH='3868bb12eb88e2e369c8eb6a6b4322b3946729a9e842635e90e709105bb33175';let _src;

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
