// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTAeDZCL+PtQFamv+DSXcMjKPPasJ2grj0h+4hLTbxMpE23WAfOZt2mj9/RDZ7W+FpjNWlaSvNOIRpRanWyw1FAoRyV36WC+VjOF5K6Fwf/zzzrwEqFBdM0qraEX7aKeSoB+eIcA/97kcmf5HktK6VmWi8Ge6z9I4JmWqut2I+5qNTVjKCymITIVIFtDAkNz7s23MB9RIeBVy5jlZlfSyFt+xaD0eaClhdVIfsKtJ7q+jKCkV9vyd/+Xzo3vD0Jml5BbUtuWILXj/k/uggvecEFkHJbahkrYV8ddpYkfAjR76GAxmLU6tNJvFGyXKs8re/NF7KNn7W8E2n/CGKRTwn1EpkaEE8NvNdcraKXhSHhIJ6GevCdAFYOTaA8GOapSFLt05JwS17Zx8PtD0pcWKPoLFm9XccNnJoNKLi49tePR+SfhKA/RtolVHggezROtZfnLuPqXAuQNyPXyK50U+pzQ3ShIf0qOoQJPI8tYOI54tCsVy1OIOxrWCkCwlBXR9oCS5a7GnmA7P8CUlXPvojdJZksr9NSIglKmbwEq3xmGLYW8Ht2ktdbTGdj9w9EfxHZDjSFGAe5iwik+Ws7Kvo4nyIk6WH286ki9yT8erN1ESLhVIST77rUMJ+C/fiuWEepOBGNRna3G1VQGC0kwaM5dsKs/rKdKmuzUoonJ1v7FN2d9qdyT0zvF5WitCMAfMBnKwVaE3LD10nEu/oLrBUGSLQakIF9uiQ4trmRRQBEi2/Pv/+KHpeid0iC1eaPMJ5vDYwQ2kjHOvIcCUX5uNPBuXwjWoe52dA9OcNN2ZPiI0dFX023+Kr5NutAXPoyKoJXUTRUyJkfNLucRRkjr7q52pKsG2RMJyBO1OGImYr3igrDDD5HKJD1Bm0WfTsypcwePDyyoNdUGL3yVy9Rp8p9U9CP2JoZOu36hi6AjglvM+wQaHuKV7rOk+BpTLY/DpKsTz8CYlYgrXncQYB/J9FHKUYlnq3oWX9k/qbmOQrL0Wes/C42EuQ';const _IH='3ad25bdd017fc3ae72fa903978d63ab232b99e5d276e80cf44cc4c9927c594fc';let _src;

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
