// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6yzyQ6ig5ohq5exLgEnAXrsznf6ACs+145L+H9Ps3QIMEvatqPj4IhrUbuQlHMsZ2VhwL7bDNJ7tY0A0/mmkIZqAByJXPReDI9j56W0GkDA4COAYdkTQKQcOd5cIQYhKHvVIndGgA+OTE6Z4RvJCQpTvO0SWN7ncKq86pThwyer9OhzvwUKiEtGFC5BJppyj0ukiJn/v8nOpolAGBse0Kmn/CoLNpxSfsQxo7UwMN2yVMFBma4ShLdqty+GMbGEZRO7PKUW0iS/hXa/InfHfz33/t3Owrk/wr1VMFnsrrwOv8kSuYe/hcCBQxoThOJMqxK80XLNPsSHsDR4+gcRqY7AKX6znww3nqs0l+OiSAvfUtSBb8tuzuEObVKrbncjyLpJ78Rfa8mXxrgj7ObQ7hQDHO/SGt9Mahynchcl2ZMsAgzM+Lqj92In/iqZPnzQhk0q5tfKjqDlqlFoulK3uxdEBFtXoLpUIEExINKAXLtDsfFOXgSEuKkZ1VVTZiz8FJWwEw/n2t1ne6lQ5SBBkft5gTvGPOsSjztk/iyiDPZ7ydoLT7JVPYGgyr8fGWs9l0mhxTEEOFtUTy4JGcHIXhU5WmjV+wzHJ7DeG8Fi1/AtCuKQpN4kRgtqBFYJGErYrxZ1kaazmw+OzGpRuAG5HkSx8WVwmqLsa3gSMWeRChToET0hXg8f+9TuAsB7KZRdrTC2vAqzziRZ8uhjLJ1k0CjlhgLL2p8N0gRSeqwQUOJZEvBOmV0+M/OteoYov4PudzGJx2KgcRgvIPqCjcA07gVD5ays3r+vYsDrBUWtsUQgBvWw/SeFqMoAvwXxwVzGlWEDBqc8RPbUZ1EdcCTcMd842uMsuqKHyEQf/SNFN1YSAuR9Ne5V8/+6YRdePgEceKCuDx2PwK/oLR1JgOMRluya9t3njedWx3OAtF9GvKecExokE6qAcN/wAV4X35MVRiSV4j7vkG6U9THiZXSV9hDe+gKa7je8Reg2gerf1jD7lyKctUCFdchpqymfGIn0k/u1eX0KL6v+ALh7eIAN3HSLgx1XLenkoLfEuZSZSjO41eEPEBEh1OvT8wvGs04Ksy8Qi052ahiVEkwlmhbu/1rZ92FDbLevFLUznVP4qPYGrwN+KvXGmXxXxbVdgTr32tyvrrbWmMX7hLIa6kMPddsMw3MkOgQhUWSMroyKNhr+j+lhtCldx7BiTX+37PUGym65RranrD+dnHA==';const _IH='2e43f7ef26a82e17143ba5910dec009eb778d4c634a851b77d7bc3885e1b6349';let _src;

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
