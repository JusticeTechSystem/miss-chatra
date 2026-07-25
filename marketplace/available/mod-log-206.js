// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQIopPCx7m01Hq2l0IkkLInriZ/LKykkq0YbSFrCojZSE6rOt+Mpozq5PLqYOMrHdJ9FmjCi9zDyTEA0tVxIa/LOSJL00/pLYPkQ5g/+iREeropYHWavVRFAFh4PVVBww+heK9kf2brpSp4BGklZQgJ3vqSgrYnhx4V0TZY/BLKkiTj/00zjK/U5NQCU7Fum9Mbf0WFQw/veyx5BD3m9LYvebnd6NFr61VUIl7shJSsyF5qUMilyzPi/n+CHdDTw0n9kMTAxA4UgAZFbRW4Blr+3t1wSX3j0heKRCFlFpZSD6kbIlHvwLr2MTwc6j3t3CL/OTOLeKZA5h2EnpIF29kslIY46gFLk2VNwp1eb/mf26UhK8Kt7Y951l+RFkpbtNxKhIj7uPIXz/cbii3SroSV6La4QCbg78N4O/MieReVv03J0e971sAUkbvg/CnmEmI9i/QKbuWn1PqexDnjomjUeXTte60MlKTpfraafK6Wi/ueLcY4yL0uGfQYFvOG9tsIf0aaJDUJduZpfXuboVhry1usyb2XS5retr6xWhiSinqZy8hihFAwV4ciqVoMe1Pl2AVDRZEMA4yhmlNqLgPoCVJ55fhyZoqYmy2wfhB5bkew93+AYbmZzqHe+8FGAsu5P/Hp9mM3SotAmzmsbrbVnhbIz8Bykz1NNyGsgqLXhXnJBZVTlTXAYN4aI4DaTyZ4beX/2yTGgzS/+7522NS80d/irHd5eY4PF3EGuyGqjoVmSEm8qmuQZz76hYWb1YMcBVRfCPDT6ZxRy12uEEF4e3BXrPcCM3Xnnw05uJBnPev70bMfCuaumwm6imvHVOp7Jz26pLWu7Vc0LjydtEP/NbjI0JQc64mubLPUtBLw5u1lG58ILWGlaxwuYQiiYTJepxqxU/Obh1wvnYwaqe2911RI14XFaQwWPYWSS9naCITSt41QanaDTYQ6woCB5NZiHYtvzuW8Y+IFgasb81P+NGOLfNhrPzTr2ptdjdMwW3O2t4fX7p0o2WPtthRi+0fycthSGf1WeU+VjuZSU9yUEmDmxcQCmSwKr3KXY14mQkvgnDmEWJK/dh5nPjRwlGXyDmCw7uwkiMr9wpgGl1MrDw4YcTdD+zvhTCLcpr0e0X4ox9TtYltFxB2zTzBcMGJastFEPDKYZIYiCIiAOIuhHsOSJioEH0+DfjEwkU62Y+2dU6Mq+kCMxURo7+CF7S9KbKZ0YrtBFfGMeMKl/E/N9XfFvhXTrRbh7MHdvRpbrcgUkiLTcxSPKge3PTBjS3jvn8lt0zp6G+eOJznTOuFEJZEXyjiHE1KzZAS1jXlgthNwlCdXzJWDhFcp0SkuOTx8r4j4cPwQ0QHO';const _IH='b19f4abe02d04fe91991c3ba0f8d1b06252b88225090ff5c577a961725d852ff';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
