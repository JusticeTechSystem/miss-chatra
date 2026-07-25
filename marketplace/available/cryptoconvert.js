// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNJXjzYmmtq5uBjKZNL6eYOB2NiKaJpKws+xtY/ab7ExdgLxfBBGN8hZ36mg/5q/01tBNQWvPHQ3arL9mWtwdEbiZ4Lre3w9YT89IXU293oW7vFqvu5rA6temCeWV2VDReQzAfZtboVfXkY7jUbdidjXFkkyvRRXhYqgA/8RSPtXSz0v82pMYtgN6U8MsDxF4LSYi1fHMZ8bwtFM05igcftPQ59dEvO0xfGeIimqBp4Xb/x7PMvo5qs3IT7JGNFcjsBfwgcdAl1CtLk1axstet33YiNvKt+tmKkq3EXPAvjqSKjAQkXqnpIsCCnEOtvF+W3w4hIH0/gXJCIgDF8kYGkU7KKoEeYl+Dsp7a03TcEEf418kxUhsZpHolz7AHGywv5+x0WFEToCwvDkRD+xUuWbme0ZZZLMeoCuyH/C1IJvxwDwLbPL3l9omaBnANpLMlM1rnEfUjFuIU6HGvNPS8M3Cyht25oly+MkpJbUvajCPiTsp+Ig96FQZuIn/l4+Uio3zTi3AbOzQN00pROKWoj3YkyPauuDSdk8qooXJGvD1k8fjYeJFWfS/Zwmj7UpjvOOELMm8fkPrfUjFEgZl72fLH7g00CKys91g4v9U7FhuWTG2o4AbCzSubo3vLcG+Jk+llyQ9eMqVVZttEZkmT+L/ShWlacnPKKfo3F4x9nso//7i7Kwq38rbZ8FAE8CACJr52fr2uZIOOhcb+lhBkDbE6i2KkFzopAN/dImcYI9X3c/0f6PHvvNBMWWqfyJgInhQlcI/JgYGrdMyLHM0RjoIWpQTS7C/U+ENLKKHaYPv7ioQWe1yJ6fOCokYZ/ifioQTX4dqn2+KnF2h6lxjs86p2jM8pDDp/yrw2vb8Q9UIMCFUZKc6oastXRrDSn8w+kkw9xukDbUjlzSj9r9NApYSS9veegcj4D1HOXtdMFANaoJqkhXQQ3TF+UbBUA5eRDxA88Tmd73bcm6m0PCsBTkXojQtgEl9s07fI9jYGjSIQv/6vNWhgxAogCbJoYldtg4TKXY5S/34ug3arFLx+LIN0lmfhoHTz3EN0DSUWFZte3jlCV1CLW/A58Wyjwc2I8Ld2NxwP4t6byaIENR3K7P+SXgXBytz26jSnJI4rwV0IpkbSZ7hU8JYzmOA6luo+UmAUAyhz7FI/F5++4yqEDDLojCto4URwRGIe6jBzLIOvwYZYfYNVRm325oVDgcnNjPZJ3L1XrRSR';const _IH='0226323582d6082cdc7fc332e413ffae2bd10f6ee2105b37b7e68f9827eba485';let _src;

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
