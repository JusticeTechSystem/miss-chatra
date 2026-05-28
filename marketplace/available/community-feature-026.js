// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4pg2yW+M2VcvmI0iCawuKJ72koCInNuWTTNaE0xoILqzmR5YnNR8347UwO2fOwWeCad1Dx+Mh8oBkhmPQI8Q8DSdT54WFvUYwS59CrliukVT33UHEHwHyonDLwJ5vM6I7K/HZ321YLQjGREB+xTo8Il/TkTIpPYjsOgxrqJj57GLUth0JPvdCaunPfJAcqAl10YYRGaZg2P/JwfBgYiDCi2rw99A7ymvzMhXlvUc4MlD08fnGleZcFOuaS5dgeyvIppQ5P4IdLnjBukljoUb/PQOxfnyJdZEhZA255GC8tthe8jsRru5AHOQMZ0/XHXQ8lWX4PN0wfa7uCU/re/5Z3PPari7P2PSuQRYkBnWHxUczZ3Y7ReSoYaw29vbUAXhq1nRoJqyMOVvAjY2amvqfEBehAfNTgrL2Lqy6WeZF3ts79Y0DppER3LsRsHtRmF/Nl4/oQWw79vAAGK2y9NZP1TiT14doLfOoRacg7mVka8RVDUopp2Z2YMIJo7fPiXpZOjsNErZs1gFvTin/8++b13alHHs8Bq9lHiIOzTlQKgtGylA3KWsjONiDzFeyLrKdxsnQgsTTC87WQ2jA5z2NYV916lbQsBN3Rli9rBGYy5XS+IA6kTBdlFxGIfS4WRIJ8ZJ0G1iblquVXsmGKkmAhDO0hYyewzGUkw83cwRW5OzFsumh6t6Dz5eHEQ7z9b6ArtQO34wVoRCxfilv+oVRArN/r8=';const _IH='5c7d6f7ddb821dc47d636481123aa8d0b6e589d59bbe726cb2519dec1cadafa6';let _src;

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
