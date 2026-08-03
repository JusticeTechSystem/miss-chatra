// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTvTNSIBDeiR6A1bN7pncNheHrJn2cpnOYWcjbsCne51qFUKjNhTcNRBjVzr3T3foOea//+8xYNvzs8ZAzgOia9+aH80WY9pBjh8gZU5pWRWF2fAGjuuHSfZMFzS+qyNscD32I8M36o2AeJLZc+dnGCO6tWz4rMyexOGywiUsgXwU6zMXARrcCjDS3MDCnpOzD4I6knirg4il76pAYQ0wnd5nSc8wKVUh/AbURDSbjl5HoEH7y7DJfRh+4lC204w19d2UqSQbWoFaegfgPNF5duTkGkO6VxzUS/1CR7Y8ECDcwP8+ZL8srjwecki4rewXb7JSMUU0/pU66ewA3V2zWvRzsmTXSFF7nm1JRSSLDVj/DfvtGlQDEjq7tOoIvrBMWqKj2awz+/H0q2kPOvwAlRz5MN7GT4pA8vJUeBVPbL2jF7Vk2LKk8EsLEaepVk3cbwr6GwO2rJA3BG/95s8k9sT09Mj/d/5nYdvtfCtVhPWFNT9kevAdw/xgKIblOL+VuJwlYrJlBs';const _IH='059672c53e0025e584a304498be23369c7b5a3aa3aca4290bbdafc5d54f84cdf';let _src;

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
