// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR90DQkkfuuG1eLhZw7M4+lNX3U/rHTaHsxlu3Qx9++6LOI8AFe0yhG4ojSkcJmsRsD5/idKY4Rl9vZorikEFF22AegBcPMcxBJ/SM+gsn6hKCglCRBavsatNxiX1CmasozAUhZoRw6U94DArM2P3PdfzwmaJcuac7uq84ljldaAfsqnlj/4cmag5Sp0p5vb59aXNeBGttCqslfzUAZMvOhAFgnZfajB37KhyjzcuLCXSLe/APunO1Tw8q7lBV7FmOb0HPpkrkv1SZgFtPb9UQ67aCfHahZocnfIrvyEXFWeecJ8j908g4CQLpgwjCJOWOO5XbWhMqCFrzYLVCcjD7vUS9i8yjfy/Lslw6RxAv8sVaK/6MBgDRdsemkcqbeYiaEDHbR+cpD83PdL90NwNmTlaxpwiuo6Ewt43LjN22ab0+7yvri3gDNMxR7b9lGaa8wfJLX1fG+/WLAmrHkcmHWeDtuKNcDK/GlR1tciS3eUsxKAW15dAQJ5zOkS/2leoAMV44q1wHrwutR1iY4ZpaJIGpIXhmgziKIahCCqkyYNzwnj20nOKM/rNVJgX3Q3MHhX14jhOEDhjaJMD7cYMedgQq4Ai9rVnqEu34sxOmGSZpV6/N813PuHo+zBNH1I8X4mULTof/G3eDyb13u4nHQO+MlDENtY29Y7tuEHLuw1kzlAJ1PL2/R3sPZ4qeYSD1xJwUQTQbpbZIropkLGoabHf0g9ODBoXbVIHPnR21+MUcW';const _IH='cf3f854ec7042d944a298177126fa139628cd0508882500c1edc8d3d0adf8672';let _src;

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
