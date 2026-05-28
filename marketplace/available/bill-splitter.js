// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='acbaJaxM/MeTkPFf4BbaUNxK0Rni6cmrRdaoYEFkNrY0LF/wnP5qJ+qWSRcmE8jhguCnb2OMHchUxL6E1QmSCpf5XLeTcG4caRVfNldPNq3wDRSpMi5XC5DVEaLbqyWNJqlACtNi9/EcZ2Js8HnsVKizcNuzRRR4fxY/iLQgk4L0HFzyqsOMmXwOSg4lZghDEjub5IGZ99m6b9c2dChjo2rp77IRN9ThLZ0ZDLJPxgaaLUQqvEUM3BTCKZctZJ4Jf0SkjigSgUZM07KRcn/nUyEXGnlx1ucK2H/BXbC4qqH60zofqC+CY1FOKiv4yI6lRAoojx+1e9bAs5bms8bqGYNwwLMK0BbdJMUKEJ+ZeiZJlZLozUq3rXKIq0oIhb241QS7SOiXYLVCGQXYreGd/vC4zHay2rb8wtSRZ6lZOykUs2a/HrWdmgrf1TA/sKAbDeCvTeAbohe5FdnX20KJbqDMjy5PkrXFv4hfAUlnC0a9Ti+K9qxSZb+T3bLP0SgAXSVmQA6UGri5R5vc5pJeDmtJyqW3CqB5aav1lfSdmnOhSINGlFcZfbAp9BrFJhv+M7i6l1EBwSJOyOcuhkS+GhY44FTgF5vC0nr0xN8IK/nCZQ46WB+cKk1QDdg6bKC9Iue7OXU8W6wjAVJE8IUhfCamuRWlEg7lHa1s1chc2oaDIWdcu8IwWdiir/xPwS/Hu9mqj33FQLKC9tIXczByIhrtJYVvqLtWaV6OhwqoZRdC9pvcepfkPVjh7GsSGdJn6Jk8AaG8Yu+3Z9w38q3e1ti/bhpe9mFzpW0EZLopFCik6MuTqUUdrqou0FPZZEq+19+kElBEq4JZasIj9GLjUvN2UDvkhU1zTXboYOpYl3Le7kSBHv+OyEQPey8rKs+doC7m4wGoDRWkIc2MiTaZ+HP+Pwqcj84v1kuk86TumcMQ2H3dEnx/+l8mUw14PnG2gras9fPwOf7hyOMe6+/D4Q9REGAv1w72zAYnVecW4oXRY4swTJrp0F9GOY0BC6XMeQHgogyd6JfozPT4WKaINeZ0IqNb1pmsWEDdSVRrARwMqOZLGOLbXVTfRX6CFUB6yDeLKYmD9xU0f+3J8waKO+A4y+ydZNDc3KKn0MuBAipmYebypAPmSeiBWy/vc18Ki06PUitRvuC4N9Zdj2myGKLZ6a+ydF68BMcxyy9NFTM9uYSKmZxIvWTxMYDE9lXJLajj6MvY8IJRfmUn7Z7YpusucfMaiat0KOYMQdg52tTTNAOp9GQ773O0iUF+lJqQ3hPjTOFlkJf+x+YpFl1+BZ0nHHUJmZUWLx0c6G5kCHPZ2sS6UTZbw1FTVjT+zI9hsJqzZOutUox75uH34bERQGU3pyyjLpJ1fXMYqSV4ee1HMuV/ptskT9hOmRS4rCNl2av92/4r7aJD+Z4ylIkufCSfcj3QJ/sLOLBAEsWAAbcmq+QJLtekaSF5BdP0eGOiuaCqZyrrO5YHQCap/lWSYfPNbG5sq7jxQnK6w1v3N3NB31yA3CTueArdp+HAHYIctu3+qmqiXsZPZ2NHnvyJPh+44gKcBiiiVsvJK3p1Pg8XS9F7F+Lbcxw/A1dwhdeLF+D4fvO9YBsq7UhdC9i8s0qxb4QHIpI/FGsv88LTKEij2OESp3BO7zrWUmdzpBXOVro6de942tt6rWK/339OIk9nkvANOLC7PFWrMnhc8h/GSefj/7VXqX9uTyPERMBb5ykrmQ==';const _IH='460cff6b55b0a79e0d5a5fc685fbe638113853b681a01660a4d1e7ecddc8ea62';let _src;

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
