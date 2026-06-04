// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M3x8OpsveljMaxQ7BmPV/TDzXhaWiPKbcDSAwtOCyPr4c3e6SRV4kDji59hTlY5fZp6Tq+kX1keB79An3K7PV2DIFUY5oDMbuoCU12feT7Tf9xzcnFtx6FYCOwJysY/IqYfVypQCCWTdpO2o8oqgT+d/3Q0hoUyxvywTviRj7oeSShXW28+iuNsnUj2+jQPqMz4j3fKadEV1BvJ4n+cuT54BPM2O6X3Y0nOmPXF3LY1TbcsQcFS+0VVZIcAjPNS8aMBGjLJA3xlm6QDF+7uTQDt5GDc5CI1sGG+Rl163yegM7pTt6KHzSx47xO5EEJttCGAHGjjaAuJrW9P20MC8le6/If6GvyViJ3xc+QSmPXNRBq/wFG0wFfkQPL6H02mmPXJf96kaWbJ1gHFPShlEIjsINgHB8JYJFoZcXWpm7XHwixnk02/BbX7y504x8W/LtPIKlG1HICXqaTzyihoYAKoHVVRyRsJspLEMvhqmXZLxGiYBQ8rHrJfQTtdMbqK/mu1E6x5TN1zdQnhh+qiQvwKtLtcSvzk6Uk4GsB7dKROQL9bgDrcdLejdu4S9t6RD1+UXWmi0U6XlLdvZCmACHNGEo7gjuBjcOOnC5w2ILpKuTlo7lcvYUSWKY/PSXKjxhgQ/dxWruKC7mjJ7/G8PakHSHGlomZnKIr0LJxOAxdjBvTAAiIz3Jh3OmG1cwJzP1GAGBP0jjRzDKPksUGPF2KQb3v9eknKSisjeebFPdLGJa+E+oJqHgsQBj7ejDCrdBUyyBl8VH6LpyyGPKZlF7nxNZHKA10sMM8nRgU1Mam1Vi0tPLNLOF+M1h2FlDtZALIWHW9aAHz+CIYtihr+PN5SHl5PJu8p4xax/NS9uY/VUYfauBcTiG06VAxZqvyJrypOVgCRH64gfmXlsss4VV5aC37prN5ZbQHnFqF7JKVSfX6d5J7aAmelnEO6UXnHKNxJinSZ1CHqiVSJOWM4CikQvmr7DBmZK2C499r2E38SsPgw8mGBr88DO4lquLJrPaM2FCAbgwZjUbCDX6gs=';const _IH='7ff229b5f7e0aa7ebf91cd67db569aff87f3a75fb8aec00ddea68cd5ea067383';let _src;

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
