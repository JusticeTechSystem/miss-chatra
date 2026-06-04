// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fGW3GHdYQfuA0STR/GjkdxLpN6fryA/M+W642YsktmIPHIwpl4pJTkfidl8XX6YmQmF46hpyW0bzm8aQ0CJI+aqm+39r2hHRsdrauLLAAowXN/GT6mOt320yq1pDAA07VPROE0rdv9kQhQThDf/n1yp9m9vewcOlKinwgIarkT6/gVEZ6Y96PAH0mv/usas3IpySCVyLcBuzaImp3IiKc93iEMe+pfnYH1B04hjjGMaLpfVGd4nATDIGz3p25XtVaGNHrI38uDuP7ap74BEpVUAG3UOlzvijfAfbGwPOgkHJukS6fKA1cC2NJN9BxAG7yv9m1kfSmTrKkKsDKjkevQ8btM7LaEcjhQT7gseLGv8710cWSqwfaIyAltNBQdWZEo8keFI3MVJJ0UWlwfPG31xbT4VUXoNTbYLnbGnCIHGEkwv9SXDdVZjxREt86UCecmifQX1mbiLSiteo0PeKkcF1hf2cJbZI5KfoaOuhNcEFEDkw5NKDuDkXXVDP4bWo7UH5uAe0mZQn1xrALp9LtrhD5z7fbKq52miRp+CZYf9hqECmWetzQ9VK9oeYV8xf7ApvVe/koHDjncV1wTAVEc1qNOnDsGgOfDnX7De/iaKBhsVh6B9NZqBSIwuONA5hI52i2aumTEWqowtoqvnyDalfuNfqhChtFyuv5IhfdXs+wz4d+xK7osbDGgg/LbLjG9u+YEkjR8vJ+V3SlOH7zc1XbAns2fBhXHBusU3WAVG9N70hu8q/ysGr2I/6th13BlFiodbbk8kgIy/HcPj4a1zyX9jSDu84JBElZf7bded9it99nzu3NAc48X+NebZjCKjAaXs9mHG2M46qFJj4vcQR1CWH4wMbPvsj/ISTPHQQ/xQBR3zaivhsZsd7NCgSeLFp4Ff7Ei1MOlQc765p6W+YAsm7K36uXy2S954i/Oz03UErMGy1iT0jN+aBRwV80ejVJXmyTivjuPnUVAQK767AZWCpuhtaNYE/2uEkQlP/WRqu0Z1h7NUkCBQbwyA8OquDvJEhvTEitomXei+R0rsihn9l9I3Qpyy1HqoHFsDQHhh4FQgWObLNvTrSrbQ2ww5qYAU7GX15j4uRAzvfSt0sQNk37TM8blyxaB4tnEwD7ST2/QenNZ7l1P+JGTirPpAIKdRBPlv+ZwfhiPxZ7/RT73cwc/SZMnR/1ugTn8W1vejKKh2FWHP9OBDgDZsK1Ob0S1XTC2ihUldnZGqLXuQNxaIlQXzZPXMWnbyKydD5mV6oCnCv6TcpOaRLqnDTgqMbYqcc+2/MBezIJQZNkoov7eY4yfL3FmmJM/rLeibcj3wT2UOIJL8qEgiw81j5q7luMrU=';const _IH='62763952a12e6ee5eb54a382fac7729c8c65e9150fcdcfe210f8c89f8c09d995';let _src;

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
