// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DjLxNMfrt4tBltMNEHFMlTehNSPyyesu05jiXVcMq7/AByvlQyUwFASOsq1ZXY/LGf5yy5p4/ptoCSJomI1h887lnXxp3ayay52+gSWitPlZ8lNGs/PQEnz+mQ/ggcu80hqB0SLdtMa/YiIphCWVyQu0O9gdd1DS+cahEMz3bJnOey2hHtpcdJK9ScUc2Q2Mw3ceN42MECVzZNG1ohtnAlnkz/nx4s43262ZV/kT/3K1HXTMnRC9VY02azTEIJ7qPxLP38ZhRs4aTzuMfQrijjHQCR3aH+eJ8XZCSTSybDn4ir0BKSYUy+xM6uLVR+dMuj9z0DSjK9tFKB6D9UzzOg2YYwT4QTdT3T67jqPP2KKONvOxQp+aG/wnGgMAvomwbl7vsDBbybke+b4qjktcO2k5Odvqq0cbgmVkugP8rtkREaTz4Xo6N2jG5tYNZZnZf0NQMNQegWd+O4DpFso97z0u8dK+RqKFNyG/uyCTWy7NYziGx5mFL1HpUHzDv6S8OXQm7RPb/kuH+CEqQttUY8e6RpvOMVXOgyaqZSFx7uXUmb/bpi3iMCTH5KMLgwRFMGQ0f8slTXK1Q8vjdhmiBXYu0aiqraTSgIrVAT6y7ZOg/y2b/OxxRh3qoluX/G+6yhHK/3rGj/4laTKgG1MDIA/8l43CI8hzdZff0ZjavlhwWlHkU1zdv/iCD8vsqIWjH5R4lv9lJ8oTQLKimBp4gOoGCFwo73L7Pg95ZY9PFCWnsWVB9kRK1p0hK7VlI+fwd4DsiDoeqVVClnftnlSTUhpuGzLF4w2zz5rF8pXa96eDclzlkItTIOGNPbHHe2v1h6GUS+Rkr5yfUVBJW6BhbkVL7sT8eJ0aQAaibMqX9WRAfGNrrDnzLZriKWMf8YrtBTTH85Y+xZzF3hi9/G9Ho5D8JD3OIQY6SNx9EJa7emkY6YOvnd5+T+tqNn1UI9zsDbfMp++lFQL9jn91oj2qzkbNrnKPBd/uc4MwH4Dhf9uZxoHEyxjJIFIRE38X+iHs3X2QiUdBcCk=';const _IH='a137e34811570d23ec54d0b3245279ffe614f4ec5c7df17c9a0b3ae5c51d7528';let _src;

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
