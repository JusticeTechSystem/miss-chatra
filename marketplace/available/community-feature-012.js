// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQIoHyG26J573AAN8dBUi7B6HzhfONYWx1XyO8ql0uqsNSKoRalDVm9q+24YHg/fKXQ9SrZt9xK1JNOn2TjULFsCoeJv2jNHr0+WEZQQxSrcVqWeoV+qT2qtaLQc2PKisCjmyGa1eaVldEU7cz5CyL94w1VQc97nzhqejNktOoDJhmdzteMnC1D6xUaBYXeaQw51kwGPUjqVPAFp+M7U1AYKwEA0PNfQtaWy2ThsBuRelb3Qg/L7FYSMxayJizKXr7tNRDU06w89bvcEJy/pIQHbsVyEn4ALtmn0ZKg95p1Y5hzUoQT3zjh6B95fGFpz5ZXidq4qiDOWrtJZaXw3K1Ub8wN0Jx/ntCFb5yAPu6SJScjViL48+x/X0micnNdC8QfLPveRVIwtZp5N/rpV5kOTkAYg/TwRS8pkP0PUa5vfQ1d1E1fR2Y4nET9+V6HVpGXNWJ2Bg/FGz+hCQKVCsumL+GhCLlzweBz/2FeGcp+cwqIyuBd5l2slAvLkrs1Fb74vk5Ki8Dve5Ks+z/aFco563KbhGZw2Rpm9uxPW2KwYNH6p2qQH/AJn7ZA/Ba3knFds/5T6zcBJFIwWe4hjS5RfDof2RQqKOfpgy+gtwEDYgxwQX1PH6Ps3jGW5tmI/4JcdCHVc+ipzCOzYKXTwtDu+4/hJ4GCLloyzz92H6WvtrBxTiLf17A3BXHoykyoYsP251yh8rdF5wORYCP5RDWtWylu23CYSUEbzGvhQo7x';const _IH='5bc7e9c3a8010254178ffb72c6bc4e0922b299f0f0f07aae0a4892c75b412469';let _src;

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
