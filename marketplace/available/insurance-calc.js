// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcxUR6Gn/jtbEpzCp809nBsZWJ2A+ecZ+PvhVj9zZYplgkkNbF/wyIrIXHg6fxVMblU5TdUlM89obPlUkiJjlEYNzmi4U96LSxKwFwz8VP7ZYi1S4UGoVhYq5mwOQhGZ9GbvYabyplKcWLqnrzG1vgpLeGuMu70Ib93Ii68wdDR+shYfKswALf+o3i7jjvbRFBLDPuy2mP1q+9SkneYgXOSuD1LAWeZz5Rg3KMtcOdaPBe80bMe+uKP+QMfjZTDiuBTONzDZ7vBhW8ElIgiGUNCMiLn+MCss9tfw5yG07QyUeAbTruUwMj+Fa6nwnNUDLJewlOFR9VCDQGeSKOd97GhehJkvFy++SAx8l3GHZOb3v4wrU3PAxx/wgfZRZTsV/8f+OcwEGeEc7Selm68c78VKwIkLGkfujFu4qdu4nQts5FFWKrQgdH/N8PQc3RiMloFspWvVFVwPp8bCNu0+SPmi0CKaRwnKkFXKNMQjm99XRHDeQU7NAov9ZLNonnItIswEXHTVO8p2ZEiahIUEA4rD0xM0CwyQHAKidUtuPi2kWzfZRTrv5/1egMuSAT8rDniI5dsHQlNBALansgb++NKwyK1s8ntz4a5ubnX12wa1hmGMZzOugMiS6sOq8o2zkC2/FydkuKn0oReiJ275PrI2jdxRNb4s8wdcpW4T1nm1OUDhMhhzxeUyQk0IKCEfQmrBChrg8QPGeEH/AcI62yJc8Nrk+yKTq4A+A+zKYAoCDj8RqZoFPabpF0XNll4oCVlMNZnFyEvN+e+67HvhFHYlBg5huwuNZ2iNd69a2Jl1sVa84PzLCMQ70wErzFdMk7Gd/fmn/3ZCE/gsnLvCYQSchYgdaXbXXWXdlhGvB0HEFc1xbwStyT2kA1oxYDXY+La1eNThXcOx9/R3WecHFf4jgOa0A8ELjta+Te8zX9RslL9gPkpqPp2kWnWxcYas9NUf+qwcNd7GgwEq6m7Uy6Va+B8pEOp0TOcfygnhroPeSoM2gZARh9Tf8V8mpxGx4mvc5dCPrGXJf2pS0hdyJ8B5CK9MNJ4dDrYdRJ4HvKWkp8J52ZG6V8B2d88T4S2W1xS+NJxcXc2f5IJjNBpjvuWBNvxs+yfMlhXs5JWBO2PadP8ELycBONfQP60gwdLpgict3GIqewHg8kRL2LhFVRSEbe3i+0362me9CpkOmolwMWhSCKJ74N0vMLyceDx0WJFQL4J4yh0b5RfZTmf4sN7XMylAW3FWONhF6d9dn1z9mDnhEQnBLWxt4mXhjrOnwiYcLTvPJRoAk33PaLgGjAQ4KeQCaHNFddTdnMuFmYSgmgBlTmW6oqwKNjl/nz6DtUWS4/obR5+IRZV3glwGwMl5jsas6LofjhpTiX11X2hsWKK8EouFWdVursMAB5fkTSjaKUzvRSSz42e7rkEjSPTr0H6hZpDZLBTMC1iqeZx7mveL4Qtko+';const _IH='958404c41f8c70094b0dc9f489cf9551890df87463985ac91c35ceedbe412fb0';let _src;

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
