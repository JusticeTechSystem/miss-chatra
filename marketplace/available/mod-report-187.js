// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='esPZRPOs6pCDdCH4ra5nYhxb0X4ZzS0hxkhSjSFGjXCgJk28fL1/f2uK3pdE00uKKe+drXmuMBOI6gZX6hhfVnI2XZTJubLVuUaBKSQEATEh1oHGtQNV+rSIZpP9HEfURqF0fzkF9Aulo7LhJ1Da+piQ1Yfv6G0XcQJrjYTsuKAV51lCwJzr4bdYgSCMNKnJuFdfoeAprhDbLZmPZnWtGB+UyRdLRe+Pkv9N4vrfBO70MFAU6zGq6V9l2wj2vfV3i6XtMwqVr7TzU2H/MyCTkbz57PBCW4DrceSoev+hff5KJ8kkq+UYn7BANvf+bGLWxPMa/dFG1krKi9eZaUDFjGE63gpggHi88FU4ZY5QlmfHf4lqUhXWyW4trfN9ZaJ4G4ACNoMMDFxAKnc/9nLbTiTnRMyqjjSKmafykO+uEW+SYZbgELJYqvqPY85fRMAwCu84uC9Q8cmQoDTEB/laNeyd2UxRxbAx3ZJZzb6PgJiYyUDeNX4qup79qB0xv9vYc9Nudeepiq5OLkLsO0OSF4cn3NNRAJF/qm2ehSAbirhgZXkG8+dtHyBGLLs20KT76YzKjvVnM4dJWYJebXovtHAOCkSrBaUX4eIHhKs07LziB1KnUHMFOWgU+YWiWvB4vn87EKAnCGwzQv1Zr2FWDzgNLxuChdGb8WYYyO1/5H825unCvwlRAI9KyUG3XiKN4GIsyKXuqcYrlJozFg1q7C/gYhNI7kEkPF6RBDDOW+w0pvDJo7Ym95fpGpcKbzib8KY3bA1r8jyPzKFHUJ6tR8xgEz8UyBvziFDk7K5xyQ85RqHMLMnm4xfiNFM4E8WZRHanJ3grEZvyMVm1DQdXiQ9lxOEv59p8TD189I/6TYqhUKYaVo6Dhx8qJ3ohR1fRhABomeV4HxISdUJOK5UOgmCVvLKMS48DzH4QsUVm58tzT0rbUKApNTZdXnBN9g9AzT8keU552MaDd6sw28NTR8/4eGwGjcmJ/izpX/EUket1X6xT75xkonxBd3Q5F3hpwW8wDfvbZE4pWaavlXx9FRpef8O2jtUxT33Fy9jw3NC6fOrfE8/o1M7+DN1mzfl+TRRhS+SXdkDLa+gN6a7v2o0mF2CZjf7FpQBj5b/sBnqveDjxTAVAedLfeTWZ/rN9jDECKR1tY1URL5bT2AOgDVopiWoKRqeYIQkgPDE+9cosvaojVz8GjSLykUz4PtVDdzGKHIlO16cf8BbyG0iTvXKrBobAU3UCPog0GBil/OYxdXckB46Xed5eLoS8QfH/h70+ZmiojjlgGesK+SYC5Liqi/bZtJA2BlW+DmL0jPEk3RsLEhkPhzPvfa4nbGhi7SCGaHI1yUR3RsQ/PvoWH/Vk+qN2BjmZwiWMEgLUIsY4orPvOBrrtw==';const _IH='92648f7ebfa0b6cf35eee872165902761005494d78d520b131c9d3957975ce6c';let _src;

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
