// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FQQOM+hI9EDnaHhoDGwCw4fp3Xru+J77rOmXVMy4GKSHzZz36crByuX2f76pLYBpQleB1Soxjl94PhqxqLkasT65reAXw1SgT9C7xNUlV29zSwqM1zBcW00homQdAVsERzZ+6LZQG2IMpKGqISSYfYrrranUlZ3KhGqBRByVwaN0TpqOUD6qno2wFbOR0ueoshlTfjP1lDmn9VMWn/mFjiaekEWDPWbwwZMcTCOS5RnC/JV3wLi3GiucdIYNm4Rjzg0MlpOvbb2PdJ5obfX2YeSmAAoO+wHMS97fGKVAJ4X+Tl6eQnSs11wfTCy3Xc0e21HEVLzi7Bb99OsVBlANpvv9bAC9UgTMskGBEORNrrV7FOduzzpxQwV37X3yuvCVtRafvAhlIgCVq3vBknJiPoiEfDqiuRQ2kyrKKerbasFGsp0TiGMLeE52bMxotymUtJ1pxFTJ1K5/zA35HoniCFrk3x4JWojWmi8cGAhxGlUVYXm0BdyPI9vIJHDVW3mxE+qbngT87X3VtoRQ6m5VVXwsELwosgarR8TllptBmnIxS7n3cwdO8FRchsJqQt3GteoEbLMZMZZmWdTIUvngZSxxt54meillNPXAe3z28Jgvo77yWqPOUVY1qCq4ErsW+fpLrJyNLd9hppJiLipsI5ffMBbULl+LplHHMssQ28gs+rNdqKWWW7YVaIhHgE3pUQWX7qVnLJotvrcmmMT2hTk6IGknrcCXvVHm4M6gBaD8f2n25WDLBSJruLnFk7lAvLFBEjhe2z5p+sjVeE8h0TgY9C5lnrnaYgHsEJ7ewIjpXV0ASegs/x4z4QHzNhsuZR4NntyZqLE4LJ0pmp+qw7AJEUWNWg0aNzQxAceHWFpV224rhSGXWozmdaAutsZOvdYH2iJE15bzWkFa/ULQ5ll1rzjbqouvnIkgM9Cw5ylcZEN9Bk7SMT9NYvnqwIbozBbx7ubVBL5aDRekVDsH2PicwgKWfg1o4BECaE31uFg7O8YED6vd4ArbZJVHlSDknuffcEj2PPEnSCeMZZx9I2dZaRhlLieaQotqsvrn5mdLmYU5zupUC7Vys5G7CZ8tCZ2Gag4pkb9d1Urj2vUyga1kGgPzz3MntMDrz/OxWCYrrjk14F4fDJ4VXIgr7JlqnTrfqneluz0YD/if3S/ouSWztQKgR/89OsLhXlVVs5FQKWCVgc5FHxdbueeGzcBxRIjArNzn1OyWFuo1gNbEcP3RAAHYesPM/wkFHiIoKjl/ApCeLIs8j+Ifgq4OESUDKzzDFmiYS0PTmUr9GWChggjtdlb1CJAs6wcN8vo/+HWlEIJlLOSHxqIbm5ZhXzK6VCPOSGtggWSHPJfoe9lm2RUyCfpujbzqNqxMQDeHRkats78=';const _IH='dcd67f3d3a986e0fa65d13c6abbf6cdf7939c757b6596a2847d44e4de3969ea6';let _src;

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
