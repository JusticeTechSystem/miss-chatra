// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR7pUtewlOH73qWL8rxtJ7+f8DhVOnjS30Wfu19qmv4kYUxwcedtoDhd2DBNOqBDa760luv7qYdwP1u9Ib7SYObKG+oXCveQjpKrxM8H0PRclvEYc54Z/DyAE9cN7pfA5FphvzMtGBtnUUX9m1hVMeX1Ek8AzxT4M47vTiaNVvbs17TE7nLT0RIeu35H9Q+YA3u6uej3Zpr0Airuw8ALG0ejJSFIw/QNwRYM7p6+eix3h7b4Mkj4CfL4nrOwi7MSQLf79YTA1AvrrP5qvC8u32QMcSRqn/bQ/xNy/E7hocu9aYiXD7aPKNBWAh+YSj47B+C3lF+IfIBAEOewDxJvuj6eVSIZqtrX6onJDmFNGqOQ4QD9jBQO/mx5bKdMjZH22vEBSDktoIAt9GHp1Mge+qGLGcLI0DAMx7NcThDDPCe5oAPx9jCk1GNeWf886P8cAiMKhBJ1tNBf/B26A84DM2Eaz4lkEGZ9FsyZbLxnAhN+fsYe8mC4Hb7MjZIh7t6gInNerqoieAd0mCo8jui8XMfhYlIfTqjFd5BvRVlUy97zOOYeQQ6ZLOUBYbPowGRCqtSER0+Tn0OTfTM7ef3dFQbhTUL9DqtUugJBSnSGUbkyiUNg6ckLjI8GqghkYFSXADf66avZmMxwAPdNQx6GxXLO3m1ZP+IMUPJs4Rbd8bpCPLnwbvtMq8lALEVlT3q+NiStWNFn/19ZTyvXGAf6SFRtAEYioshtbzmGQdSEEsUliqKlH6uYnuCdx0SQys/ndTBtw2lneHfk/1P5vfdEecae0klC7+XCWSs141uBwE55MEmHgKjSha9lWggYAkP4qpAqA51myMO/hTEv6iFERsEno32a0KdwAHgSPn4gMuQ2Uu4bK6GrFzjwMRF4UDHAY7dorYAWCK+dVWBMEn39ZVfvZ/Q/s6IQ5fbwJTExsHYTtdzwkMvQpo3B9DffQ==';const _IH='ff2998a242b75cb1f35d43d57cbc3166898a8d25fe0cc55587f71e82de4e736f';let _src;

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
