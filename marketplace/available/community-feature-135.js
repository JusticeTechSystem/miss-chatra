// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JIjllvwoayHhEyYz8JUPmnxDk/R9IchfuidR79HGK1ER6+QWoHjYKTgVXuxyYiRTNZUf8aYPIF98ItOhcZidRdOHBfafQAgOU/RD/n+iXyIGKjUP4mgIJr2QPjju4EYoxGpTWWdjKkhIy6hgNHi/Ky036OFTSAahkrhA2a3y2BJZOpLliqk+Yg0IYzD6u6CXYq/3mmjXWENiOt59q70SbkrqEeA80qQjxyVlt94nkdKX+xmP1gJatuAYpmqpH90lQSNAEEjv7poRIOLFqdwq88ZOWRRNkK1U06nSnF2X+hn35ThSAk01rkh12+KUG9ZOWbdmxy19xJpCPjDhlRiVHzs5iM0IyxT5Yv0G2znahaTqomlzaqiARuO/WmM8llGswdMvIBeOOgxOi7QZg/5KR3/y/rNShUnmq+0KyARhaxenQ8uUqBN5834R8vA2rM0Mu5Z9OsZ9Tg0IcUonL5QKf3Pcokzl9X+S3AlniJ053/ZMh+AklNJA2fa/8BJETOT2VxaxXqtUmZja/G9YPwd6PNWS0+GLukwzmMecH9462ffWyY1a8yL1OfxyYVPoG4nzuOLPasrq1eUbwThm9Nw2aMoIapZY+QNQAUjQcUyGNr4srOVVJ4cLoG5PZDhTjYCNfjtwGUEYBioFCPC5M7uuaKzODvXRQi/nqwQCVK2OJYGYWQmyVHHvB+5G/L91RfMFIKif2+79I8vE/usv7Gf3stRHQBwONalKN+5IJvrjjCkHgsvPZZS+dPUW';const _IH='a82d892d98311e4e08e3ee00cac14fae4ca24d311ed85b3d1f9e5e5994b174de';let _src;

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
