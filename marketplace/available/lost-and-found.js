// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOELyHi8Sex2+p9NFIWqRDpIqbSujwB5TwFJNCO0+h/f1WmuUCZXXnSHSgQZRB93bbWTSPUGGNgTJJSZTH0TmAC0WtMYaGWCNTXVFYDFkcEWYYrefIBZ0d6HTOmdnhG3FKYUy4emw8BGEVixFFjnvyXFzJzNaJ8L5XjqbXSbsEV3frKoaAl3HUjdGDS5cJNcuonGGRUEPa25whQkERn2RKZ2uRAJrKRiJN9EPs21xEPemKq2s6B00I1AbjvXXSozlyFiLYAG+iKZVcyPCBG9B1BTJeutN54FYNKSRJa+x0zNkjIqRGcPFnXLV3e7ZIuumZKDSYIqX+n/GtCobFtRH4JeVn19uxVmb3XBI8Eti8XLDOk62OwZWI1n/+sStZQy3f8aA+gD7M//HfNLbCS5xolw8Sf1Fm2kHifWVvfLDWxUvc6WoKd+atcgpC1917WziBeRxwOxNWyPz6Lb5U2ZZ2GZwiqpQ91CmFHggY2pjhejokPI4bn9nOaHIU+ejCR8msGk5MiAzl8rz7sObTgaOHyzMFXmFR7FRwEq/qyZAIRpNP7wqKjVSoNR/vvPduQv0xJ5KgfJqiutk=';const _IH='08adca31c69c257a02629119e8157385d466edd9be2963b634450be1cc15a999';let _src;

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
