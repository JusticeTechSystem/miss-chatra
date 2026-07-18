// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQIwyX9A8QujnM4JWHQfPa0JaIQmw2Pw/hJd4BGHaQBjYf0axB/CdxNFJ84r8Kxpt/Np9odSMx7R/Acvvdi4stf3hckOwjAeh/vVvC+xwtlC4UJmYMCThM3q3tnrR2m6Jn33lGOpOE4Ffa3IMOc57KNHA+fcJwqZqVCzHU2GaD4KrgD4UMYQDIhBHEcDepaQ86IEaduhLk7Xnl6pjD906JxsDU0Bhlt5X3N+R7NJeFybDqyoIpyDT4niBRLL8wECAFc/RVvLju5Ft/w5NGzvCFLDouG0+uRTquNAQc6j+4LugK+JA8cNO9L5jc6YGg0hIUgv8ot8e6M/4ql8CuX1c39zTBOLMpuP4+Ms98ASEHJKulEk1qHECwdWc5jMGQhZ+ofXsLCs2O8S1r8mfNY9TARBJ0Heyf978AJ1LRiwucjYUTZnm7zMSIzQwc6HQAf4hqemRe7oW3Wcr+MPsH7yCeozzN1kOax3pCra+8Wu/A+CvmjzF1BEmJJt6pnf6WasjeMwcl11gRvDdq0/es4OzFRB7uB+wIJlkE1mjV6N2M+Hw7BFZ1qhil2Ui1rZSLm9c1bfLfnTXDwHIWc76kCvMn/vmF/kGwrmqMNvkQ4KfWXvLIdrONlkfj5oosFUFmck7rtGpc06do2LGLePvomV5Y2Kyg7KFTsVkpq2hniY9523mbRPPIcjuni3KMB4lAZXKLYT19Gdu4GDv27d92816lxAvTCsFTXN1n1FO9ZVHO2SDzEokaZ6oxvgF4moJvubT+fwX57pYLEXZ9kGtuhCUKwHaD+2rNyxIUNbBezBsizmLRX2S2EVHKmURYGqOH9S2+gIcAmO5DMnTxN4Z9+85wG29A6/j5TtnF0Uw1HKkRk9tO+/LKZqAH/iPXF5HeS3moA4tPt3LrTvcU4Fs7/jQrbO4Uk3AFKsHe+/wdg6kMPib7F/dV+DErGFMDpuAq8tLQ0/9XcsQa4AsXpD/fCOutHXMToWsCOL6W7U0ycPsVP+uw8rbKQTmWREyx1/wTvuBPxnkoAkHGZNvoffAWo+sT6ooGKJE6s/ua7LhHmqb1Z2Vbh00v7AOpeY+yr8Ys/cG/zeHZC1hmhqkt+jdJfddZjG4FKjKUsqgtk/9cOM/qu40LOeAtRKD+MFdetL72F7k0kgfdiiVXRKoTaj+z7NZxpLT1/Y/aBoW0PQRLl0h9YpImVILWJjg4bJVdPHV4tU9yXIEF2+UvjJacBOLwEP+k7OZS93wmQ0HoCb50uxt6Hc+pZRBUj1JUHAthWwOQ0gIQ940aEMLa2euDtX3qOBI7rWRapvjolgVxVcbXeKe/a4wRpjA+8pXmZO2Os1Wtyj9VkdFYMjP06fewNcRTVYNBDi7vW9zBIVZKc8VQiZLlSAryZBjXKJ/xB';const _IH='d8a39130fb6f6f182d1c740901f333a260e038738a6b8803f8073edac24e0b50';let _src;

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
