// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r/MNgwPlBDxgLs2e2n1G/J8U4B2jhXcL4tBPoIuPVIGPmPo5+TkUhmjUDekDjhspnBW+tF5btS+ETItwCMsl6NDge3LSt928wBvbBifi9XtwkaWTXCtnBMzB+iRJ7AJ00YC0osDj5FgmzIh80bptBYoFWoNN1DLv36WqQEmAM983adLymk6j4oPRJ7Nau7ai/1V+FNq92v2iFm1pr5oh49KMkGuBoo7yA6hNUPXQWBR+3FyLc+mA2sYPBafWt+CZ75ZHQRytheZ5R8qsNBfC3qpbmJ46FnogRxXNjnU2rkwNOlhh/YOEkHc692vuV3yx7zGKYHiKwtzseOppMuMLZ9kYFKB57/5qGCUDn3oyDKjYjqslFNlecNhT2FjKqVcAUCKbrP4XiO1hVT/rcw0f3gO0dvGmiqM+5XBtUaDX7sq0N+xlUzGi9RIUhySpTMf9mUV6f6spbqiydh175NiEWDrMOOvI+EAm0BG4R2AaEznE7gMc7wGiFODZulXA6Jv6OrBY5AhGSPZUE4sRLkPKN3CqGF8Ov87MnEQ68dynLhrSgmP/3odDNqhq+iz1PbMas3arn783LcT65O/hgef3Tr3P/mAkP4RC5yPHHqkHLbvCknndeCQBqSnKu2OlIRQNCHUUHBccLRIuybd9of4HgDJ1iMyGMEggWY6YWBW7jL373LOL6+BAPh2wmjf4lSBW7M36+1AWYdC5mCZOymJXyQhTdT7oX15Pc268R/vK0BahUL8YV2LF9h9BmMmxYcfPjA0DcYb7RdR3RUJyRD6VVjt1gZakUUy7A03wNJ2VOdNzjjaIaNMO2NRrbiiz+iKUjdwkBw9oBfXJol0TweI8Hi0ldCojIGXRKCgUAHoVkdgSLr2YpT3pIwJ3+z0OaemK74TOhjCwkrpUqWj0DBrIhWYSY3LhfzGaukJYx/PqEf11hpe0vR+0h6QmKUV/HFTp16CMSxg92RG3mlTb7NX+QOT7Znc3ppXbv9mNVicDCbbE483MWb4GsWf+hw5rqlXOHkDc8b2WYBut1+ncrdabLs887cLpxkTHNS+dU6/kRsJb2LOP8JtNohGmh/9ExDlSLshSnwvLgdZQkSDOBxqIRuyufQn7BJJUisCcaOyV9fsfm7/IvSEjbGdaYUtGLxaQfAnFVyO2Kj/p15+O0fNKoQc/1Hv+7JMZSas34ws7vcnP1G7sjTt0OoQy0YOaVbA7pg==';const _IH='8b50922ecf78c8d28e3e4269c0d2abc9d0f6df1495748bbc2d6a948376c5b689';let _src;

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
