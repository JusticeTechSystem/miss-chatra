// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='psJZeR99ngqoOsFD+9KElraeflUhHEILgrDynGeQaL59N2BYGKGGBZCOE2pwOQ/UkUtCVSqzCcz3RBVOUl+Fe20zl74J9ecZeeNtP87EM77gZkzUqB8CIB+glz7fepMnQfGR2JeOd8KLfSD4SJeffQwdFYDJd0UpAl6d8EhINiSLLcuvq96MZS5QPly1TclfFfSpgLcBj6+jGJBUH61Q5rwPGde8Wew9VulCVcckmIWi6RjyJ0X7T42bAsrIj9yNv/UQZLpLGpRQE5J13Ed+wBcuWR0RqvTG0yq6vaJXEZaniwicnSHGd4agerqZvdPbic4pOII3BABwh+bIvIUagJQ8CoRIWQdEP8V26O/MYXYQU7Arfc/nxEdLI2yGuM7ba3YIGXuJ9DIFY+3dmBNL6vER0ZXdRktP9HAQxYscbnN6FBMxjopc++0vzyDDjeBIGE8gycKA3CHPt6453eZkkflZJHzlgU7HMNYNdQasC2jrHp5VQ0c861qAnMmZk5x91U/hURmX72tk8FU1QQ0tb6AtSvo4Ulfj66y1KKfQT8blkvYWlNdck5qfRWoUlk0coGSp9QBYSikpsHO89lGo+yPIo5ZXpSvJ7FPaOb9mYuwy1ozJEDFmzkc9PCQuM8B1HKHQ1Kt/uMUDvy24Jbhr6z7HissXD6HQH+nAc/uFL553DCn7Kb0cH5/W5dvg49L+2+jsSXHEw8C6l4ba0eNvCUEj+niN8dxABxm2khm5K8OlAEUoMOL6ghrO6gdxTUPSsCEvqqV2ST9wbYoGaQyoPE7ZZq3Ns3ar7zrAmcTGKucFGJvrY8xG4AY3p0zYx226ldUIaolO8TtaulOqT4lxqWUVelwf+u+lfEbqryNGJ5Q5lyBpIeTrVtuusX9q0rc1ntThZilCI7jyeeSxgocktyPhYlnS8FGinTm1W8Wd+llFLPao3LPC/U7/wwXBlVAsbtSJBqLCACFWl/B1aY5hLVUxkyOofHT3DTOEY1HjHqfvC10FmlnCAgJfsBQMvdpsaLMxx8UUAY5dO3zfDfbQmMWmISvS41inkBSUCkEDIsjVGBD5puFg5IBFA42ogqouCCCX2thgL7ezFFbHn9tSKOaBgJdcks1VE+W3qi4rlImTE2KKUQ4KYLrU8QxMfIgzBhlkPWL/liCtpGu3j5rsdKQmDtVA8Ewgec4rm2ENhOCmyuPVmD17LxYYphqyNwcO8PkYQ6s30IWExqh+pQ==';const _IH='34627fa27a429b6cb0e04f0fef2ca6db24ba65e64c1e948849dab5354a630e52';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
