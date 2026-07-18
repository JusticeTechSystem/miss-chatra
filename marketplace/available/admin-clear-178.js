// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXK0/7XmUjjdsLgfLfGCFJaNeeG5HrFjd027DeLunAk2ItZvJwVy0bTP4SwznCZxReK0budkWdPlTdJYo7TYs+RIgbPrbhiR54sO8k+7DXLe6shA2xeLXurZhcH82eP8PmfSxFtE+2TgyXMexpCtEWAdb8G5havG+T50cJXnQPl8R2z+7CN9n4f68yKhgVDu9S9KymiJNa/vAaK3NpXr2qDFk2mnZJAI39vBvJhCwjIdqbaZZ3PHxfrSbykumeacUuVsAQ4YZsbd99XPLcG4B1Jzb2saMvMxMHRtOji0pHFc5kodZX2JPsdzL5Ulepa968BeHVxdU6Vtwkr7AJk8A/kwuplWz0FpQmOz8hX+YVjf4VfqFyqKw8090yI7HPpubdBS6gH81vja+eTASpHVcxYbhRJ2GQ21NZhK5xSPkr5brGXqOAizoWpu5Nu5onaCf03+Ai6vHXxY1N9Ek7YVvVo01M7ZToyWtJLyu+boQKfiwICZSyKoeWsI2QGRUv4UZ2uMKqelxkhNlYiHZTay7l6dyPBLZsbKiC8oH58ddY5+ctyEm3sL969557cqvT8dU7aqsT51ENg5jY4ZHXSatEK5AnSkeb60a9oWArEab1LnEPgLvsIR51tEJFuoySTE/S40aAEGZL2ip5YcKkbu/ocNIrHVOLF9EfiOHwndEZz6O/IxJo09UicFjsPD6UZSiT2BzxEXGBS0TXyaln1OSDvU0xdwahqQ/xqm0aGhtN/iSoS2wVIpZuZH0BqKVG2cjXWA2yvhlAXNC2HSF9ljrsyFBsH49F6Xm8OiyLvdKpPc8dJCpTWgTMpmr8xUY+2Z2et6JIzmWQEQ7I5WiQhMqzp3DJLCbH8/4hIUvP3j9OBTLl37jeqzErKAqigTh7EWtOQ4AUcLqPDpYO3hondZf6QscbdzJrKrujtH9xAz8n63Ydt71+d0xkOxQadulafTOKvaRuOZILiIR6s4NSuFpNt7olCMzcwTKz/H7DS8e7ErYnzOLKCJEv1jQ=';const _IH='85fbc75730635dbf501dc1b82d5a935381aee203586e955ad4306312ebcd8875';let _src;

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
