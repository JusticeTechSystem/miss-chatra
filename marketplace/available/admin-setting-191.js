// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cL0Mi+MQyDR0XxOqiEKMSxmKPPlOAvvBTkQMLG7TrnlG4Ig7KVF9ccEiiBWy65z9kEoepmzYCVoa+xA9YntYpgS9g0SxgrOt0OQEnHVNelL2XuGYY6jSnkOfGeRVkoGPPzgnCzDL+8ej8iXLYpp5Pz98XXILj7R9NP5gyhJndEVaWx29hXKoBrupCpO+rl1CcWALiPUVllW/WZrVBJ3L5alJksQr2ZDX5b+CVa7NsdOwQcfQJ5fCjNGN6Yyv5J30xDO2TsVrObf7NueVFAEr7d1TjVtLewhn9YbHGuGqoUNbLJRG7acyNurjqc4Wtvp2KfUa6kpEoSbNRr5F4gsPFjXddzhcR3lrRS/ncKhcfHxhCnWLjruSVl351AqLiNyUePeKARpO8BrLEv6orPYCPp1eeajAFKDdIVeskTE0uG+trewRvMUcHsm5ruKQuJMN4PWGe6UZ48b/2TbolFXIj57XvSusI9am3IU11/SE4eUe2XpWffu01os48PT4dbCdaa3tCaEVCM0Un+pS7zTFGvhSUPvZOO+v1BK0s/pRDqXKwPE0PGgO7JCIdVW3yZVZyhJmpcthpE38jubaVL7JByWYHUR0UQ068/4HAUm0hT/ysa55w4iayb2NPyP4F/+RVrG0jrjc0KgcCUP1YC1bvfgFMw7T6P2HFB0wLXSlfwKhz1O2kDJy/uDfc4IQhTyjCcJxtnU884oiRzuj9QriDAh4tm1hAcupaRDg+WoKQajqIa0Ru4gPX2F/YL9AlfA9olJGwQEsE3tvLdy8/TqM8dnQOh1Il28gKY+P/i8T1Kyc1cF98aOoCaaHwnTBhgWHSKtqw+edBE3TYKSfPyYnQSupBHM0qkItv80zovLQv+imo2ytEeTI//jLyWHiI/4TmZd7uCmw01dc642hVPqGRB+RwCOuK1xhhgHuJYb5+P5oHKhC6HjMXSZvhwKTUamF+5rsP59g3LHnx4cBwsS3R/lSMMMv1mQyATRbFntS+YKIp92X0SPRedAIZhfqHcdy55oxLLMyZ+s=';const _IH='05a2a56c311f45020bdaca6e8a7df5d3cd84bce52f39e3a414221590c582d609';let _src;

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
