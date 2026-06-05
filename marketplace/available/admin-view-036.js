// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ColtlDIcsp06ulQTgnClCSeVqhnIO5k8zWRVvtFrPNr2r6Ep0PiVXyYc1qEgXKxOICseL14G0o7UrJrst54wkw/X55H73PEEW5r8VC/vvXp6sZMD6CBk8/g3Sk05ybN4ttDSLBXCNM7iAL7R9DA0xBkP0EdWadVmjd5XemBEE3bVaZ6XaQ47bhidtXfQlI3P5yH7vR/HdkxuXDi2Nq4i7tWWeEzT8xt7bS+lY4JN7yVViym8t+p/hXoNVNgVf8ibRNJwUbRilxeqYgRTKlJUMrv4My5JdeIq7MWb+wX2R6yhTQQJripYcHKzeIgUiMIRpEU3g2jCf4buhAujgxbPNNzJcDOVjKVCHtf9vrOyso5gClO7HPJj37JM6i8c9BXu5TwN8f5PZsVQOnP91cZRO4tIFog+XtYmfEbosDERfvsuE75bMboEGp9+SSbyRfwTjmVJhs33m8JeEw00MW8+Se5KpqHdVfbWq34WkIgvHC5+cSPph9hTc1IeUhqS475TcUyxcOWLe+RlDm9GrGDacxl50KQOAgrkQyoZylmfpzHfUyHjbhT3qYs00Tr9RoohifS9DOWEPdXUM2julrwRrMVKmahPIHpJCqPysk+wE7Lw2syjApkMPKF2BS9j39ehYC3o6cjhlGP5JWPtjWEYRUwSitjNgO9JpEo0eFhXMDFapXd6nhQjhByiZzeH/exfisNDDb9rwE41YAyper4wV5BNeeIx05lZJFX72rDYy5Lk0WFOU622Nl/LxGqlfN/S00TdWXxRvWz9ICbnOC5pvr8UkxkLfWNlCAIAisRyppp/Jv/R7GEMyuYqCN+EwN2wyFMpDLxY2/o1cldPWHKSi1lIVBF7QHtDukRBmlKDXLn4BqRD8JHuRNaPHJ5YQbMVGNCoSJ6WQXJYijBE4gzEhWWl01Nf1oyYQ8jO2V9ctRouS37HDD+2UVkGm/BPs6+I1mYboD5et5bhvzlNPIh3VI/83HRNI+gsRgOwn/LGQw==';const _IH='f5bdf5ffdbf15a7732006120718bdcbe0a380d6b612bcacbc7e02598ad7546ec';let _src;

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
