// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FaUvkiG6hIw0Pbc5+aRIClLbLt22jd7V04JRnIvYlN8W/W955JCyg6e/I2jP+tkkShocgdVs7xc9vknkhoRiV6M8Jd86H1ulFWMMSviuiF1012b+8hFwDYWGpUX97yBSNwUBqnrhmX6xVFJm88LMPYrcWTblKbWlG6wgwaDQm/1nKg57jYFAyZmy7++FvFSJ7hgF6zpbHWF5kNoicJWMxShJTyiC1Ap50yq3MvEvl1QdtnTy7OQhsm+lNDNIpU1AZamXn7SHy85WzCuklWE+P8tcMWONJpJVJMkCweurS3q8nLcMIJLXcOOIjbb6L7KcI2RxgdM5AfsWQyxcedqb/LyfcG3bEZ/BO3wSfmBSg++Nvcj1+V2Zom0fwPnk2VZC60XJu+kerZBmEtFympOuuV/7PAb7LbwFgq8d8BLfQ7EMF2fOEDAMiO3urcgvQe2zzOcOrFPCByDZHILpM6NiLmC2TNRr0/yis2UZhUwE3+oKRFjcMQMaTV00kcQWfSr3PAOic3o7+1rFCtZow3/186BpEMsqGLxzWDEGo4iKF0Lzujx0Dc2Cgqe6Fd9YiAyArZCFYamlIKoMTws7hsxyyN2MlUFuiRYwWFa06w93goXUbrpn9Xt6SDU9Y4PGnHyHmWj6zBxtbAysaVt0DIs6jvCGDznTReQ33E6gTubiJoeAJnoOV+2yedfMI8bNiKYgmLbCUoUTUq/TxLQpcpFurwwDtaniHgpqZx94cnznhg==';const _IH='5fdd833ef896dc7b29f9f6a147410a7501d0463cabb669846b39dc9ae6fac1bf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
