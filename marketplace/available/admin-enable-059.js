// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qHAiTLayQl0K8jIXQNsAvW2vZQ74jaLTP4oEef/+7Y8x5FQoP7jxcRY13mKHN3VQdnFYgBoQQg59T8VRq38cZ08s5rxgDDBEncVPi1zHmRTa1QWP+RK/s8oC8LM9e4j3NIJSmlGiywG1dz27Z0QWmN7Qq3Ppmm+5JW1VPSqo4Tl6CUJ+Y5s9C+qig9skx2eCmsNretirHUq4QYr4bVA1gK9Lhe+URxxnVD9ledLMd+p+z6F1aLl1pxwNJXl7GPa20+RJH+jnQUg0lGsFLuf+/LRGDgqCqQBEOcQO1lbUeYoFbrs2GzV/H4pZjGvhXxve0XJIcZhwicGRMhZ9rgiQ9/NiNi3zbmhtHv2Nf+CZNMPqg8sEX+7dgdlOOkfa0Jpgwi4k2AQaxN79fEH9/L9iISIB0HmwB3grHvkf7XA6aqFOPcqpdEFRmwZ5Enx5hgQotYLbpZBg7Ucw75ZNUzyIHs/2VaRDHPxX9SZJMMNvUzm7e/4mKCPjmWzNFU6YlVgeToY94iRwqvMKRMrP/x4zOoOtFaS1gy0vfF7G8JsepkrBchz2VZ/cOUNh1T6lYB31fPjQIiEsQPdnkHwJ8TxYcrsxPbYhNXYWOFTIVUOhTBg06oSNrGX0JmA9nnDBJEeQ8iIBsZMRAc/JGvpsfwY+CxYIus8vp3AdvNYf5cO8HSVYHJkma5CT8g0hIj25VU31+bfNzh9+TyOM6DWof0vOi7LHr4TI7a1Cp5JXHPQ8dQ0cif/z1ThhYNTuyst9+hgHSCkm1gcTF++4X9HGGHS06EFkVN7uq1MjNOVfCdU1+bBcgA0EbJIfmI/fcrpTSYlXFBconQscj7GRUP6qlfysa1jxeT0qi/0gYzJ6wnwAgjB4BEQj97y3dbEx224C086T/TNTxLWhX0r3eGAtnI0f0L3JySAaTQDGW45c9a+tUzdAcT3tQ2zr+OQH4sqleZxVkl3SAQzIl9X9j6r6fdlSKaP94koWlJm7Tgvq8pXVjHJcmA0r+MXCjsKs+3oF';const _IH='7e29bc087e5b4be84b5ff948b609f94dcd47fac9337ea73c2e56e7524d0fd690';let _src;

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
