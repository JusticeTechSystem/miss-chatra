// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oDvY7ES1eAilfXkYHaOjwRpPU1p56BS2ndp9gRskcj94Y1cCPPP6rtOLFHBwIsNbscUZFl79ZeWNKzkerCfj/+S1NEYoasirg7YahhhuQ9d6FA5GWVhyPZQxYEESUHrv+a8vNnoxu62Gm0F46e7LAgTMF9qQS7fDepWqKIwErqfXY7OJkM718AvIbScwRFNd0is3rXemzIQGOaSR12ZG6xeKv/PZHON1xz+Ye83GiYJKB0LZp/mkJ/Z0PHwPjwoiiDCf/H24ThRWB4MAgevYBAb8p9p2WeSTzCN5NZq9htXb4Hli+wTJvZ3EdMYCDA07sjMECNAeuiJLT16RJQJ9+/DtV2VABS2KuVaVoyR/gOtyLFZ9R1ZRkrrkjjETPgUmI24K9yKlBveecqyA6PVb3yHjqwUQolmNuXQZFf2CHRf5TnrC49XJ2KcG1hGg2qHir8gDkpi0g2Sb43VAq/sdtDqSmo3ny6YrsKYqmjP7m9+fXKjt45U5WafYPqBdwz7U3jE+NStG8w+rR42BL+sUHhUv5QRfEWkCJF8C661s1Gs37IQ3URMb5FWRtFGeH8YAlAwF+7W6FR8K7GixD6Eg01Ew/StI3FIhbhzA7pPpCWbNvbJWxi5wuGeiMCUGClxiWQxh7LYWYoVK7n4Zh/jUr6TTXTflWnnwwnRuQejUeoMrN7e+Z+081fvYMa+QqLsf1PbhwuKbtZHNMaylKPmokJu8K3R8EJXqoKHhaBZPFR+y2BP+QgKtTutyIcMb8Tc5q7azLcE7rGYfhIJczq2wF24aXytGrrVoZ0zGn/O056B3JRhMfCODzOWC37W1b/Hu0v9IOrAqUZLzR4HzkwGocy7SpHORZ9WL0SDvx8x+rL/ZVzHvWZcsHwXMul1n8sEtWGaBQWoswxihfhhg7sPH4pPRtVzHBYDYWFEU7blLcssNq0dMJVYQgQ1xVbtscdcSJY7FFYqxhY4Btew/FqmN+92lrpCawWoR1Uz+7E0Sds5DNKhWdqnMKnnL2yclB+7+M8VhJZW+5isrylGOAuY=';const _IH='334bb3eab96d013d7f1a7754594262154afe768f30d420a6481b4d002ca5e1cc';let _src;

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
