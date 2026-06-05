// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zPRxeSj3Ju8MmXHZ02otY/rjBUEhzEbeeJsiWezO7QQibDWNKLYzW4WCL9lNZ/3yEDVzRMMV6UtrZ+Te2q6I/jlt94CdkNYflIRpyztuvVe67KjN64DdV10NqHKHnqWCro3HOeiMt/9WN1a5vGOAz/fbVpm9piBHomiErfrcrBif4c6xfKPcTeeZC6nIiEIH8w1WHTY8k5fUwQgMAkRjjatGVSDNU7li0Ugwhw7rhMCowm9aRJ/w2l+aW2wa8OntObPuj5xo+XsfWirzSfob8uEdrqF8DN/GpR/awRbEfazyV3lPLIwe9efXsLXJjaHew7HzD1xOQv+mygSqUXHjwu3jaPdXFE1RF1Vk2T33aLYcwv3wcjR/2JCYyPbCYh+WqUHFXnYkXE06PQCHVS3sHeB7+IVL2tVjbJ7axSQ2kg3VSjbceN5dS7jlA0cr9yE6vHzWPqqoicK0PGqSwc+/aKhi0UyrGc26+NEthgLd0bSw3YpMRWFXosz8hqhtoJDHJ2M8exuIybi/WkN/Bmn1y7o0fjbjtT/h0PzkiodMIlG2DisH35nmExn+A/a94thm3Ij0GxaqwMMLnEvTzD2W5R07jLX2w84H0n5cJxYquKfLCyIl6HqgupWD8wZ5pg4WZl5s60oFQOxA0PYEpAcLOZ5Mqb/fOpJtvJPwlVUSmegE99Tt0p1w546H/J6wXXvLnJoYcAtWTJOqs7OpLLRb8KOzuEARR9GSc12HnanIu/SyToY=';const _IH='8fe8711d54c538aa9a36474f7d8cabaada25ab2db45f5331ba8cd268c5b4d39c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
