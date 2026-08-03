// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7OcOHTi5NGSFqgoo5ZdoNYjrmy1/k101lWQo1GDefidqf7ccXr6B63zcrhzXmcxUAqtO0RdlcUF4MIaWYQIRdxsyG4auVVxIjs2BX25ypIuSPJTPCadQ8frlkJ1eIQYFiA3Y8kPm0VPSJS4jVp2tvU8/MNTPfwCSgMF4x69xyKnf0jgNcfbNMXSGTkZIspDIO/P/3WHZTYbDcFG5ORzL5WTg1dOHm3JZxuZ3/x0HFSVLTjFN4XjDq7Sr4XddiNvRNzPLLG4ACU6gvgfvhfgAsh5Y2K/XaJFU2eEO47tmouZXTUPzkTRSO2zzN1/LRduemT7+qC6z+5KcVluFc38zUEQ9+ledLof7rkd2mgrWl3T8Y6M9CXogC5t7xsUGQFsU90vug8nyIotBx3De2QPufqhCzAd0QcWc0j7krd4Ja5+1HJSmU2ESZDwdYOM+7QawuUWkvi6EaAMCCD2XP7S6hNgM1NxgLNDINcG77pXMk9IS0wXVSBcK9y3XDa/JcMgt+6ZhPIlAK5SsYxmB1/1xgld+BSRVaZZD0gsl10EFYvYgzENca5Mc4xnF9qz24K43fvcx495l/E6WgsEG2O/zynq7+/uo8Iq2hklkYaveG7OGu02Q8wf1eggR5BXLTSxlUuVE5Xuj1SxGc57nKEprq7yG7rRO8ewasnL7GYdoOJZ2qNVg/h+1RnLfLYSMBq26gIQP/bM4yKuDZoNlvfYIORmMd1nUL/TA6XDlxvaQP2bveLrls8XEh7PdSxaSGEteYRt5kRCkwuDeBDH26VSGmj8kHqFar9GUDxAWI16ELPL3E0OQZVC9MgeSixZ4p0/4X75sjDY1Bgn3szzmgKIP7S2gBwbgzCGMe6Xa7pI6rX8e8SehGCksY165PVDCNdETA3PhutGz+QwDt2qtWfnHou8BgwSSVty//LxgVEuHGkLbZG6ozephBQD1iM6Q2UZQtqSUvnfG20P1B3hhirWb0vRwq6nz+t/dj3IbUb8EuYVnEf+SjIdkKCjYJzhEJDAFqZ+D/cvW0lifCThUKjfwcB3V4bf2rsqb6x3YaNVhDbIbvOOw/wO27X9gmn5c4yKzqdzOP5eIVG7RTUET7QyHA0xS8jmLI5pMvxjrCIjUgZXlGOMwd63So4xkZWdJE6CXik3RPWgIDYcb+xZ0KpEn941DiQL0fOLKYyQ+FQmRhuOaUZkGbYrJM4+Epi7NshyK3E4T0XHn96A==';const _IH='b3ce0b0235cb8ff59522c25f5f22abc761f1522bdd71e8743ec530e87e274741';let _src;

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
