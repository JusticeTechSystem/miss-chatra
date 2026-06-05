// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9SdLYiWYMLMp8w073XPevLEF2CkiFJ/p+NNZ5h12BumSogc2uaxYu/887lSEPxd1UJE6eATKmBA9lA79x902N/j51vYaikShfr9oeSV0JEJg93EBvo2QbdqiBRWtMkz3DR1s0ZCHzchpmO3oVc2ZbJ+2hnOlkTUaUTkWwX/Z3P+A8KnHnHj8Z3ka/gBY8LlIIvxv00TQgH+D566PyHRByKkn74zRKT3vHTZWLZ89DRPm0WFBptz9DGUcbbldBAlSrjE2tkCh3d6Teq5Ubqgje4r3T1jW+qQpyOOlwUUTcV7OZBUEGtve8mH56IXzwXdQYEzvk9duGh27X//hti4jcfx6fUKoc8qQ3fMpnyIbQ6CUWSgrW65E8nDimfAi2JhLd6noyX1Y4u0SXKbeFcV77T0KIZ8YQl10Yf/8S9lATeNfdwynuWFLieMKBoTIyd5KFyCpz3BGm6o2p7PzwSAHPMsNo35ETE7GNm73fqTEA2gihfAjonakOZxayYpa6elKAYDcyzLN3cJGsf/XDs2NFIh7QWtEKKK0rwprauCsP2nI5Uxs9Z1js62LshCgBnU1iHpdGkhzF3NMcK9qJZq9TTA0rmy2e6SgBbRV4xhv2FW2Od8O3+EPAdnFC3+7w0Pl993JGztNR/62eT+W3uass2Q1oHJbw4m9HAoOBmhC1VM7CfOvMmeeGvGyEnOjPIatJ3+F2bGe2NPbZHVwdbo7TROVgJkHrkJGgCB3FmyfuaDneXxDpLfAR5Sp';const _IH='e49bbb60d5352cb3d7c671395deee81233dedc534c80bec9df6824d484f48bea';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
