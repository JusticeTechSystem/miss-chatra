// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O1DVEghvi84P2XObQiYzutVH5FSZMS+r9/7w+Sp4gcOjK6g6QaxyNOk6nQ9HLDeO5TeXT5LJYmnS6cW3cGC8zFQfQZ0S95JTzOgqmi4GIEv8ITw9tmodJxbQj70QWDrOAT1BZca4dV0bjXNTm1j7l7GowunL0qYCGiUITrw9K2do7K53cH7khCtrXXQwiMVQ6bW8opNRBFzK+T+T3ivQOVIHSYMMA6nPtIUcA2mzM7TDvKGDjszK/WMvoyHMnEG3Wsf8ivCsZg/4gQvg1P9kKpCY2gppBw8XARpZKAmpldHx1r1dAq5oF/Uv2T+MIchmrapqlCZG0HQYA1mUcsGlnrIp792ClWCLQllOcqVMFGfKIcx3wGI/fz9HViPFHfxdboeVAZu/8LsV+nTV7LfGVxubIGWxIacSOS6AMuzqfHQ5RnPQu9UCJGBzhSSj4gSRK2iwtK9vcxzhxISWPsrzWHhtSEQiPlJ7r00TnFZKR/qNU1EQIsjrE18HbYtTpDNJ5L3jfaBzqPghaSTKfbaTxw5e9L1HUiU+ZgUBj1NPnNn6Zy2Aaj7E0GrkfOvhIWl7oUuop646Ny4+iddw0XI5cDkQXEB1gnk8J5IWFN+0ux3r/HlqaE50dlZkgTzmMZsVfsvtf7Vv62sh+nZWKcjrBXIVQPXT/d5ygVf/eojRyzSKoA8A7iv5sfxHr1YSDqTxHqJTggqL0rWzoV9m6XZKCNHdh46UIsE9LoRXQ7twKYwyjhVEaYnWq7mhnpyOd92feGP2pTg+J2p847I0MWoReO5jYFPP6H/H7/8SBOW2vyQPVZVw2iqEkQG2PX0pAPhxjqpKQwdkwn53Hi7l7nWzMCVvQZRRFl1pZWoLZpe2XtbaIyN4Ta4GCpMcaWgr8TRZ6oe83Qe+hhe7YggWldvHDdxw4cLnlf1LeahB/MprCvT5uXEhA9W1sEOdQTqjZxf3whUnxkzWSOswhO4JOVth5M+g2AxVbq0V86DSetIdosA/O3ypCac1Wmw/SxcwCPzeP7GPe2hv9kXpbuhOL4UScHYFD6F/z+tY78Y06oq8Wb1t56FgTNJfvcjc5psVOUvLkBLFZQi172dsVO3EO/dhqDA6NTJpbaQupDWtLatt8Hp86JjagXPIdqRFuWV+Pg4teV48KFETTCOfDBB4b4BDUPZSsecX5EFgOiBuJPs7Jx3UJbFmf/ni4HtPMiZZeIo3OhBpD/IYcg==';const _IH='e15170b5193801692ab035b5a2bd7960b3247ab49055fd912c7362cc7dd01271';let _src;

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
