// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSP3aphgE0vBS6Y1Rd/Tk+zeXkpMp9TXZHC65he1tO7WlEpDwqOlrsuHDni0hF+9TT9I5KQ5HshOAice5ZVlzaeGxR/0+j6PgAYjguLqZy9a8teLfOmUc3helM82tzxXHeNQ1XpkDWhSDV024wBMUZa6cpSjli64hQnNUf6cJJbEyjK11b1nAk30CrTDwrJ2kZlsp9XaNuLRkfbNAb/6L+TqO9kGKNv9Eht9LGufQBs+DQzZTg9OCf6sjJpfpIAycYiztbFhxOWqFpKSCFTaoQLYbwCAcDqujwMYOBvOwNgy6dMwtVH4xifO64XoNmj1NFIJwMn9oYpiLhz5i1yuZTbiwuhtGwXvibj76gjxjos3qBoRicrl7X7zlRWN005WRCFbNq5fd3+Ai6ksELvLmvOQzWolAtr0BfEPYo95cy7W0lrlPw6ANOl7O/8uMctFwN9HMXt+icY2k3uhejxkkcXfje/b0SZ5T4bxwSzj+UgYSn+j1GQInHRou6eOSTWw3aAor22A0J4hi9Z6n45dufazX60M1iXmQvAhSmjYX00bmr/c0KDzGKASj1r36OXFMARQwvP5SxdjND7PzbmvY6K4qDyT0/JotLgN+H2PCI2Q3xm0zjyhXr4rnIlrXlZ3yLov5oKcBkR7RrhUVSKzMJoG1GwkTMoZok7P4rJho3vCDcKiCCdbUaEr12KpUYmrHZtaT5VJwh6HIsh1NGOJIHB975f3qdNSusaCUij65cxdKFvO7m8qg99p17eMC/NhRAWk581UaCWAqHpaL4OCY3uYuQDAUd2TamfKQU/pXeMRJ/+xlNQI8e6suR9HjWfsP/ro0+Aa56pYjFBn8P4XLRLOE065yBBHMK1jCyrXJGEsUe9o/uYDfXXp4LeuDoEJWLVGfMOM8kuyOwKymertJkcsQ7BglIcwu+z+d00Zk57DMUvrk2oMsLGcZMgqa9FPERc6ahfllyj3ZvzeYMsX79vB6Zi9GEoNa9ElRpXEVH92We+5IZw/iQWBTcur99BuLwabxABmDoea4Og95owqji0WWj9Sl2iS7iFnOdBS2ZBhqO1snKqUaUhdbL7k26bxE5XLK5wQp99xpYtODkiGKGoKB0a7vwgcPLPl3X52VlSU2UZd7AzyssnU2gIr9FSnY/v8Se+SESTbZl3I+OPULw71yWqTCQrPi8UWxYQsKN9ofLW+Ae7K8igbc6g0F6Zh8HH1/5QPpT07gLRg8FaBOXWundZnoZ4zVlmKpApNg3/CFNmjOydM/qU0YZOT6XoTwe+rLDD0nPkihPSVuiXjfZiMqok2wjdPkhOMGnITsF2OkwKQz8Hym+HOO6ViX1TlZPBgAwnb8yreeGiRli8iY3CceiyULfoC7pyFhvJtrPoajwfpBCSO2tS1c406uM6HRvXI9da4oV6JS2tcxPUhSYWLGINKrIx9gc4TFxkYIHrSQ==';const _IH='d877cfac83ce9ae91a14298d639abb3c9e55212a055ee15656faea089b17999b';let _src;

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
