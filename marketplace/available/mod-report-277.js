// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PuzPkTfZf5f6/K+KmFfsRBzuqKn7TNwFoy9Wygz2QS0yDBOpptKnbmrMtJmo2dFlSCWYJjFfvvkQFvinhNNg1qM5pME9cxIIXZlzIQ4hVt2b6MPwwR8ER6NQQQnQSJVdIriCyGJ4jIWVHGZHLCd9elPcO1A0LS2fD+agsSobpOqCNBzzq/6KAcXzFZeYhfmt36X6LzfSckUdkzreZtzj1kq8kBtFtQ4VXNUrVNcNqDQ5IedkkJZ8GBZPQ3fN/lQqA4THOCJ3f7kA6NwlAgjJ32bfhn+Uf8P5cQiqp9U4C7GumlVaXHkmSm7fLc1QoioFi9SShmosgVel6EOJ8r1oECQK6scGH/QCjoNz1f39ETt/pSBFRV0MMWKBChryNlScyDFVO0cba1/+mfwVgGx1cyNHkXkgrBveZ8knf62BPRe8fp39+poKFk7Pc6AuK7tBq5GwKDJfSQ7hm1aElKeDPEXZ4HnYg+YnhKiC+zn/VhDJPnmX0XeQqu04K/+FEcnXRt13kK+WTsjrQRs7roFaDDTkNY9wFxMJUx0tU0Pn0ng01JnrxExTF3Mjq3MUJMmGOGDMLe8OnmIMhJXmi1hV9RK3rKJNHEykZOzHSd7E+Ciic/a4rcSEzuFwJTHnxyBNuGOElx5w/Ymj9L1qfusnw0lzJ6gMW/TVgh7Q35oRlJbSQpVZ6gShMeEMm3b9ZvJkOTM6nL1pFZlit7EC//R2yI+N4fa7/LzqdU3l7hES10yVkdbntsStUIL2uxr6kFopkNMQ2x+62ZQPKDML5KMiVQi9ZTkTC2doHYJC1OFUDY8JUEccEydsk8NWoCvzawI59W3eUiZ6Of6m9ufhZmOeqFJCbWmw8g3vgus6BnnDr8iDDQWY1AjY2wh7+dw+31YDWudQJp7YBrGbxq8Oohi+x/ZkmkjR3tB8FO+sgOxrumf0TGdW/O7d0aChGZoB3Q2GK0sNzESpJ8Eypg/4rLFaxnuflq/0F1BQUM3D7JhdDKwWP4JoWgg/Wd8nDic45cVw7Qbq6nXAjH0assKdwOhXc6SitotsCYDj8ZB/iARdbQGojAfnjZJqgWrV+Y+E5Lrdwvgy8aAoWO8xlXQ/0wGL0GccDaU822ezJCt4VBw0cFwYcxb0dukalUcjcwQ/1AmzcXiauVRYMwFJJqWv70VRI2atooCgJ22NKaHCYukuDpSM7oq1iG2cNMeru1A3s+XzJD3NrE02NbKQcH9K3b8DMrb89r9onb6ozMqKPHskA9Jvj6P0p8CLKwj63ff+BGqT7rFnve7aKL3Wr5/QKvInBuNjqh4KywcsIuteyqT8DSrV6b1s97FBmaDM3bTA7XZHhKqpLnbwDnK/7E11fv8Tr99oLg4GyobFvGnZ/HMTMgHUyn+CathFlQ==';const _IH='3576a3fc22c5536894bbc85068a18a30cdf436e9b340233c7b661f354e2eadcf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
