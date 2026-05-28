// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L2eIU5nFOKJ5NZSvIOgSqOsf9Af2vKSjn6sA/XnH2yYMgD85sq1ifaaWfiAJczG8pohnTg2QM303wWVsmGb+Qd0+f56cWpG3ntSng+CM4BHg282ROga5qPZtnL0IR5wCNVy6te8jYWvkM8B3TRMWEDNPidLAq514asJWoDJ/ELgMrrkw88UbYNtYDY3fqeLw7/lvHnAvKzU623ha8ZmjKy5dTP0ajy6IZtk/tktV1NktWdnPNQsg9afyw/3RRQTHdB/fI6VGYL9ZZIgBImLlfJ1D/ql3FMF2XGoGEndANC6ouut8e54XR8C2k8VTeh0nx5pbG2Ug7uQ6u1Clb/1P7LOkPtRaRwVdCZ3E4AxaaJEZoO1+Pk9ZO3LG+0uIxgecA6BaAnjYzyJo29xuMhuXMNR4/12OzWLeiD9f2+ON9j1LJA6swLneJo1J3n3OVuOLYbocTFmBaIRVjQWQxdmPme3qeSBNTwrk86b4fjTDzZBAzanRj2mmdr9uIifq+QGDCoW6NYxyDHFEc2JEIHAHk0xhBU0Q90N/1txJPZoFtTaV796zIK09oZItEJLExd1b4WLJikc5VhbxPrHMDxyDcKTwjBDllkg/ZbufGtg8GJQRiWRd3wvBRd+NoROS7/tBaj5KUaTEKhjbUynnTd5asK4RGufw0HT/X8akpcJplshE8pmcISGNoGndY7LgLiuYNDHBN89CLBvHMnTfz8nea0vi12Ly2ijFo8U7UCLMgxhNxxkV2rhAPIX/+27y5hhxoA7pJHyft193qwd7SSo/k/LJFpJAme7CXbgAAiQP9eWSDEKykmMbFl9SdH0FFAidYhEZEmmggV5PoyYMCUVrDf9dEohB4AcFnBY73jdODs3FAXyS6JcGtNlRZiKoWF/pmuDhvDUT3mYNQyIBN5DfrasuxJ1eQuUOOM1fDGSaUOO66490m0AtPDL+/0DZdNtAghehWFWy71uu6krog3Cg7jSgs53d01pNJ57Ty3zmLERt3t3BkFXNn+qlSFuyIAVW4bUxbb24JaBdlfIDRBrFm4m0WNqgo5zz/ZS+kmiHIcsYxA0x+j9KC3zLce8em/Za48vYthdn4xj9yQBeHzkJp+6J0D7kT+ZlcMZ9O2KfkF12GEFgJTOzm8HelzY6NwOcR/Ht43YkE8E1OBPtiaDFDY2Fvl/9wIWJD+wVeFmNRLO//B5axFI/T4Z9i1ucT3aK7oqWXqn0GcA7FmoE0fhVxzLyVRoS6E5dZRM01RkrjUejPo2VmpR4WQ/mC3zWcpfgUycqCsEuze/Jr39fW650WqY7YG/vA2PQLax7W8W+7w6xKY/TlUUe0Ar1WQCjxj4lPEqSYFCUZANapymFRVZTXOAX5QaNr65uDNevN99Kcn9nQPpIcTp4UA==';const _IH='e2d0784bb83ed4c23255448857c96eef4d5777b2b4ad3222754cc2314e844803';let _src;

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
