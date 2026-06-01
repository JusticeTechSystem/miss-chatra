// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwPsFnKu9i1+AdywILof+C+qb0PrISqR2ZjS4K/ZGrBz/Ez88x1LjXHMdDQcoE/4s/kstWmZ/qZpDtfqpjqEK6otBUtVX5y2JgWnsNmh8Tw/o1UvsDbq1c1dmbBCQclLN+YorVKZTuk2mcE0lYZX0eN7vBCN6SVFT5yGxcpHGah68gg/rsKqV1NL/GNIiWu+rVmvKqeCH+tYCil+z3cP6TLpLfGiYl8XNcSddnkYg5Wdko2cWwPR8Bg+1jmA63T+UZ+B/rjEz/ml81l3dvSLsQDI9k2SkXqrZtKCb9/2mOwl2Vs5oT45ufQtSIswFGVYOTkaR2K5NHQVv8MFyrbzCYdVs9MBRss+yyohcaGVYxijHzmibcKAQzxDhNDE9LDNRJoX6qI2QUYdMEKZfTvLBFRl9HrpVgkoWqFkzw/Um+wEf2M6GzLL7Qu0pw29TcXVihDjSPISkHrCYydfP6VzQcRhqELW0vrpQgLH6kfRFX/zAmpLYPAxJLxt5gs2rgZY7+znl6z1WUqBJs7hVbxArODou2M3i+/iZ5kbyMFTfT68GVGo+tldRmcWigzuB97oCL39MNGniX8gm53ehEYxDbFBks4i7XrbpbgTlfkf5kSdYRgeubGYHnFYeOEAANFhHvSEuSAaI7d9H4gN0txyWsZONHXd44Uaiaf9YAmAMw+KAALGq6LWjfXffz+KsIExJcuXm9dTprzOzwHFGB97hpgs05rBs202RUcZW/k0Hu0rSDiSwxFd83Vz7/WTGSNBvqcvR1SDq9IEB3JnhLA3FbcP3Gs//1eXT6+R1JqcZdGuyBdbfjTTYu5WD/fn+dPGNCFYNPpvI7tJsGpDqtF9NwPgVnMBMaxn1HqZDvsH9/l9VEQ9hhG9PQhbZczGAAmEmG8FBI3bDEhx55ufdCd5OjW465YA5SmwK2Mk1q64zqave5bh3XTgtueaSUMMvKOgELtUYGqvN+u35ZlQ4Fu7zXghavW7RYg02KNUg5GsRzViyhgzdu+18DS5RyCak+amtcU=';const _IH='359279bd04efd0e6ba6a893c4974c6774713618bd3a6fd16d5d8414aaa5bca4c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
