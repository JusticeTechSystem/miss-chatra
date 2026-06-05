// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gXRiTSS+knZnK/pgOypMEYTzJh4RvjtFEsuJRc2IHWlIRs8G+zoNGWBa7ibPBmTBQKtfj5t1fHI+EBI/jMNRDFE6n8t1gdvSq7oEsvzcShJbJIyczOUJG6H2HcoK51/6KCwoi8+kEbOVocbmOt0RrCF/qS+eeyAVTKPzlC2zYWMOox1scrHwchYMjPft8AzPws4puMlJAN54I+znbFDMgZcjXO3CihCi1SoekuKu6m92Y/55c8ynO5s99eJTwf5dX/F+bThUCOwgD072ODZ66I2SxHPWWkuJGv2kgm76z+NXHi6to2ryYiMc8GIzl4HGkULYKzqRmnmS3C3K5gIJgMsWfsMWsG5B+t1+aUFj2W71bSksttJQa4zqM0286cSrg9eqUd6Yvk9c2mwi3+/ciTQb6pLiIPtMNSIp7cC+0eMl+HR4eS8Q+4JvJQVJLbnbphaTkQBOQk4WrGRk2s9flcQiq4aVMsB+S4QJUQEIg01rMU/seyAT84WYKPXOOWiVGmFNd43zRNZQJF3faqjTwdtszLm1FAuSawlUuWc1hQYYNEEspgZhGf9qCCsSomn9rg74C8gpfB049cGQzOtGAUCW/RnIlJ7P8kCfXNh3/FEyqIg8TV3I45M2OvYSBxP96mJDb0tFk3XX/+a9RLA8gYSzl72n/eTGAfPTV3sElXmKZzgixrpC8eyRxiuDVKTfM4i5l8JG5s+5/1uaYw28x+Szd6ZwcCYPCwCJGEw6PdXzevb0adRTcbAlWTyfn7TgbPuk/PPy0dbU9NW2LIbZaRhvi9apevlioSfFz/wGBJWQOwOB4QvweNRxnY45I+WFQ/cMqsDTHuWWsf0z+bpCFYlnSnxEztX1ReFoQ0XC6sQLphq0t4jjNnWYQ2zQ6FK2fgeSWCBkQaQVVlYmzIKnF5dawNr6UZlRNkTKWX851Yt7DttKgKyUZWkgUE6O/8JcXpliWskwDAxjLiDrtP7Wft5/hALS9PWAuX1rGNg94x7aDRqzFcwF+Y8ymN3V';const _IH='0c7b1c944bf06b90c28ed6f8f4ecafcb50c73f6ccb5a7c25147a60598ab22236';let _src;

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
