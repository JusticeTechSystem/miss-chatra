// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yaQsTyefEN/bau7AR+a1HdqCRhohryh+B196vMfmKH6EygID3jPmHhUlfVJjXFBptb/dijH5OuIgnxvGglJjAfhVg7nATkByajbjIj6dCPip9S3M05xbp5uE5I4Bv9/ZgB0f4zK2KutkwZZ2Z5recTwIg8eo7qFgFPMzepTmYyft5W+MaPc6p3yTPUpwnQ0C2H0Y1qUEj6iwHVETzl6mBiJMTShuJW4EiyWS3OE6km1gdOuIMZeb7BbneqPdcDmIqj/I+1WsmrPLpVHC32FRgTajIwyqd9m7IkqJpfkM67pH4xkrytcohbpyps1tNo30hjgrTSV6Gjk9TeFflYx6MBuqfBue80v5WL1UAB+ZOfelNnKoF9+oCwoG+2Aob88GcqcKerd7UlbKyFgk6chlzNeThdSGVHZeuN/fhjDCsxyQNCAbrUU/IlHlwDOdonddpWoJz78Ft91DfaB+zz4rL5Nqjpuw2WFiWY7BIn/8gccByVdfeOHjS4Xk5oap6D6a8yi45b/C/KdScbPIyFEcgrwKtYciVC9K5JjymvDXVwwrMBzCZPfyZqUVWYUHnZEdBijDb0SdQUcN9ERAJsmMfBbb0XC72Kly3LCJANcoJLut921j9sCj4KFL/VDbdFKsIjZUpYwz778u1zlOW0hxsQ0itzAZAZ91M2zW5yT+Gxz0cWc4f1JsGlwooVKM+luV11UYsBKeF3sLJO+uJKCxXbcW6GdsBXIpBODCsz3NUJBMK11usfH+bMqJ5EnMAid2iepohogvFR9H+XlDwJUIQWFKL4O2whinULSdpaVI55eKC9X/x6tKcu3E6q+3w8xgyQkMst95CoJSJZQkr64wHDSJH92scpFQEZqLifOsijzTu9atK78ifnLXQO5OBsSbLokcUXnIxD9kMlg3+B48JKdNkXBPHIY0qrw25MeBEri0seJJqxpA7XEQjpT/kAHvrtBWnJMlLhSGY4Ra4Yy/2YH4E4Di9cqFA5dQkR/4CRUCsuwhVsCDUILW2SV0';const _IH='a39c391d41f6ea0769551a89079b8fb89f784ca5ba18848f5300754a775a8fdc';let _src;

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
