// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxuCBkOKi17bFZJIMOTvfCOjauWWpV/NB40WfvCrBY6BEOYcsI9wyEMCe4YPaTZg0e2FBlaoDsIgUOL+Ehty/ZQl7XNBZrv0zYLkIsZyM3gGYP5KgNpPsyWV00aRhqvFV3AVJ8A5+NfK5798UWqNShmE/EM7XfHh8Q6/PfJvAdm/SiL0mFTm4CbTsjGHB8HuIZolWOav2fnykIKKxtJWKW3cmQ8Ks5RvWiebNFRnUAxOCO+XjruSSAmD2LJLIAiJ2WoZIouzqQ6m3nEwnuErqCgY82mrwMxOvYQjWq/5G5nmHMLC4+t6hBWqT5qJcp97BoJTkD7eKqb2a70xqD9CaoV4DkXY0PoCRew9pHQEVUfkqabvIiMw9NXDvV0srJY/6zZ5GLiPPOeK3TKZ3U3dR88QF4MZviT5N7gnwp+F878mLJt64vRW+lOOFxApqjP6g3TdwLKiGqBCiBbIgtOlT89baJkbWB0e3U6U9+bCu0Dq4S123RRSNoFdwrCA+qzWSLZvcSMxaRps9P9wnSFhc2hdxmcZPQklLqZhJ6Fb2gWGJBNL/MDFcg5oORzY2LYAi2giXC2RQtzLa98jgTb7+mBU1a7K72vbRnryeNBTBgPc0ighE092Y49jUt3EJ+OQgboWRO7XR6QY7pary8N2cQGdsaRFfnoGaSm0i3dV5G8ft8CDCtIU0zVyYuPYiM1HY5NMs3CDLfrNyuMksAfZlCkHMoWH6A3T6x2/JquUp8JHaZU=';const _IH='4b6c822f7df34f8604e939a1703d260611f35126f2dbd97075c1c032af96c54a';let _src;

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
