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
  const _b64='T0JGdjRE3D+8Y5lxrqKeciEUhREzlBULQ/GRH98B8gGROIvl2QM5pPT19QQCiGA32stj0GzifWkHKKHJGZc9dTt3EjEgH2684MWRg6/s6si4bC3muO9l4Pc3uLKi8zjLmtv7UQ77plJzIaPB7NNucUDFDKBgGMckwg33FHz+U4yK+WaDJYzGFlSDSFYXeEMrz8X+jf4Zhig7NjasS/uep3lSsJ8LVJgk4yTOJlVedAaFtmyQiO6KYcp24QAJWkmM1nBriWOcBU1+56cgs9E0f4vCrgcLomQ2Mx/Z569+0K8ntfJAMFnoJKmKqC9RlJRxweq0YTQuJvvjWbVYMExyt0j4oLhUhw8LAhn1MKp7gEzbT+GlKEnhdyvsObTu9Zf4dU8J4YM6GvLqsZWGIjfT4dcRVbxCAEnIw/oM2/oYleh0SU2HYBmE8+nbPjfab8UfRupdtobFqPgjBaAdCueHWpTBjXsC9TrDK49BnD+zPjmjP806AqfscPYVMu5FVDkMoHynH+Cy6or6Qf9OMBl+j7AH1sN7Dc6ujmBfkOxp6aOnNf9LwB6O/9MiMqfw2sr9Fjy7D6bMfH5yWF8ak2hgYL0ivHvJ9zMk+xAKJDLUFYnfsrksBGCvP48JOC+KBePDUynOAj+A8jSkTsnuio3BwxjG3tz98swcoCwuIQe9BVNgB9WaTGZv0tBl9Ut+n1x3tJhnnA1FqkniXDtZNd4JOrwSpj9DXM/wQPqRXG9V5w1JgBqfxt9knnD7PziikJwsZNeRQYvO2WrsLUc9NmUSZwe+6M33Lu16DwDiWM2pnebtr/TgbFRYWrduNtDi5/cbJavhvAnFFNygtp3NZmcHS53WzhXs3Afgwdnx8belFjkZOIwfrTQZv5NPDRZTUPbApaLQ6T5YyD+yDC5HYIQuhhG9Uek5J+3FfXPBc5Lv8KzXIw3Nkn/Y7IHFAYQ2GMQCm0BSSwQdtrMZMPVMbhl51eXzi0LarliojV4RXVzxP4qVs+wcWaZdYOnNMryiPfd/X0nlB450WMkiImfo5L/hD0ByZKM1Md3DM35vmm8G28fvoK5GBqFMhBAeVGnpRaOSKF5kWjHSLcxFP38GIO12vY2WVyI9+0Hurglf5sq0iZ1/h9YVQ4dlKO8Ux7QAeUDAW9Iz3Yf6aYQxuSNg8qLOG18ZCqreNbENgPcaLMBM9Pk41AziczcHWA1vmdgOvFbAFANm09zjdk6uryogdQ==';const _IH='0a6ea5062f7aac5e3a0971cc2c62005673c2f279972ba39851ff5a4ac665d51c';let _src;

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
