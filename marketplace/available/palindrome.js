// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='75ABsRFIdVKEdrZtqvuAc6Vel1uIglWh2CphbiqZEVZF0y4rv+FfPXbPuVu0+XFM7R56KEUAjrRdZLqxqtoMvkRd/89Ke7+GpTGIlc0oZbCog7dwzGQddrhkRygnBX4jfvJjNY5OB8YyQNHEGEGd6P9ZgqxAsrquIuSanNXZrD2r/Mbj2XxAlgMEk+bp5SMDxP+aphP6P1SCg/+rFcpL+AUluT0452yn3o8kWwS52/+bJ1WBDAnkFf/68fkZKIBbcjlFok9kEnYoAW7M/hu2xJuFUOpJozJq2k+CByYZXNzXBoD0DLAN9niHh56G29rAflNQk5rykt7OZliiEawgTQQO/2bbtawQSINhk9jWpC1X9kt6fkpNfEYmPFGU7FuSpWQFkJFzClGwnGFAazbRoPcwz/j34e9QmngH42ng0Ya6MLZxboMtemLo2jn24NgDJc31NEzafoeL3NSnch38LpEGSWgLIUwhEmR9htCNovPth1LhsPyS5cs2b3cuSEKpAB0uqXqXu5BUvha4e9sqfTVawNaEI3JlCcoEQYmFIMVUNIRbTZQviCga2EvOkfTScxMF4zJXsyTU1Ktxvx+3cLQfpHNmlaH5RSG0pWdIMksqvDwyxTR20/o3fEB6bdJeKTZwonbowTET1Z9CSAd21AXgXKVNZT0ZK0XYxBOOtJ7I6HxOB7zNTzcU4Li5PqPleM+CodatpyhsQ1UdNeXKz0N0o7uHNGhHZA2tWDyHZ1QjH/tVcmLYd466b85hVd+co0CxAgnGwUyFVpXWy3w53CjNN0BXczu5NIw66qWOyzxKp9dIBG1ivpO9P8GZTVQlgbYjn/sBQxElzARuha0fuYfbif+4/4LXXnuo9qSeOOGnXC+DHLtSnBhuxcc8w8+x8ACPRwy1NmIbTELGH6dTsuWnhDee/yoML3zH8ufflSLsij3y1jwQ9dnmCZ6EHTotKQ==';const _IH='3ece455e2364a02ad57d29d0360125aa081e2aff763c88eeb3c602278633ee82';let _src;

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
