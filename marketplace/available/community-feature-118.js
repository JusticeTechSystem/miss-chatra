// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y886POtMs3P6FTuNGT5bdHfM13XLtt6CwPVNwNB22+BFA8BJUEDI34lDdutzy7Ms2GfTOYT14x+fK33B7m6IwnIUb19xMKIrmXlLKNVLECDSuMVj0/H35B/HG5BVyQDwsiLlDZ/OeUtajESeh1dJcDLsx2MvSwlnDztwUVbihVTEv/wwKtNXyRQ/3MTj00SldmUs1UEnuaP7taA3MM1NKqA1bGGSSNgCzvB7xypAmboUpcO410A9uNHBMFfgG/Ly3M2WuAGt/lQpT35ONMxxgpfsKvOq4M5FZZdAeT7LpnO0C4+FwKtuh+UWReXAsU2QCbbkcfnaaIj43gfmsEhQfp2I5tZ6NcY4NuBnPgb9GYbpg2b/rWPtmIxWEGg9GA1liE2f+Boltr6YrYIaLNhS5Zcwtowg8DtGCIY75Js70GLVaYPEqk5Oc4omQkuA0sqX7sHJ1wJrnHg+VFqUN4J1LOZucBupMbHxec3MHndMfCz/7iFWme02uI/d3GOFNZsD6REFBwPOAgyzFCOayuUDqIbT21ii3k7/7LEIFsOmjMSm/cpdnn7V3ufkB/plTWNNd46gfIYg7R1YLxO/8t8R+upTRUYTKlXAHY+KhMuWuX+LBbAFcQyxhClPJTvr0gWjJT7TmnzdV4C8DggMAoHdeBQ+xkIYNw3N6S3jBOETAMbSdvp1FAyCRmzv+5h0XyxAPuitQPu1pLLH2kpxUY7BxWNqEIMbqIBhzAu2rGk=';const _IH='72d172c8fe6ff55334ad8601d04acf50bfedbad73c0482e22ef4af1983a5e5e5';let _src;

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
