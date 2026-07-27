// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTzKO3SlJXtafkZVaPm1+w1MABJKjgz9eGrhimhghWAOR3tuyH83xr8HT7MsWehjx4vSlA7QLL/g0+UW7ZQ7p4awgNaupkWKTpLQtdPIvUMGk62ku+QcTh3Rr0A5sqTxtgQYnj6PZQ1IF4JbS1qpzshg/gkSAnLbvNSm7PLGdw/Dr/sF5DmOii0jWT83Nj65n7hoMqvexunAJ5VTfI5W7GJWSEIev74rYTTZxMVO4D1h10qo/9MMF4v1eUD6tALckQGQS2x7F5qeYHhEUBdaY0MWWoKm/3wj/L11K4d/OBUQR6okAUy+9g04X9g6DkfFphuFLaauadWSc2XpHI7J6UOhOg4KclPaBkHwTKm5TdJRNJrGqJHlkbdyuxE1yjLci1eKevHkOzpMpk67EnDEO5tAmn1+Ez0YKKwUahjWmPbX6Fiwjp/gNaSKr70w6BcU/O269ft70f8xl5i6a9rx5FF5kXAUyDDisVabGJSyXwUXrghfFpjr7Vh5c1Kyk5Dyq4VIHevvu1rQKoLUEWfgSzU1Dr/f+dmZg8q2iCPLrU27xlJ7IDEv8K3awT8ouoW1Q3kul7Hn0w/Q/XKwIK8W4HkP1YiVgYmhpcTpIhxFYLDm6DQifyF7aqVJ7uhbkOk0cQ0xS6gi2b1AUk97Q5SEzlXpHNHdjAMrSwy6XOdC/eHExRvUhVQQ2iPY74b8HIOW3bxxy0WQjLZ8dzKbAe017V0scztyw==';const _IH='49977818eceb34f04608781bc4cd3a3aa4b96cb06c936593eccc300a37029323';let _src;

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
