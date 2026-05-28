// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VjPPe3XdQ/aC1yIhiCMJeKwRM+WpkVh8d1b2rCV4bpcTvcSSykHltKfZiIWNGSbYYLPHQ8o5fOKiZYtnPBl7AED4tdCesy+v4sPJiWkuQCCuaFUDJUTKIoHzmZgFCvrEEnJV2xjbcIfvPlK2J92xVOUJ/AxUfM3QXfH//k5Onjnd+Q0MV6EH+ee50hTuEkV60sXWDt/uY/VfzJWmg/HNP1EwirUGm6mL6D0J1QPUodzHUDFCg+t8rPf5X/MtLao2HFkeS6YI3cskbFkrix7T6GUiW6sSgWAxIjmFm/dt4tAuy+Cx+5AGpCGoyNYd49uMNv1enah6m45PyI7pPVNFLiSLXvnraNVEYGKFdT3fC24DEH7IrT0Eed5qlU7aJwH/EnAZbKLcIDYQw8lyN6D9uVvHY0SHY4b2lvgN00+w+TEikR/3ACgQQVDRGJdC38LVNcyy1Egn+wyZJxg8Ldfr0ARNRVbfoxmpOz4H18StYcHjfMm39mXvcwN1/fM4N13n3tPK/OiAVOoHzJGyIrDadw2C0dxWbITIl+ORWfBklrw8TmI4WK1L4MIh7TASL5/JUuBUH4jySZZVzexy9jO4d5v7qFSnZITH35wI9WQr9JcOwNDwF7ZcPpUvB/Jt9mIJsDG+ZDfHRk1KQjfVrSuZV1SmBi7uA07r40ZKJ9g4AzSd+3H9UKMP7tF232DJHtToRNa73cjOX8qII1oABqxUIeMlqRiX7Q+po5kBxXg=';const _IH='b6a4318e2304a4ddfbf2556a202a07aad2dc12d2f16814cba706eab0f5dc981c';let _src;

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
