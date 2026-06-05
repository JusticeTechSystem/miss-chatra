// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ghxyZC158/Z+/rDXiPPCFLk62Su1do58Pv5QFFHnOcf0+9P3iSf6Pa370Y+EuoFXnK4H0NLtnLyl574fn7zjTDynbAf1qZNzYnHBDKncvPuNCnC0pCSjFZAOJUsoZ1oo/MG2ZYT6kR5USMGZI1hhDO2E67185o4nU80cMyICRTJ5pij+2x85ibpI4FGfsMu0zIhr5vs7GGtyYg5NbUNLGXnu1gBwLd1aQ0yM6jYKQHh3EGxq8ZBbDhiNKPZLvS6ZhEF6wJ4Z0vrwrSPOUGijK6ybjgGLjY2LmOX3RrlWdJbyPh30FFsfJCaVeuJyrtoA+6L0OqSkrNL4j7ml93jWK2mIsahXIIq+xI6feZUsgRvd6925piDSKQokDx4eV88sYd+ymh+0T2eU7KIR4RxUqPAYOywJH2c5U0MQe+A2IesJxqjQu3KG7EMV/DeRWZSLtjulj4Puxlx6y6rqJB28KzSvRg512qtA9HnibvvT4Szf6lcUJnnUzFFdtIxI7FdBUac9trATngUmhXop78Vakof47rPLXE5cj61/g8qeasqX3vUq+2SNCCfoCkh+gbPIG4lMrGzmp58JCJR7B5J0i8rY0I1UZtadBxZ9wPgXh6wTjKHTD5O3j69RTG89lhUd9stNgH/wYXDNnRN0N8wjXWwrR360cmc98SX/tNemdtHzR+C3jXRPZFAAR52BjgltlTKt/iCQ7no7WmpmfJ5Um9/GRPfCKXhz8Tv+qVp5Ss0yGHkRNslSg6bTUdoR9IartD41AAIaXe/SetqIFULivZwEwNVDf2LnAKrPL5pBJuqva4fpfMxGP8wZXA2E3ywzQ7F8YArzJ+9BzWAG5F2uk3QlewZvHsUyzuQJcD/eIJ9iNy5eGO8zc+CGOglEXiu7oHGzbTuWVoKKMYTVw6s9/p0hB+0C4LvPudXRNOHG0/BISzJSn0o3H/uFRUb9HRNpI4jDya0VCqTUeaRbFSjKdEM4CRIF0cYVBYgL1qB6pyAunpkz3IFZxg46GYUtYsz4vENFplh6WztfGoJktCg224gQNhF2XVVZUiJpBTGcNjJRBT2WI5sOWb18lN39O+BKZT+FMNNzvYtV5bk1MtpowL8xtC9UPKkqeYhkUg8AwgiO3zgnpnUV1Ghoi7bz9U02XAKhn2QJvQbTtsiiK5bbxxD9kzuS4QsO81D/pPMjzdEJ6lipevGxfchD0ysmyynTc8rsjxuIO7aFwc1Bw0i8p2YWaXVCdRjnyx0gVoiZf966cx1hXmymotGjQ8CXNsHZg0wLPN0qtT1R4Q3xjI358RuQbHBsHOcZaopjIjOZyUMFyyzfbh5M4mSpZK8UbLIGn0VOXOMHMuCm4dEjM7tZGnDX6f6ZKITMp95CL0sO';const _IH='bf602a538d3e0f1892686f488ba3010989496903b82738d7203fef3ab28ed644';let _src;

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
