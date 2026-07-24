// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3SSUqs1NnwYDU0FbBOqqE2XMpTcx2KEOjeXzmuZlXlMGoLrCym/2vqkBCwcjlzzaiFVk5taoNnMxETt9WQi2AH0UwyC65KbqT6IaEDVcS6u2R0vsnZi3hdZmEf0b8PEU++/m5n75IQ7v+lj0T90oggrDn2x+PtnwDxA18VAjYdpWJIwHx3RRLRxsPz3B2JfCmw9cNUVhk/4VqKYPchITaExN8bdwO3raO4De2vGpfYee8oZmf/W87AwXo073xgUrBqA/ULnh+pzUqXqjEAp8G2Cdi/o55Jq6h+VMZ62xqFddBHSnpICFmyPBI9wdJK32ZYwnCq+2y2n4KAnqGOQpVwuBLxqu0FYxgi+OzHEtFQYHhMiorJftTPF5m8Ra8ykVm/XmP5aAL3sMxuGWezvX1aqSMyj6sNujR+DaCTUo2ti7Hdua2nLH5w7OSRyHihMYtgDelJ3lDAiqZCka2fQFn+zVfUbs1jgT4RT6CW8f8XFDRSrW3HG4waSX+5XtasuYcgivM/EYBodAgovuync2ybm33fHg358lTKGRB7N8aU47GtDr0VDe+YnIxU/R7wry4X7Z/DG0gI1wqe4Ygvz5/Ls3T/Vonh+H3PdBm8/NYEUMaKHNoNHaWMF7plZsuog3iEk+nA5OixuxHe1wzy2rR2xqK5pFAF4fU4lQizy444dNIWS5EDHCQjrJCHmBxe6U9PBBJ3FHcs4Cp50lgmOIfWUzpoXxILsR4hwQrOrDdYw/nH23eJO1iIjD47po0A/YuHI6xr2wIrD0vkfy7pTVFOnQKaJ+ARotJNej34aSg5W7fEVzq9yK7pdz9FgFgUG5Dj9jJCgHtqwL1f3YH3IQPI8BI+zZDaiIayId5dUXgI4UWzBBxJMS35naXjn6e0H2yGyEjaOOhASDoX5uBfd09XKoV90Aa50H5dlWkjFTg+6qUpPAMDhwufn+lSi4cIqxKIMJsTBiRigMQiKuiGpT/9rDBhA/tAGpU6nm9ygnex7Z9vEdDui8BramT3yXkTZrcuTmSuBS59kmwYLbEw49sGiClNIMcymP2xTK0Tgwe+V+gv9jQfR3Fxc8EeV+Cyt6eS9220hRDwEg1q0RFl/xQBpBiMvmKtQXY5WmBV+x1LTbFATtIA7mf/cTYW1O43N1TPLQtpwtC8M6fS3QsO+J3jfwgi/o7DpfXz1IcZvJa/xCsBUvgfxkEcXAtuE3WPEzWBsy9aEFO+BD/X/VEaZ/WovyHUGasBS2aSV7q45sG096iLJl+hajgMtaMjNJfbO7CNJTKIT57T7RMRD0RXtllpWG6wr6f9T0d0mVT/KYTrtTDCM8kQCx6ARdpoXDQV8bD+cHqtY9LL4Ex64vJA3kP4zzBQsJgj15PUL9REZDZz7g96VQYg9wiBrI8evxjgwWfu+IVgxDTgEnDR9jfpn4rX84QcW+yJdCH9O1BaFMyP13FMKDdX4nwsjjjVPVt1WrI7xFBuHZ+VIlNWr4vNIMll7x76n2wB1979lhUx1zIUciqGA35efQj3TapqWk1aJdUpeqfNLWevlnjC9yNLdaXeuOYtRmgWFKuZLUU1TUaFMiRGyZkQR5Xr+aDWvjqli8dlNkXhHQKAblVMPsUXn+167620SMY7Mandk88ZDjwETdmarKPdPoknVmH9JOkbnEQfqBiURUskmmjRyFR8tt1RINCFCbVfcmGAe0215033CpuJe6fP4ZTrOyzt+HwodZSF2sClsn1VtzrhYwgdVBFB95v/J4BOzg23PriLwWIPf1PUeQcfjEGB3eYA8DkP6vAw2xsv8PTCnswQtssQN2aTqYOTKHPZtJGU2jJeNjjU3PytiO0P7kI/N0+FYTMMMAZHH/nwFTRQfxeTxvarvwwgoCw/Lusq9D3DxtJ1bU9pQRCv/LzZA==';const _IH='c2b55c834461bf0f348ba6ff3a2018bb4f5b177517fd1870ad079b1a35359daa';let _src;

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
