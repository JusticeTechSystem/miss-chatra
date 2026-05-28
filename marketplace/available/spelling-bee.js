// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p+iA7fmjuQ2o1yhj53J2r7ryYvZXBy5sSbEfhdxUckKtEOGvaXYzAzHdBZpTAOWEVWPRfAvRpihHZZcfSVcvWtYaEXQe115SR/H0BPFxGBC0j2P+zG8jYG922BpNzlBPasjRS39bEjAy0Biv/a3kgW+lcWIC5pEWaIHmgDUWBIK4FPAsGwnQZAhlTNclgmi9c8ec8cFF/ryNRMFpmK4AtP1cCUXq94e1uBFoxuQNb1OfWam8alzCjPxgU1npzjG0GJCBBLcpZK5lvWFUqAhkDGGVTVkIiULdVGqfFydTGGLeN5FvWoGxNtRcWjzqMKJP9pGjhflFsYko/9GVVtq5A+NTe3BTJmxJoDfnRbdbpoKN4ivzlZhnsKnLYlCHkGWJFYE1Oti6cc05a9KwcQ6eKLJithDw819lx9+znb0jgcy+DYT3/7KJy01SV942Djn6oGgf/BBTHsGLiW4MAipuSoi3evFFOwYiZCjoEunp/fKQZbWVsYrzND5mJ5FSO1JVA5nIk+WKQ6N5L7pSQeRWlTEHornrFxPfeL2CJpL1ju46ibFC/pG2EZfIDeA1A+7ZfbuyaZ7AO1RYJOJp7lNp0GOJxMgIxSEdFslzxC1FVSSiDcNcG1SuO1ouV5TOcLjrwFXhUxpXf2E5aIW1vcmo1n+gU2fNo/CQvmWNlV6V/F01VLACbYXAAv5KOZtuS8tgxCUfepWmA9E0w2UcaB+hdDnb8siSjEqKcZdM8xGXshejqgVHCfKeVMomy71YzhJSplzTnnjyNyLEw73FJqTGJVL8/whu6mCAkZvurLkKXF8D1cozgKo6ogcjGgPFT2tOlP+iFaCt7Sa74++xdYniFrz58Bk5S28haslKoTp2OMnqugrWSyEMj0KZSVIGqvPRu0WTVxJ7C1JbF5nqwin20GA51VGIukYQTGHps+3kkRGvfykH8oMc5FhnwG5kTqo3VnLfOroKiXduPtuFGHqI3ZBW0u8r3Xlwi+rR5U6ywaCFXw9BTcw74b9gR+8uhUkcVriyAzW1zXoqzFA//P/2/7ZexzGeb2NQ8zlI0v0WeHOmiVX1oZUTHuKQgLB79RhuTVHVSfVTI5QKExf1+b7HndzTaQ9i8CgcHVdYQSY3vl9K1xCI5VF+Uu4LDHcZWCeQjG9K3P8ajYxEw1GzuMvzU1dkfzEdJtPOaevdRIh/Bss2AckQ0BvnXc5Y0GVH2nnwAorMtOJhCIOZlNPy7YaxEsPEdQLInKKzW0UBtKMKK6YYiHhAFBWcYK9Jxtm//Kw0GpKT9ctW9ybjxD561gRRsNh22HBGBTOAcbFpjGnBe9kF8XCWO3tE9eqGiS90okHkb18W+Bt+8HxbdxZbvVEksg1p6ZWEeoza7SMNTA3xj1wwr6+3NdC3qJTKK2fQ0NjLoNZkW4jYcdnfEPYFsO1SuxrpHhVvqvndXdyiX5wL2TkNez/Wyqr90XGOCqRJjj85LD9Rz2SVdpo/bXcUbFJ2CMfPpR50D5Lz+j/KaMq6WSxDZsMv/EWICxYnbxgJ3a4ZDXfoYkLr9gRGtUc0AddZPsqSlv9ZoE/0d27dt1JPWBb00nv4l3N0jDGmYPLCzA13kFLjhCPBicX1aeFhq9HjMx/D31uZtGA1f/bKdTNTc0guiLylVLbrCwFjMV4Lu7663LxGub5ur/vFOborgw/OifvKRJqcPYUe9YglsVSCyRuTtAJhTGRTWKKUpaJzHRtiD7EtF9hTIehzE/4HiDPK7nMdxdgtL1rKM9GtOZBdqVJjsl5xxoZrSBGj6pzLtdB3HHyiAPZRV7qKWWfXXHVP0nSYp3ffKQeoSwSho5o=';const _IH='275412c5296a58d2b63feadb5041dded9fd494424afe0eaea6a20456775fd88c';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
