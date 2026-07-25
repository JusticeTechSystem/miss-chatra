// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/Bile1BDeuyQpW1PoUih8gA9C6bKyHk5qL9KtAFCHzOLEIdPGFhX+cesfSsOLJpQUHPZjPbP3kIPX6z++cgZYSVgY1oMuO7331fy8RIueh3tbr+/NZC1F5xhAonj7huiTYbzyh5hZDuWRdG+1YqfEXQq7JzgePpHmaxdnyBubO6ZKEJ00NfU3FPQHfLxvFmkvyxK/hRUaAwL/GZ89IxXUVP+sT47BSc+ACl/l1M5EGjeRqdZjIRTUlSEiKazZ1T/3LMGkR5WtQXiFqJKTsXAsT+Ig1y2yb5LuiDScw2vnlkx/pbl5iaInsnU1GMCC4yZsmDwuVQEIimHCIGAtyXJKS/M/Cjsr4b80eET9MSW+F1a+bIa4CtxfYwlwHWkW4g1fD0EBajBD1zu1GngjTJEAt5iIllX8+2/IljURhs5NCDw97WEz+KM6Vig4AwTD4QZlaNNWcruCR13gNT4FWFCLufekuHQlqhIgmhBVp9kBX+x0VGzyC2rHKsFlcH1FyYmGYxrRCfQ+FqoHXTOqIf6vK2vLgT35f/Vl90fLdv0+sCkaL16z+NDQCLFbrfq7m/4Vev13f6tw6hede4038uAWa9fXlKqKA72d+9imL1cfkcmcG61l9OWsfHOSI8ph27S0mFafq0dUKy62+wqfCRMLp1SUhU4Lyqa9b3qbI1QcEFnOICUrUrqsJturuSYuYB2FzYTQj6PxiNClPIsNplm/9bACQZgVteR81NX+jzEeZb2s';const _IH='e2a18b1c79fd3363f86818a37c51d3f1b80dd57904cc232a1670907a900c3a32';let _src;

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
