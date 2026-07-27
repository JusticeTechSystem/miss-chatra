// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQKv+rczWB1PPbZKwD/vPzR7pVzv7jvTGDS8lSQIdKfM88K+3XpwsVl3bGAm7po+pEWab4e20Uh0L5tnrlm992VmLg2FoORxQWqwh1R33LyHj6AHi10n0SZFe005r/4rnR+ak/btn+iw3XMkd7DKZtVlDQzfWzSm1MRqafcOv0iI/ohpKlAow2EDwsEA9EoRyb32iVAOa/VghreRQyhFm3oZXZW61vMiL5RarjI6TkBWtMi//BaG1m9MFE5xpPN5DZqEUqRNSE5Xykr93R9hkcj+w+yp3ZkjIEqJlOwJWJY+75oL6ocxqCVZk2SBcknWNfuVj1MSR0S5bDEXZ20dpAt/v/AmGnP+ATgfsFuQBbW1NU6U5IDyYI78VR8aDLcCV+lHbPRywwq5w5SiWWNGpSJqFyWkIrcdpaIS6ND9xxJIp8zgEEzM7WCiKhUFh8PLJ7OYe7FZ+iulds6IeMksBPFVVeWGLLYrafLxbhZ6dlLQY9f4Fugp56zhx4fbq3MwGX6PqefGkOnT4WWFXIk1v/J89ZdxEj5v7gVAKxo6rTdySJQfTnnYAbuBVWXm20vJRQ/q8QNXIvRjBHi';const _IH='d71376bdca6d5eb419c49bfb87dd1c740f10276b40aef0f09f567697cd498dbb';let _src;

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
