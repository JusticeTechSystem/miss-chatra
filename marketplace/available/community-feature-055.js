// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQyxSIP7ZolD1IddNjxXvhQWw/gQFDV6LYd0JlcbYCq89r8CMkgwifrulW3hjoTVJ06I+caOOjmgGNFEL8xg0vibis+ue8Z+kykssaalAj7q6eXPCgayCahAH1s9anXLnZYfJ0tPrH7fpS1I/6ZRZ+MQJq1oOxc0X4D+s1xEKMsazlNXSCsqwr1FOciGP5/lvSrXRPxbnrOcf6IVNYs2uhGJRtJOIsOpBBaxt6lWapBjYNVl4A+5OuIvk5VamGV1uVBZ7pLxrOyKO275b8KHIblxy7da5dg2IjHh5QQXmij12UzNXPw0qJ9ct1SOJRwQAppSuFLn5pyhVFDfHy06WSWxBJJQEitaGe0NGmP5bBqUloJ+phx0fwhNPl8nCTuLNo9jxKgx86EPFEq3FbzLamH9ZNBxTz4zp1ZClUpV0asFfSaAmmnl3Aa7x1UjreCE8WgQojWhKeq1KX2SbvFEdeC0yxfC/s7t/ybeoWi73uq3lA45U9MzWYAj7nIYo4DwbIQCROzKvn7/YkrZRN5EAG+hKyEgtgw1NR16NZMXLdgjMbj558lT0PAaK1eEfHRB14+7cBvFZ4vn3/T20ju4jfe3tfmuIW08dUO5lh3I/UKzUwwaELF6olIp3wAU7oY54fPS0S/tcAc2qMsDiGCw1WbdihVbAuuc/nxPoMxSqmrLtD6JScWrgWuD68VBlh3rG2rhHnmCXQccAZDLH1WyCqc4JdrzNOxwbr74218n4+umXNEHwERpw==';const _IH='8b856bf4f46ba07240365ed2b8f09eae20708fe584b4ea1c610a3037fe29ac0e';let _src;

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
