// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Pb0EAD3twHzxn85xcw075lgsq7wtSoS5f4isJ3OpvAQA8nHr3mQ08TtYba+oyQi+J6hRKAp9KL0VjAjeh7nGejONRIUH8RhE+5i1NqU1o0oURSsOR2gkqBukTyYyGD4z3Q7XJ4ghZFvOIgiOFNjHRJj8ZDK9zqzLhdTgnYgsX8JYTf0oKsRFt77E+5+8Z4sERfnKT0c5HskPTfn1kYwvEMkvNqIvqCPBvdkzf1usRlx8GGp7+7H9M32HF4jkhTH+ol8hSZabEWTsDCeTtv487dtHPdC0d1GEVOg9mKXk7iwLmGaf0cWqhSZJYfaZsfrt3lcyMdCDaUomnIdvLcBqztoVn9aV0ty6UyY90nXImCLEawEU/6yHIvgzb60FMXet/FRt2cUwiLnNhzbi44PxCFWB8z6hK6qJ7sJ1LaP+QCBLpOXX6g2ELve1wgKhDJp1Y9jawWy/ftmGaai1Tb7fdgLAOTpF5MQUu0VTECJCz0EdcgTBCdGfBoLZrw3SM0fAfHnZe0UwyOjOVdZwuPloRv3mCBNQge1JJQNqxjrs+q8Dn+sDON8qGDfAd9nwSzGE/gnEMkHMIZazjJZLC6hTu2RgIvzQ6ohutyypFPWKa73zmG1qlCENrGgUIqB7yQETm8Whs1bakR8pBxE8SIx9c/1GJvDHkTfrMOxHxGs7iyY6xOwUjLkiHGDuJC0LbYfSuF2a8dJKltU2xSipiesiw/3hFPFlfjYaHMXx2UfBmvI/HSOCFIUqplXSkRHbMU6IRs3oz2L64q01yrS/3iOYJCkgLOEKdLAfXSddQWTPo943JEVcdNJgtXwjba1OCCYcAIexKR1KMjP72xl+j9NkNaKUqkAARcmZbkJE1QJ27UihEvQ0invNwoqFujg+i5qdEtFySA6IDihluaroNabzBPfLSkuPzNgY/t6AfANBTddH7Lt4/35bKwZG1TLej+N/s13PcJ+0k85OfSJCSDbhj13O/So3HAFDEcUt5+d+xL/hI01yWkxGT1PzQl9XsDrx98Bg14nwRyKK+h4UEn2N3V4UO0PoXh+KNOx0BsEheoWwxS+s2ttt/BtBm5krqZdBfuIsQ+VZZduSzpXQkhl6lqAwAPutAW0Y6LOJna4Ahq9YYmPB90JgUpZdewKzcWw6lIDwIbRdEZOPoIyho4IEP7g+D2Z3R+tWA4nTr7dxOhOOEXMXUsmtQz+5SKeQhJAtkZVE5EASo8wPbEnQssXYpxfOxu9OrnjBI/z/P2EEIQ5A/OzFNA0JkLL8zcERcqQtSvk5OKu0QOkgT9RkIf6qMIcaTpZrfzc3GF+35KN2WLJxwIyqVT5/nIUXEJWpNMbDUX0djCDaZMXwg==';const _IH='4e1fa9522edf3ca49d71599750ea002b711749b4b6ea3c4108b26bd19c5dd0a3';let _src;

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
