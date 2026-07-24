// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ5V308y9nsl4gJO7lE8JwdsYUsVLuM3kUdN9lEKawkopb9Ce3eWFVYPZNvKn+pVL6MCLj1Hd5CnLmLMj3ZVrnMHBGdERs2pze0ASvFErzEN3SHnYwEOgbDbHP9Pr33ESXhVZTMjv/0TQ/4BenDfIncsTjr/q2gTUuxZGiS2xtgnx1bqTuYIlH2KQSMsYWkDA22ANE3mJJzSoQKOTNctVSHlDw+E4yiOMEVx+703U+fpjyj4XlVBlONmgbfR3m6TUxFar2134BO2hNIUF80f3nBx8TxTYn0YxO7+Z5z0241oi2a4jPc0rttn/b0mkwVk0c3woTa6jU+XqEa9Tyx5DiQo0KFcnXcqdNbqp4YbqI4jwvGXkMLikPwO1bIh9zTlDpCVwMfwWzY1oNwoFAR9Q7l4IvLsQyRnnoiEFuw4/WyAp7Tnh2NSpDPgzUpubDBJj2IJqNVoFVi6mAatFuyfvzN3CJQwOjSkflrqv2mO5muneAtPefcw6fYKNB/d8qvKY2XNs7RMgeCFE4YEYxdGd0qHkapgZUMZPwuJU4QTNTF/D9bkEgVhEkiR6uEAt8Dpw6KT4X23XlWKdV/Iv8+aJR7W6+CLCh9RorJdvvgK3h7j/QthgZo2o6FGoHGqfZvLok7yOpDCt+W/o7WJuCiY+MfO8oajXcGfYQqcQkeohzjYjL5Mr6t75xN6n0uID7SMwe7tmP8himqYSyhvCQVB0G591uTX3jCiX3np4debRetLJdZw1BGhNl8JPfXUQsr8jVLFnkNAOhJ5Vn3nZGOyz/EDKipkghpAssWbbk4hMOpn1ao/WrxchS5Mt7R3sYjIHhgv8yExaXl2vQIJJ4x/ejhgRDfP5Cj9q0UqUAxolGVFrZzzAN1mFDrhdszGiI87JUr/kbrVpRqv3nzPmzSogH7ZTLF5NzShoxOAfiGw7VkzYtEeCWL/ZWvwywo6HlrsgGqER0ZTbMivsGyX1e2Jo56SNPQ14gIPGR4ooRMCFVGOkTfVe6BWjU0R8o=';const _IH='aae8937802282d7b59a03e3779958649249f8bb6448e8878e9c5cc7d7cfee33d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
