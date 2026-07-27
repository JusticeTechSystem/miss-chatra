// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQsbrSzCkR3ikuRKf+jDWmM005oncvBop0EKVdyXICAaA/6ZFUUQSsGiBUcASKFsthe6dsH8Rw9exW3breLKjLLpWfR1ETjAEPCG3A5updC1DUD4AZVp5OAW2daMUGLVTJ3RTrZzwLh1MthwkMpMVdQIEiSZoSzmGcOFzO090EidUCzPfTB7HEwYxyn2cwkI+k7ItN0/BAANZGkRK1j7BRW+xLlOOItilGZ7H85tUOlT6xKFvhAcascrjcAcoeYl0ftD5YIf2PwdNJfoxUbDQqgU02Joi2pTvm/remtUEWN4HK61EKocXjpzhQeU5uy2nx54EbRItnMhYGADnTrbW3KGpX3UYusao2f3XkncDvuWAnn8mj24bvxvwkh8WHSE+VAxie6qRbR0132nDDpvmIreGDoe861GoUl2A/a38oS1JW0qIGLMLP86fvHT46EzdHEoTBPK9hGX8owEvrEftTNxGjDcnZR1VPgaVlWlNxE+uVUYXBmFhICiG07zJGFLAn9quYA64LTJyTk5bJ3QuFQeLQKmkf242LuIgoQ5fsXfnXdv5IzXk+S7KDjmIAD1nicL9+Wk/gUSBUy+oR0y8miqdvIVfhqjjxtyTZUUbJAGUUkp1ie2P2JsHlM3OZMLvumHa+ZJMchx9n2OXb+3CnnWj7NJDBSJeidldaqlaaP2iTT18SjFrOoogdRKJTxW93V4/0Aic0S0Chfj3l5OQhe38uacr8wdF+CB4sZvTgTnRHKIFuUeS/OH0dQhMTLG8mYpicEgojOUfGcIYiZOTMD1ifJZPbkAW3s8NMwKSuVgPf95ACe+RUsm4Z9jxeI7wY/4uonePKtoHsaDvv1+pOqU4Bbw1SGqRaQtZjeBTi6z6W11hK9mRZmVsiDVz8ybwwQ08J8sei1ML/MPYhE84Uu5B781WafcbdzyA4qrQ/7ChkMKlRucfDs7aNI4S/0oB2T4f9as7M1jBqiPd98LiOiPyQSNNIEGxv4shiHnziSlbfCKI5ewe+Sqg5wPborriHQr1VdsZuV0adhSm1gU6AQeYECxwHc8UqCJWkQaT8bPIs6vkPYls51ZYuyQAv3turff+MdKEoy9fx+nalMev9N4t+L1trB7qK0vgLlYOH8okV2tlCU6tSehF/N8+ayhZAEvd+1bsbsn+2jmgv9L7yfsjAaxiOQ1VXgRVia5BEmZNW8XxTnUs77pOSzGN1HRH18bPB1BgyWvlPLVcYW';const _IH='85d9c97d2d0b8794e711861e44d682e84de3249b7f1763001e2748be78a237f2';let _src;

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
