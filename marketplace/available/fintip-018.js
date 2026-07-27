// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSLr4JN2Pekqrt3uNY5hmlLbWHjtDGYkxeUEB8UxYFgISQLcvC3FkpT/1eoadq3kGrGWNdoBqBI3UxFXyRyN7e3+GgtXgJbW32mJZNp7aDoBEpDnmQgR2RNrcNXPYQjMDvuxlM1QPYgU2uJCFd5d8Ltes8u+ZoCHKQnF6duyzNuCzXzZwzGuLTXtaAN3xVms49HBpcJ6ZoAjv369JPlE58z1v0Rp+bLcw5ODqMpaVPlfqq5PIY+hUWQ8mLKttz0pGUe0sVEfAnUwU9JTjEsU8YH6aCx7iYzRAELs5FIqQLbnzOOc0avDUJoaKUdWTavckWXobjvd3nMiSSzimQLocxV+StS/vQcfKQSL3lKgYth59DelRGQ+XZ7Q6ij3U2Kli4bxb3XLe6p6cMty9OnFwSKn1tF+MN2N61pJRm6EJCBTr143XHFbUT6EYhTTJtmnrW2nrNUNd5+Pp3b18zKxfQDEa7OfCRRwUgvqAZZ4qZVGktLUSANVL/8xD8yB7h7EkG2e2uNQbaQ6wJg91BjmMW8iizkrAlXcNCCVcSobdYYBv7UinOjI0rcTi1ZYzeHjkFfUiCrme36sp/i+S/EG406vEAPEPXpb4cY9QWedeEYWNV9trKWros5U+j4W1bIOKajqsXLaXDt5Yf51BdzYZ51ybmawYEWb2f+kL4LTR0P1wb1ingSSARAQQuWfQy6DHbN9pIFiElORkC8wSuCO/R1Fpn3DqdSOZKCvRF1y8YBe3uhz7PPL9x8rYAGsGJD9VNZZrWjAf8txAA0469q35ByIVG26PHsZn0nKMmPKhya8/C/ljeat3EvGvETMbJ8pN4HbXA+9rSWzJ/c6KfUQHJd1FyQC4y55O2ZIcnrVKgEseJ47se5Y8TJLjZT/SK4KQzr2/AYCiJZkNC7X0Zv+6QsVqvQ3j1jRZuVqtaJ6kqW9iNUoKE+2aEUm/zN3ZFRCmtEflaOwSG5YS3Al6QfSytAAM2Mz4LceC3WK/9bDlMavCf+RKkp1xT3gagUlItM3PopLWYLttXqYW/lP0yfzWOhzlw/HHd6dToLHz8xrNQdIGBk';const _IH='95a5b27c2982f8e9822e0c3c514f6a3009abb8ec6efe4ad119ca2bfad6a2c497';let _src;

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
