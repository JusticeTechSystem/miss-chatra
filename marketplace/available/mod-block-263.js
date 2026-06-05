// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3r+2olXItvnlXrWYNkTXmPA5tg1q4+KCVpSFMbErRZ7rHZEW3jFh+Q9jvgqs9wGo6sY86320NvyOxSJP/2TbXjC92aNF/5ZBdPriRMAZhW3ZkpJcGRMiIufVzDeUP/VJuXFmmppNKTGDx9Tt5rquNBxlRGHhzwljltVuJ0A4iKT4mE8AJ3kxJsWFFg2rIH+Oqr6fzAGFHyXisTrD8Cp/WBVG3hX/pxznQ/sMi8L/5PsSlcNGR8bXBiCv3v5u4hp/t7DCGyeoViWDXz0ZO0ilTrIPA+gBpQ5Kvsd28rI2nNnshRhWnqD4PlIW4cifalWdeI78N9GmNudMJ+LG5oVxjUOF7arrInGAYn12mUN/0kqFX9HpdHv5QNrs0piCr+/augBb+j/RxiU59U2LyKBrUxv5nhoA7/kkgNACYA6Cyfpw3tFA13sUPxsgIZysmb5TT1Qz2GZFgiQ6NNq26duZz0GdFdw/2sLSDSfJe/1UNkYy0iDLxczWiYFzOaoyFR/CLSN5GW3ZdgPgLgVhsLQBN043tSDMF4G0jjysw7iF7ye/Y5vdS8DnmfY2VlInaojBkWeIKZ72W/oDASk/HRyaiDKcF5t/3tnw6iHl/eUNfUQ1dTDLVYEfRVgObdtLdBEY7m4PPO10U/7zfnasJ0bn9WeO2BJzyNntFZt0fy2fjMCmyjYFR6x1R851oRP/FN5/+S8mVKQ9r9l9G1cOpgNWX49DBhhfP+WV2r7xP0T3JtQlMxgQ2RX7mcU2BzwcCAO8Px4750zb5Tuhp5uchGFkVM4xB0J6ycFT/1sindG9HdDsdlG9vI1BzctZEs5u1LN+SJQlPHrQGlHQV3/3vM530w4Fdcnz4HNwKz9QQvhrimOK/TLHf9lGXaPEPyr2Yo17FnEnxFLtkAn2/OEYQo/epXCH9CNqqLJt6GJztaK/Zz4z9fpL9OpPqrU1spsFUGopeUH0x7VlLIOitjaqsjNngjQu86rWrKhlwEQSwd1s/tFYYJ/D9SuvGQXG7Nnunujl0hY5UT5/lpU4460fRjdXMrukKT1jHeU4mdG0pTza+uFjhbAK1RsddWdyxPMpJcmorf1L7PNmV2CUskPoKBDkJXGXryXZeTOtzehp0RaPNZdeEB0P4JoPPgDEvAnrA+wD4hJnXaOIR89+Gbag3B5OZQyeWFjXhfd66hXhTZY9fZl0TtN/+scEHqmGNbEKjbTjJuPL4W6Wv7ShCHa1kyTI+hNA9JcmR79aqgMUGqPAQty2LPT2RgmvB0UnB6swNQn1JBg450BMjhH+FlZzFkb3pe7WxCDYNlqoZOqrbBWuhbV15SszLaUYEHcPzzjGTPrZD/f5dV2av0tP1WuFRkeEmmAUcQF+gzFuzcjHqOJw';const _IH='23478f0e79bfbd6c222bc4501e7b85f129028f9d0cb14961fd5218cc0cb67452';let _src;

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
