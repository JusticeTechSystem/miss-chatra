// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTN/B01R/28shUVPEjeQSBPQNFvBzxADuvdnL+lYJytBNe6KzIaw92sNIrqpuulMgxyQ9ijqQfBSYVuigtAXe/LVKf+Mi2HKk4r/PBZLF/DHjfNZ7qGeKov9mloagNFBQobBNBuxn0Jzduvum/CRfmi8KS7n5aGMWiGc+tYVAihx8tFThooGevoOR9lt0BgPf76tY2sFYh4SoCpMqG4c1RIsr3ztiSwdvESQMDOvmL1cW56fMZun5cMpWhkXFGQOVnsMaGAFO50HbzddJcQBQhnV40kLItGCOkNI/C5MGUngargS7oH5T6pL4f1usuryh3bJxh/j5N8G7JcGpQDejxggudWDEMePk4xdg8AWXj0AGaTDwecBGsJnbGoEAmsvwWbvBazvKdkZqdW2RMWHpqncGezHbjTQ3slzXle5rnqb+8uVQFoO5Tqr+ltRckkVnRaSR832XjWmxmIpzmltREnMtZsHk/vBQpKvHQzN3o/VQS08+63WaHxrF33VQX/NNBbGrzhkAJPjihoGPVE7naNZDZ2ePn7X+TJGnuffnow9w/XllfW2+YnPPTVihebmL0vph7nlUzpj37j8UztHhe/FfV+/Ufb/He0XfkXk3H/29Wu+8fAIwKzQY5KQYSghyOcaniGj6o0O40px7xIZdrq6hPFdHQpaLMi9RcGXWDf4AHRIopqtR+MllReOqgG5iBDl0bT4qUIUXL6eFKG/lYrsSc0tPRweDdT5Y4Rj895NYsQOYmqrqGv40la/ei0Gswf6vwabH59/CNoc/V5kBwC2g9ggNb4YyqmAROldehki++RLaaG8SNrqeJ4cEwhD9Mj+fUlHhtMTPgFvFlFLRPHoZTFnd0Vg0nBcdkoeoTiIEKknS1kcHknZt27bIBl9izBMCeRXrtUh6eeIPwAGjoTgf6BRyvVVI3jSFI8HVfYiUWkf/aSwtVeSlerVpY9A3t73ZCJHNJrV3xhEgsY8auEerDbQXLTvF2g4j7xu9Xv8Qtg3b+/ReeOIwCdW2SJfHH91w5DuxNTfVRDEN0Djtkm94gAuVjBqsQB7nMMQREVCchL6gJXUNWJGBpQfhV8hYxfZiogDq/GdW4FNYJnt8nEBElfWKheVql0/cVRilRfeELWgm9MZbABouJp1PEag01ArfaTZMe73R4ZdO0bRXNyC/sA0hUeOZ0H2uiNkPJL2EB+ILYVY4cr9YR/HnMXYd/D+NtsgQeQHmAOnC608ArncQEuJN5QOWaDjtdfmDsW/u5KrD+7Y1lz188wHVMEOmeDhjdGawdw2Rr7YTcNIF6OsbiFgcEozFMUuYGHeKJauaksCiah/sjPsUQUlY9of6gbk8heDoFMwcqXjn5+0R5G/kDO4qzRXd6f1t8x/5vqOS1Hi6nIQUA+kedqg4R87aS8QaV7GMoKnnD9oPU=';const _IH='c9d16e053dede78b492dc2a84375a87af567d648412a4e8625bb129065675c67';let _src;

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
