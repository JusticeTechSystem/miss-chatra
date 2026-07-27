// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRqlg5X/G0yZ57HPEoFZj7g6DYBJfiYCl6MbRd5O9Cw8grwdZUO+sAb1h/7zggzj8e0Ub6yQKC3Ud86HAGkjP1DbWycWninrh2Trnf5JCirR4ypM46MF6G9gFUyEffzEOm8pOXSPQp7X0Cd1REDdyO2kP9bMAVLlimixDaPZGlXarPQqmQwW3Ao9gDjVHS0wEPqbKfRVe9ILSZWkupTZVVGSSiiqY1Als4UzPxx+5ToCEsW2gOImD2s+GBj3252nmcuGsqvbiEMyit1fN6N8G1MDTbr8rywhrfglok1dqiUsuqlBYCtlarq2IfkhZaFB4aqmVX/NEp+2106mGc1wNu9QCBPHnCSSufcOwh2WLNFVR18DAX/tiG9I5+y055IRJUVqbXSfcUldg5LJcWDkrMhJpQrWYVyS55rcwj8la5s5xlI5KiPsXpRRmVNWJjZXN9wKOytZZ/4+QlOFHF2RqnBxh0MQtVwR9/2T2duRI5iutuaOZom084/tqTKOPJO2qVdxIMIdbpeXljImPKjP+JMwMDYRdy5ztagY+OrRJWSZStMD7ZFqCKWNCJ7Fe4kpBFDxvn4EM53Vc+iCXmDFO1eGoqL520Irm+FQ6V3DxXVarSwKoY0yDsgyaqzb1J5Vi6PImr6HsPUbfmtUVe8CXylXqloaLEUvRwl3RrCaJ221ao7aITDsEcnGvGEqCgRcAOP6mhdCkA9NqpqmdEjiy1Nli0V+KFnm0OmDT0EZ/NVoSwktlnXqo5IJZ7yrqjExVRADL693/KGQQRMYQP90PCtjODphBwtNxFgvoJQbyAki1U70L1WfhU1GLEH9f6KCrJMavhgK4TXOEWT5Yx2KSa6mZS0iKnLHrjB/SYy1iD//uwZDy/YRlMCd0vSMCcDU3i2SdfAk2ifpyvDAGcjkESAhFsbdDGVN+YP9Mxg7FQxIjkhMQ8teWME2ff6bWhkFfcELkHr+2siaUGekueqsffVJvalIXvcFv2AgLn6ta6xvk1q9k09NJBj+oN/Q63XZQVSgK371d/7QBoj5vjDNXZl9QXAvSOtIyMojnjzIPook8/CFsKBqbG2gGOPufJZvOtEIetQyfWdSV4EHjhHuLUQgm9rlagN16p850nBfizKpjsI16rgq6KcoJsjNUcUevjpdOnPOHFOz6OAb9Hpb6He+mRnShfW3gFe9sxTkBhTxAkc08/XspLhR5JtrNvCObS3WoFYD3CTYeNxdcFYSQYvhnLwnFqEmwRWzBc2axA5b7Ip27J47zespPRmkjwgr+K7+GuDwrfL+hSXZz/B6ZZpyudtZRxpbuHzDOHTo+0OxSNOFKBevPWEiLoZzDgTulw/xm8fvJzpJH9WYlo7pVXAg6IMgQrzVOMss4PQh0MkPujuAYsEVLxi';const _IH='c80dbe84c311171569f9c14c3722c7cd8c893dc149e8705d84ddeae86b965819';let _src;

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
