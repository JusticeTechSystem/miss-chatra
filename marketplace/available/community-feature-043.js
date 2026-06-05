// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W5XPNjapl6qMAaMwRXP+4aoPE5lJ/4ENpsTJK2tYUyqhLF1ldH8lKichpZL1cn3ozfZP9iny2E0KyoPUgnJN+d1VhdaojikA4bk9kGfz2kuuKg6Rp6bCpDAi8cz5us87JqmdwpO7MVgmn9NRL+qcas4oV5Cx927K70kyYT+E7pWEJhiSJLg4IKaHq+qhAO32cCmrpblhr1jTRtuArEvu6/233uHUFqEqsg9m7ZKAV+SNk93zwUij08npY28TybaVBj2RBEvILh4VTGKESBymWetbfeTOY7L5DxVQU8UM2idPbtfbXt5ZXF1G+sQNmV217NMVk5ye7JkX9iaP1U9TCO//jSsr9HVE2Bl2+t0ZtsrpJxz1NR59+jqEeoD/Dtt/lEVjqnGmPgsXzDvjMF7HmM+KZ9/3TgCNyNzyqcTlws679Ouc7/eAbPdA0EnrXdLqSqr1rEIZyZouMT0Wute/u+kz4TVFesRrk0KZxwIXJo6EGeibxtxcBxeCXqnh/sAbezar5UQfU2Ajj6GuZAZhIgRFPI3sC+K0s5uUun/mm7vg8zpQrI+DTYMXn4+sMWOZy4ntGy7KbxahF0ZpGxkNnrDHWZNicaiFpGDr97eKInfsHk0RJM6oQHg1Pc0R+JKeZykzy8+H3f3cKyuqhXSGwX7s71Ji5wQ29DaZqS26O0hrU0Yq0zff+n+pY+TZqUMKjN54NhhqsCA/gbiHzYybdtwk0CQfObiMiQ==';const _IH='c876603ef9c149c8ce5f151e95445c1f7ea1569d2829122f2460bc883879beba';let _src;

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
