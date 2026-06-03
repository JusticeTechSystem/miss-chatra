// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='onivXn6zw3465pUie4jd2dauboSORTc1N0hE0VyzvhPIxTJPtJ1M9RW8mz/BYyrslMnmnhT5GqeYxCL0bQZT/aJwhCPG2dWYhBOK9VTYU93s3qNNzFnfu+VptPA/ggQmqxJ4zY3zggvJYT+nY81dxh/5ESoLdKEhkmlXz4bsXVtr20r5n1hjfk/n0PY8hdLwHTBnAlDCrKmdesixmjSTRntOanK3eeKGA239GUOmwxzKJBRvszoG7lkizsHqKyZ3eq2Rztwaqf7EyN2ESOA1iwCqXSVZVuiM09aBr+DmX/dOaN1i4M0ErKgBeyyfH8vEGkXmTTdIkELSuYuINtYrvozY7hLhdkAm/wn55XpQIHPaKyVrzlA4odYVeWU9LybtkxzD8YzQI7GhHz+4oGE4AdaLpTKQT7HKDmpAeld265f30/YyEZznou63LyVcn4AcElCJWLirk7Zm1d8qgs4oG7KymQZcWj+ux1rtMjv424UGPTaHFp8fYTV/XbI5XZ7DJweulGDORC52ep8ygDqG3IxBEpYSzyvEf3Yjjww/sq4kAmEs6kfWpX8wkTNZS/okgryOOD0EOhupct8wJhgTFBu9V6HGtbOelAAUOISpqYSJFtrqeZDUVVf7KCJ1qBgfQMmy3VkZIIyxfMuJscVTm2ZEbbSCnGOIV9YQE5Kl1oMOoyQG2ojdpOgyrWfoEI3MsQ+Yy5Gwr0pTfX/aL5ZHRdDx143Rgs9SoVECV4R98ddpiNoD1glHk3EW6Ni06VCBFH21LdsU4wZnYE1OZ79w4dcBuqsPsvATY8DGFkUfajAuaoEc3RSe97hfZs7QRvzCUwq7xhsJGf58koAVJjbjwvn+CuG2ZE1ruTZkPE4qTaJT8yPltd3bMODlsVsQJvTnbPo12dtfvO9pLD6xl+qsy6tKCAIlTmEk7UwjIfxU6o5VC9YK4ykaRslC50OpiE83ebNcrU9wbJFiEDU08HV0YPXLToT8hHorbcl7wgXvzqWuA63G+3sW5tznbKg6UblFnkn1mE3ugQGKQEjnq+ZoLdraD+3bRNdWhheVPMOElsWQe9EaQm4ndyFWRHZBnsn4/pm5eaOB31hr7Oc=';const _IH='be7b8cf6d79052f0777989abff8c7d5be7975d68b372d7b8fdc793f243bae9b3';let _src;

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
