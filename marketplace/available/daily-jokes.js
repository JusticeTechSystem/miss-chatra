// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lv0jtr4eVfZeNFnQg2EZcOFj2UJB7Ar5nJ7kVfMvDMkj34hIdNLIIv+HLC+xocVw/t50wNMdokomvkM39iv1lOpq/DoTggLkfcd39oHhjs7PUZVEAfM5xsVLQVZTE+F3PO5SAmyCggHyJxBTLBygYajGxruMVhPxjX2EicvMZfUdKuzFb2QF9S3ja/Zbi/SOGkcTKkqHR6dW1GftoS/0ipH6KUReGrqlvwn91iIHaegDucam0cCb8TpFYwVs0bGiqwW8k+sa7ZG/UDLUIH3XH+DXZj+i/289TGfmYKZbEudICxYhBfV/NRPr2RVgMj+LPojgmYc0NiVJqmZdncwkWMXrQmJgxfDYdnf6jsMliVYwrTklpz+Tc/zfTKg+OCr7FVMkJ/26nUNyBEpgGyc0K0wSc9AcjlFyQEqy9+OXPhKQDKcpyW7I+Newx+XHd0YbVOalGeJ3U7Y57QR5nm09QfBHvelWzkBlwRM5XdhojniFWfyPl8x2zG2Kce7EteYkFviEg1cGxDZRfsKDztHI8gGAOsJLAuQRe4edLPmoonnIvOqLU1XKI9py9LjTfQDnhdc9IQ3/xKDUgzm1HmSGglJVelWc2VfrQC7r20UnWZXkrtdmBXC0KEEhdgr0bl1m10EHrvV2jZuolm1xLDwPR4IFk6FqyunM4OLrRtyE0JXYn3vkM8b987693hAZXRT235vGD8kZZEV+eXc8aGDXzPUBj+ZqxVSg4W8n1pa6Jucj+cs31M0xrHnVplMqkj/cWvmu2anFCRpRa4bmlRbTNxIes708ZxFfQW1TrE14iTZC8QwmhXbbN9MSp7gC4KldpOTxFkL/H1hRUoPN5NLbAFrVWbbZcrsJS2NmHfx2a2PtQVMWXbSBW8rwvx56Sn/3/+0MpmzT6Hh4zi4QKNv8EaZr8ZRWHHsHpKITb6T1wP5EUA7Lnko6mo6+oKrwzK+Vi2T3ESHalrM1ip6nVr071cEZH7NiOmqSJNbVPZgSZdk7KDNBl8EAK6nkeoNE/sYoF834F9zs5JYgzpvkVLq/AhFKf7H8LfWHTWnzISHJHmwAko9yT1L/khdLnOL/5xzLb6crI1r1wbsft0dqxGBuIqefTqVhkWKTcUA5seaGwYPfOKORlzDYNuMpjQSHWVrLUwfiz6mk4DSrDsXuKiTLWDfcBWMCtVZbmo47xysVXxfGsfQ+i5FS83lSF98qFTa6hvgq24qBFjZyuw+/hzXgGJLB9zJpo/8L34IzUZ1STskJobpXjr57+RAbxzmyQ+nWPgLXzPIATZwgFqZoXPvH/wi4YnIc+3ZC9r4A5JoEX159ngoH6mv+QHZGQjwmmHJU+u58R9nIOOgK9TolE+e+JJpBuNHW6o3a+CU2pb1s8X1N09I9a2ngYe/f8csOHkJHrwuIoZKHEf951uXMTSTIb4swSNNUBQu2yK32aXMiarCmzZ/mJhDGQTdvcQOwYln+Ecyy83XtqZq6K9wGFwGfQMr4tbClKQnwoCK17knTFHAoscwNUo5bfDbXVVzfEWVkVVn8UwHmRekY5K6TFNv8fDknoD/B2B8CEnJ6LU9z5cPVp9u4kAv564Ie7x4YX5dL/LgMZJTj4ArYzSLRrrdSyknjqxebYYkIZtNekwDLRk7Rmx2Pf3a0xOKOj3ZVU435RNS7ZKFng2Av8HeulYuiuyDMdLO6c8bgSJkXngyqD0UpsV+BCRzsoZAMejJjIdXg9zuNGYERMV62uB4LVe9v+bzcLmAd5aXTPA6C5vHlAxHbNanTqcNkxKHpxuIE8x5ZZiPZlTz695I4Rg==';const _IH='1b6805290acf82f0b42639c5c527bf71b25949686fc49579490ec1a86829810b';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
