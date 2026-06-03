// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yvfv4qaLWoicHXU4AxYPEiXNkWINS1iEr4/CGXEQjUA2Z4dY5vxI0kMjHk6erfPnnLx+vo/Ieq2VOxuTew185qTHqlDpbxtztIT3Wdyu8H4ASRjndlHeiCHERnVpeHl6AZPpYEMqwcjsjI/dV81N9YD7iG+bo1xmZv33mDOq14M2SXAQ8Q3CPkZ7qbGLANm5qTCw1iy1hsM0xoKOO+TyQF90yYZmPO+l3I0ac7uAYmVGZundnLHe5Fzc1giU1ggD0bBMvmpqVd3xsMbfyK1I/7qp5W3/eSbCZyO4pI0/SagKMD24aQgUtFxn9KsuXlai/fyVGQ80bVn4g3aKCscGCiOKBoqY3dUPbmC2lci8dFgG8jNNEfEBgAt0FLLWZmBUuyPa3miDyTCCizpZ25xTx9Mj7tYt4V5eMEdw+hpiBZLstQDLNJxj7Xpz+dMxov6cOg9ZrMoTtyQthfkmxfoh/5GUta54OcBy/li/8AFk0R0MxqooD+6BKK7jJL65//Drp08+hE0wF5FjbS66xYj4Eml+PDIl/KgYBp9i/a3mONjh5/GYnDoBCMWE59wUuXOJsmNTdAjBNqkpo2er1hbthkvqCuDkGFxW4cDYO4kUPr/loxZqaNjmeKoj0g03vRtitU+BK3w1V1ePnRnzhR9b4ipSft3alA3b5qAW02dEP/yvIUlmcej0dhutVF1wh1noQBjcDK4plmZUEytf/O0dKUppdUpgJ+57CmtjDhc/czPdjsybBXKOdBMAwqclfxiJ+MLvMC3dZStnOVGlfGAf4ESWm32PXmPDLZH2ZMYO4KQ9RG2tkJ0ju5lUh/C9rZd2q8o7j+UST3UYFuyYV31HPx9w6YU2DQ9H4fZ+2zx/cHmr7DR9k0Pzt1043hiuSz1l4cfrv+FdJ9kl/t5sceWjPcJzvpsgGVD5hr52my01kx+ipLh1qh3rG7Pn7VjSactJwdIm8enmrGHHu8cVrc21jObM+Onx9BU7v3MWymqMi3rt7IIFFrppxtxk3HEZosb3t/ZlGdYljQyuYrmSCCdPwx2TkJfqlLAaNdG9UN79CZBaPpN0HlCyW/jJ+YeglFhBqgUghtcX2HAl3tdGPC5wHlQe101Zz2oACuNV2VfZcxVBltweai5yGZcz+5a5Wun10b4ez1DqXyLe9I0l4uBTwhPEy/NTbqFd1hSXcd8iTYkv7g17AfOBMLDXaHv4LkoK9XGJuQ==';const _IH='3127f39dbcf07719b313dcb725dbf535fef0223df71f54100a509aa0e9c84486';let _src;

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
