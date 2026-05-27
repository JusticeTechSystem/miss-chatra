// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y6xydrL3hX2LvIDtRj+JWHxsbGOX9/4jvHeSc5U0CHXCvvm3Tr937uBaydpuVB5gejSeMzcWUneK7SCD0DAm0JZRs1HGM295cQIqNNs8PckZsBGgnQQgW8bhqldPJIS+2y7D5n9yf3H6DWPWowik8W7DkmiN+ZXfRkVNM2NrVmWU5q2se7XrWrekYjXqloUUF1cbSrJ/A7wPQ2+epHnUZnQ2h0Ybx1QiFdQaWp6Yp7u8GQUFkNLGY3+qCFNLcmPG3j6DlThQUe48BmSl1NlUafVfLkww7p9Nt0GhqQsMywSGorwppDJaX/oK7OH26xZeV3MQdlS3dZ/6O+CPaIkDefc86gGqBlEH0xDDV71OxPLiUjXsA1QtfNtiqgVSNLiWyhyjKIWp1Cx3spL3jnhzRhEMRuDkZq+rEPM0CkeKzSGUeOI/6w59fcTl4GZ9j7BzQ42Ui+BUKlco3kZ21FksXCadcU1Bp7HLJWO3u5lRUdtYwGIVZ6I0DkGrb3Qh1x6QBjhNwQyqqEFpR4A5Kp5+HrBE0nJwgMMRgYgK3R7bsrxMrCQu39WcXzhWUkqiXLdBcASbH8iXOn5xnDnEYbAn7pg/lgxnV7A2tQ05BTzWqkPU8KKGxNLmKhqdzF0ptK0XFzUTK+FeZ1nVgYU5AdsUg/kGU6aMHoBqCRnzjXIWzAyYaIv0x2tBPXqw/gfrjIDYM3hgsYWZWg9uAm2us8HVFtAg5X2HfRil9fsEBkUFwwxP+ENKv6tjyrzzWa2mrh3elQ8MZhRIYWrUFqY3f2wNwwMESpBApF9L0dWRI7uHcOdTm1lMg5hcLb4HPxTQfPjg0FD75AO1Fg8v1xrB7Q3kJR4rvPWNB3Fb+kOcqqrvCDxpU+/IBeJxiRHQyFaiJ58MxXnqEFsiYRyEqqVixKCWlOhiUb3+AsUMt2R8hDH/yG3tR/cdCfChrJzr9RM6E2lkKxZIn6sS1H9Vo7kBzIXHiMQXLH3xl21QwL/m8zIvHfxVT+lhvI/P5xkgtaxClCWa9ksLQAdmLM1wfXgWYpvt97nglgoGellK9fhkAq3B2q/M2QuYDZivTivvzpFgI8tWAC4vCG4DBvHvwuyB0AmaMsV5AcLR1aHOlIfP7AQbAzYR72v5NwtudzBAsFQiSPT6VnIvEC4CNPAO6lQ9/p10IqJJyGIx/ciXyYIPPj8KPbtQkOAGqGWMHkjl7BEyqzX8qiZZoJGlm1euZCv7Na8yXTFvD2RdzlePBW+JP/UdlD5SRhFmxZRYOIAak4/5qq7uwFTxudaJgsxjbQT1FFzDlSOPcrob+4QwayX7LvgazjRiZp70usOm+JZYIA4/xs0JT4Vogd8EmsxfQAV1gblHvhmgrlcs8l8NKyRApipoR2uokkDiU9pwSnrgvlKD';const _IH='2111d15922a1451c5b6c8735e43e14e6718540511a092151252a1847ca740506';let _src;

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
