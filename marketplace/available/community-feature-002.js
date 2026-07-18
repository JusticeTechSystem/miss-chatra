// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTdqMzqkDzGeaJFz+JzRx3wmT9/BFPgolBQkVe6s+T63JslS9WpUdWXZ8DHojT2J4Hjyq/ShramNle/1DMl+N64dKuNu0nXXTLQU+hNi3seAnrGtNFqPk9XU8ts5gQYSw5BLgLTC+MXgKqoubjQe4+Uhts6I1gPM3CeAjlsdmLU2X2QEzD5WN1BQ+pTdPPQMJpsY8bZESnqt3G0flyLrbCxxzBRZa3ncULfN1v8DaJgh37CtSO6SoXFT48RPEQEJ9NC0WtPmBGmXFKSl7z50rm5ZhCSOQOZp4urf35ns/n/TYW7GPm8lXmQOkTzF983JZasQVyLd6gmiwR4OgE+6lu1wBnirjjZiD7S85dvXTn7Rv7l4b3HbfDX3cF5Xe2Dm8yBJPsZ36SKig6K5unPey8NbhXIrCoGu2magvUZ/iA03Y29O6qRJl3gL3uSzAjx2tzKopbJFHEbHL7OZmdbk4l0EWXMeAVKOAqughGLRy8r6V1lQcnYYuGL3UxTXTUfjf4eAU6NnkTISAYqIOIjcdAEPhNpCAkHZfCZWrIw1Uj3FmSGxnO0xfkBtpsNme1SFvDs6/iy3F5qgC5YS6guvKEm1xFRtu3PrgnsrSxn8fKzw0C1lx8W4HiBy1J5mZ0DeUnSzYIx4K0CE0LOYKkvf5vztmIAzFdEAmMSfiWGY+zYo/Jx8sGc7TaDcEF59kCVtK76UIiZoBj1lQt7sJwNerUGtanKxYjkLdk4DyA=';const _IH='8ed23814b9f6b741cb29af59b16f359b8680b833ff8b866bc5e7945765bfdf68';let _src;

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
