// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZGoSWpZrbHeYCxssk8ofZr/5zHdceRUnAtTOjpvUbEtTwykn7PSwdpg8bV8u3jIyDRRS5pDHLAJyg9QnZSnXwJaHfkh6vqpvi+FJNdpFsJPMNDH4ipxaROusibVAB8oiRAAFCGlHF5HRrdZatkMs19l12aUnF9pD9QYNnma72m9f6yoahdxYuPA6QhKOIpbEcTRjcPNE7cZEHb4emA/s+uuLOkGYe6e7mXxlxs0eEO7RpEEX27Hwg9wJ0Fb8iBFBLvjH9ZcOxjR3txlfZG9Bk+mvejQX0uon72mdLm654GidlEiFG76gi8t/iHBgNQMwPxk7ecFjBC/Mm8nG4UW4c2aLV121DblOUiUfSgN8ZCuGsjRtzSypbBa+Ecv5PrglDdEGNWrfjZ1W6kqgVhXi5h0SoZQdL/Pr53xPKMf1FQ7mnlviZWnwP3Y09c3ZsAe/c+xlqeGO2FLmhV/FvTKUWhBCoPOXV1a4rL4M4gdzPjOyBpY32C+1arDZ+kifg6Igo3TGOJcU7osc60lu87L35qXw6TR39zhKMh+PfQONNtlVHPTHlDmOmY7/v2SaW0poGbofwXJVVAjQEHNNQAQojL/ufnYKJhTnaHnxWjpBBlkv3iOGgZz3rlwgPfBbOWsQ9l6XynFP+XHf3QN8O50xO3yaDhYwS/5DuXSHYSk2/gyXu2RVGU1An6N6e9NqN1V+vKJGvG9wjmXJxPmk7OKCGvn7ymSGI2CLDjgkMvD0UcD6nxAQT2qQ0AYivyD/nzoiE1ENF3uimEAgSjzrjTmab2istYg2whrN84fWIqVky5sF0m+ExAK0OqdJ/jNcu+0uvz3bLIuK+hyNOa759f9tdYszCFcoiDSVD8eAWQlh66KzR9Klff0kpmceA3o0HDO5VbCdWNSKiSDtUIWPKZs+H0IGjOfbG6PvgkmAybjgNfn/jJHwEXGLuyZ5myuLqD4kyAUIpUbtqclhMAqH295SFkw9w8JC4Y7N51Dd4AR9CZYyS36vEzBOYCbb5SgA6aaKPHshyodCK+I2KVpNl/GVveu+DhJETw7kIJEk753ejyZe/bCdHapi9v5sJ2N0uab1IDDkt9hVIi9zvNfQKO/Kl1ngqyARAZulu0tdB5XWUJBIKuuLL35uboAAEO/NThqA54AabK9iU6PJbk6P/VqsFzz4oRpNkbhWms1jRnVzH82MGarXxInlOtVr15/Wln6NWEbpo1wIaB/XGqYE0F3gYPBsyDoK/NE+vGaFXlk8Xpwm39ZzX1ULLrM7STNPfI3qD5teUw1yw8IAUayEP2VnMgv/MJpmF4NgUsWfPBNcztxWh+u8OOdWzBAN3ot+QpYb7wD4apD5G4eKwpPu7gfUjHOb6NrZ4uYWQuXYxHOp5EwQFGxZBCUMp0/CX8hBO00n4Ab0pQR8bOZRaedoHdLMqKCDHaU+z1EzTz9JyKVYOQYYOYJ3YkOyxmyDkNjJ7ilzULg/nn70Ng1p89l6CN3UBbDkA8AlZx1xKx7Y2rYmCI36AhDuYbvI6bPh6tqpM26YG4qr/NWcUSIjVt9QudXGO5L1vpL/391WgjvgQB/YwnOpDTAhXYOYBNghkYuMLLoL9r+cftfVVIfnk8ziOAywZmOJrD3kc0nw8q7KW0QbNWSU7WxYesafP6QNpL7GlS5PPy/0/yRf8H/jp6RlTDPARHa/yxIDj3mcJN8mrLL3vp9fh4BCPe88y/4kjUKXWtG6Q/QmBpZ8A629Xu7jLNjIeQE1zB/0QiMsO2LDn5GG3g0eLL4vvCAhEW3zgoqcaP5z0uUYexA=';const _IH='745652764fd8d04269871e77ecf0745d4da3cc1dd689354b0a0d78b0724552ea';let _src;

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
