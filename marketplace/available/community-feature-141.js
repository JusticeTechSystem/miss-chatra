// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='POCtlqFn+MkhkyOD/Lp1VoEm7r2USlX25VOEtQEeOV1mhnx1mzx8o2bqzkPkaKjuIMoQFa03aUtd+dhQzcn3p3lg7yzYC2KELHZsTF61i9+SEV5Tgj3MR8HYkj0e9m4pCEqWywlP73AfG4KZ534Giw/FVgoRUutUxYCWOX829ndJhyn5MNHqS0QZhlbx6qnzY/eOZyTCA5NL8CTYDv0DBVw3pqr/mF32gIKQkbjj9nSfa6dvEKrI3Vo65LU8SazSxJoIUUPQcxaC8Ps54aVUU3r8GgXR5SidTEV9zNRKftHEf04LacjVFFQ/ERSs58M7slJJQ7V1rXto7uSqk63+nwJCLPBdyB+TpW+JVQBh6DoMr1wRWvPELx//b65X4KsAyo5i8Ix34eTiorNlEK2aXCxuKa30El/Qyn8VbV/u20QKGtfFCZjzkE1ssJV5bKlKoYKX/vFgY0BiiDmGl5hwrBVNCQlZr0ICF9G6iEvW5er538a+dbScVG7O2VahVDbeAovJ1AsoYmE2lAL4fvMkrsHyJTkk7RmzpvPY91v26MG0EJS3VXS2Y2W9OZQ07uDpNXlmtl/dN1lGnlK4VpvI8oex73o1E0caJ55tbCIxh6yIWGKuX2GZatKICYVOlGErr3ST99RbF2eT5hvxSomrjmI9f5ivwxnDaiVmjLMn+I5mKMLTVxxw5zG+pgOUtdUGSys1QSXvstvguvxt8lrSkQ8X/L7Vs8bW';const _IH='975e70ff45394a8ae579d89f31a66be43453aab5b5a5f889a333d0c64120a63b';let _src;

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
