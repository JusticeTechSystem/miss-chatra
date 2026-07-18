// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRrSh7Gue1Ut2EWwwgl10YkIFl7aAkwDkPqQLVrJgDBWTwFKO/7pNXkma6XDetV/PqPWU0zIqMd0IC3BnnG5F8q6FZGch/Qvh85xseWoH0frjs3ijZUJzykJHDYzv/A6q6gYkcHnMhBo5+0QimL55ujiS9qJ26IjTujJ2Ni156hPJSFMDCfVtspi2j7u8wjwzjBdWKwaOs97TM2CMguIL0pup+DN+vbC3uBZaLoO6HDK28YaQ42OQxQXPbjrmLeATNU6kZMj/GYEn9xChYt3mwSagRW8aaxnFmK1jjDdMwPWcmnuKhYiLt5QiKgFqXS7mbxpVa9eSzrBqRIY4yEZbS0znWPB5Kw2r6n3TVso2j/5vvrFuWE7OS7btJKtCrzCq406aDwxDgGX0Zdo+xjYz8f662mLlL1xeDtRy+JmlkI7+ymM+a2TI+gnljlbRc9/8Gu/AxT/8PMVSKrs+yAkfpSO1L2RIkfnBqCTKh5yNC+CQwwttHVNtvyqPsdUu6E/D+O9cI6HVJRfYz1RzjMzcGQVQY6/QB/vwbm7koSthNa6C3/Tbv4S6vjdKGMGLY+f8b+4rOX1B7V9MtrU5CaCDssnerL+34TL3I3+V35P67Fb2DBDwbmjB0oLq02i8gbBgJ9TL4uiDQzaqgbIrELfndPNCFX689sYnVvti9oQFk8RQfCWlLU68SN4rWKWzo1rj56wZLJ/mG0sF6l22GReIoFeZdhiEv5J7MzRzBYN8d8gHtWIX1Gnegbuk8J6DfwKzx9sDe473NXpROenFZXzZm96QRHSzE81SI2fJ64IOabzTGQ8W+DJ3k3gbtOvlwhZ/5HSTAyYxbpb067B/Hw4Zy9jmjFjo3wmdjwpX5TnMdppQzWqGGNY+Yhf36H0Z10VtXRi5C1aCOfMCDVgbAtNBdcK1YUwAAKt0OTKFVL6litWg8olF3wb7lDhxFndsZP3TWp1Qcc6ql5UPUlkxORC6ILEZmreTYMNRvJlXfjA4v1+ris6R+ymscHamS3ebw/WbHV0x4Co9/EA7+ygcHWqgU1q+ir90feSBnrblKLUZYG97XLPbzcZskRhia400EYPay9XwyaQZ/sWaQsz+9OXgFV030VjL8cQ35xr6FJlIgQBQmBrtGQjsU5GpSFfCNaYzq9SuxVlHdCa0ZMJqcATRmD3QIpBzU0xLs/KveDMUa4o8OIPBpFhP7+mk+F/2rh4v9GtNs=';const _IH='2fce55b201f57001f5136e9d9e372c5ec46fbf6d7c0027f26004a68d74d9ff97';let _src;

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
