// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQWNSPe3reYuBDQW7Z5DeXGU95kADOD0GkCo6lu1aVHgUXDMVibcO1L4tunKaqC5wq5tr7r0TPfFI376Yczjjr2i69ZYXEjGd4U4TuCERDkscnMc46KyldBCmd93XTWKrTlO51rMIo5NmmozqGUBfR/7hFHm7SfbG41ISUoSe1bxK4WSDalpnSZNjnPQ+kDK/qU1sZaW1d0ayYyMGirF7yx4/3DgzU3MQKeR7VvuGMfZRIMqSFAKaoP6VO2e0u5HCQTMG+0biw8iF09Dzz5h7OImxjU4eVc5NdalXDBI1+GrTXY/TcHodSM9wGiCg1lSeFFUPHRy+ee7InFZY877ajPHXxinjYBrTVvxRUq2j90BtQgp0tctk/9o6ppi5Q2mX0B56G138ACkK6px8ZIIyhjuiGTEkkuGhZ6+e+J5JF0DJSnkLRu5R4Y2FjT6JC0QbqHAKBz1z+EBmUcWgkCx+GvKtysmOP+tquCv1iNL5lCvPMHBc3J1wb2SSqtm92pJEiaE+4GEgHoZUZdV7BjwKYmB5E26vkzsff6/K5JVrd8A1v+WVVT4/3OPa833hRhHsfNQSVorLK81TDqXXmXEjP0ts2WB6usrmNaigyZM3T4Q6ZOEIpvp8FztprgabSYmVsSUez4kNYYmu7Wkx412huEXgxQGqczav9tqOcHoTLeAcW0JbOmd4D1UnyZ7H9ebY/IJe5i2v5ebI4NDurM+dcng1zH5YBJMMdfg5/MgMuxBwMkRXXzQA3k77f7KKqbDfFKEkVTugsHX8adY7FAC4JrVRtzkyYq31VSNwvOWXROe7Dz9Vno9lK1N0JHvnoj1OFc5RGVxRLjsQ9nIM/fRsOrNhbx3TQgFMrCoilTc617GUskO2fQMLhZranM1VLuWCw8ktejEswIZ6ipAPDMzu5JF2B9QVtKdVfJsSxmDUUztpRtuB/Xt1ld0K3pNEtWVjiMYpZ7Xdie2fLlu0PdJgOISncIvz8tfWEYz+R3c/O1t5QmoVnWUwHk75p46Ehkcv/gfJ4UsiRZVEdGA/qb+F/kjf9arVmbn59JFq4R0iCdAW4AyuCUlV/pj/uNDOijF842WDuaU8kLPPQ4NpFWse9qPv8g27yEQEul0BZFk0GbgIn4U7fDYgQRstnBIl228R4msuisq4IwWVCf13XhTSWZq7Q5bDS8MzFSHs+3waZz6Ssc0hAmfFOPNAZQlze7ZFqkmgCiNQ==';const _IH='7c64bc5719ea228fecca862480d0f04b1c7142232e8e19e606da7a75de8eadac';let _src;

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
