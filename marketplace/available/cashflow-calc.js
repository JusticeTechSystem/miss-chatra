// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vFJTyxsKLDz7GPuMux37QZ99mLD8FOYCQHU0M2oC2qCCtdjeB2iwNgcVbGTsbign7xhc/RW3UshOtAjhSJzVlTenuH9mDA54l82cWRaMl/svizH2bvYzWObywiGZu/JnBuSu5obQSt6hhnsQkY/uCjemoYWoZJBbXZS992unYdFKr9I44QQsoc6JU6g3ysv2WifbvqH9fxo7+540nKpNcbOVnjD30vudZc7vx7n30J9f/0QGRaGgo5PFnptvUrQrBUVcU5bj0+NnP/qX6FyN1+03h8MhneP043jp2qfEkXLCJXZbNaJCuckMLDjEHTXk6xgkJNerUjPS+DmpKpA5CuXtNE41VNtQwKE3+04nL28d/UQHOcLVe4jPqqlMH4U39r/m8nl8qVn2x0QSKv3ww886SXB/IE8uReRAeA2MdRTaBiQUtSGbMYgSwoTRuT4xCvnIqGri1lw3maUv7biGxuUCVyEi4zrNUwBLtRPbaTZnpwtGT+0g6GQ7C6x1/HtuQ6u7ED7AWhbS5mOChmbMv5a3+TmSDMHMMQi6qVPYJsLzsXmdeJYiY1MEQsxoCCPZGmm7gOi4PiO2hankrWcBQHycyXoNDMJOlIZTLGxupxDQWYxJfuAX+YHP8vV8lml5CoJcT5Eb5XmeH2FUqm3VzIlwS2g16+N6hMd7tT0vq2ucFze6cUtJX6FoDr9siD+iTIFf3OsJXLkMHhC6netPHXmduiGs/16AO0mS9nk04r03jdr9GaXoqULuuj4CCJiveEDy0CsTFlLdM9VR6QB2bGoba1BvNzBvwXHVfWiwHiPWK+ScCcNy7eG1v/1dqpsakVkSX0mcTEw6cz6J+dYLPy4KMft4pIABO41bdenFhHdAgIbAG0rOyD0fgMx7R07f8O46k5HygtYq/k8W7Bk+JykUoa8CF2XEbbSskl0gAazZJj1efdNcDQ8VrzzvKoEuIwqgeV6kvxlH4iO0aUepEsjmTqJbB5ppYta6KEk0PFAu4CATEc11o+E1SJIaW4GxNTIZ5GFyiKSj+L4q5PQbBr5G9UcuJLdg8RUDEdPxcqCpJNtMBLLLNbdDow/9SwycAwW4CQehp5mSnAFv1jbvBWhLMJax8i35pu4mrHh9SU30UUyM3iXPTyyme3MYC1aTNk3CBROd6hK2BaRVCZPPXzYXGYXXYXnKVAwLkOSSB4CQtFaxewqyzHW2Z4h/YHHXxN+h0qgtp9hj1rk3zMtOgVlUM7Iw+lGsmoPMr9MiI1//KE3gUbGGf6xgM1YzJm75P2W6M/tVw8jsoybS82chJ8ITTWECwqQHZfG3vIAsepsVfFEmklaz9qC+cODkkmOB';const _IH='cb25e24371a11ecbbe37fb8111789d01f0a3ef756e2543549a91e5e6ff75a750';let _src;

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
