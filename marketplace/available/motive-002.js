// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iWcle3L6ZN/xxOcdX9Q+vMvn6GGSlSfvnFR3qExNHd6P7vpD7EgMCBYgTCOe+/hjLk7gQZ4S8yxjrNYorUCCAplo2kcoH0ydctFfWE97tl99Fa27MFFo4JeQkRoD1KENJeMLKSvR4oIa9yPdaxz4H2bEy8JfoN46eFQ8dMlbWqhxKaqrH4raFDAPuJef/lJzJC1luplMh6fd5oZPw/12G9NJrS715ukNAZBIqTY5kjFgBDFqe2jLwEePW8Sp7r46NN6xXB7EkoV3ly81Y8EcntPhj8XkqP1YqSAY+Leoe8uIb2ISBzMiIWf/D5PUcrBd0gZalsVpCjXqM9/nsEhojCC0naePqTICHF41xgZVdfyolZUNKPDQCHPWGThQmYNd+uf5HYIEL3hiZpPikxqqi4OU1P8KknMiG1OAbxSQScQoockmtqCJIKsRaeuFdslmK3FTireWLTW+w0JcFUQQMxT15HhQvuIBExbtVR52ManwaE2uSmbrmlsYvUFN2d3meSEqliZM1R91w1sMP78ltfvMwtLHYEAFXmyKuBp93lczegc/UM0PIbKgf59aNxpzh5S+Sw4GktqPFZkCxAnwNt8B4M4DxlXIKTbhpW2VP9zJ+PMfJLYI1GeUT7WrvWsoTIRluv3Hm05xVvn/R4rY+TKC7qL2yLMQA4FyHOXAOEyhIRcE1vx2wDhCRYVcaG/TBGHHDuJKFgbSoFk/sr569yNt+XaVEXnRfNPRAgVU96eWqwZOqWmbeYFftqTT2wQr/kgnVSPhb+FofRWX/TbaHNoBqv7TVhgbKbNMaSbRkKkRcoP6ZcLVPHxoxUxZmFTvCdb7db3pZ2GHQ9s5hhYBf9IiVPMaZMy+lUePEx7ZrSmYTq/YMrYCH0G0W4s1BziUcUGlLJeBwIAIX3geFnNAEP6GuGwyX7n/sor7a5mO+DNuEzoJnDEJJjyj/q7xCDxRupSGd6lB8l0T4e2hY5HDq9rwgFjfFni3TvOm/rsCPE+41RLvPjM62upMGtH7aJKnTNzkk2rbArWnYSWGHRk=';const _IH='eac18afc1f85ba3eb1c2bc39705190aff34e9e65172c6085bed91baa6fb7fee7';let _src;

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
