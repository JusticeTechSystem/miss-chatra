// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rezdgYRuwUMCODAToolLWzwFx9S1rgMN4Db12S01aG5LFQUpliyE5TloZoEg9Bhcq1m0gpiElIWkjnji9J4aymykDaSr4+9elhhh6hByFwfXpk65QTpyBvGf25yywLO55aYZS8oegAPOyB/J8fu4VRuMLxnytHDMXIRCYR1WmMf+CIqUds04kq2h9hpCBQZjYZAyTm2alarGV6WGlESkG18QEwi8fct2ZHM28jEP/VXR9KhZmh0PBsBQl8MuEojWqBsxYnREUafV+hppxPD4HRGR8/oKCbxARRlWsjMJLSZPemynLNsJvsmqIFYiovnDDmH7+32BMnkuU4kdI4uLGYUr2egEjq62doXjY9CmLSRJ42ELTAsWcLGRwl50/lICeNnaXMl63/FEUW5nbRSoA5KZTfjX5ZlRVR46N+7fQdsdiRvTr9jjm9FzOrVDyLAyOpNtSmGet2b3LbrDZySSEmtiLvORU/nEtdcEZOrwYh3g3Tc9V6HwTy8laN6Yt+EylIfM3oVNMktOW1wx6i+Zld9PdlaUNOxegNjiocmvx1lHh9xSMvqo0wGJZiMf6I6SKI8MgtW6FLT5VhfR/gjWDbS5oBH8iMgsJt1XKSURDumzz3Zlz8rG0TUbwVVoB662FbtnCgdzPBuwX6drm98a4kdaPbxca4hJEb4VX9m5q4uTkUuhtfAvIShJ85iH8rD/V7xwFUGqTXf4ExMlYf05EFFQmssjJc0qncu9XV6nrAaBaXoCeia2zGfg1TBx41EHaK5JF4KEUoDYhKA2K3QUWnbLhmLAId6K29wG5Zr6+KLur7nvgYjsuqLAfF2jISkvqx5ggEpZZA7ucCh0phRs9r3UIAhkEY+YeqmF8tf8w5vEtRQtE42zXv5UY+JeDm8Jb7N8ITUIvyCfzB0RYWkNRhFxG2RbL80TE1G/jY03FgXrj+OnhtvXahXx0+UdFii/W3YQRI/TrjbLYsrTlJXv6mWRKNHIcdXKdNMTAvx0SqKaZxZW4OsuasXx5SPcqH4uO8wpq4jQxXZQ36egOYaVTsn1hNGM7bMwLUQD5l9+5Jh+vCoOfIZtoiRmoF2LwQ4EzTMUOtC1Alf65soI4zojJhKJuGChz+dNArOGfpFv44vkUtci9FTX+E2I2lky32ps9U50PaP6UJFRJ+uuhNYBQLd3P0l9gPgZ2o4XraRUJ+8ewHYvprPaRSFERIncVzIuDdNyqkpOEdqwkAYO6zzoHV++3z65il0HUJ2+Bz6Z0/YHIe0aAynKhb72QPCv+jq78uDDxr8vRncQKQON7nnYhAOxKNnhmU1iFBQxuQDEztWG7ukDPZultY5K0hruVDIG0Wd74wXbZoQYXzwlVNx7fZ6X5U6N9wObNbwRkvj2HL0oqKLI5YWDH4UajBJiNJIdIVxCNyZDPXERygoi';const _IH='15d7119132323acd811c18d250d83a69eb968ea623264daf4fd1b75d2ee5c590';let _src;

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
