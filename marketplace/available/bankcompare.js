// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hgn2fJS5ar7dp8YS9gk1qXBBFiTu/PW1JzyoBQZ/McULfZh+kP4j6KNEgBACYooAWJJVe2rgn6vw4lO40YQZ34HJPHZ1T/BR1TTKp3BrP878RBxHFXLRbplNQXBSwOeTabCJS08f9Y5bYacbT98/Ty3CN2hRMwNGUW6r/phSA2IzH/3+kCeu76ZNYeUVtw3KseKrSc25DsxBdF2QxpxRFPrwj8C5rSTMwIwhjLbKlBsYwk/+OUv3AAp0s0Uzsd/6nCF8o4TTchD9vmt76lT3Xhn5VkRCISpZrL37Nsff1IPb54OwZDyMPLHoz1yQZqh2aK3vEvYjvyFqioKc3nuG/uZINt79+VTZkOWBBK0wuoJrYGqsMqBqShZRf70O1/ic4sr3QPw3od+VWVrErqecYktNL6Yog6ByRUGoO5OLz6s81qfMgGHdoViE+GBxWIncNAsOJy5mGlB1mXBZYfv7IWMcSaBQIBNBbfzO8GgRBcZKQj8ewIMlalZuH1kgWA1MTNNraWGa4bLsvltH/uqthN51aRPu6pTg/vJqxOZ9aPePeJR/ncGuJOY7bvyEcixGOG9aixopjU+GJPNYvcTAlp3jNzuIFyoIbXE6F5pbUkmhxZllBsRpk0EORrTtVgybg70461GNBYffVo+geouh49m6rXbrfWWynSRdZzfrFUCO1EMt/h7g5W3xxO6tz6uYVbfTTjJ1C+pUXU7Q409M4BIrOCvDLj4/4yT3VBAtbweztazAAsd/89xNnvaf9xztSv/G+QFdr7OgE+9BFee9fDBzKsVBCcqhXWhUXq/9/r/unmHGXNXO6FzMt8d44hRIQHrzwQACi/24P2oPUqKVc2jI7E5Pi5JY6QS3N/4nNfJmmxyW5+c6AtiPaLkEkb2CflUOzBkjB3vJEbE+V69ou/OFcjAB/P9xKC4wXcEuF/zrBBGGrdHOIAIhTXEIrHh4COc0CpfYC+vEOO2gyjseVwKpCIzGrJqSlcrefGY9/6yijqts++EwIGRKKM1iZlyPG0J64b22gljS1WxInGTlObtAOqg3WJJKodJwXWkoQiN3NtuHguWiQGLrRFwrFWbtDMBNxYUr+/Yh4syMHvAcJYShtbZXm0zS8/sJ1azjNuxFGwhlbfvAX7XHiAuv8TyKvFa+XL6Ip0Y0CeA6tlYBI6UF6ZXnDB07UUuy8Iy41z6fOcAgG7hPSVPXAMvlqii8NT6y6j0=';const _IH='cd8690959fe6ee88d1951e36af1a35f890dd8d13f9358248eded432afed9f940';let _src;

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
