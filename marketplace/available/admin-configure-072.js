// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTo4odmSJLNPXlHghNyBhFwY+fejsmQ7+BhOCNk0fYKV3Fd6RAnKmELVltnMcz5BZwZqE82ZeVczXzGeV0d1iQWp6KaSL15KmJ8UcnaXJHvgU6sdTGqN7SXNqxzsEuu5+K1DY36L4R2u5GV8/Q68+YwBBYGhW4MhD7ku5oSHM7TnAcs2lBdKMQRNWg5ze4Dbk9t3LOMB7bggAQle02k1QmnebCagIH01DGAt30FuRjFP53O1JheKsVzfL5mSJ161/y3XakMdRWSk92hzIz3Lv3Htu0OXFXsNz7gwPeQH3Rw8QfUkmFL8gSRQhtgOgQi4iNkNGw3aRSdgAB3nGxGeXnOKjx0SufuFf14kmjRuTEVlhg4rvJq5mtsdvgxnfyq9PMfZi0KFsGaLXFtcyKIVyBgCjvVV+Jo9bIfvWeN6MDDJ4QEKJccpQAWRGJ5uTSOsF64fnQkyNpZuMGGKmZ9OwCKUG6EZWtlxBlWiX1miUpdNE+V13Yjuc3n75hbGtuteLhCSyGNXEQx8BiT4pPRgHtyEh1KlwcKeykW3oXbXpce/ADCGQqSikwRGkjclgkY/JydZnvgXS9MLlAOuDw/FTzy0eP+27HFO6LthYCViqrkIgC4PDajwUoHcJG8SZ7emr2eQH/XPxlw/Ud30n59obv/b5sPGz8i2XVtJVcouAWv6RGEh1T2UvODjveoxVhrO+WMMTRj2SeK/BmqC1LytOWG6MwgS63P27COFiivR+N9gAVlRAdIK5wMLNin/wKvjXjcZqmZzv49uk3CWUlis8wGEW87+Oxr8fWCwxDFTRO25hZRp1OaikSlx5j98B2JtuFJO9x66fGom27Q2Pi5MjRzYZihoalJIQONtyumLL2U04XizIbzemA4DwInw+DKdzNBHh+idcULt3BMqdkuRWHrspxblHWkmHivW4TUoHwy1BshZxF90pf79tLuR2RAMW/orUfbf49v+mgp+sVTVI4kinaJW6W0omiwl9UuLTmMiREEJmx/AiYnN3yVXtCLNwb8n+m/yG/ju4MGqge9CKBF';const _IH='464a667959faaeab33c0d6b0dcfd5bf45ad74ebbe02f727abe0e84e62768ef0b';let _src;

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
