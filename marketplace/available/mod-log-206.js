// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BUp2yBByyobQe/E/lWF9AP9amPYwjahLnneaS5jeDiXiTl/XKEIt/rKz2j754IaX9jPn1XOxDXX0VNRv+PiAOSxLN6tRlc/KPeW9RoTJh2JeTs5+MhVHOrLqd5/IQ97yU39IDKze5J+iP72S5D6V9+Rs435bWfhmNN6MUfK4uhxsEWcF2wV1CmSZbxbToPgiBpTaJo9z3E79vzASsLKJRw32Q89/GbegHMFljHSiOj4NGLUZPruPx/gHpVcWF2zRiOlPlBj71+iirEQMCVnpf3vgKrfGkYxlrV5gYa2FfRpXJtsk8AwLWTn2MjXPFYwFP1hrdcz7pRiYAjCNGUa5rpZ3PReHHjOxPrRvfuhv74Fcst8dsdJs2sfzptyPQpdYbFumGbatRuFJ3pZNHLO8jrVz48GIuO8ubnhOBqOF7MMerU2pfNwsGSzC+tnVgMgjgWhmt9sNtTkYXgRmNpQ7EK/qRJvwj4fk1IyN6yJLBID769ZgGtllmpXLzke9F0eYunL7WK7oGS4WsEHfHf8rJ5YR58+xc+m7arlxmRuqQnqOdGBFcaX2LuMkU/f16HhmcoHQsyOSWcNQCICdTr7DrSZ8Q/HAQ0tZDgSY3pK5CrR6c4un5Y0yLeEEqayIodD2wfZC4/kERietbt+5aObwFct3Takfc/q6wANhXOctWjlx+W+tTUI4EYbdxhb8xJC3s+NHehSjwTSzTFtahV8Q0srwQb3LzHZhoXdNWpYzaEkc2uOiCPy86ZwSDR0dI6Z82bF3WWmmjBeNmblKRmxdKHEVNp/zX/iCBj8FFQZtZuqGS5zLmCr5mflFXgcscjLwlw8d7KKWIEtAtt1CFOvaXxsjxDGvPZTpoTOcp15LTV+0jQsARrmGger5F5XG+uO7uyfggdnEA7Bhd0vUA2dUe8DZJkpYaFTv1nSiJBw1W/bex7ldPKa3cK5/RYZzGhHBjulJAUIUxx0V6x6kU/1LD/Y+zzMxeM4hXOIRPc4QK3MTGh4SWBbSs/5LBFlC1TOpuOZhnJk1EsE7h2+BbSpJwEN8lwMGOmiuxljU3iAwX5n24TUZVxxPkeClF896OPfTG+EvB5HjfGKmz7bwPXd0T3i7AEAZZA49KlUb274G7mZJ8xMxmBZ34ghpaAYKcY9xMWfTMEM44j+bjpjMK2yof9OwZypvkGQYY0ReFnTfCQxu1ycm6o7VvwCK6c0Ac24+L78ns3yPx8Ucc5G4tjCQsh+aPIPZKK/6ymj+uuaii6bwPSIXHYaM/FShutwOFnsT6Loa71GPtfxzVNdkrkKGKPOxOTtiTn+zM1uCqpeZbPASHN5FaKIlBCsPJIYysSUucG0af421kXXqtg==';const _IH='b3041d22f7c7db9e5321ed5246174cf68055a8bd5a635f288ec9c92f2a5f7498';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
