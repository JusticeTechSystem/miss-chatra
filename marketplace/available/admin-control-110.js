// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTvNDeFgRGn1HsEVBTiBhxRRidXRfrzcXi9aphN9HbX+Btna0rX39Gv/0C0CmDFlicYp7SSmq5o5Yr4LuoyVXIvutpt4FmWdZnQ64+JXvBZ+jU/tgR6qSoTqkdrUImw0cTiv+H7vRREQ44Npu1zfDRf36uwM61gb64hgeQ08SEpemxJj6tgvTRYVl6r4JfdrT8px3KXB07A4aEyL4xG5LAG5eFfitFonSY9QKAvjnoDQqbCX8mRmgQBxa1h74AnYg1WlKnvBarPcqfkv0QWY+u4JRxizVM9QVXvcLKnRA1DHgUWD2vQva/sJlBpjPHlF0cIzExqOVqVmyRTKUM9OBmYP/qJ/fBuLXdkp91Am9fkfNPjOkqzX4OBmD+t1V32yLtCIU5GS0A1/3IPKaDR14Ux3q72ZEYlXg0mIJn3ImscpKdOOKxZronM1nk1wO3GAQkQs0NisOVDmWv7Fk5yioS0Y8OFXNzW71fUglIPiQISJLRY//NxC/lRQOk+bqy764RV1KQuNm6BpeC++DG4dnAYiXJlcsQdWQpO0lt2YkeEnO80ABCnavGB2bh0iNmSwLZUrxqWbeOPYloT0uof3IJ6vTIFkPrDxvFp6S1C6Edh/rh5lzrTRi5nu2RANqG5ry6OwdLBDKBRA2OJa6JyZQC505HZ94dJleJP45MS6XcXbgZ1jMost6QXoo+qROo0FVBb92GHlMs+8yO35vZR+wKBog7z3THcM5HNuOo19dXBtlelvlWtPpsGc99dO4RCPC+M4W1PuW6ZPi/4CiGpVVQpeW5H5YTppvuHxIdgHQqS7MKsxTd9MV+br/0nCd9/erG1LcE2+jBwiouhO0V4Ze3tnnCuCEcmrD8fSxrt2kt+CfIxqutKJVbM0QCA9fwaKAxlkyNsmulG7cSnWUeXDN6uS7hDBVbUxNNhMhcknkPCdOcAvTlx64JsgYXXSWYviadSCYOrf0WUw/j0HrJQOJx0lpvyKfrKdcEH3hhNiHBPUewvypcWD2qvarFeUWKuXZn+H5B2F2Y=';const _IH='5168414eaf1fafa87118dfc01eb3beeddf639d2ba18fbcb9df3805eaec8cdc96';let _src;

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
