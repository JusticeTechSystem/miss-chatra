// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQDW722FEVHSzrjwCOC03tTOfgzImi2Nahu1n/b2aI9LoldzgNVX0QAKCeY7xbamECi4WaZDBTv/f/vy/lzYB8AXTdt/5jHX9PThVa4bdgvEFmeqdxxt0I207JuUnOv0kVsrVHBHC8+icLN2IYw5j1XD1F9Brar7hr82ucBXpPCIbVFMuRZe4oihwXvU/qcfGlXJ7j/iT4t8BZTnPKb6DuPem8qJIMfhJMc8Z9yYJcwIaVugNZWrJeTxdoD54VdU6JDBKTa8alCTICMoChNJmuej//QCwTLp4sMu8clFuC65fLYNqtbyXmDdJ1DCsYMC0z4GpL1A6Y380rRrNVagCps3H9gw974FPjn058q9vJL6yZXrA6JOrC1+8aCKomcbAHlQXnWF4tfSTu7bnDwMQ6mfRzBBgRz+FHeGKq2dv079KuPJ/6ciWmOsLUJelRF9TxMEFJTOXtanTwOO2xV/RvPz2gpBF+l7Ls9v3g+7ZJTHQ2eFXz84xU46lepYm7269E3zxzNCjjITVk696iJ7SwSpRp9aCKzIXJKSAOIssX+CVDAorP5sLwENMiTzodJeyOAUShFRSDQ21wLtuqBDeJB9dB4xqCy9yIv1wYp45CgHdjMmrRgTophfMKPb1AwmGu7LpKzmxHTRKGI7aJqIxq3ngocjrpNAUUmU1wE9WbQMTles/akUFinZdR3S8nHTPPOLhzH+1R8LrXHqimY0bXPfFP6mbohqUjPBitFjgJh/IBPFhvgP26/BeWHcbMFOto0JZjQl4m4dD4uUjh2LQuZDnkSVIaBr+d/ObiTXW6FSdomU24ITSopFsaDugwOsulOIICreVzfS5pWHIyE8FHe0vlbqW3RgCUIGyng2qFb3DP8lQMCLkaOGp9e8VqWHNf88jsGimVSJvg51u7tvbFIUmu0pBX8hPvNIognndY/SaXEykcBSKEP8hB2v6S+fgpMWF8yDowGaZghfHUAefDBlf17NMOr33tCHfNPvAcArFAL6ng9i3S8AZkLygUp2ZqjIetscBkHscn2uxoGRFm4DRrvuHZsFqjjCKVCyJ6Up552IO2/GX19Tdd6uj73s16cXe3NZ2mriygJhKP71DuorpVTHaF25DsJ3Fil9aWJG65fSY1N0dlN08ivONFDZRbtmq80h+6HnwRde1uRr7Zns9AKDV0Ln0K9Gu8wfKHCYuqxXvHACj8MdFtNuXs0apm3VeEQPYo=';const _IH='919d46f06589e23494becbd4f0660617d617f3124b614e7f7e432a7f13c98418';let _src;

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
