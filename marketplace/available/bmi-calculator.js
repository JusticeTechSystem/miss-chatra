// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRBlhABOtzOEljH43fga0fWsR8sIjcU55CIy3m/Xh/RnNMhW/OaOVMzqi15YWutNQyFKFijzLs/y2FaZGVlae54n4j4LXrYcFsuJJWi9a01/sDkowWB5M1NE/wC/nJuJ4aUR0euNLiFFdBmliIxEikFt2BScdFvPYHtDy7yYMtgunq8dAt+ANqm/CVHCqUHCvgpa/pB2DE+Uc3iYzFQaCZa2PjpQxjpQwL7o2/Y0V9cwjKLpoRipKpCycQhyebV1+xO3wJ5v7GFQ1D1GwpMM/hIYUCUuIv/YBGFWL4fveqrEApbdIEm4D+TKw9Yiv4SEcCCFdWwY7WnoRU39jZVDkws5KpeRnkRe7VIhdmcHqRpBVbaPg7FRkdHnUjF/xuYpqhPFpBy+TwdV4WSrn7TU3cJwelUTRgIT+fDaXoyICDud8zrrh4ZwfCbj3fyQX7VQziEvjkUnO6J/8ywiKSU0np4dDhX9ExBzK24UenjUDZsJWdzL9SoCuwk+m5uDE9qE2fLcD9yBXrl4XgFugZN5fD+S3zQSIUN8tcgbki+6N8qRpMLwtmfIh1hB9TvOUlHtMTPj40CDMm8eWkQ+ktPQQRDEtFg+Lg0qVEBwKS5juNtVCag/UqJV17h91dsk89ZFB9wVd83HYFEhSSDpPcIPc9kbjf+aDfDllRTEYe0xaB8DP1XwqeKuHRHudoaC6AmYRoWR8K1Zy4+OkTNlkNnAgUjKrqFosxO4ioFfEBzQXPovhOhFcUcRj/StruzyaJ48xTdpgK8GkGx0aztyBZlX4vYvNJMH0IeszA6jAzYWEfV46PUvjnB7sfHA/4LHM/bV7XWeFmWdIrdp707BLYgLTEBVUX7SM+U4HpYoyKOEolBr1zIJ71tdaqcv8t1KiWpus4lR4L78239kNnrWDFTNftHSjUMMRh2/gQqe/cnpIlCWXbRS80hei8y8MbBgRX7w2Hfb4vj2IM+nTPGoqbQqRn0X2Np/MOTpJ1SsZxfi0IFZRYySbCm8Kxzor7LgzcfHyOJ10m19Jdlrxg616BUuLEnPJyFShGk0yJSmXCJ8sWxtMEaY6kn4H3EoLeqkLZ+w6G0/z26Q5scdjiHSBU2YBGQOeMxm/heSl6A3vrBvXcG+TJHhEYghsFlOYmVjU4vbLmvYapROuV00OyqltVzPLE63z8JBlb3zpknTmWEp39ariXoLfntMaTbH0i3RcQXWhG/pOwAh7AaP0st1pCYq3Z464yt4SGPqMi3tXbWDQxKz10zRgfBlV8BCpVu1v7aMab4wMAYx5J4swzyXdckVUdCyey8VuUzHg2caBcygDjpT5gH9BpjgDcnQoDdARIbw4YMpMVyVXNjx88Aag0OBaR4kjGfR548Ppr9yFVSAw3qJBppbT78u3hzndIyeINVX34Z/4pzXHDytu/0Y6AFl/+ADoQR0Ho=';const _IH='ee4fb36c68c142dcc897cefa57694dfaa3a26a82c4c8679c7cdb539d76cc7f4b';let _src;

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
