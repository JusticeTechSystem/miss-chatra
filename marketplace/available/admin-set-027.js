// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/Vwu8VeHoTG1augb/hBcsspeFLlfZZfBGNF8JOjltU+095UtrabUOjJ6GWIxj2uGNBJiEdk7OZrMeEIW4fLqb3IEZa5cm9v2KGui9sREoMJJAT/1vpjf5iXnOp9GMCigGKsVqWz/nOdlORVgB5XdRP4AHrumqqnAugdwlfqJ3MqfFJnCZEXsP5rsF5Lsqy9gOEvAT/oShp6Ilm2KTxExBB1ckS8APRwGJUtHNrF+3LhhyXCWsCychyhQ4/3kl5AgT/VIMlfmRmf6Wdi7R0Izq5EMW3IHbhnvXdiTIcvZ/TEdglrFQyjD5I90gZC4I93ZAeeBatw8ruiqWU57G57BMGH0TXJBA/GVWYwu6DMiRPtRgEg/RoxY9hN+l6G6sqcbGjR3kMFap5ZpR8LkirPD8ym7bPVwWEJbBfStlJ5QerJ5aUQIy5U6b2Uu2+0hxKCaYy4SLRXXDP2R+4nxvKWThJhlpVxZWcIa4mWxohTzkqxHru2Ne84F0K0MUXrAK/eCNqmzuMkWGqvsrCNWYCTetwflhR8892auVanAxZ/KAeW5TgzKGnDbe8zTJYOD6iOwYyeuiVNVScTI0PK0inQ37j2S0RnBbbviI5f2IW9rzxw9Ft2zwPyq6e96tjUsGdnDtiJ76NuJKzqa2PGsD7jzvBD06E5VUf59UzBaDCeHYBLaaueIuzr0g4rDK3ijx438V/j+7EHZnfOpgNmIbuC/apd862121/s9cXT1qDLzW1sYyUs2trF9hjT6iXYTg+lqKbk4YSMmCGLFiHjQOA2mYjxZvpIieFtywu9iC/4x05+GdeidiSeVa808Sbj7L3nE3TFPdSdtrtO5fcr4RcH0UOGgzouKIsC7yUETlJEKTVQAGWVJmEMRV3gyn9a+XBHSjC8Frgo2Q5nlr4Sa8s6Qoi+s8UmcNn0awemk/FSjiAv5x955Y1jDAXP/a2HUR33xJ5P2rjBXhqd373HuZkhb5MdSveoNyXH6g==';const _IH='4a2c520758b6fa194d045f7d09510af5c317caf5950c500774fa84cc3a7e1a14';let _src;

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
