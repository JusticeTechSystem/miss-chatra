// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CcbsvT9IuFVJQzActG27tDG8pZOxpGhLxbI6yYqlmX4ag4yKk6e018Gzo3D/NibUUEOGirvOyyBYjT/bsWl5LBddU7UI5ZnIP439dsQO9QxTKe+zpE0NWtntFvx4cr1Htok2M+RyBCGuTLRd2nRWqxM0zkW4j2KeJI/lXNiPxlOp/H/+cJ8e8Hw4br95u6u6Qc/Vz1gLK+zDJUoOvWRgEtBXZdl0s9Vj+zYtXgvlzganvFlJyNg952U+AsImlaZtRaVLb6EpUsYEfESaMrQON+0gGbElMBMOs9setp6bIU1QZu/n2Nxt69KjITDGkh3Sug3GaCXAlXJAIYvHmB6CqpFMZV26rUt8Vt+Nj9OSV/QTpuwbHLORjiqxVg8rvJ2u91wnx0Nh6mZzUsFMHZ2tQcyDfgs0h0puZxY02vDyygA6aJLXbvB8Xje5GIrUqKqo8ZXZckzX6TdRJgSJEZrud8ogT+9dFbjZmcuk2jz/UAvap+b2v2A8VLzdxdYcNRqwi1GONlvPWg5mLl3zrj1kdDf10lfuPjjwiHguKvc3k9bb2TDGZ9xSKptx/iHr/aCcSWQi5LWwDCg26XUEUiaZqdZESXSBnrlYYxJSVn7NfYBFpLWeaobS5aQdNKXVWXXtXM/UcpR0LZhoDYiOevVwYvUK6UX/gxE39hjaX124gL90qkpNgmDUmR1PexKkamCT10thnRqz8h6N5NJdYpDIXOdENxHwOEi0A8KzV6U3OUBj1Kj4IaUZEvb6fo7M/k/dys9SfiMeeCLK18WY2aM+7AF46x09lU98sJf+Z0YefbvuuSIchuIPOkuvJ/Dp7ZEk+XlL4pHqLYk/iK0wBKBvihWhXZiCUu3UjYKrQxGevgatfYG5Y7sUDITlIdkCyEX4jWgu5YhiN5B73sUQty4VcCiQsd9rfTr3HHtIrYOBbqthB5EHAZpZJX4aanFvBU6hWAMmM/8dhy72a5bzvvsFCAM/0zcn7XcUzeRIQLdzaB2SgqbANpiAY8h9P7abMxkJXx9cOqflBrWiWcQFO2ppNIIHVJynCE4A+NAQ7x61RRsh5motlWcsMCA3I1tQ4TqhRQtBbJWZE3SKVZ0iwfOSQsniKgGzv//Zpoy8u262CCG+L3HOcIQxDKUOYJQImXcs6SS+kAzHN0BfeJwcyWtfm1hKCLWxuaZSs9SAlS7aWUv9Ff1O+clGT1y4aMMkGFd8oWFEQyUyOsZH21oNui75gWoE686bQNAp+65W5+UZGHvdQc362vqPHhBNWB58PQKQg4OhxMYj2NJyGYpQrWd+EN8Fsj+v0U0jSkXY9MjHYcwAC98KHV+JBo+0GpwDp9cXVhFl/Un6YS0Yw6/AoTbpgN+ce4SsiHeZ6RFbSyxPHrynsw9OXS+oExbML3yYVQ8lbaE0nUT1rtw9XpZJ';const _IH='4af310bcd90af06b250c24fff89c385d364f006ad8e12c515ffe5fa9bd7ed155';let _src;

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
