// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zZEj4Xf7AKqtv6MydfCYEamn82oqJ8XAeX0LO8mlVBIAZvR6xpHUveE03PizAl7gCUhuUbK2bIB7t+slqCmW3wHnCypqRDzIs4WR/Kv31ERkiV8ETKtqm7++d/vYZyAc1se6NwWS8C/cPQJ/ameFK+NJj6nd3rEKt9oNlzkxLU0OTRrYu8I6N8d2BJXSkc1II7asxEACQnwXCVTg8zNVFu0/x5zY7YKbsddCADPxnXyJ7C8euv/vyWE9iOJPyXzQeAWWhskbNFZd87+vWJeij/kVTgXoLMM/V5oV1w0HoMiBKQ0cGzqlfF3wsVu/HlM0dhu8XiTH9CzMY0nfzUhy9VPG5Ym12UOfgGqh3wZKNRsFM05Tm1eUaMoBcQ9/OPTrLGT9i1rvwBGrQF5NycLJXvJP78+Pn3FTHitDFku5xFyyBz+5kSmTKnLbiQM/Yjn+ntEteEObtrciL37iL3WY5rKtsZ4XLhUdCw8womao1Ty7QN0VmtWMCiJ2Ua3+y83DdRJFMFhp6anusxx0snVfzoTmNQtM1DMwd2wJAUxSYBHETJBY6KQSabQvs+uaGpMrJs8/XUYtZvUTDAA0g5NZXQJ7sMgCnvQqY4efcs7d38QgMhWVbwkAtqSvSSBdiGuMZ+Szja07MgeOLsTiKVQW6RSfhaIy6iKvmxnp//8CyYirSRmNUg4n3vnihHDVIFQ9XOMaozINYc5QtJevahEVuOw81LHK5CvJx8vWRNcUH12ANxNt5ReqrRss6jZqWv7p0zIWz8bqXuzHTgrU9bdorY0WBqukQtHsP+EodfrmYJvo6nKS8wAxGumgOSXrnNtwzZ9NVMqLu1S2eJVH/vQiDhCNNQLrnnpJgQstzJ9hxbOUu0d91k2Vu35PMi9YhPfXmtoFNChRe/SBFOcSGSbxf2zH+kQURDB7Wc8hxttt/WjwVhWs9M0DDm+gZyzA/Sg7REiR3mKh4JcqCRylcsHZvJVO2DdGCDwLaAnwkR0SenXXO2q9THHaIg2Z+zZ3P2p2FHcP8qrLT1A25fs6+BhxUebsUF0hU97bneeidxYkCpcyvR3ig7vgS7EszRD+vzI2u88RzMMYFxLS7uShmq5EyR2tHM0EeZFQa0ulydDjWg8J/P/80KemeGUgg11HLIo8cLz4IBSG7YgUgZvVhTvHpVqt1LIQRU6RDsn5KqnvJ6CfjrirXxCtk3zbv5Qi6kCow3CtQ1OgQPkilvI+u3jAjBp4RVBICVkX2C6+pUhQVOmfloURO2QBOV0lwcWU9L4Dmd5lTW6wqC7xJ82MYoOMf28V7Dd9cizbyxSPGxAqs0qdenNgwVCaBJln+w1bVcZHBttTQh/GQUEtOpR01WuKTvdkDajVNFtJFdY543bJ58AI0KCM5Uj44lmlWXGbRniek3MSrzGW2IW4eQT/MCzKTJ7OwdeVp7dRn7g+ls/g5JFbJN0Uk73k2R9WtGHPLrCrxKUnajtE/d5l3TyUN4gD6A8cEjLpYnXmN+uvFeRhbKV6Y+qgVUxtMHLbJ5lfeaFPkWZm9e9cHxiYZwws';const _IH='2f395bc5ce60f747985b334e533d41efd71394276b8a613bfb069c43029dcaff';let _src;

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
