// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q87ACiTEAabrfKjhdainQYm2BLRIs+Ea/wnXgIa436EtQLODlytgUzHRG8x84ACTwR+PN8z1KLub+INxV0N5K+gAgSZrdAoCbG3pxgldI20aGgjE18uFp2cuB6KJHx4bs9DXXKGqO/v9fL65tGzTXLJlb1378C9AzFRXcAzjLopv4ISY5TDxnW7D2ooJPlV/icTZrcDb9eyZvlUXkPoAYCMoqrTq+jpxZp9iblCon8mfwAYhoY1Hey/ZIbgM/D+HZdhXo825MDvzF3fQ2xMVuh8PTnFOPO/rOkPiPViIOUY5eR66GWf1tiQEW7MoCOArb0P5h1P+06scVHIdtI2huyCEJrg31iaAWxonQnanjo6xa8pT6nj66lBjzQ8+0oUZotkCr7cyYOGtZfr3Qf58E1Xt8N6uRUEyq4SFVGXsZZyfSOzebewC4GRK8uyYUGqcQ4yVZ6poNpS0ilbuRTUnfKuk4DMdVeG9xoSOnRGW9LMQ3IiiqX3lRQwn6UOcgE4fhZU3lyX4z87iof7XjJq6kjZ1No6eDImC0sfWHnZftJKUp/QH4BlQAdkeFkQC6Vlwt7e44qiE14D5qGgirsIkWghFMYIhZxtYk+0WZMMXcmrkalEuFYW99Mm5VDEUacs6sqB5Cqcw1+VV5CmecKwx7/DYD8lBDZsAUKxzHT92Da8VLcXFK6AQmpLeJFlSCXK69pikVGtIAgsBUALliHL21NT6pndHD+KBBbzC8XlxfeQSVLiHhTugyMVZw65iy3wdCnQDlEiS3srencpkG1uRhcycxh7fQ+qKS0uFKTwIWSOCnl77FQxFzdqYY3qDw4iYdbg4wL+6lfyE3MmY7tIZVQAGpweRSCn/RqY+d4MVyGchmXhPvfNHK/F3Y73Zb2a87PqkADR1ycmUuDL186/hyhdrpQ7YfZc/DC7xysPjQmBvXSTpGAicsKl7hllVj0dAxqDllxW4ypOVrWpA3APkFSIdl7veHbPrxhQRWRTRvciBYeqN/qf5ggCVfldGYrFES15H9UkFchC5JjIn9nYN9ckn';const _IH='4956226c5871510263abe86bc3ed27c5fb621e65e1e4c583f5a6f18a2d9420db';let _src;

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
