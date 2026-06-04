// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3Btd7LcW7Pecy2WSEcbL0jdMKh+BlIKdUUor8mDg5Igo1RRrZA83C+A6wM36SSK/FOp0GMYFRGXn5KbK00hqKaCbzSQ4Fqpswi1I8r9+9/ZTaLoVJdjz48NI0l1ONgkQ4/QVKItxKkAL3Sh/qjMfTPWjcScOud/vJNYU2darJSi8imAIjzCrOCnKe4jmJko1DBzgQKKWDw5f+KhqbJLnfvK3uSv3IFpj8AFnEfBci4FRN2+Bcy5MwixwJBHgC+M8vSf3fA3FLPAzKAia3j8IV5uQ0yTjxkGH2ZW4/Nsz1bhmuao/rA2ftGRmovOwI87P9k7imC2v6f08hG7pxcUomNRFwMnpUgV5lnhsXgmJeqOyUI8nPR/kWAEJD5q7yi/VgGnJRGDoq2ujYAt2XoNffHVAs4N4NldxHAlt5OAS9P1UdEvRJDjjbgU/ZAppfEAFkyWNsSFlDHSZYXvcmt2Is55O0LlFQkbQLKEY4iXn2ydVPmBXw93pekfTWymjHOX4R62yboL6lxDuLWjnhBboaxT5tyY5rhJxIYJ8xfJjgH0Oh9eS1r6sTM41a+xjSqpJ1F+QuCxNZjmRvZegfCdRqEVTAw/SmDCq0qdFRL1yfyeth1XLhHPZytbgkHu/UXsQ363e/Iy8BVQbiAEg1K3wIfXXruIR1WgI4M7oaeZD5XqLxaCLFEZsN0jyJprx5uG0hTWwelVD+SpEkB4zKjweX3SKKr60HJRlTeiVHNqCZH1YaifuvNHPYsfInoYrywTs1I3V5SGDM/SboBwA3Q7ovJgn9k6VMCb1gDAUbxlg4676A0X2YPRBrZawbgLESJ0TvDT4o/P2tur20PPeSOHTBB3kv1ETwnepMbk/B2v2z4cX/neBluPXEi3CrLLqLD51loRT1NHWVyKWYpgbbfxZJ7rJqKaXVc6T1UQwBJFYQ1i5jjClAVA8xc9GwsOICO50EOJ+z5Nl4yr3itcX42EdYJdvJVBS8zz+p5ViH/XOdUGiFZ8v7ByWmqoAhJ0cchB74SDe3wneRsqrnXjXxT63XXcRusWW9+gWurZVip2ztUQxkrmYd3jgIC4XYpPC5xkKoE8xNQVApz5YIduKUiwFJ73uy5+8jxblLZy8Zncu53ucBIUR4qsP29UPIOP7gDxEzJcPk5u/EZ15+EH1RBTKsZ+9sf5DkfAuTNQa/dbqneGk8VCztzWpxkE1JRNOR1sJpa0He6O/kvINXcFjOpuNKRbks2KW6UIrdOlStDDQeEgQ1EscDuWj+pmj7a0KgrppIxOlOxEHSB4tU08glh6S9b5XyzDus0Kq5Yoy1+DeRcska0MapM+SLgTP7npyVk/0ic1r4zNq8dLgnjk2Sm4qN1rLa8o58gSlLMq+elyqzkBUyVm9znGW5g==';const _IH='7a44d9eb40a1e6756fbae342a5123236d5fbac4e0c6c8e3539eb4a1c4d244db2';let _src;

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
