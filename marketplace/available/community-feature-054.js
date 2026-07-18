// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHwlaiYVOVEtu14O8dkZSD3r9UrSnSWo0MHQ2xJZswKq2lxzbgu4k2DTid406HI7tcIh49vCiMswTt+RYD//AQO3WDke/uNwSXwBdKFIw+X4e4Ka2d2X6w4BLC5VThLsFGcrwDJ8p4wPFQPPCG89EqviK3WrW8UaKFqxI3RqgjeiC+f6sAj+fEO0EFRWsNDt+O4YYYn1fcpZ2Ys50gnNkzYOG/06AMRHt5/19j2EQjHkp3QX9r2krEDwUSfFBatETbkbLSsVO/aBOK7087T7ncSAAUpKD77D1xW4450hhwoL9UYd4CdJNKKqmLOz+xjQhC2fNWWmAKfYDWcel6Y1XZvrSNzKYv3z6YcuXxHXR3lYWpbLqTD/DpTh3Li4L2lNEsbZUoaktLpCxgLry1ypFNS04snAoLlF1G6Q1nKOcXBzrelWff2Kgg6Loh0ziwunSZ/vq/CEQ28FTUAD34eKz71sPLmVGcUkQeKpVYLnht448fZXIm7sL/c4vxZ6AAix2dntdFT8ThJiSm8/AC3EGrpRVEnVkp2fTfM+ynMhmZTyM2CCMYSi0Ys9ROhGK6TWk/2bV12vWq4mjp1ADgBngsNnMc0fqxKX8NXRqbInjuPvUsqOy45l0M5fRqoDVfuAv1LUvzgx0JVwP3n3IhJWlRmi3BzzNC8YsNPnUQno2BFhRJtS0ZRUr+ePkmIwtBtjqdssYOQ4yE0MYk6LYpAUBHUZSzemPjTededhhBgul6bJ2/';const _IH='1c7c7fce2f530fa11cad12d1c0bbbe1d3b5dbc0e3bf18cfb7926336bcd0b420d';let _src;

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
