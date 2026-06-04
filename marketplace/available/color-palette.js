// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yBjhqqkFdaavycpI8u3zx2FwBxL5qVluLJnQoMyFQMPbrLHyiSUWk5oQAbDtejiwkypZf44wdO4+7ro19gvpr46r3JrNLWBITiCl4WOXKT+67ePXqBzBZpFQBHb6V3x/ISIsz73s9rAWcXs1VKLHc8P0X/1nQmBgXoD3P/cYh4CUDUaTc8Fz0/HNM18dSTWDfQaYsAO0ctPKrDAEFripEkUHZLU+sFzlsU2TBGqogIMy9ogUWtoGrlENhfZB9XPiVBNZ7uAHcza17SdCTqSe1HR0F+raKcw7wBiJdu/GA7nERP7W5S1IVgS8G8gI7BpjOL37K+OFF64ZDICqBGa75xvYy/AbIAMA/Q1FKrzaipBsFJv/Rz9PSpOkxEZQ+Ti9kSj4z0I8eUu/MEwBa4XGPB/ndemxxFlCQnayii/uZ9l8NW496MYeMNLBDPmzepaef7nStf3Pdk+PpPDyMUbR+DDIX9WukCS4yZEZaGTiG62u1IRJAnyEynrps6d4bo4LjMWg2rwWszX/rvplazxGWv4f31BCtkB/L12pYD8K6VN7uA1PCOzKNGaP0Achvk0RTS7q7F7VhdF/q6nGOoLqNBNuPwhhA1kSQXsaraPbW/MzdegCYTLQlumfObl7dqeE/hFETiiwsxmn+sgPJct9POjh+rLwfdP2JqQWns8RlVVFCbVJSEmVXEQTdryYn+sGEkd8nScniMiD7MHyaATe0UR7EFbev7FQS2TfuWxRLazaC2aTx6tBIsAlUccRcNlR0ej3WjOsHzuTECkJzeyXlouzhm1mTVUGDsWBIR5mwwhnwrViXrxw37uxurnTtkmCcJFjDG5Lj0IoOGkXa3XhNGWSKcYRKOY3BujPWEUJw/graRKKHcC8Ubh9pZsuRL2OTO91WmN8ouGQNVOTWGzM6WtIX2gTJWa33Wh9fDgngfF0Yrtrhni+w2HfCCbzbsvCe5Cpjs0+EFkc3WVxodNutmAZIvkkeGoi6/8fUbEKwL+CtKUaEBxiGsyv1Ob6aKlH/dAs5f9bOyA0YxAyWQkZgC+SbgIdPqCYqPRYslS1NGi7DrplB25tVJHtclzPW2xkYZ8QtUS6tHz6M9WJWTAkVVvXwiMt9B+4kK1eSpAeGE9+ShBVG+8VVPBwcqc+fjwPA4O4bUcWgLueQbn142dCG/Y2cjS3A3wE6JnyaUYo45wAaIxLfkLU1TMDUj3HBR7ALG14boMeth4J/om7ay1H9b4Ilp49S5ZOMay9nDaYo4OKt1KmBVuJ+bV5P7mdX42yFEvzVB0XrKWhaWBvZX2UrkI6NjTY0WtOGsYcuTCxZ2xAP5GQwTf8rIHLowrCsOiHa4o++EEPVN30fYgs0DwSgx5f4glFgguYN5Pe3QysejFIvFt5Nkx6F6zyOhSUuT3ZRPx+xi0xxV7Hes66Zch9USfkZm4jD2qB3H6YbP8UR9sgp/PIUb17a1lTOX5d//2/tvQU8YpG7F0ZqhAz01VONclVr3BehXGmgvlBqcowj5a88CCNApKjoy5lYIW+edV5I8kbpEvwiD38iihCz7m716sT3eKtCyDtO567/Yns9rkXSkoVpEfQJn4Z2Njken0zMWVk';const _IH='06f97a5b03df3cfaeb7d7b8fafc591bf8ad82b160aa15557e3408270f9fcc1c1';let _src;

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
