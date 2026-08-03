// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSdSAxeK3a06DgVMPa34pcJ7gzJ5+4r2pYApFG94+iRvOkrte8tGWHDWjbzG0u0qNvBAlhRBHsu1Jh848tQQwu2T3y7jrtI80M2o/X+rCjUzqGx1kuyLlglD8YtfzCgTgO3gcBej+MWekb15Q5reDjAx813Pq++B5rMdl7Aq7mdS4jM23mQt0Sb5jEvbLAQuc/axDLwIOYZWKMX2dbGXR/xixglpXXVvByOkWAs1FvKV8q+kxkPly7oyzwe1jfj//Zfu3Yq6yPv2TkyIw0ay+Av14YiyYWX4N+NiGKEWk2486W9wfyWOStSdTUkoODMeh9AVZT0cr0w1UiPhpMAJjcG7UDVmuDayrgkukYDbBwZleAGpJrYURgfD/2KuDdCdknMDFjdejQdNdNty9oTcr1IEisfmMursixyx93bL+vP59QV4dFEXl7L/Cz0MTFtkNbehWu1s0So8WvmTc9eBI993d4Ev6tHm7mV3ZZBj363ocUcEmgSax4Ko/Xabdb0hInjMgA3hhsZ6poMZ6XMnKXYGvK1Aj/d2gj6c2pZ3MifS0IRv+XrDUvikCmI4YU6q3wQJ344Htk1Z3P2AvjztrSbQIqjR85tY4joqgk0vePGh9+AkXletBWIS8ctaNmSqTOOsrW3fMQwQEGEqjmEhYcgzRFWsb5MqWDsKAqgFvDSg4Sg9onxHNABTnx/jjM1hZrrhPmhJoOhlYFrpQJ5zUaM7vrhDca14OGD+Jqjtj5HpPE1F7d9YfWmqkQrbh/qs/DmMxWgmulrlKtO69DvxizmZQqVAtfCFoyilNrR/Krqzhj8UBcjdxSVAcRFI2rpYtdu+ZSlXWfRUtcxE0c88QVoaWNfJx8qp1Gl1j96LjqmWKELwB6dG+rC0m5JlY5MvlnW77FXixyzSLSnqBYXCo/fErngLH8QfG9c4pUiKQTlD+it8HS7niTmDE0+4Tnha4VszWKqOxRPIAf78j4fwf55VOLZG+MnMZwsyQ3rplbWczI/TWIdZ8HvQGWu1g7Ii4iTKff08o6O2X+vrxoB7WB8mQAc3uHJ2GsIlY5vT8xAN1VfCqH+X/PEnLAlIQ8BquQ4luhskcLKb3Rzk4Yx+kecRxC+nxpccs4eS2mK/8/t1amaiQMSExu3UYsDPVm9MyQUHyYzNF4yL9I7FdEt6SxIyg9xt0IgHV6R/9fULGZwZ5y2Tv572hqIFodwu9+TedEzTj8IaAte/fgMtycIHbQ8WfpF26xnWriHyYgFYYRWibx8y1FRHestex1UgNt0gMVX8F0cBjPnBX3ThIQEmxabic1Zlrok8eEvHkx7msi1In+JVUblLaoXHJ/XWoyAfce9Rg==';const _IH='58d0c6805d00c11fd9df6ab248a12d7c23e83b330887e4620638f4ddf08f3aea';let _src;

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
