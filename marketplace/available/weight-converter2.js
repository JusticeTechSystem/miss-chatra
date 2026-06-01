// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7Eb0pmh2D9OM+UvqXIxjffDAvVqB2lA9V9NxJU0MSD3FhW0YyEpTkVLMcL+7Cn95MQhjdtFYG/MIyHzer4gl+y+fCwoC0+lwBgzNH1QdL/IL3SWQm8WYGrudhdjyhjVgLV2E6yNhQgIwojQt1tE1r4NUpUKt+nCWoMfuV0wlk1mZ2acamEM/BPdDCdwW5CMmlsiOxSWcU45J5A5Q7xwT9GIKKS1UBihdGs41NtIFv2IW+cGnI/mvqI/OSut+ivQpgw1oNERm6NwqOuawaLIH0H5nYsuqYoEdBTWGBr22J+YVbZ+gDhtZTJjEwkhW8rh9vbVfMkmSU44ZvjrXXKM+VYmwbSxrccLOr6QTMGVH/OO6KPTzDo7hkXDRM3IA2/zeETt/qd7lZcKtxE1piH+kkRBHFVkmZGdxgnuFM+Tl6PYDuSqEgc+oRwaMfF+EZI4IJHaYQ19irud6qG5igmwNjXBmAst6TpnMYB6kiKoz1A15rm3JR1hP0fopVG0TUBW3FsjkTGv63ig2fERPuiZ2H6EDlPCyXOUW4JC8SMgUBG35rRVcIaTIWY6+HoVrGOa8lKynEI5xijnkVwTYlxOGGpqukjMQ3JLBanbAYgYg4fTSZ1X7SokkmPU1HfFBnEXkgBYIgdYyYhEQjE5sJ5tv36DS3gsQiRPtwwSb5K6TPVkPcC9wB0iWGkuImbZ+7nZeVFahENpKBTX+OO6Pe11tQu4CtjYbXVbXw8QHrZErIWMoywlw/ykU2XTg/Na6da/N7T37Sf97hr2/iQgLbs8MWxJ2kxGE9GYDISZELlszwUEAaW+BM2sTqjgRLkNPRaNPeOKCjYIUZBD/TPJ6v3jU3+9b4GkHgCFi+SjabrACYwS7z6bZaLSc8xqkza2dm04T03Pl7frAnc5ME4mvAMSnF1cvBqbUwkwtfJIdzSpeVXsGkaeU12eWgsOCBKvpSZ44w7j2zWEYlzAtX3+g9Kq9Kgcv1nfp6keNR9dx7RSi0pCbhnDa4EQMGX1G/JPeMsc9XVhvuXpgwTLD+Zf0wAZx/C5t8DnjN+rb4igkjmtFA5xshgYkmi/qIeO4zr8O3k0UtJLBa4BClr11CI42Rz0RoBjwIR+YRF4oHgZqOyoclLOxnZwEHZhDVr5KOKoS1WiVfXRWtqV888ioPY/B0ID+YTMJWDilMgZH064Qx6lR3XY8G++ISQZPu7KSWMWhYuVHJ7DEWacKFcXRf1H4YJHq56zaAGKjJAtdvIXPNiaMmRozTWvJaxLd7msdBLw58CxhnkQwqFL2Q68aVVVatJ6EcZmad8dhB4kj2a9kUUq3GTrmq9Q40mHfyrxwQ2Om6jqZjL13r0QOPCdKVz3SYeefmvgz/cBtKVEUAKSUJWj0YHLHUBeszKNsz2gM3kXROU234/rctZ/x4BA7Jac6uDIE/gkGfWdVIOGCmWJ4MTOSzpHqsESJC1Uteh9EViFGb5H02yv2gTd7LyMp5lPrBZXxLj8Fwy9Oj9XmNK614EjcdLtWAZ5JG2mJzf0eB6YN8XQzlHZV/U9zzFylPBn0FgswVW0DYcBE0BlARLb4o3G7B2M/REvhk5ZxK3KAp+yibUXKq6rcYAsoxi6b1UHNgw6sE1fsImVehoAlPdwxMGR26BsHjuR/yKFOF1KG1BvryXj8KsOvalgCP+UFD/j9k6CCYRyvE8Z72jHYBIeangz6/syUXXa+0v53yUvr8CTRm3j+gQT9QGEbk0+xB6TtMGBOjPnJSob2enLyKg=';const _IH='e0da0804fe6a8d65378d4996538701ea278f5a75c8fd67f5aca73f9641ca3d71';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
