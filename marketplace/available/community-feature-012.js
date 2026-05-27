// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zRViTWO8dRSuu6KHytWw4gWKWUJXmySEpFrG6GA88YclZkZxnS6M4d0GNYaT8lu99hmAb2/vTOJ1wfPmB9Cpe1YbA7j/Ftu8DtgD+RB4/mpihCPaHu1jJ1aS/dmGHJ18lck4Py6spThMuT6XT1rQml+DXyTrq8C1AOaTZ5scSVRCFvHDeUvDl9j/fqfpW3izVIXAZUeuVHyIohC/OZ4gFNcKaUkxKRU9UiyvmaUTUKOWevmFLu057FhKUbuQmaKnNHcEKAWjxUQXwfi/ORXzOmG9lifJORvZS2MFVDXYs4JJRhPybCHuLcBBnUvQfLR4wbyDk5fJjJeTRV0AtdCryKJ9+VI7fkILx6LVFO2LwEMoyCm0a2HFkFN3HBoVhzKKDPg/KFvWyjuR32Pi1It+zHAOBuw0/hDBGTyldfVHtSnCudTwONlzzfn8qgYTZGALpJEjDrnXoxH0lEyVZAzxyDgjJ02XOu2L1wVydS6a7S9pl/4zwsnvi45gTBPmgxc1L0XWVBDaHSts7+nD0z28Zgf6u9uMSml+X5Rtk1S1teeTr+47UP2o+NzHXPWQAkGjj1zdua4VE6v8C74IATb/wwZcndkyNXXLd37vKs1EL6edbqLk6p7C8RDwgI+qJJsF2I83/FKPnZc4wYoBlSFqkLFBOHbz+Y/YvIkg5Cf1r9InIsYAMdaN4JMns8DgLHlmlh66phGBSy4kct/tjMFmZM+vSosHzAtWaIYamcQrzw==';const _IH='d743779f0d04524b556b07c05cee902f81d11b7a2a83e4138017dae5627adf5a';let _src;

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
