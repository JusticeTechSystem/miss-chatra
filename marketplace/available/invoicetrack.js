// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4lqHa3hD1c4FGtRqm9pr81vKQzdRZh1y4IBmMnHDLTOkFCuXtK6KflWb00TwJ35dzvHasdDlZ9gnwgWHQ8HYWHbkTSvhf7zmE7ygStPyPIkhK7lYcg31h0LRj752cSJhZ091Dn8kyHsLQFZxyLHzTNFeG5nM/swqGLAHc+BTU0d3tlmW6KLDRZTnXn85uOc1xdlgRJqRZRFQBDx7msT6Uw4dlSIWBchmHpQo1XqiuP/BNiiZCL08e5FQVbPkVZdR2Axy9tLVwiloep/T9AG2qugf4AHjEmVKNZRGaCC4MDxutRCSkIB24KHLs5m5YxQ6hKXrO5vt1jvpgMCT6GSU758BAMlwWhVjo2hgVxwn5M66EW5w3/GEN0cgjVPp0amZu1biFgKMl8VMOHtTdcwSYBZQFCsbwYsHXqf9C5qgakfg6vmBJOu6PXywzxpNyAYJPsQliGn79iUDR6OmkQSJhcwdQcJDiIo5vUb3hGZoqdpeq9lIP6YpYyFSryLNLYCZtte6jYvVUI6op18AJUMxSENsXLCa/821JALNWmsEac5R3nGqMzlKVzy7PTwGW7z2PTFUU6E9crE24B4SkddW3MSgZ0pScyy/O8G/eFGyv2G4X+aWZWlTe7G+ZHr+YvWTby68Z5q2IYO1hmzOY4ZQf7mytMXZ47ol8Jw2iFcBMHGeqNcORMeQ2Da+R01E2k2aF33yoNJhFxUw0pmj5f6Ug4SLUGukJc1G34kNMNLPQ+QtEhJZokJ/g+Bh6tHYsj6r45wBB7e5Q22aOhaP6SBVgD36pRU3GKQA6wWZ3NB1rusWuBslYiOPx3iQu6G2RKjQVQwbEAqlmR4S+64Wnee4eB6rtVgxunJTCUVBNd/akpC8DseCAB51FfYwypa91xUvTTx3g+7PJK8X7HtH6w8o9PjJAn3TytRvzv9nDstJdbxZwjWc6NcM/vwGTFCm9n5cNJJIa0UBnFPRG0WEWkrQdbrxDfQGtqoEwr32JcJm0GoBDT+4bzibUoNZz10IgBY4Co9SnYkBj9CY5QkGZfqVLsIkc10CXR/sab8+XihZigTPbf8tvsdfWMfzhCFQWhEVeaeudQ5fwaIdmB06XyW6VWOx1ZymozhiiCzL9Q9yFNCOWoVEIxnfkMvJxiKoJHq3saBW9xb4s4xJitad6mGsPaNLKzuD1uVq4Dv5nvJWcGo5zx7cx37VWetIejZ00GuXn77JiuUyIidFFvErgA==';const _IH='05c19bf23ec88b1ab52399a632ad02d60fb3af37341d2ef05fd1b79a738b34a5';let _src;

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
