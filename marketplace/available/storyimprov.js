// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9nygrDaOSlA1UekKhfVcGtJkRxrGDAAF3NOh8LMUM7Aw0NNSWgoRjm6qBupNXqIuZaTUsRszz4nCLJoLiEZbD3OKkODCAUcsKD4af7FAchUASAjQzMF7KRDQcDb/35BBNQrJ/JE5VYA6XdBAAhNeuHs0BQMZzglx81WU96H5QOhF8sOVCFD/lmGY+O63FMBPURILvfro7L+2vJqBxyLFnhvkzAfWDYLapk1nxXOpblrW02LxbVDW6sOQJ609qczhKJpc3buv5CZnJOSdIJ7cvu+eRbb8GHu+WfBAyr/570OPmyGCQjH67odtniIF+fmBk1x3bkEo/95cXYaiY0EKWphXnUouSf9cOD6YkJgBj0UIdIbc2/hrzrKw8aHpXXKSA9CuEuKfbmQmMYHEaNIWcur6wiPpdY3vGJ/1zMS66k/zSjybGxu6RKLZ3SPi4INvJpWtOfQ6zAQczdBxNHwmew7dL4Qd/EsHbe1tM46UgmDlCxUEgVlsuSBFSPzjaVkzz0K6vQXIiJK7BgFDvHwkFqWRlWGOD4zdrBfM38cqTE1KbYjM7wrcOQ84g9jO72DtveyB5kCSX8ByA3QDJR6LRwTjDD2Z68MyRFqz5BnKUNYypn/SCtPVl5VSzXnWUMO3/WqxMG7+ap2xj4XgNe1Gjnhdwh2P5BNxMmgTtv57jsy2cp9c8Il/VL3hXXaujPdteP5BDpxaqB31IxEyBo13uluyLXfQfiLJIif0X0DigMhiT7J5zkc4d4DXH3/dnuWuzI/rkJwiiH53/JuPgKq5sBT0lKWet+9TFmHErGQiNYNef1DfDdZKcEthkmsA6vABQaGk1jy6hqoHcYVzOVax9sitlOIYYPzlCW4tuNHyDgfLu3t9IYTb2gLjNX4aRXxMvAA7VqY8BCLdCZTWngjyUcfjzgYqD/Ati80Vu48+1EEmU3bMSN4r41TAEfXDctYPYfGjMcLmfe6ncOCC1uZV6znOX1XbQLItG39Wqbo306B+ehMMagnZXLXaMx/NZd6mw+equ75j/VsTN8ZGKFMjUZXa6l1vlGVAynkxPKg3ZurVHKcN1Db7nrW7aW0xwQ1kZ4+MEsfXMZ30v2U9AYTqVJqVKULQRFhOM7drPxtLnlJU+3pOnfsu0UAx6VmWguckfPmpOWiiHukg/1iuHpErB46jM2Z1sotXRMKmsLLWRYvL/KGUS34Lriz2z5s6s65l+NB4';const _IH='4dcc8c2aa4958c0335a7042c48d3161f8bce3997ff99dacb5d57a6cc055eac1a';let _src;

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
