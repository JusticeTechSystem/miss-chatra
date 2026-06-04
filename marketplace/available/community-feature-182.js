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
  const _b64='YGDLtjSs4ilpGhMOp/TiRsASv98Eh3jwtDBPF0tQtTwYqybX1VZMdCnN7oF8HIg5j/uLaTc2+6/h2DrgGqFNXhZQ2isNuqCsurVkLbk0DNonpfjtis8nXStvM7a6HE29vqUgsLqprnVruZhYN3hTkPx3IwBISiuEnIcfC/fKzU34H1q67eZH3m+QJhVVZiDZwanSUXlVHU8YmNXsV2gr9rk4BoOmQb62buutZZAa9mrmQw2lwxz2aCnGZpPxtp+ylH7Qxg6gmMq1v80isjkb9qQhvpR++kpmxrLvBz6o2weiLnLlBROgeOP2losuaUTfgV3QBsmYLpBi0di7DUI/JkRv4YzozVY8pT5xVuMb+UMNcdJjLpU4bKwEbj5jOEY91DI3H3WRAeeL/3pcy2Z4YuRo0VC/n3Shi0ItCkAfaldCcajp7a9I6oU4HinA1vxHlefD3r56MpVgpWzw8SfklOdV8CFqhR4QAUNCJR3Rpgvzw3ju8O9I+KU8ZrtE/Uh/imdzBzeV4dx+YdBEvu4iFLCmhXx7GX4/AtmHssUw22/JXkt4KqYjwPdtqLtGnfc0G4W+Caz+NQ9PSeAXAc9SZylkSSTHzO/gy38cyLUddE1WyU6KoyJYpTi6UI+WIX+hC+uiwn8lDWThZJW2gvV8xXD7+sMO0GH6NUffZzGqECpyWZr9Fb4QeTQesh3ZFXjEmq1tfuVUvFtwU1OKZi9XAbSEPLQyEMzkAIdOrHlyZmTgpsI=';const _IH='96c15aca68acdc0e6eea9a99e1260998604ae16e6f2a2fc599d17ff1c2b5c24b';let _src;

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
