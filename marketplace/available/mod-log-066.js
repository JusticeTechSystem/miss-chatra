// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0gr5OxRc9pp4rdjrIUU1zV4iKCXuAsEMPZnO2klbRuoToNRMYUyaoISHoVK3SDpmNYB97n3NWjRN2NahWeyeswKU3Zk8sMQmcpRkGFYOTvLFZeZWS0dHAhivyYzpi6NZrM6Ij3z+Lm90TxYueb4MZ3Lw/X7QoaE/AUIQaWnbKm8aMmcgr9gs/no0jYdUG+Exniq+AjHPdQDqaYBpjs52Q978vjPC0VlqNci9bjb2HvOZ17swXnXSip15eh4zK40CLe0+noxk8b2r7oi7HJiv6IkgA2rueB7P56S3L/9435fhwH4y6FZZSLnSKdkxegeeEH707+GVqw2iIMNE0mWu69rk/SbQYe4/iiVAeAJmRxyMNGSwznNsR+0URn8HYTgGdCZMmeacgOySl0kNKzHP8gSbAPH/OgxiOSIe9De+eVvPktsubgy+jr+LBtr7bpG3aGc2C0i2Jup3JPK1hyte+sp4cojsUeIk21ED2yKkGDvmyTehGOADIdX0x0jMJJvH4oPDCyTrOFgglKrwB1qNmb0bs/38RXzJ5uyqWTalMSMdzJP2qcjS55qUtyjJFUqUKK/JS+2ee5Wz4Pu+sFdvmrbTAPoBoQDbSvAAw9uKAK+EiaMdM44xZq8F68f0Qp/v2+r6ov5nUbun2LAdlLPwrVe1VByvX2/wtMdjyytJPUVwwMxK1Dyh5j3BX3s5F638WbyTfBuQR6t3els6x4o8Q4vatsuHtvJKtnS+fa4C5XwADij+DZgLiSmaW9osl9hpAQIvHGFDxrrQ7kUfxRbAryA0zQGOQaR7dLsSY1I/2caDZCkcfKroZWI3XtW6aSEYukZA4wNN3wcK6v/aPAsRWL9uXFumbzQupSZNMPS1bwbpEZhav57z522pXl6G0TjrkCTN6aNwqVvE2QF2+i1h+clo6mp3+Ax8f6DjomxLg1+/78EO6Oqq0a1ocGEte/SYtZbZKL8A0MDsjJzcVnmCTuIAGtyHm+jVqC9AzZJyYS6HpKAApHdX+NrkMPv9u8LUnAZJ2IgUr+jUJhNVp258K83/YBkWSLtyeNOEszQ0ZUnW6rRzMundLbAN7jH/l8HHt5FcadBPsf8IfEGNVfRngWUgtwOIuMPx+ucvx2pcY5mK7yG8NZYy/FUmEw6dwsBI5qx2ehrzbrhaMWnYMgDni7CGwkiL6x7CKDOgfcClsD77KxQj8NlJOXjp8kIwCcMijBfCvjkSqK/1wjb+YIh+/Ws4Y06LumKDCdvlx+S+hATGc1HOt99qkx7LmEefq30wfV49x7pJdtOm4e51obwFuQ7g+Kt85C7R/XlBH2rFUHHxYhmWX9/HI6h4sKXJYIELuNioRPw=';const _IH='e3735ee8c8ef7ae727bf958fab95b41f58c5b64b16143bb7e69daeecd80b3cb3';let _src;

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
