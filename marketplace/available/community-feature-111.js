// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qjkfXh1A5nwdgRGa1F6sk4EqBwNvos/XH/7uKgg8rG3vgyajl68uLOmmgEVL/eLT5+wSv1gtIgNiG5xJHxMm4ooATdgoBtSqp+kgD69kn6zGAiQtnY/rU8Ads5BkkPZGy8JnMzfnY+PDzrioct0MLFnWhsuZQoEBdfWwCRsiyYymXucNCFQ+EjTPdT5YbuIgUPcnkWqVFcyXVMtazjZQ/Cl+AP64aftYSM2nmYnoUWUciL4hQbzXs5aUsUAiASKVhsedwrvyAAwCQ/S6ckEDVz9aLoHsBufe1tA7RsUhBJ2HO5fYPzER6YQSL6wUwq9n+uc5TmdMhS1GB0jLxl+xsshJOsPR50CHXwwlw+lRwomNLRU9ybydkM9bXNiHGMyIrkOpF6hgTEIT0LugKFwKSiOX2xd2BBvq86MZHiKf0qied2m0zDe2o9UFHxhFi64vNg/XZUt3+sN04y7iAQsgXSHg/F8CsRul2wW7ffkzTK4murvyNqo/jAPKF2HsXrz3+a7qqC6+dAGyuJiFc/eRQcZryqS05MeeNnDN+PkwJUwHt477KQ0oTTFDuhst4Pxg9iZuXgoyXOj5G/Uezlehp29yOJyVbYuytIwzW2NpjFqdzdtSckLqsQK6opnEckP1kNa4YyXCnL2m5yn8acyNlbcu6NyFjjQkBxwMkeHLHZC8nFwiLvACLtoAIax+p14+Uw594BbKgQNjvsrLyucmRj69cVKKSzEW';const _IH='dd6da3eed003551115d40a7f9845fee767e372aa54b1b50226da4b05387341f0';let _src;

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
