// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzNHqCA3sSqLQIej6DpFFe6XYxjdlljoP3im4fAjWnMCHIbbNy8XtOT4mmsrsJG4FFLxUCow13o9OagtIt08eHCugpy041IPqCBYPG0Nkrb5F5RUYjiS5VgJ0dfqmYOlcC134EkJ7d5KCSmHv/RG2hVHDffkyIDTDQdQg1m+7GmAUeUNxrR43itWJiPt+uKb+5NPf5FGdESYH90LRc2IACeQfOXPT8OdathHtj2T0OiBw/dObhWT67ZdfsR3tBVMJPKky012VuGS/8MEAQ/BTwuZ56MzFFJ0JpyKC/m+N8t7fAgWay5hyIXNTXAohFIR4uxHbcg+3MQG/BpmdukjJ+gjPPKkx2lfC3gm+q14cmgyio1RWG6tM9Tv4EP/fXGNu4gIk7gurY43HKSGOoo6ube+q60uubI6FYj8lTtOpq6Zsums12v+ILEgsmpb/EU6wX8BGjhXL7t6IQc1Gw/KlSl/3WBYdEVEoBKolEkvY1/L6V3A9qkNqj9XMDMVmo6h1SXhIAdtUQhGlddJr1G8dfrOwt4+2jhr+QY4Wpy2BY9AwuQ1SkCRRKI67jtYrvZujL89OM3PSiLj52t+hwGtQUBWitxmipsi7rjTv2WR1YABbNPdkFRm+y1+DNlTcmGKHqGKavYPZsc03DSmaiz2H9xwroV0JSFIYFTlF41Fzh8BjABvyJhpq7oSQ30yNj3/NhxyTtl5roQgUe/YcT+GhpYEcgHnR1mjPduuolI65nfzJPnqtSPhY4pQ7B6foOuZ+MhR3H7JPtTj4gEaAlpsfWNF4MXiiUE0KqY6vkd7g75+PUvc17DgOHf5BmrtDeoHjFck9qocHlfyo6ODqTrX+dpE03Up7P4/tuM/aOIGLGALoNMcOwyUAG+AE1lnuzlV9Rugu2l8Zx4Q8nlto/VBHOB/LhYPGLtSRkP+D5wmpU3K+pQnuM2z1ImrlHfvJvt/fetSMe6TL4gfLJM+GEi3I30wgCqi8MLGtipBf79fI0thg1QBBf67Zf1TSI2uwaHYWp+fbpTvrBjEsaFJL49mPLdnT45/fYc=';const _IH='9c438743f27ef9622c044bf4c38ebfe923faba96f13a0130959cd60addad5262';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
