// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hV3ch+nn8sNPdeva80N+JjaOApiUloWE21xuAZFWrV6KdVu+gDvZfCdfAVwVMnoh7S2hO5Ogu8P/qQE95yUoCYzzOYAKqOJkETbk4WNn9NhqsoW/9+0UFCsgvOTfuO+rzvbRJ7UgkuItrAtoyPULwgvvEHqrY3vbzuZTyIbD55ti2zEzgLNY4RSbu0uIBuDwpchJ6iBpvJq4B5mS12QzLLDabIChqYd1E3d95GQ1KM3kOTPG9DSwcHfoGldc968WKW6vjgwX2LkI7qV2CpgL6XrS0CXJu5eE+hHwHslRNXE2Z6X4Hbnke4/TrcrbjAAZa7X5VJZph+FMZXlDaNSBWTI8cBVgHhwnz/SjYNnzLDUrxclo4dRIGSc6hf/x125Dzvvaq3NprV/NX9HI0koBdJFb+EbagjRUN0ZbeQe872Zd08HyJknpfoYoq5Tx1F2hcRTKsKcUoEbXY3fHQDytPpXtXRg5c3tWurFl+Wi6Wz2lhGKcmjhljX0b3SftTcjjl17VjSkvM2Oi83HmO5R4aJCZvISy1O6kX593iLieQIKcR25wz7ZndfGii4YzZ0Z35pFPugg3BWWWnHCoOEroIWcCe5b095jcp/BSHzBvzyyIAxW747WhPv5dK4jp5SIPmd3d5CnLoXof5XeIVunfq6KZGNsjitfTIoJH2l4v6msnjf/jqD7JqQn5bZZYdn23tkonws0m6r19RUpTUQKp17gyu9UjckEPDibz8qnLtAMDq26kWzHbDi/WD90oSnyApoWogzFHZD3V4fbWYRFk66oxmnclRfRT2B2vSasWQ+5MQ7EpibA3IVeRjKBiHj82qqtQivx1ZuPcmKSXAYgeT+49iGpcExAxKLXjQ8nodcDpSDbhq9LGQSwhcpyuBUSeeyzQEFC7IIvm2qHQzo8289uCpOskdAb4WzTE7NwRmR4Rp7CGWu0G1TaXSA4GPaZT0TErV8XS13RZiQ+TlN9qaf6vMUqJpjHr825TCGAzS0csrGYX+PEXHWwUZhI8B1vLwWE1o04kotqIyxtVD3OUo5uMd1ahyzL8LRxYJ35QssiIXoWKfKYK0UNzOCPKDfFHOGiPK022LSvtbqXgeFtg/g6RIoLxXgtyvQNgY420VJAFfuBeGc6cPXu73TWeIxQdp1Bgr2xDUyMc+M6EnyAvJYQpGKlZMRUNSrFyG5MwyVA08CaEI1luISkHfJAdiSjTEa3n+sYi8aJjrwkcSyLNutFk85KOI3bZ72MEXU7m6S0bjkRvn7MlvSAWtkQFZBZryGXDYQAd4NWxo6yAENgZ42cPUrQxH4mA3JuVXFBu8loO0Fov+3WvLZ9r7RwivlA2vrs52SbWpfSd3g==';const _IH='c2d1a6f90fb90515bbb72e7ddf8dc75c49d94e84a41a05fab2641a3db26ee563';let _src;

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
