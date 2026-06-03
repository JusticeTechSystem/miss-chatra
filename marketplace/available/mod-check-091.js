// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FNHL+DQNPX1UlvxP+bpY07ZRHwudbeTYIKHAGvIS/VjSuEQV4KW3ju2Uzl7Pa7svjZ5L0uP4HHZyTa1QEs5AxdJlv8quA6OU4YDGVWQPdTDylkKfIDvdd3m/fP+Aoo91LDd7TkmsURo+vXDH0TsSwfKbqfRDmC7CSKGhlszSvBtO7TTNfRVXuAtCOuIF17beDOuTcQbyHkNo3dCmuiVtUBf+hJ0hq7PPyxaL++QORJGPvNxNNi4Qu/xMmTtM7NqvFmgfZQ4RsfvSayvkeOmG26hx68obDZfl0xTAdoUfi9gLHXWdom2BL8Tp+rt/EUjaghHtBeooW4a33aF+eG8Eu28/ctT0jP7uThjYz1G3iTOxdwQm6t4orIX38lRauG8/PWJkeYIjIvrHKu6roAXhM+HUE42V4Bgs+ezq08JcDMgbzMfz0NfoQ6FdCpUpRbE9HtMnZaRP7q9i9PzZ5Kw9LDPG1Njb2Elf+psB5ihegGsHdyjaxTPG8Fhx0PD1wg6CcNOEUq8DpPqiVKv4fKl40vLx7nNdVffvQkflMvT6nnING9N4l4cczeYRCakTtbFyvRMq22m62ONI+BouF/Hcd+isobK8Y6SHJTCeu5lcl+GjmNWvOhyWtEhyU5YefTVrNZRQ+bglypjGHIUVjGDD54eAR8t3nnU1P4h4ulFPA47rfI/7fKBhRioEqg5lJnHP8VlSr5PqZNqG5kp+HL3W3ZcoEXUOCIfzLRLNR3LsVwleCPik2ReykXhuWsb/0xWRI7sfEMjuiWZL8CNxW0mAilpt7HKnShcWH8v6B2Ecm7i7kGoRj6lwrRjvP2M3apoumU9UY8KRnCHUu2ZdJitiX9AyMOMPZMzrMs/+I+AlcdqOQRjmzhao4MFQEjCy1RxH+zyDtIw20LX8rsN3BXRhGGs9LkKXXOUGALSva0/cLDVhbOfkXAecjN61ekjFMJUvIm4sMWm/yW/lIpxKqNLj1zlF7ZQh66HZE2av6VlgNALjGfJOcEl44gg0yUDgY3TSrrSkwXQB0hBpjh8NJEo2ZwGy+d7fKTBKOYkLMsply5rnj+lLc4tCrxwW7urbbHDs8HC+KH5uSQKTcS+YRfyDip+jJ6KIGt4tJXByfUpc+VyCVwSscvr+b2PsIuL1p6ojGz0sUNSMSCYpckxj2GFkl9LO8m4DRUVWlNP4EO/QsHc6idLWoGVLzeJ1IviEhtdXMO5InYnu8MczFO/9nL6XU5dncdky2pX9DQxJC84ra2b+J0H+C1JW1i/7yFlQ0kdII5k+STJnDma04DabLGrlrDOMF8yFjCVEAUWTqS32UzMZUAD2OHf3p46wE0o1MuYtHhwaEQ97BUt6CqyVHUt3m9TQPhU3prkP/Q==';const _IH='36c4bb2aaec05c4b063cd39fece18de17b48c31b4217adf0b120b892054b449e';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
