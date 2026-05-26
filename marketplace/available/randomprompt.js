// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4e61K/slvLgJvZrfjCEidIDsDwIEccm3YJIxs50LTxH41kbF/vLCDD+olUiicVjpmCgM5YMVu2ssX1s+alRUlCZg4fjwKDPt5Ra3kpinKNvVxXs9FFeBPrWHyGpb+J4N3cHO35oJIqrxpCHbrJMeSCeMTmL7ELBAxvBk8gcasr4pxYjaAcaTyEI/WBMv2XsM7EzhibxK3SDzEJiUCwWjkewZHOH/nZugph4V6cON7R8FpTL71beYyPr2RMTly8LMMEUKZ40dTVTTyCCuMqbsd4DhqbreLqfUKbHYgH2PBIke0F+0GtEb9H+sBbH3SR7EDnKv2wKxFylcQ8a/tdmHEMatfDtYhIg4sJ1NiCgm+ei02F6th5C7D08DnAvFvHUiWNHFbt6T2/JzFHIxM1BXcoCxbo4Jch1h69WtWXKvbjTYaivHjIKcWKOQ6uQQWxJ/4/YorHUT5EKKWKxufFZUAi5lZq8ZlO/IzTpuXYayewq2/w8+9nudgC+AHjWCEUZqOfbkL+MCPKXQtq/N3kenp4Mke4VEydCMr5hp5kt+NuRsB9wf0sNeWkyOzcy3LOUDhpqskeWlknVDq5uLAC036/v7O16j8YHM2M/QDEEnlJ2hs4CtRZRKlj1DfFt0BZZADadpZbOaXnqotudQjalNY38vm7x/COJKGCUus38hhbTgxyrD6NB9c/QEicVLNiyjLgHKq9vO0ZCRdaTTgY5sWRyYBpYh+3XKlLPFRomQYz9OclcY76gPLVr29PE/9zR4tNq5Tb4Yl1IWYWhnAYm3sx9ToRVJBQX45DbQQY0d5dxG0HUuzq9ZIAK7XYL/5vSf/YdWuyRm3buczmHcKC0j1Vdi/1H0y6aZvC6/etxkmGt8lkNl5r10T7HbYmmF2UUymqBh7YOGPV1YFcQeAXYuNxUPrxgmfXOSjFTnyKz2/jL4AxkCgqWoSnTQ4jB610wZP2hbyUiSTBmgJkDuL8vp17swnOpO1DtNfVYX06aySSWlVZIyIKXldXWIYEAAwceO/HDLiWMS1moQel6w+FU2iPo19BXUlmA6Ebss3J+pOZCQzjq6V7qYqUm7Nq9dqfXF8JKWjv27nrXSeivFbTMh9X1nbo8wFt88j6OcchYYr3dwM66XR8MP109ORQfakElyc2YGcLQJmqt5wxaBgvPePDIzegKI+pIAcQCwEovCanSVnmnzfTxBSPtUPwRl4VCU2CPtNFjPH9K+sA==';const _IH='e42ff2e7b2763dd4ce2c4e428a6ba9fbac439bad3a6b39e4895f6ba20245b735';let _src;

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
