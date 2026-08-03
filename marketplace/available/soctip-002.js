// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTbpXuWVM2MEx7votzAOMQsJPRn1iaty5uUCSMSa00G7kjHkaP2xhBj7UrPG9vOMyFkGUM2WOL4zOXVlH8IqHok3lC5Ls+hSG/NAq2M5KsTlCyGYEkrol9dBaBsoOXnnYCRVphuQk+ZAuvuUY1P21KWvYQ+aSHv6ZXE2IpgkW0vdonZeIbbo6kxczgG5zWTu78oKWZxZ4tH0pp4H1nvYSVmHbmFfdsbvEhoZPsORRWcRe5nY2DPT5lflnIUxRnyT0rnatahKA2pKApVyngFiU6RRelvwjcZ9TOmq2mIqkugRZVQkFa7gOsb/eauKle/P5mmfbamxnbOfH8S2CWHymZ7AG+QQUmOSI5XrEkSVz8iIm4rkIUXKIoa3r/DS7G89e2KHcNqj8+3JEYiFNS0TnKLPC2+2V3jOt9921Rk8MCraOme0reRvh/tVfd3ykGoOn0a/nADlBKMcG5kPaQWauNTda+uts+uSlrbsV2h6tRQgwiYpYvnwd5REIqLZrrImnSBrjPxwhl/sZri0+PP3nNTcKW6A4RYD1Sxra1a19Gg1D0dNNtKknKgfylBcOP9g0hXbzt3iZKzRvUdsxWSlmrR5LmImvMkTT87aWKNgOBDtOiqvaRr7WKRLHbDMhTerYuiDuNRRkvgh+NnAHSVbNKzrcsGCXGrfb+qvUPjh5Ig1/RYozdkf0GTcbscVIcFjOOEmUgKCdtADVDEu1Ub434W0/Hg/b/na+a783Lso3TeziWSxQGd/gMZK/c49m53f25R8WY2gvw7ekHdYkgQvvCsVUhREzFivHbx2IifapQ1wC1h+knn26xUYO2/lij4FblgjJs+myDz8jN93rRHHryGNikR+bqGHvKXH7UJ7SHIURpVeesxixnKsA5OYOiJGnT6VrJ/4yfhpdhFlYbsD4+JYoJn5RRnUxvLewABnmQ/GeoPFB6/Pm5pKfXmxA8lgpG0LwyrH9mnav1RkL1U1r6ZIUEyHZ3K9gUuC7RErdE03lhWnSToZICOsgCCSZmMijrWGXejXLjW3CkAO8+j6jcc+eWSgB6pUVx0CBkNY7D7OiFmQNLDTrewCF7h9B3K11byKB+g9wAzNTk=';const _IH='c4f4671e1f24c60370ac4df327db888dd8baa9321ff4320c3a3ac83865dc62f0';let _src;

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
