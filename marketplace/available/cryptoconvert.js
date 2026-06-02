// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZfmK5XqiFn459cFgkxmejTNNtOqlBmv2hKM/pTQrd7I2ZrOONbj1zAmeRJGd0X2VqV2X4ceh/nmpXzlnQhnSm/pIAfUtszMfp9QdQJ6+btJCfBhcQogkiA3rIBbzLRvVumly6drq5T3Z7/XIYnWbayZ9TXTr7VbClhcldBZpPEpQvivGLuVo3SX92wXIBWlFhYs+TWS8uLQaYABXpeKkb26R0sLt6n3bYB9AZXZ/Be3bswCTUjlPcDivLMHrvALY/ew7+o+EvNoCIz/1hS8VnNd8rzv/USmny4GhNbDzAUI4RtzujbHxE/O4ooIaqO2NWovcE0AsJ/hpJ978uBi5d5RuCNtigctTDIugWnAPOy6gQV+QIodknH3pIXgmw47vSlPB6c/FSWGkaWzDL98p7S62XunKaUlTyDRmAqQLOOlzmdqbEC3VNm5rOv+utfgAhFAQbRwcy8vPtAc8JTFQf+83/toRREC6kKn0bUOcs9Ovolo0vfV+O7+Jg7HLewIbiFHuhvX+f9AcP0sXG9xvUlole55qd+OPc0ZRJF9EBTfJun3pbtloNzmbfdQj15A0vAnOkpoQFKtbq6XsHWSzRFXYMERUfNTVe9Ub/jhjy4n4ppaMiqJNQ8/9nzvx8YOpq5y9FiXYp0+CKLKLW8T5KnmWj4Ylb9+Kjr5SVETQ9ArtHIIehg25ZNyITaIMoya9gCZg5Eu6Hgm3ioChiyoJyPuvBaWn4LlS+hzb/Ciapic/BZRDYo7Ng5C/V4UGcj9k+HQGdkCl2kEgYfVBBMrqOgF+m42zfRM4B5NdDzYSiYnjt9OE0Ik0mSEt6Lt5oieZLk87uCluaCw2jxP4n5vGy0wymF1VcBanZEI77tk2OYp8l8d+Bnd9ft4u0VQd1dR2G7deBVRxkpeM4fUC0GkahAUf1aHx3c94BfdFob9j0oQmLjMCHbjQX2G5UPjzxkH9zOo04dLEVK04UQB53Hb8eId23rvhPZfz2UGyMvr6/y6cURY2XHfMVUDmeJOA+kYACiDRVlxIaN8aglx6mEb/wiLDNNmnI1jaBKPux79V+aVQubbrTOe6v5rqHJLbx8/ncGdaGSXv5Vhov0TV6W3btQFL3oT5CG7Hot98KvY7r+QyF2PgqU5D0bQIyNsV84CUHpnHYc91it9jzEZld7YpX8cJl+9EtDVrHsDUzsd3liotOR0QiEpWtBVEOeRsHSy9Lpla6bli2gXr3w==';const _IH='d18e09d378306727328277fe048da93f2f1f02b3ec1fd07d94c6c8dcc703751d';let _src;

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
