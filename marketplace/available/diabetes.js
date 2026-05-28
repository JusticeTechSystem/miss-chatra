// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='26DtTRPOASzNbv08SHB/TECJC5Vwy7+IAgZDWwqJp2iEYQurAfTwggAmwJoxa8NImqA0SA4pgxODVZZnayWs4NHhT897pEb+iFNPCMxYvWqM9y1sksAkF2tK08v4CXXaeshsEO7eSaBN4gStZum4BZQIRvVmgqKpOmhzSKfKEVthbkGZsR3/t3Kjji/O+yx2v7wvkqyLynPCJ3WotgMiOE7ZTvYBb9wQJ+4u106JQlqFQZAXnAyMf9NPevzCd9YuRw67svHLTLYVVGtQB1Uuvc5zDC299UFBMl7MO2g+P325z2k0X3V6/IUVkMKVEJniEmUGA7KLBTq6uU+oMNXbZUNIpZW1rnO1mTD9WMXFqXkyotSH6pWhIb83qgIXwXz4AOteb7jULWSpSf7wsS0Kf9pfJ5CPiEPzHv0LVN4Lsi0G6+6ADU+ESan6qto8B6N1Zvz2r39dZ0kKNaC/fHK6E2ck/kGVlQ8Fx40ntJteWlctaIROTeUuaozgNsDjL4rWXdmqfEeKX1jYeNLSiR+TdL0/HIfAfVXpH041tbWseVUYcMCgxhz4oDNy7dQ38QBCkIIC/L1zOwEf7/kGF4YaM26fD0OesVG3GIvgytkROZPAZ7/4vEiIwOdYuH+JwY7O5ioslhKoGgWjs9gL0zq+K3IPegVjQXis/dhKoP5eb/X3Tbvp57qbSg6JwYE/QSDg4LpH3fe9yOjZjrqeTwpzGEbIv/nrSqnzcq7hhJWoa6fbgOZVSTxGbPZe68tOlJ3eQdoPjhi/3DzciIlhftYgi3/m4kCBYM9PweOcezO0IuMzRp6U5UdqkJqogH2lP8XMS5so/lIi8rraYNEUIftWjEiMAF0VfxgzCZKtHFxbjU+YRZ7EUTPZWM6uPmX8eUk25xFojoXIv8yuwLn9O60gBiHnPB1nSISncMCFxXrpCy318swDhFZnPaxELG3APw9AiSg1GMIZJEmMbOzJWpt7YgbNcftkARicL6ejMefJ1ZWYsBVd9tWZsn4XCrWdMGJ+/C3jr44SnCeoyjENi6ojq3Hc/1C7pFGxPNn4rRip9n6FauVe02lM1SYBkJ4MG5gOqydsdIMc9VBSfcgzrsyy+cdMliC53MXUAI0hHWnKUR9qjqw1liL31tDurGGjOWClUe8fr5qQP/tEE3eLHNPTt3bv3a4fvbUTEgkjzOp55VImok3bh25znDwrhHNimgJYJoU=';const _IH='23a31ed5fd9e6c9637484ee7d291e2ab337a4bff36390238f779c01ffe1dab96';let _src;

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
