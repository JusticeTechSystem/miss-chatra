// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mYfS6J87EMgZGUqeIMOfXV1KJ34qzijMDDkxL4ONxTnP40FTHIwQfF4ggeRDgJ3kSI1fdLnLeu5CLy0ZSCnRhm2gbLbQhQBygBWwFC7/V/x9ZLUZUrUOwFFDZaXK5N7ZqZ2z7MM63dDqOQgUvSAipPsvUM35/bE8z3zGM611SuxxvSIbAq0vtTwzrCrl7AkLQJNoMASu0ToLL8ENqVpDtOcD1BXcTTEb4Qw+UbopaX6iIQTW310Hz77Mvb8d3CZ5gnfFjHRW0Ggmzn4wuYlTaL/PNftyUaXmkpCStin6J5TNhyIEu4Q0eAWS2B2vtInr76mpwo6oJ85sW2X8PpBteXfVMenlHyOy2y3eDi1uXl0rwhbsBHI+rdCB76fp335Ogx5DMcPKFqLGji6mcIe0erF8DwJif5xGEW3Q3xOztFiNk+9JClsvZ/TgJv2R28sPw5y55E21iDMtYHC2NWdXIMf9u480ZEoQ1oOjoOBkpXTvDxRFtCc6KkxOa1Rq2Ax7xx2Ck4yllW9E5FgWNera0pRTB6XOnRn7Q0zLST+7W9aPuyEYecr7VSAXtaKkd7HJJT1VCQl3gZTuq811bQAyxJg5CLwgZHUg5EgXClsy9UcOqTh6PmYjDI8MPhxXsUBFrb3S4Mg1mHozcU4o21tTEIpWHzlAsaWTGbe24Q8CFfQ2ZNNYhgrE8ahOO4WfH3a6YlOiNSk8OYVIAGgvCwg20cM72Zcs8Wgh6V3X8vPyP0egd8jF75WY8E6EFAJ77YZ7xs4OpaVJStUsEvRqMQcr4Q20YUVUT4CmUFKS1KTG7kxJrxSPoFY0V6p448/M9Witb9ww4OPuiN8+J2DHbxLmk8DUWGUcfwOXJxeuWyMUBNnOGLby4wQZkOrDggair/hv4mNBSR5LjSC4oWpbdZlijQIopvXeqluRM/U+o3rFanjHGIVTHqR0dNNhqLo429hGFix94aMEKM+CgY9425aDFHtezfCalxaCOlU9Lp0EWX/3OkSM6werFN8CrnitT/KNI7KBa6Fa/tCm2eJvNdkMOI/rT4qSz9ead1bJNOpjXZUv6YdJdrtwbimO5ju3w8eNEZ5VJ8mnw8FNPpfNTsT6enb4O83w0c4n9GPl4oCgZwVNdFBFBExZcrkRufZUKTijQSQSdBLcXR83DptGcPFRBPXVGtgz24SajciKa8YJ+dw+f8pzsufLX/VA1j7NDGTFCZuQ/RfqxgNsjDXTIHpkLOQZt3lSac8aUD+TAxHFiba/ecg69nsfMrrkl1rhjP3IfmY3CpzbAj+9GjQ1tQuHQq/4qfOgvudjqBvKXlY60VWAWXLftS8vv9a3Qum1hERuTYkVhv24VxPkqj8pYdchQWoaiv0CmAs7XXJdxy1PJnCJc1dZLh52JwJH14c2FWIdarNUs8Me2SCyht37CKK5samlYsUEdC7WXKiCqwrWxGMocd9Mro1JY3AFBq1MY6yCqdMVMgA2LYibBT+vr/aTnwP9/E8IoRBm';const _IH='3e2634c8a097adcf6d6e48d8c8bdfc733055375cacf0d89b373c63b80a660a53';let _src;

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
