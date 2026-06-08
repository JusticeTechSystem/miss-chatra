// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RlmsS9F9Y6+vkeeOXtpTqCKt8CKw2GgtdhA7iaYxHKcLaF0xPN5Vc/rt4iivE7S/SGr2A6sswW9WEXJt3YvfxlUZ9k7ZLnDEWyym2DYF7an6oSf5CM3x1u417NQdcJHkwkWaD2qKzDFeX+p6x3U9F51P43c6zCm0eFvKeTwi1ZR96IpyNB2QqnEGcAMZ6GcRyMIZFjf1ofads+zfUS5dFHG6R6mOE1ukIbbiuW3bSbAJB/pbWFX1VhAeUy+81nQ2WU+Bx/5d3VD8tU0Tw9nugelSn8cJonxYD8GwvwRjxchX2t+6t9aWw53VUk6DI19S1MHfcSH5o0+dOPAIq/2gJJQuA0Z9veFv1zk19AjpnJPfQCSVFF940ZJe6qo0idWWktcRySao195b2S9ND9FZBMkOg0gOguephej2cAXmL2Li0Q/2X0X99JRZr/66A5sGFIo8pCzDB/U1vshK+iLgzC4YcK/Q8h04CdDlmc+S1NfFcbk0rX9JZZIjjQcozbZZFqLXhdJn8OZIfoObmSWuQazUHA+8tXRzmF+McRqwT0JD5SBW+UrLH6tVjGuqU1/F3OfT92biXzjKHlwwrbmO7hPcHAThYCP/tLnwYkCDhBZl6Tc7xMHV/10Zqsq9z+Cug7tOnz3Pzcc4G0a9r4ay1AzTRcNAyy6FsZ0r2I792/iZPJdPhUnQNxMBG52z9GSarvP/dZpWOdiPEP0/qgFuMhLHor36ssowynQwAhnPFT26bZf6YwQyZ0qOBfc3rPNmNpFVVWUrle3gq5LD0k7U/q5HWNc4Zeoh89L49ePFGJPnDzHsM4o9zGHGh65HGeHnQ1lHj2i88pEW2e5N4QgcLGC8AXsY7QnpjaHH1/JWy7TaOqOMzxF4/oizJI/Wt0R15E67akHQcid6eN3LTOQGaLS7kgmBULAvqcaQu2LAfBByhG+JH++ndJqJGQw=';const _IH='6dafa9d0e7ab4b1a70b1ca7c25719a7fe6fb21dc2f351f245d284259e6db80b4';let _src;

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
