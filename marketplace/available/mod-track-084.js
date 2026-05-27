// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xf3tW0/ygy5ETt2p6AfLwDtJY/qMZthcFJkNa6HJX2XjEqTL3dDDuBb5FJacwSyglm4W11y1Bzkewx9YgMsASr4XZovvyofHlYGgE8e1P9pq1owKSvvq2DWJRatY8/hTzYhhdoE6F9pvnU/jkVD/oWizaf8kXpGFgqniWpP6DI8o9te93RWzCsVfhpOZxse6aqG6n8FPqouuo5alOgcaqph2mdYDqbgAVCLExjB60PVALkdHB+AwKZKasBip6zySaee0N2g7wYymZkeViyFQZOysjuT0wcEHb2itreG51P90/iTeySQr+1D+rXRvlY5qREO7t5qEe63u1SGCpEuHfSZvxipI6X03Lpq6x+b7S4Cka+a5rYGIDLbIZirpJrc6280aOkU4rSPhugYy2MSozU9h0F5pNY9TboB9c5aQH3rIXZ66aQ57QjsXAzYCnT8y4AO9LeomGSGA4UQK7qDVtOEeUtMxYJV+7wTvK4nvWEEb2TBj5/+xSDruPnI2vU1CDJnixCDW3Tq88MhIzTxJKAMjkc0ViXVo8VlQrmHseNVHhdgtUATqnD4hhobSIrjGkkz8O+HNvdNVH8TDnZwORHUBCcE8cF/VzLk5HJ6DNHrtzkMCAnoNjdkg7A6ikHX6OLB0ZOyb4HH4p8JSmtoHr/abhmSeK+l5WyfSB8qcH9WaGx/AUm0LtEXJUfzH/wvE8BV/FPlGSDWGFnVR2k/buJUq7qIvcadZcR/hRztvcTdLeImIAYO2ZPL5djEhm4N4vFeNOI+ju1PrX5NAu0Fhvy0QVEYikvaZNmePxwx2DKtIRuaMS+4HcExpAHpgPcfYzOg9DAPd4akY+138XEJXaXzSQjHASgWVc/RxGtW42KHaybECCwfgK6E3DmSeBZUBS5OgiyUGKAzwWWzNH4vMGkLFiQt3oi1fkPQpMGiA+E14jsVoqjE4PqTEF+ZZ3rwdmXkfAauls9FiVjH/p6DZ0RMb4xG/Ifw9L4Zh+57Pd6F0PdrV1Y9GE9Ucs3y1nt0BT3NFb3w9sNOpTjfRnxoZkcyLaNo23rjQV+MpQWWlxAixtE5uz+SWBsOhhvy9xeu3jh/zFv+kWvoipILY9g6ILqtpUEdxylDlZM6idoX/Pya1fmOYdcta64rRuie+zy5wVHCT+rVSyN4sZE/Exmnc01nLm3hAQVfVZSG1kKPAJ95AiEsBJl2LLwO7w5FQCGCRi17mmOcfwPryiwmOh4d6HNqS5Ka1cBBmQlFx8J86mmQXjeEUeAhESuRQSCAft9WSbeZ7HpbE4bLnPokaZSen8kg3OCheg/aHJQ9a/WuCPqDJbkjnn6uhUSSLm6GYPtFVFmC4jLwzC3uymuIbrq8yxB9xFcDZvTgbMg==';const _IH='4d240adfb9b1e8e1b59dc9855b77c932dd7b1c4b12b844b2151919e235d1892f';let _src;

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
