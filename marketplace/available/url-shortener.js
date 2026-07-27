// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQJPtU7WTdeBwa3K4yrwPh11DmFeNaGOwPp7+fI79x0Qxe54uyCjfT5ApsnjLzu1nQeatqsLnKapONtKLG9aar4ZXpgFaGtEnPNK3KALkNCJ+qUyt4t3crS+HMbWbCg8ykcFyhamCe7tRxYIxW+wjbzkLuhmP7RxekqQ0ayvpLRKNqaRM9uSQPIypMajPOxdY8Lg4IITvbPfT/W/Sfs2BBZzVMo/7N4R2u/hHKiAWuwP3CRxRfsc78sOJUCuKeqnGJZsJP1HGaouN84CqlR47sZyV/wk1sVdgCWq1eROq9WCoHdeKdfwjSI+m5Kp8+X1U+9I6snYx7+CtKWnyp8BXgZ3fLWitMbIo46RRCF2OzBJBrVyAaCHYd/HRIdCCs+5BRwbh7BEXEMu6fb6FJPOjYPUXAWjy934+f0hNAf4Kw2d+t7aaDwihVqAW5Tyx7j0peUsAiLYgJd7xtJTvIWIB6IZP16aU22LhPrlketzDVhLFuGBpbVzkIF5CiAsrSAyBseFMuCUQmincTBOElQz/yDbAoeyRh1/OwvNy4kkfcPnUYiNDolAW7FVxsRAbHCPpzyRJ3r52N8ji397lTmvcUBTykiBv6ziXz5zVqTkE1rPuHUxM4XWtCJbfRu4XIxVANjIshD50kGqguMAcZl6T6HBeC9E2tRuLM7mqe04yS36Zwmov5SJC4bYQAYIy80iWBhMV7Wk0B8YoC5RLjUxDW3h/Vi+xO1dGwevP8pI3+ypph60Gzs7mSgT8c4T0vF4DleNp6wLx6qTwOvif2yyUuJJ2Ydp5vijAxV816MsTdRElsjv4Rn6IlTW+R9MRdDA84sN615mCwM1ilY5XyS7ViSiyyVTNr9fj5J+YaaE8SKcRFpsra+ppNl12pnXUl2ZkUOvD25bN0kd/wejAs71r52pXH+PAwQU+CkmX8H3En8qcHXAnKH9kww9Z1cEEuU9KlzOx+PHqTkouVblq3zNPvd6ObXzIIU9Q4fiYTclkXQifSkO5VMpVq1OMwnkCN8uTEEDR/sKD5phvrhYLGiOs9cx7hXaZhA5tdeJ2VpWdGkZpJXXTkPVtAIqNDC4V0gGFZrgPlVZKLDnUzCifx46bx4UhN7GHalTngtOkoCxOLRs4nhkSxmhDPKJdd6KacteY49ZEpKeEfPCbCADO5H5Y5B95D6qmreI1pTRxzfg68N8wVrhbn91xzkrScvSgLKDpkwiUv9DdQvlDcr+stggB4jvRXwTTDpL9Et';const _IH='f238e02beb4ccc762aaaca10903d94fdf1377940f61ba4a983666cf5f4ed23cd';let _src;

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
