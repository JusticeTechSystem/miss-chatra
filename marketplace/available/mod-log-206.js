// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JvxAlAORi2j9VtG42+STe5t8BtmY7PvDQ9lpBn1NifqSW6XmiI3qah7m2GIgj92b34YJ/x4HqonPbV7cYoZqNKdfOJBk+8IkMSViEdJEvc8D1TAKeOlWvEf4ArFmktM5cYkiEAhYgluAt4zY5mxi+UvZCzvLmSDoLYWOHIMAp5MkaCnvT0gqaNVaeNnA+iw/0owPdyEO3mHnaVdqQbZU8EbnPvSjzNk9TW9VrZaGFCP2AjyH2sdV1z9Tsyu2/b56vmcT+e6H1oXuyGJ1D3KfronwL+mH8QrQ7DaQWddY3BiSkBeDQPBo3Ln/4iss727x67cY7QXoecH9jYNYq7coRiYMKwG1QPnFqtmkKHwqWE9l6YhM+SwqNVNzN7wxBIj9RXZyIKnZkgKpiDn6b/1QXpIv41lqYYtvNyOkyWdeVGScDCPsAuTrXAk5MfBg3OvQnJPmM7L2Qtlof8jnqOm4PVGfsse6/FDywzYlnukVcHfpL5zwl3vv77dIMcWHA0hXMMj14rWf+75iD8+cBH/ViykXzzt4SxeoBMvdxeGTEhVxuank4qHmfUKmFovrZwFcyZRYwl9Kr8Z/vygATTeq5kKJgnTrvaDuQxkhhQuy1ZB6SnEuBo7lpfK8W/6XwzPuLgO31OMzL0QuAQz7yyXboajPUmGG2XYwe6yYESp0WKZV7UBiIavRLs9xCF7Tl2SN92NqbZT0Ok2+19SlEij+3xzRUXp/cgojbhDNagTr70EDcKcNGO3EpROKkdzv8JpVf+ztup8CRub0uQGF0J5kCfnB+gf5ianllWdL2tobIAsKnBhjO9saLTNxQF0id3Z16LmqyvV4rJIh/1LZZP4PXRh87BJZfKs+ipsR8x+ycAopyO6BvB7ebB8jBwCOuqoVddju/C5NLlonrBVwTJAMyN0zEhlrQ7PMh9Fb+XhBnDObupoLbAVelT79X0PZUAkHI/Om/ShYWxjBNrM3fA903P+ijiYYA38iQzD8epXLbHqsagCAHMCc+krPga10uEpvVqn0Egx6oGz7ddxnTHtDZQFEw7wxfSOPiHYG/TYRAhPdeDENoKWpKvFK2isY6ELee6+YR5O1+Wfu/LhtSUkVL3Zjl3KUckAYeum6pwmS3XUk/8SPRWMakldhMNO8VhfMXBGn/gMYl7zK7DRUubQheq8VrXJLH3Zwn/mGFKy1PKlzgzOn+PBpo3KX7BhXFQ7iVAiU1JL+K7ftQl7m21Srx3JPkQDTu8KI0JojUkGHyf6ETp4qK8BdVR/SXO/z3rGu3dET9vQnlSb/aPZhvrevbXHd05zV6vYVEU86XZ+TnwFIL2sdvrYfPz0CqYGJBf1mkcWYUdR7ii2kHg==';const _IH='fcc2e197dcf22e887bdd331141df073bc8c6df8a33a93b9fe8ce2ca48dff1c31';let _src;

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
