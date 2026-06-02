// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MXh4FuNXTvlxs4wijYG5/Jm5mQueUYOJ1vV3Q+kavQ6Zk2hTdSsbbZLhbBYwszuEwqNzCd5lLBIYA3khbFa3s6iUKnGw3Rtf6T3E336181Ufgw7BFdPK+mBNRURQBBJRnDk76WPhAL4WWq4IvgAT08aWjk8qbnF28sDFhjQlwC0xrHkJk8+RwZevIMe60W7oA1hg3RcKmagtyb6icZRhcLPWhNsF+VCNqkH1hpI30f5PvHMsmx6+vq9WnKzraPk6aqDkwDMR17rmldsYiqZ6r3+GhhrWGW9S0Piy1IvqmPeG3Dnz9yII3WQ64dg8pT74xoIiONUqShImrKWqHH+gG9sToNpJO0GOAU2Y96XQKWxMzs+p4ynw/qRpsImY3/pZfZBNeGM2M/WDBCOoHdsv7TKetUyIXEzAWsFqgGCJ1W3nNEz2Cd9hCCNCONXW9quqwEUyhkfi7ufuIGmpTyyFA63IlJHiGtgsuGxNEpyZaB0vbr4zrSBTPMUwlVFtGAfnVxrFRaIlXUEW2YRdNraFVqrUS/7oXSRVHQ5YhGU2UYzvGWAFnSVSPQmfR9J57mGcqWJc52Li+StbM237xzFJeOeO+oFtDIs6h4BkcDgeOIyTJPgh1dY62Q4Lg9GesCJ3jM48hYD2Vjn9CHpPzPcJIQtqbGTTGFRzZv2ZoNT6iLgOYLP/7axFdpqv1tNNd+kzafsGrSzxO9gIWArch05mWHsW1rsXw8Y5EoXkwPqN9E2OD2ypwJXvRUVAMrYyBCgYD61vzjujG4Id8qW/w7q/leP3f94uO1ozjXlKnGRvo/Y/PQtFMVq116mAimAwCAQ+cSqDFQTjt4IXqyCEImQWUUwWTkJWw9wp26vHBzG5r3oo+kECHLh9j/ABw6bxrdwLqj5h2ohEO3xWeYxj48V8UFgLCLx54cSdIld98iOQUL9iNtATBkeAIhOs9fdKYlDZ7xdzSzK1dJwqlgs1XV9l/4Sgs+aSMrkhCcStKaL35APMZTw5c0ytRVkqRbBV';const _IH='e120e12f22385b68d7d0c378188c1ba3cb3360f2036e8d9287a397e24502f7df';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
