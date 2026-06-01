// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzftp5GJuGIJbp/xrSzRavUxp88dRwyUoHhxWJTfd9oMs4g1do3X7UvZr+wVJtn0wcYCoOjSaP08pPWzwQw6ECDD74HyG1L7q3BUezx6JVozdLaezSSqE5MTPJZkUyjtt9AUu73ZFM49EgE+m7Umn5sKiNUCbKXQcWJeZ5JTsaLUtV7XgeuS/er8e6O4iv4Oa4IetAEXQFYdPJUqs+woWFYKHNlhas9jvT70X+I3neCbqAr+83f1Zj/XwrUx83fp8G5QQ51yiRaghalDTfJgMOj227mXpWbBM1CFnHJ0E6ctfEH/GDGO8LLcQVlYyE56pBTavFHqA0WNl3dV6dg1I+CXTlGhz47xVrgGVpdmVGYEELRogvuMfKBVJ8ERKujHJ7uUmivY1r1zU4HUYa0VYaYjBpdqLhOyohQbIGDR/pqAFYVD1K+wQc+CGoo2fV++pQF2V5rJPKKRw7YSy10BCpV3INpaqunNziC4nNcTT+uZ8uj9geRgTFcKvg4IYeDD+rjf2VfWWMNt203Q/FMYjwghAoxbBenR1IbVlQhOX0CbUBV5Y0m9eX+pOAy1p1V0aFGpwMmhcB7mL+wvI1dN/z7fLfAc21pQBL5IlUfiVYq7pdMpgiS8fsP+7C0CIZ7J2+3wN4bbPvMqz2rXdMa1W6M7OpuaXcKMhRNQQCTbSCj38glBQaZEU4O8INtPfOIaWoHp9gbV6ETuxqz36B/ccqCNUnCxcXcM8/pUZLLNOIouPtgA3livN4ut9w14PDjuf7VUZYOI/odttfknigw5GB6ZQmR13o5R6cVMRcX6EgAjxyq6sxtWligqu4PBW2+adwb985tVsnuJn5wKGPligV+j6jT/XYOFpp9+aKg/ZY4shTrPXc/0nBqAQf5nh+VW9o2oHHsZEmpoSkw1o2nd4nG/o2MPorm1T/LvPxiB9vkkwC1vWJX5EtU09b3oCp5a0CDkRDKueW8Flqs69pUyxaT1ePVAAhCf636uiYoBl5Gq9RNQF0VawN+FHSnze4NzhYJXQy7SrB6oWOf/FzO1VhcsKiTClAWrme4nUSWVG7nG12kdoPhrTIVCw9dn6AcwfafqBHERU0jPYVKn7YFluyNznFLVRpe/Hd0ojFLVmf0AdWof4gxjbukfii5Vny2sHOtmxB2t7jZTb1iHGMRQY4XDTQ8gic6I7pr9PZKFZVGwAqVlV97gREvHC8jPgdmYbm+5uGvL/BpnXg==';const _IH='4e1ce0020ce50d6cd08e6216bd8fda6bffc59e1ca560514c50bd19205b2c16b4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
