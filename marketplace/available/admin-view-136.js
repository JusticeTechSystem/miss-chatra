// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8YCt84QJ2yzf0+EK80R3qzV96YM785j9xJc9BQF8vxUr28QK0OR1m58ugV5p9xqZSok5hhX6aoWxlwbyJEOxmNGDPAK2lNv/LEOJ25jjpgYtK5BxQeRhv+bmy368QvXitePPtddNF4wpVWc2Fz6pYDsFkEokyAIgoEDSNryYoo8mtAHz6ojwJWy+l5uGtLz4NvRYdqSQ+7vNoWMBAxOEEcPfqU+5w67d1zLvQGFs0pkkQTIOjvbfOvFaE+gTJQE4NSO5HDs1qYlqgun7jvRztwkSZtWSaYs98RabENA5YEB19Uc3V+zvYiB8GdQjjnaje4OuS2HWaPbYMpqHAOAubdmjrqb5fIgEDxrbstrK96JPydsAcGFJoFdvoWQxbduqzwv5HGRrsmp7EVXU1S7ZLUGq9AZ66Wz25DR9tpwQ/aalhEEk4JZLPTePG4m/crQNounYv794LVVlcrUWM0Qv+QQ/sFO07vpMmnoqjmNs6VcYcbPcgN63kO9t2jF9PG6zyMLWTeHQBLaGgvb8xh/t1Aaz7FVePNuSjAQpBoFZTU6mEmPERrudEHz8KskXcFAB12RDaNAuES5J3FThWqQIURRSvubnQMGxJX/NWszi3GHHaM/xeE1pvl6FP6kcJRYExzK7gInc+VjbovOs1GFt6xzBA7aNgYLA7jUCylrxhYbqiHVmq6TXX6BHv/AOJ+dCnXKqCGq4IHY+h0R9BIJTJICJir7Yib6p/dJKGeHs7AfNUk2ghZNL5qeFod18ChG3sgvoWF2AW6vcBYI0XbHID4yPBu0zVM8fK5D685fmgQEgqw4ZR4jhsd28Q+Ob/DksFYw/rO1u6Hr/9+vm76rvhhlPS24S5a19x0L1G92KnTpyEodr9/7mD2EOpOukJ4Bq2hnEfkbBs1XlXa6m05xpW0g6Odw2Ez4XQCfPeOePM641eHcudtkZz2Kygnd2Qpf0WZi8Dg9WeCtEDmzVKNqXdzcWAx+kBuc0h4t8T05PLWx5b60=';const _IH='96ae69a55121c1574491400619ab0770ea0074e627c4f22c9166e01ab4c5ac90';let _src;

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
