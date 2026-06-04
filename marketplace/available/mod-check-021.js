// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p3Sl2OkK3MqLwzCXmNqqEmHlYuKNEo9O98X4kjgRjZILTpaJcr2oyAdHVebl0o+rdu1wtvHb9Z2Gb6utqCilYcgHrf7YStNI/CybcZUrdQjd96e+V7Re8rGPaYNGvcLEzzg6kFqFUkMa89VwlnPCzsSPYbivAzC11MZ7HtqwpfHGrwhYElKOQfluB1OQar0Yo6GgE/SZdISK45QkRFB+xjRhuZmAezJuLcTSWR0ZnECVopNa4pb7Uq8dO4DS3dDjEQoKmbkYI1bNO+k7pjt9ANVF3VboeGaYD6Lv5VpJ16XPSGaNzjqaI3N9kEu4YzUjrF4+Le727YxcrsZ47EcWIALh8/ZQheB7riDqXh/Wnk8Ty0y5seiKeJxxNmwuyb4vC24hpcWq3K2UGMfiqFnsWw2yK/sJqf+7N+ezGj9IXKJOuyAhNmdmVD1WZ9tXila0enUBednb1DzwiWAJPzVjh7lP9lI+8dRFdEeUmjJXQEOOmyq7Yvh/BVrdSEIYY2Ut2R1oymtIODp+6VYWB1KJ+7U4Ms3kLpqOhyXxjbOoX22alN4zM4/EfYLGW3/U8i6O3qgcSbiM9bKUArrCNX3W8+vY5Wudq0jlcUNHRHbNy+VEGFajZl7h3XYqyvZv3TLVhzwaubqe2KDNnpEYQfJWJ81XyP2ctbKAn+6ZeF4WDMEhf+Tb5z7JDbt4pkOVf44YE+LsJpbPiz9JTCeLykp3zzh9RCKsBuud0+lstw62SW1nhdWqC31WnzzaoXH0fPN7h7cuzDYP1nlepbesVMcCnoeb1W4T/OmT2gPy5N+1uxuvcgv49f4lILAMYKiN0hvvCsUoE8/d4o8py2JcIlmLr2qFgnbQ7d8TE/Zg3vpH2A+C/X1fJ+9+3/Mc/7xUyyeiHGhIk9ryekGRgzf4XdhMI3B1F/qmtXGfHJO64JzZUzRiIKWd/EVA1S2eL/VGVquSiKOMgDhBU7ZbGf9o+Upn/qkRwN8aJtv3/uKmmxeP2jVNYnMFeot0reJnZoVccY/1vPnaCj/EYAOumghcRwbGGOFMMOZ7Ce8eOHVRDK6MgEPPZwszDj5yDWYfOFvZgKo7nxx7Wcw5xezdviqyo5SJV4Xk0fVn2Wz8/hRXv9mGidEjxeeHTjF9BTH3oh/wNceqC4Ss91wUCiryGW0cukAXWaGHXUv5IOGDwdMeB0XSU19ubRwSErYYqmWxVwcyCO9Mi/Wfm/resT57kRms5dadPnXict0e05iBDAJlDSZNWx23YVgGo8ZL5GQ9KtHEPxIlwTGE9mkRzbrjKEUcK3zCcLkKmN/nATDQyZpbut3IaNcjY8DFkFUc0xqQjI3AIuxasAOqPxF5wkvRIJM8OWKf6ASY5+ZcVAlz/A==';const _IH='b9244462be3f05096e3d55950e05f6274dc240b2a0d4caa34f1e78a15fe1c87b';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
