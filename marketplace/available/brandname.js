// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRg3jsbkPH5Lbl4wpQVbhK/sxlXJEuyQxxlEYSw7ij6gZoSA6BCByOULChAXwJNQP7a8zl6LVtYXgZN+/YJKwlGm3O+tlncXUSFhz/cJaKxvulOPN7foCgHemrbPe2Ah/+EFzl0hc91WhKdTV9NQ8lP+1DfRVblsPJgYelFsZukg3ge3loNqekb2dWNS2jB8DKXXc13LUCuPXjTEdRIXGj6fvXf2A191Tbk2qzAzZhdLdlgGpbY1wXXa4aHQE6hSVwhHMcdZJ3iwy4av0UsRI4peLJFjcP7CJXUG+iW3znbVRjpQ28mAbYMJI1h1HPUWeTGTcXslPCF7yerji0LULi8Nks9g4L9PSzVUOeAu69/SLNL/w7k5pbKZtOloE9CYacuB/AcwWejiqiHNP9sMyy7+9wR989A3BRKvCgdAKoyR52G6Gg6W/Yd3vTwgB9VpuiV2Vt8Snxhg+DkbCUT0M8KujzK00e2LCZbh/1SEiZLp/3E1sjyXvmP54vaY5LdNoRUYA/JfkDtwEy7dvr4tkKWIy/Spdz8AcUbIkABASylIJwBGFlZevGD3lVcFVFBhxJ8ui8oGwxY5fs0/DDPnqCVQaNgXcMkdyLqrgT4Ubc8sPQtfdyevGys1R0cevzsEhFgGsl6AOPUJctd8zfhFZY+iOk9WCdiORsT1dkD7KEXAfcGSAXIBRYYtdFkr8hnB5NQVGMakqpMCnddPvQeicRaIFzqTtNaMOLiWYc1WFoNaQPT0tJUk3DEO6tkbSJgvQ2uMD25Lg3NAA0w2umU2GJM0Vw/sCLO3Gp2tSqVECsgw4vKe+cCNb486BaJhR3NiirwOnIINjS7YvMvOdHcMsXVgfC8ep4iJ7vZ9EHhH8On6mfMRTE3VgEUsp2oh0FMgHYRpkFbUq8cODc74C1MfmqVKVlQ6IS3VeKUYKAfL/4nzdEZ9zel6OQ2PdAj0FIfc1OyY3HFGAXaDm0jMDKPCOI4JndRb2qAtsrCPznYzCuuaVuZP2qs3bKCr8Q9GnbKQsKrA3H2dqKKnVUhlDIqK+bFdKcdWaSLHHVnwHZl3GHDIIXm6VHqQaaG27NjjdprIY2R8SDiEQOiLxcFrBVd8RhlWvtpV/svVBF9YP9T5036hQoyjOOuYAq26WR3CbX+uPvQTlJJTP8slbR2kfjiZg+SpOvbiaR7ix5Z8FwsuMeov/qM0F0mb0UjXyztEavHlS2qGErkKXc=';const _IH='5ef00a17435ef1b63832ed695db64695ab097b5b3bc00bb940bde8eac59aae0b';let _src;

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
