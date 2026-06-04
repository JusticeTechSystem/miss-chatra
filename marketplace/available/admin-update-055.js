// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+J4M3j46R/GheacNpISWN4C1pZaYb7zFoXVQreB2VPM1lOeMJExYaaEJ0rYNd/SF8Pe5Kw9ZcG2I/Qf5IP+T0BBfKlJkR+Lv/Y+2buexXBwwABfJHXMD5Pn2udI3PQaDdMweV28HaeMqkssa9IqeCz+YEkSvwuRmrXYeluxxOilA76P9CI6e/0Elxuem0XSrRNdwr7D6J/tQL0c/wU0C0yig+vXM4NFHSwekKvtyjLZCOtCCBniV4rW2fEXBVh1RrFqowhW/7tyTZpNfToB9eATyXdIU+v0055wH7KrcdUL/LYzkn+Vsl3o3xA8S2nUAeggg6Tlf8de3nCUo020vK9yjJC2wA1gPz8d7HFmgml3DFrVwHpb3GBba0EPrGCeItPoWF6gjPsqMW8dkilooxC3T7U4FFdUrN4lCJFX6Nco+M7zI2U2O3xMyG0jl1mf0AYLDZFWCJQtzeceWrMriz+8zcBfXLFUpA7d5whaywoWnOWJORupeGqpsqeEiCb3XlSLiSf8eVoZDYS1hIYiOuc5aD7wB03BEw8NU9r6kDGIpCfCynSDgrS5Ieovcp6Xzrj8b1+ni5+hspEc9UZ8+c/EiGjaBjnsffaHHsfzNEyF6Fkp/Ufg5n2XqPZdB6WiQxjX7jX3HyeuXLvmq6YAAIcfjr4u/fjDIPd03g3/tyW6HDKVxRo5W/89pNtg1fqB2rdQS/h1UurBmohjiOOC0EHZZzDWM0dIn916YsTKa5q5KjARohK92XVYup+sA/CF3m+P6LDxz50tMn0y/1jvg9sxhEKgepkvXuhcflcVV1X6VJJ2MCP3+Hl62zc/0UkWKg5mMTW9RLaT3SttGffMTB20WdDt8sc3+ihs5FtAQdjO3q3G7PSUZOExQ0TRSOgOLuX8VAWwYXHYYX3BWhLPds4ooES9ySZHJHamEnF34ydYhBRWfENsi61UEe7AIK5dzcSjGt0oetVVBdfUKZw4kfcjnnrdHhG9vm2v2/f+sTg32Z1E1y6JoumE4C9iG';const _IH='c374bf3f47c378c6b29b9df7502c5244a8565ec6a114f7e7f4f0ed421dd11834';let _src;

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
