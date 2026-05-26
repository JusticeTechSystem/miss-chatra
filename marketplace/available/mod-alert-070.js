// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6M+6VECLtf/0xCGmy7QEIvnHDALca+m7d0PmKNI6V/uszJi64qapTSKEy357ZXefABpoa7Ow87YjxkGe+fIuoFWclhpg+FRI/r/WGLdf/hYSc+xUKhlpmSO5+idSqZaYUHBikX+qb8tLDToU5mIMldolIJG4YR4l32x9U61H8A46Gp6kfKBl8caF+YO2elKrUXZdFYjipqRUhdysCUBW42kVR7gaHSR/4guft+e7zNBuK/H4lQOusMLkrAacoc+QxBQO/LcX9UPw1ld7jmrLJtD68fOY9Jd8SW742DVaMo8yhn7YtaWuEEko931lzBk824iIYE5WCj8OVIGOQjzQmz7RSfh9iMGDFDJkI+jNgTY/Ga5mFake6iK+ZZ72yP97Ctd7AzSr6vRHKXi4uBNNKTOvQSdT61z6KcCsjVlMXgU+UV2jfcyB+65BxO3/Sw90urgRlLTe5VFAJjKMGfo4vtBv8hdV0iLBphoK1L8ljvfHq7wgeX0OGHvaUxem3WF/JFAJiaTBAVwKkUhszehZQ/4pLGF4i8CiOgiQkcMmSAXlJYLWJO6n4ex5X2z8IAmrK03pw8Cgdo37F/sLoPJChNdNWxJJG1Sxw0NWKBcCLiUTNzmsZaLG/nHdtLeTW5D/KixHDVWBVOZs9ht/+KrxJW7pnZ0k97V0OCRoVyUdMJbvzMpXML2jQHPHKLyGhmZoUUNeYOsygcY3otuvJjHiWbc7ylc45qHz6kJ3L6XaaF8IkDawf5plf3msXmK7PPo8gh7vXRFSppL263T0pbqbEGQt7AVUjChILwzp11EXYPkUvaAQkzehewcEPUyvxTAFXf5CFNIJg8Clas7gcPQARFDyVY9W7a8RmNEyHdJo9IvWWph5pWUAJmYBHLi9F8QrG2WxHvSVuiXNPS7pveaMvDruUCHMnhk5Sj077xytZzjk2E6Z2kuPdzSVIJPUupPgpWpzdNWFi/aI/5CnVZ092C5/g0IcR91Lnma6p6e1fcRGAZQHQiRiWqfwa/YvJvmFdMDpdep67GXrL14J6OE+m8EDIaFTzTWN6no0/4hBI3VfegErXKb8JZyrzY/6/nRqKLLRgBjlZrl3lxIwVtucyVofxrSMD1bgtVXoMy4IVzen1EBJmuoYuAvsM74+F41VyKcPvFmFchS1cyR211DNIbinq7YHgDI3r8h6fPk7W58/0opnZHm9YPlpX/u/xddvbeYepAOGz7Pdp8G/x37IRRYWRV3RaUFlGlot6JDlMmg/fxW6js9jrmXJwmp8t8Yqq9RvZmGpkibHPJsJoBcIWZx3Y3iLgg0Rv0/1bCStVBeSTG5JwJD12g0C2xS6ZMqpPmyXdBJPwbpj40aPOCvpB6eLs2nPCMJweQ==';const _IH='6242b28140d7a962869cd3e4b5e5d2956264b97995325b16d5cfb37a11987638';let _src;

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
