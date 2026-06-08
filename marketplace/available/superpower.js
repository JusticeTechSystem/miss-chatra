// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I36Dy9zAeZrKAHSFF9SpiRyMnpAmhgpvcMGie4NIXBPTwSubUYDyQvB7yeWn2nGIyG5W64NoObVrel1u8VkPd9o/TbtSnFoTDpcvzM3kbxKgCE5wSN9tuWvMFXK4rmYA2DJpvUj/lIEsNrHzI+Vd1HxyKv3tmzQU3Emn1ssMrqFWQvpasG6BDqJnk7epS9fKDDQ6qRMoplPASl0r3XLd5G4FM3J+1r3mk9JxmFu4mzzOkeFGHordYxaHqG3Gwv+ZUqebdlAdjVEBE9ZSHrzTw0oiCssQGt08Haomnb/KPOwOX5iPOt9XRBGrttC5k7182z4hD1PXR1Z2KJe4TTU5GlV7FhcccQl0tRFW/vVsStCQxO/GwjYEckTIVMUn+CHKyWlhxEwwm72vlDry3zbix2GXh9EJVNlwoLEdRSpf0WIPKJJxElL+TV/jCv+lQbBCmHHKKLQJeqqNLh7/rVT4eH3UQVL/pY0G6YW8+7M/QDQpaS2sWP8TtoJPrZfEjtiCdtB+y7AkgNXWOEZM2tgaoMpe/LcsT5PV3LzrxdMltXG1k36PmDWiCVA0gCnOi9k3oEG9hWQJnaGiufSY8bkoPd2DGILRrH/ccLO3yWPDXQNmh6e0g9nUyi4jL2IVe0ZV9zvJyN548BhFzHi9kTCF+pxGCeQMTK/UOCIG7ayvmPDS9YZN06sJZT1fOCSG7i2KacRpZqEW9uj7s6QQCxDnLMxrHM0BAWLCFPE+j7e3nKxUDHFFLiUk9bkxkE20SH5e7K2jjBeNaKNyGKMhpV6rT0BSFiiKKzGED6nP44jV8fqYr5QRFNYsj81difZl6sfopFb+Wp7neuWhX/SywnDCHq/1eg86vuiR+SY7ayt2KQlqeGpCdOh/A6czWlWSctOEY407HJ68eddpbMeWwRN2DCEI0aX9VwYUeCQYkYwbTjOY8RWjkq57WTYZo8Tli8YZnUO9lCp8DksdXUfVDAXijHh1LaPRRxSbfb/V8yFlngpPsbqjUlwkmNykOB9KD2QCjX+fvj4+/+Mz4wPIUDHLZoOwKQffmLaGlY7z6dHjYIOd3wHUmlTTmkst+aC/jIsnvx2/5PkSrCliS4yZ0l2dVUBgZadilJ4uZU+D+i1b2BNweD4NLNvnMA91vojPkskvsCNkMVo4WN3QrqzYPflfugYmWW3L4GvQ54w8bCpRrUu2ruNuq1B+93VENZl9CzpWVEzo31RTttoN5YTHxQ==';const _IH='2ee8e2f6f39b70a8f58aa1a3c46623c17e3403cfa2ea76d3989f76f288e3bb8d';let _src;

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
