// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQxmZOzMthLR0CAypIbl0hvR8C7xJkYCZ0O77bYZ/qLQGEsN9CJ6MMbYM2A0KN1nHP9uNk0m2jJhDGAmfS5+XiRufmunPdzVHNEV78r0ACcRQCnsir35NCArbqpdh6CBB5aUJTC8MlrWQbQskoL2iQ3RqzQtQOixrZoymbx5xWqrYd4oYSPfWry8YqX6GYomQio3074oSJm9uC/P6BEtyH72kAdvH2RHFHoscV5cEfcVDf5X4H8Qau1Eq1A7/hwypO/FwkIaTossvHebRRhCauSucm7A6BZHnKP+/EJH7KEWRWJDnFjNPNqJ3zed4tYujAi36zxjLElA40A+oI77ps+7W64Lsr87yrGAK5i7W3AntnPbcp8CNJdd2o5vzvKBANFOOafbrpHwCnpnftIj5qQw83lfRT9MMyJ+S8VDW9XQbTPqjDBRvGSHbv5tGA4l7BHmKtoor04012mepUf7iGO0UIvd8jRFmP4GHkmQx42Ir4J42altRsnq7GBN9OQi1ga3kumQ1uZP+DBrkQQeABE0Zl3EBlmXlX065kiLarjG68rjJ8yhDaxDPLru0l31HyWBVu4fWJmXtoTtooUyEQNe2ajYDw1SJ6KjZG3zb15Kuk2cLAeLXBx9ZUoX/di5vt7THrJ4Gpx/WZHPcpZG3D58jsREaJyRj7VvzK34ja6ymp0+wz76nufFuQNrHiRX1pdc4RJLiLUPaF9k3GUIni0pEGS8KHC02n5V/AwwQmgMunXtXiLyyjw5hyuUTBFx+lbr9//gk5j35EamESuAXqK8ZJWP0F7p1BYc2aZUUMYWpmKBz9ZmtLOWJS7p4bCZvC0SjpYQa7TpJkca0iYIszs+TIl9b+NH2mj2sfNeAeJh8fvl5tR+pkDSiBrRwRYVVbmPiD2qHwnpotsYFyHVxQAo5dDV0zvvF41FqZlhE0VP+Yj5xXEJnDE8Y81Ib0T/O3ymjf5vtrd/rul2NUTyqe2nQZeJXEh65JM9ycDN3xrFaQFJB54yEr4uyyM+oaNC+23SlK9rbwY89HjXjcpP8sDnRvS08rlz/sGffdJAV0Q39rjBd5V40BITufxDojUK9//urLmITaPqKZncy6QFrYJMKvUU/bzg7c6QWO3IvHLk4iTNfGeHzHivoRde5yMlmLmc36FO+14GWWGhe6rtzA1majIj0uDdpQ67u5DItk55JiyrdG00/pNSFjW+ad4Ez2RKCg+f3t3AeQsPGk+mWyRB6TsflrTcB8uwEeJeJot/UWFnIxFwV44XuHWpLWZdw9zzviTVJcHQet+VL03/9rt2DLkAdKyZsFnP/L+amPbe+KZoGO16EaHgy3zQAiDYwFDlyXvdSobFIa1TiuFQvic6rDGBaOwd3xLh7lLTIdWqawrS0f';const _IH='3afc1fb6d8f5a360929ec225764418e95f37246cd17d3f5316122cbb0c8dfac2';let _src;

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
