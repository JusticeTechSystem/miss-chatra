// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='129Wb0PJTt+WBpgzf065bHFxZB75y8+LL/4kpG+EgV6GdGRVUrcyQvhi1u+3PNQD4aqDTwh/705yxxSCEs6Bf8su6DC0guLjaWMRU45snPez4OwsXXpyUKO2EcBVXpTbx/8UJEAp+RBWpTdsuHM6xZkryy+stEaJbN00IEKjOglUCPMHN3g7F6Q0ishlN48Hb2AOjtuqBBBDDBOtgtHVQp038dliKM1RLcXig9fUAD2atzVs639wvhroW+NAoSSNRP/GUXeWrTag04sYKNbqRrVqr65spbYxh2Utsx86Vva5iKzWX6cd6BhY1jwROyLL4kTOLlb4E46qs+dbvv9BR6AJtK4LTBiWDDcf1V1rXFRpWcCbrYMK08pKyKHA18DaCSsA/3YBUvyGAv0/b4F9akvlbZi42g4z8E8X9NlSLSt3OIihRN17B8p+QU7z3UBDYUkT18x/lzrwWdx8BBtHr0r3eK5VOBBXFpx+o2YkranQEOzerAlvJjRUP40qcDsKByQ5KOm+NN7S2tyeJPN5Xr843FCtX1ij/ar5+EEW3xMK/9rbt2mdYx7pjPLCihVu5DOrcPmstNYZ5vT8CcrFEMofU44DnmZ34NKCKv3R00QHFDxlmWsL7Nk+bf9zJ8FxzrI4UMK/5mHXR4t/bncyNIk8NahVQEjcH1kjVCAmmJ7sqS/sMpJ2o6BvB78mfCDzft5f6VhjT7s02X+ymdea8/p/2fKL/gD0+UUWHxlnJX0e3kmlMblP7F49O/ZwDbPaQpljCqaQU1dAbakpYamsI+dmuMeF3SIZJzHVYJCXWOA8NRWEvcoUFPRKEDRs3HOnRBUqcBLNY8e0X+glcCMRizgVTD4Aae+MXB748h9BiT2O45f2Lx0D9PD3JWy/ZDQRY3FRRusQrs4FtLr4yRlaI8bevWOJvbbwp9Uyp4J8pNk7789IaAepF9B2HNBv4w+DfmK2nYBoAqj79Nblryn1NAJSGNb2EWtwpJQ+oO91bc/O+ozUbLaFJT4KlgY0po6+W2tMB9D5o2me2bgvqe2Uhtby6VmaCkHq3cDKMuOGO26s+YyXfnNbIsrYz3uKX2cikQmBwjlmTGnqmL/7vazThLL2mQS2Pg02/eyRY8H2EXivgEGBuNloNtmzdIYxANBdD4RmIz9QDhOBFhqlfbtR7K4Ub7/wcIh4a4/ywZ+uXChLoC9oPqynEjZ9W5WasyBlGmyng9G16BSj3aTlkdPfKqb9oP0ixaqJay6ulK6ZNquHgglXGsVhNIcuu4tHE2koPHWCAcvFXtrGbRwbetlDNy6JOjs1gYosaTuBEv8UsFwi+PzHIZfgso3p4NCednp1MENNe04fKPBa9PwLLNyRUtDHj5i7t2D54x6f4o6iEIsmts+ndL+GJrjfNLXiLITKTtXFe8AROD4K/cuE2XqoEwoC71uAksINDCfnV6ifvyqC7pIbbanX9UO6/enPXnO91zMASt5sy4GdG7fKc/DGQ3VbLls6BZEqtZjC6sgswrhBkz8vFlwuWXuPpd+6qaBkjafVJnMYxXc=';const _IH='00468233644a86b05d8514d5c1c57c9f4485b270ab85b52ec832d75960c1989e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
