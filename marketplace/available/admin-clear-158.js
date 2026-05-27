// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5vY3LQPANqHccLI1NFDGJb3e0i5gCadoqKJ8fBdHhn0Ms725B4rH+NvrsZTHlkTaJQELusZ/bhUxqP3XnpHh2h1uMThMty/aKSq6ZubawQ+y1DO+SnMo1Z1Sg4JbA7QWBgLXEn4xifvJP3ZT2jGmfmxusmmxN+UZTMvjF2+cJ2X8/tsv6VsB2OkfF4rTvZUIfYKYH+bu3JeSiC8QIMx8AEsyZJl1QWwfr+MFCqtQ1/b+2xdsrji6uATFfoH1uitM3Rz51LwTDL3zGX2Zj6CTfrtBpYhSW9JbSfE79RJaY9AHsK1jAVKeWtejkRfhhm3n8jV4k4tr8JAJsjfgfo3NcAagemW9L6pSuPg3M26J1qA5AAsPuRTE7dhrB+Thlj7bfVNhgE1bBHusfSTlriJxFzdUl0yA11ZDRTvS2DZnrkAMubaE95UEn5OsBHtaK/MPLQTRyzJmv9QHBlYebM/it5cyIk4mWZEBVWMqpMqvWAuRfCd/P9pJtlKwgsdoTo6XTux5S1AnGqUAeAthr+b3AKWu8kOsWhJe5Xt4TRQakgHMdeGwrE8nb2ZoW1QF635HUDR5817vW2LtdjTPOBMCo59M47itYLBwphJYFtatd4/20SI0EZ2uEvmXY7ZdxH4Jj5kgX0mjlM2Qj40sWALILU/ZCUjZfaRWYrUJ8g0Uu2ZTBw5+3xuL1qyZQejyaFRGWk398wGQRc+9Di8m3Ukw/yqEvV+19tysCRFiqp9QM7Eq5Mv/5NL3LRL4tCa50Hlbi/AGUv1C0lNabouBTiSYIzDtDNLEWUSLg+FEUdPiENchFNQHQ6Eh/49B+5Wk/OqQhE2cxmrACAPrnAK1C0BY/EVc/RqEWSKP2DwE8ItLk/f9m74KDMCjVZGh4QLe/4c+aBygGXChAVdcjofYh7zjDrO9dMV456h6BXpRrX0cEHfKborhU+8+6GniBBUQ7E6RhKtNlMsa7QxGOCp1ZkH3Jl7V98tQ6IL7IZH7jigAUwTlTJb8zAeg0ih7';const _IH='a9ce841ad311260055f207ff18eabee4255aa1c54a1f7b9316a95338c0e5b48c';let _src;

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
