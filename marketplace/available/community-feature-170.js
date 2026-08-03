// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQuWyALrvLRHDf36zveZEWMHv71/Ld6G2BhhQyxlYUHU3b2y67IiIRuL82BVTduRgkDsbpIoMAjxgW4fKm6W8Djjz6PKDgVJSXl/HxmTvCcAxDrK9Xwbj3Ur4J/V0jTus93UBs1Sz8m3kGDrqoQ6VlHJfwvpLLexM3rksumdGnEEQ/B/cg6agGTeeg6ymSGzPLNFZiR3KWFre8QtbEN79vjsujJLqRrc3m323BhbLWQnBDdKVfsOMEvxSpAMSKSan6MkVDwstjlzdQNdzCk+g2FKz25xZbS7GJ+PKNEWMRG6N221q2XMsxNDWsA0uO1M4lCehC5VRh541veG1wm27yOZ0xLxbPS+/YnjsoOZjmOVUNJakLuiYCxRxmaCiEVTKrOinTCK+j94TokP7Q9tOIz5FLv2/CcaOyrTsfMDFqyfnsPmKOSxZLkvcuTMNt4Bn+bTk2+tWTcWktw7HHIqsSeponr82bTtq40E9o1fywEe+EaGRqZUjMKOR3aJTQQmPO0ggjYJEkC+BO+MmdPWwCu4Wdil/UCT/tCbwk+8yDb0F90JYTGbp1r5bRbEyPsLH6zYQARPf8mJPxp0g+8dEBPa1cUZCfwRUabuod1/I+Wek1PwSQGEDIgar91i805frxJAkU5uJP+nWtiMhOpRyAkx545gwCdlHcbd3GGl4G0lJdQRhYJroMztIz6JlPH4boC98CzxXDY+7bWXfUBn/ilTm72AJg6hmuu2xutcJk5aMrbAPBAfw==';const _IH='2d88ec7e49a5bff77d9c9649a75156aab49101eac2926bf0467438d62ad4c165';let _src;

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
