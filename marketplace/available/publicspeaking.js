// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTa/GW6aDe85Kf98BNcDDB16Dqx0YZNDIHi6lUOolRcY5Z6AQbaG1IGzGPH3wpi0ScQej8BHG7MdnU9MDh7rSPgGkbJtDPMSzNmBPiglTl3rXCMGyYZM9GVipHcYJhQb31egjyYU+uWtFEOOGwanPHM/RJZnK8+upEZA/deFiAU2N8a5ZIoV9Y5eWRbJAp567rrkiI5/rjngYk1nBTUxSuqDY/BcBzFJMoqvKo6ozTTbhhM+sZ9Dmio1NZV4m/E3NdLcnZlvzfDuhStV8/yvmJoJHQr4SDaCS9JT/zhh2mGfq5gNpG8i+crwQpjnyM9yRUgYt7PWVL6KKYLAYMTshwCvN6OArjhQMNnx+Vh1IBHKCzLlgqqeAHY4dUam3Zo0N/gViG6L0gOvTDGG2CIAVnAV6GYnb0ItYGOrWrb2gI7JlUumEhFknM52kv20J8VuLdeXI+0+Pcen0bhwndx5yesyYr8iiOkf4xVz6GFTkZ7SiNhzLowGeLU0hwPQiIyV56oaFinMnf0pEd0WuPwYxtbUff527An+v+JCNOfW+tscdL8FfPKAaihOD/Tw5Aa/TxJ0M6sLMpdnqsi6P67ZEbtOam0F3ksAqaF5/peYzGwMMXDSuurnoe2LTU+t5DRZR6CGjTne4ffvTbeqsi5a7ALe0HE89YEUTX0p/nsH4zAtROoEojVoehn8ldPI3AgP9VZkByHagIH3GQQ6sltiiyk6uYgNLT9mYL7C5xi5MRvWGNY5k1uh85LKuricX6+2uTQ9OqRPBHXhngJwGAK3SRRFdMWoEdA4kPMrFhb33Y9H5DK+YF9cDPUFDS9rmZOe6cPppXlnNhZH9YeRedrklMgEe3XmhjxKapsVX+IZMDfD9kSm+wJGJfYAiUxZRqucNSDxiRtM3ksO8FxFrHeARn4apdZY0sOB0yfhge9p2U+awRGWigqTsBKeqfbiC/5qtm7L3sF4UQFQ2fGjRSZRLcbNQ81T+akQZQ+SKrQuOCEVOye/pOrq0IRs/kBh0zlrwbpWaTSIRO6MOUqpOZb4qhyXjUh63Ur1aeUtX8u44j8W3FAgXxTJ69xAD7HlU+hN06DVtyunD6ouqb7K1wVz0KpJ26qClEbgKL0ldFTKODgAV59mYkgfcWrPa4ftQ3D5SEMZWmsvH9s4t74GzWe/DRCMlAPCUY+RXag+V/cSWjzr3hRXYE3UIU44csZRtKilyu54UbNBA18jT6VI9yyyU9dhmQ=';const _IH='9b5e5a9942c1893bfac104b88670dbb34650de517da2efb44ffc905e646add20';let _src;

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
