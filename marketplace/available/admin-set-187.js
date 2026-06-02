// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gT1wpdTRbK8JxC1QB0YVFeR6GUcmHIn7ZfUo2X0IBBQucLZuM84xh3ybP1/EjfMVMrDu8lRQ8n4Pmw/kH0wPbatef+B02mLbcO7H9dob6hbkSw1t6VEtYneKnQl00+dM3/+n6xGrCKQUGB5pTnyulSLbGlMSg4KpXES83ZDnyki3zTBv6+UNj9KThqKJMyLJj/O2Uusf/Ml2L68XVaynywMAVBGzDYI/clA1HN3UInqfbvl7Edyw5KSHSuXwMdvDaJMu0byI7nfoi3ev+u+mf/vX25wnz1UysmR6IuETRA+bRgUm8Ol/8D1dTb5a+G5bRJ3PfngQP1ewuOT3lklZkBNsqWHQosuYn+E4npHVoENfgk/2I/PS566b44KMGScrJI0UTewC9xLRRO667G0o1jFvGy/4p763HTm14HK0GKAIToSth6vvreEOZqzH8h9r0WrIEFoA6Rsp53KEzpAUDMB3HWPyXtZXu8XkSR7i1gNx8+v6HFqHF0MEhQsnuqQ5i5YYo42R4kLfITME6eehVmfDc4vzY1jOe1y0EbW2MQTcwpXATLn89VA4lZ3uHFvzeUL/FCrm6sciGugtjso34qJNTzMhlxDPs0Svmgayn0vfH6bGmWfNop1/BALMt6JzQrQXNAeB2fYeoaoqjgz3xH9LdiZX5V1CHIV5qgXW8jUgOpqA+UoBkLnmb05R1I1T0XkPj/7/AdT9Kd495ZSX2ccc7nCfJY04jqnEnTT+rZFZwF7bRuBwSK8xkmPnNhbdABhnxDNN1N6jmREZSF3NoWcRK2gR6EUZr79Jzr8kQvJ9iIWxqSgJMlVrlxpr/DsvPVukiZcCK01O94t1Vxrbxc6YHlNaZVyV+mzqthfng8lfVoUXZGSHZsnUPV+E7KzEQTGhFK/7n64lS87HoXiYK2IRDPCXSA0LgkClDx5eqGM32D8Q0fFVXlZpScFYtYva5fY5L3vxsUGiO98pCnpyArSdsEQIP1vN4/YYsg==';const _IH='a49f5e84742be334e2938ad48d704dda2f630c1a0a6a6ee331223b308c8db608';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
